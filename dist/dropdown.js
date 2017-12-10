(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.dropdown = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  var Dropdown = function () {
    function Dropdown(selector, options) {
      _classCallCheck(this, Dropdown);

      this.selector = selector;
      this.options = options;

      this.init();
      this.bind();
    }

    _createClass(Dropdown, [{
      key: 'init',
      value: function init() {
        this.dropdown = document.querySelector(this.selector);
        document.addEventListener('click', this.onDocumentClick.bind(this));

        if (this.dropdown instanceof HTMLElement) {
          this.placeholder = this.dropdown.querySelector('.dropdown-placeholder');
          this.menu = this.dropdown.querySelector('.dropdown-menu');
          this.menuItems = this.menu.querySelectorAll('.dropdown-item');
        }

        if (this.options.value) {
          this.setValue(this.options.value);
        }
      }
    }, {
      key: 'bind',
      value: function bind() {
        var _this = this;

        this.placeholder.addEventListener('click', this.onClickPlaceholder.bind(this));

        this.menuItems.forEach(function (menuItem) {
          menuItem.addEventListener('click', _this.onClickMenuItem.bind(_this));
        });
      }
    }, {
      key: 'onDocumentClick',
      value: function onDocumentClick(ev) {
        if (ev.target.closest('.dropdown') !== this.dropdown) {
          this.hide();
        }
      }
    }, {
      key: 'onClickPlaceholder',
      value: function onClickPlaceholder(ev) {
        this.toggle();
      }
    }, {
      key: 'onClickMenuItem',
      value: function onClickMenuItem(ev) {
        this.setValue(ev.currentTarget.dataset.value);
        this.hide();
      }
    }, {
      key: 'setValue',
      value: function setValue(value) {
        this.placeholder.innerHTML = this.getTextByValue(value);
      }
    }, {
      key: 'getTextByValue',
      value: function getTextByValue(value) {
        var text = '';

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.menuItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var menuItem = _step.value;

            if (menuItem.dataset.value == value) {
              text = menuItem.innerHTML;
              break;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        ;

        return text;
      }
    }, {
      key: 'toggle',
      value: function toggle() {
        this.dropdown.classList.toggle('active');
      }
    }, {
      key: 'show',
      value: function show() {
        this.dropdown.classList.add('active');
      }
    }, {
      key: 'hide',
      value: function hide() {
        this.dropdown.classList.remove('active');
      }
    }]);

    return Dropdown;
  }();

  exports.default = Dropdown;
});