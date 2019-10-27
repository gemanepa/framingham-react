webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/Navbar/index.js":
/*!*****************************!*\
  !*** ./src/Navbar/index.js ***!
  \*****************************/
/*! exports provided: CustomizedMenus, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizedMenus", function() { return CustomizedMenus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavBar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Link_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Link.js */ "./src/Link.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _static_logos_applogo_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../static/logos/applogo.png */ "./static/logos/applogo.png");
/* harmony import */ var _static_logos_applogo_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_static_logos_applogo_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _static_flags_en_flag_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../static/flags/en-flag.png */ "./static/flags/en-flag.png");
/* harmony import */ var _static_flags_en_flag_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_static_flags_en_flag_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _static_flags_es_flag_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../static/flags/es-flag.png */ "./static/flags/es-flag.png");
/* harmony import */ var _static_flags_es_flag_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_static_flags_es_flag_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _static_logos_fhslogo_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../static/logos/fhslogo.png */ "./static/logos/fhslogo.png");
/* harmony import */ var _static_logos_fhslogo_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_static_logos_fhslogo_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _static_logos_nihlogo_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../../static/logos/nihlogo.png */ "./static/logos/nihlogo.png");
/* harmony import */ var _static_logos_nihlogo_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_static_logos_nihlogo_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _static_logos_wikipedialogo3_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../../static/logos/wikipedialogo3.png */ "./static/logos/wikipedialogo3.png");
/* harmony import */ var _static_logos_wikipedialogo3_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_static_logos_wikipedialogo3_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _static_responsive_helpers_languages_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../../static/responsive-helpers/languages.png */ "./static/responsive-helpers/languages.png");
/* harmony import */ var _static_responsive_helpers_languages_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_static_responsive_helpers_languages_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "./node_modules/@material-ui/icons/MoveToInbox.js");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_icons_Drafts__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/icons/Drafts */ "./node_modules/@material-ui/icons/Drafts.js");
/* harmony import */ var _material_ui_icons_Drafts__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Drafts__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/icons/Send */ "./node_modules/@material-ui/icons/Send.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_25__);



