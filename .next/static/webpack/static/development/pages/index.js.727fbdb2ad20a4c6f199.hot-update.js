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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Link_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Link.js */ "./src/Link.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _static_flags_en_flag_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../static/flags/en-flag.png */ "./static/flags/en-flag.png");
/* harmony import */ var _static_flags_en_flag_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_flags_en_flag_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _static_flags_es_flag_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../static/flags/es-flag.png */ "./static/flags/es-flag.png");
/* harmony import */ var _static_flags_es_flag_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_static_flags_es_flag_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _static_logos_fhslogo_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../static/logos/fhslogo.png */ "./static/logos/fhslogo.png");
/* harmony import */ var _static_logos_fhslogo_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_static_logos_fhslogo_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _static_logos_nihlogo_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../static/logos/nihlogo.png */ "./static/logos/nihlogo.png");
/* harmony import */ var _static_logos_nihlogo_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_static_logos_nihlogo_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _static_logos_wikipedialogo3_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../static/logos/wikipedialogo3.png */ "./static/logos/wikipedialogo3.png");
/* harmony import */ var _static_logos_wikipedialogo3_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_static_logos_wikipedialogo3_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _static_icons_languages_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../static/icons/languages.png */ "./static/icons/languages.png");
/* harmony import */ var _static_icons_languages_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_static_icons_languages_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _static_icons_external_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../../static/icons/external.png */ "./static/icons/external.png");
/* harmony import */ var _static_icons_external_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_static_icons_external_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");


