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
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/Send */ "./node_modules/@material-ui/icons/Send.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_20__);



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
  })),  true && window.innerWidth < 1200 && __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
    onClick: calcButtonHandler,
    variant: "contained",
    color: "primary",
    className: classes.resetButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, "Calculate ", __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_20___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  })),  true && window.innerWidth > 1199 && __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
    onClick: calcButtonHandler,
    variant: "contained",
    color: "primary",
    className: classes.calcButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, "Calculate ", __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_20___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1873314957",
    __self: this
  }, ".checkboxes.jsx-1873314957{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin:0 auto;}.formbuttons.jsx-1873314957{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.error.jsx-1873314957{color:#ff1744;}@media (min-width:1200px){.mobileOnly.jsx-1873314957{display:none;}}@media (max-width:1199px){.desktopOnly.jsx-1873314957{display:none;}form.jsx-1873314957{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}form.jsx-1873314957 div.jsx-1873314957{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.checkboxes.jsx-1873314957{margin:0 auto;}.formbuttons.jsx-1873314957{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}}@media only screen and (max-width:499){.checkboxes.jsx-1873314957{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlbWFuZXBhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm95ZWN0b3MvUmVhY3QvZnJhbWluZ2hhbS1yZWFjdC1wd2Evc3JjL0Zvcm0vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcU5nQixBQUd3QyxBQUloQixBQU1ELEFBS0MsQUFLQSxBQUdELEFBTVcsQUFJVCxBQUlELEFBT1MsYUE1QnhCLEFBS0EsQ0FWRixBQXVCRSw0REE3QnFCLEFBbUJHLEFBY1EsSUFPakIscUJBZmYsd0JBN0JnQixjQUNoQixNQUkrQixTQW1CTixBQXFCSSx3QkFQN0IsMkVBYkEsTUFxQkEsU0F4Q0YiLCJmaWxlIjoiL2hvbWUvZ2VtYW5lcGEvRG9jdW1lbnRzL0RldmVsb3BtZW50L1Byb3llY3Rvcy9SZWFjdC9mcmFtaW5naGFtLXJlYWN0LXB3YS9zcmMvRm9ybS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWwnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveCc7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Hcm91cCc7XG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcbmltcG9ydCBGb3JtSGVscGVyVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtSGVscGVyVGV4dCc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IEZvcm1MYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtTGFiZWwnO1xuXG5pbXBvcnQgUmFkaW8gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW8nO1xuaW1wb3J0IFJhZGlvR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cCc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XG5pbXBvcnQgeyBjaGVja2JveGVzLCBzZWxlY3RzIH0gZnJvbSAnLi9kYXRhLmpzJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlJztcbmltcG9ydCBTZW5kSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VuZCc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgZm9ybUNvbnRyb2w6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgbWluV2lkdGg6IDIyMCxcbiAgfSxcbiAgc2VsZWN0RW1wdHk6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXG4gIH0sXG4gIGNhbGNCdXR0b246IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgd2lkdGg6ICc0MCUnXG4gIH0sXG4gIHJlc2V0QnV0dG9uOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICB9XG59KSk7XG5cbiAgXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0ocHJvcHMpIHtcbiAgbGV0IHsgdHJhbnNsYXRpb25zIH0gPSBwcm9wcztcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIC8vIFZhbGlkYXRpb25zXG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgZ2VuZGVyOiBmYWxzZSxcbiAgICBhZ2U6IGZhbHNlLFxuICAgIGhkbDogZmFsc2UsXG4gICAgbGRsOiBmYWxzZSxcbiAgICB0b3RhbGRsOiBmYWxzZSxcbiAgICB0YTogZmFsc2UsXG4gICAgd3Q6IGZhbHNlXG4gIH0pXG5cbiAgLy9SYWRpbyBsb2dpY1xuICBjb25zdCBbcmFkaW9WYWwsIHNldFJhZGlvVmFsXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcbiAgZnVuY3Rpb24gaGFuZGxlUmFkaW9DaGFuZ2UoZXZlbnQpIHtcbiAgICBzZXRFcnJvcnMoey4uLmVycm9ycywgZ2VuZGVyOiBmYWxzZX0pXG4gICAgc2V0UmFkaW9WYWwoZXZlbnQudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgLy9TZWxlY3RzIGxvZ2ljXG4gIGNvbnN0IFtzZWxlY3RzVmFscywgc2V0U2VsZWN0c1ZhbHNdID0gUmVhY3QudXNlU3RhdGUoeyB9KTtcbiAgY29uc3QgaGFuZGxlU2VsZWN0Q2hhbmdlID0gZXZlbnQgPT4ge1xuICAgIHNldEVycm9ycyh7Li4uZXJyb3JzLCBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBmYWxzZX0pXG4gICAgc2V0U2VsZWN0c1ZhbHMob2xkVmFsdWVzID0+ICh7XG4gICAgICAuLi5vbGRWYWx1ZXMsXG4gICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgfSkpO1xuICB9O1xuXG4gIC8vIENoZWNrYm94IExvZ2ljXG4gIGNvbnN0IFtjaGVja2JveFZhbHMsIHNldENoZWNrYm94U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIHNtb2tpbmc6IGZhbHNlLFxuICAgIGRpYWJldGVzOiBmYWxzZSxcbiAgICB0cmVhdG1lbnQ6IGZhbHNlLFxuICB9KTtcbiAgY29uc3QgaGFuZGxlQ2hlY2tib3hDaGFuZ2UgPSBuYW1lID0+IGV2ZW50ID0+IHtcbiAgICBzZXRDaGVja2JveFN0YXRlKHsgLi4uY2hlY2tib3hWYWxzLCBbbmFtZV06IGV2ZW50LnRhcmdldC5jaGVja2VkIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlU3VibWl0dGVkRGF0YShkYXRhKSB7XG4gICAgbGV0IGZhaWxlZFZhbCA9IHtcbiAgICAgIGdlbmRlcjogZmFsc2UsXG4gICAgICBhZ2U6IGZhbHNlLFxuICAgICAgaGRsOiBmYWxzZSxcbiAgICAgIGxkbDogZmFsc2UsXG4gICAgICB0b3RhbGRsOiBmYWxzZSxcbiAgICAgIHRhOiBmYWxzZSxcbiAgICAgIHd0OiBmYWxzZSAgXG4gICAgfVxuICAgIGlmKCFkYXRhLmdlbmRlcikge2ZhaWxlZFZhbC5nZW5kZXIgPSB0cnVlfVxuICAgIGlmKCFkYXRhLmFnZSkge2ZhaWxlZFZhbC5hZ2UgPSB0cnVlfVxuICAgIGlmKCFkYXRhLmhkbCkge2ZhaWxlZFZhbC5oZGwgPSB0cnVlfVxuICAgIGlmKCFkYXRhLmxkbCkge2ZhaWxlZFZhbC5sZGwgPSB0cnVlfVxuICAgIGlmKCFkYXRhLnRvdGFsZGwpIHtmYWlsZWRWYWwudG90YWxkbCA9IHRydWV9XG4gICAgaWYoIWRhdGEudGEpIHtmYWlsZWRWYWwudGEgPSB0cnVlfVxuICAgIGlmKCFkYXRhLnd0KSB7ZmFpbGVkVmFsLnd0ID0gdHJ1ZX1cblxuICAgIGlmKCFkYXRhLmdlbmRlciB8fCAhZGF0YS5hZ2UgfHwgIWRhdGEuaGRsIHx8ICFkYXRhLmxkbCB8fCAhZGF0YS50b3RhbGRsIHx8ICFkYXRhLnRhIHx8ICFkYXRhLnd0KSB7XG4gICAgICBzZXRFcnJvcnMoey4uLmZhaWxlZFZhbH0pXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9IGVsc2UgaWYgKGRhdGEuZGlhYmV0ZXMgPT0gdW5kZWZpbmVkIHx8IGRhdGEuc21va2luZyA9PSB1bmRlZmluZWQgfHwgZGF0YS50cmVhdG1lbnQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhbGVydCgnPz8/JylcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIGZ1bmN0aW9uIHJlc2V0QnV0dG9uSGFuZGxlcigpIHtcbiAgICAgIHNldFJhZGlvVmFsKCcnKTtcbiAgICAgIHNldFNlbGVjdHNWYWxzKHsgfSk7XG4gICAgICBzZXRDaGVja2JveFN0YXRlKHsgLi4uY2hlY2tib3hWYWxzLCBzbW9raW5nOiBmYWxzZSwgZGlhYmV0ZXM6IGZhbHNlLCB0cmVhdG1lbnQ6IGZhbHNlIH0pO1xuICAgICAgc2V0RXJyb3JzKHtcbiAgICAgICAgZ2VuZGVyOiBmYWxzZSxcbiAgICAgICAgYWdlOiBmYWxzZSxcbiAgICAgICAgaGRsOiBmYWxzZSxcbiAgICAgICAgbGRsOiBmYWxzZSxcbiAgICAgICAgdG90YWxkOiBmYWxzZSxcbiAgICAgICAgdGE6IGZhbHNlLFxuICAgICAgICB3dDogZmFsc2UgIFxuICAgICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbGNCdXR0b25IYW5kbGVyKCl7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGdlbmRlcjogcmFkaW9WYWwsXG4gICAgICBhZ2U6IHNlbGVjdHNWYWxzLmFnZSxcbiAgICAgIGhkbDogc2VsZWN0c1ZhbHMuaGRsLFxuICAgICAgbGRsOiBzZWxlY3RzVmFscy5sZGwsXG4gICAgICB0b3RhbGRsOiBzZWxlY3RzVmFscy50b3RhbGRsLFxuICAgICAgdGE6IHNlbGVjdHNWYWxzLnRhLFxuICAgICAgd3Q6IHNlbGVjdHNWYWxzLnd0LFxuICAgICAgZGlhYmV0ZXM6IGNoZWNrYm94VmFscy5kaWFiZXRlcyxcbiAgICAgIHNtb2tpbmc6IGNoZWNrYm94VmFscy5zbW9raW5nLFxuICAgICAgdHJlYXRtZW50OiBjaGVja2JveFZhbHMuaHlwZXJ0ZW5zaW9uX2luX3RyZWF0bWVudFxuICAgIH1cbiAgICBpZih2YWxpZGF0ZVN1Ym1pdHRlZERhdGEoZGF0YSkpIHsgcHJvcHMuZGF0YXN1Ym1pdHRlZEhhbmRsZXIoZGF0YSkgfVxuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8Zm9ybSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cbiAgICAgIFxuICAgICAgPEZvcm1Db250cm9sIGNvbXBvbmVudD1cImZpZWxkc2V0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfSBlcnJvcj17ZXJyb3JzLmdlbmRlcn0gPlxuICAgICAgICA8Rm9ybUxhYmVsIGNvbXBvbmVudD1cImxlZ2VuZFwiPnt0cmFuc2xhdGlvbnMuZ2VuZGVyfTwvRm9ybUxhYmVsPlxuICAgICAgICA8UmFkaW9Hcm91cCBhcmlhLWxhYmVsPVwiZ2VuZGVyXCIgbmFtZT1cImdlbmRlclwiIHZhbHVlPXtyYWRpb1ZhbH0gb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZVJhZGlvQ2hhbmdlKGV2ZW50KX0gcm93PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtlcnJvcnMuZ2VuZGVyID8gJ2Vycm9yJyA6ICcnfT5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cImZlbWFsZVwiIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9e3RyYW5zbGF0aW9ucy53b21hbn0gLz5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cIm1hbGVcIiBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPXt0cmFuc2xhdGlvbnMubWFufSAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvUmFkaW9Hcm91cD5cbiAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICB7c2VsZWN0cy5tYXAoc2VsZWN0ID0+XG4gICAgICAgIDw+XG4gICAgICAgICAgPEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0gZXJyb3I9e2Vycm9yc1tzZWxlY3QubmFtZV19PlxuICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj17c2VsZWN0Lm5hbWV9Pnt0cmFuc2xhdGlvbnNbc2VsZWN0LmxhYmVsXX08L0lucHV0TGFiZWw+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RzVmFsc1tzZWxlY3QubmFtZV19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3RDaGFuZ2V9XG4gICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICBuYW1lOiBzZWxlY3QubmFtZSxcbiAgICAgICAgICAgICAgICBpZDogc2VsZWN0Lm5hbWUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG5cbiAgICAgICAgICAgIHtzZWxlY3QubmFtZSAhPT0gJ3d0JyAmJiBzZWxlY3QudmFsdWVzLm1hcCh2YWwgPT4gXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17dmFsfT57dmFsfTwvTWVudUl0ZW0+XG4gICAgICAgICAgICApfVxuXG5cbiAgICAgICAgICAgIHsoc2VsZWN0Lm5hbWUgPT0gJ3d0JyAmJiAhcmFkaW9WYWwpICYmIFxuICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9Jyc+R2VuZGVyIHJlcXVpcmVkPC9NZW51SXRlbT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHsoc2VsZWN0Lm5hbWUgPT0gJ3d0JyAmJiByYWRpb1ZhbCkgJiYgc2VsZWN0LnZhbHVlc1tyYWRpb1ZhbF0ubWFwKHZhbCA9PiBcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXt2YWx9Pnt2YWx9PC9NZW51SXRlbT5cbiAgICAgICAgICAgICl9XG5cblxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICB7c2VsZWN0LmhlbHBlciAmJiA8Rm9ybUhlbHBlclRleHQ+e3NlbGVjdC5oZWxwZXJ9PC9Gb3JtSGVscGVyVGV4dD59XG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICBcbiAgICAgICAgICB7KHNlbGVjdC5uYW1lID09PSAnYWdlJyB8fCBzZWxlY3QubmFtZSA9PT0gJ3RvdGFsZGwnIHx8IHNlbGVjdC5uYW1lID09PSAnd3QnKSAmJiA8YnIgY2xhc3NOYW1lPVwiZGVza3RvcE9ubHlcIi8+fVxuICAgICAgICA8Lz5cbiAgICAgICl9XG5cbiAgICAgIDxGb3JtR3JvdXAgcm93IGNsYXNzTmFtZT1cImNoZWNrYm94ZXNcIj5cbiAgICAgIHtjaGVja2JveGVzLm1hcChjaGVja2JveCA9PlxuICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgPENoZWNrYm94IG9uQ2hhbmdlPXtoYW5kbGVDaGVja2JveENoYW5nZShjaGVja2JveC5jaGVja2JveEtleSl9IGNoZWNrZWQ9e2NoZWNrYm94VmFsc1tjaGVja2JveC5jaGVja2JveEtleV19IC8+XG4gICAgICAgICAgfVxuICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGlvbnNbY2hlY2tib3guY2hlY2tib3hLZXldfVxuICAgICAgICAvPil9XG4gICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgIDxiciAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1idXR0b25zXCI+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17cmVzZXRCdXR0b25IYW5kbGVyfSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMucmVzZXRCdXR0b259ID5cbiAgICAgICAgICA8RGVsZXRlSWNvbiAvPlxuICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICB7KHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5pbm5lcldpZHRoIDwgMTIwMCAmJlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2NhbGNCdXR0b25IYW5kbGVyfSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnJlc2V0QnV0dG9ufT5cbiAgICAgICAgQ2FsY3VsYXRlIDxTZW5kSWNvbiAvPlxuICAgICAgICA8L0J1dHRvbj4pfVxuXG4gICAgICAgIHsodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmlubmVyV2lkdGggPiAxMTk5ICYmXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17Y2FsY0J1dHRvbkhhbmRsZXJ9IHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMuY2FsY0J1dHRvbn0+XG4gICAgICAgIENhbGN1bGF0ZSA8U2VuZEljb24gLz5cbiAgICAgICAgICA8L0J1dHRvbj4pfVxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jaGVja2JveGVzIHtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfTtcbiAgICAgIC5mb3JtYnV0dG9ucyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgfVxuXG4gICAgICAuZXJyb3Ige1xuICAgICAgICBjb2xvcjogI2ZmMTc0NDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCl7XG4gICAgICAgIC5tb2JpbGVPbmx5IHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC5kZXNrdG9wT25seSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBmb3JtIHtcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm0gZGl2IHtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGVja2JveGVzIHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtYnV0dG9ucyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OTkpIHtcbiAgICAgICAgLmNoZWNrYm94ZXMge1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59Il19 */\n/*@ sourceURL=/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/src/Form/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.f020cda4715e29672e93.hot-update.js.map