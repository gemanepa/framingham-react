webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/FraminghamCalculator/hdl-points-calc.js":
/*!*****************************************************!*\
  !*** ./src/FraminghamCalculator/hdl-points-calc.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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
/* harmony import */ var _hdl_points_calc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hdl-points-calc */ "./src/FraminghamCalculator/hdl-points-calc.js");
/* harmony import */ var _hdl_points_calc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hdl_points_calc__WEBPACK_IMPORTED_MODULE_2__);


function FraminghamCalculator(data) {
  var age = data.age,
      diabetes = data.diabetes,
      gender = data.gender,
      hdl = data.hdl,
      ldl = data.ldl,
      smoking = data.smoking,
      ta = data.ta,
      totaldl = data.totaldl,
      treatment = data.treatment,
      wt = data.wt;
  var agePoints = Object(_age_points_calc__WEBPACK_IMPORTED_MODULE_0__["default"])(age, gender);
  var hdlPoints = _hdl_points_calc__WEBPACK_IMPORTED_MODULE_2___default()(hdl, gender);
  console.log('hdlPoints');
  console.log(hdlPoints);
  return data;
}

/***/ })

})
//# sourceMappingURL=index.js.0e8cf8f5738498d11078.hot-update.js.map