var _jsxFileName = "/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/src/Navbar/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;


















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
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
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      padding: 0,
      borderColor: 'transparent',
      border: 0
    }
  };
});
var StyledMenu = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])({
  paper: {
    border: '1px solid #d3d4d5'
  }
})(function (props) {
  return __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_17__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
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
      lineNumber: 47
    },
    __self: this
  }));
});
var StyledMenuItem = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(function (theme) {
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
})(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_18__["default"]);
function CustomizedMenus(props) {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  return __jsx("div", {
    className: "jsx-1754208526",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: props.type === 'language' ? "Cambiar idioma" : "Links externos",
    "aria-controls": "customized-menu",
    "aria-haspopup": "true",
    variant: "contained",
    color: "primary",
    onClick: handleClick,
    className: classes.langmenuButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("img", {
    src: props.type === 'language' ? _static_icons_languages_png__WEBPACK_IMPORTED_MODULE_15___default.a : _static_icons_external_png__WEBPACK_IMPORTED_MODULE_16___default.a,
    alt: "",
    className: "jsx-1754208526" + " " + "langmenuimg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
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
      lineNumber: 102
    },
    __self: this
  }, props.type === 'language' ? __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_Link_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/?lang=en",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx(StyledMenuItem, {
    onClick: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_19__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx("img", {
    src: _static_flags_en_flag_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "",
    className: "jsx-1754208526" + " " + "navflagsimgs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_20__["default"], {
    primary: "English",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }))), __jsx(_Link_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/?lang=es",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(StyledMenuItem, {
    onClick: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_19__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx("img", {
    src: _static_flags_es_flag_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: "",
    className: "jsx-1754208526" + " " + "navflagsimgs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_20__["default"], {
    primary: "Espa\xF1ol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  })))) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("a", {
    href: "https://www.framinghamheartstudy.org/",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Framingham Heart Study",
    className: "jsx-1754208526",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx(StyledMenuItem, {
    onClick: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_19__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx("img", {
    src: _static_logos_fhslogo_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "",
    className: "jsx-1754208526" + " " + "fshlogo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_20__["default"], {
    primary: "FHS",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }))), __jsx("a", {
    href: "https://www.nhlbi.nih.gov/science/framingham-heart-study-fhs/",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "National Institutes of Health",
    className: "jsx-1754208526",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx(StyledMenuItem, {
    onClick: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_19__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx("img", {
    src: _static_logos_nihlogo_png__WEBPACK_IMPORTED_MODULE_13___default.a,
    alt: "",
    className: "jsx-1754208526" + " " + "nihlogo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_20__["default"], {
    primary: "NIH",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }))), __jsx("a", {
    href: "https://en.wikipedia.org/wiki/Framingham_Heart_Study",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Wikipedia",
    className: "jsx-1754208526",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx(StyledMenuItem, {
    onClick: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_19__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx("img", {
    src: _static_logos_wikipedialogo3_png__WEBPACK_IMPORTED_MODULE_14___default.a,
    alt: "",
    className: "jsx-1754208526" + " " + "wikilogo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_20__["default"], {
    primary: "Wikipedia",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1754208526",
    __self: this
  }, ".langmenuimg.jsx-1754208526:hover{-webkit-filter:brightness(120%);filter:brightness(120%);}.fshlogo.jsx-1754208526{height:40px;width:auto;}.nihlogo.jsx-1754208526{height:30px;width:auto;margin-bottom:5px;}.wikilogo.jsx-1754208526{height:31px;width:auto;margin-bottom:3px;}@media (max-width:1199px){.langmenuimg.jsx-1754208526{height:50px;width:auto;}.navflagsimgs.jsx-1754208526{height:40px;width:auto;}}@media (min-width:1200px){.langmenuimg.jsx-1754208526{height:10vh;min-height:65px;width:auto;}.navflagsimgs.jsx-1754208526{height:5.5vh;min-height:35px;margin-top:-0.5vh;width:auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlbWFuZXBhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm95ZWN0b3MvUmVhY3QvZnJhbWluZ2hhbS1yZWFjdC1wd2Evc3JjL05hdmJhci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2SmtCLEFBR21DLEFBR1osQUFLQSxBQU1BLEFBTUUsQUFJQSxBQU1BLEFBS0MsWUEvQkosQUFLQSxBQU1BLEFBTUUsQUFJQSxBQU1LLENBS0EsVUEvQnBCLEFBS29CLEFBTUEsQUFNbEIsQUFJQSxLQU1hLENBS08sVUFKcEIsRUF0QkYsQUFNQSxNQXFCZSxTQXJDZixFQXNDRSIsImZpbGUiOiIvaG9tZS9nZW1hbmVwYS9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvUHJveWVjdG9zL1JlYWN0L2ZyYW1pbmdoYW0tcmVhY3QtcHdhL3NyYy9OYXZiYXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgTGluayBmcm9tICcuLi9MaW5rLmpzJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgZW5GbGFnIGZyb20gJy4vLi4vLi4vc3RhdGljL2ZsYWdzL2VuLWZsYWcucG5nJztcbmltcG9ydCBlc0ZsYWcgZnJvbSAnLi8uLi8uLi9zdGF0aWMvZmxhZ3MvZXMtZmxhZy5wbmcnO1xuaW1wb3J0IGZoc0xvZ28gZnJvbSAnLi8uLi8uLi9zdGF0aWMvbG9nb3MvZmhzbG9nby5wbmcnO1xuaW1wb3J0IG5paExvZ28gZnJvbSAnLi8uLi8uLi9zdGF0aWMvbG9nb3MvbmlobG9nby5wbmcnO1xuaW1wb3J0IHdpa2lwZWRpYUxvZ28gZnJvbSAnLi8uLi8uLi9zdGF0aWMvbG9nb3Mvd2lraXBlZGlhbG9nbzMucG5nJztcbmltcG9ydCBsYW5ndWFnZXNJY29uIGZyb20gJy4vLi4vLi4vc3RhdGljL2ljb25zL2xhbmd1YWdlcy5wbmcnO1xuaW1wb3J0IGV4dGVybmFsSWNvbiBmcm9tICcuLy4uLy4uL3N0YXRpYy9pY29ucy9leHRlcm5hbC5wbmcnXG5pbXBvcnQgTWVudSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51JztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvbic7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XG5cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG4gIG1lbnVCdXR0b246IHtcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgfSxcbiAgbGFuZ21lbnVCdXR0b246IHtcbiAgICBtYXJnaW5Ub3A6IDAsXG4gICAgbWFyZ2luQm90dG9tOiAwLFxuICAgIG1hcmdpbkxlZnQ6IDAsXG4gICAgbWFyZ2luUmlnaHQ6IDAsXG4gICAgcGFkZGluZzogMCxcbiAgICBib3JkZXJDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICBib3JkZXI6IDBcbiAgfVxufSkpO1xuXG5jb25zdCBTdHlsZWRNZW51ID0gd2l0aFN0eWxlcyh7XG4gIHBhcGVyOiB7XG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkM2Q0ZDUnLFxuICB9LFxufSkocHJvcHMgPT4gKFxuICA8TWVudVxuICAgIGVsZXZhdGlvbj17MH1cbiAgICBnZXRDb250ZW50QW5jaG9yRWw9e251bGx9XG4gICAgYW5jaG9yT3JpZ2luPXt7XG4gICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXG4gICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcbiAgICB9fVxuICAgIHRyYW5zZm9ybU9yaWdpbj17e1xuICAgICAgdmVydGljYWw6ICd0b3AnLFxuICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcicsXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKTtcblxuY29uc3QgU3R5bGVkTWVudUl0ZW0gPSB3aXRoU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICAnJjpmb2N1cyc6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICAnJiAuTXVpTGlzdEl0ZW1JY29uLXJvb3QsICYgLk11aUxpc3RJdGVtVGV4dC1wcmltYXJ5Jzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KSkoTWVudUl0ZW0pO1xuXG5leHBvcnQgZnVuY3Rpb24gQ3VzdG9taXplZE1lbnVzKHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IGV2ZW50ID0+IHtcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRBbmNob3JFbChudWxsKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBcbiAgICAgIDxCdXR0b24gXG4gICAgICAgIHRpdGxlPXtwcm9wcy50eXBlID09PSAnbGFuZ3VhZ2UnID8gXCJDYW1iaWFyIGlkaW9tYVwiIDogXCJMaW5rcyBleHRlcm5vc1wifVxuICAgICAgICBhcmlhLWNvbnRyb2xzPVwiY3VzdG9taXplZC1tZW51XCJcbiAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sYW5nbWVudUJ1dHRvbn0+XG4gICAgICAgICAgPGltZyBcbiAgICAgICAgICAgIHNyYz17cHJvcHMudHlwZSA9PT0gJ2xhbmd1YWdlJyA/IGxhbmd1YWdlc0ljb24gOiBleHRlcm5hbEljb259XG4gICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibGFuZ21lbnVpbWdcIlxuICAgICAgICAgIC8+XG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxTdHlsZWRNZW51XG4gICAgICAgIGlkPVwiY3VzdG9taXplZC1tZW51XCJcbiAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxuICAgICAgICBrZWVwTW91bnRlZFxuICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICA+XG4gICAgICB7IHByb3BzLnR5cGUgPT09ICdsYW5ndWFnZScgP1xuICAgICAgPD5cbiAgICAgICAgPExpbmsgaHJlZj0nLz9sYW5nPWVuJyBjb2xvcj1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgPFN0eWxlZE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZW5GbGFnfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJuYXZmbGFnc2ltZ3NcIiAvPlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRW5nbGlzaFwiIC8+XG4gICAgICAgICAgICA8L1N0eWxlZE1lbnVJdGVtPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPScvP2xhbmc9ZXMnIGNvbG9yPVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICA8U3R5bGVkTWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtlc0ZsYWd9IGFsdD1cIlwiIGNsYXNzTmFtZT1cIm5hdmZsYWdzaW1nc1wiIC8+XG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJFc3Bhw7FvbFwiIC8+XG4gICAgICAgICAgICA8L1N0eWxlZE1lbnVJdGVtPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgIDwvPlxuICAgICAgICA6XG4gICAgICA8PlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZnJhbWluZ2hhbWhlYXJ0c3R1ZHkub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0aXRsZT1cIkZyYW1pbmdoYW0gSGVhcnQgU3R1ZHlcIj5cbiAgICAgICAgICA8U3R5bGVkTWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2Zoc0xvZ299IGFsdD1cIlwiIGNsYXNzTmFtZT1cImZzaGxvZ29cIiAvPlxuICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJGSFNcIiAvPlxuICAgICAgICAgIDwvU3R5bGVkTWVudUl0ZW0+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5obGJpLm5paC5nb3Yvc2NpZW5jZS9mcmFtaW5naGFtLWhlYXJ0LXN0dWR5LWZocy9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGl0bGU9XCJOYXRpb25hbCBJbnN0aXR1dGVzIG9mIEhlYWx0aFwiPlxuICAgICAgICAgIDxTdHlsZWRNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17bmloTG9nb30gYWx0PVwiXCIgY2xhc3NOYW1lPVwibmlobG9nb1wiIC8+XG4gICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIk5JSFwiIC8+XG4gICAgICAgICAgPC9TdHlsZWRNZW51SXRlbT5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRnJhbWluZ2hhbV9IZWFydF9TdHVkeVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0aXRsZT1cIldpa2lwZWRpYVwiPlxuICAgICAgICAgIDxTdHlsZWRNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17d2lraXBlZGlhTG9nb30gYWx0PVwiXCIgY2xhc3NOYW1lPVwid2lraWxvZ29cIiAvPlxuICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJXaWtpcGVkaWFcIiAvPlxuICAgICAgICAgIDwvU3R5bGVkTWVudUl0ZW0+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvPlxuICAgICAgfVxuXG4gICAgICA8L1N0eWxlZE1lbnU+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5sYW5nbWVudWltZzpob3ZlciB7XG4gICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEyMCUpO1xuICAgICAgICB9XG4gICAgICAgIC5mc2hsb2dvIHtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAubmlobG9nbyB7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53aWtpbG9nbyB7XG4gICAgICAgICAgaGVpZ2h0OiAzMXB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgICAgLmxhbmdtZW51aW1nIHtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2ZmxhZ3NpbWdzIHtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgICAgLmxhbmdtZW51aW1nIHtcbiAgICAgICAgICAgIGhlaWdodDogMTB2aDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDY1cHg7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdmZsYWdzaW1ncyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDUuNXZoO1xuICAgICAgICAgICAgbWluLWhlaWdodDogMzVweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0wLjV2aDtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cbmZ1bmN0aW9uIE1vYmlsZUJhcigpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q3VzdG9taXplZE1lbnVzIHR5cGU9XCJsYW5ndWFnZVwiLz5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gLz5cbiAgICAgIDxDdXN0b21pemVkTWVudXMgdHlwZT1cImVsaW5rc1wiLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZCYXIoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCI+XG4gICAgICAgIDxUb29sYmFyIGNsYXNzTmFtZT1cInRvb2xiYXJcIj5cbiAgICAgICAgICA8TW9iaWxlQmFyIC8+XG4gICAgICAgIDwvVG9vbGJhcj5cbiAgICAgIDwvQXBwQmFyPlxuICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufSJdfQ== */\n/*@ sourceURL=/home/gemanepa/Documents/Development/Proyectos/React/framingham-react-pwa/src/Navbar/index.js */"));
}

function MobileBar() {
  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(CustomizedMenus, {
    type: "language",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h6",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }), __jsx(CustomizedMenus, {
    type: "elinks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }));
}

function NavBar() {
  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    position: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "toolbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, __jsx(MobileBar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  })))));
}

/***/ })

})
//# sourceMappingURL=index.js.727fbdb2ad20a4c6f199.hot-update.js.map