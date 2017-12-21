'use strict';

(function () {
  window.colorizeElement = function (subject, colors, callback) {
    var color = colors[Math.floor(Math.random() * colors.length)];
    if (typeof callback === 'function') {
      callback(subject, color);
    }
  };
})();
