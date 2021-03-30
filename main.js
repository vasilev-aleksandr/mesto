(()=>{"use strict";var e=document.querySelector(".profile__edit-button"),t=document.querySelector(".profile__add-button"),n=document.querySelector(".profile__avatar-edit"),r=".popup_place",o=".popup_profile",i=".popup_avatar",a="DELETE",u="PATCH",s={inputSelector:".popup__input",submitButtonSelector:".popup__save-button ",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type_error",errorSelector:".popup__error",errorClass:"popup__error_visible"};function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"_clear",value:function(){this._container.innerHTML=""}},{key:"addItem",value:function(e,t){t?this._items.push(e):this._items.unshift(e)}},{key:"removeItem",value:function(e){this._items=this._items.filter((function(t){return t!==e}))}},{key:"renderItems",value:function(){var e=this;this._clear(),this._items.forEach((function(t){e._renderer(e._container,t)}))}}])&&l(t.prototype,n),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t,n,r,o,i,a,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=t,this._name=t.name,this._link=t.link,this._likes=t.likes,this.id=t.id,this._userId=n,this._handleCardClick=o,this._handleDeleteClick=i,this._handleCardLike=a,this._handleCardDislike=u,this._cardSelector=r,this._placeСard=null}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".place").cloneNode(!0)}},{key:"_handleClickPhoto",value:function(){this._handleCardClick()}},{key:"_handleCardDelete",value:function(){this._handleDeleteClick(this._placeСard)}},{key:"_handleLikeButtonClick",value:function(){this._hanleCardlike(this.id)}},{key:"_setLikesCounter",value:function(){this._placeLikeCounter.textContent=this._likes.length}},{key:"_likeCard",value:function(){this._placeLikeButton.classList.add("place__like_active")}},{key:"_dislikeCard",value:function(){this._placeLikeButton.classList.remove("place__like_active")}},{key:"_isLiked",value:function(){var e=this;return!!this._likes.some((function(t){return t._id===e._userId}))}},{key:"_updateLikesStatus",value:function(){var e=this;this._isLiked()?this._handleCardDislike().then((function(t){e._likes=t.likes,e._dislikeCard(),e._setLikesCounter()})):this._handleCardLike().then((function(t){e._likes=t.likes,e._likeCard(),e._setLikesCounter()}))}},{key:"_setEventListeners",value:function(){var e=this;this._placePhoto.addEventListener("click",(function(){e._handleClickPhoto()})),this._placeLikeButton.addEventListener("click",(function(){e._updateLikesStatus()}))}},{key:"_addDeleteButton",value:function(){var e=this;this._placeDeleteButton=document.createElement("button"),this._placeDeleteButton.type="button",this._placeDeleteButton.classList.add("place__delete-button"),this._placeDeleteButton.addEventListener("click",(function(){e._handleCardDelete()})),this._placeСard.append(this._placeDeleteButton)}},{key:"generateCard",value:function(){return this._placeСard=this._getTemplate(),this._placePhoto=this._placeСard.querySelector(".place__photo"),this._placeLikeCounter=this._placeСard.querySelector(".place__like-counter"),this._placeLikeButton=this._placeСard.querySelector(".place__like"),this._placeHeading=this._placeСard.querySelector(".place__heading"),this._placeHeading.textContent=this._name,this._placePhoto.src=this._link,this._placeLikeCounter.textContent=this._likes.length,this._userId===this._data.owner._id&&this._addDeleteButton(),this._isLiked()&&this._likeCard(),this._setEventListeners(),this._placeСard}}])&&f(t.prototype,n),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t){var n=t.nameSelector,r=t.aboutSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(n),this._aboutElement=document.querySelector(r),this._avatarElement=document.querySelector(o),this._user={name:this._nameElement.textContent,about:this._aboutElement.textContent,avatar:this._avatarElement.src},this.id=null}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._user}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e._id;this._user={name:t,about:n},this._nameElement.textContent=t,this._aboutElement.textContent=n,this.id=r}},{key:"setUserAvatar",value:function(e){this._avatarElement.src=e}}])&&h(t.prototype,n),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClickClose=this._handleOverlayClickClose.bind(this),this._buttonCloseElement=this._popupElement.querySelector(".popup__close-button")}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClickClose",value:function(e){e.target===e.currentTarget&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._buttonCloseElement.addEventListener("click",(function(){return e.close()})),this._popupElement.addEventListener("click",(function(t){return e._handleOverlayClickClose(t)}))}},{key:"open",value:function(){this._popupElement.classList.add("popup_active"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_active"),document.removeEventListener("keydown",this._handleEscClose)}}])&&_(t.prototype,n),e}();function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t,n){return(b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupDescription=t._popupElement.querySelector(".popup__image-description"),t._popupImage=t._popupElement.querySelector(".popup__image-photo"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.link,n=e.name;b(C(a.prototype),"open",this).call(this),this._popupDescription.textContent=n,this._popupImage.src=t}}])&&m(t.prototype,n),a}(y);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t,n){return(S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleFormSubmit=t,n._formElement=n._popupElement.querySelector(".popup__form"),n._inputList=n._popupElement.querySelectorAll(".popup__input"),n._saveButton=n._popupElement.querySelector(".popup__save-button"),n._buttonText=n._saveButton.textContent,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"_setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"setEventListeners",value:function(){var e=this;S(B(a.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"open",value:function(e){e&&this._setInputValues(e),S(B(a.prototype),"open",this).call(this)}},{key:"close",value:function(){S(B(a.prototype),"close",this).call(this),this._formElement.reset()}},{key:"showLoading",value:function(){this._saveButton.textContent="Сохранение...",this._saveButton.disabled=!0}},{key:"hideLoading",value:function(){this._saveButton.textContent=this._buttonText,this._saveButton.disabled=!1}}])&&L(t.prototype,n),a}(y);function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._hasInvalidInput=function(e){return!e.validity.valid},this._toggleButtonState=function(){r._inputList.some((function(e){return r._hasInvalidInput(e)}))?(r._submitButton.classList.add(r._inactiveButtonClass),r._submitButton.disabled=!0):(r._submitButton.classList.remove(r._inactiveButtonClass),r._submitButton.disabled=!1)},this._isValid=function(e){var t=e.nextElementSibling;e.validity.valid?r._hideInputError(e,t):r._showInputError(e,t,e.validationMessage)},this._showInputError=function(e,t,n){e.classList.add(r._inputErrorClass),t.classList.add(r._errorClass),t.textContent=n},this._hideInputError=function(e,t){e.classList.remove(r._inputErrorClass),t.classList.remove(r._errorClass),t.textContent=""},this._setEventListeners=function(){r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._isValid(e),r._toggleButtonState()}))})),r._toggleButtonState()},this.enableValidation=function(){r._formElement.addEventListener("submit",(function(e){e.preventDefault()})),r._setEventListeners()},this._formElement=document.querySelector(n),this._inputSelector=t.inputSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._submitButton=this._formElement.querySelector(t.submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(t.inputSelector)),this._errorList=Array.from(this._formElement.querySelectorAll(t.errorSelector))}var t,n;return t=e,(n=[{key:"resetValidation",value:function(){for(var e=0;e<this._inputList.length;e++)this._hideInputError(this._inputList[e],this._errorList[e]);this._toggleButtonState()}}])&&I(t.prototype,n),e}();function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t,n){return(T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=V(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(r);if(o){var n=V(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleConfirmButton=t,n._confirmButton=n._popupElement.querySelector(".popup__save-button"),n._elementForDelete=null,n._id=null,n}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;T(V(a.prototype),"setEventListeners",this).call(this),this._confirmButton.addEventListener("click",(function(){e._handleConfirmButton(e._elementForDelete,e._id),e.close()}))}},{key:"open",value:function(e,t){T(V(a.prototype),"open",this).call(this),this._elementForDelete=e,this._id=t}}])&&D(t.prototype,n),a}(y);function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var F=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.url=t.url,this.headers=t.headers}var t,n;return t=e,(n=[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject(new Error("Произошла ошибка со статус кодом ".concat(e.status)))}},{key:"_handleError",value:function(e){return Promise.reject(e)}},{key:"getCards",value:function(){return fetch("".concat(this.url,"/cards"),{headers:this.headers}).then(this._handleResponse).catch(this._handleError)}},{key:"createCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this.url,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:t,link:n})}).then(this._handleResponse).catch(this._handleError)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.url,"/cards/").concat(e),{method:a,headers:this.headers}).then(this._handleResponse).catch(this._handleError)}},{key:"likeCard",value:function(e){return fetch("".concat(this.url,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then(this._handleResponse).catch(this._handleError)}},{key:"dislikeCard",value:function(e){return fetch("".concat(this.url,"/cards/likes/").concat(e),{method:a,headers:this.headers}).then(this._handleResponse).catch(this._handleError)}},{key:"getMyInfo",value:function(){return fetch("".concat(this.url,"/users/me"),{headers:this.headers}).then(this._handleResponse).catch(this._handleError)}},{key:"updateMyInfo",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this.url,"/users/me"),{method:u,headers:this.headers,body:JSON.stringify({name:t,about:n})}).then(this._handleResponse).catch(this._handleError)}},{key:"updateMyAvatar",value:function(e){return fetch("".concat(this.url,"/users/me/avatar"),{method:u,headers:this.headers,body:JSON.stringify({avatar:e})}).then(this._handleResponse).catch(this._handleError)}}])&&M(t.prototype,n),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-21",headers:{authorization:"5272ec4f-012a-4dd0-babb-fcf2aac8eb04","Content-Type":"application/json"}}),H=new d({nameSelector:".profile__name",aboutSelector:".profile__about",avatarSelector:".profile__avatar"}),J=function(e,t){var n=e.name,r=e.link,o=e.likes,i=e.id,a=e.owner;return new p({name:n,link:r,likes:o,id:i,owner:a},t,"#place-template",(function(){Q.open({name:n,link:r})}),(function(e){W.open(e,i)}),(function(){return F.likeCard(i)}),(function(){return F.dislikeCard(i)})).generateCard()},z=new c({items:[],renderer:function(e,t){e.append(t)}},".places");Promise.all([F.getMyInfo(),F.getCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];H.setUserInfo(o),H.setUserAvatar(o.avatar),i.forEach((function(e){var t=e.name,n=e.link,r=e.likes,o=e._id,i=e.owner,a=J({name:t,link:n,likes:r,id:o,owner:i},H.id);z.addItem(a,!0)})),z.renderItems()}));var $=new j(r,(function(e){var t=e.popupPlaceName,n=e.popupPlaceLink;$.showLoading(),F.createCard({name:t,link:n}).then((function(e){var t=e.name,n=e.link,r=e._id,o=e.likes,i=e.owner,a=J({name:t,link:n,id:r,likes:o,owner:i},i._id);z.addItem(a,!1),z.renderItems()})).finally((function(){$.hideLoading(),$.close()}))}));$.setEventListeners();var G=new j(o,(function(e){var t=e.popupProfileName,n=e.popupProfileAbout;G.showLoading(),F.updateMyInfo({name:t,about:n}).then((function(e){var t=e.name,n=e.about;H.setUserInfo({name:t,about:n})})).finally((function(){G.hideLoading(),G.close()}))}));G.setEventListeners();var K=new j(i,(function(e){var t=e.popupInputAvatarPhoto;K.showLoading(),F.updateMyAvatar(t).then((function(e){var t=e.avatar;H.setUserAvatar(t)})).finally((function(){K.hideLoading(),K.close()}))}));K.setEventListeners();var Q=new g(".popup_image");Q.setEventListeners();var W=new U(".popup_delete-confirm",(function(e,t){F.deleteCard(t).then((function(){z.removeItem(e),z.renderItems()}))}));W.setEventListeners();var X=new R(s,r),Y=new R(s,o),Z=new R(s,i);X.enableValidation(),Y.enableValidation(),Z.enableValidation(),t.addEventListener("click",(function(){$.open()})),e.addEventListener("click",(function(){var e=H.getUserInfo();G.open({popupProfileName:e.name,popupProfileAbout:e.about}),Y.resetValidation()})),n.addEventListener("click",(function(){K.open()}))})();