import Popup from './Popup.js'
export default class PopupWithForm extends Popup {
  constructor (popupSelector, handleFormSubmit) {
    super(popupSelector)
    this._handleFormSubmit = handleFormSubmit
    this._formElement = this._popupElement.querySelector('.popup__form')
    this._inputList = this._popupElement.querySelectorAll('.popup__input')
  }

  _getInputValues () {
    let formValues = {}
    this._inputList.forEach(input => {
    formValues[input.name] = input.value
    })
    return formValues
  }

  _setInputValues (data) {
    this._inputList.forEach(input => {
      input.value = data[input.name]
    })
  }

  setEventListeners () {
    super.setEventListeners()
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._handleFormSubmit(this._getInputValues()) 
      this.close()
    })
  }

  open (data) {
    if (data) this._setInputValues(data)
    super.open()
    }


  close () {
    super.close()
    this._formElement.reset()
  }
}

