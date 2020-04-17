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
