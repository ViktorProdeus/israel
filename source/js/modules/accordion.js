'use strict';

(function () {

  var tabs = document.querySelectorAll('.questions__tabs-item');
  var activeTab = 'questions__tabs-item--active';

  var removeClass = function (elem, className) {
    Array.prototype.forEach.call(elem, function (i) {
      i.classList.remove(className);
    });
  };

  Array.prototype.forEach.call(tabs, function (tab) {
    tab.addEventListener('click', function (evt) {
      evt.preventDefault();

      if (tab.classList.contains(activeTab)) {

        removeClass(tabs, activeTab);

      } else {

        removeClass(tabs, activeTab);
        tab.classList.add(activeTab);

      }
    });
  });

})();
