(function () {
  var images = document.querySelectorAll('.photo-grid img');
  if (!images.length) return;

  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML =
    '<button class="lightbox-close" aria-label="Close">&times;</button>' +
    '<img class="lightbox-image" alt="">';
  document.body.appendChild(overlay);

  var lightboxImage = overlay.querySelector('.lightbox-image');
  var closeButton = overlay.querySelector('.lightbox-close');

  function open(img) {
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    overlay.classList.add('open');
    document.body.classList.add('lightbox-locked');
  }

  function close() {
    overlay.classList.remove('open');
    document.body.classList.remove('lightbox-locked');
    lightboxImage.src = '';
  }

  images.forEach(function (img) {
    img.classList.add('lightbox-trigger');
    img.addEventListener('click', function () {
      open(img);
    });
  });

  overlay.addEventListener('click', function (event) {
    if (event.target === closeButton || event.target === overlay) close();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && overlay.classList.contains('open')) close();
  });
})();
