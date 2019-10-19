webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/translations lazy recursive ^\\.\\/.*\\.js$":
/*!*************************************************************!*\
  !*** ./src/translations lazy ^\.\/.*\.js$ namespace object ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en.js": [
		"./src/translations/en.js",
		1
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/translations lazy recursive ^\\.\\/.*\\.js$";
module.exports = webpackAsyncContext;

/***/ })

})
//# sourceMappingURL=index.js.be6e39698a293c2beccf.hot-update.js.map