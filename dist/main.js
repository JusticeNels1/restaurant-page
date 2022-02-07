/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"about\": () => (/* binding */ about)\n/* harmony export */ });\n\nfunction about () {\n    const container = document.querySelector('.container');\n    let heading = document.createElement('h1');\n    let descript = document.createElement('p');\n    let hours = document.createElement('p');\n    let location = document.createElement('p');\n\n    heading.innerText = \"Jay's Jerk Spot\";\n    descript.innerText = \n    `This is a restaurant that has some delicious ass chicken, \n    like this shit is so good it'll make you slap yo mamma no drama \n    took niggas to mclarens from hondas, from 0s to commas`;\n    hours.innerText = \n    `time<br>\n    killa<br>\n    woo <br>`\n    container.appendChild(heading);\n    container.appendChild(descript);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"page\": () => (/* binding */ page)\n/* harmony export */ });\n/* harmony import */ var _jerk_chicken_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jerk-chicken.jpg */ \"./src/jerk-chicken.jpg\");\n\n\nfunction page () {\n    const container = document.querySelector('.container');\n    let heading = document.createElement('h1');\n    let img = document.createElement('img');\n    let descript = document.createElement('p');\n\n    heading.innerText = \"Jay's Jerk Spot\"\n    img.src = _jerk_chicken_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    descript.innerText = \"This is a restaurant\"\n    container.appendChild(heading);\n    container.appendChild(img);\n    container.appendChild(descript);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/content.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.js */ \"./src/content.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\nfunction clearDom () {\n    const container = document.querySelector(\".container\")\n    \n    while (container.firstChild) {\n        container.removeChild(container.lastChild);\n    }\n}\n\nconst home_button = document.querySelector('.home');\nconst menu_button = document.querySelector('.menu');\nconst about_button = document.querySelector('.about');\n\nhome_button.onclick = () => {\n    clearDom();\n    (0,_content_js__WEBPACK_IMPORTED_MODULE_0__.page)();\n};\n\nmenu_button.onclick = () => {\n    clearDom();\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu)();\n};\n\nabout_button.onclick = () => {\n    clearDom();\n    (0,_about_js__WEBPACK_IMPORTED_MODULE_2__.about)();\n};\n\n(0,_content_js__WEBPACK_IMPORTED_MODULE_0__.page)();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _images_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images.jpg */ \"./src/images.jpg\");\n\n\nfunction menu () {\n    const container = document.querySelector('.container');\n    let heading = document.createElement('h1');\n    let img = document.createElement('img');\n    let descript = document.createElement('p');\n\n    heading.innerText = \"Jay's Jerk Spot\"\n    img.src = _images_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    descript.innerText = \"This is a restaurant\"\n    container.appendChild(heading);\n    container.appendChild(img);\n    container.appendChild(descript);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/images.jpg":
/*!************************!*\
  !*** ./src/images.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5b5f59a8ca01bf89a044.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images.jpg?");

/***/ }),

/***/ "./src/jerk-chicken.jpg":
/*!******************************!*\
  !*** ./src/jerk-chicken.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6a1efbd865c6d24b9eb8.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/jerk-chicken.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;