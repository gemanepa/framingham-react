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
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_19__);



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
function Form(props) {
  var translations = props.translations;
  var classes = useStyles(); // Validations

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    gender: false,
    age: false,
    hdl: false,
    ldl: false,
    totaldl: false,
    ta: false,
    wt: false
  }),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      errors = _React$useState2[0],
      setErrors = _React$useState2[1]; //Radio logic


  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(''),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      radioVal = _React$useState4[0],
      setRadioVal = _React$useState4[1];

  function handleRadioChange(event) {
    setErrors(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, errors, {
      gender: false
    }));
    setRadioVal(event.target.value);
  } //Selects logic


  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({}),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState5, 2),
      selectsVals = _React$useState6[0],
      setSelectsVals = _React$useState6[1];

  var handleSelectChange = function handleSelectChange(event) {
    setErrors(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, errors, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.name, false)));
    setSelectsVals(function (oldValues) {
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, oldValues, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.name, event.target.value));
    });
  }; // Checkbox Logic


  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    smoking: false,
    diabetes: false,
    treatment: false
  }),
      _React$useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState7, 2),
      checkboxVals = _React$useState8[0],
      setCheckboxState = _React$useState8[1];

  var handleCheckboxChange = function handleCheckboxChange(name) {
    return function (event) {
      setCheckboxState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, checkboxVals, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, event.target.checked)));
    };
  };

  function validateSubmittedData(data) {
    var failedVal = {
      gender: false,
      age: false,
      hdl: false,
      ldl: false,
      totaldl: false,
      ta: false,
      wt: false
    };

    if (!data.gender) {
      failedVal.gender = true;
    }

    if (!data.age) {
      failedVal.age = true;
    }

    if (!data.hdl) {
      failedVal.hdl = true;
    }

    if (!data.ldl) {
      failedVal.ldl = true;
    }

    if (!data.totaldl) {
      failedVal.totaldl = true;
    }

    if (!data.ta) {
      failedVal.ta = true;
    }

    if (!data.wt) {
      failedVal.wt = true;
    }

    if (!data.gender || !data.age || !data.hdl || !data.ldl || !data.totaldl || !data.ta || !data.wt) {
      setErrors(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, failedVal));
      return false;
    } else if (data.diabetes == undefined || data.smoking == undefined || data.treatment == undefined) {
      alert('???');
      return false;
    }

    return true;
  }

  function resetButtonHandler() {
    setRadioVal('');
    setSelectsVals({});
    setCheckboxState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, checkboxVals, {
      smoking: false,
      diabetes: false,
      treatment: false
    }));
    setErrors({
      gender: false,
      age: false,
      hdl: false,
      ldl: false,
      totald: false,
      ta: false,
      wt: false
    });
  }

  function calcButtonHandler() {
    var data = {
      gender: radioVal,
      age: selectsVals.age,
      hdl: selectsVals.hdl,
      ldl: selectsVals.ldl,
      totaldl: selectsVals.totaldl,
      ta: selectsVals.ta,
      wt: selectsVals.wt,
      diabetes: checkboxVals.diabetes,
      smoking: checkboxVals.smoking,
      treatment: checkboxVals.hypertension_in_treatment
    };

    if (validateSubmittedData(data)) {
      props.datasubmittedHandler(data);
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("form", {
    autoComplete: "off",
    className: "jsx-1873314957",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__["default"], {
    component: "fieldset",
    className: classes.formControl,
    error: errors.gender,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_13__["default"], {
    component: "legend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, translations.gender), __jsx(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_15__["default"], {
    "aria-label": "gender",
    name: "gender",
    value: radioVal,
    onChange: function onChange(event) {
      return handleRadioChange(event);
    },
    row: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1873314957" + " " + ((errors.gender ? 'error' : '') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: "female",
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }),
    label: translations.woman,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: "male",
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }),
    label: translations.man,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  })))), _data_js__WEBPACK_IMPORTED_MODULE_17__["selects"].map(function (select) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: classes.formControl,
      error: errors[select.name],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
      htmlFor: select.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, translations[select.label]), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_16__["default"], {
      value: selectsVals[select.name],
      onChange: handleSelectChange,
      inputProps: {
        name: select.name,
        id: select.name
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, select.name !== 'wt' && select.values.map(function (val) {
      return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
        value: val,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, val);
    }), select.name == 'wt' && !radioVal && __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      value: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, "Gender required"), select.name == 'wt' && radioVal && select.values[radioVal].map(function (val) {
      return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
        value: val,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, val);
    })), select.helper && __jsx(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }, select.helper)), (select.name === 'age' || select.name === 'totaldl' || select.name === 'wt') && __jsx("br", {
      className: "jsx-1873314957" + " " + "desktopOnly",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }));
  }), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
    row: true,
    className: "checkboxes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, _data_js__WEBPACK_IMPORTED_MODULE_17__["checkboxes"].map(function (checkbox) {
    return __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__["default"], {
      control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onChange: handleCheckboxChange(checkbox.checkboxKey),
        checked: checkboxVals[checkbox.checkboxKey],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }),
      label: translations[checkbox.checkboxKey],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    });
  })), __jsx("br", {
    className: "jsx-1873314957",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1873314957" + " " + "formbuttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
    onClick: resetButtonHandler,
    variant: "contained",
    color: "secondary",
    className: classes.resetButton,
    startIcon: __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_19___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_19___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }), "Reset"),  true && window.innerWidth < 1200 && __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
    onClick: calcButtonHandler,
    variant: "contained",
    color: "primary",
    className: classes.resetButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, "Calculate"),  true && window.innerWidth > 1199 && __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
    onClick: calcButtonHandler,
    variant: "contained",
    color: "primary",
    className: classes.calcButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, "Calculate"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1873314957",
    __self: this
  }, ".checkboxes.jsx-1873314957{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin:0 auto;}.formbuttons.jsx-1873314957{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.error.jsx-1873314957{color:#ff1744;}@media (min-width:1200px){.mobileOnly.jsx-1873314957{display:none;}}@media (max-width:1199px){.desktopOnly.jsx-1873314957{display:none;}form.jsx-1873314957{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}form.jsx-1873314957 div.jsx-1873314957{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.checkboxes.jsx-1873314957{margin:0 auto;}.formbuttons.jsx-1873314957{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}}@media only screen and (max-width:499){.checkboxes.jsx-1873314957{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlbWFuZXBhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm95ZWN0b3MvUmVhY3QvZnJhbWluZ2hhbS1yZWFjdC1wd2Evc3JjL0Zvcm0vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcU5nQixBQUd3QyxBQUloQixBQU1ELEFBS0MsQUFLQSxBQUdELEFBTVcsQUFJVCxBQUlELEFBT1MsYUE1QnhCLEFBS0EsQ0FWRixBQXVCRSw0REE3QnFCLEFBbUJHLEFBY1EsSUFPakIscUJBZmYsd0JBN0JnQixjQUNoQixNQUkrQixTQW1CTixBQXFCSSx3QkFQN0IsMkVBYkEsTUFxQkEsU0F4Q0YiLCJmaWxlIjoiL2hvbWUvZ2VtYW5lcGEvRG9jdW1lbnRzL0RldmVsb3BtZW50L1Byb3llY3Rvcy9SZWFjdC9mcmFtaW5naGFtLXJlYWN0LXB3YS9zcmMvRm9ybS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWwnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveCc7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Hcm91cCc7XG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcbmltcG9ydCBGb3JtSGVscGVyVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtSGVscGVyVGV4dCc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IEZvcm1MYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtTGFiZWwnO1xuXG5pbXBvcnQgUmFkaW8gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW8nO1xuaW1wb3J0IFJhZGlvR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cCc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XG5pbXBvcnQgeyBjaGVja2JveGVzLCBzZWxlY3RzIH0gZnJvbSAnLi9kYXRhLmpzJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlJztcblxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGZvcm1Db250cm9sOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIG1pbldpZHRoOiAyMjAsXG4gIH0sXG4gIHNlbGVjdEVtcHR5OiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICB9LFxuICBjYWxjQnV0dG9uOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIHdpZHRoOiAnNDAlJ1xuICB9LFxuICByZXNldEJ1dHRvbjoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgfVxufSkpO1xuXG4gIFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtKHByb3BzKSB7XG4gIGxldCB7IHRyYW5zbGF0aW9ucyB9ID0gcHJvcHM7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICAvLyBWYWxpZGF0aW9uc1xuICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIGdlbmRlcjogZmFsc2UsXG4gICAgYWdlOiBmYWxzZSxcbiAgICBoZGw6IGZhbHNlLFxuICAgIGxkbDogZmFsc2UsXG4gICAgdG90YWxkbDogZmFsc2UsXG4gICAgdGE6IGZhbHNlLFxuICAgIHd0OiBmYWxzZVxuICB9KVxuXG4gIC8vUmFkaW8gbG9naWNcbiAgY29uc3QgW3JhZGlvVmFsLCBzZXRSYWRpb1ZhbF0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XG4gIGZ1bmN0aW9uIGhhbmRsZVJhZGlvQ2hhbmdlKGV2ZW50KSB7XG4gICAgc2V0RXJyb3JzKHsuLi5lcnJvcnMsIGdlbmRlcjogZmFsc2V9KVxuICAgIHNldFJhZGlvVmFsKGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIC8vU2VsZWN0cyBsb2dpY1xuICBjb25zdCBbc2VsZWN0c1ZhbHMsIHNldFNlbGVjdHNWYWxzXSA9IFJlYWN0LnVzZVN0YXRlKHsgfSk7XG4gIGNvbnN0IGhhbmRsZVNlbGVjdENoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICBzZXRFcnJvcnMoey4uLmVycm9ycywgW2V2ZW50LnRhcmdldC5uYW1lXTogZmFsc2V9KVxuICAgIHNldFNlbGVjdHNWYWxzKG9sZFZhbHVlcyA9PiAoe1xuICAgICAgLi4ub2xkVmFsdWVzLFxuICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgIH0pKTtcbiAgfTtcblxuICAvLyBDaGVja2JveCBMb2dpY1xuICBjb25zdCBbY2hlY2tib3hWYWxzLCBzZXRDaGVja2JveFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICBzbW9raW5nOiBmYWxzZSxcbiAgICBkaWFiZXRlczogZmFsc2UsXG4gICAgdHJlYXRtZW50OiBmYWxzZSxcbiAgfSk7XG4gIGNvbnN0IGhhbmRsZUNoZWNrYm94Q2hhbmdlID0gbmFtZSA9PiBldmVudCA9PiB7XG4gICAgc2V0Q2hlY2tib3hTdGF0ZSh7IC4uLmNoZWNrYm94VmFscywgW25hbWVdOiBldmVudC50YXJnZXQuY2hlY2tlZCB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWxpZGF0ZVN1Ym1pdHRlZERhdGEoZGF0YSkge1xuICAgIGxldCBmYWlsZWRWYWwgPSB7XG4gICAgICBnZW5kZXI6IGZhbHNlLFxuICAgICAgYWdlOiBmYWxzZSxcbiAgICAgIGhkbDogZmFsc2UsXG4gICAgICBsZGw6IGZhbHNlLFxuICAgICAgdG90YWxkbDogZmFsc2UsXG4gICAgICB0YTogZmFsc2UsXG4gICAgICB3dDogZmFsc2UgIFxuICAgIH1cbiAgICBpZighZGF0YS5nZW5kZXIpIHtmYWlsZWRWYWwuZ2VuZGVyID0gdHJ1ZX1cbiAgICBpZighZGF0YS5hZ2UpIHtmYWlsZWRWYWwuYWdlID0gdHJ1ZX1cbiAgICBpZighZGF0YS5oZGwpIHtmYWlsZWRWYWwuaGRsID0gdHJ1ZX1cbiAgICBpZighZGF0YS5sZGwpIHtmYWlsZWRWYWwubGRsID0gdHJ1ZX1cbiAgICBpZighZGF0YS50b3RhbGRsKSB7ZmFpbGVkVmFsLnRvdGFsZGwgPSB0cnVlfVxuICAgIGlmKCFkYXRhLnRhKSB7ZmFpbGVkVmFsLnRhID0gdHJ1ZX1cbiAgICBpZighZGF0YS53dCkge2ZhaWxlZFZhbC53dCA9IHRydWV9XG5cbiAgICBpZighZGF0YS5nZW5kZXIgfHwgIWRhdGEuYWdlIHx8ICFkYXRhLmhkbCB8fCAhZGF0YS5sZGwgfHwgIWRhdGEudG90YWxkbCB8fCAhZGF0YS50YSB8fCAhZGF0YS53dCkge1xuICAgICAgc2V0RXJyb3JzKHsuLi5mYWlsZWRWYWx9KVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSBlbHNlIGlmIChkYXRhLmRpYWJldGVzID09IHVuZGVmaW5lZCB8fCBkYXRhLnNtb2tpbmcgPT0gdW5kZWZpbmVkIHx8IGRhdGEudHJlYXRtZW50ID09IHVuZGVmaW5lZCkge1xuICAgICAgYWxlcnQoJz8/PycpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICBmdW5jdGlvbiByZXNldEJ1dHRvbkhhbmRsZXIoKSB7XG4gICAgICBzZXRSYWRpb1ZhbCgnJyk7XG4gICAgICBzZXRTZWxlY3RzVmFscyh7IH0pO1xuICAgICAgc2V0Q2hlY2tib3hTdGF0ZSh7IC4uLmNoZWNrYm94VmFscywgc21va2luZzogZmFsc2UsIGRpYWJldGVzOiBmYWxzZSwgdHJlYXRtZW50OiBmYWxzZSB9KTtcbiAgICAgIHNldEVycm9ycyh7XG4gICAgICAgIGdlbmRlcjogZmFsc2UsXG4gICAgICAgIGFnZTogZmFsc2UsXG4gICAgICAgIGhkbDogZmFsc2UsXG4gICAgICAgIGxkbDogZmFsc2UsXG4gICAgICAgIHRvdGFsZDogZmFsc2UsXG4gICAgICAgIHRhOiBmYWxzZSxcbiAgICAgICAgd3Q6IGZhbHNlICBcbiAgICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBjYWxjQnV0dG9uSGFuZGxlcigpe1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBnZW5kZXI6IHJhZGlvVmFsLFxuICAgICAgYWdlOiBzZWxlY3RzVmFscy5hZ2UsXG4gICAgICBoZGw6IHNlbGVjdHNWYWxzLmhkbCxcbiAgICAgIGxkbDogc2VsZWN0c1ZhbHMubGRsLFxuICAgICAgdG90YWxkbDogc2VsZWN0c1ZhbHMudG90YWxkbCxcbiAgICAgIHRhOiBzZWxlY3RzVmFscy50YSxcbiAgICAgIHd0OiBzZWxlY3RzVmFscy53dCxcbiAgICAgIGRpYWJldGVzOiBjaGVja2JveFZhbHMuZGlhYmV0ZXMsXG4gICAgICBzbW9raW5nOiBjaGVja2JveFZhbHMuc21va2luZyxcbiAgICAgIHRyZWF0bWVudDogY2hlY2tib3hWYWxzLmh5cGVydGVuc2lvbl9pbl90cmVhdG1lbnRcbiAgICB9XG4gICAgaWYodmFsaWRhdGVTdWJtaXR0ZWREYXRhKGRhdGEpKSB7IHByb3BzLmRhdGFzdWJtaXR0ZWRIYW5kbGVyKGRhdGEpIH1cbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGZvcm0gYXV0b0NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICBcbiAgICAgIDxGb3JtQ29udHJvbCBjb21wb25lbnQ9XCJmaWVsZHNldFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0gZXJyb3I9e2Vycm9ycy5nZW5kZXJ9ID5cbiAgICAgICAgPEZvcm1MYWJlbCBjb21wb25lbnQ9XCJsZWdlbmRcIj57dHJhbnNsYXRpb25zLmdlbmRlcn08L0Zvcm1MYWJlbD5cbiAgICAgICAgPFJhZGlvR3JvdXAgYXJpYS1sYWJlbD1cImdlbmRlclwiIG5hbWU9XCJnZW5kZXJcIiB2YWx1ZT17cmFkaW9WYWx9IG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVSYWRpb0NoYW5nZShldmVudCl9IHJvdz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZXJyb3JzLmdlbmRlciA/ICdlcnJvcicgOiAnJ30+XG4gICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJmZW1hbGVcIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPXt0cmFuc2xhdGlvbnMud29tYW59IC8+XG4gICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJtYWxlXCIgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD17dHJhbnNsYXRpb25zLm1hbn0gLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L1JhZGlvR3JvdXA+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAge3NlbGVjdHMubWFwKHNlbGVjdCA9PlxuICAgICAgICA8PlxuICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9IGVycm9yPXtlcnJvcnNbc2VsZWN0Lm5hbWVdfT5cbiAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9e3NlbGVjdC5uYW1lfT57dHJhbnNsYXRpb25zW3NlbGVjdC5sYWJlbF19PC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0c1ZhbHNbc2VsZWN0Lm5hbWVdfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VsZWN0Q2hhbmdlfVxuICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgbmFtZTogc2VsZWN0Lm5hbWUsXG4gICAgICAgICAgICAgICAgaWQ6IHNlbGVjdC5uYW1lLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuXG4gICAgICAgICAgICB7c2VsZWN0Lm5hbWUgIT09ICd3dCcgJiYgc2VsZWN0LnZhbHVlcy5tYXAodmFsID0+IFxuICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e3ZhbH0+e3ZhbH08L01lbnVJdGVtPlxuICAgICAgICAgICAgKX1cblxuXG4gICAgICAgICAgICB7KHNlbGVjdC5uYW1lID09ICd3dCcgJiYgIXJhZGlvVmFsKSAmJiBcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPScnPkdlbmRlciByZXF1aXJlZDwvTWVudUl0ZW0+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7KHNlbGVjdC5uYW1lID09ICd3dCcgJiYgcmFkaW9WYWwpICYmIHNlbGVjdC52YWx1ZXNbcmFkaW9WYWxdLm1hcCh2YWwgPT4gXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17dmFsfT57dmFsfTwvTWVudUl0ZW0+XG4gICAgICAgICAgICApfVxuXG5cbiAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAge3NlbGVjdC5oZWxwZXIgJiYgPEZvcm1IZWxwZXJUZXh0PntzZWxlY3QuaGVscGVyfTwvRm9ybUhlbHBlclRleHQ+fVxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgXG4gICAgICAgICAgeyhzZWxlY3QubmFtZSA9PT0gJ2FnZScgfHwgc2VsZWN0Lm5hbWUgPT09ICd0b3RhbGRsJyB8fCBzZWxlY3QubmFtZSA9PT0gJ3d0JykgJiYgPGJyIGNsYXNzTmFtZT1cImRlc2t0b3BPbmx5XCIvPn1cbiAgICAgICAgPC8+XG4gICAgICApfVxuXG4gICAgICA8Rm9ybUdyb3VwIHJvdyBjbGFzc05hbWU9XCJjaGVja2JveGVzXCI+XG4gICAgICB7Y2hlY2tib3hlcy5tYXAoY2hlY2tib3ggPT5cbiAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgIDxDaGVja2JveCBvbkNoYW5nZT17aGFuZGxlQ2hlY2tib3hDaGFuZ2UoY2hlY2tib3guY2hlY2tib3hLZXkpfSBjaGVja2VkPXtjaGVja2JveFZhbHNbY2hlY2tib3guY2hlY2tib3hLZXldfSAvPlxuICAgICAgICAgIH1cbiAgICAgICAgICBsYWJlbD17dHJhbnNsYXRpb25zW2NoZWNrYm94LmNoZWNrYm94S2V5XX1cbiAgICAgICAgLz4pfVxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICA8YnIgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtYnV0dG9uc1wiPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3Jlc2V0QnV0dG9uSGFuZGxlcn0gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnJlc2V0QnV0dG9ufSBzdGFydEljb249ezxEZWxldGVJY29uIC8+fT5cbiAgICAgICAgPERlbGV0ZUljb24gLz5SZXNldFxuICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICB7KHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5pbm5lcldpZHRoIDwgMTIwMCAmJlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2NhbGNCdXR0b25IYW5kbGVyfSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnJlc2V0QnV0dG9ufT5cbiAgICAgICAgICAgIENhbGN1bGF0ZVxuICAgICAgICA8L0J1dHRvbj4pfVxuXG4gICAgICAgIHsodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmlubmVyV2lkdGggPiAxMTk5ICYmXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17Y2FsY0J1dHRvbkhhbmRsZXJ9IHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMuY2FsY0J1dHRvbn0+XG4gICAgICAgICAgICBDYWxjdWxhdGVcbiAgICAgICAgICA8L0J1dHRvbj4pfVxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jaGVja2JveGVzIHtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfTtcbiAgICAgIC5mb3JtYnV0dG9ucyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgfVxuXG4gICAgICAuZXJyb3Ige1xuICAgICAgICBjb2xvcjogI2ZmMTc0NDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCl7XG4gICAgICAgIC5tb2JpbGVPbmx5IHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC5kZXNrdG9wT25seSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBmb3JtIHtcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm0gZGl2IHtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGVja2JveGVzIHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtYnV0dG9ucyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OTkpIHtcbiAgICAgICAgLmNoZWNrYm94ZXMge1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59Il19 */\n/*@ sourceURL=/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/src/Form/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.9c1fb3057e899e3d26ef.hot-update.js.map