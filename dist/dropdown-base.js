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
    global.dropdownBase = mod.exports;
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

  var SELECTORS = {
    OPENNER: '.openner',
    CONTENT: '.content',
    DROPDOWN: '.dropdown'
  };

  var CLASSES = {
    ACTIVE: 'active'
  };

  var TYPES = {
    SELECT: 'select'
  };

  var DropdownBase = function () {
    function DropdownBase(selector, options) {
      _classCallCheck(this, DropdownBase);

      this._root = document.querySelector(selector);
      this._options = options;

      this._label = this._openner.querySelector('label');

      this._attachAdditionalEvents();
      this.setValue(this._options.value);

      if (this._root instanceof HTMLElement) {
        this._openner = this._root.querySelector(SELECTORS.OPENNER);
        this._content = this._root.querySelector(SELECTORS.CONTENT);
        this._root.classList.add(this._options.type || '');

        //TODO - Throw error if openner and content are not available or of not HTMLInput type
        this._attachEvents();
      }
    }

    _createClass(DropdownBase, [{
      key: '_attachEvents',
      value: function _attachEvents() {
        document.addEventListener('click', this._onDocumentClick.bind(this));
        this._openner.addEventListener('click', this._onOpennerClick.bind(this));
      }
    }, {
      key: '_onDocumentClick',
      value: function _onDocumentClick(ev) {
        if (ev.target.closest(SELECTORS.DROPDOWN) !== this._root) {
          this.hide();
        }
      }
    }, {
      key: '_onOpennerClick',
      value: function _onOpennerClick() {
        this.toggle();
      }
    }, {
      key: '_attachAdditionalEvents',
      value: function _attachAdditionalEvents() {
        var _this = this;

        var lis = this._content.querySelectorAll('li');

        lis.forEach(function (li) {
          li.addEventListener('click', _this._onSelect.bind(_this));
        });
      }
    }, {
      key: '_onSelect',
      value: function _onSelect(ev) {
        var value = ev.target.getAttribute('value');

        if (this._options.onSelect instanceof Function) {
          this.setValue(value);
          this.hide();
          this._options.onSelect(value);
        }
      }
    }, {
      key: 'setValue',
      value: function setValue(value) {
        this._label.innerText = value;
      }
    }, {
      key: 'getValue',
      value: function getValue() {
        return this._label.innerText;
      }
    }, {
      key: 'toggle',
      value: function toggle() {
        this._root.classList.toggle(CLASSES.ACTIVE);
      }
    }, {
      key: 'show',
      value: function show() {
        if (this._root.classList.contains(CLASSES.ACTIVE) === false) {
          this._root.classList.add(CLASSES.ACTIVE);
        }
      }
    }, {
      key: 'hide',
      value: function hide() {
        if (this._root.classList.contains(CLASSES.ACTIVE) === true) {
          this._root.classList.remove(CLASSES.ACTIVE);
        }
      }
    }]);

    return DropdownBase;
  }();

  exports.default = DropdownBase;
});