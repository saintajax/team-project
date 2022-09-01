document.addEventListener('DOMContentLoaded', function () {
  const modalButtons = document.querySelectorAll('.js-open-modal'),
    overlay = document.querySelector('.js-overlay-modal'),
    closeButtons = document.querySelectorAll('.js-modal-close'),
    bodyscroll = document.querySelector('.data-body');

  modalButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      const modalId = this.getAttribute('data-modal'),
        modalElem = document.querySelector(
          '.modal[data-modal="' + modalId + '"]'
        );
      modalElem.classList.add('active');
      overlay.classList.add('active');
      bodyscroll.classList.add('lock');
    });
  });

  closeButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {

      document.querySelector('.modal.active').classList.remove('active');
      overlay.classList.remove('active');
      document.querySelector('.data-body').classList.remove('lock');
    });
  });
  overlay.addEventListener('click', function () {
    document.querySelector('.modal.active').classList.remove('active');
    this.classList.remove('active');
    document.querySelector('.data-body').classList.remove('lock');
  });
});
