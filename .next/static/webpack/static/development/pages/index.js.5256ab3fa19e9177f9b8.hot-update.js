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
    console.log('Me llamaron');
    console.log(Object(_src_FraminghamCalculator__WEBPACK_IMPORTED_MODULE_9__["default"])(data));
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
  }, "p.jsx-2105439721{font-family:Lato;}body.jsx-2105439721{width:100vw;overflow-x:hidden;min-height:100vh;height:auto;margin:0;padding:0;border:0;}#root.jsx-2105439721{background-color:transparent;color:#4689C8;font-weight:600;width:100%;min-height:100vh;height:auto;}a.jsx-2105439721:visited{color:#4689C8;}main.jsx-2105439721{width:90vw;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;min-height:76vh;}section.formsection.jsx-2105439721{width:61%;}section.formsection.jsx-2105439721 h2.jsx-2105439721{color:#4689C8;text-align:center;margin:0;}section.formsection.jsx-2105439721 h5.jsx-2105439721{margin-top:0px;color:#4689C8;text-align:center;}section.aboutsection.jsx-2105439721{width:30%;}@media (max-width:1199px){main.jsx-2105439721{width:90%;margin:0 auto;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}section.formsection.jsx-2105439721,section.aboutsection.jsx-2105439721{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlbWFuZXBhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm95ZWN0b3MvUmVhY3QvZnJhbWluZ2hhbS1yZWFjdC1wd2EvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURrQixBQUcwQixBQUlMLEFBU2lCLEFBVWhDLEFBR2MsQUFTRCxBQUdJLEFBTUcsQUFNUCxBQU1FLEFBT0MsVUEzQmYsQUFlQSxBQU1rQixDQTlCRixBQXFDZCxDQTNEa0IsRUFrQnBCLEFBZ0JvQixDQU1GLEVBNUNsQixPQXlEMEIsQ0E5QlgsSUFkQyxBQWdDTSxDQXhDSCxFQWtDUixTQUNYLEVBMUJrQixJQVJKLEFBd0NkLFlBdkNXLEFBUUUsU0FQRCxFQVFPLFFBUFIsU0FDWCxBQU9jLFlBQ2QsQUFVcUIsR0E4Qk0sa0VBN0JJLGlDQThCN0IsMEZBN0JnQixnQkFDbEIiLCJmaWxlIjoiL2hvbWUvZ2VtYW5lcGEvRG9jdW1lbnRzL0RldmVsb3BtZW50L1Byb3llY3Rvcy9SZWFjdC9mcmFtaW5naGFtLXJlYWN0LXB3YS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLy4uL3NyYy9IZWFkZXInXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vLi4vc3JjL05hdmJhcidcbmltcG9ydCBGb3JtIGZyb20gJy4vLi4vc3JjL0Zvcm0nXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vLi4vc3JjL0Zvb3RlcidcbmltcG9ydCBMaW5rSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTGluayc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IEZyYW1pbmdoYW1DYWxjdWxhdG9yIGZyb20gJy4uL3NyYy9GcmFtaW5naGFtQ2FsY3VsYXRvcidcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMywgMiksXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgLy8gSGFuZGxlcyBkYXRhIHN1Ym1pdHRlZCBpbiBGb3JtIGNvbXBvbmVudGVkIHdoZW4gQ2FsY3VsYXRlIGJ1dHRvbiBpcyBwcmVzc2VkXG4gIGZ1bmN0aW9uIGRhdGFzdWJtaXR0ZWRIYW5kbGVyKGRhdGEpe1xuICAgIGNvbnNvbGUubG9nKCdNZSBsbGFtYXJvbicpXG4gICAgY29uc29sZS5sb2coRnJhbWluZ2hhbUNhbGN1bGF0b3IoZGF0YSkpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8SGVhZGVyIC8+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmb3Jtc2VjdGlvblwiPlxuICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgICA8aDI+RnJhbWluZ2hhbSBSaXNrIFNjb3JlIENhbGN1bGF0b3I8L2gyPlxuICAgICAgICAgICAgPGg1PlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuY2NzLmNhL2ltYWdlcy9HdWlkZWxpbmVzL1Rvb2xzX2FuZF9DYWxjdWxhdG9yc19Fbi9GUlNfZW5nXzIwMTdfZm5sMS5wZGZcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgIFVzaW5nIDIwMTcgQ2FuYWRpYW4gQ2FyZGlvVmFzY3VsYXIgU29jaWV0eSBHdWlkZWxpbmVzXG4gICAgICAgICAgICAgIDxMaW5rSWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgIDxGb3JtIGRhdGFzdWJtaXR0ZWRIYW5kbGVyPXtkYXRhc3VibWl0dGVkSGFuZGxlcn0gLz5cbiAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYWJvdXRzZWN0aW9uXCI+XG4gICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgVGhlIEZyYW1pbmdoYW0gU2NhbGUgYWxsb3dzIHRvIGRldGVybWluZSB0aGUgcmlzayBvZiBzdWZmZXJpbmcgYW55IGNhcmRpb3Zhc2N1bGFyIGV2ZW50IGluIDEwIHllYXJzLCBhc3Nlc3NpbmcgZmFjdG9ycyBzdWNoIGFzIGFnZSwgc2V4LCBibG9vZCBwcmVzc3VyZSwgZGlhYmV0ZXMsIGFuZCBzbW9raW5nLCBhc3NpZ25pbmcgYSBzY29yZSB0byBlYWNoIG9mIHRoZW0gYW5kIHN0cmF0aWZ5aW5nIHRoZSBwYXRpZW50IGluIGxvdywgbWVkaXVtLCBhbmQgaGlnaCBjYXJkaW92YXNjdWxhciByaXNrLiBJdCBhbHNvIGFsbG93cyB0byBjYWxjdWxhdGUgdGhlIHZhc2N1bGFyIGFnZSwgd2hpY2ggZ2l2ZXMgYW4gZXN0aW1hdGUgb2YgdGhlIHZhc2N1bGFyIGRhbWFnZSBvZiB0aGUgcGF0aWVudCB0aHJvdWdoIHRoZSB2YXJpYXRpb24gb2YgeWVhcnMgYmV0d2VlbiBpdCBhbmQgaXRzIGNocm9ub2xvZ2ljYWwgYWdlLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDwgRm9vdGVyIC8+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIHAge1xuICAgICAgICBmb250LWZhbWlseTogTGF0bztcbiAgICAgIH1cblxuICAgICAgYm9keSB7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgIH1cbiAgICAgICNyb290IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiAjNDY4OUM4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIH1cblxuICAgICAgYTp2aXNpdGVkIHtcbiAgICAgICAgY29sb3I6ICM0Njg5QzhcbiAgICAgIH1cblxuICAgICAgbWFpbiB7XG4gICAgICAgIHdpZHRoOiA5MHZ3O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDc2dmg7XG4gICAgICB9XG5cbiAgICAgIHNlY3Rpb24uZm9ybXNlY3Rpb24ge1xuICAgICAgICB3aWR0aDogNjElO1xuICAgICAgfVxuICAgICAgc2VjdGlvbi5mb3Jtc2VjdGlvbiBoMiB7XG4gICAgICAgIGNvbG9yOiAjNDY4OUM4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgc2VjdGlvbi5mb3Jtc2VjdGlvbiBoNSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgIGNvbG9yOiAjNDY4OUM4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgc2VjdGlvbi5hYm91dHNlY3Rpb24ge1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgfVxuXG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VjdGlvbi5mb3Jtc2VjdGlvbiwgc2VjdGlvbi5hYm91dHNlY3Rpb24ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/pages/index.js */"));
}

/***/ }),

/***/ "./src/FraminghamCalculator/index.js":
/*!*******************************************!*\
  !*** ./src/FraminghamCalculator/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FraminghamCalculator; });
function FraminghamCalculator(data) {
  return data;
}

/***/ })

})
//# sourceMappingURL=index.js.5256ab3fa19e9177f9b8.hot-update.js.map