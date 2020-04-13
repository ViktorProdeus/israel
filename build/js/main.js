'use strict';

(function () {
  var userPhoneInput = document.querySelector('.want input');

  if (userPhoneInput) {
    window.imaskJS(userPhoneInput, {mask: '+{7}(000)000-00-00'});
  }

})();

'use strict';

(function () {

  var mouseButton = document.querySelector('.intro__button');

  var aboutBlock = document.querySelector('.about');

  var moveTo = new window.MoveTo();

  if (mouseButton) {
    mouseButton.addEventListener('click', function () {
      moveTo.move(aboutBlock);
    });
  }

})();

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

'use strict';

(function () {
  var form = document.querySelector('.want form');
  var phoneInput = document.querySelector('.want input');

  var submitBtn = document.querySelector('.want__submit');

  phoneInput.addEventListener('focus', function (evt) {
    removeStyle(evt);
    phoneInput.classList.add('active');
  });

  var phoneInputSuccesHandler = function () {
    if (phoneInput.value.length === 16) {
      phoneInput.classList.add('correct');
    }
  };

  phoneInput.addEventListener('input', phoneInputSuccesHandler);

  phoneInput.addEventListener('blur', function (evt) {
    removeStyle(evt);
    phoneInput.classList.remove('active');
  });

  var removeStyle = function (evt) {
    evt.target.classList.remove('error');
  };

  var phoneInputChangeHandler = function (evt) {
    removeStyle(evt);
  };

  var addInputListener = function () {
    phoneInput.addEventListener('input', phoneInputChangeHandler);
  };

  var removeInputListener = function () {
    phoneInput.removeEventListener('input', phoneInputChangeHandler);
  };

  var checkPhoneInputValidity = function () {
    var flag = true;
    if (phoneInput.value === '' || phoneInput.value.length < 16) {
      flag = false;
    }
    return flag;
  };

  var checkInputsValidity = function () {
    if (!checkPhoneInputValidity()) {
      phoneInput.classList.add('error');
    }
  };

  submitBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    checkInputsValidity();
    addInputListener();

    if (checkPhoneInputValidity()) {
      removeInputListener();

      setTimeout(function () {
        form.reset();
        phoneInput.classList.remove('correct');
      }, 500);
    }
  });

})();
