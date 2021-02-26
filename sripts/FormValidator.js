export class FormValidator{
  constructor(data, formElement){
  this._formElement = formElement
  this._inputSelector = data.inputSelector
  this._inactiveButtonClass = data.inactiveButtonClass
  this._inputErrorClass = data.inputErrorClass
  this._errorClass = data.errorClass
  this._submitButton = this._formElement.querySelector(data.submitButtonSelector)
  this._inputList = Array.from(this._formElement.querySelectorAll(data.inputSelector))
  this._errorList = Array.from(this._formElement.querySelectorAll(data.errorSelector))
  }

  _hasInvalidInput = (input) => !input.validity.valid

  _toggleButtonState = () => {
    const isAnyOfInputsInvalid = this._inputList.some((input) => this._hasInvalidInput(input))
    if (isAnyOfInputsInvalid) {
    this._submitButton.classList.add(this._inactiveButtonClass)
    this._submitButton.disabled = true
    } else {
    this._submitButton.classList.remove(this._inactiveButtonClass)
    this._submitButton.disabled = false
    }
  }

  _isValid = (inputElement) => {
    const errorElement = inputElement.nextElementSibling
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, errorElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement, errorElement);
    }
  }
  _showInputError = (inputElement, errorElement, errorMessage) => {
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = errorMessage;
  }

  _hideInputError = (inputElement, errorElement) => {
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }
  _setEventListeners = () => {
    this._inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
    this._isValid(inputElement);
    this._toggleButtonState()
    })
    })
    this._toggleButtonState()
  }

  resetValidation() {
    for (let i = 0; i < this._inputList.length; i++) {
      this._hideInputError(this._inputList[i], this._errorList[i])
      }
    this._toggleButtonState();
  }

  enableValidation = () => {
    this._formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    })
    this._setEventListeners();
  }
}