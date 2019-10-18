webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/FraminghamCalculator/ta-points-calc.js":
/*!****************************************************!*\
  !*** ./src/FraminghamCalculator/ta-points-calc.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getTAPoints; });
function getTAPoints(ta, treatment, gender) {
  if (gender === 'male') {
    return calculateMenTAPoints(ta, treatment);
  } else {
    return calculateWomenTAPoints(ta, treatment);
  }
}

function calculateMenTAPoints(ta) {}

/***/ })

})
//# sourceMappingURL=index.js.6235f89ffa0c7d8ef8d8.hot-update.js.map