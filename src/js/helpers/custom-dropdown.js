export class CustomDropdown {
  constructor(triggerId, menuId, onOptionSelected) {
    this.trigger = document.getElementById(triggerId);
    this.menu = document.getElementById(menuId);
    this.onOptionSelected = onOptionSelected;

    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.chooseOption = this.chooseOption.bind(this);
    this.clickOutside = this.clickOutside.bind(this);

    this.trigger.addEventListener('click', this.openDropdown);
  }

  openDropdown() {
    this.menu.classList.add('active');
    this.menu.addEventListener('click', this.chooseOption);
    document.addEventListener('click', this.clickOutside);
    this.trigger.removeEventListener('click', this.openDropdown);
    this.trigger.addEventListener('click', this.closeDropdown);
  }

  closeDropdown() {
    this.menu.classList.remove('active');
    this.menu.removeEventListener('click', this.chooseOption);
    document.removeEventListener('click', this.clickOutside);
    this.trigger.removeEventListener('click', this.closeDropdown);
    this.trigger.addEventListener('click', this.openDropdown);
  }

  chooseOption(event) {
    const click = event.target;
    if (click.nodeName === 'BUTTON') {
      this.closeDropdown();
      this.onOptionSelected(this.trigger, event.target);
    }
  }

  clickOutside(event) {
    const click = event.target;
    if (!this.menu.contains(click) && click !== this.trigger) {
      this.closeDropdown();
    }
  }
}
