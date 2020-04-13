'use strict';

(function () {
  var userPhoneInput = document.querySelector('.want input');

  if (userPhoneInput) {
    window.imaskJS(userPhoneInput, {mask: '+{7}(000)000-00-00'});
  }

})();
