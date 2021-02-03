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

const isValid = (inputElements, inputErrorClass, errorClass) => {
  inputElements.forEach((inputElement) => {
    if (!inputElement.validity.valid) {
      const errorElement = inputElement.nextElementSibling
      showInputError(inputElement, errorElement, inputElement.validationMessage, inputErrorClass, errorClass);
    } else {
      const errorElement = inputElement.nextElementSibling
      hideInputError(inputElement, errorElement, inputErrorClass, errorClass);
    }
  })
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

const enableValidation = ({
  formSelector,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass
}) => {
  const form = document.querySelector(formSelector)
  const inputs = Array.from(form.querySelectorAll(inputSelector))
  const button = form.querySelector(submitButtonSelector)

  isValid(inputs, inputErrorClass, errorClass)
  toggleButtonState(inputs, button, inactiveButtonClass)

  inputs.forEach((input) => input.addEventListener('input', function () {
    isValid(inputs, inputErrorClass, errorClass)
    toggleButtonState(inputs, button, inactiveButtonClass)
  }))
}
