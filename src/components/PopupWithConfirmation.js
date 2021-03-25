import Popup from './Popup.js'

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleConfirmButton) {
    super(popupSelector)
    this._handleConfirmButton = handleConfirmButton
    this._confirmButton= this._popupElement.querySelector('.popup__save-button')
    this._elementForDelete = null
    this._id = null
  }

setEventListeners() {
    super.setEventListeners()
    this._confirmButton.addEventListener('click', () => {
      this._handleConfirmButton(this._elementForDelete, this._id),
      this.close()
    })
  }

  open(element, id) {
    super.open()
    this._elementForDelete = element
    this._id = id
  }
}