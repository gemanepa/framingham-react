module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouteWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      props = await fetch(`/_next/data${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic prerendering. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../src/Header */ "./src/Header/index.js");
/* harmony import */ var _src_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../src/Navbar */ "./src/Navbar/index.js");
/* harmony import */ var _src_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../src/Form */ "./src/Form/index.js");
/* harmony import */ var _src_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../src/Footer */ "./src/Footer/index.js");
/* harmony import */ var _material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Link */ "@material-ui/icons/Link");
/* harmony import */ var _material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_FraminghamCalculator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/FraminghamCalculator */ "./src/FraminghamCalculator/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/home/ge.martinez/Documents/gemanepa-projects/framingham-react-pwa/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));
function Index() {
  const classes = useStyles(); // Handles data submitted in Form componented when Calculate button is pressed

  function datasubmittedHandler(data) {
    Object(_src_FraminghamCalculator__WEBPACK_IMPORTED_MODULE_9__["default"])(data);
    return true;
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(_src_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(_src_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("main", {
    className: "jsx-2105439721",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-2105439721" + " " + "formsection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-2105439721",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Framingham Risk Score Calculator"), __jsx("h5", {
    className: "jsx-2105439721",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.ccs.ca/images/Guidelines/Tools_and_Calculators_En/FRS_eng_2017_fnl1.pdf",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-2105439721",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Using 2017 Canadian CardioVascular Society Guidelines", __jsx(_material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fontSize: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }))), __jsx(_src_Form__WEBPACK_IMPORTED_MODULE_5__["default"], {
    datasubmittedHandler: datasubmittedHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }))), __jsx("section", {
    className: "jsx-2105439721" + " " + "aboutsection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-2105439721",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "The Framingham Scale allows to determine the risk of suffering any cardiovascular event in 10 years, assessing factors such as age, sex, blood pressure, diabetes, and smoking, assigning a score to each of them and stratifying the patient in low, medium, and high cardiovascular risk. It also allows to calculate the vascular age, which gives an estimate of the vascular damage of the patient through the variation of years between it and its chronological age.")))), __jsx(_src_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2105439721",
    __self: this
  }, "p.jsx-2105439721{font-family:Lato;}body.jsx-2105439721{width:100vw;overflow-x:hidden;min-height:100vh;height:auto;margin:0;padding:0;border:0;}#root.jsx-2105439721{background-color:transparent;color:#4689C8;font-weight:600;width:100%;min-height:100vh;height:auto;}a.jsx-2105439721:visited{color:#4689C8;}main.jsx-2105439721{width:90vw;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;min-height:76vh;}section.formsection.jsx-2105439721{width:61%;}section.formsection.jsx-2105439721 h2.jsx-2105439721{color:#4689C8;text-align:center;margin:0;}section.formsection.jsx-2105439721 h5.jsx-2105439721{margin-top:0px;color:#4689C8;text-align:center;}section.aboutsection.jsx-2105439721{width:30%;}@media (max-width:1199px){main.jsx-2105439721{width:90%;margin:0 auto;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}section.formsection.jsx-2105439721,section.aboutsection.jsx-2105439721{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlLm1hcnRpbmV6L0RvY3VtZW50cy9nZW1hbmVwYS1wcm9qZWN0cy9mcmFtaW5naGFtLXJlYWN0LXB3YS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RGtCLEFBRzBCLEFBSUwsQUFTaUIsQUFVaEMsQUFHYyxBQVNELEFBR0ksQUFNRyxBQU1QLEFBTUUsQUFPQyxVQTNCZixBQWVBLEFBTWtCLENBOUJGLEFBcUNkLENBM0RrQixFQWtCcEIsQUFnQm9CLENBTUYsRUE1Q2xCLE9BeUQwQixDQTlCWCxJQWRDLEFBZ0NNLENBeENILEVBa0NSLFNBQ1gsRUExQmtCLElBUkosQUF3Q2QsWUF2Q1csQUFRRSxTQVBELEVBUU8sUUFQUixTQUNYLEFBT2MsWUFDZCxBQVVxQixHQThCTSxrRUE3QkksaUNBOEI3QiwwRkE3QmdCLGdCQUNsQiIsImZpbGUiOiIvaG9tZS9nZS5tYXJ0aW5lei9Eb2N1bWVudHMvZ2VtYW5lcGEtcHJvamVjdHMvZnJhbWluZ2hhbS1yZWFjdC1wd2EvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi8uLi9zcmMvSGVhZGVyJ1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLy4uL3NyYy9OYXZiYXInXG5pbXBvcnQgRm9ybSBmcm9tICcuLy4uL3NyYy9Gb3JtJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLy4uL3NyYy9Gb290ZXInXG5pbXBvcnQgTGlua0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xpbmsnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBGcmFtaW5naGFtQ2FsY3VsYXRvciBmcm9tICcuLi9zcmMvRnJhbWluZ2hhbUNhbGN1bGF0b3InXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMsIDIpLFxuICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIC8vIEhhbmRsZXMgZGF0YSBzdWJtaXR0ZWQgaW4gRm9ybSBjb21wb25lbnRlZCB3aGVuIENhbGN1bGF0ZSBidXR0b24gaXMgcHJlc3NlZFxuICBmdW5jdGlvbiBkYXRhc3VibWl0dGVkSGFuZGxlcihkYXRhKXtcbiAgICBGcmFtaW5naGFtQ2FsY3VsYXRvcihkYXRhKVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8SGVhZGVyIC8+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmb3Jtc2VjdGlvblwiPlxuICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgICA8aDI+RnJhbWluZ2hhbSBSaXNrIFNjb3JlIENhbGN1bGF0b3I8L2gyPlxuICAgICAgICAgICAgPGg1PlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuY2NzLmNhL2ltYWdlcy9HdWlkZWxpbmVzL1Rvb2xzX2FuZF9DYWxjdWxhdG9yc19Fbi9GUlNfZW5nXzIwMTdfZm5sMS5wZGZcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgIFVzaW5nIDIwMTcgQ2FuYWRpYW4gQ2FyZGlvVmFzY3VsYXIgU29jaWV0eSBHdWlkZWxpbmVzXG4gICAgICAgICAgICAgIDxMaW5rSWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgIDxGb3JtIGRhdGFzdWJtaXR0ZWRIYW5kbGVyPXtkYXRhc3VibWl0dGVkSGFuZGxlcn0gLz5cbiAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYWJvdXRzZWN0aW9uXCI+XG4gICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgVGhlIEZyYW1pbmdoYW0gU2NhbGUgYWxsb3dzIHRvIGRldGVybWluZSB0aGUgcmlzayBvZiBzdWZmZXJpbmcgYW55IGNhcmRpb3Zhc2N1bGFyIGV2ZW50IGluIDEwIHllYXJzLCBhc3Nlc3NpbmcgZmFjdG9ycyBzdWNoIGFzIGFnZSwgc2V4LCBibG9vZCBwcmVzc3VyZSwgZGlhYmV0ZXMsIGFuZCBzbW9raW5nLCBhc3NpZ25pbmcgYSBzY29yZSB0byBlYWNoIG9mIHRoZW0gYW5kIHN0cmF0aWZ5aW5nIHRoZSBwYXRpZW50IGluIGxvdywgbWVkaXVtLCBhbmQgaGlnaCBjYXJkaW92YXNjdWxhciByaXNrLiBJdCBhbHNvIGFsbG93cyB0byBjYWxjdWxhdGUgdGhlIHZhc2N1bGFyIGFnZSwgd2hpY2ggZ2l2ZXMgYW4gZXN0aW1hdGUgb2YgdGhlIHZhc2N1bGFyIGRhbWFnZSBvZiB0aGUgcGF0aWVudCB0aHJvdWdoIHRoZSB2YXJpYXRpb24gb2YgeWVhcnMgYmV0d2VlbiBpdCBhbmQgaXRzIGNocm9ub2xvZ2ljYWwgYWdlLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDwgRm9vdGVyIC8+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIHAge1xuICAgICAgICBmb250LWZhbWlseTogTGF0bztcbiAgICAgIH1cblxuICAgICAgYm9keSB7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgIH1cbiAgICAgICNyb290IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiAjNDY4OUM4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIH1cblxuICAgICAgYTp2aXNpdGVkIHtcbiAgICAgICAgY29sb3I6ICM0Njg5QzhcbiAgICAgIH1cblxuICAgICAgbWFpbiB7XG4gICAgICAgIHdpZHRoOiA5MHZ3O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDc2dmg7XG4gICAgICB9XG5cbiAgICAgIHNlY3Rpb24uZm9ybXNlY3Rpb24ge1xuICAgICAgICB3aWR0aDogNjElO1xuICAgICAgfVxuICAgICAgc2VjdGlvbi5mb3Jtc2VjdGlvbiBoMiB7XG4gICAgICAgIGNvbG9yOiAjNDY4OUM4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgc2VjdGlvbi5mb3Jtc2VjdGlvbiBoNSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgIGNvbG9yOiAjNDY4OUM4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgc2VjdGlvbi5hYm91dHNlY3Rpb24ge1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgfVxuXG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VjdGlvbi5mb3Jtc2VjdGlvbiwgc2VjdGlvbi5hYm91dHNlY3Rpb24ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/home/ge.martinez/Documents/gemanepa-projects/framingham-react-pwa/pages/index.js */"));
}

/***/ }),

/***/ "./src/Footer/index.js":
/*!*****************************!*\
  !*** ./src/Footer/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_developerlogo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../static/developerlogo.png */ "./static/developerlogo.png");
/* harmony import */ var _static_developerlogo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_developerlogo_png__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/ge.martinez/Documents/gemanepa-projects/framingham-react-pwa/src/Footer/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Footer() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("footer", {
    className: "jsx-2164224879",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("a", {
    href: "https://gemanepa.com",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Developed by gemanepa.com",
    className: "jsx-2164224879",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("img", {
    src: _static_developerlogo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "gemanepa",
    className: "jsx-2164224879",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2164224879",
    __self: this
  }, "footer.jsx-2164224879{height:30px;background-color:#3f51b5;margin:auto;text-align:center;overflow:hidden;}footer.jsx-2164224879 a.jsx-2164224879 img.jsx-2164224879{margin-top:3px;height:25px;width:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlLm1hcnRpbmV6L0RvY3VtZW50cy9nZW1hbmVwYS1wcm9qZWN0cy9mcmFtaW5naGFtLXJlYWN0LXB3YS9zcmMvRm9vdGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVrQixBQUd1QixBQVFHLFlBUFUsR0FRYixZQUNELFVBUkMsQ0FTZCxXQVJvQixrQkFDRixnQkFDbEIiLCJmaWxlIjoiL2hvbWUvZ2UubWFydGluZXovRG9jdW1lbnRzL2dlbWFuZXBhLXByb2plY3RzL2ZyYW1pbmdoYW0tcmVhY3QtcHdhL3NyYy9Gb290ZXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGRldmVsb3BlcmxvZ28gZnJvbSAnLi8uLi8uLi9zdGF0aWMvZGV2ZWxvcGVybG9nby5wbmcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9nZW1hbmVwYS5jb21cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICB0aXRsZT1cIkRldmVsb3BlZCBieSBnZW1hbmVwYS5jb21cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtkZXZlbG9wZXJsb2dvfSBhbHQ9XCJnZW1hbmVwYVwiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICBmb290ZXIge1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvb3RlciBhIGltZyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59Il19 */\n/*@ sourceURL=/home/ge.martinez/Documents/gemanepa-projects/framingham-react-pwa/src/Footer/index.js */"));
}

/***/ }),

/***/ "./src/Form/data.js":
/*!**************************!*\
  !*** ./src/Form/data.js ***!
  \**************************/
/*! exports provided: selects, checkboxes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selects", function() { return selects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkboxes", function() { return checkboxes; });
const selects = [{
  label: 'Age',
  name: 'age',
  values: ["30 - 34", "35 - 39", "40 - 44", "45 - 49", "50 - 54", "55 - 59", "60 - 64", "65 - 69", "70 - 74", "75+"]
}, {
  label: 'Colesterol HDL',
  name: 'hdl',
  values: ["< 35.0", "35.0 - 45.9", "46.0 - 49.9", "50.0 - 61.9", "> 62.0"],
  helper: 'mg/dl'
}, {
  label: 'Colesterol LDL',
  name: 'ldl',
  values: ["< 80.0", "80.0 - 135.0", "> 135.0"],
  helper: 'mg/dl'
}, {
  label: 'Colesterol Total',
  name: 'totaldl',
  values: ["< 158", "158 - 200", "201 - 239", "240 - 278", "> 278"],
  helper: 'mg/dl'
}, {
  label: 'Presion Arterial Sistolica',
  name: 'ta',
  values: ["< 120", "120 - 129", "130 - 139", "140 - 149", "150 - 159", "160+"],
  helper: 'mmHg'
}, {
  label: 'Circunferencia de Cintura',
  name: 'wt',
  values: ["< 102 (40)", "> 102 (40)", "Unknown"],
  helper: 'cms (inches)'
}];
const checkboxes = [{
  checkboxKey: "smoking",
  label: "Fumad@r"
}, {
  checkboxKey: "diabetes",
  label: "Diabetes o Glucemia alta en ayunas"
}, {
  checkboxKey: "treatment",
  label: "Hipertension en tratamiento"
}];

/***/ }),

/***/ "./src/Form/index.js":
/*!***************************!*\
  !*** ./src/Form/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "@material-ui/core/FormGroup");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "@material-ui/core/FormHelperText");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "@material-ui/core/FormLabel");
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Radio */ "@material-ui/core/Radio");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "@material-ui/core/RadioGroup");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./data.js */ "./src/Form/data.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__);

var _jsxFileName = "/home/ge.martinez/Documents/gemanepa-projects/framingham-react-pwa/src/Form/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  calcButton: {
    margin: theme.spacing(1),
    width: '40%'
  },
  resetButton: {
    margin: theme.spacing(1)
  }
}));
function Form(props) {
  const classes = useStyles(); //Radio logic

  const [radioVal, setRadioVal] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(''); //Selects logic

  const [selectsVals, setSelectsVals] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({});

  const handleSelectChange = event => {
    setSelectsVals(oldValues => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, oldValues, {
      [event.target.name]: event.target.value
    }));
  }; // Checkbox Logic


  const [checkboxVals, setCheckboxState] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({
    smoking: false,
    diabetes: false,
    treatment: false
  });

  const handleCheckboxChange = name => event => {
    setCheckboxState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, checkboxVals, {
      [name]: event.target.checked
    }));
  };

  function validateSubmittedData(data) {
    if (!data.gender || !data.age || !data.hdl || !data.ldl || !data.totaldl || !data.ta || !data.wt) {
      alert('Falta validacion');
      return false;
    } else if (data.diabetes == undefined || data.smoking == undefined || data.treatment == undefined) {
      alert('???');
      return false;
    }

    return true;
  }

  function resetButtonHandler() {
    setRadioVal('');
    setSelectsVals({});
    setCheckboxState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, checkboxVals, {
      smoking: false,
      diabetes: false,
      treatment: false
    }));
  }

  function calcButtonHandler() {
    const data = {
      gender: radioVal,
      age: selectsVals.age,
      hdl: selectsVals.hdl,
      ldl: selectsVals.ldl,
      totaldl: selectsVals.totaldl,
      ta: selectsVals.ta,
      wt: selectsVals.wt,
      diabetes: checkboxVals.diabetes,
      smoking: checkboxVals.smoking,
      treatment: checkboxVals.treatment
    };

    if (validateSubmittedData(data)) {
      props.datasubmittedHandler(data);
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("form", {
    autoComplete: "off",
    className: "jsx-2156212043",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10___default.a, {
    component: "fieldset",
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_11___default.a, {
    component: "legend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Gender"), __jsx(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_13___default.a, {
    "aria-label": "gender",
    name: "gender",
    value: radioVal,
    onChange: event => setRadioVal(event.target.value),
    row: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
    value: "female",
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }),
    label: "Female",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
    value: "male",
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }),
    label: "Male",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }))), _data_js__WEBPACK_IMPORTED_MODULE_15__["selects"].map(select => __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    htmlFor: select.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, select.label), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_14___default.a, {
    value: selectsVals[select.name],
    onChange: handleSelectChange,
    inputProps: {
      name: select.name,
      id: select.name
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, select.values.map(val => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: val,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, val))), select.helper && __jsx(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, select.helper)), (select.name === 'age' || select.name === 'totaldl' || select.name === 'wt') && __jsx("br", {
    className: "jsx-2156212043" + " " + "desktopOnly",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }))), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_7___default.a, {
    row: true,
    className: "checkboxes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, _data_js__WEBPACK_IMPORTED_MODULE_15__["checkboxes"].map(checkbox => __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_6___default.a, {
      onChange: handleCheckboxChange(checkbox.checkboxKey),
      checked: checkboxVals[checkbox.checkboxKey],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }),
    label: checkbox.label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }))), __jsx("br", {
    className: "jsx-2156212043",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2156212043" + " " + "formbuttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16___default.a, {
    onClick: resetButtonHandler,
    variant: "contained",
    color: "secondary",
    className: classes.resetButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "Reset"),  false && false,  false && false)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2156212043",
    __self: this
  }, ".checkboxes.jsx-2156212043{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin:0 auto;}.formbuttons.jsx-2156212043{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}@media (min-width:1200px){.mobileOnly.jsx-2156212043{display:none;}}@media (max-width:1199px){.desktopOnly.jsx-2156212043{display:none;}form.jsx-2156212043{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}form.jsx-2156212043 div.jsx-2156212043{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.checkboxes.jsx-2156212043{margin:0 auto;}.formbuttons.jsx-2156212043{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}}@media only screen and (max-width:499){.checkboxes.jsx-2156212043{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlLm1hcnRpbmV6L0RvY3VtZW50cy9nZW1hbmVwYS1wcm9qZWN0cy9mcmFtaW5naGFtLXJlYWN0LXB3YS9zcmMvRm9ybS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEySmdCLEFBR3dDLEFBSWhCLEFBT0EsQUFLQSxBQUdELEFBTVcsQUFJVCxBQUlELEFBT1MsYUE1QnhCLEFBS0EsQ0FhQSw0REF6QnFCLEFBZUcsQUFjUSxJQU9qQixxQkFmZix3QkF6QmdCLGNBQ2hCLE1BSStCLFNBZU4sQUFxQkksd0JBUDdCLDJFQWJBLE1BcUJBLFNBcENGIiwiZmlsZSI6Ii9ob21lL2dlLm1hcnRpbmV6L0RvY3VtZW50cy9nZW1hbmVwYS1wcm9qZWN0cy9mcmFtaW5naGFtLXJlYWN0LXB3YS9zcmMvRm9ybS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWwnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveCc7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Hcm91cCc7XG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcbmltcG9ydCBGb3JtSGVscGVyVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtSGVscGVyVGV4dCc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IEZvcm1MYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtTGFiZWwnO1xuXG5pbXBvcnQgUmFkaW8gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW8nO1xuaW1wb3J0IFJhZGlvR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cCc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XG5pbXBvcnQgeyBjaGVja2JveGVzLCBzZWxlY3RzIH0gZnJvbSAnLi9kYXRhLmpzJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgZm9ybUNvbnRyb2w6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgbWluV2lkdGg6IDIyMCxcbiAgfSxcbiAgc2VsZWN0RW1wdHk6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXG4gIH0sXG4gIGNhbGNCdXR0b246IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgd2lkdGg6ICc0MCUnXG4gIH0sXG4gIHJlc2V0QnV0dG9uOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICB9XG59KSk7XG5cbiAgXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0ocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIC8vUmFkaW8gbG9naWNcbiAgY29uc3QgW3JhZGlvVmFsLCBzZXRSYWRpb1ZhbF0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XG5cbiAgLy9TZWxlY3RzIGxvZ2ljXG4gIGNvbnN0IFtzZWxlY3RzVmFscywgc2V0U2VsZWN0c1ZhbHNdID0gUmVhY3QudXNlU3RhdGUoeyB9KTtcbiAgY29uc3QgaGFuZGxlU2VsZWN0Q2hhbmdlID0gZXZlbnQgPT4ge1xuICAgIHNldFNlbGVjdHNWYWxzKG9sZFZhbHVlcyA9PiAoe1xuICAgICAgLi4ub2xkVmFsdWVzLFxuICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgIH0pKTtcbiAgfTtcblxuICAvLyBDaGVja2JveCBMb2dpY1xuICBjb25zdCBbY2hlY2tib3hWYWxzLCBzZXRDaGVja2JveFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICBzbW9raW5nOiBmYWxzZSxcbiAgICBkaWFiZXRlczogZmFsc2UsXG4gICAgdHJlYXRtZW50OiBmYWxzZSxcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hlY2tib3hDaGFuZ2UgPSBuYW1lID0+IGV2ZW50ID0+IHtcbiAgICBzZXRDaGVja2JveFN0YXRlKHsgLi4uY2hlY2tib3hWYWxzLCBbbmFtZV06IGV2ZW50LnRhcmdldC5jaGVja2VkIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlU3VibWl0dGVkRGF0YShkYXRhKSB7XG4gICAgaWYoIWRhdGEuZ2VuZGVyIHx8ICFkYXRhLmFnZSB8fCAhZGF0YS5oZGwgfHwgIWRhdGEubGRsIHx8ICFkYXRhLnRvdGFsZGwgfHwgIWRhdGEudGEgfHwgIWRhdGEud3QpIHtcbiAgICAgIGFsZXJ0KCdGYWx0YSB2YWxpZGFjaW9uJylcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0gZWxzZSBpZiAoZGF0YS5kaWFiZXRlcyA9PSB1bmRlZmluZWQgfHwgZGF0YS5zbW9raW5nID09IHVuZGVmaW5lZCB8fCBkYXRhLnRyZWF0bWVudCA9PSB1bmRlZmluZWQpIHtcbiAgICAgIGFsZXJ0KCc/Pz8nKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgZnVuY3Rpb24gcmVzZXRCdXR0b25IYW5kbGVyKCkge1xuICAgICAgc2V0UmFkaW9WYWwoJycpO1xuICAgICAgc2V0U2VsZWN0c1ZhbHMoeyB9KTtcbiAgICAgIHNldENoZWNrYm94U3RhdGUoeyAuLi5jaGVja2JveFZhbHMsIHNtb2tpbmc6IGZhbHNlLCBkaWFiZXRlczogZmFsc2UsIHRyZWF0bWVudDogZmFsc2UgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjYWxjQnV0dG9uSGFuZGxlcigpe1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBnZW5kZXI6IHJhZGlvVmFsLFxuICAgICAgYWdlOiBzZWxlY3RzVmFscy5hZ2UsXG4gICAgICBoZGw6IHNlbGVjdHNWYWxzLmhkbCxcbiAgICAgIGxkbDogc2VsZWN0c1ZhbHMubGRsLFxuICAgICAgdG90YWxkbDogc2VsZWN0c1ZhbHMudG90YWxkbCxcbiAgICAgIHRhOiBzZWxlY3RzVmFscy50YSxcbiAgICAgIHd0OiBzZWxlY3RzVmFscy53dCxcbiAgICAgIGRpYWJldGVzOiBjaGVja2JveFZhbHMuZGlhYmV0ZXMsXG4gICAgICBzbW9raW5nOiBjaGVja2JveFZhbHMuc21va2luZyxcbiAgICAgIHRyZWF0bWVudDogY2hlY2tib3hWYWxzLnRyZWF0bWVudFxuICAgIH1cbiAgICBpZih2YWxpZGF0ZVN1Ym1pdHRlZERhdGEoZGF0YSkpIHsgcHJvcHMuZGF0YXN1Ym1pdHRlZEhhbmRsZXIoZGF0YSkgfVxuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8Zm9ybSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cbiAgICAgIFxuICAgICAgPEZvcm1Db250cm9sIGNvbXBvbmVudD1cImZpZWxkc2V0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cbiAgICAgICAgPEZvcm1MYWJlbCBjb21wb25lbnQ9XCJsZWdlbmRcIj5HZW5kZXI8L0Zvcm1MYWJlbD5cbiAgICAgICAgPFJhZGlvR3JvdXAgYXJpYS1sYWJlbD1cImdlbmRlclwiIG5hbWU9XCJnZW5kZXJcIiB2YWx1ZT17cmFkaW9WYWx9IG9uQ2hhbmdlPXtldmVudCA9PiBzZXRSYWRpb1ZhbChldmVudC50YXJnZXQudmFsdWUpfSByb3c+XG4gICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJmZW1hbGVcIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwiRmVtYWxlXCIgLz5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cIm1hbGVcIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwiTWFsZVwiIC8+XG4gICAgICAgIDwvUmFkaW9Hcm91cD5cbiAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICB7c2VsZWN0cy5tYXAoc2VsZWN0ID0+XG4gICAgICAgIDw+XG4gICAgICAgICAgPEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XG4gICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPXtzZWxlY3QubmFtZX0+e3NlbGVjdC5sYWJlbH08L0lucHV0TGFiZWw+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RzVmFsc1tzZWxlY3QubmFtZV19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3RDaGFuZ2V9XG4gICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICBuYW1lOiBzZWxlY3QubmFtZSxcbiAgICAgICAgICAgICAgICBpZDogc2VsZWN0Lm5hbWUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICB7c2VsZWN0LnZhbHVlcy5tYXAodmFsID0+IFxuICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e3ZhbH0+e3ZhbH08L01lbnVJdGVtPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAge3NlbGVjdC5oZWxwZXIgJiYgPEZvcm1IZWxwZXJUZXh0PntzZWxlY3QuaGVscGVyfTwvRm9ybUhlbHBlclRleHQ+fVxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgXG4gICAgICAgICAgeyhzZWxlY3QubmFtZSA9PT0gJ2FnZScgfHwgc2VsZWN0Lm5hbWUgPT09ICd0b3RhbGRsJyB8fCBzZWxlY3QubmFtZSA9PT0gJ3d0JykgJiYgPGJyIGNsYXNzTmFtZT1cImRlc2t0b3BPbmx5XCIvPn1cbiAgICAgICAgPC8+XG4gICAgICApfVxuXG4gICAgICA8Rm9ybUdyb3VwIHJvdyBjbGFzc05hbWU9XCJjaGVja2JveGVzXCI+XG4gICAgICB7Y2hlY2tib3hlcy5tYXAoY2hlY2tib3ggPT5cbiAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgIDxDaGVja2JveCBvbkNoYW5nZT17aGFuZGxlQ2hlY2tib3hDaGFuZ2UoY2hlY2tib3guY2hlY2tib3hLZXkpfSBjaGVja2VkPXtjaGVja2JveFZhbHNbY2hlY2tib3guY2hlY2tib3hLZXldfSAvPlxuICAgICAgICAgIH1cbiAgICAgICAgICBsYWJlbD17Y2hlY2tib3gubGFiZWx9XG4gICAgICAgIC8+KX1cbiAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgPGJyIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybWJ1dHRvbnNcIj5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtyZXNldEJ1dHRvbkhhbmRsZXJ9IHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZXNldEJ1dHRvbn0+XG4gICAgICAgICAgUmVzZXRcbiAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgeyh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8IDEyMDAgJiZcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtjYWxjQnV0dG9uSGFuZGxlcn0gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZXNldEJ1dHRvbn0+XG4gICAgICAgICAgICBDYWxjdWxhdGVcbiAgICAgICAgPC9CdXR0b24+KX1cblxuICAgICAgICB7KHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5pbm5lcldpZHRoID4gMTE5OSAmJlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2NhbGNCdXR0b25IYW5kbGVyfSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNhbGNCdXR0b259PlxuICAgICAgICAgICAgQ2FsY3VsYXRlXG4gICAgICAgICAgPC9CdXR0b24+KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY2hlY2tib3hlcyB7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH07XG4gICAgICAuZm9ybWJ1dHRvbnMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCl7XG4gICAgICAgIC5tb2JpbGVPbmx5IHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC5kZXNrdG9wT25seSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBmb3JtIHtcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm0gZGl2IHtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGVja2JveGVzIHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtYnV0dG9ucyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OTkpIHtcbiAgICAgICAgLmNoZWNrYm94ZXMge1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59Il19 */\n/*@ sourceURL=/home/ge.martinez/Documents/gemanepa-projects/framingham-react-pwa/src/Form/index.js */"));
}

/***/ }),

/***/ "./src/FraminghamCalculator/age-points-calc.js":
/*!*****************************************************!*\
  !*** ./src/FraminghamCalculator/age-points-calc.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getAgePoints; });
function getAgePoints(age, gender) {
  if (gender === 'male') {
    return calculateMenAgePoints(age);
  } else {
    return calculateWomenAgePoints(age);
  }
}

function calculateMenAgePoints(ageRangeSelected) {
  let agePoints = 0;

  switch (ageRangeSelected) {
    case "30 - 34":
      agePoints = 0;
      break;

    case "35 - 39":
      agePoints = 2;
      break;

    case "40 - 44":
      agePoints = 5;
      break;

    case "45 - 49":
      agePoints = 7;
      break;

    case "50 - 54":
      agePoints = 8;
      break;

    case "55 - 59":
      agePoints = 10;
      break;

    case "60 - 64":
      agePoints = 11;
      break;

    case "65 - 69":
      agePoints = 12;
      break;

    case "70 - 74":
      agePoints = 14;
      break;

    case "75+":
      agePoints = 15;
      break;
  }

  return agePoints;
}

function calculateWomenAgePoints(ageRangeSelected) {
  let agePoints = 0;

  switch (ageRangeSelected) {
    case "30 - 34":
      agePoints = 0;
      break;

    case "35 - 39":
      agePoints = 2;
      break;

    case "40 - 44":
      agePoints = 4;
      break;

    case "45 - 49":
      agePoints = 5;
      break;

    case "50 - 54":
      agePoints = 7;
      break;

    case "55 - 59":
      agePoints = 8;
      break;

    case "60 - 64":
      agePoints = 9;
      break;

    case "65 - 69":
      agePoints = 10;
      break;

    case "70 - 74":
      agePoints = 11;
      break;

    case "75+":
      agePoints = 12;
      break;
  }

  return agePoints;
}

/***/ }),

/***/ "./src/FraminghamCalculator/hdl-points-calc.js":
/*!*****************************************************!*\
  !*** ./src/FraminghamCalculator/hdl-points-calc.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getHDLPoints; });
function getHDLPoints(hdl, gender) {
  if (gender === 'male') {
    return calculateMenHDLPoints(hdl);
  } else {
    return calculateWomenHDLPoints(hdl);
  }
}

function calculateMenHDLPoints(hdlRangeSelected) {
  let hdlPoints = 0;

  switch (hdlRangeSelected) {
    case "< 35.0":
      hdlPoints = 2;
      break;

    case "35.0 - 45.9":
      hdlPoints = 1;
      break;

    case "46.0 - 49.9":
      hdlPoints = 0;
      break;

    case "50.0 - 61.9":
      hdlPoints = -1;
      break;

    case "> 62.0":
      hdlPoints = -2;
      break;
  }

  return hdlPoints;
}

function calculateWomenHDLPoints(hdlRangeSelected) {
  let hdlPoints = 0;

  switch (hdlRangeSelected) {
    case "< 35.0":
      hdlPoints = 2;
      break;

    case "35.0 - 45.9":
      hdlPoints = 1;
      break;

    case "46.0 - 49.9":
      hdlPoints = 0;
      break;

    case "50.0 - 61.9":
      hdlPoints = -1;
      break;

    case "> 62.0":
      hdlPoints = -2;
      break;
  }

  return hdlPoints;
}

/***/ }),

/***/ "./src/FraminghamCalculator/index.js":
/*!*******************************************!*\
  !*** ./src/FraminghamCalculator/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FraminghamCalculator; });
/* harmony import */ var _age_points_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./age-points-calc */ "./src/FraminghamCalculator/age-points-calc.js");
/* harmony import */ var _hdl_points_calc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hdl-points-calc */ "./src/FraminghamCalculator/hdl-points-calc.js");
/* harmony import */ var _totaldl_points_calc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./totaldl-points-calc */ "./src/FraminghamCalculator/totaldl-points-calc.js");
/* harmony import */ var _ta_points_calc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ta-points-calc */ "./src/FraminghamCalculator/ta-points-calc.js");




function FraminghamCalculator(data) {
  const {
    age,
    diabetes,
    gender,
    hdl,
    ldl,
    smoking,
    ta,
    totaldl,
    treatment,
    wt
  } = data;
  const agePoints = Object(_age_points_calc__WEBPACK_IMPORTED_MODULE_0__["default"])(age, gender);
  const hdlPoints = Object(_hdl_points_calc__WEBPACK_IMPORTED_MODULE_1__["default"])(hdl, gender);
  const totalDLPoints = Object(_totaldl_points_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(totaldl, gender);
  const TAPoints = Object(_ta_points_calc__WEBPACK_IMPORTED_MODULE_3__["default"])(ta, treatment, gender);
  console.log('agePoints');
  console.log(agePoints);
  console.log('hdlPoints');
  console.log(hdlPoints);
  console.log('totalDLPoints');
  console.log(totalDLPoints);
  console.log('TAPoints');
  console.log(TAPoints);
  return data;
}

/***/ }),

/***/ "./src/FraminghamCalculator/ta-points-calc.js":
/*!****************************************************!*\
  !*** ./src/FraminghamCalculator/ta-points-calc.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getTAPoints; });
function getTAPoints(ta, treatment, gender) {
  if (gender === 'male') {
    return calculateMenTAPoints(ta, treatment);
  } else {
    return calculateWomenTAPoints(ta, treatment);
  }
}

function calculateMenTAPoints(taRangeSelected, isOnTreatment) {
  let taPoints = 0;

  switch (taRangeSelected) {
    case "< 120":
      if (!isOnTreatment) {
        taPoints = -2;
      }

      if (isOnTreatment) {
        taPoints = 0;
      }

      break;

    case "120 - 129":
      if (!isOnTreatment) {
        taPoints = 0;
      }

      if (isOnTreatment) {
        taPoints = 2;
      }

      break;

    case "130 - 139":
      if (!isOnTreatment) {
        taPoints = 1;
      }

      if (isOnTreatment) {
        taPoints = 3;
      }

      break;

    case "140 - 149":
      if (!isOnTreatment) {
        taPoints = 2;
      }

      if (isOnTreatment) {
        taPoints = 4;
      }

      break;

    case "150 - 159":
      if (!isOnTreatment) {
        taPoints = 2;
      }

      if (isOnTreatment) {
        taPoints = 4;
      }

      break;

    case "160+":
      if (!isOnTreatment) {
        taPoints = 3;
      }

      if (isOnTreatment) {
        taPoints = 5;
      }

      break;
  }

  return taPoints;
}

function calculateWomenTAPoints(taRangeSelected, isOnTreatment) {
  let taPoints = 0;

  switch (taRangeSelected) {
    case "< 120":
      if (!isOnTreatment) {
        taPoints = -3;
      }

      if (isOnTreatment) {
        taPoints = -1;
      }

      break;

    case "120 - 129":
      if (!isOnTreatment) {
        taPoints = 0;
      }

      if (isOnTreatment) {
        taPoints = 2;
      }

      break;

    case "130 - 139":
      if (!isOnTreatment) {
        taPoints = 1;
      }

      if (isOnTreatment) {
        taPoints = 3;
      }

      break;

    case "140 - 149":
      if (!isOnTreatment) {
        taPoints = 2;
      }

      if (isOnTreatment) {
        taPoints = 5;
      }

      break;

    case "150 - 159":
      if (!isOnTreatment) {
        taPoints = 4;
      }

      if (isOnTreatment) {
        taPoints = 6;
      }

      break;

    case "160+":
      if (!isOnTreatment) {
        taPoints = 5;
      }

      if (isOnTreatment) {
        taPoints = 7;
      }

      break;
  }

  return taPoints;
}

/***/ }),

/***/ "./src/FraminghamCalculator/totaldl-points-calc.js":
/*!*********************************************************!*\
  !*** ./src/FraminghamCalculator/totaldl-points-calc.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getTotalDLPoints; });
function getTotalDLPoints(totaldl, gender) {
  if (gender === 'male') {
    return calculateMenTotalDLPoints(totaldl);
  } else {
    return calculateWomenTotalDLPoints(totaldl);
  }
}

function calculateMenTotalDLPoints(totaldlRangeSelected) {
  let totaldlPoints = 0;

  switch (totaldlRangeSelected) {
    case "< 158":
      totaldlPoints = 0;
      break;

    case "158 - 200":
      totaldlPoints = 1;
      break;

    case "201 - 239":
      totaldlPoints = 2;
      break;

    case "240 - 278":
      totaldlPoints = 3;
      break;

    case "> 278":
      totaldlPoints = 4;
      break;
  }

  return totaldlPoints;
}

function calculateWomenTotalDLPoints(totaldlRangeSelected) {
  let totaldlPoints = 0;

  switch (totaldlRangeSelected) {
    case "< 158":
      totaldlPoints = 0;
      break;

    case "158 - 200":
      totaldlPoints = 1;
      break;

    case "201 - 239":
      totaldlPoints = 3;
      break;

    case "240 - 278":
      totaldlPoints = 4;
      break;

    case "> 278":
      totaldlPoints = 5;
      break;
  }

  return totaldlPoints;
}

/***/ }),

/***/ "./src/Header/index.js":
/*!*****************************!*\
  !*** ./src/Header/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/ge.martinez/Documents/gemanepa-projects/framingham-react-pwa/src/Header/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Header() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("header", {
    className: "jsx-33860185" + " " + "appHeader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-33860185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "CardioRiesgo Framingham")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "33860185",
    __self: this
  }, "h1.jsx-33860185{font-family:Lato;}.appHeader.jsx-33860185{text-align:center;color:#4689C8;font-weight:600;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlLm1hcnRpbmV6L0RvY3VtZW50cy9nZW1hbmVwYS1wcm9qZWN0cy9mcmFtaW5naGFtLXJlYWN0LXB3YS9zcmMvSGVhZGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFnQixBQUcwQixBQUdHLGlCQUZ0QixDQUdrQixjQUNFLGdCQUNsQiIsImZpbGUiOiIvaG9tZS9nZS5tYXJ0aW5lei9Eb2N1bWVudHMvZ2VtYW5lcGEtcHJvamVjdHMvZnJhbWluZ2hhbS1yZWFjdC1wd2Evc3JjL0hlYWRlci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpe1xuICByZXR1cm4oXG4gIDw+XG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJhcHBIZWFkZXJcIj5cbiAgICAgIDxoMT5DYXJkaW9SaWVzZ28gRnJhbWluZ2hhbTwvaDE+XG4gICAgPC9oZWFkZXI+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaDEge1xuICAgICAgICBmb250LWZhbWlseTogTGF0bztcbiAgICAgIH07XG4gICAgICAuYXBwSGVhZGVyIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6ICM0Njg5Qzg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfTtcbiAgICBgfTwvc3R5bGU+XG4gIDwvPlxuICApXG59Il19 */\n/*@ sourceURL=/home/ge.martinez/Documents/gemanepa-projects/framingham-react-pwa/src/Header/index.js */"));
}

/***/ }),

/***/ "./src/Link.js":
/*!*********************!*\
  !*** ./src/Link.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "/home/ge.martinez/Documents/gemanepa-projects/framingham-react-pwa/src/Link.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

/* eslint-disable jsx-a11y/anchor-has-content */






const NextComposed = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function NextComposed(props, ref) {
  const {
    as,
    href,
    prefetch
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["as", "href", "prefetch"]);

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: href,
    prefetch: prefetch,
    as: as,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })));
});
NextComposed.propTypes = {
  as: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  href: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  prefetch: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
}; // A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link

function Link(props) {
  const {
    activeClassName = 'active',
    className: classNameProps,
    innerRef,
    naked
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["activeClassName", "className", "innerRef", "naked"]);

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  const className = clsx__WEBPACK_IMPORTED_MODULE_4___default()(classNameProps, {
    [activeClassName]: router.pathname === props.href && activeClassName
  });

  if (naked) {
    return __jsx(NextComposed, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: className,
      ref: innerRef
    }, other, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }));
  }

  return __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    component: NextComposed,
    className: className,
    ref: innerRef
  }, other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }));
}

Link.propTypes = {
  activeClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  as: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  href: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),
  naked: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  prefetch: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef((props, ref) => __jsx(Link, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
  innerRef: ref,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}))));

/***/ }),

/***/ "./src/Navbar/index.js":
/*!*****************************!*\
  !*** ./src/Navbar/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonAppBar; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Link_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Link.js */ "./src/Link.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _static_applogo_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../static/applogo.png */ "./static/applogo.png");
/* harmony import */ var _static_applogo_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_applogo_png__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/home/ge.martinez/Documents/gemanepa-projects/framingham-react-pwa/src/Navbar/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));
function ButtonAppBar() {
  const classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-218228162" + " " + (classes.root || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    position: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("img", {
    src: _static_applogo_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "CR Framingham",
    className: "jsx-218228162" + " " + "navlogo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: "h6",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(_Link_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/about",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "About"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "218228162",
    __self: this
  }, ".navlogo.jsx-218228162{height:50px;width:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlLm1hcnRpbmV6L0RvY3VtZW50cy9nZW1hbmVwYS1wcm9qZWN0cy9mcmFtaW5naGFtLXJlYWN0LXB3YS9zcmMvTmF2YmFyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DZ0IsQUFHcUIsWUFDRCxXQUNiIiwiZmlsZSI6Ii9ob21lL2dlLm1hcnRpbmV6L0RvY3VtZW50cy9nZW1hbmVwYS1wcm9qZWN0cy9mcmFtaW5naGFtLXJlYWN0LXB3YS9zcmMvTmF2YmFyL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vTGluay5qcyc7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgYXBwbG9nbyBmcm9tICcuLy4uLy4uL3N0YXRpYy9hcHBsb2dvLnBuZydcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG4gIG1lbnVCdXR0b246IHtcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uQXBwQmFyKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxuICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICA8aW1nIHNyYz17YXBwbG9nb30gYWx0PVwiQ1IgRnJhbWluZ2hhbVwiIGNsYXNzTmFtZT1cIm5hdmxvZ29cIiAvPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gLz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCIgY29sb3I9XCJzZWNvbmRhcnlcIj48QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiPkFib3V0PC9CdXR0b24+PC9MaW5rPlxuICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICA8L0FwcEJhcj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAubmF2bG9nbyB7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn0iXX0= */\n/*@ sourceURL=/home/ge.martinez/Documents/gemanepa-projects/framingham-react-pwa/src/Navbar/index.js */"));
}

/***/ }),

/***/ "./static/applogo.png":
/*!****************************!*\
  !*** ./static/applogo.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/applogo-e618d9b2e2703fa34c7367a945f70d44.png";

/***/ }),

/***/ "./static/developerlogo.png":
/*!**********************************!*\
  !*** ./static/developerlogo.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/developerlogo-e7cfdc36f20b6fb3975b90c2f18e9c37.png";

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ge.martinez/Documents/gemanepa-projects/framingham-react-pwa/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Checkbox":
/*!*********************************************!*\
  !*** external "@material-ui/core/Checkbox" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "@material-ui/core/FormGroup":
/*!**********************************************!*\
  !*** external "@material-ui/core/FormGroup" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormGroup");

/***/ }),

/***/ "@material-ui/core/FormHelperText":
/*!***************************************************!*\
  !*** external "@material-ui/core/FormHelperText" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormHelperText");

/***/ }),

/***/ "@material-ui/core/FormLabel":
/*!**********************************************!*\
  !*** external "@material-ui/core/FormLabel" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormLabel");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "@material-ui/core/Link":
/*!*****************************************!*\
  !*** external "@material-ui/core/Link" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Radio":
/*!******************************************!*\
  !*** external "@material-ui/core/Radio" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Radio");

/***/ }),

/***/ "@material-ui/core/RadioGroup":
/*!***********************************************!*\
  !*** external "@material-ui/core/RadioGroup" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/RadioGroup");

/***/ }),

/***/ "@material-ui/core/Select":
/*!*******************************************!*\
  !*** external "@material-ui/core/Select" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Link":
/*!******************************************!*\
  !*** external "@material-ui/icons/Link" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Link");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map