import DropdownBase from './dropdown-base';

export default class DropdownSelect extends DropdownBase {
  constructor(selector, options) {
    super(selector, options);

    this._label = this._openner.querySelector('label');

    this._attachAdditionalEvents();
    this.setValue(this._options.value);
  }

  _attachAdditionalEvents() {
    let lis = this._content.querySelectorAll('li');

    lis.forEach((li) => {
      li.addEventListener('click', this._onSelect.bind(this));
    });
  }

  _onSelect(ev) {
    let value = ev.target.getAttribute('value');

    if (this._options.onSelect instanceof Function) {
      this.setValue(value);
      this.hide();
      this._options.onSelect(value);
    }
  }

  setValue(value) {
    this._label.innerText = value;
  }

  getValue() {
    return this._label.innerText;
  }

}