// общие функции

function removePopupActiveClass(popup) {
  popup.classList.remove('popup_active')
}

function addPopupActiveClass(popup) {
  popup.classList.add('popup_active')
}

function addPopupCloseListeners(popups) {
  popups.forEach(popup => {
    const closeButton = popup.querySelector('.popup__close-button')
    closeButton.addEventListener('click', () => removePopupActiveClass(popup))

    popup.addEventListener('click', (event) => {
      if (event.target === event.currentTarget) removePopupActiveClass(popup)
    })
  })
}

const pagePopups = document.querySelectorAll('.popup')
addPopupCloseListeners(pagePopups)


// редактирование профиля

const editButton = document.querySelector('.profile__edit-button')
const popupProfile = document.querySelector('.popup_profile')
const form = document.querySelector('.popup__form')
const nameInput = document.querySelector('.popup__input_profile_name')
const jobInput = document.querySelector('.popup__input_profile_about')
const profileName = document.querySelector('.profile__name')
const profileAbout = document.querySelector('.profile__about')

function handleEditButtonClick() {
  addPopupActiveClass(popupProfile)
  nameInput.value = profileName.textContent
  jobInput.value = profileAbout.textContent
}

function handleFormSubmit(event) {
  event.preventDefault()
  profileName.textContent = nameInput.value
  profileAbout.textContent = jobInput.value
  removePopupActiveClass(popupProfile)
}

editButton.addEventListener('click', handleEditButtonClick)

form.addEventListener('submit', handleFormSubmit)


// работа с карточками
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

initialCards.reverse()

const places = document.querySelector('.places')
const placeTemplate = document.querySelector('#place-template')
const addButton = document.querySelector('.profile__add-button')
const popupPlace = document.querySelector('.popup_place')
const placeForm = popupPlace.querySelector('.popup__form')
const popupImage = document.querySelector('.popup_image')

function addPlace(name,link) {
  const placeElement = placeTemplate.content.cloneNode(true)
  const placeHeading = placeElement.querySelector('.place__heading')
  placeHeading.textContent = name

  const placePhoto = placeElement.querySelector('.place__photo')
  placePhoto.src = link
  placePhoto.addEventListener('click', () => handleImageZoomInClick(name, link))

  const placeDeleteButton = placeElement.querySelector('.place__delete-button')
  placeDeleteButton.addEventListener('click', handlePlaceDelete)

  const placeLikeButton = placeElement.querySelector('.place__like')
  placeLikeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('place__like_active')
  })

  places.prepend(placeElement)
}

initialCards.forEach(card => addPlace(card.name, card.link))

function handleAddButtonClick() {
  addPopupActiveClass(popupPlace)
}

addButton.addEventListener('click', handleAddButtonClick)

function handlePlaceSubmit(event) {
  event.preventDefault()

  const headingInput = document.querySelector('.popup__input_place_name')
  const linkInput = document.querySelector('.popup__input_place_link')
  addPlace(headingInput.value, linkInput.value)

  headingInput.value = ''
  linkInput.value = ''
  removePopupActiveClass(popupPlace)
}

placeForm.addEventListener('submit', handlePlaceSubmit)

function handlePlaceDelete(evt) {
  evt.target.closest('.place').remove()
}

function handleImageZoomInClick(imageHeading, imageSource) {
  addPopupActiveClass(popupImage)
  popupImage.querySelector('.popup__image-photo').src = imageSource
  popupImage.querySelector('.popup__image-description').textContent = imageHeading
}
