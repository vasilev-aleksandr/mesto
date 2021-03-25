export default class UserInfo {
  constructor({ nameSelector, aboutSelector, avatarSelector }) {
    this._nameElement = document.querySelector(nameSelector)
    this._aboutElement = document.querySelector(aboutSelector)
    this._avatarElement = document.querySelector(avatarSelector)
    this._user = {
      name: this._nameElement.textContent,
      about: this._aboutElement.textContent,
      avatar: this._avatarElement.src
    }
    this.id = null
  }
  
  getUserInfo () {
    return this._user
  }
  
  setUserInfo ({ name, about, _id }) {
    this._user = { name, about }
    this._nameElement.textContent = name
    this._aboutElement.textContent = about
    this.id = _id
  }

  setUserAvatar (link) {
    this._avatarElement.src = link
  }
}