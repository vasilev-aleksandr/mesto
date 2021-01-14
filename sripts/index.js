let editButton = document.querySelector('.profile__edit-button')
let popupProfile = document.querySelector('.popup_profile')
let profilePopupCloseButton = document.querySelector('.popup__close-button_profile')
let form = document.querySelector('.popup__form')
let likeButtons = document.querySelectorAll('.place__like')
let nameInput = document.querySelector('.popup__input_profile_name')
let jobInput = document.querySelector('.popup__input_profile_about')
let profileName = document.querySelector('.profile__name')
let profileAbout = document.querySelector('.profile__about')

function handleEditButtonClick() {
  popupProfile.classList.add('popup_active')
  nameInput.value = profileName.textContent
  jobInput.value = profileAbout.textContent
}

function removePopupProfileActiveClass() {
  popupProfile.classList.remove('popup_active')
}

function handleFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value
  profileAbout.textContent = jobInput.value
  removePopupActiveClass()
}

editButton.addEventListener('click', handleEditButtonClick)

form.addEventListener('submit', handleFormSubmit)

profilePopupCloseButton.addEventListener('click', removePopupProfileActiveClass)

popupProfile.addEventListener('click', (event) => {
  if (event.target === event.currentTarget)
  removePopupProfileActiveClass()
})

for (let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener('click', () => {
    likeButtons[i].classList.toggle('place__like_active')
  })
}

const addButton = document.querySelector('.profile__add-button')
const popupPlace = document.querySelector('.popup_place')
const placePopupCloseButton = document.querySelector('.popup__close-button_place')

function handleAddButtonClick() {
popupPlace.classList.add('popup_active')
}

addButton.addEventListener('click', handleAddButtonClick)

function removePopupPlaceActiveClass() {
  popupPlace.classList.remove('popup_active')
}

placePopupCloseButton.addEventListener('click', removePopupPlaceActiveClass)

popupPlace.addEventListener('click', (event) => {
  if (event.target === event.currentTarget)
    removePopupPlaceActiveClass()
})




