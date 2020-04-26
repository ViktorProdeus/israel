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
