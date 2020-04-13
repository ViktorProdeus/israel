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
