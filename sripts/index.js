import { initialCards } from './placesArray.js'
import { validatorData } from './data.js'
import { Card } from './Card.js'
import { FormValidator } from './FormValidator.js'

const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_profile');
const profileForm = popupProfile.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_profile_name');
const jobInput = document.querySelector('.popup__input_profile_about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const places = document.querySelector('.places');
const placeTemplate = document.querySelector('#place-template');
const addButton = document.querySelector('.profile__add-button');
const popupPlace = document.querySelector('.popup_place');
const placeForm = popupPlace.querySelector('.popup__form');
const popupImage = document.querySelector('.popup_image');
const headingInput = document.querySelector('.popup__input_place_name');
const linkInput = document.querySelector('.popup__input_place_link');
const imagePhoto = popupImage.querySelector('.popup__image-photo');
const imageDescription = popupImage.querySelector('.popup__image-description');
const pagePopups = document.querySelectorAll('.popup');
const inputList = Array.from(document.querySelectorAll('.popup__input'));
const placeFormValidator = new FormValidator(validatorData, popupPlace);
const profileFormValidator = new FormValidator(validatorData, popupProfile);


function openPopup(popup) {
  popup.classList.add('popup_active');
  document.addEventListener('keydown', closeByEscape); 
}

function closePopup(popup) {
  popup.classList.remove('popup_active');
  document.removeEventListener('keydown', closeByEscape); 
  inputList.forEach((inputElement) => {
  inputElement.value=''
  })
}

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_active')
    closePopup(openedPopup);
  }
}

function addPopupCloseListeners(popups) {
  popups.forEach(popup => {
    const closeButton = popup.querySelector('.popup__close-button');
    closeButton.addEventListener('click', function () {
      closePopup(popup)
      });
    popup.addEventListener('click', (event) => {
      if (event.target === event.currentTarget) closePopup(popup);
      })
  })
}

function handleEditButtonClick() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
  openPopup(popupProfile);
}

function handleAddButtonClick() {
  openPopup(popupPlace)
}

function handleFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
  closePopup(popupProfile);
}

export function handleImageZoomInClick(imageHeading, imageSource) {
  openPopup(popupImage)
  imagePhoto.src = imageSource
  imageDescription.textContent = imageHeading
}


function addPlace(name,link) {
  const card = new Card({name,link}, '#place-template').generateCard()
  places.prepend(card)
}
  
initialCards.reverse().forEach(card => addPlace(card.name, card.link))
  
function handlePlaceSubmit(event) {
  event.preventDefault()
  addPlace(headingInput.value, linkInput.value)
  headingInput.value = ''
  linkInput.value = ''
  closePopup(popupPlace)
}


addPopupCloseListeners(pagePopups);

editButton.addEventListener('click', handleEditButtonClick);

profileForm.addEventListener('submit', handleFormSubmit);

addButton.addEventListener('click', handleAddButtonClick); 

placeForm.addEventListener('submit', handlePlaceSubmit);




placeFormValidator.enableValidation()

profileFormValidator.enableValidation()