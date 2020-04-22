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
  var popups = document.querySelectorAll('.popup');
  var buttonsOrder = document.querySelectorAll('.open-order-js');
  var buttonsClose = document.querySelectorAll('.popup__close');
  var buttonPopup = document.querySelector('.popup__btn-js');

  window.popupOrder = document.querySelector('.popup--order');
  window.popupSuccess = document.querySelector('.popup--success');

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

  var enableScrolling = function () {
    body.removeAttribute('style');
    body.classList.remove('body-fixed');
  };


  var saveNameInStorage = function (el) {
    el.value = localStorage.getItem('name');
    el.oninput = function () {
      localStorage.setItem('name', el.value);
    };
  };

  var savePhoneInStorage = function (el) {
    el.value = localStorage.getItem('phone');
    el.oninput = function () {
      localStorage.setItem('phone', el.value);
    };
  };


  var showElements = function (buttons, popup) {
    var inputName = document.querySelector('.form-js [name=popup-name]');
    var inputphone = document.querySelector('.form-js [name=popup-phone]');

    buttons.forEach(function (i) {
      i.addEventListener('click', function (evt) {
        evt.preventDefault();

        window.disableScrolling();

        popup.classList.add('popup--show');
        inputName.focus();
        saveNameInStorage(inputName);
        savePhoneInStorage(inputphone);
      });
    });
  };

  var hideElements = function (buttons, popup) {
    buttons.forEach(function (i) {
      i.addEventListener('click', function (evt) {
        evt.preventDefault();

        enableScrolling();

        popup.classList.remove('popup--show');
      });
    });
  };

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      popups.forEach(function (element) {

        if (element.classList.contains('popup--show')) {

          enableScrolling();
          element.classList.remove('popup--show');
        }
      });
    }
  });

  popups.forEach(function (element) {
    element.addEventListener('click', function (evt) {
      if (evt.target === element || evt.target === buttonPopup) {

        enableScrolling();
        element.classList.remove('popup--show');
      }
    });
  });

  if (window.popupOrder) {
    showElements(buttonsOrder, window.popupOrder);
    hideElements(buttonsClose, window.popupOrder);
  }

  if (window.popupSuccess) {
    hideElements(buttonsClose, window.popupSuccess);
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
    elem.forEach(function (i) {
      i.classList.remove(className);
    });
  };

  tabs.forEach(function (tab, i) {
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

  var inputs = document.querySelectorAll('.form-js input');
  var nameInputs = document.querySelectorAll('.form-js input[type=text]');
  var phoneInputs = document.querySelectorAll('.form-js input[type=tel]');
  var submitBtns = document.querySelectorAll('.submit-js');


  window.activeForEachNodeListForIE = function () {
    if (typeof NodeList.prototype.forEach !== 'function') {
      NodeList.prototype.forEach = Array.prototype.forEach;
    }
  };

  window.activeForEachNodeListForIE();

  var inputsSuccessHandler = function () {
    phoneInputs.forEach(function (i) {
      if (i.value.length === 16) {
        i.classList.add('correct');
      } else {
        i.classList.remove('correct');
      }
    });

    nameInputs.forEach(function (i) {
      if (i.value.length > 1) {
        i.classList.add('correct');
      } else {
        i.classList.remove('correct');
      }
    });
  };

  inputs.forEach(function (i) {
    i.addEventListener('input', inputsSuccessHandler);
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
    nameInputs.forEach(function (i) {
      i.addEventListener('input', nameInputsChangeHandler);
    });

    phoneInputs.forEach(function (i) {
      i.addEventListener('input', phoneInputsChangeHandler);
    });
  };

  var removeInputsListener = function () {
    nameInputs.forEach(function (i) {
      i.removeEventListener('input', nameInputsChangeHandler);
    });

    phoneInputs.forEach(function (i) {
      i.removeEventListener('input', phoneInputsChangeHandler);
    });
  };

  var checkNameInputsValidity = function (el) {
    var flag = true;
    if (el.value === '' || el.value.length < 2) {
      flag = false;
    }
    return flag;
  };

  var checkPhoneInputsValidity = function (el) {
    var flag = true;
    if (el.value === '' || el.value.length < 16) {
      flag = false;
    }
    return flag;
  };

  var checkPhoneInputValidity = function (el) {
    if (!checkPhoneInputsValidity(el)) {
      el.classList.add('error');
    }
  };

  var checkNameInputValidity = function (el) {
    if (!checkNameInputsValidity(el)) {
      el.classList.add('error');
    }
  };

  var returnParent = function (el, cssClass) {
    var element = el;
    var cls = cssClass;
    while (!element.classList.contains(cls)) {
      element = element.parentElement;

      if (!element) {
        break;
      }
    }
    return element;
  };

  var showSuccessMessages = function () {
    window.popupOrder.classList.remove('popup--show');
    window.popupSuccess.classList.add('popup--show');
    window.disableScrolling();
  };

  if (submitBtns) {
    submitBtns.forEach(function (el) {
      var btn = el;

      btn.addEventListener('click', function (evt) {
        evt.preventDefault();
        addInputsListener();

        var parent = returnParent(evt.target, 'form-js');
        var phoneInput = parent.querySelector('input[type=tel]');
        var textInput = parent.querySelector('input[type=text]');
        var form = parent.querySelector('form');

        if (!textInput) {
          checkPhoneInputValidity(phoneInput);

          if (checkPhoneInputsValidity(phoneInput)) {
            removeInputsListener();

            setTimeout(function () {
              form.reset();
              phoneInput.classList.remove('correct');
              showSuccessMessages();
            }, 500);


          }

        } else {
          checkPhoneInputValidity(phoneInput);
          checkNameInputValidity(textInput);

          if (checkNameInputsValidity(textInput) && checkPhoneInputsValidity(phoneInput)) {
            removeInputsListener();
            setTimeout(function () {
              form.reset();
              phoneInput.classList.remove('correct');
              textInput.classList.remove('correct');
              showSuccessMessages();
              localStorage.clear();
            }, 500);
          }
        }
      });
    });
  }
})();
