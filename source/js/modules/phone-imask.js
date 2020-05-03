'use strict';

(function () {
  var userPhoneBlockWant = document.querySelector('.want input');

  var userPhoneBlockPopup = document.querySelector('.popup__phone input');

  var userPhoneBlockContacts = document.querySelector('.contacts__feedback-phone input');

  var maskOptions = {
    mask: '+{7}(000)000-00-00',
  };

  if (userPhoneBlockWant) {
    window.imaskJS(userPhoneBlockWant, maskOptions);
  }

  if (userPhoneBlockPopup) {
    window.imaskJS(userPhoneBlockPopup, maskOptions);
  }

  if (userPhoneBlockContacts) {
    window.imaskJS(userPhoneBlockContacts, maskOptions);
  }

})();
