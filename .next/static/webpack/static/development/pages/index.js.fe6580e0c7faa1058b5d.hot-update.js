webpackHotUpdate("static/development/pages/index.js",{

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

function calculateMenHDLPoints(hdl) {
  var hdlPoints = 0;

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
/* harmony import */ var _hdl_points_calc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hdl-points-calc */ "./src/FraminghamCalculator/hdl-points-calc.js");


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
  var hdlPoints = Object(_hdl_points_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(hdl, gender);
  console.log('hdlPoints');
  console.log(hdlPoints);
  return data;
}

/***/ })

})
//# sourceMappingURL=index.js.fe6580e0c7faa1058b5d.hot-update.js.map