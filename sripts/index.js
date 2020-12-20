let editButton = document.querySelector('.profile__edit-button')
let popup = document.querySelector('.popup')
let closeButton = document.querySelector('.popup__close-button')

editButton.addEventListener ('click', () => {
  popup.classList.toggle('popup_active')
  let nameInput = document.querySelector('.popup__name')
  let jobInput = document.querySelector('.popup__about')
  let profileName = document.querySelector('.profile__name')
  let profileAbout = document.querySelector('.profile__about')
  nameInput.value = profileName.textContent 
  jobInput.value = profileAbout.textContent
})

closeButton.addEventListener ('click', () => {
  popup.classList.toggle('popup_active')
})

popup.addEventListener ('click', (event) => {
  if (event.target === event.currentTarget)
  popup.classList.remove('popup_active')
})

let formElement = document.querySelector('.popup__form')

function handleFormSubmit (evt) {
  evt.preventDefault();
  let nameInput = document.querySelector('.popup__name')
  let jobInput = document.querySelector('.popup__about')
  let profileName = document.querySelector('.profile__name')
  let profileAbout = document.querySelector('.profile__about')
  profileName.textContent = nameInput.value 
  profileAbout.textContent = jobInput.value
  popup.classList.remove('popup_active')
}
let submitButton = document.querySelector('.popup__save-button')
submitButton.addEventListener('click', handleFormSubmit)

let form = document.querySelector('.popup__form')
form.addEventListener('submit', handleFormSubmit)


let likeButtons = document.querySelectorAll('.place__like')

for (let i = 0; i < likeButtons.length; i++) {
likeButtons[i].addEventListener('click', () => {
likeButtons[i].classList.toggle('place__like_active')
})
}