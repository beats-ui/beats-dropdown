(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./dropdown-select'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./dropdown-select'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.dropdownSelect);
    global.index = mod.exports;
  }
})(this, function (_dropdownSelect) {
  'use strict';

  var _dropdownSelect2 = _interopRequireDefault(_dropdownSelect);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  document.addEventListener('DOMContentLoaded', function () {

    var dropdown = new _dropdownSelect2.default('#dropdown1', {
      type: 'select',
      value: 'car',
      onSelect: function onSelect(item) {
        console.log(item);
      }
    });
  });
});