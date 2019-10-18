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

function calculateMenTAPoints(taRangeSelected, isOnTreatment) {
  var taPoints = 0;

  switch (taRangeSelected) {
    case "< 120":
      if (isOnTreatment.equals(no)) {
        taPoints = -2;
      }

      if (isOnTreatment.equals(yes)) {
        taPoints = 0;
      }

      break;

    case "120 - 129":
      if (isOnTreatment.equals(no)) {
        taPoints = 0;
      }

      if (isOnTreatment.equals(yes)) {
        taPoints = 2;
      }

      break;

    case "130 - 139":
      if (isOnTreatment.equals(no)) {
        taPoints = 1;
      }

      if (isOnTreatment.equals(yes)) {
        taPoints = 3;
      }

      break;

    case "140 - 149":
      if (isOnTreatment.equals(no)) {
        taPoints = 2;
      }

      if (isOnTreatment.equals(yes)) {
        taPoints = 4;
      }

      break;

    case "150 - 159":
      if (isOnTreatment.equals(no)) {
        taPoints = 2;
      }

      if (isOnTreatment.equals(yes)) {
        taPoints = 4;
      }

      break;

    case "160+":
      if (isOnTreatment.equals(no)) {
        taPoints = 3;
      }

      if (isOnTreatment.equals(yes)) {
        taPoints = 5;
      }

      break;
  }

  return taPoints;
}

/***/ })

})
//# sourceMappingURL=index.js.e5abc9ed9f7dcf27404f.hot-update.js.map