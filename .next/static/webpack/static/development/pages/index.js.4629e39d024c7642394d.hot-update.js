webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/FraminghamCalculator/risk-calc.js":
/*!***********************************************!*\
  !*** ./src/FraminghamCalculator/risk-calc.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calculateRiskLevel; });
function calculateRiskLevel(score, gender) {
  if (gender === 'male') {
    return calculateMenRiskLevel(score);
  } else {
    return calculateWomenRiskLevel(score);
  }
}

function calculateMenRiskLevel(score) {
  var risklevel = 'unknown';

  if (Score <= 10) {
    risklevel = 'low';
  } else if (Score >= 11 && Score <= 14) {
    risklevel = 'intermediate';
  } else if (Score >= 15) {
    risklevel = 'high';
  }

  return risklevel;
}

/***/ })

})
//# sourceMappingURL=index.js.4629e39d024c7642394d.hot-update.js.map