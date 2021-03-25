import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super(popupSelector)
    this._popupDescription = this._popupElement.querySelector('.popup__image-description')
    this._popupImage = this._popupElement.querySelector('.popup__image-photo')
  }

  open ({ link, name }) {
    super.open()
    this._popupDescription.textContent = name
    this._popupImage.src = link
  }
}