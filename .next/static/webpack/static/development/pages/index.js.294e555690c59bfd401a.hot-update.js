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
    intermediate: risklevelIntermediate(gender, ldl, diabetes, wt, agePoints, hdlPoints, smokingPoints),
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
    return 'treatment_low_diabetes';
  } else {
    return 'patient_not_requires_treatment';
  }
}

function risklevelIntermediate(gender, ldl, diabetes, wt, agePoints, hdlPoints, smokingPoints) {
  var hdl = hdlPoints == 2;
  var smoking = smokingPoints > 1;
  var waist = wt.includes('> 102') || wt.includes('> 88');
  var lowdl = ldl.includes('> 135');
  var maleConditional = gender === 'male' && agePoints >= 8 && (hdl || smoking || diabetes || waist);
  var femaleConditional = gender === 'female' && agePoints >= 9 && (hdl || smoking || diabetes || waist);

  if (maleConditional || femaleConditional) {
    return 'treatment_intermediate_hasfactors';
  } else if (lowdl) {
    return 'treatment_intermediate_ldl';
  } else {
    return 'treatment_intermediate_norisks';
  }
}

function risklevelHigh() {
  return 'patient_highly_requires_treatment';
}

/***/ })

})
//# sourceMappingURL=index.js.294e555690c59bfd401a.hot-update.js.map