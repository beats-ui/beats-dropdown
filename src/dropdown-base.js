const SELECTORS = {
  OPENNER: '.openner',
  CONTENT: '.content',
  DROPDOWN: '.dropdown'
};

const CLASSES = {
  ACTIVE: 'active'
};

const TYPES = {
  SELECT: 'select'
};

export default class DropdownBase {
  constructor(selector, options) {
    this._root = document.querySelector(selector);
    this._options = options;

    if (this._root instanceof HTMLElement) {
      this._openner = this._root.querySelector(SELECTORS.OPENNER);
      this._content = this._root.querySelector(SELECTORS.CONTENT);
      this._root.classList.add(this._options.type || '');

      //TODO - Throw error if openner and content are not available or of not HTMLInput type
      this._attachEvents();
    }
  }

  _attachEvents() {
    document.addEventListener('click', this._onDocumentClick.bind(this));
    this._openner.addEventListener('click', this._onOpennerClick.bind(this));
  }

  _onDocumentClick(ev) {
    if (ev.target.closest(SELECTORS.DROPDOWN) !== this._root) {
      this.hide();
    }
  }

  _onOpennerClick() {
    this.toggle();
  }


  //PUBLIC METHODS
  toggle() {
    this._root.classList.toggle(CLASSES.ACTIVE);
  }

  show() {
    if (this._root.classList.contains(CLASSES.ACTIVE) === false) {
      this._root.classList.add(CLASSES.ACTIVE);
    }
  }

  hide() {
    if (this._root.classList.contains(CLASSES.ACTIVE) === true) {
      this._root.classList.remove(CLASSES.ACTIVE);
    }
  }
}