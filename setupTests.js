import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';
import 'jest-dom/extend-expect'

window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
    };
  };

window.requestAnimationFrame =
  window.requestAnimationFrame ||
  function(callback) {
    setTimeout(callback, 0);
  };
