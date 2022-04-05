let openPopupBtn = document.querySelector('.profile__btn-edit');
let popup = document.querySelector('.popup');
let closeFormBtn = document.querySelector('.popup__close-form');
let popupForm = document.querySelector('.popup__form');
let popupInputName = document.querySelector('.popup__input_name_search-fields');
let popupInputJob = document.querySelector('.popup__input_job_search-fields');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

function openPopup() {
  popup.classList.add('popup_active');
  popupInputName.value = profileTitle.textContent;
  popupInputJob.value = profileSubtitle.textContent;
}

function closeForm() {
    popup.classList.remove('popup_active');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupInputName.value;
    profileSubtitle.textContent = popupInputJob.value;
    closeForm();
}

openPopupBtn.addEventListener('click', openPopup);
closeFormBtn.addEventListener('click', closeForm);
popupForm.addEventListener('submit', formSubmitHandler);
