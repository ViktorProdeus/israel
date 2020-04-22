'use strict';

(function () {

  var izraelSlider = document.querySelector('.izrael__slider');


  var breakpoint = window.matchMedia('(min-width:1024px)');
  var mySwiper;

  var breakpointChecker = function () {

    if (breakpoint.matches === true) {

      if (mySwiper) {
        mySwiper.destroy(true, true);
      }

      return;

    } else if (breakpoint.matches === false) {

      enableSwiper();
    }
  };


  var enableSwiper = function () {

    if (izraelSlider) {
      mySwiper = new window.Swiper(izraelSlider, {

        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 40,
        centeredSlides: true,

        pagination: {
          el: '.izrael__pagination',
          clickable: true,
        },

        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 30
          },

          768: {
            slidesPerView: 'auto',
            spaceBetween: 40,
          }
        }

      });
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();


})();
