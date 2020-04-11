'use strict';

(function () {

  var tabsContainer = document.querySelector('.programs__list-wrapper');
  var tabsWrapper = document.querySelector('.programs__list-tabs');
  var tabsSlide = document.querySelector('.programs__item-tab');

  var removeClass = function (elem, className) {
    elem.classList.remove(className);
  };

  var addClass = function (elem, className) {
    elem.classList.add(className);
  };

  var setServicesSlider = function () {
    var breakpoint = window.matchMedia('(min-width:768px)');
    var categoriesSlider;

    var breakpointChecker = function () {
      if (breakpoint.matches === true) {
        if (categoriesSlider) {
          categoriesSlider.destroy(true, true);
          removeClass(tabsContainer, 'swiper-container');
          removeClass(tabsWrapper, 'swiper-wrapper');
          removeClass(tabsSlide, 'swiper-slide');
        }
        return;
      } else if (breakpoint.matches === false) {
        addClass(tabsContainer, 'swiper-container');
        addClass(tabsWrapper, 'swiper-wrapper');
        addClass(tabsSlide, 'swiper-slide');
        enableSwiper();
      }
    };

    var enableSwiper = function () {
      categoriesSlider = new window.Swiper(tabsContainer, {

        centeredSlides: true,
        slidesPerView: 'auto',
        freeMode: true,

        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true
        },
      });
    };

    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
  };

  if (tabsContainer) {
    setServicesSlider();
  }


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
