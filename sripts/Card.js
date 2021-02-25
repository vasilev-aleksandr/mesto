import { handleImageZoomInClick } from './index.js'

export class Card {
  constructor (data, cardSelector) {
    this._name = data.name
    this._link = data.link
    this._cardSelector = cardSelector
  }
  _getTemplate () {
    const template = document.querySelector(this._cardSelector).content
    const cardElement = template.querySelector('.place').cloneNode(true)
    return cardElement
  }
  _handleClickPopupPhoto () {
    handleImageZoomInClick(this._name,this._link)
    }

  _handleLikeButtonClick() {
    this._placeLikeButton.classList.toggle('place__like_active') 
  }
  _handlePlaceDelete(){
    this._placeСard.remove()
  }

  _setEventListeners () {
    this._placePhoto.addEventListener('click', () => {
      this._handleClickPopupPhoto()
    })
    this._placeLikeButton.addEventListener('click', () => {
      this._handleLikeButtonClick()
    })
    this._placeDeleteButton.addEventListener('click', () => {
      this._handlePlaceDelete()
    })
  }

  generateCard () {
    this._placeСard = this._getTemplate();
    this._placePhoto = this._placeСard.querySelector('.place__photo');
    this._placeLikeButton = this._placeСard.querySelector('.place__like');
    this._placeDeleteButton = this._placeСard.querySelector('.place__delete-button');
    this._placeHeading = this._placeСard.querySelector('.place__heading');
    this._placeHeading.textContent = this._name;
    this._placePhoto.src = this._link;

    this._setEventListeners();

    return this._placeСard
  }

}