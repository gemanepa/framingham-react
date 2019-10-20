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
    className: "jsx-292379783",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-292379783" + " " + "formsection",
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
    className: "jsx-292379783",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, translations.framingham_risk_score_calculator), __jsx("h5", {
    className: "jsx-292379783",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.ccs.ca/images/Guidelines/Tools_and_Calculators_En/FRS_eng_2017_fnl1.pdf",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-292379783",
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
  }))), __jsx("div", {
    className: "jsx-292379783",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("section", {
    ref: resultsEl,
    "aria-live": "assertive",
    className: "jsx-292379783" + " " + "aboutsection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, !results && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-292379783",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "The Framingham Scale allows to determine the risk of suffering any cardiovascular event in 10 years, assessing factors such as age, sex, blood pressure, diabetes, and smoking, assigning a score to each of them and stratifying the patient in low, medium, and high cardiovascular risk. It also allows to calculate the vascular age, which gives an estimate of the vascular damage of the patient through the variation of years between it and its chronological age.")), __jsx("a", {
    href: "https://play.google.com/store/apps/details?id=com.gemanepa.framingham",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-292379783",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("img", {
    alt: "Google Play Android App",
    src: "https://play.google.com/intl/en_us/badges/static/images/badges/".concat(language, "_badge_web_generic.png"),
    className: "jsx-292379783" + " " + "gplay-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }))), results && __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-292379783",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, translations.results), __jsx("p", {
    className: "jsx-292379783",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, translations.score, ": ", results.score), __jsx("p", {
    className: "jsx-292379783",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, translations.cvd, ": ", results.cvd), __jsx("p", {
    className: "jsx-292379783",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, translations.heartage, ": ", results.heartage), __jsx("p", {
    className: "jsx-292379783",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, translations.risk, ": ", results.risklevel), __jsx("p", {
    className: "jsx-292379783",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, translations.treatment, ": ", results.needstreatment))))), __jsx(_src_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "292379783",
    __self: this
  }, "p.jsx-292379783{font-family:Lato;}body.jsx-292379783{width:100vw;overflow-x:hidden;min-height:100vh;height:auto;margin:0;padding:0;border:0;}#root.jsx-292379783{background-color:transparent;color:#4689C8;font-weight:600;width:100%;min-height:100vh;height:auto;}a.jsx-292379783:visited{color:#4689C8;}main.jsx-292379783{width:90vw;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;min-height:76vh;}section.formsection.jsx-292379783{width:61%;}section.formsection.jsx-292379783 h2.jsx-292379783{color:#4689C8;text-align:center;margin:0;}section.formsection.jsx-292379783 h5.jsx-292379783{margin-top:0px;color:#4689C8;text-align:center;}section.aboutsection.jsx-292379783{width:30%;}.gplay-img.jsx-292379783{width:30%;}@media (max-width:1199px){main.jsx-292379783{width:90%;margin:0 auto;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}section.jsx-292379783{margin-bottom:30px;}section.formsection.jsx-292379783,section.aboutsection.jsx-292379783{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlbWFuZXBhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm95ZWN0b3MvUmVhY3QvZnJhbWluZ2hhbS1yZWFjdC1wd2EvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkZrQixBQUcwQixBQUlMLEFBU2lCLEFBVWhDLEFBR2MsQUFTRCxBQUdJLEFBTUcsQUFNUCxBQUlBLEFBS0UsQUFPUyxBQUdSLFVBakNmLEFBZUEsQUFJQSxBQUtrQixDQWpDRixBQTJDZCxDQWpFa0IsRUFrQnBCLEFBZ0JvQixDQU1GLEVBNUNsQixFQWtFRSxLQU53QixDQWpDWCxJQWRDLEFBZ0NNLENBeENILEVBa0NSLFNBQ1gsRUExQmtCLElBUkosQUF3Q2QsWUF2Q1csQUFRRSxTQVBELEVBUU8sUUFQUixTQUNYLEFBT2MsWUFDZCxBQVVxQixHQWlDTSxrRUFoQ0ksaUNBaUM3QiwwRkFoQ2dCLGdCQUNsQiIsImZpbGUiOiIvaG9tZS9nZW1hbmVwYS9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvUHJveWVjdG9zL1JlYWN0L2ZyYW1pbmdoYW0tcmVhY3QtcHdhL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vLi4vc3JjL0hlYWRlcidcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi8uLi9zcmMvTmF2YmFyJ1xuaW1wb3J0IEZvcm0gZnJvbSAnLi8uLi9zcmMvRm9ybSdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi8uLi9zcmMvRm9vdGVyJ1xuaW1wb3J0IExpbmtJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9MaW5rJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgRnJhbWluZ2hhbUNhbGN1bGF0b3IgZnJvbSAnLi4vc3JjL0ZyYW1pbmdoYW1DYWxjdWxhdG9yJ1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzLCAyLjUpLFxuICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGxldCBbdHJhbnNsYXRpb25zLCBzZXRUcmFuc2xhdGlvbnNdID0gUmVhY3QudXNlU3RhdGUoe30pXG4gIGxldCBsYW5ndWFnZTsgcm91dGVyLnF1ZXJ5LmxhbmcgPyBsYW5ndWFnZSA9IHJvdXRlci5xdWVyeS5sYW5nIDogbGFuZ3VhZ2UgPSAnZW4nXG5cbiAgaW1wb3J0KGAuLy4uL3NyYy9pMThuLyR7bGFuZ3VhZ2V9Lmpzb25gKS50aGVuKHN0cmluZ3MgPT4ge1xuICAgIHNldFRyYW5zbGF0aW9ucyhzdHJpbmdzLmRlZmF1bHQpXG4gIH0pO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByZXN1bHRzRWwgPSBSZWFjdC51c2VSZWYobnVsbCk7XG5cbiAgLy8gSGFuZGxlcyBkYXRhIHN1Ym1pdHRlZCBpbiBGb3JtIGNvbXBvbmVudGVkIHdoZW4gQ2FsY3VsYXRlIGJ1dHRvbiBpcyBwcmVzc2VkXG4gIGZ1bmN0aW9uIGRhdGFzdWJtaXR0ZWRIYW5kbGVyKGRhdGEpe1xuICAgIGNvbnN0IGNhbGN1bGF0aW9uID0gRnJhbWluZ2hhbUNhbGN1bGF0b3IoZGF0YSk7XG4gICAgc2V0UmVzdWx0cyhjYWxjdWxhdGlvbik7XG4gICAgcmVzdWx0c0VsLmN1cnJlbnQuZm9jdXMoKTtcbiAgICB3aW5kb3cuaW5uZXJXaWR0aCA8IDEyMDAgJiYgcmVzdWx0c0VsLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0UmVzdWx0cygpe1xuICAgIHNldFJlc3VsdHMoZmFsc2UpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8SGVhZGVyIG5hdmJhcl90aXRsZT17dHJhbnNsYXRpb25zLm5hdmJhcl90aXRsZX0gLz5cblxuICAgICAgPG1haW4+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZvcm1zZWN0aW9uXCI+XG4gICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgICAgIDxoMj57dHJhbnNsYXRpb25zLmZyYW1pbmdoYW1fcmlza19zY29yZV9jYWxjdWxhdG9yfTwvaDI+XG4gICAgICAgICAgICA8aDU+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5jY3MuY2EvaW1hZ2VzL0d1aWRlbGluZXMvVG9vbHNfYW5kX0NhbGN1bGF0b3JzX0VuL0ZSU19lbmdfMjAxN19mbmwxLnBkZlwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgVXNpbmcgMjAxNyBDYW5hZGlhbiBDYXJkaW9WYXNjdWxhciBTb2NpZXR5IEd1aWRlbGluZXNcbiAgICAgICAgICAgICAgPExpbmtJY29uIGZvbnRTaXplPVwic21hbGxcIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgPEZvcm0gZGF0YXN1Ym1pdHRlZEhhbmRsZXI9e2RhdGFzdWJtaXR0ZWRIYW5kbGVyfSByZXNldFJlc3VsdHM9e3Jlc2V0UmVzdWx0c30gdHJhbnNsYXRpb25zPXt0cmFuc2xhdGlvbnN9IC8+XG4gICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHNlY3Rpb24gcmVmPXtyZXN1bHRzRWx9IGNsYXNzTmFtZT1cImFib3V0c2VjdGlvblwiIGFyaWEtbGl2ZT0nYXNzZXJ0aXZlJz5cbiAgICAgICAgICAgIHshcmVzdWx0cyAmJiA8PlxuICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFRoZSBGcmFtaW5naGFtIFNjYWxlIGFsbG93cyB0byBkZXRlcm1pbmUgdGhlIHJpc2sgb2Ygc3VmZmVyaW5nIGFueSBjYXJkaW92YXNjdWxhciBldmVudCBpbiAxMCB5ZWFycywgYXNzZXNzaW5nIGZhY3RvcnMgc3VjaCBhcyBhZ2UsIHNleCwgYmxvb2QgcHJlc3N1cmUsIGRpYWJldGVzLCBhbmQgc21va2luZywgYXNzaWduaW5nIGEgc2NvcmUgdG8gZWFjaCBvZiB0aGVtIGFuZCBzdHJhdGlmeWluZyB0aGUgcGF0aWVudCBpbiBsb3csIG1lZGl1bSwgYW5kIGhpZ2ggY2FyZGlvdmFzY3VsYXIgcmlzay4gSXQgYWxzbyBhbGxvd3MgdG8gY2FsY3VsYXRlIHRoZSB2YXNjdWxhciBhZ2UsIHdoaWNoIGdpdmVzIGFuIGVzdGltYXRlIG9mIHRoZSB2YXNjdWxhciBkYW1hZ2Ugb2YgdGhlIHBhdGllbnQgdGhyb3VnaCB0aGUgdmFyaWF0aW9uIG9mIHllYXJzIGJldHdlZW4gaXQgYW5kIGl0cyBjaHJvbm9sb2dpY2FsIGFnZS5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLmdlbWFuZXBhLmZyYW1pbmdoYW1cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncGxheS1pbWdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIkdvb2dsZSBQbGF5IEFuZHJvaWQgQXBwXCJcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9pbnRsL2VuX3VzL2JhZGdlcy9zdGF0aWMvaW1hZ2VzL2JhZGdlcy8ke2xhbmd1YWdlfV9iYWRnZV93ZWJfZ2VuZXJpYy5wbmdgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8Lz59XG4gICAgICAgICAgICB7cmVzdWx0cyAmJiA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9ID5cbiAgICAgICAgICAgIDxoMz57dHJhbnNsYXRpb25zLnJlc3VsdHN9PC9oMz5cbiAgICAgICAgICAgICAgPHA+e3RyYW5zbGF0aW9ucy5zY29yZX06IHtyZXN1bHRzLnNjb3JlfTwvcD5cbiAgICAgICAgICAgICAgPHA+e3RyYW5zbGF0aW9ucy5jdmR9OiB7cmVzdWx0cy5jdmR9PC9wPlxuICAgICAgICAgICAgICA8cD57dHJhbnNsYXRpb25zLmhlYXJ0YWdlfToge3Jlc3VsdHMuaGVhcnRhZ2V9PC9wPlxuICAgICAgICAgICAgICA8cD57dHJhbnNsYXRpb25zLnJpc2t9OiB7cmVzdWx0cy5yaXNrbGV2ZWx9PC9wPlxuICAgICAgICAgICAgICA8cD57dHJhbnNsYXRpb25zLnRyZWF0bWVudH06IHtyZXN1bHRzLm5lZWRzdHJlYXRtZW50fTwvcD5cbiAgICAgICAgICAgIDwvUGFwZXI+fVxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgICA8IEZvb3RlciAvPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG87XG4gICAgICB9XG5cbiAgICAgIGJvZHkge1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICB9XG4gICAgICAjcm9vdCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBjb2xvcjogIzQ2ODlDODtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB9XG5cbiAgICAgIGE6dmlzaXRlZCB7XG4gICAgICAgIGNvbG9yOiAjNDY4OUM4XG4gICAgICB9XG5cbiAgICAgIG1haW4ge1xuICAgICAgICB3aWR0aDogOTB2dztcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBtaW4taGVpZ2h0OiA3NnZoO1xuICAgICAgfVxuXG4gICAgICBzZWN0aW9uLmZvcm1zZWN0aW9uIHtcbiAgICAgICAgd2lkdGg6IDYxJTtcbiAgICAgIH1cbiAgICAgIHNlY3Rpb24uZm9ybXNlY3Rpb24gaDIge1xuICAgICAgICBjb2xvcjogIzQ2ODlDODtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG5cbiAgICAgIHNlY3Rpb24uZm9ybXNlY3Rpb24gaDUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICBjb2xvcjogIzQ2ODlDODtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIHNlY3Rpb24uYWJvdXRzZWN0aW9uIHtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgIH1cblxuICAgICAgLmdwbGF5LWltZyB7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgfVxuICAgICAgICBzZWN0aW9uLmZvcm1zZWN0aW9uLCBzZWN0aW9uLmFib3V0c2VjdGlvbiB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cblxuICApO1xufVxuIl19 */\n/*@ sourceURL=/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.c1e0c9ce408f53f266bf.hot-update.js.map