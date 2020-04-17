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
