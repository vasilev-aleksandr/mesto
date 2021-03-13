
import './index.css'

import {
  initialCards,
  addButton,
  editButton,
  nameSelector,
  aboutSelector,
  placesContainerSelector,
  placeTemplateSelector,
  popupImageSelector,
  popupPlaceSelector,
  popupProfileSelector
} from './components/constants.js'
import Section from './components/Section.js'
import { Card } from './components/Card.js'
import UserInfo from './components/UserInfo.js'
import PopupWithImage  from './components/PopupWithImage.js'
import PopupWithForm from './components/PopupWithForm.js'
import { FormValidator } from './components/FormValidator.js'
import { validatorData } from './components/data.js'


const addPlace = ({name,link}) => {
  const card = new Card({ name, link }, placeTemplateSelector, () => { popupPhoto.open({ name, link }) })
  return card.generateCard()
  }

const cards = new Section({
  items: initialCards.reverse(),
  renderer: ({ name, link }) => {
  const cardElement = addPlace({ name, link })
  cards.addItem(cardElement)
  }},
  placesContainerSelector,
  )
cards.renderItems()
  

const popupPlaceFormHandler =
  (formData) => {
    const {
      popupPlaceName: name,
      popupPlaceLink: link
    } = formData
  const cardElement = addPlace({ name, link })
  cards.addItem(cardElement)
}

const popupPlace = new PopupWithForm(popupPlaceSelector, popupPlaceFormHandler)



popupPlace.setEventListeners()


const popupProfileFormHandler = 
  (formData) => {
    const {
      popupProfileName: name,
      popupProfileAbout: about
    } = formData
user.setUserInfo({ name, about })
}

const popupProfile = new PopupWithForm(popupProfileSelector, popupProfileFormHandler)


popupProfile.setEventListeners()



const popupPhoto = new PopupWithImage(popupImageSelector)

popupPhoto.setEventListeners()



const user = new UserInfo({
  nameSelector,
  aboutSelector
})


function showPopupPlace () {
  popupPlace.open()
}


function showPopupProfile () {
  const userInfo = user.getUserInfo()
  popupProfile.open({
    popupProfileName: userInfo.name,
    popupProfileAbout: userInfo.about
  })
  profileFormValidator.resetValidation()
}


const placeFormValidator = new FormValidator(validatorData, popupPlaceSelector);
const profileFormValidator = new FormValidator(validatorData, popupProfileSelector);

placeFormValidator.enableValidation()
profileFormValidator.enableValidation()

addButton.addEventListener('click', showPopupPlace)
editButton.addEventListener('click', showPopupProfile)







