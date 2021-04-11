/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/add-btn.js":
/*!**********************************!*\
  !*** ./src/assets/js/add-btn.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const btnAdd = document.querySelector('button.btn[data-type=\"add\"]'),\n\t\t\tbtnAddTag = document.querySelector('button.btn[data-type=\"addTag\"]'),\n\t\t\tformAdditionalTag = document.querySelector('.form__additional-tag');\n\n// additional Template Tags\nconst additionalTagTemplate = document.querySelector('#additionalTag'),\n\t\t\ttemplateTagText = additionalTagTemplate.content.querySelector('.additional-tag__text'),\n\t\t\tadditionalTagsBox = document.querySelector('.additional-tags__box');\n\nconst createTag = ()=> {\n\t// get value\n\tlet value = formAdditionalTag.querySelector('input').value;\n\n\t// create new tag from Template\n\ttemplateTagText.textContent = value;\n\t\n\tlet newTemplateTag = additionalTagTemplate.content.cloneNode(true);\n\n\t// add tag\n\tadditionalTagsBox.append(newTemplateTag);\n\n\t// clear value\n\tformAdditionalTag.querySelector('input').value = \"\";\n\n\t// add event listener\n\tlet existTags = additionalTagsBox.children;\n\tlet tagCloseBtn = existTags[existTags.length - 1].querySelector('.additional-tag__close');\n\ttagCloseBtn.addEventListener('click', event => {\n\t\tevent.currentTarget.parentElement.remove();\n\t});\n}\n\n\nif (btnAdd) {\n\tbtnAdd.addEventListener('click', () => {\n\t\tformAdditionalTag.classList.add('active');\n\t});\n}\n\ndocument.addEventListener('click', event => {\n\tif( formAdditionalTag == event.target || btnAddTag == event.target) {\n\t\tformAdditionalTag.classList.remove('active');\n\n\t\tif( btnAddTag == event.target ) {\n\t\t\tcreateTag();\n\t\t}\n\t}\n})\n\n//# sourceURL=webpack:///./src/assets/js/add-btn.js?");

/***/ }),

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const tags = document.querySelectorAll(\".tag\"),\n\t\t\ttagChooseBoxes = document.querySelectorAll(\".tag__choose-box\"),\n\t\t\ttagsList = document.querySelector(\".tags__list\"),\n\t\t\ttagsItems = document.querySelectorAll(\".tags__item\");\n\nlet chooseTagId;\n\n// functions main\nconst closeChoosedTags = ()=> {\n\tfor( activeTag of document.querySelectorAll(\".tag__choose.active\")) {\n\t\tactiveTag.classList.remove(\"active\", \"active-right\");\n\t}\n\ttagsList.classList.remove(\"active\");\n}\n\n// logic main\n\nfor( let tag of tags ) {\n\ttag.addEventListener(\"click\", event => {\n\t\tevent.target.classList.toggle(\"active\");\n\t})\n}\n\nfor( let tagChooseBox of tagChooseBoxes ) {\n\ttagChooseBox.addEventListener(\"click\", event => {\n\t\tchooseTagId = event.currentTarget.id;\n\n\t\tcurrentTagChoose = event.currentTarget.querySelector('.tag__choose');\n\n\t\t// clear style\n\t\tcloseChoosedTags();\n\t\t\n\t\t// add style\n\t\tif( Math.floor(event.view.innerWidth / event.pageX * 10) > 16 ) {\n\t\t\ttagsList.style.left = \"12px\";\n\t\t} else {\n\t\t\ttagsList.style.left = \"149px\";\n\n\t\t\tcurrentTagChoose.classList.add(\"active\", \"active-right\");\n\t\t}\n\n\t\ttagsList.style.top = \"463px\";\n\t\ttagsList.classList.add(\"active\");\n\t\tcurrentTagChoose.classList.add(\"active\");\n\t});\n}\n\nfor(tagsItem of tagsItems) {\n\ttagsItem.addEventListener('click', event => {\n\t\tlet chooseTag = document.getElementById(chooseTagId);\n\n\t\tchooseTag.querySelector(\".tag__choosed\").innerText = event.currentTarget.innerText;\n\t\tcloseChoosedTags();\n\t\tevent.target.classList.add(\"choosed\");\n\t});\n}\n\ndocument.addEventListener(\"click\", event => {\n\tif (!(event.target.classList.contains(\"tag__choose-box\") || event.target.classList.contains(\"tags__item\") || event.target.classList.contains(\"tag__choose\") || event.target.classList.contains(\"tag__choosed\"))) {\n\t\tcloseChoosedTags();\n\t}\n})\n\n//# sourceURL=webpack:///./src/assets/js/main.js?");

