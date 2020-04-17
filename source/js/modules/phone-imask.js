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
