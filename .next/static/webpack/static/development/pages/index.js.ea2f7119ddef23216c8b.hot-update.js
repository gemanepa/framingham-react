webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/Form/index.js":
/*!***************************!*\
  !*** ./src/Form/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/esm/FormGroup/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "./node_modules/@material-ui/core/esm/FormLabel/index.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/esm/Radio/index.js");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/esm/RadioGroup/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./data.js */ "./src/Form/data.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");



var _jsxFileName = "/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/src/Form/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    formControl: {
      margin: theme.spacing(1),
      minWidth: 220
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    calcButton: {
      margin: theme.spacing(1),
      width: '40%'
    },
    resetButton: {
      margin: theme.spacing(1)
    }
  };
});
function Form() {
  var classes = useStyles(); //Radio logic

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(''),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      radioVal = _React$useState2[0],
      setRadioVal = _React$useState2[1]; //Selects logic


  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({}),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      selectsVals = _React$useState4[0],
      setSelectsVals = _React$useState4[1];

  var handleSelectChange = function handleSelectChange(event) {
    setSelectsVals(function (oldValues) {
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, oldValues, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.name, event.target.value));
    });
  }; // Checkbox Logic


  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    smoking: false,
    diabetes: false,
    treatment: false
  }),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState5, 2),
      checkboxVals = _React$useState6[0],
      setCheckboxState = _React$useState6[1];

  var handleCheckboxChange = function handleCheckboxChange(name) {
    return function (event) {
      setCheckboxState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, checkboxVals, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, event.target.checked)));
    };
  };

  function reset() {
    setRadioVal('');
    setSelectsVals({});
    setCheckboxState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, checkboxVals, {
      smoking: false
    }));
    console.log(checkboxVals);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("form", {
    autoComplete: "off",
    className: "jsx-2156212043",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__["default"], {
    component: "fieldset",
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_13__["default"], {
    component: "legend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Gender"), __jsx(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_15__["default"], {
    "aria-label": "gender",
    name: "gender",
    value: radioVal,
    onChange: function onChange(event) {
      return setRadioVal(event.target.value);
    },
    row: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: "female",
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }),
    label: "Female",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: "male",
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }),
    label: "Male",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }))), _data_js__WEBPACK_IMPORTED_MODULE_17__["selects"].map(function (select) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: classes.formControl,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
      htmlFor: select.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, select.label), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_16__["default"], {
      value: selectsVals[select.name],
      onChange: handleSelectChange,
      inputProps: {
        name: select.name,
        id: select.name
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, select.values.map(function (val) {
      return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
        value: val,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, val);
    })), select.helper && __jsx(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, select.helper)), (select.name === 'age' || select.name === 'totaldl' || select.name === 'wt') && __jsx("br", {
      className: "jsx-2156212043" + " " + "desktopOnly",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }));
  }), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
    row: true,
    className: "checkboxes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, _data_js__WEBPACK_IMPORTED_MODULE_17__["checkboxes"].map(function (checkbox) {
    return __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__["default"], {
      control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__["default"], {
        checked: checkboxVals.checkedA,
        onChange: handleCheckboxChange(checkbox.checkboxKey),
        value: checkbox.checkboxKey,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }),
      label: checkbox.label,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    });
  })), __jsx("br", {
    className: "jsx-2156212043",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2156212043" + " " + "formbuttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
    onClick: reset,
    variant: "contained",
    color: "secondary",
    className: classes.resetButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Reset"),  true && window.innerWidth < 1200 && __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
    variant: "contained",
    color: "primary",
    className: classes.resetButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Calculate"),  true && window.innerWidth > 1199 && __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
    variant: "contained",
    color: "primary",
    className: classes.calcButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "Calculate"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "2156212043",
    __self: this
  }, ".checkboxes.jsx-2156212043{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin:0 auto;}.formbuttons.jsx-2156212043{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}@media (min-width:1200px){.mobileOnly.jsx-2156212043{display:none;}}@media (max-width:1199px){.desktopOnly.jsx-2156212043{display:none;}form.jsx-2156212043{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}form.jsx-2156212043 div.jsx-2156212043{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.checkboxes.jsx-2156212043{margin:0 auto;}.formbuttons.jsx-2156212043{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}}@media only screen and (max-width:499){.checkboxes.jsx-2156212043{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlbWFuZXBhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm95ZWN0b3MvUmVhY3QvZnJhbWluZ2hhbS1yZWFjdC1wd2Evc3JjL0Zvcm0vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0lnQixBQUd3QyxBQUloQixBQU9BLEFBS0EsQUFHRCxBQU1XLEFBSVQsQUFJRCxBQU9TLGFBNUJ4QixBQUtBLENBYUEsNERBekJxQixBQWVHLEFBY1EsSUFPakIscUJBZmYsd0JBekJnQixjQUNoQixNQUkrQixTQWVOLEFBcUJJLHdCQVA3QiwyRUFiQSxNQXFCQSxTQXBDRiIsImZpbGUiOiIvaG9tZS9nZW1hbmVwYS9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvUHJveWVjdG9zL1JlYWN0L2ZyYW1pbmdoYW0tcmVhY3QtcHdhL3NyYy9Gb3JtL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IElucHV0TGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbCc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUdyb3VwJztcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xuaW1wb3J0IEZvcm1IZWxwZXJUZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1IZWxwZXJUZXh0JztcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgRm9ybUxhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1MYWJlbCc7XG5cbmltcG9ydCBSYWRpbyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpbyc7XG5pbXBvcnQgUmFkaW9Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0JztcbmltcG9ydCB7IGNoZWNrYm94ZXMsIHNlbGVjdHMgfSBmcm9tICcuL2RhdGEuanMnXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBmb3JtQ29udHJvbDoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICBtaW5XaWR0aDogMjIwLFxuICB9LFxuICBzZWxlY3RFbXB0eToge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgfSxcbiAgY2FsY0J1dHRvbjoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICB3aWR0aDogJzQwJSdcbiAgfSxcbiAgcmVzZXRCdXR0b246IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gIH1cbn0pKTtcblxuICBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybSgpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIC8vUmFkaW8gbG9naWNcbiAgY29uc3QgW3JhZGlvVmFsLCBzZXRSYWRpb1ZhbF0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XG5cbiAgLy9TZWxlY3RzIGxvZ2ljXG4gIGNvbnN0IFtzZWxlY3RzVmFscywgc2V0U2VsZWN0c1ZhbHNdID0gUmVhY3QudXNlU3RhdGUoeyB9KTtcbiAgY29uc3QgaGFuZGxlU2VsZWN0Q2hhbmdlID0gZXZlbnQgPT4ge1xuICAgIHNldFNlbGVjdHNWYWxzKG9sZFZhbHVlcyA9PiAoe1xuICAgICAgLi4ub2xkVmFsdWVzLFxuICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgIH0pKTtcbiAgfTtcblxuICAvLyBDaGVja2JveCBMb2dpY1xuICBjb25zdCBbY2hlY2tib3hWYWxzLCBzZXRDaGVja2JveFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICBzbW9raW5nOiBmYWxzZSxcbiAgICBkaWFiZXRlczogZmFsc2UsXG4gICAgdHJlYXRtZW50OiBmYWxzZSxcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hlY2tib3hDaGFuZ2UgPSBuYW1lID0+IGV2ZW50ID0+IHtcbiAgICBzZXRDaGVja2JveFN0YXRlKHsgLi4uY2hlY2tib3hWYWxzLCBbbmFtZV06IGV2ZW50LnRhcmdldC5jaGVja2VkIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgc2V0UmFkaW9WYWwoJycpO1xuICAgICAgc2V0U2VsZWN0c1ZhbHMoeyB9KTtcbiAgICAgIHNldENoZWNrYm94U3RhdGUoeyAuLi5jaGVja2JveFZhbHMsIHNtb2tpbmc6IGZhbHNlIH0pO1xuICAgICAgY29uc29sZS5sb2coY2hlY2tib3hWYWxzKVxuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8Zm9ybSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cbiAgICAgIFxuICAgICAgPEZvcm1Db250cm9sIGNvbXBvbmVudD1cImZpZWxkc2V0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cbiAgICAgICAgPEZvcm1MYWJlbCBjb21wb25lbnQ9XCJsZWdlbmRcIj5HZW5kZXI8L0Zvcm1MYWJlbD5cbiAgICAgICAgPFJhZGlvR3JvdXAgYXJpYS1sYWJlbD1cImdlbmRlclwiIG5hbWU9XCJnZW5kZXJcIiB2YWx1ZT17cmFkaW9WYWx9IG9uQ2hhbmdlPXtldmVudCA9PiBzZXRSYWRpb1ZhbChldmVudC50YXJnZXQudmFsdWUpfSByb3c+XG4gICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJmZW1hbGVcIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwiRmVtYWxlXCIgLz5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cIm1hbGVcIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwiTWFsZVwiIC8+XG4gICAgICAgIDwvUmFkaW9Hcm91cD5cbiAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICB7c2VsZWN0cy5tYXAoc2VsZWN0ID0+XG4gICAgICAgIDw+XG4gICAgICAgICAgPEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XG4gICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPXtzZWxlY3QubmFtZX0+e3NlbGVjdC5sYWJlbH08L0lucHV0TGFiZWw+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RzVmFsc1tzZWxlY3QubmFtZV19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3RDaGFuZ2V9XG4gICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICBuYW1lOiBzZWxlY3QubmFtZSxcbiAgICAgICAgICAgICAgICBpZDogc2VsZWN0Lm5hbWUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICB7c2VsZWN0LnZhbHVlcy5tYXAodmFsID0+IFxuICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e3ZhbH0+e3ZhbH08L01lbnVJdGVtPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAge3NlbGVjdC5oZWxwZXIgJiYgPEZvcm1IZWxwZXJUZXh0PntzZWxlY3QuaGVscGVyfTwvRm9ybUhlbHBlclRleHQ+fVxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgXG4gICAgICAgICAgeyhzZWxlY3QubmFtZSA9PT0gJ2FnZScgfHwgc2VsZWN0Lm5hbWUgPT09ICd0b3RhbGRsJyB8fCBzZWxlY3QubmFtZSA9PT0gJ3d0JykgJiYgPGJyIGNsYXNzTmFtZT1cImRlc2t0b3BPbmx5XCIvPn1cbiAgICAgICAgPC8+XG4gICAgICApfVxuXG4gICAgICA8Rm9ybUdyb3VwIHJvdyBjbGFzc05hbWU9XCJjaGVja2JveGVzXCI+XG4gICAgICB7Y2hlY2tib3hlcy5tYXAoY2hlY2tib3ggPT5cbiAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgIDxDaGVja2JveCBjaGVja2VkPXtjaGVja2JveFZhbHMuY2hlY2tlZEF9IG9uQ2hhbmdlPXtoYW5kbGVDaGVja2JveENoYW5nZShjaGVja2JveC5jaGVja2JveEtleSl9IHZhbHVlPXtjaGVja2JveC5jaGVja2JveEtleX0gLz5cbiAgICAgICAgICB9XG4gICAgICAgICAgbGFiZWw9e2NoZWNrYm94LmxhYmVsfVxuICAgICAgICAvPil9XG4gICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgIDxiciAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1idXR0b25zXCI+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17cmVzZXR9IHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZXNldEJ1dHRvbn0+XG4gICAgICAgICAgUmVzZXRcbiAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgeyh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8IDEyMDAgJiZcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnJlc2V0QnV0dG9ufT5cbiAgICAgICAgICAgIENhbGN1bGF0ZVxuICAgICAgICA8L0J1dHRvbj4pfVxuXG4gICAgICAgIHsodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmlubmVyV2lkdGggPiAxMTk5ICYmXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYWxjQnV0dG9ufT5cbiAgICAgICAgICAgIENhbGN1bGF0ZVxuICAgICAgICAgIDwvQnV0dG9uPil9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNoZWNrYm94ZXMge1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9O1xuICAgICAgLmZvcm1idXR0b25zIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpe1xuICAgICAgICAubW9iaWxlT25seSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAuZGVza3RvcE9ubHkge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgZm9ybSB7XG4gICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtIGRpdiB7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hlY2tib3hlcyB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybWJ1dHRvbnMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDk5KSB7XG4gICAgICAgIC5jaGVja2JveGVzIHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufSJdfQ== */\n/*@ sourceURL=/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/src/Form/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.ea2f7119ddef23216c8b.hot-update.js.map