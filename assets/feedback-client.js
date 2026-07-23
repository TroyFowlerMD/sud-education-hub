(function () {
  'use strict';

  var API_URL = 'https://all-website-feedback.vercel.app/api/feedback';
  var ACCEPTED_TYPES = ['image/png', 'image/jpeg', 'image/webp'];
  var MAX_ATTACHMENTS = 3;
  var MAX_ATTACHMENT_BYTES = 1500000;

  function injectStyles() {
    if (document.getElementById('sud-feedback-client-styles')) return;
    var style = document.createElement('style');
    style.id = 'sud-feedback-client-styles';
    style.textContent = [
      '.sud-feedback-help{margin:0 0 1rem;color:var(--text-muted,#a8afbf);font-size:.84rem;line-height:1.45}',
      '.sud-feedback-form{display:grid;gap:.85rem}',
      '.sud-feedback-field{display:grid;gap:.35rem}',
      '.sud-feedback-field label{font-size:.78rem;font-weight:600;color:var(--text-muted,#a8afbf)}',
      '.sud-feedback-field input,.sud-feedback-field textarea{width:100%;box-sizing:border-box;padding:.7rem .8rem;border:1px solid var(--border,#2d3248);border-radius:8px;background:var(--surface-2,#131621);color:var(--text,#e4e4e7);font:inherit}',
      '.sud-feedback-field textarea{min-height:7rem;resize:vertical}',
      '.sud-feedback-attach{padding:.75rem;border:1px dashed var(--border,#2d3248);border-radius:8px}',
      '.sud-feedback-attach-row{display:flex;align-items:center;gap:.65rem;flex-wrap:wrap}',
      '.sud-feedback-attach button,.sud-feedback-submit{cursor:pointer;border:1px solid var(--border,#2d3248);border-radius:8px;padding:.6rem .85rem;background:var(--surface-2,#131621);color:var(--text,#e4e4e7);font:inherit;font-weight:600}',
      '.sud-feedback-submit{justify-self:start;background:var(--cat2,#5b8cff);border-color:var(--cat2,#5b8cff);color:#fff}',
      '.sud-feedback-submit:disabled{opacity:.65;cursor:wait}',
      '.sud-feedback-hint,.sud-feedback-status{font-size:.76rem;color:var(--text-muted,#a8afbf);line-height:1.4}',
      '.sud-feedback-list{display:grid;gap:.5rem;margin-top:.65rem}',
      '.sud-feedback-item{display:grid;grid-template-columns:40px minmax(0,1fr) auto;align-items:center;gap:.55rem;padding:.4rem;border:1px solid var(--border,#2d3248);border-radius:7px}',
      '.sud-feedback-item img{width:40px;height:40px;object-fit:cover;border-radius:5px}',
      '.sud-feedback-item span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.78rem}',
      '.sud-feedback-remove{border:0!important;padding:.2rem!important;background:transparent!important;color:#ff8c8c!important;font-size:.75rem!important}',
      '.sud-feedback-message{display:none;margin:0;padding:.7rem .8rem;border-radius:8px;font-size:.84rem;line-height:1.4}',
      '.sud-feedback-message.visible{display:block}',
      '.sud-feedback-message.success{background:rgba(107,203,119,.12);border:1px solid #6bcb77;color:#c9f2d0}',
      '.sud-feedback-message.warning{background:rgba(255,193,7,.12);border:1px solid #e0ad00;color:#ffe9a1}',
      '.sud-feedback-message.error{background:rgba(255,107,107,.12);border:1px solid #ff6b6b;color:#ffd0d0}'
    ].join('');
    document.head.appendChild(style);
  }

  function submissionId() {
    return 'sud-' + Date.now() + '-' + Math.random().toString(16).slice(2);
  }

  function dataUrl(file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.onload = function () { resolve(String(reader.result || '')); };
      reader.onerror = function () { reject(new Error('read_failed')); };
      reader.readAsDataURL(file);
    });
  }

  function compress(file) {
    return new Promise(function (resolve, reject) {
      var url = URL.createObjectURL(file);
      var image = new Image();
      image.onload = function () {
        try {
          var scale = Math.min(1, 1600 / Math.max(image.width, image.height));
          var canvas = document.createElement('canvas');
          canvas.width = Math.max(1, Math.round(image.width * scale));
          canvas.height = Math.max(1, Math.round(image.height * scale));
          canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
          canvas.toBlob(function (blob) {
            URL.revokeObjectURL(url);
            if (!blob) return reject(new Error('compress_failed'));
            resolve(new File([blob], (file.name || 'screenshot').replace(/\.[^.]+$/, '') + '.jpg', { type: 'image/jpeg' }));
          }, 'image/jpeg', 0.82);
        } catch (error) {
          URL.revokeObjectURL(url);
          reject(error);
        }
      };
      image.onerror = function () {
        URL.revokeObjectURL(url);
        reject(new Error('invalid_image'));
      };
      image.src = url;
    });
  }

  async function prepareAttachment(file) {
    if (!file || ACCEPTED_TYPES.indexOf(file.type) === -1) throw new Error('unsupported_type');
    var prepared = file;
    if (prepared.size > MAX_ATTACHMENT_BYTES) prepared = await compress(prepared);
    if (prepared.size > MAX_ATTACHMENT_BYTES) throw new Error('too_large');
    var source = await dataUrl(prepared);
    return {
      name: prepared.name || 'screenshot',
      type: prepared.type,
      data: source.split(',')[1] || ''
    };
  }

  function initFeedback(box) {
    var topic = box.getAttribute('data-feedback-area') || 'general';
    var id = 'sud-feedback-' + topic.replace(/[^a-z0-9]+/gi, '-').toLowerCase();
    var attachments = [];
    box.innerHTML = [
      '<h2>Feedback / IT Request</h2>',
      '<p class="sud-feedback-help">Report an issue, request a change, or share a correction. Add up to three screenshots. Do not include patient details or passwords.</p>',
      '<form class="sud-feedback-form" novalidate>',
      '<div class="sud-feedback-field"><label for="' + id + '-name">Name</label><input id="' + id + '-name" name="name" autocomplete="name" required></div>',
      '<input name="company" autocomplete="off" tabindex="-1" aria-hidden="true" style="position:absolute;left:-9999px">',
      '<div class="sud-feedback-field"><label for="' + id + '-message">Request / Comment</label><textarea id="' + id + '-message" name="message" required placeholder="Describe the issue or requested change. You can paste a screenshot here."></textarea></div>',
      '<div class="sud-feedback-attach"><div class="sud-feedback-attach-row"><button type="button" class="sud-feedback-add">Add screenshots</button><span class="sud-feedback-hint">PNG, JPG, or WebP</span></div><input class="sud-feedback-files" type="file" accept="image/png,image/jpeg,image/webp" multiple hidden><div class="sud-feedback-list"></div><div class="sud-feedback-status" aria-live="polite">No screenshots added.</div></div>',
      '<p class="sud-feedback-message" role="status" aria-live="polite"></p>',
      '<button class="sud-feedback-submit" type="submit">Send</button>',
      '</form>'
    ].join('');

    var form = box.querySelector('form');
    var name = box.querySelector('[name="name"]');
    var message = box.querySelector('[name="message"]');
    var company = box.querySelector('[name="company"]');
    var files = box.querySelector('.sud-feedback-files');
    var list = box.querySelector('.sud-feedback-list');
    var status = box.querySelector('.sud-feedback-status');
    var notice = box.querySelector('.sud-feedback-message');
    var submit = box.querySelector('.sud-feedback-submit');

    function show(kind, text) {
      notice.className = 'sud-feedback-message visible ' + kind;
      notice.textContent = text;
    }

    function renderAttachments() {
      list.innerHTML = '';
      attachments.forEach(function (attachment, index) {
        var row = document.createElement('div');
        row.className = 'sud-feedback-item';
        var image = document.createElement('img');
        image.src = 'data:' + attachment.type + ';base64,' + attachment.data;
        image.alt = 'Screenshot ' + (index + 1);
        var label = document.createElement('span');
        label.textContent = attachment.name;
        var remove = document.createElement('button');
        remove.type = 'button';
        remove.className = 'sud-feedback-remove';
        remove.textContent = 'Remove';
        remove.onclick = function () {
          attachments.splice(index, 1);
          renderAttachments();
        };
        row.append(image, label, remove);
        list.appendChild(row);
      });
      status.textContent = attachments.length ? attachments.length + ' screenshot' + (attachments.length === 1 ? '' : 's') + ' ready to send.' : 'No screenshots added.';
    }

    async function addFiles(selected) {
      for (var i = 0; i < selected.length; i += 1) {
        if (attachments.length >= MAX_ATTACHMENTS) {
          show('error', 'You can add up to 3 screenshots.');
          break;
        }
        try {
          attachments.push(await prepareAttachment(selected[i]));
        } catch (error) {
          show('error', error.message === 'unsupported_type' ? 'Use a PNG, JPG, or WebP image.' : 'That screenshot is too large to attach.');
        }
      }
      renderAttachments();
    }

    box.querySelector('.sud-feedback-add').addEventListener('click', function () { files.click(); });
    files.addEventListener('change', function () {
      addFiles(Array.prototype.slice.call(files.files || []));
      files.value = '';
    });
    message.addEventListener('paste', function (event) {
      var pasted = event.clipboardData && event.clipboardData.files;
      if (pasted && pasted.length) addFiles(Array.prototype.slice.call(pasted));
    });
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var nameValue = name.value.trim();
      var messageValue = message.value.trim();
      if (!nameValue || !messageValue) {
        show('error', 'Please add your name and feedback / IT request.');
        return;
      }
      var originalText = submit.textContent;
      submit.disabled = true;
      submit.textContent = 'Sending…';
      notice.className = 'sud-feedback-message';
      fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          appId: 'sud-education-hub',
          name: nameValue,
          message: messageValue,
          company: company.value.trim(),
          attachments: attachments,
          area: topic,
          pageTitle: document.title || '',
          pageUrl: window.location.href,
          source: 'sud-feedback-client',
          userAgent: navigator.userAgent || '',
          submissionId: submissionId()
        })
      }).then(function (response) {
        return response.text().then(function (text) {
          var result = text ? JSON.parse(text) : {};
          if (!response.ok || result.ok === false) throw new Error(result.error || 'feedback_submit_failed');
          return result;
        });
      }).then(function (result) {
        form.reset();
        attachments.length = 0;
        renderAttachments();
        show(result.attachmentWarning ? 'warning' : 'success', result.attachmentWarning ? 'Your request was submitted, but a screenshot could not be attached. Your message was preserved.' : 'Thanks — your feedback / IT request was submitted.');
      }).catch(function () {
        show('error', 'Sorry — the request could not be submitted right now. Please try again in a moment. Your message and screenshots are still here.');
      }).finally(function () {
        submit.disabled = false;
        submit.textContent = originalText;
      });
    });
  }

  function start() {
    injectStyles();
    Array.prototype.forEach.call(document.querySelectorAll('[data-troymd-feedback]'), initFeedback);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
