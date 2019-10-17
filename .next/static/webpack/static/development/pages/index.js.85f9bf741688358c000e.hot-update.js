webpackHotUpdate("static/development/pages/index.js",{

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
  var agePoints = 0;

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
  var agePoints = 0;

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

function FraminghamCalculator(data) {
  var age = data.age,
      diabetes = data.diabetes,
      genre = data.genre,
      hdl = data.hdl,
      ldl = data.ldl,
      smoking = data.smoking,
      ta = data.ta,
      totaldl = data.totaldl,
      treatment = data.treatment,
      wt = data.wt;
  var agePoints = Object(_age_points_calc__WEBPACK_IMPORTED_MODULE_0__["default"])(age, gender);
  console.log('agePoints');
  console.log(agePoints);
  return data;
}

/***/ })

})
//# sourceMappingURL=index.js.85f9bf741688358c000e.hot-update.js.map