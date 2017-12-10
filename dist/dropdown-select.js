(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './dropdown-base'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./dropdown-base'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.dropdownBase);
    global.dropdownSelect = mod.exports;
  }
})(this, function (exports, _dropdownBase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _dropdownBase2 = _interopRequireDefault(_dropdownBase);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var DropdownSelect = function (_DropdownBase) {
    _inherits(DropdownSelect, _DropdownBase);

    function DropdownSelect(selector, options) {
      _classCallCheck(this, DropdownSelect);

      return _possibleConstructorReturn(this, (DropdownSelect.__proto__ || Object.getPrototypeOf(DropdownSelect)).call(this, selector, options));
    }

    return DropdownSelect;
  }(_dropdownBase2.default);

  exports.default = DropdownSelect;
});