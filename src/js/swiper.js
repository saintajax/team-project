new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

new Swiper('.swiper1', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
  },

  loop: true,

  effect: 'fade',
});
