const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  slidesPerView: 6,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.channel1-button-next',
    prevEl: '.channel1-button-prev',
  },
});

const swiper2 = new Swiper('.channel-slider2', {
  // Optional parameters
  slidesPerView: 3,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.channel2-button-next',
    prevEl: '.channel2-button-prev',
  },
});

const swiper3 = new Swiper('.channel-slider3', {
  // Optional parameters
  slidesPerView: 6,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.channel3-button-next',
    prevEl: '.channel3-button-prev',
  },
});
