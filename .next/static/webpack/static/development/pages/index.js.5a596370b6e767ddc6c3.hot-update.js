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
      lineNumber: 42
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
    className: "jsx-4206064041",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("img", {
    src: _static_responsive_helpers_languages_png__WEBPACK_IMPORTED_MODULE_18___default.a,
    alt: "",
    "aria-controls": "customized-menu",
    "aria-haspopup": "true",
    variant: "contained",
    color: "primary",
    onClick: handleClick,
    className: "jsx-4206064041" + " " + "langmenuimg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx(StyledMenu, {
    id: "customized-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(StyledMenuItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_21__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx(_Link_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "/?lang=en",
    color: "secondary",
    title: "English",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx("img", {
    src: _static_flags_en_flag_png__WEBPACK_IMPORTED_MODULE_13___default.a,
    alt: "",
    className: "jsx-4206064041" + " " + "navflagsimgs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }))), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_22__["default"], {
    primary: "English",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  })), __jsx(StyledMenuItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_21__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(_Link_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "/?lang=es",
    color: "secondary",
    title: "Espa\xF1ol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("img", {
    src: _static_flags_es_flag_png__WEBPACK_IMPORTED_MODULE_14___default.a,
    alt: "",
    className: "jsx-4206064041" + " " + "navflagsimgs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }))), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_22__["default"], {
    primary: "Espa\xF1ol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "4206064041",
    __self: this
  }, ".langmenuimg.jsx-4206064041{height:50px;width:auto;}.navflagsimgs.jsx-4206064041{height:40px;width:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlbWFuZXBhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm95ZWN0b3MvUmVhY3QvZnJhbWluZ2hhbS1yZWFjdC1wd2Evc3JjL05hdmJhci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrSGtCLEFBR3VCLEFBS0EsWUFKRCxBQUtBLFdBSmIsQUFLQSIsImZpbGUiOiIvaG9tZS9nZW1hbmVwYS9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvUHJveWVjdG9zL1JlYWN0L2ZyYW1pbmdoYW0tcmVhY3QtcHdhL3NyYy9OYXZiYXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgTGluayBmcm9tICcuLi9MaW5rLmpzJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBhcHBsb2dvIGZyb20gJy4vLi4vLi4vc3RhdGljL2xvZ29zL2FwcGxvZ28ucG5nJztcbmltcG9ydCBlbkZsYWcgZnJvbSAnLi8uLi8uLi9zdGF0aWMvZmxhZ3MvZW4tZmxhZy5wbmcnO1xuaW1wb3J0IGVzRmxhZyBmcm9tICcuLy4uLy4uL3N0YXRpYy9mbGFncy9lcy1mbGFnLnBuZyc7XG5pbXBvcnQgZmhzTG9nbyBmcm9tICcuLy4uLy4uL3N0YXRpYy9sb2dvcy9maHNsb2dvLnBuZyc7XG5pbXBvcnQgbmloTG9nbyBmcm9tICcuLy4uLy4uL3N0YXRpYy9sb2dvcy9uaWhsb2dvLnBuZyc7XG5pbXBvcnQgd2lraXBlZGlhTG9nbyBmcm9tICcuLy4uLy4uL3N0YXRpYy9sb2dvcy93aWtpcGVkaWFsb2dvMy5wbmcnO1xuaW1wb3J0IGxhbmd1YWdlUmVzcG9uc2VIZWxwZXIgZnJvbSAnLi8uLi8uLi9zdGF0aWMvcmVzcG9uc2l2ZS1oZWxwZXJzL2xhbmd1YWdlcy5wbmcnXG5cbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uJztcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCBJbmJveEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vdmVUb0luYm94JztcbmltcG9ydCBEcmFmdHNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9EcmFmdHMnO1xuaW1wb3J0IFNlbmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZW5kJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG4gIG1lbnVCdXR0b246IHtcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgfSxcbn0pKTtcblxuY29uc3QgU3R5bGVkTWVudSA9IHdpdGhTdHlsZXMoe1xuICBwYXBlcjoge1xuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZDNkNGQ1JyxcbiAgfSxcbn0pKHByb3BzID0+IChcbiAgPE1lbnVcbiAgICBlbGV2YXRpb249ezB9XG4gICAgZ2V0Q29udGVudEFuY2hvckVsPXtudWxsfVxuICAgIGFuY2hvck9yaWdpbj17e1xuICAgICAgdmVydGljYWw6ICdib3R0b20nLFxuICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcicsXG4gICAgfX1cbiAgICB0cmFuc2Zvcm1PcmlnaW49e3tcbiAgICAgIHZlcnRpY2FsOiAndG9wJyxcbiAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5cbmNvbnN0IFN0eWxlZE1lbnVJdGVtID0gd2l0aFN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgJyY6Zm9jdXMnOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgICAgJyYgLk11aUxpc3RJdGVtSWNvbi1yb290LCAmIC5NdWlMaXN0SXRlbVRleHQtcHJpbWFyeSc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSkpKE1lbnVJdGVtKTtcblxuZXhwb3J0IGZ1bmN0aW9uIEN1c3RvbWl6ZWRNZW51cygpIHtcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IGV2ZW50ID0+IHtcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRBbmNob3JFbChudWxsKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aW1nIFxuICAgICAgc3JjPXtsYW5ndWFnZVJlc3BvbnNlSGVscGVyfVxuICAgICAgYWx0PVwiXCJcbiAgICAgIGNsYXNzTmFtZT1cImxhbmdtZW51aW1nXCJcbiAgICAgIGFyaWEtY29udHJvbHM9XCJjdXN0b21pemVkLW1lbnVcIlxuICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAvPlxuICAgICAgPFN0eWxlZE1lbnVcbiAgICAgICAgaWQ9XCJjdXN0b21pemVkLW1lbnVcIlxuICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XG4gICAgICAgIGtlZXBNb3VudGVkXG4gICAgICAgIG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfVxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgID5cbiAgICAgICAgPFN0eWxlZE1lbnVJdGVtPlxuICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICA8TGluayBocmVmPScvP2xhbmc9ZW4nIGNvbG9yPVwic2Vjb25kYXJ5XCIgdGl0bGU9XCJFbmdsaXNoXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtlbkZsYWd9IGFsdD1cIlwiIGNsYXNzTmFtZT1cIm5hdmZsYWdzaW1nc1wiIC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRW5nbGlzaFwiIC8+XG4gICAgICAgIDwvU3R5bGVkTWVudUl0ZW0+XG4gICAgICAgIDxTdHlsZWRNZW51SXRlbT5cbiAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLz9sYW5nPWVzJyBjb2xvcj1cInNlY29uZGFyeVwiIHRpdGxlPVwiRXNwYcOxb2xcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2VzRmxhZ30gYWx0PVwiXCIgY2xhc3NOYW1lPVwibmF2ZmxhZ3NpbWdzXCIgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJFc3Bhw7FvbFwiIC8+XG4gICAgICAgIDwvU3R5bGVkTWVudUl0ZW0+XG4gICAgICA8L1N0eWxlZE1lbnU+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5sYW5nbWVudWltZyB7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmZsYWdzaW1ncyB7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIE1vYmlsZUJhcigpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q3VzdG9taXplZE1lbnVzIC8+XG5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gLz5cblxuICAgICAgPGltZyBzcmM9e2FwcGxvZ299IGFsdD1cIkNSIEZyYW1pbmdoYW1cIiBjbGFzc05hbWU9XCJuYXZsb2dvXCIgLz5cblxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmV4dGVybmFsbGlua3NcIj5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZyYW1pbmdoYW1oZWFydHN0dWR5Lm9yZy9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGl0bGU9XCJGcmFtaW5naGFtIEhlYXJ0IFN0dWR5XCI+XG4gICAgICAgICAgPGltZyBzcmM9e2Zoc0xvZ299IGFsdD1cIlwiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5obGJpLm5paC5nb3Yvc2NpZW5jZS9mcmFtaW5naGFtLWhlYXJ0LXN0dWR5LWZocy9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGl0bGU9XCJOYXRpb25hbCBJbnN0aXR1dGVzIG9mIEhlYWx0aFwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtuaWhMb2dvfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9GcmFtaW5naGFtX0hlYXJ0X1N0dWR5XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRpdGxlPVwiV2lraXBlZGlhXCI+XG4gICAgICAgICAgPGltZyBzcmM9e3dpa2lwZWRpYUxvZ299IGFsdD1cIlwiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubmF2bG9nbyB7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5uYXZsb2dvOmhvdmVyLCAubmF2ZXh0ZXJuYWxsaW5rcyBhIGltZzpob3ZlciB7XG4gICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDExMCUpO1xuICAgICAgICB9XG4gICAgICAgIC5uYXZmbGFnc2ltZ3Mge1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLm5hdmZsYWdzaW1nczpob3ZlciB7XG4gICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEyMCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmZsYWdzbGlua3MsIC5uYXZleHRlcm5hbGxpbmtzIGE6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41dnc7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2ZmxhZ3NsaW5rcywgLm5hdmV4dGVybmFsbGlua3MgYTpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmV4dGVybmFsbGlua3MgYTpmaXJzdC1jaGlsZCBpbWcge1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZleHRlcm5hbGxpbmtzIGE6bnRoLWNoaWxkKDIpIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZleHRlcm5hbGxpbmtzIGE6bnRoLWNoaWxkKDMpIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiAzMXB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG5cbmZ1bmN0aW9uIERlc2t0b3BCYXIoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExpbmsgaHJlZj0nLz9sYW5nPWVuJyB0aXRsZT1cImVuXCIgY29sb3I9XCJzZWNvbmRhcnlcIiB0aXRsZT1cIkVuZ2xpc2hcIj5cbiAgICAgICAgPGltZyBzcmM9e2VuRmxhZ30gYWx0PVwiXCIgY2xhc3NOYW1lPVwibmF2ZmxhZ3NpbWdzXCIgLz5cbiAgICAgIDwvTGluaz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZmbGFnc2xpbmtzXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9Jy8/bGFuZz1lcycgdGl0bGU9XCJlc1wiIGNvbG9yPVwic2Vjb25kYXJ5XCIgdGl0bGU9XCJFc3Bhw7FvbFwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtlc0ZsYWd9IGFsdD1cIlwiIGNsYXNzTmFtZT1cIm5hdmZsYWdzaW1nc1wiIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IC8+XG5cbiAgICAgIDxpbWcgc3JjPXthcHBsb2dvfSBhbHQ9XCJDUiBGcmFtaW5naGFtXCIgY2xhc3NOYW1lPVwibmF2bG9nb1wiIC8+XG5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZleHRlcm5hbGxpbmtzXCI+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mcmFtaW5naGFtaGVhcnRzdHVkeS5vcmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRpdGxlPVwiRnJhbWluZ2hhbSBIZWFydCBTdHVkeVwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtmaHNMb2dvfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5uaGxiaS5uaWguZ292L3NjaWVuY2UvZnJhbWluZ2hhbS1oZWFydC1zdHVkeS1maHMvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRpdGxlPVwiTmF0aW9uYWwgSW5zdGl0dXRlcyBvZiBIZWFsdGhcIj5cbiAgICAgICAgICA8aW1nIHNyYz17bmloTG9nb30gYWx0PVwiXCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRnJhbWluZ2hhbV9IZWFydF9TdHVkeVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0aXRsZT1cIldpa2lwZWRpYVwiPlxuICAgICAgICAgIDxpbWcgc3JjPXt3aWtpcGVkaWFMb2dvfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm5hdmxvZ28ge1xuICAgICAgICAgIGhlaWdodDogNy42dmg7XG4gICAgICAgICAgbWluLWhlaWdodDogNTBweDtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAubmF2bG9nbzpob3ZlciwgLm5hdmV4dGVybmFsbGlua3MgYSBpbWc6aG92ZXIge1xuICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTAlKTtcbiAgICAgICAgfVxuICAgICAgICAubmF2ZmxhZ3NpbWdzIHtcbiAgICAgICAgICBoZWlnaHQ6IDUuNXZoO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMXZoO1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5uYXZmbGFnc2ltZ3M6aG92ZXIge1xuICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMjAlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZmbGFnc2xpbmtzLCAubmF2ZXh0ZXJuYWxsaW5rcyBhOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXZ3O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmZsYWdzbGlua3MsIC5uYXZleHRlcm5hbGxpbmtzIGE6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjR2dztcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNHZ3O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmV4dGVybmFsbGlua3MgYTpmaXJzdC1jaGlsZCBpbWcge1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZleHRlcm5hbGxpbmtzIGE6bnRoLWNoaWxkKDIpIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZleHRlcm5hbGxpbmtzIGE6bnRoLWNoaWxkKDMpIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiAzMXB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkJhcihwcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxuICAgICAgICA8VG9vbGJhciBjbGFzc05hbWU9XCJ0b29sYmFyXCI+XG4gICAgICAgICAgeyh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8IDEyMDApID8gPE1vYmlsZUJhciAvPiA6IDxEZXNrdG9wQmFyIC8+fVxuICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICA8L0FwcEJhcj5cbiAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn0iXX0= */\n/*@ sourceURL=/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/src/Navbar/index.js */"));
}

