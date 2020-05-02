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
