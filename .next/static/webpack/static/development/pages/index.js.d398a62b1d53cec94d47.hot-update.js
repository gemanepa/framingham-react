webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/FraminghamCalculator/needstreatment-calc.js":
/*!*********************************************************!*\
  !*** ./src/FraminghamCalculator/needstreatment-calc.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return needsTreatment; });
function needsTreatment(gender, diabetes, smoking, ldl, wt, agePoints, hdlPoints, smokingPoints, risklevel) {
  var risklevels = {
    low: risklevelLow(gender, diabetes, agePoints),
    intermediate: risklevelIntermediate(gender, diabetes, wt, agePoints, hdlPoints, smokingPoints),
    high: risklevelHigh()
  };

  if (risklevel) {
    return risklevels[risklevel];
  }

  return 'unknown';
}

function risklevelLow(gender, diabetes, agePoints) {
  var maleConditional = gender === 'male' && agePoints >= 5 && diabetes;
  var femaleConditional = gender === 'female' && agePoints >= 4 && diabetes;

  if (maleConditional || femaleConditional) {
    return 'treatmentLowDiabetes';
  } else {
    return 'patientnotrequirestreatment';
  }
}

function risklevelIntermediate(gender, diabetes, wt, agePoints, hdlPoints, smokingPoints) {
  var maleConditional = gender === 'male' && agePoints >= 8 && (hdlPoints == 2 || smokingPoints > 1 || diabetes);
  return true;
}

function risklevelHigh() {
  return true;
}

/***/ })

})
//# sourceMappingURL=index.js.d398a62b1d53cec94d47.hot-update.js.map