import { METHOD } from '../constants.js'

export default class Api {
  constructor (config) {
    this.url = config.url
    this.headers = config.headers
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json()
    }
  return Promise.reject(new Error(`Произошла ошибка со статус кодом ${res.status}`))
  }

  _handleError(err) {
    return Promise.reject(err)
  }
    
  getCards() {
    return fetch(`${this.url}/cards`, {
      headers: this.headers,
    })
    .then(this._handleResponse)
    .catch(this._handleError)
  }

  createCard({name, link}) {
    return fetch(`${this.url}/cards`, {
      method: METHOD.POST,
      headers: this.headers,
      body: JSON.stringify({ name, link })
    })
    .then(this._handleResponse)
    .catch(this._handleError)
  }

  deleteCard(id) {
    return fetch(`${this.url}/cards/${id}`, {
      method: METHOD.DELETE,
      headers: this.headers,
    })
    .then(this._handleResponse)
    .catch(this._handleError)
    }

  likeCard(cardId) {
    return fetch(`${this.url}/cards/likes/${cardId}`, {
      method: METHOD.PUT,  
      headers: this.headers,
    })
    .then(this._handleResponse)
    .catch(this._handleError)
  }

  dislikeCard(cardId) {
    return fetch(`${this.url}/cards/likes/${cardId}`, {
      method: METHOD.DELETE,  
      headers: this.headers,
    })
    .then(this._handleResponse)
    .catch(this._handleError)
  }

  getMyInfo() {
    return fetch(`${this.url}/users/me`, {
      headers: this.headers,
    })
    .then(this._handleResponse)
    .catch(this._handleError)
  }

  updateMyInfo({name, about}) {
    return fetch(`${this.url}/users/me`, {
      method: METHOD.PATCH, 
      headers: this.headers,
      body: JSON.stringify({ name, about })
    })
    .then(this._handleResponse)
    .catch(this._handleError)
  }

  updateMyAvatar(avatar) {
    return fetch(`${this.url}/users/me/avatar`, {
      method: METHOD.PATCH, 
      headers: this.headers,
      body: JSON.stringify({ avatar })
    })
    .then(this._handleResponse)
    .catch(this._handleError)
  }
}