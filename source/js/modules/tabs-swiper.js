'use strict';

(function () {

  var tabsContainer = document.querySelector('.programs__list-wrapper');


  var breakpoint = window.matchMedia('(min-width:768px)');
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

    if (tabsContainer) {
      mySwiper = new window.Swiper(tabsContainer, {

        slidesPerView: 'auto',
        freeMode: true,

        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true
        },

      });
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();


})();

(function () {

  var tabs = document.querySelectorAll('.programs__item-tab');
  var activeTab = 'programs__item-tab--active';
  var itemsContent = document.querySelectorAll('.programs__item-content');
  var activeClass = 'programs__item-content--active';


  var removeClass = function (elem, className) {
    Array.prototype.forEach.call(elem, function (i) {
      i.classList.remove(className);
    });
  };

  Array.prototype.forEach.call(tabs, function (tab, i) {
    tab.addEventListener('click', function (evt) {
      evt.preventDefault();

      if (tabs) {
        removeClass(tabs, activeTab);
        tab.classList.add(activeTab);
      }

      if (itemsContent) {
        removeClass(itemsContent, activeClass);
        itemsContent[i].classList.add(activeClass);
      }
    });
  });

})();
