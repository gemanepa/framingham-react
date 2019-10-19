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
  __webpack_require__("./src/i18n lazy recursive ^\\.\\/.*\\.js$")("./".concat(language, ".js")).then(function (strings) {
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(_src_Navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx(_src_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navbar_title: translations.navbar_title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("main", {
    className: "jsx-1353481161",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-1353481161" + " " + "formsection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-1353481161",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Framingham Risk Score Calculator"), __jsx("h5", {
    className: "jsx-1353481161",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.ccs.ca/images/Guidelines/Tools_and_Calculators_En/FRS_eng_2017_fnl1.pdf",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-1353481161",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Using 2017 Canadian CardioVascular Society Guidelines", __jsx(_material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fontSize: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }))), __jsx(_src_Form__WEBPACK_IMPORTED_MODULE_6__["default"], {
    datasubmittedHandler: datasubmittedHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }))), __jsx("section", {
    ref: resultsEl,
    "aria-live": "assertive",
    className: "jsx-1353481161" + " " + "aboutsection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, !results && __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1353481161",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "The Framingham Scale allows to determine the risk of suffering any cardiovascular event in 10 years, assessing factors such as age, sex, blood pressure, diabetes, and smoking, assigning a score to each of them and stratifying the patient in low, medium, and high cardiovascular risk. It also allows to calculate the vascular age, which gives an estimate of the vascular damage of the patient through the variation of years between it and its chronological age.")), results && __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-1353481161",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, translations.results), __jsx("p", {
    className: "jsx-1353481161",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, translations.score, ": ", results.score), __jsx("p", {
    className: "jsx-1353481161",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, translations.cvd, ": ", results.cvd), __jsx("p", {
    className: "jsx-1353481161",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, translations.heartage, ": ", results.heartage), __jsx("p", {
    className: "jsx-1353481161",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, translations.risk, ": ", results.risklevel), __jsx("p", {
    className: "jsx-1353481161",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, translations.treatment, ": ", results.needstreatment)))), __jsx(_src_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1353481161",
    __self: this
  }, "p.jsx-1353481161{font-family:Lato;}body.jsx-1353481161{width:100vw;overflow-x:hidden;min-height:100vh;height:auto;margin:0;padding:0;border:0;}#root.jsx-1353481161{background-color:transparent;color:#4689C8;font-weight:600;width:100%;min-height:100vh;height:auto;}a.jsx-1353481161:visited{color:#4689C8;}main.jsx-1353481161{width:90vw;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;min-height:76vh;}section.formsection.jsx-1353481161{width:61%;}section.formsection.jsx-1353481161 h2.jsx-1353481161{color:#4689C8;text-align:center;margin:0;}section.formsection.jsx-1353481161 h5.jsx-1353481161{margin-top:0px;color:#4689C8;text-align:center;}section.aboutsection.jsx-1353481161{width:30%;}@media (max-width:1199px){main.jsx-1353481161{width:90%;margin:0 auto;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}section.jsx-1353481161{margin-bottom:30px;}section.formsection.jsx-1353481161,section.aboutsection.jsx-1353481161{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlbWFuZXBhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm95ZWN0b3MvUmVhY3QvZnJhbWluZ2hhbS1yZWFjdC1wd2EvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEVrQixBQUcwQixBQUlMLEFBU2lCLEFBVWhDLEFBR2MsQUFTRCxBQUdJLEFBTUcsQUFNUCxBQU1FLEFBT1MsQUFHUixVQTlCZixBQWVBLEFBTWtCLENBOUJGLEFBd0NkLENBOURrQixFQWtCcEIsQUFnQm9CLENBTUYsRUE1Q2xCLEVBK0RFLEtBTndCLENBOUJYLElBZEMsQUFnQ00sQ0F4Q0gsRUFrQ1IsU0FDWCxFQTFCa0IsSUFSSixBQXdDZCxZQXZDVyxBQVFFLFNBUEQsRUFRTyxRQVBSLFNBQ1gsQUFPYyxZQUNkLEFBVXFCLEdBOEJNLGtFQTdCSSxpQ0E4QjdCLDBGQTdCZ0IsZ0JBQ2xCIiwiZmlsZSI6Ii9ob21lL2dlbWFuZXBhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm95ZWN0b3MvUmVhY3QvZnJhbWluZ2hhbS1yZWFjdC1wd2EvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi8uLi9zcmMvSGVhZGVyJ1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLy4uL3NyYy9OYXZiYXInXG5pbXBvcnQgRm9ybSBmcm9tICcuLy4uL3NyYy9Gb3JtJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLy4uL3NyYy9Gb290ZXInXG5pbXBvcnQgTGlua0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xpbmsnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBGcmFtaW5naGFtQ2FsY3VsYXRvciBmcm9tICcuLi9zcmMvRnJhbWluZ2hhbUNhbGN1bGF0b3InXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMsIDIuNSksXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgbGV0IFt0cmFuc2xhdGlvbnMsIHNldFRyYW5zbGF0aW9uc10gPSBSZWFjdC51c2VTdGF0ZSh7fSlcbiAgbGV0IGxhbmd1YWdlOyByb3V0ZXIucXVlcnkubGFuZyA/IGxhbmd1YWdlID0gcm91dGVyLnF1ZXJ5LmxhbmcgOiBsYW5ndWFnZSA9ICdlbidcblxuICBpbXBvcnQoYC4vLi4vc3JjL2kxOG4vJHtsYW5ndWFnZX0uanNgKS50aGVuKHN0cmluZ3MgPT4ge1xuICAgIHNldFRyYW5zbGF0aW9ucyhzdHJpbmdzLmRlZmF1bHQpXG4gIH0pO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByZXN1bHRzRWwgPSBSZWFjdC51c2VSZWYobnVsbCk7XG5cbiAgLy8gSGFuZGxlcyBkYXRhIHN1Ym1pdHRlZCBpbiBGb3JtIGNvbXBvbmVudGVkIHdoZW4gQ2FsY3VsYXRlIGJ1dHRvbiBpcyBwcmVzc2VkXG4gIGZ1bmN0aW9uIGRhdGFzdWJtaXR0ZWRIYW5kbGVyKGRhdGEpe1xuICAgIGNvbnN0IGNhbGN1bGF0aW9uID0gRnJhbWluZ2hhbUNhbGN1bGF0b3IoZGF0YSk7XG4gICAgc2V0UmVzdWx0cyhjYWxjdWxhdGlvbik7XG4gICAgcmVzdWx0c0VsLmN1cnJlbnQuZm9jdXMoKTtcbiAgICB3aW5kb3cuaW5uZXJXaWR0aCA8IDEyMDAgJiYgcmVzdWx0c0VsLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPEhlYWRlciBuYXZiYXJfdGl0bGU9e3RyYW5zbGF0aW9ucy5uYXZiYXJfdGl0bGV9IC8+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmb3Jtc2VjdGlvblwiPlxuICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgICA8aDI+RnJhbWluZ2hhbSBSaXNrIFNjb3JlIENhbGN1bGF0b3I8L2gyPlxuICAgICAgICAgICAgPGg1PlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuY2NzLmNhL2ltYWdlcy9HdWlkZWxpbmVzL1Rvb2xzX2FuZF9DYWxjdWxhdG9yc19Fbi9GUlNfZW5nXzIwMTdfZm5sMS5wZGZcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgIFVzaW5nIDIwMTcgQ2FuYWRpYW4gQ2FyZGlvVmFzY3VsYXIgU29jaWV0eSBHdWlkZWxpbmVzXG4gICAgICAgICAgICAgIDxMaW5rSWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgIDxGb3JtIGRhdGFzdWJtaXR0ZWRIYW5kbGVyPXtkYXRhc3VibWl0dGVkSGFuZGxlcn0gLz5cbiAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPHNlY3Rpb24gcmVmPXtyZXN1bHRzRWx9IGNsYXNzTmFtZT1cImFib3V0c2VjdGlvblwiIGFyaWEtbGl2ZT0nYXNzZXJ0aXZlJz5cbiAgICAgICAgICB7IXJlc3VsdHMgJiY8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICBUaGUgRnJhbWluZ2hhbSBTY2FsZSBhbGxvd3MgdG8gZGV0ZXJtaW5lIHRoZSByaXNrIG9mIHN1ZmZlcmluZyBhbnkgY2FyZGlvdmFzY3VsYXIgZXZlbnQgaW4gMTAgeWVhcnMsIGFzc2Vzc2luZyBmYWN0b3JzIHN1Y2ggYXMgYWdlLCBzZXgsIGJsb29kIHByZXNzdXJlLCBkaWFiZXRlcywgYW5kIHNtb2tpbmcsIGFzc2lnbmluZyBhIHNjb3JlIHRvIGVhY2ggb2YgdGhlbSBhbmQgc3RyYXRpZnlpbmcgdGhlIHBhdGllbnQgaW4gbG93LCBtZWRpdW0sIGFuZCBoaWdoIGNhcmRpb3Zhc2N1bGFyIHJpc2suIEl0IGFsc28gYWxsb3dzIHRvIGNhbGN1bGF0ZSB0aGUgdmFzY3VsYXIgYWdlLCB3aGljaCBnaXZlcyBhbiBlc3RpbWF0ZSBvZiB0aGUgdmFzY3VsYXIgZGFtYWdlIG9mIHRoZSBwYXRpZW50IHRocm91Z2ggdGhlIHZhcmlhdGlvbiBvZiB5ZWFycyBiZXR3ZWVuIGl0IGFuZCBpdHMgY2hyb25vbG9naWNhbCBhZ2UuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9QYXBlcj59XG4gICAgICAgICAge3Jlc3VsdHMgJiYgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSA+XG4gICAgICAgICAgPGgzPnt0cmFuc2xhdGlvbnMucmVzdWx0c308L2gzPlxuICAgICAgICAgICAgPHA+e3RyYW5zbGF0aW9ucy5zY29yZX06IHtyZXN1bHRzLnNjb3JlfTwvcD5cbiAgICAgICAgICAgIDxwPnt0cmFuc2xhdGlvbnMuY3ZkfToge3Jlc3VsdHMuY3ZkfTwvcD5cbiAgICAgICAgICAgIDxwPnt0cmFuc2xhdGlvbnMuaGVhcnRhZ2V9OiB7cmVzdWx0cy5oZWFydGFnZX08L3A+XG4gICAgICAgICAgICA8cD57dHJhbnNsYXRpb25zLnJpc2t9OiB7cmVzdWx0cy5yaXNrbGV2ZWx9PC9wPlxuICAgICAgICAgICAgPHA+e3RyYW5zbGF0aW9ucy50cmVhdG1lbnR9OiB7cmVzdWx0cy5uZWVkc3RyZWF0bWVudH08L3A+XG4gICAgICAgICAgPC9QYXBlcj59XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDwgRm9vdGVyIC8+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIHAge1xuICAgICAgICBmb250LWZhbWlseTogTGF0bztcbiAgICAgIH1cblxuICAgICAgYm9keSB7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgIH1cbiAgICAgICNyb290IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiAjNDY4OUM4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIH1cblxuICAgICAgYTp2aXNpdGVkIHtcbiAgICAgICAgY29sb3I6ICM0Njg5QzhcbiAgICAgIH1cblxuICAgICAgbWFpbiB7XG4gICAgICAgIHdpZHRoOiA5MHZ3O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDc2dmg7XG4gICAgICB9XG5cbiAgICAgIHNlY3Rpb24uZm9ybXNlY3Rpb24ge1xuICAgICAgICB3aWR0aDogNjElO1xuICAgICAgfVxuICAgICAgc2VjdGlvbi5mb3Jtc2VjdGlvbiBoMiB7XG4gICAgICAgIGNvbG9yOiAjNDY4OUM4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgc2VjdGlvbi5mb3Jtc2VjdGlvbiBoNSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgIGNvbG9yOiAjNDY4OUM4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgc2VjdGlvbi5hYm91dHNlY3Rpb24ge1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgfVxuXG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgfVxuICAgICAgICBzZWN0aW9uLmZvcm1zZWN0aW9uLCBzZWN0aW9uLmFib3V0c2VjdGlvbiB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cblxuICApO1xufVxuIl19 */\n/*@ sourceURL=/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.07332c616654d9c54811.hot-update.js.map