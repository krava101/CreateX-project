import { CustomDropdown } from '../helpers/custom-dropdown';

const interestedDd = new CustomDropdown(
  'interested-input',
  'interested-list',
  onChooseOption
);
const locationDd = new CustomDropdown(
  'location-btn',
  'location-list',
  onChooseOption
);

function onChooseOption(selectBtn, option) {
  selectBtn.textContent = option.textContent;
}
