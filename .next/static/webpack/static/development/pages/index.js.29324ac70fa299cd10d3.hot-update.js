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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Link */ "./node_modules/@material-ui/icons/Link.js");
/* harmony import */ var _material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _src_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../src/Header */ "./src/Header/index.js");
/* harmony import */ var _src_Navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../src/Navbar */ "./src/Navbar/index.js");
/* harmony import */ var _src_Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../src/Form */ "./src/Form/index.js");
/* harmony import */ var _src_FraminghamCalculator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/FraminghamCalculator */ "./src/FraminghamCalculator/index.js");
/* harmony import */ var _src_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../src/Footer */ "./src/Footer/index.js");
/* harmony import */ var _src_i18n_head_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../src/i18n/head.json */ "./src/i18n/head.json");
var _src_i18n_head_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../src/i18n/head.json */ "./src/i18n/head.json", 1);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _jsxFileName = "/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;













var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__["makeStyles"])(function (theme) {
  return {
    root: {
      padding: theme.spacing(3, 2.5)
    }
  };
});
function Index() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

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
    var calculation = Object(_src_FraminghamCalculator__WEBPACK_IMPORTED_MODULE_11__["default"])(data, translations);
    setResults(calculation);
    resultsEl.current.focus();
    window.innerWidth < 1200 && resultsEl.current.scrollIntoView();
  }

  function resetResults() {
    setResults(false);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-3965082120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, _src_i18n_head_json__WEBPACK_IMPORTED_MODULE_13__[language].title), __jsx("meta", {
    name: "description",
    content: _src_i18n_head_json__WEBPACK_IMPORTED_MODULE_13__[language].description,
    className: "jsx-3965082120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("meta", {
    name: "keywords",
    content: _src_i18n_head_json__WEBPACK_IMPORTED_MODULE_13__[language].keywords,
    className: "jsx-3965082120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })), __jsx(_src_Navbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx(_src_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    navbar_title: translations.navbar_title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx("main", {
    className: "jsx-3965082120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-3965082120" + " " + "formsection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-3965082120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, translations.framingham_risk_score_calculator), __jsx("h5", {
    className: "jsx-3965082120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.ccs.ca/images/Guidelines/Tools_and_Calculators_En/FRS_eng_2017_fnl1.pdf",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-3965082120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, translations.using_guidelines, __jsx(_material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }))), __jsx(_src_Form__WEBPACK_IMPORTED_MODULE_10__["default"], {
    datasubmittedHandler: datasubmittedHandler,
    resetResults: resetResults,
    translations: translations,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }))), __jsx("section", {
    ref: resultsEl,
    "aria-live": "assertive",
    className: "jsx-3965082120" + " " + "aboutsection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, !results && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-3965082120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "The Framingham Scale allows to determine the risk of suffering any cardiovascular event in 10 years, assessing factors such as age, sex, blood pressure, diabetes, and smoking, assigning a score to each of them and stratifying the patient in low, medium, and high cardiovascular risk. It also allows to calculate the vascular age, which gives an estimate of the vascular damage of the patient through the variation of years between it and its chronological age.")), __jsx("a", {
    href: "https://play.google.com/store/apps/details?id=com.gemanepa.framingham",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-3965082120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("img", {
    alt: "Google Play Android App",
    src: "https://play.google.com/intl/en_us/badges/static/images/badges/".concat(language, "_badge_web_generic.png"),
    className: "jsx-3965082120" + " " + "gplay-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }))), results && __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3965082120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, translations.results), __jsx("p", {
    className: "jsx-3965082120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, translations.score, ": ", results.score), __jsx("p", {
    className: "jsx-3965082120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, translations.cvd, ": ", results.cvd), __jsx("p", {
    className: "jsx-3965082120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, translations.heartage, ": ", results.heartage), __jsx("p", {
    className: "jsx-3965082120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, translations.risk, ": ", results.risklevel), __jsx("p", {
    className: "jsx-3965082120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, translations.treatment, ": ", results.needstreatment)))), __jsx(_src_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3965082120",
    __self: this
  }, "p.jsx-3965082120{font-family:Lato;}body.jsx-3965082120{width:100vw;overflow-x:hidden;min-height:100vh;height:auto;margin:0;padding:0;border:0;}#root.jsx-3965082120{background-color:transparent;color:#4689C8;font-weight:600;width:100%;min-height:100vh;height:auto;}a.jsx-3965082120:visited{color:#4689C8;}main.jsx-3965082120{width:90vw;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;min-height:76vh;}section.formsection.jsx-3965082120{width:61%;}section.formsection.jsx-3965082120 h2.jsx-3965082120{color:#4689C8;text-align:center;margin:0;}section.formsection.jsx-3965082120 h5.jsx-3965082120{margin-top:0px;color:#4689C8;text-align:center;}section.aboutsection.jsx-3965082120{width:30%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}@media (min-width:1200px){section.aboutsection.jsx-3965082120 a.jsx-3965082120{margin-left:45%;}}.gplay-img.jsx-3965082120{height:auto;margin:0 auto;width:16vw;}.gplay-img.jsx-3965082120:hover{-webkit-filter:invert(100%) drop-shadow(8px 8px 10px gray);filter:invert(100%) drop-shadow(8px 8px 10px gray);}@media (max-width:1199px){main.jsx-3965082120{width:90%;margin:0 auto;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}section.jsx-3965082120{margin-bottom:30px;}section.formsection.jsx-3965082120,section.aboutsection.jsx-3965082120{width:100%;}.gplay-img.jsx-3965082120{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlbWFuZXBhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm95ZWN0b3MvUmVhY3QvZnJhbWluZ2hhbS1yZWFjdC1wd2EvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0drQixBQUcwQixBQUlMLEFBU2lCLEFBVWhDLEFBR2MsQUFTRCxBQUdJLEFBTUcsQUFNUCxBQUs2QixBQUczQixBQUt1QyxBQUt2QyxBQU9TLEFBR1IsQUFJQSxVQTlDZixBQWVlLEFBa0JHLENBMUNGLEFBb0RkLEFBSUEsQ0E5RWtCLEFBc0RKLEVBcENoQixBQWdCb0IsQ0FNRixDQVV3QixDQXREMUMsRUEyRUUsS0FOd0IsQ0ExQ1gsQ0FnQ0YsR0E5Q0csQUFnQ00sQ0F4Q0gsRUFrQ1IsS0FxQlgsSUFwQkEsRUExQmtCLElBUkosQUF3Q2QsWUF2Q1csQUFRRSxTQVBELEVBUU8sUUFQUixNQTBDYSxHQXpDeEIsQUFPYyxZQUNkLEFBVXFCLEdBMENNLFFBUDNCLG9EQVhBLE1BdkIrQixpQ0EwQzdCLDBGQXpDZ0IsZ0JBQ2xCIiwiZmlsZSI6Ii9ob21lL2dlbWFuZXBhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm95ZWN0b3MvUmVhY3QvZnJhbWluZ2hhbS1yZWFjdC1wd2EvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCBMaW5rSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTGluayc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLy4uL3NyYy9IZWFkZXInXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vLi4vc3JjL05hdmJhcidcbmltcG9ydCBGb3JtIGZyb20gJy4vLi4vc3JjL0Zvcm0nXG5pbXBvcnQgRnJhbWluZ2hhbUNhbGN1bGF0b3IgZnJvbSAnLi4vc3JjL0ZyYW1pbmdoYW1DYWxjdWxhdG9yJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLy4uL3NyYy9Gb290ZXInXG5pbXBvcnQgaGVhZExhbmcgZnJvbSAnLi8uLi9zcmMvaTE4bi9oZWFkLmpzb24nXG5cbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMywgMi41KSxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBsZXQgW3RyYW5zbGF0aW9ucywgc2V0VHJhbnNsYXRpb25zXSA9IFJlYWN0LnVzZVN0YXRlKHt9KVxuICBsZXQgbGFuZ3VhZ2U7IHJvdXRlci5xdWVyeS5sYW5nID8gbGFuZ3VhZ2UgPSByb3V0ZXIucXVlcnkubGFuZyA6IGxhbmd1YWdlID0gJ2VuJ1xuXG4gIGltcG9ydChgLi8uLi9zcmMvaTE4bi8ke2xhbmd1YWdlfS5qc29uYCkudGhlbihzdHJpbmdzID0+IHtcbiAgICBzZXRUcmFuc2xhdGlvbnMoc3RyaW5ncy5kZWZhdWx0KVxuICB9KTtcblxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgcmVzdWx0c0VsID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIC8vIEhhbmRsZXMgZGF0YSBzdWJtaXR0ZWQgaW4gRm9ybSBjb21wb25lbnRlZCB3aGVuIENhbGN1bGF0ZSBidXR0b24gaXMgcHJlc3NlZFxuICBmdW5jdGlvbiBkYXRhc3VibWl0dGVkSGFuZGxlcihkYXRhKXtcbiAgICBjb25zdCBjYWxjdWxhdGlvbiA9IEZyYW1pbmdoYW1DYWxjdWxhdG9yKGRhdGEsIHRyYW5zbGF0aW9ucyk7XG4gICAgc2V0UmVzdWx0cyhjYWxjdWxhdGlvbik7XG4gICAgcmVzdWx0c0VsLmN1cnJlbnQuZm9jdXMoKTtcbiAgICB3aW5kb3cuaW5uZXJXaWR0aCA8IDEyMDAgJiYgcmVzdWx0c0VsLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0UmVzdWx0cygpe1xuICAgIHNldFJlc3VsdHMoZmFsc2UpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57aGVhZExhbmdbbGFuZ3VhZ2VdLnRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2hlYWRMYW5nW2xhbmd1YWdlXS5kZXNjcmlwdGlvbn0vPlxuICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PXtoZWFkTGFuZ1tsYW5ndWFnZV0ua2V5d29yZHN9IC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8SGVhZGVyIG5hdmJhcl90aXRsZT17dHJhbnNsYXRpb25zLm5hdmJhcl90aXRsZX0gLz5cblxuICAgICAgPG1haW4+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZvcm1zZWN0aW9uXCI+XG4gICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgICAgIDxoMj57dHJhbnNsYXRpb25zLmZyYW1pbmdoYW1fcmlza19zY29yZV9jYWxjdWxhdG9yfTwvaDI+XG4gICAgICAgICAgICA8aDU+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5jY3MuY2EvaW1hZ2VzL0d1aWRlbGluZXMvVG9vbHNfYW5kX0NhbGN1bGF0b3JzX0VuL0ZSU19lbmdfMjAxN19mbmwxLnBkZlwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAge3RyYW5zbGF0aW9ucy51c2luZ19ndWlkZWxpbmVzfVxuICAgICAgICAgICAgICA8TGlua0ljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICA8Rm9ybSBkYXRhc3VibWl0dGVkSGFuZGxlcj17ZGF0YXN1Ym1pdHRlZEhhbmRsZXJ9IHJlc2V0UmVzdWx0cz17cmVzZXRSZXN1bHRzfSB0cmFuc2xhdGlvbnM9e3RyYW5zbGF0aW9uc30gLz5cbiAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPHNlY3Rpb24gcmVmPXtyZXN1bHRzRWx9IGNsYXNzTmFtZT1cImFib3V0c2VjdGlvblwiIGFyaWEtbGl2ZT0nYXNzZXJ0aXZlJz5cbiAgICAgICAgICB7IXJlc3VsdHMgJiYgPD5cbiAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBUaGUgRnJhbWluZ2hhbSBTY2FsZSBhbGxvd3MgdG8gZGV0ZXJtaW5lIHRoZSByaXNrIG9mIHN1ZmZlcmluZyBhbnkgY2FyZGlvdmFzY3VsYXIgZXZlbnQgaW4gMTAgeWVhcnMsIGFzc2Vzc2luZyBmYWN0b3JzIHN1Y2ggYXMgYWdlLCBzZXgsIGJsb29kIHByZXNzdXJlLCBkaWFiZXRlcywgYW5kIHNtb2tpbmcsIGFzc2lnbmluZyBhIHNjb3JlIHRvIGVhY2ggb2YgdGhlbSBhbmQgc3RyYXRpZnlpbmcgdGhlIHBhdGllbnQgaW4gbG93LCBtZWRpdW0sIGFuZCBoaWdoIGNhcmRpb3Zhc2N1bGFyIHJpc2suIEl0IGFsc28gYWxsb3dzIHRvIGNhbGN1bGF0ZSB0aGUgdmFzY3VsYXIgYWdlLCB3aGljaCBnaXZlcyBhbiBlc3RpbWF0ZSBvZiB0aGUgdmFzY3VsYXIgZGFtYWdlIG9mIHRoZSBwYXRpZW50IHRocm91Z2ggdGhlIHZhcmlhdGlvbiBvZiB5ZWFycyBiZXR3ZWVuIGl0IGFuZCBpdHMgY2hyb25vbG9naWNhbCBhZ2UuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5nZW1hbmVwYS5mcmFtaW5naGFtXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncGxheS1pbWdcIlxuICAgICAgICAgICAgICBhbHQ9XCJHb29nbGUgUGxheSBBbmRyb2lkIEFwcFwiXG4gICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vcGxheS5nb29nbGUuY29tL2ludGwvZW5fdXMvYmFkZ2VzL3N0YXRpYy9pbWFnZXMvYmFkZ2VzLyR7bGFuZ3VhZ2V9X2JhZGdlX3dlYl9nZW5lcmljLnBuZ2B9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvPn1cbiAgICAgICAgICB7cmVzdWx0cyAmJiA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9ID5cbiAgICAgICAgICA8aDM+e3RyYW5zbGF0aW9ucy5yZXN1bHRzfTwvaDM+XG4gICAgICAgICAgICA8cD57dHJhbnNsYXRpb25zLnNjb3JlfToge3Jlc3VsdHMuc2NvcmV9PC9wPlxuICAgICAgICAgICAgPHA+e3RyYW5zbGF0aW9ucy5jdmR9OiB7cmVzdWx0cy5jdmR9PC9wPlxuICAgICAgICAgICAgPHA+e3RyYW5zbGF0aW9ucy5oZWFydGFnZX06IHtyZXN1bHRzLmhlYXJ0YWdlfTwvcD5cbiAgICAgICAgICAgIDxwPnt0cmFuc2xhdGlvbnMucmlza306IHtyZXN1bHRzLnJpc2tsZXZlbH08L3A+XG4gICAgICAgICAgICA8cD57dHJhbnNsYXRpb25zLnRyZWF0bWVudH06IHtyZXN1bHRzLm5lZWRzdHJlYXRtZW50fTwvcD5cbiAgICAgICAgICA8L1BhcGVyPn1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9tYWluPlxuICAgICAgPCBGb290ZXIgLz5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xuICAgICAgfVxuXG4gICAgICBib2R5IHtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgfVxuICAgICAgI3Jvb3Qge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY29sb3I6ICM0Njg5Qzg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgfVxuXG4gICAgICBhOnZpc2l0ZWQge1xuICAgICAgICBjb2xvcjogIzQ2ODlDOFxuICAgICAgfVxuXG4gICAgICBtYWluIHtcbiAgICAgICAgd2lkdGg6IDkwdnc7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgbWluLWhlaWdodDogNzZ2aDtcbiAgICAgIH1cblxuICAgICAgc2VjdGlvbi5mb3Jtc2VjdGlvbiB7XG4gICAgICAgIHdpZHRoOiA2MSU7XG4gICAgICB9XG4gICAgICBzZWN0aW9uLmZvcm1zZWN0aW9uIGgyIHtcbiAgICAgICAgY29sb3I6ICM0Njg5Qzg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICBzZWN0aW9uLmZvcm1zZWN0aW9uIGg1IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgY29sb3I6ICM0Njg5Qzg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBzZWN0aW9uLmFib3V0c2VjdGlvbiB7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgIHNlY3Rpb24uYWJvdXRzZWN0aW9uIGEge21hcmdpbi1sZWZ0OiA0NSU7fVxuICAgICAgfVxuICAgICAgLmdwbGF5LWltZyB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHdpZHRoOiAxNnZ3O1xuICAgICAgfVxuICAgICAgLmdwbGF5LWltZzpob3ZlciB7XG4gICAgICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIGRyb3Atc2hhZG93KDhweCA4cHggMTBweCBncmF5KTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICBtYWluIHtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIHNlY3Rpb24uZm9ybXNlY3Rpb24sIHNlY3Rpb24uYWJvdXRzZWN0aW9uIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ncGxheS1pbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.29324ac70fa299cd10d3.hot-update.js.map