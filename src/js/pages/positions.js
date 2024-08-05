const subBtn = document.getElementById('sub-btn');
const cvBtn = document.getElementById('cv-btn');
const subModal = document.getElementById('sub-modal');
const cvModal = document.getElementById('cv-modal');

const location = document.getElementById('location-label');

subBtn.addEventListener('click', () => openModal(subModal, subBtn));
cvBtn.addEventListener('click', () => openModal(cvModal, cvBtn));

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
}

location.addEventListener('click', event => {
  const list = event.currentTarget.querySelector('ul');
  const input = event.currentTarget.querySelector('input');
  list.classList.add('active');
  list.style.transform = 'translateY(0%)';
  if (event.target.nodeName === 'LI') {
    input.value = event.target.textContent;
    list.style.transform = 'translateY(-150%)';
    setTimeout(() => {
      list.classList.remove('active');
    }, 800);
  }
});