/***/ }),

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const modalClose = document.querySelectorAll('button[data-type=\"close\"]');\nconst modal = document.querySelector('.modal');\nconst lS = window.localStorage;\n\nif (modal && !lS.getItem('first')) {\n\n\tlS.setItem('first', true);\n\n\tdocument.addEventListener('DOMContentLoaded', event => {\n\t\tlet modalContent = modal.querySelector('.modal__content');\n\n\t\tmodalContent.addEventListener('click', event => {\n\t\t\tevent.stopPropagation();\n\t\t});\n\n\t\tmodal.classList.add('show');\n\n\t\tsetTimeout( ()=> {\n\t\t\tmodalContent.style.transform = 'none';\n\t\t\tmodalContent.style.opacity = '1';\n\t\t}, 1);\n\t});\n\n\tmodalClose.forEach(item => {\n\t\titem.addEventListener('click', event => {\n\t\t\tlet currentModal = event.currentTarget.closest('.modal');\n\n\t\t\tcloseModal(currentModal);\n\t\t})\n\t});\n\n\tmodal.addEventListener('click', event => {\n\t\tlet currentModal = event.currentTarget;\n\n\t\tcloseModal(currentModal);\n\t});\n\n\tfunction closeModal(currentModal) {\n\t\tlet modalContent = currentModal.querySelector(\".modal__content\");\n\t\tmodalContent.removeAttribute('style');\n\t\t\n\t\tsetTimeout(() => {\n\t\t\tcurrentModal.classList.remove('show');\n\t\t}, 200);\n\t}\n}\n\n//# sourceURL=webpack:///./src/assets/js/modal.js?");

/***/ }),

/***/ "./src/assets/js/sliders.js":
/*!**********************************!*\
  !*** ./src/assets/js/sliders.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const sliders = document.querySelectorAll(\".slider .slider__input\"),\n\t\t\tmaxDistant = 9;\n\n\n// functions slider\n\nconst calcProcentToRem = (proc) => {\n\treturn (proc / 100 * maxDistant).toString();\n}\n\n\nconst changeSlider = (event) => {\n\tlet sliderInput = event.target;\n\tif (sliderInput.tagName != \"INPUT\") {\n\t\tsliderInput = sliderInput.offsetParent.children[0];\n\t}\n\n\tlet\tprocents = sliderInput.nextElementSibling,\n\t\t\ty = event.target.value,\n\t\t\tcolor = `linear-gradient(90deg, rgb(144,142,144) ${y}%, rgb(39,39,39) ${y}%)`;\n\tprocents.innerText = sliderInput.value;\n\n\tprocents.style.top = -calcProcentToRem(sliderInput.value) + 8 + \"rem\";\n\n\tsliderInput.style.background = color;\n}\n\nconst initSliders = () => {\n\tfor( sliderInput of document.querySelectorAll(\".slider input[type='range']\")) {\n\t\tsliderInput.nextElementSibling.innerText = sliderInput.value;\n\t}\t\n}\n\n// logic slider\n\nfor(let slider of sliders) {\n\tslider.addEventListener('touchmove', changeSlider);\n\n\tslider.addEventListener('mousemove', changeSlider);\n}\n\n\ndocument.addEventListener('DOMContentLoaded', initSliders);\n\n//# sourceURL=webpack:///./src/assets/js/sliders.js?");

/***/ }),

/***/ 0:
/*!********************************************************************************************************************!*\
  !*** multi ./src/assets/js/add-btn.js ./src/assets/js/main.js ./src/assets/js/modal.js ./src/assets/js/sliders.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /home/gooden/Code/Work/register/src/assets/js/add-btn.js */\"./src/assets/js/add-btn.js\");\n__webpack_require__(/*! /home/gooden/Code/Work/register/src/assets/js/main.js */\"./src/assets/js/main.js\");\n__webpack_require__(/*! /home/gooden/Code/Work/register/src/assets/js/modal.js */\"./src/assets/js/modal.js\");\nmodule.exports = __webpack_require__(/*! /home/gooden/Code/Work/register/src/assets/js/sliders.js */\"./src/assets/js/sliders.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/add-btn.js_./src/assets/js/main.js_./src/assets/js/modal.js_./src/assets/js/sliders.js?");

/***/ })

/******/ });