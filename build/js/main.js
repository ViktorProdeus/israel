'use strict';

(function () {
  var userPhoneBlockWant = document.querySelector('.want input');

  var userPhoneBlockPopup = document.querySelector('.popup__phone input');

  if (userPhoneBlockWant) {
    window.imaskJS(userPhoneBlockWant, {mask: '+{7}(000)000-00-00'});
  }

  if (userPhoneBlockPopup) {
    window.imaskJS(userPhoneBlockPopup, {mask: '+{7}(000)000-00-00'});
  }

})();

'use strict';

(function () {

  var body = document.querySelector('body');
  var popupOrder = document.querySelector('.popup--order');
  window.popupSuccess = document.querySelector('.popup--success');
  var buttonsOrder = document.querySelectorAll('.open-order-js');
  var buttonsSuccess = document.querySelectorAll('.open-success-js');
  var buttonsClose = document.querySelectorAll('.popup__close');

  var getScrollbarWidth = function () {
    var outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    outer.style.msOverflowStyle = 'scrollbar';
    body.appendChild(outer);
    var inner = document.createElement('div');
    outer.appendChild(inner);
    var scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
    outer.parentNode.removeChild(outer);
    return scrollbarWidth;
  };

  window.disableScrolling = function () {
    var scrollWidth = getScrollbarWidth();
    body.setAttribute('style', 'padding-right: ' + scrollWidth + 'px;');
    body.classList.add('body-fixed');
  };

  window.enableScrolling = function () {
    body.removeAttribute('style');
    body.classList.remove('body-fixed');
  };

  window.showElement = function (buttons, popup) {
    Array.prototype.forEach.call(buttons, function (i) {
      i.addEventListener('click', function (evt) {
        evt.preventDefault();

        window.disableScrolling();

        popup.classList.add('popup--show');
      })
    });
  };

  window.hideElement = function (buttons, popup) {
    Array.prototype.forEach.call(buttons, function (i) {
      i.addEventListener('click', function (evt) {
        evt.preventDefault();

        window.enableScrolling();

        popup.classList.remove('popup--show');
      })
    });
  };

  if (popupOrder) {
    window.showElement(buttonsOrder, popupOrder);
    window.hideElement(buttonsClose, popupOrder);
  }

  if (window.popupSuccess) {
    window.hideElement(buttonsClose, window.popupSuccess);
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

  var forms = document.querySelectorAll('.form-js form');

  var inputs = document.querySelectorAll('.form-js input');
  var nameInputs = document.querySelectorAll('.form-js input[type=text]');
  var phoneInputs = document.querySelectorAll('.form-js input[type=tel]');

  var submitBtns = document.querySelectorAll('.submit-js');


  var changeActiveClass = function (inputs) {
    Array.prototype.forEach.call(inputs, function (input) {
      input.addEventListener('focus', function () {
        input.classList.add('active');
      });

      input.addEventListener('blur', function () {
        input.classList.remove('active');
      });
    });
  };

  changeActiveClass(inputs);

  var inputsSuccessHandler = function () {
    Array.prototype.forEach.call(phoneInputs, function (phoneInput) {
      if (phoneInput.value.length === 16) {
        phoneInput.classList.add('correct');
      } else {
        phoneInput.classList.remove('correct');
      }
    });

    Array.prototype.forEach.call(nameInputs, function (nameInput) {
      if (nameInput.value.length > 1) {
        nameInput.classList.add('correct');
      } else {
        nameInput.classList.remove('correct');
      }
    });
  };

  Array.prototype.forEach.call(inputs, function (input) {

    input.addEventListener('input', inputsSuccessHandler);

  });

  var removeStyle = function (evt) {
    evt.target.classList.remove('error');
  };

  var nameInputsChangeHandler = function (evt) {
    removeStyle(evt);
  };

  var phoneInputsChangeHandler = function (evt) {
    removeStyle(evt);
  };

  var addInputsListener = function () {
    Array.prototype.forEach.call(nameInputs, function (nameInput) {
      nameInput.addEventListener('input', nameInputsChangeHandler);
    });

    Array.prototype.forEach.call(phoneInputs, function (phoneInput) {
      phoneInput.addEventListener('input', phoneInputsChangeHandler);
    });
  };

  var removeInputsListener = function () {
    Array.prototype.forEach.call(nameInputs, function (nameInput) {
      nameInput.removeEventListener('input', nameInputsChangeHandler);
    });

    Array.prototype.forEach.call(phoneInputs, function (phoneInput) {
      phoneInput.removeEventListener('input', phoneInputsChangeHandler);
    });
  };

  var checkNameInputsValidity = function () {
    var flag = true;

    Array.prototype.forEach.call(nameInputs, function (nameInput) {
      if (nameInput.value === '' || nameInput.value.length < 2) {
        flag = false;
      }
    });

    return flag;
  };

  var checkPhoneInputsValidity = function () {
    var flag = true;

    Array.prototype.forEach.call(phoneInputs, function (phoneInput) {
      if (phoneInput.value === '' || phoneInput.value.length < 16) {
        flag = false;
      }
    });

    return flag;
  };

  var checkInputsValidity = function () {
    Array.prototype.forEach.call(nameInputs, function (nameInput) {
      if (!checkNameInputsValidity()) {
        nameInput.classList.add('error');
      }
    });

    Array.prototype.forEach.call(phoneInputs, function (phoneInput) {
      if (!checkPhoneInputsValidity()) {
        phoneInput.classList.add('error');
      }
    });
  };


  Array.prototype.forEach.call(forms, function (form) {
    Array.prototype.forEach.call(submitBtns, function (submitBtn) {

      submitBtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        checkInputsValidity();
        addInputsListener();

        if (checkNameInputsValidity() && checkPhoneInputsValidity()) {
          removeInputsListener();

          setTimeout(function () {
            form.reset();

            Array.prototype.forEach.call(inputs, function (input) {
              input.classList.remove('correct');
            });
          }, 500);
        }
      });

    });
  });

})();
