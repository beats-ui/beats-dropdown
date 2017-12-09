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

  var Dropdown = function () {
    function Dropdown(selector, options) {
      _classCallCheck(this, Dropdown);

      this._dropdown = document.querySelector(selector);
      this._options = options;

      if (this._dropdown instanceof HTMLElement) {
        this._openner = this._dropdown.querySelector(SELECTORS.OPENNER);
        this._content = this._dropdown.querySelector(SELECTORS.CONTENT);
        this._dropdown.classList.add(this._options.type || '');

        //TODO - Throw error if openner and content are not available or of not HTMLInput type
        this._bindEvents();
      }
    }

    _createClass(Dropdown, [{
      key: '_bindEvents',
      value: function _bindEvents() {
        document.addEventListener('click', this._onDocumentClick.bind(this));
        this._openner.addEventListener('click', this._onOpennerClick.bind(this));
      }
    }, {
      key: '_onDocumentClick',
      value: function _onDocumentClick(ev) {
        if (ev.target.closest(SELECTORS.DROPDOWN) !== this._dropdown) {
          this.hide();
        }
      }
    }, {
      key: '_onOpennerClick',
      value: function _onOpennerClick() {
        this.toggle();
      }
    }, {
      key: 'toggle',
      value: function toggle() {
        this._dropdown.classList.toggle(CLASSES.ACTIVE);
      }
    }, {
      key: 'show',
      value: function show() {
        if (this._dropdown.classList.contains(CLASSES.ACTIVE) === false) {
          this._dropdown.classList.add(CLASSES.ACTIVE);
        }
      }
    }, {
      key: 'hide',
      value: function hide() {
        if (this._dropdown.classList.contains(CLASSES.ACTIVE) === true) {
          this._dropdown.classList.remove(CLASSES.ACTIVE);
        }
      }
    }]);

    return Dropdown;
  }();

  exports.default = Dropdown;
});