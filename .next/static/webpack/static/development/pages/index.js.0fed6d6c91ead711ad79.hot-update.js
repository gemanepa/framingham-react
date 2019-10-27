webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/i18n lazy recursive ^\\.\\/.*\\.json$":
/*!*******************************************************!*\
  !*** ./src/i18n lazy ^\.\/.*\.json$ namespace object ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en.json": [
		"./src/i18n/en.json",
		3,
		1
	],
	"./es.json": [
		"./src/i18n/es.json",
		3,
		2
	],
	"./head.json": [
		"./src/i18n/head.json",
		7,
		3
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
	return __webpack_require__.e(ids[2]).then(function() {
		return __webpack_require__.t(id, ids[1])
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/i18n lazy recursive ^\\.\\/.*\\.json$";
module.exports = webpackAsyncContext;

/***/ })

})
//# sourceMappingURL=index.js.0fed6d6c91ead711ad79.hot-update.js.map