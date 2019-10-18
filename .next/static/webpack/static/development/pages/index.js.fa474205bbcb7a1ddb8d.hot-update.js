webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/FraminghamCalculator/smoking-points-calc.js":
/*!*********************************************************!*\
  !*** ./src/FraminghamCalculator/smoking-points-calc.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getSmokingPoints; });
function getSmokingPoints(ta, treatment, gender) {
  if (gender === 'male') {
    return calculateMenTAPoints(ta, treatment);
  } else {
    return calculateWomenTAPoints(ta, treatment);
  }
}

/***/ })

})
//# sourceMappingURL=index.js.fa474205bbcb7a1ddb8d.hot-update.js.map