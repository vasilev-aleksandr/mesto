let editButton = document.querySelector('.profile__edit-button')
let popup = document.querySelector('.popup')
let closeButton = document.querySelector('.popup__close-button')
let form = document.querySelector('.popup__form')
let likeButtons = document.querySelectorAll('.place__like')

let nameInput = document.querySelector('.popup__input_name')
let jobInput = document.querySelector('.popup__input_about')
let profileName = document.querySelector('.profile__name')
let profileAbout = document.querySelector('.profile__about')

function removePopupActiveClass() {
  popup.classList.remove('popup_active')
}

function handleFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value
  profileAbout.textContent = jobInput.value
  removePopupActiveClass()
}

editButton.addEventListener ('click', () => {
  popup.classList.add('popup_active')
  nameInput.value = profileName.textContent
  jobInput.value = profileAbout.textContent
})

form.addEventListener('submit', handleFormSubmit)

closeButton.addEventListener('click', removePopupActiveClass)

popup.addEventListener('click', (event) => {
  if (event.target === event.currentTarget)
    removePopupActiveClass()
})

for (let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener('click', () => {
    likeButtons[i].classList.toggle('place__like_active')
  })
}