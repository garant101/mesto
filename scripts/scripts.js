let openPopupBtn = document.querySelector(".js-profile__text-edit-btn");
let noScroll = document.querySelector(".js-root");
let popup = document.querySelector(".js-popup");
let closeFormBtn = document.querySelector(".js-popup__close-form");
let popupForm = document.querySelector(".js-popup__form");
let popupInputName = document.querySelector(".js-popup__input-name");
let popupInputJob = document.querySelector(".js-popup__input-job");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");

function openPopup() {
    popup.classList.add("popup_active");
    noScroll.classList.add("root_no-scroll");
}

function closeForm() {
    popup.classList.remove("popup_active");
    noScroll.classList.remove("root_no-scroll");
}

popupInputName.value = profileTitle.textContent;
popupInputJob.value = profileSubtitle.textContent;

function formSubmitHandler(evt) {
    evt.preventDefault();
    let InputName = popupInputName.value;
    let InputJob = popupInputJob.value;
    profileTitle.textContent = InputName;
    profileSubtitle.textContent = InputJob;
}

openPopupBtn.addEventListener("click", openPopup);
closeFormBtn.addEventListener("click", closeForm);
popupForm.addEventListener("submit", formSubmitHandler);