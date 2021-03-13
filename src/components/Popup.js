export default class Popup {
  constructor(popupSelector){
    this._popupElement = document.querySelector(popupSelector)
    this._handleEscClose = this._handleEscClose.bind(this)
    this._handleOverlayClickClose = this._handleOverlayClickClose.bind(this)
    this._buttonCloseElement = this._popupElement.querySelector('.popup__close-button')
  }
  _handleEscClose (evt) {
    if (evt.key === 'Escape') this.close()
  }
  
  _handleOverlayClickClose (evt) {
    if (evt.target === evt.currentTarget) this.close()
  }

  setEventListeners () {
    this._buttonCloseElement.addEventListener('click', () => this.close())
    this._popupElement.addEventListener('click', (evt) => this._handleOverlayClickClose(evt))
  }

  open () {
    this._popupElement.classList.add('popup_active');
    document.addEventListener('keydown', this._handleEscClose); 
  }

  close () {
    this._popupElement.classList.remove('popup_active');
    document.removeEventListener('keydown', this._handleEscClose); 
  }

}

