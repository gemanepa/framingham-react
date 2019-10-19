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
  var classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      results = _React$useState2[0],
      setResults = _React$useState2[1];

  var resultsEl = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);
  var language;

  if (router.query.lang) {
    language = router.query.lang;
  } else {
    language = 'en';
  }

  var translations = {};
  __webpack_require__("./src/translations lazy recursive ^\\.\\/.*\\.js$")("./".concat(language, ".js")).then(function (strings) {
    translations = strings;
    console.log(strings);
  }); // Handles data submitted in Form componented when Calculate button is pressed

  function datasubmittedHandler(data) {
    var calculation = Object(_src_FraminghamCalculator__WEBPACK_IMPORTED_MODULE_10__["default"])(data);
    setResults(calculation);
    resultsEl.current.focus();
    window.innerWidth < 1200 && resultsEl.current.scrollIntoView();
  }

  console.log('translations');
  console.log(translations);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx(_src_Navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx(_src_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: translations.headerTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("main", {
    className: "jsx-1353481161",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-1353481161" + " " + "formsection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-1353481161",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Framingham Risk Score Calculator"), __jsx("h5", {
    className: "jsx-1353481161",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.ccs.ca/images/Guidelines/Tools_and_Calculators_En/FRS_eng_2017_fnl1.pdf",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-1353481161",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Using 2017 Canadian CardioVascular Society Guidelines", __jsx(_material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fontSize: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }))), __jsx(_src_Form__WEBPACK_IMPORTED_MODULE_6__["default"], {
    datasubmittedHandler: datasubmittedHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }))), __jsx("section", {
    ref: resultsEl,
    "aria-live": "assertive",
    className: "jsx-1353481161" + " " + "aboutsection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, !results && __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1353481161",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "The Framingham Scale allows to determine the risk of suffering any cardiovascular event in 10 years, assessing factors such as age, sex, blood pressure, diabetes, and smoking, assigning a score to each of them and stratifying the patient in low, medium, and high cardiovascular risk. It also allows to calculate the vascular age, which gives an estimate of the vascular damage of the patient through the variation of years between it and its chronological age.")), results && __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-1353481161",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Results"), __jsx("p", {
    className: "jsx-1353481161",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Score: ", results.score), __jsx("p", {
    className: "jsx-1353481161",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "CVD: ", results.cvd), __jsx("p", {
    className: "jsx-1353481161",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Heart Age: ", results.heartage, " years old"), __jsx("p", {
    className: "jsx-1353481161",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Risk Level: ", results.risklevel), __jsx("p", {
    className: "jsx-1353481161",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Treatment: ", results.needstreatment)))), __jsx(_src_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1353481161",
    __self: this
  }, "p.jsx-1353481161{font-family:Lato;}body.jsx-1353481161{width:100vw;overflow-x:hidden;min-height:100vh;height:auto;margin:0;padding:0;border:0;}#root.jsx-1353481161{background-color:transparent;color:#4689C8;font-weight:600;width:100%;min-height:100vh;height:auto;}a.jsx-1353481161:visited{color:#4689C8;}main.jsx-1353481161{width:90vw;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;min-height:76vh;}section.formsection.jsx-1353481161{width:61%;}section.formsection.jsx-1353481161 h2.jsx-1353481161{color:#4689C8;text-align:center;margin:0;}section.formsection.jsx-1353481161 h5.jsx-1353481161{margin-top:0px;color:#4689C8;text-align:center;}section.aboutsection.jsx-1353481161{width:30%;}@media (max-width:1199px){main.jsx-1353481161{width:90%;margin:0 auto;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}section.jsx-1353481161{margin-bottom:30px;}section.formsection.jsx-1353481161,section.aboutsection.jsx-1353481161{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlbWFuZXBhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm95ZWN0b3MvUmVhY3QvZnJhbWluZ2hhbS1yZWFjdC1wd2EvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0ZrQixBQUcwQixBQUlMLEFBU2lCLEFBVWhDLEFBR2MsQUFTRCxBQUdJLEFBTUcsQUFNUCxBQU1FLEFBT1MsQUFHUixVQTlCZixBQWVBLEFBTWtCLENBOUJGLEFBd0NkLENBOURrQixFQWtCcEIsQUFnQm9CLENBTUYsRUE1Q2xCLEVBK0RFLEtBTndCLENBOUJYLElBZEMsQUFnQ00sQ0F4Q0gsRUFrQ1IsU0FDWCxFQTFCa0IsSUFSSixBQXdDZCxZQXZDVyxBQVFFLFNBUEQsRUFRTyxRQVBSLFNBQ1gsQUFPYyxZQUNkLEFBVXFCLEdBOEJNLGtFQTdCSSxpQ0E4QjdCLDBGQTdCZ0IsZ0JBQ2xCIiwiZmlsZSI6Ii9ob21lL2dlbWFuZXBhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm95ZWN0b3MvUmVhY3QvZnJhbWluZ2hhbS1yZWFjdC1wd2EvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi8uLi9zcmMvSGVhZGVyJ1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLy4uL3NyYy9OYXZiYXInXG5pbXBvcnQgRm9ybSBmcm9tICcuLy4uL3NyYy9Gb3JtJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLy4uL3NyYy9Gb290ZXInXG5pbXBvcnQgTGlua0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xpbmsnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBGcmFtaW5naGFtQ2FsY3VsYXRvciBmcm9tICcuLi9zcmMvRnJhbWluZ2hhbUNhbGN1bGF0b3InXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzLCAyLjUpLFxuICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByZXN1bHRzRWwgPSBSZWFjdC51c2VSZWYobnVsbCk7XG5cbiAgbGV0IGxhbmd1YWdlO1xuICBpZihyb3V0ZXIucXVlcnkubGFuZykge2xhbmd1YWdlID0gcm91dGVyLnF1ZXJ5Lmxhbmd9XG4gIGVsc2Uge2xhbmd1YWdlID0gJ2VuJ31cblxuICBsZXQgdHJhbnNsYXRpb25zID0ge31cbiAgaW1wb3J0KGAuLy4uL3NyYy90cmFuc2xhdGlvbnMvJHtsYW5ndWFnZX0uanNgKS50aGVuKHN0cmluZ3MgPT4ge1xuICAgIHRyYW5zbGF0aW9ucyA9IHN0cmluZ3M7XG4gICAgY29uc29sZS5sb2coc3RyaW5ncyk7XG4gIH0pO1xuICAvLyBIYW5kbGVzIGRhdGEgc3VibWl0dGVkIGluIEZvcm0gY29tcG9uZW50ZWQgd2hlbiBDYWxjdWxhdGUgYnV0dG9uIGlzIHByZXNzZWRcbiAgZnVuY3Rpb24gZGF0YXN1Ym1pdHRlZEhhbmRsZXIoZGF0YSl7XG4gICAgY29uc3QgY2FsY3VsYXRpb24gPSBGcmFtaW5naGFtQ2FsY3VsYXRvcihkYXRhKTtcbiAgICBzZXRSZXN1bHRzKGNhbGN1bGF0aW9uKTtcbiAgICByZXN1bHRzRWwuY3VycmVudC5mb2N1cygpO1xuICAgIHdpbmRvdy5pbm5lcldpZHRoIDwgMTIwMCAmJiByZXN1bHRzRWwuY3VycmVudC5zY3JvbGxJbnRvVmlldygpO1xuICB9XG4gIGNvbnNvbGUubG9nKCd0cmFuc2xhdGlvbnMnKVxuICBjb25zb2xlLmxvZyh0cmFuc2xhdGlvbnMpXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPEhlYWRlciB0aXRsZT17dHJhbnNsYXRpb25zLmhlYWRlclRpdGxlfSAvPlxuXG4gICAgICA8bWFpbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZm9ybXNlY3Rpb25cIj5cbiAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgICAgPGgyPkZyYW1pbmdoYW0gUmlzayBTY29yZSBDYWxjdWxhdG9yPC9oMj5cbiAgICAgICAgICAgIDxoNT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmNjcy5jYS9pbWFnZXMvR3VpZGVsaW5lcy9Ub29sc19hbmRfQ2FsY3VsYXRvcnNfRW4vRlJTX2VuZ18yMDE3X2ZubDEucGRmXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICBVc2luZyAyMDE3IENhbmFkaWFuIENhcmRpb1Zhc2N1bGFyIFNvY2lldHkgR3VpZGVsaW5lc1xuICAgICAgICAgICAgICA8TGlua0ljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICA8Rm9ybSBkYXRhc3VibWl0dGVkSGFuZGxlcj17ZGF0YXN1Ym1pdHRlZEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxzZWN0aW9uIHJlZj17cmVzdWx0c0VsfSBjbGFzc05hbWU9XCJhYm91dHNlY3Rpb25cIiBhcmlhLWxpdmU9J2Fzc2VydGl2ZSc+XG4gICAgICAgICAgeyFyZXN1bHRzICYmPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgVGhlIEZyYW1pbmdoYW0gU2NhbGUgYWxsb3dzIHRvIGRldGVybWluZSB0aGUgcmlzayBvZiBzdWZmZXJpbmcgYW55IGNhcmRpb3Zhc2N1bGFyIGV2ZW50IGluIDEwIHllYXJzLCBhc3Nlc3NpbmcgZmFjdG9ycyBzdWNoIGFzIGFnZSwgc2V4LCBibG9vZCBwcmVzc3VyZSwgZGlhYmV0ZXMsIGFuZCBzbW9raW5nLCBhc3NpZ25pbmcgYSBzY29yZSB0byBlYWNoIG9mIHRoZW0gYW5kIHN0cmF0aWZ5aW5nIHRoZSBwYXRpZW50IGluIGxvdywgbWVkaXVtLCBhbmQgaGlnaCBjYXJkaW92YXNjdWxhciByaXNrLiBJdCBhbHNvIGFsbG93cyB0byBjYWxjdWxhdGUgdGhlIHZhc2N1bGFyIGFnZSwgd2hpY2ggZ2l2ZXMgYW4gZXN0aW1hdGUgb2YgdGhlIHZhc2N1bGFyIGRhbWFnZSBvZiB0aGUgcGF0aWVudCB0aHJvdWdoIHRoZSB2YXJpYXRpb24gb2YgeWVhcnMgYmV0d2VlbiBpdCBhbmQgaXRzIGNocm9ub2xvZ2ljYWwgYWdlLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvUGFwZXI+fVxuICAgICAgICAgIHtyZXN1bHRzICYmIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gPlxuICAgICAgICAgIDxoMz5SZXN1bHRzPC9oMz5cbiAgICAgICAgICAgIDxwPlNjb3JlOiB7cmVzdWx0cy5zY29yZX08L3A+XG4gICAgICAgICAgICA8cD5DVkQ6IHtyZXN1bHRzLmN2ZH08L3A+XG4gICAgICAgICAgICA8cD5IZWFydCBBZ2U6IHtyZXN1bHRzLmhlYXJ0YWdlfSB5ZWFycyBvbGQ8L3A+XG4gICAgICAgICAgICA8cD5SaXNrIExldmVsOiB7cmVzdWx0cy5yaXNrbGV2ZWx9PC9wPlxuICAgICAgICAgICAgPHA+VHJlYXRtZW50OiB7cmVzdWx0cy5uZWVkc3RyZWF0bWVudH08L3A+XG4gICAgICAgICAgPC9QYXBlcj59XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDwgRm9vdGVyIC8+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIHAge1xuICAgICAgICBmb250LWZhbWlseTogTGF0bztcbiAgICAgIH1cblxuICAgICAgYm9keSB7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgIH1cbiAgICAgICNyb290IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiAjNDY4OUM4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIH1cblxuICAgICAgYTp2aXNpdGVkIHtcbiAgICAgICAgY29sb3I6ICM0Njg5QzhcbiAgICAgIH1cblxuICAgICAgbWFpbiB7XG4gICAgICAgIHdpZHRoOiA5MHZ3O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDc2dmg7XG4gICAgICB9XG5cbiAgICAgIHNlY3Rpb24uZm9ybXNlY3Rpb24ge1xuICAgICAgICB3aWR0aDogNjElO1xuICAgICAgfVxuICAgICAgc2VjdGlvbi5mb3Jtc2VjdGlvbiBoMiB7XG4gICAgICAgIGNvbG9yOiAjNDY4OUM4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgc2VjdGlvbi5mb3Jtc2VjdGlvbiBoNSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgIGNvbG9yOiAjNDY4OUM4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgc2VjdGlvbi5hYm91dHNlY3Rpb24ge1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgfVxuXG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgfVxuICAgICAgICBzZWN0aW9uLmZvcm1zZWN0aW9uLCBzZWN0aW9uLmFib3V0c2VjdGlvbiB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cblxuICApO1xufVxuIl19 */\n/*@ sourceURL=/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.db13412086b2f513fd8c.hot-update.js.map