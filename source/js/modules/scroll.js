'use strict';

(function () {

  var mouseButton = document.querySelector('.intro__button');

  var aboutBlock = document.querySelector('.about');

  var moveTo = new window.MoveTo();

  if (mouseButton) {
    mouseButton.addEventListener('click', function () {
      moveTo.move(aboutBlock);
    });
  }

})();
