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
