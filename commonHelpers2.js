import"./assets/header-4ffb22f8.js";/* empty css                     */class i{constructor(e,t){this.trigger=document.getElementById(e),this.menu=document.getElementById(t),this.openDropdown=this.openDropdown.bind(this),this.closeDropdown=this.closeDropdown.bind(this),this.chooseOption=this.chooseOption.bind(this),this.clickOutside=this.clickOutside.bind(this),this.trigger.addEventListener("click",this.openDropdown)}openDropdown(){this.menu.classList.add("active"),this.menu.addEventListener("click",this.chooseOption),document.addEventListener("click",this.clickOutside),this.trigger.removeEventListener("click",this.openDropdown),this.trigger.addEventListener("click",this.closeDropdown)}closeDropdown(){this.menu.classList.remove("active"),this.menu.removeEventListener("click",this.chooseOption),document.removeEventListener("click",this.clickOutside),this.trigger.removeEventListener("click",this.closeDropdown),this.trigger.addEventListener("click",this.openDropdown)}chooseOption(e){const t=e.target;t.nodeName==="BUTTON"&&(this.trigger.textContent=t.textContent,this.closeDropdown())}clickOutside(e){const t=e.target;!this.menu.contains(t)&&t!==this.trigger&&this.closeDropdown()}}new i("interested-input","interested-list");new i("location-btn","location-list");
//# sourceMappingURL=commonHelpers2.js.map