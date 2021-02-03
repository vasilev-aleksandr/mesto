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
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]


function closePopup(popup) {
  popup.classList.remove('popup_active');
}

function openPopup(popup) {
  popup.classList.add('popup_active');
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
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
      closePopup(popup)
      }
      })
  })
}

function handleEditButtonClick() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
  openPopup(popupProfile);
  enableValidation({
    formSelector: '.popup_profile',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  })
}

function handleAddButtonClick() {
  openPopup(popupPlace)
  enableValidation({
    formSelector: '.popup_place',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  })
}

function handleFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
  closePopup(popupProfile);
}

function handleLikeButtonClick(evt) {
  evt.target.classList.toggle('place__like_active')
}
   
function createPlaceCard(name,link) {
  const placeElement = placeTemplate.content.cloneNode(true)
  const placeHeading = placeElement.querySelector('.place__heading')
  placeHeading.textContent = name
  
  const placePhoto = placeElement.querySelector('.place__photo')
  placePhoto.src = link
  placePhoto.addEventListener('click', () => handleImageZoomInClick(name, link))
  
  const placeDeleteButton = placeElement.querySelector('.place__delete-button')
  placeDeleteButton.addEventListener('click', handlePlaceDelete)
  
  const placeLikeButton = placeElement.querySelector('.place__like')
  placeLikeButton.addEventListener('click', handleLikeButtonClick)
  
  return placeElement
}
  
function addPlace(name,link) {
  const card = createPlaceCard(name,link)
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

function handlePlaceDelete(evt) {
  evt.target.closest('.place').remove()
}

function handleImageZoomInClick(imageHeading, imageSource) {
  openPopup(popupImage)
  imagePhoto.src = imageSource
  imageDescription.textContent = imageHeading
}

addPopupCloseListeners(pagePopups);

editButton.addEventListener('click', handleEditButtonClick);

profileForm.addEventListener('submit', handleFormSubmit);

addButton.addEventListener('click', handleAddButtonClick); 

placeForm.addEventListener('submit', handlePlaceSubmit);






