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
  var needstreatment = 'unknown';
  var risklevels = {
    low: risklevelLow(),
    intermediate: risklevelIntermediate(),
    high: risklevelHigh()
  };

  if (risklevel) {
    return risklevels;
  }

  return needstreatment;
}

function risklevelLow() {}

function risklevelIntermediate() {}

function risklevelHigh() {}

/***/ })

})
//# sourceMappingURL=index.js.5eedfe3a56b361741338.hot-update.js.map