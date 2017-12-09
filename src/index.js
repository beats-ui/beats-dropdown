import DropdownSelect from './dropdown-select';

document.addEventListener('DOMContentLoaded', () => {
  
  let dropdown = new DropdownSelect('#dropdown1', {
    type: 'select',
    value: 'car',
    onSelect: (item) => {
      console.log(item);
    }
  });

});