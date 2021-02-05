const hasInvalidInput = (input) => !input.validity.valid

const toggleButtonState = (inputs, buttonElement, inactiveButtonClass) => {
  const isAnyOfInputsInvalid = inputs.some((input) => hasInvalidInput(input))
  if (isAnyOfInputsInvalid) {
    buttonElement.classList.add(inactiveButtonClass)
    buttonElement.disabled = true
  } else {
    buttonElement.classList.remove(inactiveButtonClass)
    buttonElement.disabled = false
  } 
}

const isValid = (inputElement, inputErrorClass, errorClass) => {
  if (!inputElement.validity.valid) {
    const errorElement = inputElement.nextElementSibling
    showInputError(inputElement, errorElement, inputElement.validationMessage, inputErrorClass, errorClass);
  } else {
    const errorElement = inputElement.nextElementSibling
    hideInputError(inputElement, errorElement, inputErrorClass, errorClass);
  }
}

const showInputError = (inputElement, errorElement, errorMessage, inputErrorClass, errorClass) => {
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
}

const hideInputError = (inputElement, errorElement, inputErrorClass, errorClass) => {
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
}

const setEventListeners = (formElement, {inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const button = formElement.querySelector(submitButtonSelector);
  toggleButtonState(inputList, button, inactiveButtonClass)
  
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      isValid(inputElement, inputErrorClass, errorClass);
      toggleButtonState(inputList, button, inactiveButtonClass)
    });
  });
};


const enableValidation = ({formSelector, ...rest}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, rest);
  })
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button ',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}); 
