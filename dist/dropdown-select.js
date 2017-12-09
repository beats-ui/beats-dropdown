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

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

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

      var _this = _possibleConstructorReturn(this, (DropdownSelect.__proto__ || Object.getPrototypeOf(DropdownSelect)).call(this, selector, options));

      _this._value = _this._options.value;
      _this._label = _this._openner.querySelector('label');

      _this._attachAdditionalEvents();
      return _this;
    }

    _createClass(DropdownSelect, [{
      key: '_attachAdditionalEvents',
      value: function _attachAdditionalEvents() {
        var _this2 = this;

        var lis = this._content.querySelectorAll('li');

        lis.forEach(function (li) {
          li.addEventListener('click', _this2._onSelect.bind(_this2));
        });
      }
    }, {
      key: '_onSelect',
      value: function _onSelect(ev) {
        var value = ev.target.getAttribute('value');

        if (this._options.onSelect instanceof Function) {
          this._label.innerText = value;
          this.hide();
          this._options.onSelect(value);
        }
      }
    }]);

    return DropdownSelect;
  }(_dropdownBase2.default);

  exports.default = DropdownSelect;
});