export default class Section {
  constructor({items, renderer}, containerSelector) {
    this._renderedItems = items
    this._renderer = renderer
    this._container = document.querySelector(containerSelector)
  }
  
  _clear() {
    this._container.innerHTML = ''
  }

  addItem(item) {
    this._container.prepend(item)
  }

  renderItems () {
    this._clear()
    this._renderedItems.forEach(item => {
      this._renderer(item)
    })
  }
}