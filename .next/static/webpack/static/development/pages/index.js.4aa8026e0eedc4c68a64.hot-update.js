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
/* harmony import */ var _ta_points_calc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ta-points-calc */ "./src/FraminghamCalculator/ta-points-calc.js");
/* harmony import */ var _smoking_points_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./smoking-points-calc */ "./src/FraminghamCalculator/smoking-points-calc.js");
/* harmony import */ var _cvd_calc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cvd-calc */ "./src/FraminghamCalculator/cvd-calc.js");
/* harmony import */ var _heartage_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./heartage-calc */ "./src/FraminghamCalculator/heartage-calc.js");
/* harmony import */ var _risk_calc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./risk-calc */ "./src/FraminghamCalculator/risk-calc.js");
/* harmony import */ var _needstreatment_calc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./needstreatment-calc */ "./src/FraminghamCalculator/needstreatment-calc.js");









function FraminghamCalculator(data, translations) {
  var age = data.age,
      diabetes = data.diabetes,
      gender = data.gender,
      hdl = data.hdl,
      ldl = data.ldl,
      smoking = data.smoking,
      ta = data.ta,
      totaldl = data.totaldl,
      treatment = data.treatment,
      wt = data.wt; //Points Calculation

  var agePoints = Object(_age_points_calc__WEBPACK_IMPORTED_MODULE_0__["default"])(age, gender);
  var hdlPoints = Object(_hdl_points_calc__WEBPACK_IMPORTED_MODULE_1__["default"])(hdl, gender);
  var dlPoints = Object(_totaldl_points_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(totaldl, gender);
  var taPoints = Object(_ta_points_calc__WEBPACK_IMPORTED_MODULE_3__["default"])(ta, treatment, gender);
  var smokingPoints = Object(_smoking_points_calc__WEBPACK_IMPORTED_MODULE_4__["default"])(smoking, gender);
  var score = agePoints + hdlPoints + dlPoints + taPoints + smokingPoints; // Framingham Score Calculations

  var cvd = Object(_cvd_calc__WEBPACK_IMPORTED_MODULE_5__["default"])(score, gender);
  var heartage = Object(_heartage_calc__WEBPACK_IMPORTED_MODULE_6__["default"])(score, gender);
  var risklevel = Object(_risk_calc__WEBPACK_IMPORTED_MODULE_7__["default"])(score, gender);
  var needstreatment = Object(_needstreatment_calc__WEBPACK_IMPORTED_MODULE_8__["default"])(gender, diabetes, smoking, ldl, wt, agePoints, hdlPoints, smokingPoints, risklevel, language);
  console.log('==================================');
  console.log('agePoints');
  console.log(agePoints);
  console.log('hdlPoints');
  console.log(hdlPoints);
  console.log('totalDLPoints');
  console.log(dlPoints);
  console.log('taPoints');
  console.log(taPoints);
  console.log('smokingPoints');
  console.log(smokingPoints);
  console.log('...');
  console.log('cvd');
  console.log(cvd);
  console.log('heartage');
  console.log(heartage);
  console.log('risklevel');
  console.log(risklevel);
  console.log('needstreatment');
  console.log(needstreatment);
  return {
    score: score,
    cvd: cvd,
    heartage: heartage,
    risklevel: risklevel,
    needstreatment: needstreatment
  };
}

/***/ })

})
//# sourceMappingURL=index.js.4aa8026e0eedc4c68a64.hot-update.js.map