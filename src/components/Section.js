export default class Section {
  constructor({items, renderer}, containerSelector) {
    this._items = items
    this._renderer = renderer
    this._container = document.querySelector(containerSelector)
  }
  
  _clear() {
    this._container.innerHTML = ''
  }

  addItem(item, isInitial) {
    if (isInitial) {
      this._items.push(item)
    } else {
      this._items.unshift(item)
    }
  }

  removeItem(item) {
    this._items = this._items.filter((i) => i !== item)
  }

  renderItems() {
    this._clear()
    this._items.forEach(item => {
      this._renderer(this._container, item)
    })
  }
}