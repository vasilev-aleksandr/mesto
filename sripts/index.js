let editButton = document.querySelector('.profile__edit-button')
let popupProfile = document.querySelector('.popup_profile')
let profilePopupCloseButton = popupProfile.querySelector('.popup__close-button')
let form = document.querySelector('.popup__form')
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



const addButton = document.querySelector('.profile__add-button')
const popupPlace = document.querySelector('.popup_place')
const placePopupCloseButton = popupPlace.querySelector('.popup__close-button')

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
]; 

initialCards.reverse()


const places = document.querySelector('.places')
const placeTemplate = document.querySelector('#place-template')
const placeHeading = document.querySelector('.place__heading')
const placePhoto = document.querySelector('.place__photo')
const placeForm = popupPlace.querySelector('.popup__form')



console.log(placeTemplate)
function addPlace(name,link){
  const placeElement = placeTemplate.content.cloneNode(true)
  placeElement.querySelector('.place__heading').textContent = name;
  placeElement.querySelector('.place__photo').src = link;
  placeElement.querySelector('.place__delete-button').addEventListener('click', handlePlaceDelete)
  placeElement.querySelector('.place__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('place__like_active')
  })
  places.prepend(placeElement)
}

initialCards.forEach(card => addPlace(card.name, card.link))


function handlePlaceSubmit(event) {
  event.preventDefault()
  const headingInput = document.querySelector('.popup__input_place_name').value
  const linkInput = document.querySelector('.popup__input_place_link').value
  const card = {
  name: headingInput,
  link: linkInput
  }
  initialCards.unshift(card)
  
  addPlace(headingInput, linkInput)
  removePopupPlaceActiveClass()
  }

  placeForm.addEventListener('submit', handlePlaceSubmit)

  function handlePlaceDelete(evt){
    evt.target.closest('.place').remove()
  }




  

