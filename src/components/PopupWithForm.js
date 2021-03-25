import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector)
    this._handleFormSubmit = handleFormSubmit
    this._formElement = this._popupElement.querySelector('.popup__form')
    this._inputList = this._popupElement.querySelectorAll('.popup__input')
    this._saveButton = this._popupElement.querySelector('.popup__save-button')
    this._buttonText = this._saveButton.textContent
  }

  _getInputValues() {
    let formValues = {}
    this._inputList.forEach(input => {
      formValues[input.name] = input.value
    })
    return formValues
  }

  _setInputValues(data) {
    this._inputList.forEach(input => {
      input.value = data[input.name]
    })
  }

  setEventListeners() {
    super.setEventListeners()
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._handleFormSubmit(this._getInputValues()) 
    })
  }

  open(data) {
    if (data) this._setInputValues(data)
    super.open()
  }


  close() {
    super.close()
    this._formElement.reset()
  }
  
  showLoading() {
    this._saveButton.textContent = 'Сохранение...'
    this._saveButton.disabled = true
  }
  
  hideLoading() {
    this._saveButton.textContent = this._buttonText
    this._saveButton.disabled = false
  }
}

