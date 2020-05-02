'use strict';

(function () {

  var tabs = document.querySelectorAll('.questions__tabs-item');
  var activeTab = 'questions__tabs-item--active';

  var removeClass = function (elem, className) {
    Array.prototype.forEach.call(elem, function (i) {
      i.classList.remove(className);
    });
  };

  Array.prototype.forEach.call(tabs, function (tab) {
    tab.addEventListener('click', function (evt) {
      evt.preventDefault();

      if (tab.classList.contains(activeTab)) {

        removeClass(tabs, activeTab);

      } else {

        removeClass(tabs, activeTab);
        tab.classList.add(activeTab);

      }
    });
  });

})();

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

'use strict';

(function () {
  var userPhoneBlockWant = document.querySelector('.want input');

  var userPhoneBlockPopup = document.querySelector('.popup__phone input');

  var userPhoneBlockContacts = document.querySelector('.contacts__feedback-phone input');

  if (userPhoneBlockWant) {
    window.imaskJS(userPhoneBlockWant, {mask: '+{7}(000)000-00-00'});
  }

  if (userPhoneBlockPopup) {
    window.imaskJS(userPhoneBlockPopup, {mask: '+{7}(000)000-00-00'});
  }
  if (userPhoneBlockContacts) {
    window.imaskJS(userPhoneBlockContacts, {mask: '+{7}(000)000-00-00'});
  }

})();

'use strict';

(function () {

  var body = document.querySelector('body');
  var popups = document.querySelectorAll('.popup');
  var popupWrappers = document.querySelectorAll('.popup__wrapper');
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

    Array.prototype.forEach.call(buttons, function (i) {
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
    Array.prototype.forEach.call(buttons, function (i) {
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
      Array.prototype.forEach.call(popups, function (element) {

        if (element.classList.contains('popup--show')) {

          enableScrolling();
          element.classList.remove('popup--show');
        }
      });
    }
  });

  Array.prototype.forEach.call(popupWrappers, function (element) {
    element.addEventListener('mousedown', function (evt) {
      if (evt.target === element && evt.which === 1 || evt.target === buttonPopup) {

        enableScrolling();
        element.parentElement.classList.remove('popup--show');
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

'use strict';

(function () {

  var mouseButton = document.querySelector('.intro__button');
  var aboutBlock = document.querySelector('.about');

  var footerLogo = document.querySelector('.main-footer__logo');
  var introBlock = document.querySelector('.intro');

  var moveTo = new window.MoveTo();

  if (mouseButton) {
    mouseButton.addEventListener('click', function () {
      moveTo.move(aboutBlock);
    });
  }
  if (footerLogo) {
    footerLogo.addEventListener('click', function () {
      moveTo.move(introBlock);
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

  var inputs = document.querySelectorAll('.form-js input');
  var nameInputs = document.querySelectorAll('.form-js input[type=text]');
  var phoneInputs = document.querySelectorAll('.form-js input[type=tel]');

  var checkbox = document.querySelector('.popup__checkbox input');
  var submitBtns = document.querySelectorAll('.submit-js');

  var borderPhone = document.querySelector('.contacts__phone-border');
  var inputFeedbackPhone = document.querySelector('.contacts__feedback-phone input[type=tel]');


  var inputsSuccessHandler = function () {
    Array.prototype.forEach.call(phoneInputs, function (i) {
      if (i.value.length === 16) {
        i.classList.add('correct');
      } else {
        i.classList.remove('correct');
      }
    });

    Array.prototype.forEach.call(nameInputs, function (i) {
      if (i.value.length > 0) {
        i.classList.add('correct');
      } else {
        i.classList.remove('correct');
      }
    });
  };

  var showBorderPhone = function () {
    if (inputFeedbackPhone.value.length >= 2) {
      borderPhone.classList.add('contacts__phone-border--show');

    } else {
      borderPhone.classList.remove('contacts__phone-border--show');
    }
  };

  if (inputFeedbackPhone) {

    inputFeedbackPhone.oninput = showBorderPhone;

    if (!inputFeedbackPhone) {
      inputFeedbackPhone.oninput = false;
    }
  }

  Array.prototype.forEach.call(inputs, function (i) {
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

  var checkboxChangeHandler = function () {
    checkbox.parentNode.classList.remove('popup__checkbox--error');
  };

  var addInputsListener = function () {
    checkbox.addEventListener('change', checkboxChangeHandler);

    Array.prototype.forEach.call(nameInputs, function (i) {
      i.addEventListener('input', nameInputsChangeHandler);
    });

    Array.prototype.forEach.call(phoneInputs, function (i) {
      i.addEventListener('input', phoneInputsChangeHandler);
    });
  };

  var checkNameInputsValidity = function (el) {
    var flag = true;
    if (el.value === '' || el.value.length < 1) {
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

  var checkBoxValidity = function (el) {
    var flag = true;

    if (!el.checked) {
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

  var checkBoxValidate = function (el) {
    if (!checkBoxValidity(el)) {
      el.parentNode.classList.add('popup__checkbox--error');
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
    Array.prototype.forEach.call(submitBtns, function (el) {
      var btn = el;

      btn.addEventListener('click', function (evt) {
        evt.preventDefault();
        addInputsListener();

        var parent = returnParent(evt.target, 'form-js');
        var phoneInput = parent.querySelector('input[type=tel]');
        var textInput = parent.querySelector('input[type=text]');
        var checkboxInput = parent.querySelector('input[type=checkbox]');
        var form = parent.querySelector('form');

        if (!textInput) {
          checkPhoneInputValidity(phoneInput);

          if (checkPhoneInputsValidity(phoneInput)) {
            setTimeout(function () {
              form.reset();
              phoneInput.classList.remove('correct');
              showSuccessMessages();
            }, 500);
          }

        } else if (!checkboxInput) {
          checkPhoneInputValidity(phoneInput);
          checkNameInputValidity(textInput);

          if (checkNameInputsValidity(textInput) && checkPhoneInputsValidity(phoneInput)) {
            setTimeout(function () {
              form.reset();
              phoneInput.classList.remove('correct');
              textInput.classList.remove('correct');

              borderPhone.classList.remove('contacts__phone-border--show');

              showSuccessMessages();
            }, 500);
          }

        } else {
          checkBoxValidate(checkbox);
          checkPhoneInputValidity(phoneInput);
          checkNameInputValidity(textInput);

          if (checkNameInputsValidity(textInput) && checkPhoneInputsValidity(phoneInput) && checkBoxValidity(checkbox)) {
            setTimeout(function () {
              form.reset();
              phoneInput.classList.remove('correct');
              textInput.classList.remove('correct');
              showSuccessMessages();
            }, 500);
          }
        }
      });
    });
  }
})();
