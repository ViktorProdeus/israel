'use strict';

var reviewsSlider = document.querySelector('.reviews__slider');

if (reviewsSlider) {

  reviewsSlider = new window.Swiper(reviewsSlider, {
    loop: true,
    autoHeight: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

}