function MobileBar() {
  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(CustomizedMenus, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h6",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }), __jsx("img", {
    src: _static_logos_applogo_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "CR Framingham",
    className: "jsx-3561672451" + " " + "navlogo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h6",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3561672451" + " " + "navexternallinks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.framinghamheartstudy.org/",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Framingham Heart Study",
    className: "jsx-3561672451",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx("img", {
    src: _static_logos_fhslogo_png__WEBPACK_IMPORTED_MODULE_15___default.a,
    alt: "",
    className: "jsx-3561672451",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  })), __jsx("a", {
    href: "https://www.nhlbi.nih.gov/science/framingham-heart-study-fhs/",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "National Institutes of Health",
    className: "jsx-3561672451",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx("img", {
    src: _static_logos_nihlogo_png__WEBPACK_IMPORTED_MODULE_16___default.a,
    alt: "",
    className: "jsx-3561672451",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  })), __jsx("a", {
    href: "https://en.wikipedia.org/wiki/Framingham_Heart_Study",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Wikipedia",
    className: "jsx-3561672451",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx("img", {
    src: _static_logos_wikipedialogo3_png__WEBPACK_IMPORTED_MODULE_17___default.a,
    alt: "",
    className: "jsx-3561672451",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3561672451",
    __self: this
  }, ".navlogo.jsx-3561672451{height:50px;width:auto;}.navlogo.jsx-3561672451:hover,.navexternallinks.jsx-3561672451 a.jsx-3561672451 img.jsx-3561672451:hover{-webkit-filter:brightness(110%);filter:brightness(110%);}.navflagsimgs.jsx-3561672451{height:40px;margin-top:6px;width:auto;}.navflagsimgs.jsx-3561672451:hover{-webkit-filter:brightness(120%);filter:brightness(120%);}.navflagslinks.jsx-3561672451,.navexternallinks.jsx-3561672451 a.jsx-3561672451:first-child{margin-right:0.5vw;}.navflagslinks.jsx-3561672451,.navexternallinks.jsx-3561672451 a.jsx-3561672451:not(:first-child){margin-left:10px;margin-right:10px;}.navexternallinks.jsx-3561672451 a.jsx-3561672451:first-child img.jsx-3561672451{height:40px;width:auto;}.navexternallinks.jsx-3561672451 a.jsx-3561672451:nth-child(2) img.jsx-3561672451{height:30px;width:auto;margin-bottom:5px;}.navexternallinks.jsx-3561672451 a.jsx-3561672451:nth-child(3) img.jsx-3561672451{height:31px;width:auto;margin-bottom:3px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlbWFuZXBhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm95ZWN0b3MvUmVhY3QvZnJhbWluZ2hhbS1yZWFjdC1wd2Evc3JjL05hdmJhci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3SmtCLEFBR3VCLEFBSVksQUFHWixBQUtZLEFBSUwsQUFJRixBQUtMLEFBS0EsQUFNQSxZQW5DRCxBQU9JLEFBa0JKLEFBS0EsQUFNQSxLQWhCTyxFQUpwQixJQWZBLEFBeUJBLEFBS29CLEFBTUEsSUE3QlAsUUFhYixHQVpBLEdBdUJBLEFBTUEsZUFsQ0EsQUFRQSIsImZpbGUiOiIvaG9tZS9nZW1hbmVwYS9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvUHJveWVjdG9zL1JlYWN0L2ZyYW1pbmdoYW0tcmVhY3QtcHdhL3NyYy9OYXZiYXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgTGluayBmcm9tICcuLi9MaW5rLmpzJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBhcHBsb2dvIGZyb20gJy4vLi4vLi4vc3RhdGljL2xvZ29zL2FwcGxvZ28ucG5nJztcbmltcG9ydCBlbkZsYWcgZnJvbSAnLi8uLi8uLi9zdGF0aWMvZmxhZ3MvZW4tZmxhZy5wbmcnO1xuaW1wb3J0IGVzRmxhZyBmcm9tICcuLy4uLy4uL3N0YXRpYy9mbGFncy9lcy1mbGFnLnBuZyc7XG5pbXBvcnQgZmhzTG9nbyBmcm9tICcuLy4uLy4uL3N0YXRpYy9sb2dvcy9maHNsb2dvLnBuZyc7XG5pbXBvcnQgbmloTG9nbyBmcm9tICcuLy4uLy4uL3N0YXRpYy9sb2dvcy9uaWhsb2dvLnBuZyc7XG5pbXBvcnQgd2lraXBlZGlhTG9nbyBmcm9tICcuLy4uLy4uL3N0YXRpYy9sb2dvcy93aWtpcGVkaWFsb2dvMy5wbmcnO1xuaW1wb3J0IGxhbmd1YWdlUmVzcG9uc2VIZWxwZXIgZnJvbSAnLi8uLi8uLi9zdGF0aWMvcmVzcG9uc2l2ZS1oZWxwZXJzL2xhbmd1YWdlcy5wbmcnXG5cbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uJztcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCBJbmJveEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vdmVUb0luYm94JztcbmltcG9ydCBEcmFmdHNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9EcmFmdHMnO1xuaW1wb3J0IFNlbmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZW5kJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG4gIG1lbnVCdXR0b246IHtcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgfSxcbn0pKTtcblxuY29uc3QgU3R5bGVkTWVudSA9IHdpdGhTdHlsZXMoe1xuICBwYXBlcjoge1xuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZDNkNGQ1JyxcbiAgfSxcbn0pKHByb3BzID0+IChcbiAgPE1lbnVcbiAgICBlbGV2YXRpb249ezB9XG4gICAgZ2V0Q29udGVudEFuY2hvckVsPXtudWxsfVxuICAgIGFuY2hvck9yaWdpbj17e1xuICAgICAgdmVydGljYWw6ICdib3R0b20nLFxuICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcicsXG4gICAgfX1cbiAgICB0cmFuc2Zvcm1PcmlnaW49e3tcbiAgICAgIHZlcnRpY2FsOiAndG9wJyxcbiAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5cbmNvbnN0IFN0eWxlZE1lbnVJdGVtID0gd2l0aFN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgJyY6Zm9jdXMnOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgICAgJyYgLk11aUxpc3RJdGVtSWNvbi1yb290LCAmIC5NdWlMaXN0SXRlbVRleHQtcHJpbWFyeSc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSkpKE1lbnVJdGVtKTtcblxuZXhwb3J0IGZ1bmN0aW9uIEN1c3RvbWl6ZWRNZW51cygpIHtcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IGV2ZW50ID0+IHtcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRBbmNob3JFbChudWxsKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aW1nIFxuICAgICAgc3JjPXtsYW5ndWFnZVJlc3BvbnNlSGVscGVyfVxuICAgICAgYWx0PVwiXCJcbiAgICAgIGNsYXNzTmFtZT1cImxhbmdtZW51aW1nXCJcbiAgICAgIGFyaWEtY29udHJvbHM9XCJjdXN0b21pemVkLW1lbnVcIlxuICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAvPlxuICAgICAgPFN0eWxlZE1lbnVcbiAgICAgICAgaWQ9XCJjdXN0b21pemVkLW1lbnVcIlxuICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XG4gICAgICAgIGtlZXBNb3VudGVkXG4gICAgICAgIG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfVxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgID5cbiAgICAgICAgPFN0eWxlZE1lbnVJdGVtPlxuICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICA8TGluayBocmVmPScvP2xhbmc9ZW4nIGNvbG9yPVwic2Vjb25kYXJ5XCIgdGl0bGU9XCJFbmdsaXNoXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtlbkZsYWd9IGFsdD1cIlwiIGNsYXNzTmFtZT1cIm5hdmZsYWdzaW1nc1wiIC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRW5nbGlzaFwiIC8+XG4gICAgICAgIDwvU3R5bGVkTWVudUl0ZW0+XG4gICAgICAgIDxTdHlsZWRNZW51SXRlbT5cbiAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLz9sYW5nPWVzJyBjb2xvcj1cInNlY29uZGFyeVwiIHRpdGxlPVwiRXNwYcOxb2xcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2VzRmxhZ30gYWx0PVwiXCIgY2xhc3NOYW1lPVwibmF2ZmxhZ3NpbWdzXCIgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJFc3Bhw7FvbFwiIC8+XG4gICAgICAgIDwvU3R5bGVkTWVudUl0ZW0+XG4gICAgICA8L1N0eWxlZE1lbnU+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5sYW5nbWVudWltZyB7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmZsYWdzaW1ncyB7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIE1vYmlsZUJhcigpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q3VzdG9taXplZE1lbnVzIC8+XG5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gLz5cblxuICAgICAgPGltZyBzcmM9e2FwcGxvZ299IGFsdD1cIkNSIEZyYW1pbmdoYW1cIiBjbGFzc05hbWU9XCJuYXZsb2dvXCIgLz5cblxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmV4dGVybmFsbGlua3NcIj5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZyYW1pbmdoYW1oZWFydHN0dWR5Lm9yZy9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGl0bGU9XCJGcmFtaW5naGFtIEhlYXJ0IFN0dWR5XCI+XG4gICAgICAgICAgPGltZyBzcmM9e2Zoc0xvZ299IGFsdD1cIlwiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5obGJpLm5paC5nb3Yvc2NpZW5jZS9mcmFtaW5naGFtLWhlYXJ0LXN0dWR5LWZocy9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGl0bGU9XCJOYXRpb25hbCBJbnN0aXR1dGVzIG9mIEhlYWx0aFwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtuaWhMb2dvfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9GcmFtaW5naGFtX0hlYXJ0X1N0dWR5XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRpdGxlPVwiV2lraXBlZGlhXCI+XG4gICAgICAgICAgPGltZyBzcmM9e3dpa2lwZWRpYUxvZ299IGFsdD1cIlwiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubmF2bG9nbyB7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5uYXZsb2dvOmhvdmVyLCAubmF2ZXh0ZXJuYWxsaW5rcyBhIGltZzpob3ZlciB7XG4gICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDExMCUpO1xuICAgICAgICB9XG4gICAgICAgIC5uYXZmbGFnc2ltZ3Mge1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLm5hdmZsYWdzaW1nczpob3ZlciB7XG4gICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEyMCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmZsYWdzbGlua3MsIC5uYXZleHRlcm5hbGxpbmtzIGE6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41dnc7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2ZmxhZ3NsaW5rcywgLm5hdmV4dGVybmFsbGlua3MgYTpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmV4dGVybmFsbGlua3MgYTpmaXJzdC1jaGlsZCBpbWcge1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZleHRlcm5hbGxpbmtzIGE6bnRoLWNoaWxkKDIpIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZleHRlcm5hbGxpbmtzIGE6bnRoLWNoaWxkKDMpIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiAzMXB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG5cbmZ1bmN0aW9uIERlc2t0b3BCYXIoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExpbmsgaHJlZj0nLz9sYW5nPWVuJyB0aXRsZT1cImVuXCIgY29sb3I9XCJzZWNvbmRhcnlcIiB0aXRsZT1cIkVuZ2xpc2hcIj5cbiAgICAgICAgPGltZyBzcmM9e2VuRmxhZ30gYWx0PVwiXCIgY2xhc3NOYW1lPVwibmF2ZmxhZ3NpbWdzXCIgLz5cbiAgICAgIDwvTGluaz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZmbGFnc2xpbmtzXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9Jy8/bGFuZz1lcycgdGl0bGU9XCJlc1wiIGNvbG9yPVwic2Vjb25kYXJ5XCIgdGl0bGU9XCJFc3Bhw7FvbFwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtlc0ZsYWd9IGFsdD1cIlwiIGNsYXNzTmFtZT1cIm5hdmZsYWdzaW1nc1wiIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IC8+XG5cbiAgICAgIDxpbWcgc3JjPXthcHBsb2dvfSBhbHQ9XCJDUiBGcmFtaW5naGFtXCIgY2xhc3NOYW1lPVwibmF2bG9nb1wiIC8+XG5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZleHRlcm5hbGxpbmtzXCI+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mcmFtaW5naGFtaGVhcnRzdHVkeS5vcmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRpdGxlPVwiRnJhbWluZ2hhbSBIZWFydCBTdHVkeVwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtmaHNMb2dvfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5uaGxiaS5uaWguZ292L3NjaWVuY2UvZnJhbWluZ2hhbS1oZWFydC1zdHVkeS1maHMvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRpdGxlPVwiTmF0aW9uYWwgSW5zdGl0dXRlcyBvZiBIZWFsdGhcIj5cbiAgICAgICAgICA8aW1nIHNyYz17bmloTG9nb30gYWx0PVwiXCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRnJhbWluZ2hhbV9IZWFydF9TdHVkeVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0aXRsZT1cIldpa2lwZWRpYVwiPlxuICAgICAgICAgIDxpbWcgc3JjPXt3aWtpcGVkaWFMb2dvfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm5hdmxvZ28ge1xuICAgICAgICAgIGhlaWdodDogNy42dmg7XG4gICAgICAgICAgbWluLWhlaWdodDogNTBweDtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAubmF2bG9nbzpob3ZlciwgLm5hdmV4dGVybmFsbGlua3MgYSBpbWc6aG92ZXIge1xuICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTAlKTtcbiAgICAgICAgfVxuICAgICAgICAubmF2ZmxhZ3NpbWdzIHtcbiAgICAgICAgICBoZWlnaHQ6IDUuNXZoO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMXZoO1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5uYXZmbGFnc2ltZ3M6aG92ZXIge1xuICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMjAlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZmbGFnc2xpbmtzLCAubmF2ZXh0ZXJuYWxsaW5rcyBhOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXZ3O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmZsYWdzbGlua3MsIC5uYXZleHRlcm5hbGxpbmtzIGE6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjR2dztcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNHZ3O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmV4dGVybmFsbGlua3MgYTpmaXJzdC1jaGlsZCBpbWcge1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZleHRlcm5hbGxpbmtzIGE6bnRoLWNoaWxkKDIpIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZleHRlcm5hbGxpbmtzIGE6bnRoLWNoaWxkKDMpIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiAzMXB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkJhcihwcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxuICAgICAgICA8VG9vbGJhciBjbGFzc05hbWU9XCJ0b29sYmFyXCI+XG4gICAgICAgICAgeyh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8IDEyMDApID8gPE1vYmlsZUJhciAvPiA6IDxEZXNrdG9wQmFyIC8+fVxuICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICA8L0FwcEJhcj5cbiAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn0iXX0= */\n/*@ sourceURL=/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/src/Navbar/index.js */"));
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
    lineNumber: 204
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), _jsx), __jsx("img", {
    src: _static_flags_en_flag_png__WEBPACK_IMPORTED_MODULE_13___default.a,
    alt: "",
    className: "jsx-4193919693" + " " + "navflagsimgs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-4193919693" + " " + "navflagslinks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, __jsx(_Link_js__WEBPACK_IMPORTED_MODULE_6__["default"], (_jsx2 = {
    href: "/?lang=es",
    title: "es",
    color: "secondary"
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "title", "Espa\xF1ol"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__source", {
    fileName: _jsxFileName,
    lineNumber: 209
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__self", this), _jsx2), __jsx("img", {
    src: _static_flags_es_flag_png__WEBPACK_IMPORTED_MODULE_14___default.a,
    alt: "",
    className: "jsx-4193919693" + " " + "navflagsimgs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h6",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }), __jsx("img", {
    src: _static_logos_applogo_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "CR Framingham",
    className: "jsx-4193919693" + " " + "navlogo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h6",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-4193919693" + " " + "navexternallinks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.framinghamheartstudy.org/",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Framingham Heart Study",
    className: "jsx-4193919693",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, __jsx("img", {
    src: _static_logos_fhslogo_png__WEBPACK_IMPORTED_MODULE_15___default.a,
    alt: "",
    className: "jsx-4193919693",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  })), __jsx("a", {
    href: "https://www.nhlbi.nih.gov/science/framingham-heart-study-fhs/",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "National Institutes of Health",
    className: "jsx-4193919693",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, __jsx("img", {
    src: _static_logos_nihlogo_png__WEBPACK_IMPORTED_MODULE_16___default.a,
    alt: "",
    className: "jsx-4193919693",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  })), __jsx("a", {
    href: "https://en.wikipedia.org/wiki/Framingham_Heart_Study",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Wikipedia",
    className: "jsx-4193919693",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, __jsx("img", {
    src: _static_logos_wikipedialogo3_png__WEBPACK_IMPORTED_MODULE_17___default.a,
    alt: "",
    className: "jsx-4193919693",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "4193919693",
    __self: this
  }, ".navlogo.jsx-4193919693{height:7.6vh;min-height:50px;width:auto;}.navlogo.jsx-4193919693:hover,.navexternallinks.jsx-4193919693 a.jsx-4193919693 img.jsx-4193919693:hover{-webkit-filter:brightness(110%);filter:brightness(110%);}.navflagsimgs.jsx-4193919693{height:5.5vh;min-height:35px;margin-top:1vh;width:auto;}.navflagsimgs.jsx-4193919693:hover{-webkit-filter:brightness(120%);filter:brightness(120%);}.navflagslinks.jsx-4193919693,.navexternallinks.jsx-4193919693 a.jsx-4193919693:first-child{margin-right:0.5vw;}.navflagslinks.jsx-4193919693,.navexternallinks.jsx-4193919693 a.jsx-4193919693:not(:first-child){margin-left:0.4vw;margin-right:0.4vw;}.navexternallinks.jsx-4193919693 a.jsx-4193919693:first-child img.jsx-4193919693{height:40px;width:auto;}.navexternallinks.jsx-4193919693 a.jsx-4193919693:nth-child(2) img.jsx-4193919693{height:30px;width:auto;margin-bottom:5px;}.navexternallinks.jsx-4193919693 a.jsx-4193919693:nth-child(3) img.jsx-4193919693{height:31px;width:auto;margin-bottom:3px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlbWFuZXBhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm95ZWN0b3MvUmVhY3QvZnJhbWluZ2hhbS1yZWFjdC1wd2Evc3JjL05hdmJhci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzT2tCLEFBR3dCLEFBS1csQUFHWCxBQU1XLEFBSUwsQUFJRCxBQUtOLEFBS0EsQUFNQSxZQVZELEFBS0EsQUFNQSxDQXRDSyxBQVFBLEtBY0csQ0FKckIsSUFVQSxBQUtvQixBQU1BLE1BdENQLEFBUUksUUFjakIsR0FyQkEsQ0FnQ0EsQUFNQSxHQTlCYSxXQUNiLENBTkEsQUFTQSIsImZpbGUiOiIvaG9tZS9nZW1hbmVwYS9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvUHJveWVjdG9zL1JlYWN0L2ZyYW1pbmdoYW0tcmVhY3QtcHdhL3NyYy9OYXZiYXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgTGluayBmcm9tICcuLi9MaW5rLmpzJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBhcHBsb2dvIGZyb20gJy4vLi4vLi4vc3RhdGljL2xvZ29zL2FwcGxvZ28ucG5nJztcbmltcG9ydCBlbkZsYWcgZnJvbSAnLi8uLi8uLi9zdGF0aWMvZmxhZ3MvZW4tZmxhZy5wbmcnO1xuaW1wb3J0IGVzRmxhZyBmcm9tICcuLy4uLy4uL3N0YXRpYy9mbGFncy9lcy1mbGFnLnBuZyc7XG5pbXBvcnQgZmhzTG9nbyBmcm9tICcuLy4uLy4uL3N0YXRpYy9sb2dvcy9maHNsb2dvLnBuZyc7XG5pbXBvcnQgbmloTG9nbyBmcm9tICcuLy4uLy4uL3N0YXRpYy9sb2dvcy9uaWhsb2dvLnBuZyc7XG5pbXBvcnQgd2lraXBlZGlhTG9nbyBmcm9tICcuLy4uLy4uL3N0YXRpYy9sb2dvcy93aWtpcGVkaWFsb2dvMy5wbmcnO1xuaW1wb3J0IGxhbmd1YWdlUmVzcG9uc2VIZWxwZXIgZnJvbSAnLi8uLi8uLi9zdGF0aWMvcmVzcG9uc2l2ZS1oZWxwZXJzL2xhbmd1YWdlcy5wbmcnXG5cbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uJztcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCBJbmJveEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vdmVUb0luYm94JztcbmltcG9ydCBEcmFmdHNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9EcmFmdHMnO1xuaW1wb3J0IFNlbmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZW5kJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG4gIG1lbnVCdXR0b246IHtcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgfSxcbn0pKTtcblxuY29uc3QgU3R5bGVkTWVudSA9IHdpdGhTdHlsZXMoe1xuICBwYXBlcjoge1xuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZDNkNGQ1JyxcbiAgfSxcbn0pKHByb3BzID0+IChcbiAgPE1lbnVcbiAgICBlbGV2YXRpb249ezB9XG4gICAgZ2V0Q29udGVudEFuY2hvckVsPXtudWxsfVxuICAgIGFuY2hvck9yaWdpbj17e1xuICAgICAgdmVydGljYWw6ICdib3R0b20nLFxuICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcicsXG4gICAgfX1cbiAgICB0cmFuc2Zvcm1PcmlnaW49e3tcbiAgICAgIHZlcnRpY2FsOiAndG9wJyxcbiAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5cbmNvbnN0IFN0eWxlZE1lbnVJdGVtID0gd2l0aFN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgJyY6Zm9jdXMnOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgICAgJyYgLk11aUxpc3RJdGVtSWNvbi1yb290LCAmIC5NdWlMaXN0SXRlbVRleHQtcHJpbWFyeSc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSkpKE1lbnVJdGVtKTtcblxuZXhwb3J0IGZ1bmN0aW9uIEN1c3RvbWl6ZWRNZW51cygpIHtcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IGV2ZW50ID0+IHtcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRBbmNob3JFbChudWxsKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aW1nIFxuICAgICAgc3JjPXtsYW5ndWFnZVJlc3BvbnNlSGVscGVyfVxuICAgICAgYWx0PVwiXCJcbiAgICAgIGNsYXNzTmFtZT1cImxhbmdtZW51aW1nXCJcbiAgICAgIGFyaWEtY29udHJvbHM9XCJjdXN0b21pemVkLW1lbnVcIlxuICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAvPlxuICAgICAgPFN0eWxlZE1lbnVcbiAgICAgICAgaWQ9XCJjdXN0b21pemVkLW1lbnVcIlxuICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XG4gICAgICAgIGtlZXBNb3VudGVkXG4gICAgICAgIG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfVxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgID5cbiAgICAgICAgPFN0eWxlZE1lbnVJdGVtPlxuICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICA8TGluayBocmVmPScvP2xhbmc9ZW4nIGNvbG9yPVwic2Vjb25kYXJ5XCIgdGl0bGU9XCJFbmdsaXNoXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtlbkZsYWd9IGFsdD1cIlwiIGNsYXNzTmFtZT1cIm5hdmZsYWdzaW1nc1wiIC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRW5nbGlzaFwiIC8+XG4gICAgICAgIDwvU3R5bGVkTWVudUl0ZW0+XG4gICAgICAgIDxTdHlsZWRNZW51SXRlbT5cbiAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLz9sYW5nPWVzJyBjb2xvcj1cInNlY29uZGFyeVwiIHRpdGxlPVwiRXNwYcOxb2xcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2VzRmxhZ30gYWx0PVwiXCIgY2xhc3NOYW1lPVwibmF2ZmxhZ3NpbWdzXCIgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJFc3Bhw7FvbFwiIC8+XG4gICAgICAgIDwvU3R5bGVkTWVudUl0ZW0+XG4gICAgICA8L1N0eWxlZE1lbnU+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5sYW5nbWVudWltZyB7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmZsYWdzaW1ncyB7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIE1vYmlsZUJhcigpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q3VzdG9taXplZE1lbnVzIC8+XG5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gLz5cblxuICAgICAgPGltZyBzcmM9e2FwcGxvZ299IGFsdD1cIkNSIEZyYW1pbmdoYW1cIiBjbGFzc05hbWU9XCJuYXZsb2dvXCIgLz5cblxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmV4dGVybmFsbGlua3NcIj5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZyYW1pbmdoYW1oZWFydHN0dWR5Lm9yZy9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGl0bGU9XCJGcmFtaW5naGFtIEhlYXJ0IFN0dWR5XCI+XG4gICAgICAgICAgPGltZyBzcmM9e2Zoc0xvZ299IGFsdD1cIlwiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5obGJpLm5paC5nb3Yvc2NpZW5jZS9mcmFtaW5naGFtLWhlYXJ0LXN0dWR5LWZocy9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGl0bGU9XCJOYXRpb25hbCBJbnN0aXR1dGVzIG9mIEhlYWx0aFwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtuaWhMb2dvfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9GcmFtaW5naGFtX0hlYXJ0X1N0dWR5XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRpdGxlPVwiV2lraXBlZGlhXCI+XG4gICAgICAgICAgPGltZyBzcmM9e3dpa2lwZWRpYUxvZ299IGFsdD1cIlwiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubmF2bG9nbyB7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5uYXZsb2dvOmhvdmVyLCAubmF2ZXh0ZXJuYWxsaW5rcyBhIGltZzpob3ZlciB7XG4gICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDExMCUpO1xuICAgICAgICB9XG4gICAgICAgIC5uYXZmbGFnc2ltZ3Mge1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLm5hdmZsYWdzaW1nczpob3ZlciB7XG4gICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEyMCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmZsYWdzbGlua3MsIC5uYXZleHRlcm5hbGxpbmtzIGE6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41dnc7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2ZmxhZ3NsaW5rcywgLm5hdmV4dGVybmFsbGlua3MgYTpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmV4dGVybmFsbGlua3MgYTpmaXJzdC1jaGlsZCBpbWcge1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZleHRlcm5hbGxpbmtzIGE6bnRoLWNoaWxkKDIpIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZleHRlcm5hbGxpbmtzIGE6bnRoLWNoaWxkKDMpIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiAzMXB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG5cbmZ1bmN0aW9uIERlc2t0b3BCYXIoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExpbmsgaHJlZj0nLz9sYW5nPWVuJyB0aXRsZT1cImVuXCIgY29sb3I9XCJzZWNvbmRhcnlcIiB0aXRsZT1cIkVuZ2xpc2hcIj5cbiAgICAgICAgPGltZyBzcmM9e2VuRmxhZ30gYWx0PVwiXCIgY2xhc3NOYW1lPVwibmF2ZmxhZ3NpbWdzXCIgLz5cbiAgICAgIDwvTGluaz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZmbGFnc2xpbmtzXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9Jy8/bGFuZz1lcycgdGl0bGU9XCJlc1wiIGNvbG9yPVwic2Vjb25kYXJ5XCIgdGl0bGU9XCJFc3Bhw7FvbFwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtlc0ZsYWd9IGFsdD1cIlwiIGNsYXNzTmFtZT1cIm5hdmZsYWdzaW1nc1wiIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IC8+XG5cbiAgICAgIDxpbWcgc3JjPXthcHBsb2dvfSBhbHQ9XCJDUiBGcmFtaW5naGFtXCIgY2xhc3NOYW1lPVwibmF2bG9nb1wiIC8+XG5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZleHRlcm5hbGxpbmtzXCI+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mcmFtaW5naGFtaGVhcnRzdHVkeS5vcmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRpdGxlPVwiRnJhbWluZ2hhbSBIZWFydCBTdHVkeVwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtmaHNMb2dvfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5uaGxiaS5uaWguZ292L3NjaWVuY2UvZnJhbWluZ2hhbS1oZWFydC1zdHVkeS1maHMvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRpdGxlPVwiTmF0aW9uYWwgSW5zdGl0dXRlcyBvZiBIZWFsdGhcIj5cbiAgICAgICAgICA8aW1nIHNyYz17bmloTG9nb30gYWx0PVwiXCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRnJhbWluZ2hhbV9IZWFydF9TdHVkeVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0aXRsZT1cIldpa2lwZWRpYVwiPlxuICAgICAgICAgIDxpbWcgc3JjPXt3aWtpcGVkaWFMb2dvfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm5hdmxvZ28ge1xuICAgICAgICAgIGhlaWdodDogNy42dmg7XG4gICAgICAgICAgbWluLWhlaWdodDogNTBweDtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAubmF2bG9nbzpob3ZlciwgLm5hdmV4dGVybmFsbGlua3MgYSBpbWc6aG92ZXIge1xuICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTAlKTtcbiAgICAgICAgfVxuICAgICAgICAubmF2ZmxhZ3NpbWdzIHtcbiAgICAgICAgICBoZWlnaHQ6IDUuNXZoO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMXZoO1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5uYXZmbGFnc2ltZ3M6aG92ZXIge1xuICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMjAlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZmbGFnc2xpbmtzLCAubmF2ZXh0ZXJuYWxsaW5rcyBhOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXZ3O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmZsYWdzbGlua3MsIC5uYXZleHRlcm5hbGxpbmtzIGE6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjR2dztcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNHZ3O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmV4dGVybmFsbGlua3MgYTpmaXJzdC1jaGlsZCBpbWcge1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZleHRlcm5hbGxpbmtzIGE6bnRoLWNoaWxkKDIpIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZleHRlcm5hbGxpbmtzIGE6bnRoLWNoaWxkKDMpIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiAzMXB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkJhcihwcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxuICAgICAgICA8VG9vbGJhciBjbGFzc05hbWU9XCJ0b29sYmFyXCI+XG4gICAgICAgICAgeyh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8IDEyMDApID8gPE1vYmlsZUJhciAvPiA6IDxEZXNrdG9wQmFyIC8+fVxuICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICA8L0FwcEJhcj5cbiAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn0iXX0= */\n/*@ sourceURL=/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/src/Navbar/index.js */"));
}

function NavBar(props) {
  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    position: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "toolbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  },  true && window.innerWidth < 1200 ? __jsx(MobileBar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }) : __jsx(DesktopBar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  })))));
}

/***/ })

})
//# sourceMappingURL=index.js.5a596370b6e767ddc6c3.hot-update.js.map