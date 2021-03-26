export default class Card {
  constructor (data, userId, cardSelector, handleCardClick, handleDeleteClick, hanleCardLike, handleCardDislike) {
    this._data = data
    this._name = data.name
    this._link = data.link
    this._likes = data.likes
    this.id = data.id
    this._userId = userId
    this._handleCardClick = handleCardClick
    this._handleDeleteClick = handleDeleteClick
    this._handleCardLike = hanleCardLike
    this._handleCardDislike = handleCardDislike
    this._cardSelector = cardSelector
    this._placeСard = null
  }

  _getTemplate() {
    const template = document.querySelector(this._cardSelector).content
    const cardElement = template.querySelector('.place').cloneNode(true)
    return cardElement
  }

  _handleClickPhoto() {
    this._handleCardClick()
  }

  _handleCardDelete() {
    this._handleDeleteClick(this._placeСard)
  }

  _handleLikeButtonClick() {
    this._hanleCardlike(this.id)
  }

  _setLikesCounter() {
    this._placeLikeCounter.textContent = this._likes.length
  }

  _likeCard() {
    this._placeLikeButton.classList.add('place__like_active')
  }

  _dislikeCard() {
    this._placeLikeButton.classList.remove('place__like_active')
  }

  _isLiked() {
    if (this._likes.some((likeCard) => likeCard._id === this._userId)) return true
    else return false
  }

  _updateLikesStatus() {
    if (this._isLiked()) {
      this._handleCardDislike()
        .then((card) => {
          this._likes = card.likes
          this._dislikeCard()
          this._setLikesCounter()
        })
    } else {
      this._handleCardLike()
        .then((card) => {
          this._likes = card.likes
          this._likeCard()
          this._setLikesCounter()
        })
    }
  }

  _setEventListeners() {
    this._placePhoto.addEventListener('click', () => {
      this._handleClickPhoto()
    })
    this._placeLikeButton.addEventListener('click', () => {
      this._updateLikesStatus()
    })
  }

  _addDeleteButton() {
    this._placeDeleteButton = document.createElement('button')
    this._placeDeleteButton.type = 'button'
    this._placeDeleteButton.classList.add('place__delete-button')
    this._placeDeleteButton.addEventListener('click', () => {
      this._handleCardDelete()
    })
    this._placeСard.append(this._placeDeleteButton)
  }

  generateCard() {
    this._placeСard = this._getTemplate()
    this._placePhoto = this._placeСard.querySelector('.place__photo')
    this._placeLikeCounter = this._placeСard.querySelector('.place__like-counter')
    this._placeLikeButton = this._placeСard.querySelector('.place__like')    
    this._placeHeading = this._placeСard.querySelector('.place__heading')
    this._placeHeading.textContent = this._name
    this._placePhoto.src = this._link
    this._placeLikeCounter.textContent = this._likes.length
    if (this._userId === this._data.owner._id) this._addDeleteButton()
    if (this._isLiked()) this._likeCard()
    this._setEventListeners()

    return this._placeСard
  }

}