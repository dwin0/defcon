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

/***/ "./src/js/events.js":
/*!**************************!*\
  !*** ./src/js/events.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener(\"DOMContentLoaded\", () => {\n    const filter = {\n        hideLocations: {},\n        hideEvents: {}\n    };\n\n    addCheckboxListener(filter);\n    addToggleMoreInformationListener();\n});\n\nfunction addCheckboxListener(filter) {\n    const locationCheckboxes = document.getElementsByClassName(\n        \"filter__checkbox--location\"\n    );\n    const eventCheckboxes = document.getElementsByClassName(\n        \"filter__checkbox--event\"\n    );\n\n    Array.from(eventCheckboxes).forEach(checkbox =>\n        checkbox.addEventListener(\"click\", event => {\n            const eventName = event.target.value;\n            const hide = !event.target.checked;\n\n            filter.hideEvents[eventName] = hide;\n\n            toggleEvent(filter);\n        })\n    );\n\n    Array.from(locationCheckboxes).forEach(checkbox =>\n        checkbox.addEventListener(\"click\", event => {\n            const locationName = event.target.value;\n            const hide = !event.target.checked;\n\n            filter.hideLocations[locationName] = hide;\n\n            toggleEvent(filter);\n        })\n    );\n}\n\nfunction toggleEvent(filter) {\n    const eventElements = document.getElementsByClassName(\"event\");\n\n    Array.from(eventElements).forEach(event => {\n        eventName = event.querySelector(\".event__name\").textContent;\n        eventLocation = event.querySelector(\".event__location\").textContent;\n\n        const isHidden =\n            filter.hideEvents[eventName] || filter.hideLocations[eventLocation];\n\n        if (isHidden) {\n            event.style.display = \"none\";\n        } else {\n            event.style.display = \"block\";\n        }\n    });\n}\n\nfunction addToggleMoreInformationListener() {\n    const openMoreButtons = document.getElementsByClassName(\n        \"event__open-more-information\"\n    );\n    Array.from(openMoreButtons).forEach(button =>\n        button.addEventListener(\"click\", () => {\n            const event = button.closest(\".event\");\n            const moreInformation = event.querySelector(\n                \".event__more-information\"\n            );\n            moreInformation.classList.toggle(\"event__more-information--hidden\");\n        })\n    );\n}\n\n\n//# sourceURL=webpack:///./src/js/events.js?");

/***/ }),

/***/ "./src/js/navigation.js":
/*!******************************!*\
  !*** ./src/js/navigation.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const hamburgerOpenClass = \"hamburger-button--open\";\nconst menuOpenClass = \"menu--open\";\n\nwindow.addEventListener(\"DOMContentLoaded\", () => {\n    addHamburgerButtonListener();\n});\n\nfunction addHamburgerButtonListener() {\n    const hamburgerButton = document.getElementsByClassName(\n        \"hamburger-button\"\n    )[0];\n\n    if (!hamburgerButton) {\n        console.warn(\"could not find menu button\");\n        return;\n    }\n\n    const menu = document.getElementsByClassName(\"menu\")[0];\n\n    if (!menu) {\n        console.warn(\"could not find menu\");\n        return;\n    }\n\n    hamburgerButton.addEventListener(\"click\", () => {\n        hamburgerButton.classList.toggle(hamburgerOpenClass);\n        const wasOpened = menu.classList.toggle(menuOpenClass);\n\n        if (wasOpened) {\n            preventScrolling();\n        } else {\n            activateScrolling();\n        }\n    });\n}\n\nfunction preventScrolling() {\n    document.body.style.overflow = \"hidden\";\n    listenOnPageResize();\n}\n\nfunction activateScrolling() {\n    document.body.style.overflow = \"visible\";\n    stopListeningOnPageResize();\n}\n\nfunction listenOnPageResize() {\n    window.addEventListener(\"resize\", activateScrolling);\n    window.addEventListener(\"orientationchange\", activateScrolling);\n}\n\nfunction stopListeningOnPageResize() {\n    window.removeEventListener(\"resize\", activateScrolling);\n    window.removeEventListener(\"orientationchange\", activateScrolling);\n}\n\n\n//# sourceURL=webpack:///./src/js/navigation.js?");

/***/ }),

/***/ 0:
/*!*******************************************************!*\
  !*** multi ./src/js/navigation.js ./src/js/events.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/navigation.js */\"./src/js/navigation.js\");\nmodule.exports = __webpack_require__(/*! ./src/js/events.js */\"./src/js/events.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/navigation.js_./src/js/events.js?");

/***/ })

/******/ });