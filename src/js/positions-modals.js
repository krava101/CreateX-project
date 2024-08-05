const subBtn = document.getElementById('sub-btn');
const cvBtn = document.getElementById('cv-btn');
const subModal = document.getElementById('sub-modal');
const cvModal = document.getElementById('cv-modal');

const locationLabel = document.getElementById('location-label');
const locationsList = document.getElementById('locations-list');
const locationInput = document.getElementById('location-input');

subBtn.addEventListener('click', () => openModal(subModal, subBtn));
cvBtn.addEventListener('click', () => {
  openModal(cvModal, cvBtn);
  locationInput.addEventListener('click', openLocation);
});

function openModal(modal, openBtn) {
  modal.classList.add('active');
  const closeBtn = modal.querySelector('.modal-close-btn');

  const handleCloseModal = () =>
    closeModal(modal, handleCloseModal, handleClickOutside);
  const handleClickOutside = event =>
    clickOutsideTheModal(
      event,
      openBtn,
      modal,
      handleCloseModal,
      handleClickOutside
    );

  closeBtn.addEventListener('click', handleCloseModal);
  document.addEventListener('click', handleClickOutside);
}

function clickOutsideTheModal(
  event,
  openBtn,
  modal,
  handleCloseModal,
  handleClickOutside
) {
  if (!modal.contains(event.target) && event.target !== openBtn) {
    closeModal(modal, handleCloseModal, handleClickOutside);
  }
}

function closeModal(modal, handleCloseModal, handleClickOutside) {
  modal.classList.remove('active');
  const closeBtn = modal.querySelector('.modal-close-btn');

  closeBtn.removeEventListener('click', handleCloseModal);
  document.removeEventListener('click', handleClickOutside);
  if (locationInput) {
    closeLocation();
  }
}

function openLocation() {
  locationsList.classList.add('active');
  locationsList.addEventListener('click', chooseLocation);
  locationInput.addEventListener('click', closeLocationList);
}

function closeLocation() {
  locationsList.classList.remove('active');
  locationsList.removeEventListener('click', chooseLocation);
  locationInput.removeEventListener('click', openLocation);
}

function closeLocationList() {
  locationsList.classList.remove('active');
  locationsList.removeEventListener('click', chooseLocation);
  locationInput.removeEventListener('click', closeLocationList);
}

function chooseLocation(event) {
  if (event.target.nodeName === 'LI') {
    locationInput.value = event.target.textContent;
    locationsList.classList.remove('active');
    closeLocationList();
  }
}