var _jsxFileName = "/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/src/Navbar/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;






















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    langmenuButton: {
      margin: 0,
      padding: 0
    }
  };
});
var StyledMenu = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])({
  paper: {
    border: '1px solid #d3d4d5'
  }
})(function (props) {
  return __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_19__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    elevation: 0,
    getContentAnchorEl: null,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    }
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }));
});
var StyledMenuItem = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(function (theme) {
  return {
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white
        }
      }
    }
  };
})(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_20__["default"]);
function CustomizedMenus() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  return __jsx("div", {
    className: "jsx-1066527458",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    "aria-controls": "customized-menu",
    "aria-haspopup": "true",
    variant: "contained",
    color: "primary",
    onClick: handleClick,
    className: classes.langmenuButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("img", {
    src: _static_responsive_helpers_languages_png__WEBPACK_IMPORTED_MODULE_18___default.a,
    alt: "",
    className: "jsx-1066527458" + " " + "langmenuimg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  })), __jsx(StyledMenu, {
    id: "customized-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(_Link_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "/?lang=en",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(StyledMenuItem, {
    onClick: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_21__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("img", {
    src: _static_flags_en_flag_png__WEBPACK_IMPORTED_MODULE_13___default.a,
    alt: "",
    className: "jsx-1066527458" + " " + "navflagsimgs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_22__["default"], {
    primary: "English",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }))), __jsx(_Link_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "/?lang=es",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(StyledMenuItem, {
    onClick: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_21__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("img", {
    src: _static_flags_es_flag_png__WEBPACK_IMPORTED_MODULE_14___default.a,
    alt: "",
    className: "jsx-1066527458" + " " + "navflagsimgs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_22__["default"], {
    primary: "Espa\xF1ol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1066527458",
    __self: this
  }, ".langmenuimg.jsx-1066527458:hover{-webkit-filter:brightness(120%);filter:brightness(120%);}@media (max-width:1199px){.langmenuimg.jsx-1066527458{height:50px;width:auto;}.navflagsimgs.jsx-1066527458{height:40px;width:auto;}}@media (min-width:1200px){.langmenuimg.jsx-1066527458{height:7.6vh;min-height:50px;width:auto;}.navflagsimgs.jsx-1066527458{height:5.5vh;min-height:35px;margin-top:-0.5vh;width:auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlbWFuZXBhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm95ZWN0b3MvUmVhY3QvZnJhbWluZ2hhbS1yZWFjdC1wd2Evc3JjL05hdmJhci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEySGtCLEFBS21DLEFBS1YsQUFJQSxBQU1DLEFBS0EsWUFkRixBQUlBLENBTUssQUFLQSxVQWRsQixBQUlBLE1BTWEsQUFLTyxXQUpwQixPQUthLFNBdEJmLEVBdUJFIiwiZmlsZSI6Ii9ob21lL2dlbWFuZXBhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm95ZWN0b3MvUmVhY3QvZnJhbWluZ2hhbS1yZWFjdC1wd2Evc3JjL05hdmJhci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBMaW5rIGZyb20gJy4uL0xpbmsuanMnO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IGFwcGxvZ28gZnJvbSAnLi8uLi8uLi9zdGF0aWMvbG9nb3MvYXBwbG9nby5wbmcnO1xuaW1wb3J0IGVuRmxhZyBmcm9tICcuLy4uLy4uL3N0YXRpYy9mbGFncy9lbi1mbGFnLnBuZyc7XG5pbXBvcnQgZXNGbGFnIGZyb20gJy4vLi4vLi4vc3RhdGljL2ZsYWdzL2VzLWZsYWcucG5nJztcbmltcG9ydCBmaHNMb2dvIGZyb20gJy4vLi4vLi4vc3RhdGljL2xvZ29zL2Zoc2xvZ28ucG5nJztcbmltcG9ydCBuaWhMb2dvIGZyb20gJy4vLi4vLi4vc3RhdGljL2xvZ29zL25paGxvZ28ucG5nJztcbmltcG9ydCB3aWtpcGVkaWFMb2dvIGZyb20gJy4vLi4vLi4vc3RhdGljL2xvZ29zL3dpa2lwZWRpYWxvZ28zLnBuZyc7XG5pbXBvcnQgbGFuZ3VhZ2VSZXNwb25zZUhlbHBlciBmcm9tICcuLy4uLy4uL3N0YXRpYy9yZXNwb25zaXZlLWhlbHBlcnMvbGFuZ3VhZ2VzLnBuZydcblxuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudSc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb24nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IEluYm94SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW92ZVRvSW5ib3gnO1xuaW1wb3J0IERyYWZ0c0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RyYWZ0cyc7XG5pbXBvcnQgU2VuZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlbmQnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgfSxcbiAgbWVudUJ1dHRvbjoge1xuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZsZXhHcm93OiAxLFxuICB9LFxuICBsYW5nbWVudUJ1dHRvbjoge1xuICAgIG1hcmdpbjogMCxcbiAgICBwYWRkaW5nOiAwXG4gIH1cbn0pKTtcblxuY29uc3QgU3R5bGVkTWVudSA9IHdpdGhTdHlsZXMoe1xuICBwYXBlcjoge1xuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZDNkNGQ1JyxcbiAgfSxcbn0pKHByb3BzID0+IChcbiAgPE1lbnVcbiAgICBlbGV2YXRpb249ezB9XG4gICAgZ2V0Q29udGVudEFuY2hvckVsPXtudWxsfVxuICAgIGFuY2hvck9yaWdpbj17e1xuICAgICAgdmVydGljYWw6ICdib3R0b20nLFxuICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcicsXG4gICAgfX1cbiAgICB0cmFuc2Zvcm1PcmlnaW49e3tcbiAgICAgIHZlcnRpY2FsOiAndG9wJyxcbiAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5cbmNvbnN0IFN0eWxlZE1lbnVJdGVtID0gd2l0aFN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgJyY6Zm9jdXMnOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgICAgJyYgLk11aUxpc3RJdGVtSWNvbi1yb290LCAmIC5NdWlMaXN0SXRlbVRleHQtcHJpbWFyeSc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSkpKE1lbnVJdGVtKTtcblxuZXhwb3J0IGZ1bmN0aW9uIEN1c3RvbWl6ZWRNZW51cygpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gZXZlbnQgPT4ge1xuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHNldEFuY2hvckVsKG51bGwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIFxuICAgICAgPEJ1dHRvbiBcbiAgICAgICAgYXJpYS1jb250cm9scz1cImN1c3RvbWl6ZWQtbWVudVwiXG4gICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGFuZ21lbnVCdXR0b259PlxuICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgc3JjPXtsYW5ndWFnZVJlc3BvbnNlSGVscGVyfVxuICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwibGFuZ21lbnVpbWdcIlxuICAgICAgICAgIC8+XG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxTdHlsZWRNZW51XG4gICAgICAgIGlkPVwiY3VzdG9taXplZC1tZW51XCJcbiAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxuICAgICAgICBrZWVwTW91bnRlZFxuICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICA+XG4gICAgICAgIDxMaW5rIGhyZWY9Jy8/bGFuZz1lbicgY29sb3I9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICA8U3R5bGVkTWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2VuRmxhZ30gYWx0PVwiXCIgY2xhc3NOYW1lPVwibmF2ZmxhZ3NpbWdzXCIgLz5cbiAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRW5nbGlzaFwiIC8+XG4gICAgICAgICAgPC9TdHlsZWRNZW51SXRlbT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPScvP2xhbmc9ZXMnIGNvbG9yPVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgPFN0eWxlZE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtlc0ZsYWd9IGFsdD1cIlwiIGNsYXNzTmFtZT1cIm5hdmZsYWdzaW1nc1wiIC8+XG4gICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkVzcGHDsW9sXCIgLz5cbiAgICAgICAgICA8L1N0eWxlZE1lbnVJdGVtPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L1N0eWxlZE1lbnU+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgXG5cbiAgICAgICAgLmxhbmdtZW51aW1nOmhvdmVyIHtcbiAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTIwJSk7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgICAgLmxhbmdtZW51aW1nIHtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2ZmxhZ3NpbWdzIHtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgICAgLmxhbmdtZW51aW1nIHtcbiAgICAgICAgICAgIGhlaWdodDogNy42dmg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXZmbGFnc2ltZ3Mge1xuICAgICAgICAgICAgaGVpZ2h0OiA1LjV2aDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMC41dmg7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuXG5mdW5jdGlvbiBNb2JpbGVCYXIoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEN1c3RvbWl6ZWRNZW51cyAvPlxuXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IC8+XG5cbiAgICAgIDxpbWcgc3JjPXthcHBsb2dvfSBhbHQ9XCJDUiBGcmFtaW5naGFtXCIgY2xhc3NOYW1lPVwibmF2bG9nb1wiIC8+XG5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZleHRlcm5hbGxpbmtzXCI+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mcmFtaW5naGFtaGVhcnRzdHVkeS5vcmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRpdGxlPVwiRnJhbWluZ2hhbSBIZWFydCBTdHVkeVwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtmaHNMb2dvfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5uaGxiaS5uaWguZ292L3NjaWVuY2UvZnJhbWluZ2hhbS1oZWFydC1zdHVkeS1maHMvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRpdGxlPVwiTmF0aW9uYWwgSW5zdGl0dXRlcyBvZiBIZWFsdGhcIj5cbiAgICAgICAgICA8aW1nIHNyYz17bmloTG9nb30gYWx0PVwiXCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRnJhbWluZ2hhbV9IZWFydF9TdHVkeVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0aXRsZT1cIldpa2lwZWRpYVwiPlxuICAgICAgICAgIDxpbWcgc3JjPXt3aWtpcGVkaWFMb2dvfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAgIC5uYXZsb2dvIHtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgICAgLm5hdmxvZ28ge1xuICAgICAgICAgICAgaGVpZ2h0OiA3LjZ2aDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm5hdmxvZ286aG92ZXIsIC5uYXZleHRlcm5hbGxpbmtzIGEgaW1nOmhvdmVyIHtcbiAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTEwJSk7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2ZmxhZ3NsaW5rcywgLm5hdmV4dGVybmFsbGlua3MgYTpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjV2dztcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZmbGFnc2xpbmtzLCAubmF2ZXh0ZXJuYWxsaW5rcyBhOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2ZXh0ZXJuYWxsaW5rcyBhOmZpcnN0LWNoaWxkIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmV4dGVybmFsbGlua3MgYTpudGgtY2hpbGQoMikgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmV4dGVybmFsbGlua3MgYTpudGgtY2hpbGQoMykgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDMxcHg7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cblxuZnVuY3Rpb24gRGVza3RvcEJhcigpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGluayBocmVmPScvP2xhbmc9ZW4nIHRpdGxlPVwiZW5cIiBjb2xvcj1cInNlY29uZGFyeVwiIHRpdGxlPVwiRW5nbGlzaFwiPlxuICAgICAgICA8aW1nIHNyYz17ZW5GbGFnfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJuYXZmbGFnc2ltZ3NcIiAvPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmZsYWdzbGlua3NcIj5cbiAgICAgICAgPExpbmsgaHJlZj0nLz9sYW5nPWVzJyB0aXRsZT1cImVzXCIgY29sb3I9XCJzZWNvbmRhcnlcIiB0aXRsZT1cIkVzcGHDsW9sXCI+XG4gICAgICAgICAgPGltZyBzcmM9e2VzRmxhZ30gYWx0PVwiXCIgY2xhc3NOYW1lPVwibmF2ZmxhZ3NpbWdzXCIgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gLz5cblxuICAgICAgPGltZyBzcmM9e2FwcGxvZ299IGFsdD1cIkNSIEZyYW1pbmdoYW1cIiBjbGFzc05hbWU9XCJuYXZsb2dvXCIgLz5cblxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmV4dGVybmFsbGlua3NcIj5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZyYW1pbmdoYW1oZWFydHN0dWR5Lm9yZy9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGl0bGU9XCJGcmFtaW5naGFtIEhlYXJ0IFN0dWR5XCI+XG4gICAgICAgICAgPGltZyBzcmM9e2Zoc0xvZ299IGFsdD1cIlwiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5obGJpLm5paC5nb3Yvc2NpZW5jZS9mcmFtaW5naGFtLWhlYXJ0LXN0dWR5LWZocy9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGl0bGU9XCJOYXRpb25hbCBJbnN0aXR1dGVzIG9mIEhlYWx0aFwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtuaWhMb2dvfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9GcmFtaW5naGFtX0hlYXJ0X1N0dWR5XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRpdGxlPVwiV2lraXBlZGlhXCI+XG4gICAgICAgICAgPGltZyBzcmM9e3dpa2lwZWRpYUxvZ299IGFsdD1cIlwiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubmF2bG9nbyB7XG4gICAgICAgICAgaGVpZ2h0OiA3LjZ2aDtcbiAgICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5uYXZsb2dvOmhvdmVyLCAubmF2ZXh0ZXJuYWxsaW5rcyBhIGltZzpob3ZlciB7XG4gICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDExMCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmZsYWdzbGlua3MsIC5uYXZleHRlcm5hbGxpbmtzIGE6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41dnc7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2ZmxhZ3NsaW5rcywgLm5hdmV4dGVybmFsbGlua3MgYTpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNHZ3O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMC40dnc7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2ZXh0ZXJuYWxsaW5rcyBhOmZpcnN0LWNoaWxkIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmV4dGVybmFsbGlua3MgYTpudGgtY2hpbGQoMikgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmV4dGVybmFsbGlua3MgYTpudGgtY2hpbGQoMykgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDMxcHg7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2QmFyKHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCI+XG4gICAgICAgIDxUb29sYmFyIGNsYXNzTmFtZT1cInRvb2xiYXJcIj5cbiAgICAgICAgICA8TW9iaWxlQmFyIC8+XG4gICAgICAgIDwvVG9vbGJhcj5cbiAgICAgIDwvQXBwQmFyPlxuICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufSJdfQ== */\n/*@ sourceURL=/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/src/Navbar/index.js */"));
}

function MobileBar() {
  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(CustomizedMenus, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h6",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }), __jsx("img", {
    src: _static_logos_applogo_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "CR Framingham",
    className: "jsx-3310194368" + " " + "navlogo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h6",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3310194368" + " " + "navexternallinks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.framinghamheartstudy.org/",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Framingham Heart Study",
    className: "jsx-3310194368",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, __jsx("img", {
    src: _static_logos_fhslogo_png__WEBPACK_IMPORTED_MODULE_15___default.a,
    alt: "",
    className: "jsx-3310194368",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  })), __jsx("a", {
    href: "https://www.nhlbi.nih.gov/science/framingham-heart-study-fhs/",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "National Institutes of Health",
    className: "jsx-3310194368",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, __jsx("img", {
    src: _static_logos_nihlogo_png__WEBPACK_IMPORTED_MODULE_16___default.a,
    alt: "",
    className: "jsx-3310194368",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  })), __jsx("a", {
    href: "https://en.wikipedia.org/wiki/Framingham_Heart_Study",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Wikipedia",
    className: "jsx-3310194368",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, __jsx("img", {
    src: _static_logos_wikipedialogo3_png__WEBPACK_IMPORTED_MODULE_17___default.a,
    alt: "",
    className: "jsx-3310194368",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3310194368",
    __self: this
  }, "@media (max-width:1199px){.navlogo.jsx-3310194368{height:50px;width:auto;}}@media (min-width:1200px){.navlogo.jsx-3310194368{height:7.6vh;min-height:50px;width:auto;}}.navlogo.jsx-3310194368:hover,.navexternallinks.jsx-3310194368 a.jsx-3310194368 img.jsx-3310194368:hover{-webkit-filter:brightness(110%);filter:brightness(110%);}.navflagslinks.jsx-3310194368,.navexternallinks.jsx-3310194368 a.jsx-3310194368:first-child{margin-right:0.5vw;}.navflagslinks.jsx-3310194368,.navexternallinks.jsx-3310194368 a.jsx-3310194368:not(:first-child){margin-left:10px;margin-right:10px;}.navexternallinks.jsx-3310194368 a.jsx-3310194368:first-child img.jsx-3310194368{height:40px;width:auto;}.navexternallinks.jsx-3310194368 a.jsx-3310194368:nth-child(2) img.jsx-3310194368{height:30px;width:auto;margin-bottom:5px;}.navexternallinks.jsx-3310194368 a.jsx-3310194368:nth-child(3) img.jsx-3310194368{height:31px;width:auto;margin-bottom:3px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlbWFuZXBhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm95ZWN0b3MvUmVhY3QvZnJhbWluZ2hhbS1yZWFjdC1wd2Evc3JjL05hdmJhci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5TGtCLEFBSXlCLEFBTUMsQUFNUyxBQUlMLEFBSUYsQUFLTCxBQUtBLEFBTUEsWUFuQ0MsQUF5QkYsQUFLQSxBQU1BLENBOUJPLElBY0EsRUFKcEIsSUFmRSxBQXlCRixBQUtvQixBQU1BLE1BOUJMLE1BY2YsS0FiRSxDQXdCRixBQU1BLGVBMUJBIiwiZmlsZSI6Ii9ob21lL2dlbWFuZXBhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm95ZWN0b3MvUmVhY3QvZnJhbWluZ2hhbS1yZWFjdC1wd2Evc3JjL05hdmJhci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBMaW5rIGZyb20gJy4uL0xpbmsuanMnO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IGFwcGxvZ28gZnJvbSAnLi8uLi8uLi9zdGF0aWMvbG9nb3MvYXBwbG9nby5wbmcnO1xuaW1wb3J0IGVuRmxhZyBmcm9tICcuLy4uLy4uL3N0YXRpYy9mbGFncy9lbi1mbGFnLnBuZyc7XG5pbXBvcnQgZXNGbGFnIGZyb20gJy4vLi4vLi4vc3RhdGljL2ZsYWdzL2VzLWZsYWcucG5nJztcbmltcG9ydCBmaHNMb2dvIGZyb20gJy4vLi4vLi4vc3RhdGljL2xvZ29zL2Zoc2xvZ28ucG5nJztcbmltcG9ydCBuaWhMb2dvIGZyb20gJy4vLi4vLi4vc3RhdGljL2xvZ29zL25paGxvZ28ucG5nJztcbmltcG9ydCB3aWtpcGVkaWFMb2dvIGZyb20gJy4vLi4vLi4vc3RhdGljL2xvZ29zL3dpa2lwZWRpYWxvZ28zLnBuZyc7XG5pbXBvcnQgbGFuZ3VhZ2VSZXNwb25zZUhlbHBlciBmcm9tICcuLy4uLy4uL3N0YXRpYy9yZXNwb25zaXZlLWhlbHBlcnMvbGFuZ3VhZ2VzLnBuZydcblxuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudSc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb24nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IEluYm94SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW92ZVRvSW5ib3gnO1xuaW1wb3J0IERyYWZ0c0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RyYWZ0cyc7XG5pbXBvcnQgU2VuZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlbmQnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgfSxcbiAgbWVudUJ1dHRvbjoge1xuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZsZXhHcm93OiAxLFxuICB9LFxuICBsYW5nbWVudUJ1dHRvbjoge1xuICAgIG1hcmdpbjogMCxcbiAgICBwYWRkaW5nOiAwXG4gIH1cbn0pKTtcblxuY29uc3QgU3R5bGVkTWVudSA9IHdpdGhTdHlsZXMoe1xuICBwYXBlcjoge1xuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZDNkNGQ1JyxcbiAgfSxcbn0pKHByb3BzID0+IChcbiAgPE1lbnVcbiAgICBlbGV2YXRpb249ezB9XG4gICAgZ2V0Q29udGVudEFuY2hvckVsPXtudWxsfVxuICAgIGFuY2hvck9yaWdpbj17e1xuICAgICAgdmVydGljYWw6ICdib3R0b20nLFxuICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcicsXG4gICAgfX1cbiAgICB0cmFuc2Zvcm1PcmlnaW49e3tcbiAgICAgIHZlcnRpY2FsOiAndG9wJyxcbiAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5cbmNvbnN0IFN0eWxlZE1lbnVJdGVtID0gd2l0aFN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgJyY6Zm9jdXMnOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgICAgJyYgLk11aUxpc3RJdGVtSWNvbi1yb290LCAmIC5NdWlMaXN0SXRlbVRleHQtcHJpbWFyeSc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSkpKE1lbnVJdGVtKTtcblxuZXhwb3J0IGZ1bmN0aW9uIEN1c3RvbWl6ZWRNZW51cygpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gZXZlbnQgPT4ge1xuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHNldEFuY2hvckVsKG51bGwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIFxuICAgICAgPEJ1dHRvbiBcbiAgICAgICAgYXJpYS1jb250cm9scz1cImN1c3RvbWl6ZWQtbWVudVwiXG4gICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGFuZ21lbnVCdXR0b259PlxuICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgc3JjPXtsYW5ndWFnZVJlc3BvbnNlSGVscGVyfVxuICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwibGFuZ21lbnVpbWdcIlxuICAgICAgICAgIC8+XG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxTdHlsZWRNZW51XG4gICAgICAgIGlkPVwiY3VzdG9taXplZC1tZW51XCJcbiAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxuICAgICAgICBrZWVwTW91bnRlZFxuICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICA+XG4gICAgICAgIDxMaW5rIGhyZWY9Jy8/bGFuZz1lbicgY29sb3I9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICA8U3R5bGVkTWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2VuRmxhZ30gYWx0PVwiXCIgY2xhc3NOYW1lPVwibmF2ZmxhZ3NpbWdzXCIgLz5cbiAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRW5nbGlzaFwiIC8+XG4gICAgICAgICAgPC9TdHlsZWRNZW51SXRlbT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPScvP2xhbmc9ZXMnIGNvbG9yPVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgPFN0eWxlZE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtlc0ZsYWd9IGFsdD1cIlwiIGNsYXNzTmFtZT1cIm5hdmZsYWdzaW1nc1wiIC8+XG4gICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkVzcGHDsW9sXCIgLz5cbiAgICAgICAgICA8L1N0eWxlZE1lbnVJdGVtPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L1N0eWxlZE1lbnU+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgXG5cbiAgICAgICAgLmxhbmdtZW51aW1nOmhvdmVyIHtcbiAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTIwJSk7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgICAgLmxhbmdtZW51aW1nIHtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2ZmxhZ3NpbWdzIHtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgICAgLmxhbmdtZW51aW1nIHtcbiAgICAgICAgICAgIGhlaWdodDogNy42dmg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXZmbGFnc2ltZ3Mge1xuICAgICAgICAgICAgaGVpZ2h0OiA1LjV2aDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMC41dmg7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuXG5mdW5jdGlvbiBNb2JpbGVCYXIoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEN1c3RvbWl6ZWRNZW51cyAvPlxuXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IC8+XG5cbiAgICAgIDxpbWcgc3JjPXthcHBsb2dvfSBhbHQ9XCJDUiBGcmFtaW5naGFtXCIgY2xhc3NOYW1lPVwibmF2bG9nb1wiIC8+XG5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZleHRlcm5hbGxpbmtzXCI+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mcmFtaW5naGFtaGVhcnRzdHVkeS5vcmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRpdGxlPVwiRnJhbWluZ2hhbSBIZWFydCBTdHVkeVwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtmaHNMb2dvfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5uaGxiaS5uaWguZ292L3NjaWVuY2UvZnJhbWluZ2hhbS1oZWFydC1zdHVkeS1maHMvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRpdGxlPVwiTmF0aW9uYWwgSW5zdGl0dXRlcyBvZiBIZWFsdGhcIj5cbiAgICAgICAgICA8aW1nIHNyYz17bmloTG9nb30gYWx0PVwiXCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRnJhbWluZ2hhbV9IZWFydF9TdHVkeVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0aXRsZT1cIldpa2lwZWRpYVwiPlxuICAgICAgICAgIDxpbWcgc3JjPXt3aWtpcGVkaWFMb2dvfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAgIC5uYXZsb2dvIHtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgICAgLm5hdmxvZ28ge1xuICAgICAgICAgICAgaGVpZ2h0OiA3LjZ2aDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm5hdmxvZ286aG92ZXIsIC5uYXZleHRlcm5hbGxpbmtzIGEgaW1nOmhvdmVyIHtcbiAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTEwJSk7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2ZmxhZ3NsaW5rcywgLm5hdmV4dGVybmFsbGlua3MgYTpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjV2dztcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZmbGFnc2xpbmtzLCAubmF2ZXh0ZXJuYWxsaW5rcyBhOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2ZXh0ZXJuYWxsaW5rcyBhOmZpcnN0LWNoaWxkIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmV4dGVybmFsbGlua3MgYTpudGgtY2hpbGQoMikgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmV4dGVybmFsbGlua3MgYTpudGgtY2hpbGQoMykgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDMxcHg7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cblxuZnVuY3Rpb24gRGVza3RvcEJhcigpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGluayBocmVmPScvP2xhbmc9ZW4nIHRpdGxlPVwiZW5cIiBjb2xvcj1cInNlY29uZGFyeVwiIHRpdGxlPVwiRW5nbGlzaFwiPlxuICAgICAgICA8aW1nIHNyYz17ZW5GbGFnfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJuYXZmbGFnc2ltZ3NcIiAvPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmZsYWdzbGlua3NcIj5cbiAgICAgICAgPExpbmsgaHJlZj0nLz9sYW5nPWVzJyB0aXRsZT1cImVzXCIgY29sb3I9XCJzZWNvbmRhcnlcIiB0aXRsZT1cIkVzcGHDsW9sXCI+XG4gICAgICAgICAgPGltZyBzcmM9e2VzRmxhZ30gYWx0PVwiXCIgY2xhc3NOYW1lPVwibmF2ZmxhZ3NpbWdzXCIgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gLz5cblxuICAgICAgPGltZyBzcmM9e2FwcGxvZ299IGFsdD1cIkNSIEZyYW1pbmdoYW1cIiBjbGFzc05hbWU9XCJuYXZsb2dvXCIgLz5cblxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmV4dGVybmFsbGlua3NcIj5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZyYW1pbmdoYW1oZWFydHN0dWR5Lm9yZy9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGl0bGU9XCJGcmFtaW5naGFtIEhlYXJ0IFN0dWR5XCI+XG4gICAgICAgICAgPGltZyBzcmM9e2Zoc0xvZ299IGFsdD1cIlwiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5obGJpLm5paC5nb3Yvc2NpZW5jZS9mcmFtaW5naGFtLWhlYXJ0LXN0dWR5LWZocy9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGl0bGU9XCJOYXRpb25hbCBJbnN0aXR1dGVzIG9mIEhlYWx0aFwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtuaWhMb2dvfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9GcmFtaW5naGFtX0hlYXJ0X1N0dWR5XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRpdGxlPVwiV2lraXBlZGlhXCI+XG4gICAgICAgICAgPGltZyBzcmM9e3dpa2lwZWRpYUxvZ299IGFsdD1cIlwiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubmF2bG9nbyB7XG4gICAgICAgICAgaGVpZ2h0OiA3LjZ2aDtcbiAgICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5uYXZsb2dvOmhvdmVyLCAubmF2ZXh0ZXJuYWxsaW5rcyBhIGltZzpob3ZlciB7XG4gICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDExMCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmZsYWdzbGlua3MsIC5uYXZleHRlcm5hbGxpbmtzIGE6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41dnc7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2ZmxhZ3NsaW5rcywgLm5hdmV4dGVybmFsbGlua3MgYTpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNHZ3O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMC40dnc7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2ZXh0ZXJuYWxsaW5rcyBhOmZpcnN0LWNoaWxkIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmV4dGVybmFsbGlua3MgYTpudGgtY2hpbGQoMikgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmV4dGVybmFsbGlua3MgYTpudGgtY2hpbGQoMykgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDMxcHg7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2QmFyKHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCI+XG4gICAgICAgIDxUb29sYmFyIGNsYXNzTmFtZT1cInRvb2xiYXJcIj5cbiAgICAgICAgICA8TW9iaWxlQmFyIC8+XG4gICAgICAgIDwvVG9vbGJhcj5cbiAgICAgIDwvQXBwQmFyPlxuICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufSJdfQ== */\n/*@ sourceURL=/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/src/Navbar/index.js */"));
}

function DesktopBar() {
  var _jsx, _jsx2;

  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_Link_js__WEBPACK_IMPORTED_MODULE_6__["default"], (_jsx = {
    href: "/?lang=en",
    title: "en",
    color: "secondary"
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "title", "English"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 238
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), _jsx), __jsx("img", {
    src: _static_flags_en_flag_png__WEBPACK_IMPORTED_MODULE_13___default.a,
    alt: "",
    className: "jsx-905685761" + " " + "navflagsimgs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-905685761" + " " + "navflagslinks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, __jsx(_Link_js__WEBPACK_IMPORTED_MODULE_6__["default"], (_jsx2 = {
    href: "/?lang=es",
    title: "es",
    color: "secondary"
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "title", "Espa\xF1ol"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__source", {
    fileName: _jsxFileName,
    lineNumber: 243
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__self", this), _jsx2), __jsx("img", {
    src: _static_flags_es_flag_png__WEBPACK_IMPORTED_MODULE_14___default.a,
    alt: "",
    className: "jsx-905685761" + " " + "navflagsimgs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h6",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }), __jsx("img", {
    src: _static_logos_applogo_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "CR Framingham",
    className: "jsx-905685761" + " " + "navlogo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h6",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-905685761" + " " + "navexternallinks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.framinghamheartstudy.org/",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Framingham Heart Study",
    className: "jsx-905685761",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, __jsx("img", {
    src: _static_logos_fhslogo_png__WEBPACK_IMPORTED_MODULE_15___default.a,
    alt: "",
    className: "jsx-905685761",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  })), __jsx("a", {
    href: "https://www.nhlbi.nih.gov/science/framingham-heart-study-fhs/",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "National Institutes of Health",
    className: "jsx-905685761",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, __jsx("img", {
    src: _static_logos_nihlogo_png__WEBPACK_IMPORTED_MODULE_16___default.a,
    alt: "",
    className: "jsx-905685761",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  })), __jsx("a", {
    href: "https://en.wikipedia.org/wiki/Framingham_Heart_Study",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Wikipedia",
    className: "jsx-905685761",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, __jsx("img", {
    src: _static_logos_wikipedialogo3_png__WEBPACK_IMPORTED_MODULE_17___default.a,
    alt: "",
    className: "jsx-905685761",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "905685761",
    __self: this
  }, ".navlogo.jsx-905685761{height:7.6vh;min-height:50px;width:auto;}.navlogo.jsx-905685761:hover,.navexternallinks.jsx-905685761 a.jsx-905685761 img.jsx-905685761:hover{-webkit-filter:brightness(110%);filter:brightness(110%);}.navflagslinks.jsx-905685761,.navexternallinks.jsx-905685761 a.jsx-905685761:first-child{margin-right:0.5vw;}.navflagslinks.jsx-905685761,.navexternallinks.jsx-905685761 a.jsx-905685761:not(:first-child){margin-left:0.4vw;margin-right:0.4vw;}.navexternallinks.jsx-905685761 a.jsx-905685761:first-child img.jsx-905685761{height:40px;width:auto;}.navexternallinks.jsx-905685761 a.jsx-905685761:nth-child(2) img.jsx-905685761{height:30px;width:auto;margin-bottom:5px;}.navexternallinks.jsx-905685761 a.jsx-905685761:nth-child(3) img.jsx-905685761{height:31px;width:auto;margin-bottom:3px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlbWFuZXBhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm95ZWN0b3MvUmVhY3QvZnJhbWluZ2hhbS1yZWFjdC1wd2Evc3JjL05hdmJhci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3UWtCLEFBR3dCLEFBS1csQUFJTCxBQUlELEFBS04sQUFLQSxBQU1BLFlBVkQsQUFLQSxBQU1BLENBN0JLLEtBYUcsQ0FKckIsSUFVQSxBQUtvQixBQU1BLE1BN0JQLFFBYWIsR0FaQSxDQXVCQSxBQU1BLGVBMUJBIiwiZmlsZSI6Ii9ob21lL2dlbWFuZXBhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm95ZWN0b3MvUmVhY3QvZnJhbWluZ2hhbS1yZWFjdC1wd2Evc3JjL05hdmJhci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBMaW5rIGZyb20gJy4uL0xpbmsuanMnO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IGFwcGxvZ28gZnJvbSAnLi8uLi8uLi9zdGF0aWMvbG9nb3MvYXBwbG9nby5wbmcnO1xuaW1wb3J0IGVuRmxhZyBmcm9tICcuLy4uLy4uL3N0YXRpYy9mbGFncy9lbi1mbGFnLnBuZyc7XG5pbXBvcnQgZXNGbGFnIGZyb20gJy4vLi4vLi4vc3RhdGljL2ZsYWdzL2VzLWZsYWcucG5nJztcbmltcG9ydCBmaHNMb2dvIGZyb20gJy4vLi4vLi4vc3RhdGljL2xvZ29zL2Zoc2xvZ28ucG5nJztcbmltcG9ydCBuaWhMb2dvIGZyb20gJy4vLi4vLi4vc3RhdGljL2xvZ29zL25paGxvZ28ucG5nJztcbmltcG9ydCB3aWtpcGVkaWFMb2dvIGZyb20gJy4vLi4vLi4vc3RhdGljL2xvZ29zL3dpa2lwZWRpYWxvZ28zLnBuZyc7XG5pbXBvcnQgbGFuZ3VhZ2VSZXNwb25zZUhlbHBlciBmcm9tICcuLy4uLy4uL3N0YXRpYy9yZXNwb25zaXZlLWhlbHBlcnMvbGFuZ3VhZ2VzLnBuZydcblxuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudSc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb24nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IEluYm94SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW92ZVRvSW5ib3gnO1xuaW1wb3J0IERyYWZ0c0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RyYWZ0cyc7XG5pbXBvcnQgU2VuZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlbmQnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgfSxcbiAgbWVudUJ1dHRvbjoge1xuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZsZXhHcm93OiAxLFxuICB9LFxuICBsYW5nbWVudUJ1dHRvbjoge1xuICAgIG1hcmdpbjogMCxcbiAgICBwYWRkaW5nOiAwXG4gIH1cbn0pKTtcblxuY29uc3QgU3R5bGVkTWVudSA9IHdpdGhTdHlsZXMoe1xuICBwYXBlcjoge1xuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZDNkNGQ1JyxcbiAgfSxcbn0pKHByb3BzID0+IChcbiAgPE1lbnVcbiAgICBlbGV2YXRpb249ezB9XG4gICAgZ2V0Q29udGVudEFuY2hvckVsPXtudWxsfVxuICAgIGFuY2hvck9yaWdpbj17e1xuICAgICAgdmVydGljYWw6ICdib3R0b20nLFxuICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcicsXG4gICAgfX1cbiAgICB0cmFuc2Zvcm1PcmlnaW49e3tcbiAgICAgIHZlcnRpY2FsOiAndG9wJyxcbiAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5cbmNvbnN0IFN0eWxlZE1lbnVJdGVtID0gd2l0aFN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgJyY6Zm9jdXMnOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgICAgJyYgLk11aUxpc3RJdGVtSWNvbi1yb290LCAmIC5NdWlMaXN0SXRlbVRleHQtcHJpbWFyeSc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSkpKE1lbnVJdGVtKTtcblxuZXhwb3J0IGZ1bmN0aW9uIEN1c3RvbWl6ZWRNZW51cygpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gZXZlbnQgPT4ge1xuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHNldEFuY2hvckVsKG51bGwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIFxuICAgICAgPEJ1dHRvbiBcbiAgICAgICAgYXJpYS1jb250cm9scz1cImN1c3RvbWl6ZWQtbWVudVwiXG4gICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGFuZ21lbnVCdXR0b259PlxuICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgc3JjPXtsYW5ndWFnZVJlc3BvbnNlSGVscGVyfVxuICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwibGFuZ21lbnVpbWdcIlxuICAgICAgICAgIC8+XG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxTdHlsZWRNZW51XG4gICAgICAgIGlkPVwiY3VzdG9taXplZC1tZW51XCJcbiAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxuICAgICAgICBrZWVwTW91bnRlZFxuICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICA+XG4gICAgICAgIDxMaW5rIGhyZWY9Jy8/bGFuZz1lbicgY29sb3I9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICA8U3R5bGVkTWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2VuRmxhZ30gYWx0PVwiXCIgY2xhc3NOYW1lPVwibmF2ZmxhZ3NpbWdzXCIgLz5cbiAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRW5nbGlzaFwiIC8+XG4gICAgICAgICAgPC9TdHlsZWRNZW51SXRlbT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPScvP2xhbmc9ZXMnIGNvbG9yPVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgPFN0eWxlZE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtlc0ZsYWd9IGFsdD1cIlwiIGNsYXNzTmFtZT1cIm5hdmZsYWdzaW1nc1wiIC8+XG4gICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkVzcGHDsW9sXCIgLz5cbiAgICAgICAgICA8L1N0eWxlZE1lbnVJdGVtPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L1N0eWxlZE1lbnU+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgXG5cbiAgICAgICAgLmxhbmdtZW51aW1nOmhvdmVyIHtcbiAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTIwJSk7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgICAgLmxhbmdtZW51aW1nIHtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2ZmxhZ3NpbWdzIHtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgICAgLmxhbmdtZW51aW1nIHtcbiAgICAgICAgICAgIGhlaWdodDogNy42dmg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXZmbGFnc2ltZ3Mge1xuICAgICAgICAgICAgaGVpZ2h0OiA1LjV2aDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMC41dmg7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuXG5mdW5jdGlvbiBNb2JpbGVCYXIoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEN1c3RvbWl6ZWRNZW51cyAvPlxuXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IC8+XG5cbiAgICAgIDxpbWcgc3JjPXthcHBsb2dvfSBhbHQ9XCJDUiBGcmFtaW5naGFtXCIgY2xhc3NOYW1lPVwibmF2bG9nb1wiIC8+XG5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZleHRlcm5hbGxpbmtzXCI+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mcmFtaW5naGFtaGVhcnRzdHVkeS5vcmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRpdGxlPVwiRnJhbWluZ2hhbSBIZWFydCBTdHVkeVwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtmaHNMb2dvfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5uaGxiaS5uaWguZ292L3NjaWVuY2UvZnJhbWluZ2hhbS1oZWFydC1zdHVkeS1maHMvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRpdGxlPVwiTmF0aW9uYWwgSW5zdGl0dXRlcyBvZiBIZWFsdGhcIj5cbiAgICAgICAgICA8aW1nIHNyYz17bmloTG9nb30gYWx0PVwiXCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRnJhbWluZ2hhbV9IZWFydF9TdHVkeVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0aXRsZT1cIldpa2lwZWRpYVwiPlxuICAgICAgICAgIDxpbWcgc3JjPXt3aWtpcGVkaWFMb2dvfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAgIC5uYXZsb2dvIHtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgICAgLm5hdmxvZ28ge1xuICAgICAgICAgICAgaGVpZ2h0OiA3LjZ2aDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm5hdmxvZ286aG92ZXIsIC5uYXZleHRlcm5hbGxpbmtzIGEgaW1nOmhvdmVyIHtcbiAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTEwJSk7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2ZmxhZ3NsaW5rcywgLm5hdmV4dGVybmFsbGlua3MgYTpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjV2dztcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZmbGFnc2xpbmtzLCAubmF2ZXh0ZXJuYWxsaW5rcyBhOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2ZXh0ZXJuYWxsaW5rcyBhOmZpcnN0LWNoaWxkIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmV4dGVybmFsbGlua3MgYTpudGgtY2hpbGQoMikgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmV4dGVybmFsbGlua3MgYTpudGgtY2hpbGQoMykgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDMxcHg7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cblxuZnVuY3Rpb24gRGVza3RvcEJhcigpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGluayBocmVmPScvP2xhbmc9ZW4nIHRpdGxlPVwiZW5cIiBjb2xvcj1cInNlY29uZGFyeVwiIHRpdGxlPVwiRW5nbGlzaFwiPlxuICAgICAgICA8aW1nIHNyYz17ZW5GbGFnfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJuYXZmbGFnc2ltZ3NcIiAvPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmZsYWdzbGlua3NcIj5cbiAgICAgICAgPExpbmsgaHJlZj0nLz9sYW5nPWVzJyB0aXRsZT1cImVzXCIgY29sb3I9XCJzZWNvbmRhcnlcIiB0aXRsZT1cIkVzcGHDsW9sXCI+XG4gICAgICAgICAgPGltZyBzcmM9e2VzRmxhZ30gYWx0PVwiXCIgY2xhc3NOYW1lPVwibmF2ZmxhZ3NpbWdzXCIgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gLz5cblxuICAgICAgPGltZyBzcmM9e2FwcGxvZ299IGFsdD1cIkNSIEZyYW1pbmdoYW1cIiBjbGFzc05hbWU9XCJuYXZsb2dvXCIgLz5cblxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmV4dGVybmFsbGlua3NcIj5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZyYW1pbmdoYW1oZWFydHN0dWR5Lm9yZy9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGl0bGU9XCJGcmFtaW5naGFtIEhlYXJ0IFN0dWR5XCI+XG4gICAgICAgICAgPGltZyBzcmM9e2Zoc0xvZ299IGFsdD1cIlwiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5obGJpLm5paC5nb3Yvc2NpZW5jZS9mcmFtaW5naGFtLWhlYXJ0LXN0dWR5LWZocy9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGl0bGU9XCJOYXRpb25hbCBJbnN0aXR1dGVzIG9mIEhlYWx0aFwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtuaWhMb2dvfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9GcmFtaW5naGFtX0hlYXJ0X1N0dWR5XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRpdGxlPVwiV2lraXBlZGlhXCI+XG4gICAgICAgICAgPGltZyBzcmM9e3dpa2lwZWRpYUxvZ299IGFsdD1cIlwiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubmF2bG9nbyB7XG4gICAgICAgICAgaGVpZ2h0OiA3LjZ2aDtcbiAgICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5uYXZsb2dvOmhvdmVyLCAubmF2ZXh0ZXJuYWxsaW5rcyBhIGltZzpob3ZlciB7XG4gICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDExMCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmZsYWdzbGlua3MsIC5uYXZleHRlcm5hbGxpbmtzIGE6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41dnc7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2ZmxhZ3NsaW5rcywgLm5hdmV4dGVybmFsbGlua3MgYTpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNHZ3O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMC40dnc7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2ZXh0ZXJuYWxsaW5rcyBhOmZpcnN0LWNoaWxkIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmV4dGVybmFsbGlua3MgYTpudGgtY2hpbGQoMikgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmV4dGVybmFsbGlua3MgYTpudGgtY2hpbGQoMykgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDMxcHg7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2QmFyKHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCI+XG4gICAgICAgIDxUb29sYmFyIGNsYXNzTmFtZT1cInRvb2xiYXJcIj5cbiAgICAgICAgICA8TW9iaWxlQmFyIC8+XG4gICAgICAgIDwvVG9vbGJhcj5cbiAgICAgIDwvQXBwQmFyPlxuICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufSJdfQ== */\n/*@ sourceURL=/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/src/Navbar/index.js */"));
}

function NavBar(props) {
  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    position: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "toolbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }, __jsx(MobileBar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  })))));
}

/***/ })

})
//# sourceMappingURL=index.js.7909e272cb9bde9ed99e.hot-update.js.map