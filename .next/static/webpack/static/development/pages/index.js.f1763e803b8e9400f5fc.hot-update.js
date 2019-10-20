webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _src_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../src/Header */ "./src/Header/index.js");
/* harmony import */ var _src_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../src/Navbar */ "./src/Navbar/index.js");
/* harmony import */ var _src_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../src/Form */ "./src/Form/index.js");
/* harmony import */ var _src_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../src/Footer */ "./src/Footer/index.js");
/* harmony import */ var _material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Link */ "./node_modules/@material-ui/icons/Link.js");
/* harmony import */ var _material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _src_FraminghamCalculator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/FraminghamCalculator */ "./src/FraminghamCalculator/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["makeStyles"])(function (theme) {
  return {
    root: {
      padding: theme.spacing(3, 2.5)
    }
  };
});
function Index() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({}),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      translations = _React$useState2[0],
      setTranslations = _React$useState2[1];

  var language;
  router.query.lang ? language = router.query.lang : language = 'en';
  __webpack_require__("./src/i18n lazy recursive ^\\.\\/.*\\.json$")("./".concat(language, ".json")).then(function (strings) {
    setTranslations(strings["default"]);
  });
  var classes = useStyles();

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      results = _React$useState4[0],
      setResults = _React$useState4[1];

  var resultsEl = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null); // Handles data submitted in Form componented when Calculate button is pressed

  function datasubmittedHandler(data) {
    var calculation = Object(_src_FraminghamCalculator__WEBPACK_IMPORTED_MODULE_10__["default"])(data);
    setResults(calculation);
    resultsEl.current.focus();
    window.innerWidth < 1200 && resultsEl.current.scrollIntoView();
  }

  function resetResults() {
    setResults(false);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx(_src_Navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx(_src_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navbar_title: translations.navbar_title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("main", {
    className: "jsx-172140681",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-172140681" + " " + "formsection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-172140681",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, translations.framingham_risk_score_calculator), __jsx("h5", {
    className: "jsx-172140681",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.ccs.ca/images/Guidelines/Tools_and_Calculators_En/FRS_eng_2017_fnl1.pdf",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-172140681",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Using 2017 Canadian CardioVascular Society Guidelines", __jsx(_material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fontSize: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }))), __jsx(_src_Form__WEBPACK_IMPORTED_MODULE_6__["default"], {
    datasubmittedHandler: datasubmittedHandler,
    resetResults: resetResults,
    translations: translations,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }))), __jsx("section", {
    ref: resultsEl,
    "aria-live": "assertive",
    className: "jsx-172140681" + " " + "aboutsection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, !results && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-172140681",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "The Framingham Scale allows to determine the risk of suffering any cardiovascular event in 10 years, assessing factors such as age, sex, blood pressure, diabetes, and smoking, assigning a score to each of them and stratifying the patient in low, medium, and high cardiovascular risk. It also allows to calculate the vascular age, which gives an estimate of the vascular damage of the patient through the variation of years between it and its chronological age.")), __jsx("a", {
    href: "https://play.google.com/store/apps/details?id=com.gemanepa.framingham",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-172140681",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("img", {
    alt: "Google Play Android App",
    src: "https://play.google.com/intl/en_us/badges/static/images/badges/".concat(language, "_badge_web_generic.png"),
    className: "jsx-172140681" + " " + "gplay-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }))), results && __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-172140681",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, translations.results), __jsx("p", {
    className: "jsx-172140681",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, translations.score, ": ", results.score), __jsx("p", {
    className: "jsx-172140681",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, translations.cvd, ": ", results.cvd), __jsx("p", {
    className: "jsx-172140681",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, translations.heartage, ": ", results.heartage), __jsx("p", {
    className: "jsx-172140681",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, translations.risk, ": ", results.risklevel), __jsx("p", {
    className: "jsx-172140681",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, translations.treatment, ": ", results.needstreatment)))), __jsx(_src_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "172140681",
    __self: this
  }, "p.jsx-172140681{font-family:Lato;}body.jsx-172140681{width:100vw;overflow-x:hidden;min-height:100vh;height:auto;margin:0;padding:0;border:0;}#root.jsx-172140681{background-color:transparent;color:#4689C8;font-weight:600;width:100%;min-height:100vh;height:auto;}a.jsx-172140681:visited{color:#4689C8;}main.jsx-172140681{width:90vw;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;min-height:76vh;}section.formsection.jsx-172140681{width:61%;}section.formsection.jsx-172140681 h2.jsx-172140681{color:#4689C8;text-align:center;margin:0;}section.formsection.jsx-172140681 h5.jsx-172140681{margin-top:0px;color:#4689C8;text-align:center;}section.aboutsection.jsx-172140681{width:30%;}section.aboutsection.jsx-172140681 a.jsx-172140681{width:100%;margin:0 auto;}.gplay-img.jsx-172140681{height:auto;margin:0 auto;width:70%;}@media (max-width:1199px){main.jsx-172140681{width:90%;margin:0 auto;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}section.jsx-172140681{margin-bottom:30px;}section.formsection.jsx-172140681,section.aboutsection.jsx-172140681{width:100%;}.gplay-img.jsx-172140681{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlbWFuZXBhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm95ZWN0b3MvUmVhY3QvZnJhbWluZ2hhbS1yZWFjdC1wd2EvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkZrQixBQUcwQixBQUlMLEFBU2lCLEFBVWhDLEFBR2MsQUFTRCxBQUdJLEFBTUcsQUFNUCxBQUdzQixBQUVwQixBQU9BLEFBT1MsQUFHUixBQUlBLFVBeENmLEFBZUEsQUFZa0IsQ0FwQ0YsQUEwQmlDLEFBb0IvQyxBQUlBLENBeEVrQixBQW1ESixFQWpDaEIsQUFnQm9CLENBTUYsRUE1Q2xCLEVBcUVFLEtBTndCLENBcENYLEFBeUJtQyxDQUl0QyxHQTNDSSxBQWdDTSxDQXhDSCxFQWtDUixJQWtCWCxLQWpCQSxFQTFCa0IsSUFSSixBQXdDZCxZQXZDVyxBQVFFLFNBUEQsRUFRTyxRQVBSLFNBQ1gsQUFPYyxZQUNkLEFBVXFCLEdBb0NNLGtFQW5DSSxpQ0FvQzdCLDBGQW5DZ0IsZ0JBQ2xCIiwiZmlsZSI6Ii9ob21lL2dlbWFuZXBhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm95ZWN0b3MvUmVhY3QvZnJhbWluZ2hhbS1yZWFjdC1wd2EvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi8uLi9zcmMvSGVhZGVyJ1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLy4uL3NyYy9OYXZiYXInXG5pbXBvcnQgRm9ybSBmcm9tICcuLy4uL3NyYy9Gb3JtJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLy4uL3NyYy9Gb290ZXInXG5pbXBvcnQgTGlua0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xpbmsnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBGcmFtaW5naGFtQ2FsY3VsYXRvciBmcm9tICcuLi9zcmMvRnJhbWluZ2hhbUNhbGN1bGF0b3InXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMsIDIuNSksXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgbGV0IFt0cmFuc2xhdGlvbnMsIHNldFRyYW5zbGF0aW9uc10gPSBSZWFjdC51c2VTdGF0ZSh7fSlcbiAgbGV0IGxhbmd1YWdlOyByb3V0ZXIucXVlcnkubGFuZyA/IGxhbmd1YWdlID0gcm91dGVyLnF1ZXJ5LmxhbmcgOiBsYW5ndWFnZSA9ICdlbidcblxuICBpbXBvcnQoYC4vLi4vc3JjL2kxOG4vJHtsYW5ndWFnZX0uanNvbmApLnRoZW4oc3RyaW5ncyA9PiB7XG4gICAgc2V0VHJhbnNsYXRpb25zKHN0cmluZ3MuZGVmYXVsdClcbiAgfSk7XG5cbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJlc3VsdHNFbCA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICAvLyBIYW5kbGVzIGRhdGEgc3VibWl0dGVkIGluIEZvcm0gY29tcG9uZW50ZWQgd2hlbiBDYWxjdWxhdGUgYnV0dG9uIGlzIHByZXNzZWRcbiAgZnVuY3Rpb24gZGF0YXN1Ym1pdHRlZEhhbmRsZXIoZGF0YSl7XG4gICAgY29uc3QgY2FsY3VsYXRpb24gPSBGcmFtaW5naGFtQ2FsY3VsYXRvcihkYXRhKTtcbiAgICBzZXRSZXN1bHRzKGNhbGN1bGF0aW9uKTtcbiAgICByZXN1bHRzRWwuY3VycmVudC5mb2N1cygpO1xuICAgIHdpbmRvdy5pbm5lcldpZHRoIDwgMTIwMCAmJiByZXN1bHRzRWwuY3VycmVudC5zY3JvbGxJbnRvVmlldygpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRSZXN1bHRzKCl7XG4gICAgc2V0UmVzdWx0cyhmYWxzZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxIZWFkZXIgbmF2YmFyX3RpdGxlPXt0cmFuc2xhdGlvbnMubmF2YmFyX3RpdGxlfSAvPlxuXG4gICAgICA8bWFpbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZm9ybXNlY3Rpb25cIj5cbiAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgICAgPGgyPnt0cmFuc2xhdGlvbnMuZnJhbWluZ2hhbV9yaXNrX3Njb3JlX2NhbGN1bGF0b3J9PC9oMj5cbiAgICAgICAgICAgIDxoNT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmNjcy5jYS9pbWFnZXMvR3VpZGVsaW5lcy9Ub29sc19hbmRfQ2FsY3VsYXRvcnNfRW4vRlJTX2VuZ18yMDE3X2ZubDEucGRmXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICBVc2luZyAyMDE3IENhbmFkaWFuIENhcmRpb1Zhc2N1bGFyIFNvY2lldHkgR3VpZGVsaW5lc1xuICAgICAgICAgICAgICA8TGlua0ljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICA8Rm9ybSBkYXRhc3VibWl0dGVkSGFuZGxlcj17ZGF0YXN1Ym1pdHRlZEhhbmRsZXJ9IHJlc2V0UmVzdWx0cz17cmVzZXRSZXN1bHRzfSB0cmFuc2xhdGlvbnM9e3RyYW5zbGF0aW9uc30gLz5cbiAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPHNlY3Rpb24gcmVmPXtyZXN1bHRzRWx9IGNsYXNzTmFtZT1cImFib3V0c2VjdGlvblwiIGFyaWEtbGl2ZT0nYXNzZXJ0aXZlJz5cbiAgICAgICAgICB7IXJlc3VsdHMgJiYgPD5cbiAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBUaGUgRnJhbWluZ2hhbSBTY2FsZSBhbGxvd3MgdG8gZGV0ZXJtaW5lIHRoZSByaXNrIG9mIHN1ZmZlcmluZyBhbnkgY2FyZGlvdmFzY3VsYXIgZXZlbnQgaW4gMTAgeWVhcnMsIGFzc2Vzc2luZyBmYWN0b3JzIHN1Y2ggYXMgYWdlLCBzZXgsIGJsb29kIHByZXNzdXJlLCBkaWFiZXRlcywgYW5kIHNtb2tpbmcsIGFzc2lnbmluZyBhIHNjb3JlIHRvIGVhY2ggb2YgdGhlbSBhbmQgc3RyYXRpZnlpbmcgdGhlIHBhdGllbnQgaW4gbG93LCBtZWRpdW0sIGFuZCBoaWdoIGNhcmRpb3Zhc2N1bGFyIHJpc2suIEl0IGFsc28gYWxsb3dzIHRvIGNhbGN1bGF0ZSB0aGUgdmFzY3VsYXIgYWdlLCB3aGljaCBnaXZlcyBhbiBlc3RpbWF0ZSBvZiB0aGUgdmFzY3VsYXIgZGFtYWdlIG9mIHRoZSBwYXRpZW50IHRocm91Z2ggdGhlIHZhcmlhdGlvbiBvZiB5ZWFycyBiZXR3ZWVuIGl0IGFuZCBpdHMgY2hyb25vbG9naWNhbCBhZ2UuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5nZW1hbmVwYS5mcmFtaW5naGFtXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncGxheS1pbWdcIlxuICAgICAgICAgICAgICBhbHQ9XCJHb29nbGUgUGxheSBBbmRyb2lkIEFwcFwiXG4gICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vcGxheS5nb29nbGUuY29tL2ludGwvZW5fdXMvYmFkZ2VzL3N0YXRpYy9pbWFnZXMvYmFkZ2VzLyR7bGFuZ3VhZ2V9X2JhZGdlX3dlYl9nZW5lcmljLnBuZ2B9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvPn1cbiAgICAgICAgICB7cmVzdWx0cyAmJiA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9ID5cbiAgICAgICAgICA8aDM+e3RyYW5zbGF0aW9ucy5yZXN1bHRzfTwvaDM+XG4gICAgICAgICAgICA8cD57dHJhbnNsYXRpb25zLnNjb3JlfToge3Jlc3VsdHMuc2NvcmV9PC9wPlxuICAgICAgICAgICAgPHA+e3RyYW5zbGF0aW9ucy5jdmR9OiB7cmVzdWx0cy5jdmR9PC9wPlxuICAgICAgICAgICAgPHA+e3RyYW5zbGF0aW9ucy5oZWFydGFnZX06IHtyZXN1bHRzLmhlYXJ0YWdlfTwvcD5cbiAgICAgICAgICAgIDxwPnt0cmFuc2xhdGlvbnMucmlza306IHtyZXN1bHRzLnJpc2tsZXZlbH08L3A+XG4gICAgICAgICAgICA8cD57dHJhbnNsYXRpb25zLnRyZWF0bWVudH06IHtyZXN1bHRzLm5lZWRzdHJlYXRtZW50fTwvcD5cbiAgICAgICAgICA8L1BhcGVyPn1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9tYWluPlxuICAgICAgPCBGb290ZXIgLz5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xuICAgICAgfVxuXG4gICAgICBib2R5IHtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgfVxuICAgICAgI3Jvb3Qge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY29sb3I6ICM0Njg5Qzg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgfVxuXG4gICAgICBhOnZpc2l0ZWQge1xuICAgICAgICBjb2xvcjogIzQ2ODlDOFxuICAgICAgfVxuXG4gICAgICBtYWluIHtcbiAgICAgICAgd2lkdGg6IDkwdnc7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgbWluLWhlaWdodDogNzZ2aDtcbiAgICAgIH1cblxuICAgICAgc2VjdGlvbi5mb3Jtc2VjdGlvbiB7XG4gICAgICAgIHdpZHRoOiA2MSU7XG4gICAgICB9XG4gICAgICBzZWN0aW9uLmZvcm1zZWN0aW9uIGgyIHtcbiAgICAgICAgY29sb3I6ICM0Njg5Qzg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICBzZWN0aW9uLmZvcm1zZWN0aW9uIGg1IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgY29sb3I6ICM0Njg5Qzg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBzZWN0aW9uLmFib3V0c2VjdGlvbiB7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICB9XG5cbiAgICAgIHNlY3Rpb24uYWJvdXRzZWN0aW9uIGEge3dpZHRoOiAxMDAlOyBtYXJnaW46IDAgYXV0bzt9XG4gICAgICAuZ3BsYXktaW1nIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICBtYWluIHtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIHNlY3Rpb24uZm9ybXNlY3Rpb24sIHNlY3Rpb24uYWJvdXRzZWN0aW9uIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ncGxheS1pbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.f1763e803b8e9400f5fc.hot-update.js.map