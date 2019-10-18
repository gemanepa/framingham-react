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

function calculateMenRiskLevel(score) {}

/***/ })

})
//# sourceMappingURL=index.js.5d65938ae4cc5c8a8909.hot-update.js.map