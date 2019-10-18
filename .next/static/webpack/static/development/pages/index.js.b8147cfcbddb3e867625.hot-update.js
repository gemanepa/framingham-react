webpackHotUpdate("static/development/pages/index.js",{

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
  var hdlPoints = Object(_hdl_points_calc__WEBPACK_IMPORTED_MODULE_1__["default"])(hdl, gender);
  var totalDLPoints = getHgetTotalDLPointsDLPoints(ta, gender);
  console.log('agePoints');
  console.log(agePoints);
  console.log('hdlPoints');
  console.log(hdlPoints);
  return data;
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
  var totaldlPoints = 0;

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
  var totaldlPoints = 0;

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

/***/ })

})
//# sourceMappingURL=index.js.b8147cfcbddb3e867625.hot-update.js.map