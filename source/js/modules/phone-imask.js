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
