import './index.css'

import {
  addButton,
  editButton,
  avatarEditButton,
  nameSelector,
  aboutSelector,
  avatarSelector,
  placesContainerSelector,
  placeTemplateSelector,
  popupImageSelector,
  popupPlaceSelector,
  popupProfileSelector,
  popupAvatarSelector,
  popupDeleteConfirmSelector,
  VALIDATOR_DATA,
  CONFIG_API,
} from './constants.js'
import Section from './components/Section.js'
import Card from './components/Card.js'
import UserInfo from './components/UserInfo.js'
import PopupWithImage  from './components/PopupWithImage.js'
import PopupWithForm from './components/PopupWithForm.js'
import FormValidator from './components/FormValidator.js'
import PopupWithConfirmation from './components/PopupWithConfirmation'
import Api from './api/Api'

const api = new Api(CONFIG_API)

const user = new UserInfo({
  nameSelector,
  aboutSelector,
  avatarSelector
})

const addPlace = ({ name, link, likes, id, owner }, userId) => {
  const card = new Card(
  { name, link, likes, id, owner },
  userId,
  placeTemplateSelector,
  () => { popupPhoto.open({ name, link }) },
  (cardElement) => { popupWithDelete.open(cardElement, id) },
  () => { return api.likeCard(id) },
  () => { return api.dislikeCard(id) }
  )
  return card.generateCard()
}

const cards = new Section({
  items: [],
  renderer: (container, item) => {
    container.append(item)
  }},
  placesContainerSelector,
)

Promise.all([api.getMyInfo(), api.getCards()])
.then(([userInfo, cardInfo]) => {
  user.setUserInfo(userInfo)
  user.setUserAvatar(userInfo.avatar)

  cardInfo.forEach(({ name, link, likes, _id, owner }) => {
    const cardElement = addPlace({ name, link, likes, id: _id, owner }, user.id)
    cards.addItem(cardElement, true)
  })
  cards.renderItems()
})
 
const popupPlaceFormHandler =
  (formData) => {
    const {
      popupPlaceName: name,
      popupPlaceLink: link,
    } = formData
    
    popupPlace.showLoading()

    api.createCard({ name, link })
      .then(({ name, link, _id, likes, owner }) => {
        const cardElement = addPlace({ name, link, id: _id, likes, owner }, owner._id)
        cards.addItem(cardElement, false)
      })  
      .then(() => {
        popupPlace.hideLoading()
        popupPlace.close()
        cards.renderItems()
      })
    }

const popupPlace = new PopupWithForm(popupPlaceSelector, popupPlaceFormHandler)

popupPlace.setEventListeners()


const popupProfileFormHandler =
(formData) => {
  const {
    popupProfileName: name,
    popupProfileAbout: about
  } = formData

  popupProfile.showLoading()

  api.updateMyInfo({ name, about })
  .then(({ name, about }) => {
    user.setUserInfo({ name, about })
    popupProfile.hideLoading()
    popupProfile.close()
  })
}

const popupProfile = new PopupWithForm(popupProfileSelector, popupProfileFormHandler)

popupProfile.setEventListeners()


const popupAvatarFormHandler =
(formData) => {
  const {
    popupInputAvatarPhoto: avatar
  } = formData

  popupAvatar.showLoading()

  api.updateMyAvatar(avatar)
  .then(({ avatar }) => {
    user.setUserAvatar(avatar)
    popupAvatar.hideLoading()
    popupAvatar.close()
  })
}

const popupAvatar = new PopupWithForm(popupAvatarSelector, popupAvatarFormHandler)

popupAvatar.setEventListeners()


const popupPhoto = new PopupWithImage(popupImageSelector)

popupPhoto.setEventListeners()


const popupWithDelete = new PopupWithConfirmation(
  popupDeleteConfirmSelector, 
  (cardElement, id) => {
    api.deleteCard(id)
      .then(() => {
        cards.removeItem(cardElement)
        cards.renderItems()
      })
  }
) 

popupWithDelete.setEventListeners()


const placeFormValidator = new FormValidator(VALIDATOR_DATA, popupPlaceSelector)
const profileFormValidator = new FormValidator(VALIDATOR_DATA, popupProfileSelector)
const avatarFormValidator = new FormValidator(VALIDATOR_DATA, popupAvatarSelector)

placeFormValidator.enableValidation()
profileFormValidator.enableValidation()
avatarFormValidator.enableValidation()


const showPopupPlace = () => {
  popupPlace.open()
}

const showPopupProfile = () => {
  const userInfo = user.getUserInfo()
  popupProfile.open({
    popupProfileName: userInfo.name,
    popupProfileAbout: userInfo.about
  })
  profileFormValidator.resetValidation()
}

const showPopupAvatar = () => {
  popupAvatar.open()
}

addButton.addEventListener('click', showPopupPlace)
editButton.addEventListener('click', showPopupProfile)
avatarEditButton.addEventListener('click', showPopupAvatar)

