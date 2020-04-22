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

        pagination: {
          el: '.izrael__pagination',
          clickable: true,
        },

        breakpoints: {
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },

          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          }
        }

      });
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();


})();
