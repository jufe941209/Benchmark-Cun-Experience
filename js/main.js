/**
 * Benchmark CUN Experience 2026
 * Modal para ampliar imágenes de la tabla comparativa
 */
(function () {
  var modal = document.getElementById('imgModal');
  var modalImg = document.getElementById('imgModalImg');
  var modalClose = document.getElementById('imgModalClose');

  function openImgModal(img) {
    if (!img || !img.src) return;
    modal.classList.add('active');
    modalImg.src = img.src;
    modalImg.alt = img.alt || 'Vista ampliada';
    document.body.style.overflow = 'hidden';
  }

  function closeImgModal() {
    modal.classList.remove('active');
    modalImg.src = '';
    document.body.style.overflow = '';
  }

  // Delegación: clic en cualquier imagen de la tabla con clase cell-img
  document.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('cell-img') && e.target.src) {
      e.preventDefault();
      openImgModal(e.target);
    }
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeImgModal);
  }
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeImgModal();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeImgModal();
    }
  });

  // Exponer globalmente para uso con onclick si se prefiere
  window.openImgModal = openImgModal;
})();
