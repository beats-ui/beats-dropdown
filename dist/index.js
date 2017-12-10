(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./dropdown'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./dropdown'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.dropdown);
    global.index = mod.exports;
  }
})(this, function (_dropdown) {
  'use strict';

  var _dropdown2 = _interopRequireDefault(_dropdown);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  document.addEventListener('DOMContentLoaded', function () {

    var dropdown = new _dropdown2.default('#dropdown1', {
      value: 'action2'
    });
  });
});