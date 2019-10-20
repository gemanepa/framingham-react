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
    className: "jsx-1293220843",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-1293220843" + " " + "formsection",
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
    className: "jsx-1293220843",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, translations.framingham_risk_score_calculator), __jsx("h5", {
    className: "jsx-1293220843",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.ccs.ca/images/Guidelines/Tools_and_Calculators_En/FRS_eng_2017_fnl1.pdf",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-1293220843",
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
    className: "jsx-1293220843" + " " + "aboutsection",
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
    className: "jsx-1293220843",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "The Framingham Scale allows to determine the risk of suffering any cardiovascular event in 10 years, assessing factors such as age, sex, blood pressure, diabetes, and smoking, assigning a score to each of them and stratifying the patient in low, medium, and high cardiovascular risk. It also allows to calculate the vascular age, which gives an estimate of the vascular damage of the patient through the variation of years between it and its chronological age.")), __jsx("a", {
    href: "https://play.google.com/store/apps/details?id=com.gemanepa.framingham",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-1293220843",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("img", {
    alt: "Google Play Android App",
    src: "https://play.google.com/intl/en_us/badges/static/images/badges/".concat(language, "_badge_web_generic.png"),
    className: "jsx-1293220843" + " " + "gplay-img",
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
    className: "jsx-1293220843",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, translations.results), __jsx("p", {
    className: "jsx-1293220843",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, translations.score, ": ", results.score), __jsx("p", {
    className: "jsx-1293220843",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, translations.cvd, ": ", results.cvd), __jsx("p", {
    className: "jsx-1293220843",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, translations.heartage, ": ", results.heartage), __jsx("p", {
    className: "jsx-1293220843",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, translations.risk, ": ", results.risklevel), __jsx("p", {
    className: "jsx-1293220843",
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
    id: "1293220843",
    __self: this
  }, "p.jsx-1293220843{font-family:Lato;}body.jsx-1293220843{width:100vw;overflow-x:hidden;min-height:100vh;height:auto;margin:0;padding:0;border:0;}#root.jsx-1293220843{background-color:transparent;color:#4689C8;font-weight:600;width:100%;min-height:100vh;height:auto;}a.jsx-1293220843:visited{color:#4689C8;}main.jsx-1293220843{width:90vw;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;min-height:76vh;}section.formsection.jsx-1293220843{width:61%;}section.formsection.jsx-1293220843 h2.jsx-1293220843{color:#4689C8;text-align:center;margin:0;}section.formsection.jsx-1293220843 h5.jsx-1293220843{margin-top:0px;color:#4689C8;text-align:center;}section.aboutsection.jsx-1293220843{width:30%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}section.aboutsection.jsx-1293220843 a.jsx-1293220843{margin-left:20%;}.gplay-img.jsx-1293220843{height:auto;margin:0 auto;width:10vw;}@media (max-width:1199px){main.jsx-1293220843{width:90%;margin:0 auto;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}section.jsx-1293220843{margin-bottom:30px;}section.formsection.jsx-1293220843,section.aboutsection.jsx-1293220843{width:100%;}.gplay-img.jsx-1293220843{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlbWFuZXBhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm95ZWN0b3MvUmVhY3QvZnJhbWluZ2hhbS1yZWFjdC1wd2EvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkZrQixBQUcwQixBQUlMLEFBU2lCLEFBVWhDLEFBR2MsQUFTRCxBQUdJLEFBTUcsQUFNUCxBQUkyQixBQUd6QixBQU9BLEFBT1MsQUFHUixBQUlBLFVBMUNmLEFBZWUsQUFjRyxDQXRDRixBQWdEZCxBQUlBLENBMUVrQixBQXFESixFQW5DaEIsQUFnQm9CLENBTUYsQ0FTc0IsQ0FyRHhDLEVBdUVFLEtBTndCLENBdENYLENBK0JGLEdBN0NHLEFBZ0NNLENBeENILEVBa0NSLEtBb0JYLElBbkJBLEVBMUJrQixJQVJKLEFBd0NkLFlBdkNXLEFBUUUsU0FQRCxFQVFPLFFBUFIsTUEwQ2EsR0F6Q3hCLEFBT2MsWUFDZCxBQVVxQixHQXNDTSw0REFkM0IsTUF2QitCLGlDQXNDN0IsMEZBckNnQixnQkFDbEIiLCJmaWxlIjoiL2hvbWUvZ2VtYW5lcGEvRG9jdW1lbnRzL0RldmVsb3BtZW50L1Byb3llY3Rvcy9SZWFjdC9mcmFtaW5naGFtLXJlYWN0LXB3YS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLy4uL3NyYy9IZWFkZXInXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vLi4vc3JjL05hdmJhcidcbmltcG9ydCBGb3JtIGZyb20gJy4vLi4vc3JjL0Zvcm0nXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vLi4vc3JjL0Zvb3RlcidcbmltcG9ydCBMaW5rSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTGluayc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IEZyYW1pbmdoYW1DYWxjdWxhdG9yIGZyb20gJy4uL3NyYy9GcmFtaW5naGFtQ2FsY3VsYXRvcidcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMywgMi41KSxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBsZXQgW3RyYW5zbGF0aW9ucywgc2V0VHJhbnNsYXRpb25zXSA9IFJlYWN0LnVzZVN0YXRlKHt9KVxuICBsZXQgbGFuZ3VhZ2U7IHJvdXRlci5xdWVyeS5sYW5nID8gbGFuZ3VhZ2UgPSByb3V0ZXIucXVlcnkubGFuZyA6IGxhbmd1YWdlID0gJ2VuJ1xuXG4gIGltcG9ydChgLi8uLi9zcmMvaTE4bi8ke2xhbmd1YWdlfS5qc29uYCkudGhlbihzdHJpbmdzID0+IHtcbiAgICBzZXRUcmFuc2xhdGlvbnMoc3RyaW5ncy5kZWZhdWx0KVxuICB9KTtcblxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgcmVzdWx0c0VsID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIC8vIEhhbmRsZXMgZGF0YSBzdWJtaXR0ZWQgaW4gRm9ybSBjb21wb25lbnRlZCB3aGVuIENhbGN1bGF0ZSBidXR0b24gaXMgcHJlc3NlZFxuICBmdW5jdGlvbiBkYXRhc3VibWl0dGVkSGFuZGxlcihkYXRhKXtcbiAgICBjb25zdCBjYWxjdWxhdGlvbiA9IEZyYW1pbmdoYW1DYWxjdWxhdG9yKGRhdGEpO1xuICAgIHNldFJlc3VsdHMoY2FsY3VsYXRpb24pO1xuICAgIHJlc3VsdHNFbC5jdXJyZW50LmZvY3VzKCk7XG4gICAgd2luZG93LmlubmVyV2lkdGggPCAxMjAwICYmIHJlc3VsdHNFbC5jdXJyZW50LnNjcm9sbEludG9WaWV3KCk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFJlc3VsdHMoKXtcbiAgICBzZXRSZXN1bHRzKGZhbHNlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPEhlYWRlciBuYXZiYXJfdGl0bGU9e3RyYW5zbGF0aW9ucy5uYXZiYXJfdGl0bGV9IC8+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmb3Jtc2VjdGlvblwiPlxuICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgICA8aDI+e3RyYW5zbGF0aW9ucy5mcmFtaW5naGFtX3Jpc2tfc2NvcmVfY2FsY3VsYXRvcn08L2gyPlxuICAgICAgICAgICAgPGg1PlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuY2NzLmNhL2ltYWdlcy9HdWlkZWxpbmVzL1Rvb2xzX2FuZF9DYWxjdWxhdG9yc19Fbi9GUlNfZW5nXzIwMTdfZm5sMS5wZGZcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgIFVzaW5nIDIwMTcgQ2FuYWRpYW4gQ2FyZGlvVmFzY3VsYXIgU29jaWV0eSBHdWlkZWxpbmVzXG4gICAgICAgICAgICAgIDxMaW5rSWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgIDxGb3JtIGRhdGFzdWJtaXR0ZWRIYW5kbGVyPXtkYXRhc3VibWl0dGVkSGFuZGxlcn0gcmVzZXRSZXN1bHRzPXtyZXNldFJlc3VsdHN9IHRyYW5zbGF0aW9ucz17dHJhbnNsYXRpb25zfSAvPlxuICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8c2VjdGlvbiByZWY9e3Jlc3VsdHNFbH0gY2xhc3NOYW1lPVwiYWJvdXRzZWN0aW9uXCIgYXJpYS1saXZlPSdhc3NlcnRpdmUnPlxuICAgICAgICAgIHshcmVzdWx0cyAmJiA8PlxuICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFRoZSBGcmFtaW5naGFtIFNjYWxlIGFsbG93cyB0byBkZXRlcm1pbmUgdGhlIHJpc2sgb2Ygc3VmZmVyaW5nIGFueSBjYXJkaW92YXNjdWxhciBldmVudCBpbiAxMCB5ZWFycywgYXNzZXNzaW5nIGZhY3RvcnMgc3VjaCBhcyBhZ2UsIHNleCwgYmxvb2QgcHJlc3N1cmUsIGRpYWJldGVzLCBhbmQgc21va2luZywgYXNzaWduaW5nIGEgc2NvcmUgdG8gZWFjaCBvZiB0aGVtIGFuZCBzdHJhdGlmeWluZyB0aGUgcGF0aWVudCBpbiBsb3csIG1lZGl1bSwgYW5kIGhpZ2ggY2FyZGlvdmFzY3VsYXIgcmlzay4gSXQgYWxzbyBhbGxvd3MgdG8gY2FsY3VsYXRlIHRoZSB2YXNjdWxhciBhZ2UsIHdoaWNoIGdpdmVzIGFuIGVzdGltYXRlIG9mIHRoZSB2YXNjdWxhciBkYW1hZ2Ugb2YgdGhlIHBhdGllbnQgdGhyb3VnaCB0aGUgdmFyaWF0aW9uIG9mIHllYXJzIGJldHdlZW4gaXQgYW5kIGl0cyBjaHJvbm9sb2dpY2FsIGFnZS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLmdlbWFuZXBhLmZyYW1pbmdoYW1cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdwbGF5LWltZ1wiXG4gICAgICAgICAgICAgIGFsdD1cIkdvb2dsZSBQbGF5IEFuZHJvaWQgQXBwXCJcbiAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vaW50bC9lbl91cy9iYWRnZXMvc3RhdGljL2ltYWdlcy9iYWRnZXMvJHtsYW5ndWFnZX1fYmFkZ2Vfd2ViX2dlbmVyaWMucG5nYH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC8+fVxuICAgICAgICAgIHtyZXN1bHRzICYmIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gPlxuICAgICAgICAgIDxoMz57dHJhbnNsYXRpb25zLnJlc3VsdHN9PC9oMz5cbiAgICAgICAgICAgIDxwPnt0cmFuc2xhdGlvbnMuc2NvcmV9OiB7cmVzdWx0cy5zY29yZX08L3A+XG4gICAgICAgICAgICA8cD57dHJhbnNsYXRpb25zLmN2ZH06IHtyZXN1bHRzLmN2ZH08L3A+XG4gICAgICAgICAgICA8cD57dHJhbnNsYXRpb25zLmhlYXJ0YWdlfToge3Jlc3VsdHMuaGVhcnRhZ2V9PC9wPlxuICAgICAgICAgICAgPHA+e3RyYW5zbGF0aW9ucy5yaXNrfToge3Jlc3VsdHMucmlza2xldmVsfTwvcD5cbiAgICAgICAgICAgIDxwPnt0cmFuc2xhdGlvbnMudHJlYXRtZW50fToge3Jlc3VsdHMubmVlZHN0cmVhdG1lbnR9PC9wPlxuICAgICAgICAgIDwvUGFwZXI+fVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L21haW4+XG4gICAgICA8IEZvb3RlciAvPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG87XG4gICAgICB9XG5cbiAgICAgIGJvZHkge1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICB9XG4gICAgICAjcm9vdCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBjb2xvcjogIzQ2ODlDODtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB9XG5cbiAgICAgIGE6dmlzaXRlZCB7XG4gICAgICAgIGNvbG9yOiAjNDY4OUM4XG4gICAgICB9XG5cbiAgICAgIG1haW4ge1xuICAgICAgICB3aWR0aDogOTB2dztcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBtaW4taGVpZ2h0OiA3NnZoO1xuICAgICAgfVxuXG4gICAgICBzZWN0aW9uLmZvcm1zZWN0aW9uIHtcbiAgICAgICAgd2lkdGg6IDYxJTtcbiAgICAgIH1cbiAgICAgIHNlY3Rpb24uZm9ybXNlY3Rpb24gaDIge1xuICAgICAgICBjb2xvcjogIzQ2ODlDODtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG5cbiAgICAgIHNlY3Rpb24uZm9ybXNlY3Rpb24gaDUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICBjb2xvcjogIzQ2ODlDODtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIHNlY3Rpb24uYWJvdXRzZWN0aW9uIHtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIH1cbiAgICAgIHNlY3Rpb24uYWJvdXRzZWN0aW9uIGEge21hcmdpbi1sZWZ0OiAyMCU7fVxuXG4gICAgICAuZ3BsYXktaW1nIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgd2lkdGg6IDEwdnc7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgfVxuICAgICAgICBzZWN0aW9uLmZvcm1zZWN0aW9uLCBzZWN0aW9uLmFib3V0c2VjdGlvbiB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuZ3BsYXktaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuXG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.6f967285eb6f96ce8400.hot-update.js.map