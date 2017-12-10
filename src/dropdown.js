export default class Dropdown {
  constructor(selector, options) {
    this.selector = selector;
    this.options = options;

    this.init();
    this.bind();
  }

  init() {
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

  bind() {
    this.placeholder.addEventListener('click', this.onClickPlaceholder.bind(this));

    this.menuItems.forEach((menuItem) => {
      menuItem.addEventListener('click', this.onClickMenuItem.bind(this));
    });
  }

  onDocumentClick(ev) {    
    if (ev.target.closest('.dropdown') !== this.dropdown) {
      this.hide();
    }  
  }

  onClickPlaceholder(ev) {
    this.toggle();
  }

  onClickMenuItem(ev) {
    this.setValue(ev.currentTarget.dataset.value);
    this.hide();
  }

  setValue(value) {
    this.placeholder.innerHTML = this.getTextByValue(value);
  }

  getTextByValue(value) {
    let text = '';
    
    for(let menuItem of this.menuItems){
      if (menuItem.dataset.value == value) {
        text = menuItem.innerHTML;
        break;
      }
    };

    return text;
  }

  toggle() {
    this.dropdown.classList.toggle('active');
  }

  show() {
    this.dropdown.classList.add('active');
  }

  hide() {
    this.dropdown.classList.remove('active');
  }
}