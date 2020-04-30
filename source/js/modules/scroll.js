'use strict';

(function () {

  var mouseButton = document.querySelector('.intro__button');
  var aboutBlock = document.querySelector('.about');

  var footerLogo = document.querySelector('.main-footer__logo');
  var introBlock = document.querySelector('.intro');

  var moveTo = new window.MoveTo();

  if (mouseButton) {
    mouseButton.addEventListener('click', function () {
      moveTo.move(aboutBlock);
    });
  }
  if (footerLogo) {
    footerLogo.addEventListener('click', function () {
      moveTo.move(introBlock);
    });
  }

})();
