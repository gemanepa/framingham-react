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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _src_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../src/Header */ "./src/Header/index.js");
/* harmony import */ var _src_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../src/Navbar */ "./src/Navbar/index.js");
/* harmony import */ var _src_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../src/Form */ "./src/Form/index.js");
/* harmony import */ var _src_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../src/Footer */ "./src/Footer/index.js");
/* harmony import */ var _material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Link */ "./node_modules/@material-ui/icons/Link.js");
/* harmony import */ var _material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _src_FraminghamCalculator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/FraminghamCalculator */ "./src/FraminghamCalculator/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
var _jsxFileName = "/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])(function (theme) {
  return {
    root: {
      padding: theme.spacing(3, 2)
    }
  };
});
function Index() {
  var classes = useStyles(); // Handles data submitted in Form componented when Calculate button is pressed

  function datasubmittedHandler(data) {
    Object(_src_FraminghamCalculator__WEBPACK_IMPORTED_MODULE_9__["default"])(data);
    return true;
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(_src_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(_src_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("main", {
    className: "jsx-2105439721",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-2105439721" + " " + "formsection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-2105439721",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Framingham Risk Score Calculator"), __jsx("h5", {
    className: "jsx-2105439721",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.ccs.ca/images/Guidelines/Tools_and_Calculators_En/FRS_eng_2017_fnl1.pdf",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-2105439721",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Using 2017 Canadian CardioVascular Society Guidelines", __jsx(_material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fontSize: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }))), __jsx(_src_Form__WEBPACK_IMPORTED_MODULE_5__["default"], {
    datasubmittedHandler: datasubmittedHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }))), __jsx("section", {
    className: "jsx-2105439721" + " " + "aboutsection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-2105439721",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "The Framingham Scale allows to determine the risk of suffering any cardiovascular event in 10 years, assessing factors such as age, sex, blood pressure, diabetes, and smoking, assigning a score to each of them and stratifying the patient in low, medium, and high cardiovascular risk. It also allows to calculate the vascular age, which gives an estimate of the vascular damage of the patient through the variation of years between it and its chronological age.")))), __jsx(_src_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2105439721",
    __self: this
  }, "p.jsx-2105439721{font-family:Lato;}body.jsx-2105439721{width:100vw;overflow-x:hidden;min-height:100vh;height:auto;margin:0;padding:0;border:0;}#root.jsx-2105439721{background-color:transparent;color:#4689C8;font-weight:600;width:100%;min-height:100vh;height:auto;}a.jsx-2105439721:visited{color:#4689C8;}main.jsx-2105439721{width:90vw;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;min-height:76vh;}section.formsection.jsx-2105439721{width:61%;}section.formsection.jsx-2105439721 h2.jsx-2105439721{color:#4689C8;text-align:center;margin:0;}section.formsection.jsx-2105439721 h5.jsx-2105439721{margin-top:0px;color:#4689C8;text-align:center;}section.aboutsection.jsx-2105439721{width:30%;}@media (max-width:1199px){main.jsx-2105439721{width:90%;margin:0 auto;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}section.formsection.jsx-2105439721,section.aboutsection.jsx-2105439721{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlbWFuZXBhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm95ZWN0b3MvUmVhY3QvZnJhbWluZ2hhbS1yZWFjdC1wd2EvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURrQixBQUcwQixBQUlMLEFBU2lCLEFBVWhDLEFBR2MsQUFTRCxBQUdJLEFBTUcsQUFNUCxBQU1FLEFBT0MsVUEzQmYsQUFlQSxBQU1rQixDQTlCRixBQXFDZCxDQTNEa0IsRUFrQnBCLEFBZ0JvQixDQU1GLEVBNUNsQixPQXlEMEIsQ0E5QlgsSUFkQyxBQWdDTSxDQXhDSCxFQWtDUixTQUNYLEVBMUJrQixJQVJKLEFBd0NkLFlBdkNXLEFBUUUsU0FQRCxFQVFPLFFBUFIsU0FDWCxBQU9jLFlBQ2QsQUFVcUIsR0E4Qk0sa0VBN0JJLGlDQThCN0IsMEZBN0JnQixnQkFDbEIiLCJmaWxlIjoiL2hvbWUvZ2VtYW5lcGEvRG9jdW1lbnRzL0RldmVsb3BtZW50L1Byb3llY3Rvcy9SZWFjdC9mcmFtaW5naGFtLXJlYWN0LXB3YS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLy4uL3NyYy9IZWFkZXInXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vLi4vc3JjL05hdmJhcidcbmltcG9ydCBGb3JtIGZyb20gJy4vLi4vc3JjL0Zvcm0nXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vLi4vc3JjL0Zvb3RlcidcbmltcG9ydCBMaW5rSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTGluayc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IEZyYW1pbmdoYW1DYWxjdWxhdG9yIGZyb20gJy4uL3NyYy9GcmFtaW5naGFtQ2FsY3VsYXRvcidcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMywgMiksXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgLy8gSGFuZGxlcyBkYXRhIHN1Ym1pdHRlZCBpbiBGb3JtIGNvbXBvbmVudGVkIHdoZW4gQ2FsY3VsYXRlIGJ1dHRvbiBpcyBwcmVzc2VkXG4gIGZ1bmN0aW9uIGRhdGFzdWJtaXR0ZWRIYW5kbGVyKGRhdGEpe1xuICAgIEZyYW1pbmdoYW1DYWxjdWxhdG9yKGRhdGEpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgPG1haW4+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZvcm1zZWN0aW9uXCI+XG4gICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgICAgIDxoMj5GcmFtaW5naGFtIFJpc2sgU2NvcmUgQ2FsY3VsYXRvcjwvaDI+XG4gICAgICAgICAgICA8aDU+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5jY3MuY2EvaW1hZ2VzL0d1aWRlbGluZXMvVG9vbHNfYW5kX0NhbGN1bGF0b3JzX0VuL0ZSU19lbmdfMjAxN19mbmwxLnBkZlwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgVXNpbmcgMjAxNyBDYW5hZGlhbiBDYXJkaW9WYXNjdWxhciBTb2NpZXR5IEd1aWRlbGluZXNcbiAgICAgICAgICAgICAgPExpbmtJY29uIGZvbnRTaXplPVwic21hbGxcIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgPEZvcm0gZGF0YXN1Ym1pdHRlZEhhbmRsZXI9e2RhdGFzdWJtaXR0ZWRIYW5kbGVyfSAvPlxuICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhYm91dHNlY3Rpb25cIj5cbiAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICBUaGUgRnJhbWluZ2hhbSBTY2FsZSBhbGxvd3MgdG8gZGV0ZXJtaW5lIHRoZSByaXNrIG9mIHN1ZmZlcmluZyBhbnkgY2FyZGlvdmFzY3VsYXIgZXZlbnQgaW4gMTAgeWVhcnMsIGFzc2Vzc2luZyBmYWN0b3JzIHN1Y2ggYXMgYWdlLCBzZXgsIGJsb29kIHByZXNzdXJlLCBkaWFiZXRlcywgYW5kIHNtb2tpbmcsIGFzc2lnbmluZyBhIHNjb3JlIHRvIGVhY2ggb2YgdGhlbSBhbmQgc3RyYXRpZnlpbmcgdGhlIHBhdGllbnQgaW4gbG93LCBtZWRpdW0sIGFuZCBoaWdoIGNhcmRpb3Zhc2N1bGFyIHJpc2suIEl0IGFsc28gYWxsb3dzIHRvIGNhbGN1bGF0ZSB0aGUgdmFzY3VsYXIgYWdlLCB3aGljaCBnaXZlcyBhbiBlc3RpbWF0ZSBvZiB0aGUgdmFzY3VsYXIgZGFtYWdlIG9mIHRoZSBwYXRpZW50IHRocm91Z2ggdGhlIHZhcmlhdGlvbiBvZiB5ZWFycyBiZXR3ZWVuIGl0IGFuZCBpdHMgY2hyb25vbG9naWNhbCBhZ2UuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9tYWluPlxuICAgICAgPCBGb290ZXIgLz5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xuICAgICAgfVxuXG4gICAgICBib2R5IHtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgfVxuICAgICAgI3Jvb3Qge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY29sb3I6ICM0Njg5Qzg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgfVxuXG4gICAgICBhOnZpc2l0ZWQge1xuICAgICAgICBjb2xvcjogIzQ2ODlDOFxuICAgICAgfVxuXG4gICAgICBtYWluIHtcbiAgICAgICAgd2lkdGg6IDkwdnc7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgbWluLWhlaWdodDogNzZ2aDtcbiAgICAgIH1cblxuICAgICAgc2VjdGlvbi5mb3Jtc2VjdGlvbiB7XG4gICAgICAgIHdpZHRoOiA2MSU7XG4gICAgICB9XG4gICAgICBzZWN0aW9uLmZvcm1zZWN0aW9uIGgyIHtcbiAgICAgICAgY29sb3I6ICM0Njg5Qzg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICBzZWN0aW9uLmZvcm1zZWN0aW9uIGg1IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgY29sb3I6ICM0Njg5Qzg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBzZWN0aW9uLmFib3V0c2VjdGlvbiB7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICB9XG5cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICBtYWluIHtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBzZWN0aW9uLmZvcm1zZWN0aW9uLCBzZWN0aW9uLmFib3V0c2VjdGlvbiB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cblxuICApO1xufVxuIl19 */\n/*@ sourceURL=/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.78375ab735bbf0f773f9.hot-update.js.map