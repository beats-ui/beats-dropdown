import DropdownBase from './dropdown-base';

export default class DropdownSelect extends DropdownBase{
  constructor(selector, options) {
    super(selector, options);

    this._value = this._options.value;
    this._label = this._openner.querySelector('label');

    this._attachAdditionalEvents();
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
      this._label.innerText = value;
      this.hide();
      this._options.onSelect(value);
    }
  }

}
