(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./store/index.ts":
/*!************************!*\
  !*** ./store/index.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slices_sessionSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slices/sessionSlice */ "./store/slices/sessionSlice.ts");


var store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: {
    session: _slices_sessionSlice__WEBPACK_IMPORTED_MODULE_1__.default
  }
});

/***/ }),

/***/ "./store/slices/sessionSlice.ts":
/*!**************************************!*\
  !*** ./store/slices/sessionSlice.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sessionSlice": () => (/* binding */ sessionSlice),
/* harmony export */   "saveSession": () => (/* binding */ saveSession),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

var initialState = {
  session: ''
};
var sessionSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'session',
  initialState: initialState,
  reducers: {
    saveSession: function (state, action) {
      state.session = action.payload;
    }
  }
}); // // 处理异步
// /**
//  * 这个action返回一个函数
//  * 这个函数返回一个promise
//  */
//  export const changeColor = () => (dispatch) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       dispatch(randomColor())
//       resolve(0)
//     }, 1000)
//   })
// }

var saveSession = sessionSlice.actions.saveSession;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sessionSlice.reducer);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_dist_antd_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.min.css */ "../node_modules/antd/dist/antd.min.css");
/* harmony import */ var antd_dist_antd_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./store/index.ts");

var _jsxFileName = "D:\\Code\\mirai\\shrimp-slip-bot-web\\src\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
    store: _store__WEBPACK_IMPORTED_MODULE_4__.store,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "../node_modules/antd/dist/antd.min.css":
/*!**********************************************!*\
  !*** ../node_modules/antd/dist/antd.min.css ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDTyxJQUFJRSxLQUFLLEdBQUdGLGdFQUFjLENBQUM7QUFDOUJHLEVBQUFBLE9BQU8sRUFBRTtBQUNMQyxJQUFBQSxPQUFPLEVBQUVILHlEQUFZQTtBQURoQjtBQURxQixDQUFELENBQTFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRlA7QUFDQSxJQUFJSyxZQUFZLEdBQUc7QUFDZkYsRUFBQUEsT0FBTyxFQUFFO0FBRE0sQ0FBbkI7QUFHTyxJQUFJSCxZQUFZLEdBQUdJLDZEQUFXLENBQUM7QUFDbENFLEVBQUFBLElBQUksRUFBRSxTQUQ0QjtBQUVsQ0QsRUFBQUEsWUFBWSxFQUFFQSxZQUZvQjtBQUdsQ0UsRUFBQUEsUUFBUSxFQUFFO0FBQ05DLElBQUFBLFdBQVcsRUFBRSxVQUFVQyxLQUFWLEVBQWlCQyxNQUFqQixFQUF5QjtBQUNsQ0QsTUFBQUEsS0FBSyxDQUFDTixPQUFOLEdBQWdCTyxNQUFNLENBQUNDLE9BQXZCO0FBQ0g7QUFISztBQUh3QixDQUFELENBQTlCLEVBU1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBSUgsV0FBVyxHQUFHUixZQUFZLENBQUNZLE9BQWIsQ0FBcUJKLFdBQXZDO0FBQ1AsaUVBQWVSLFlBQVksQ0FBQ0UsT0FBNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBRUE7QUFDQTtBQUVlLFNBQVNZLEtBQVQsQ0FBZ0I7QUFBRUMsRUFBQUEsU0FBRjtBQUFhQyxFQUFBQTtBQUFiLENBQWhCLEVBQTBDO0FBQ3ZELHNCQUFPLDhEQUFDLGlEQUFEO0FBQVUsU0FBSyxFQUFLZix5Q0FBcEI7QUFBQSwyQkFDTCw4REFBQyxTQUFELG9CQUFnQmUsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURLO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FHVkQ7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9zbGljZXMvc2Vzc2lvblNsaWNlLnRzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2Rpc3QvYW50ZC5taW4uY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9nbG9iYWxzLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgc2Vzc2lvblNsaWNlIGZyb20gJy4vc2xpY2VzL3Nlc3Npb25TbGljZSc7XHJcbmV4cG9ydCB2YXIgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgICByZWR1Y2VyOiB7XHJcbiAgICAgICAgc2Vzc2lvbjogc2Vzc2lvblNsaWNlLFxyXG4gICAgfSxcclxufSk7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbnZhciBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBzZXNzaW9uOiAnJ1xyXG59O1xyXG5leHBvcnQgdmFyIHNlc3Npb25TbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6ICdzZXNzaW9uJyxcclxuICAgIGluaXRpYWxTdGF0ZTogaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBzYXZlU2Vzc2lvbjogZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgICAgICAgc3RhdGUuc2Vzc2lvbiA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbi8vIC8vIOWkhOeQhuW8guatpVxyXG4vLyAvKipcclxuLy8gICog6L+Z5LiqYWN0aW9u6L+U5Zue5LiA5Liq5Ye95pWwXHJcbi8vICAqIOi/meS4quWHveaVsOi/lOWbnuS4gOS4qnByb21pc2VcclxuLy8gICovXHJcbi8vICBleHBvcnQgY29uc3QgY2hhbmdlQ29sb3IgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuLy8gICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4vLyAgICAgICBkaXNwYXRjaChyYW5kb21Db2xvcigpKVxyXG4vLyAgICAgICByZXNvbHZlKDApXHJcbi8vICAgICB9LCAxMDAwKVxyXG4vLyAgIH0pXHJcbi8vIH1cclxuZXhwb3J0IHZhciBzYXZlU2Vzc2lvbiA9IHNlc3Npb25TbGljZS5hY3Rpb25zLnNhdmVTZXNzaW9uO1xyXG5leHBvcnQgZGVmYXVsdCBzZXNzaW9uU2xpY2UucmVkdWNlcjtcclxuIiwiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQubWluLmNzcydcclxuXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi4vc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIDxQcm92aWRlciBzdG9yZSA9IHsgc3RvcmUgfT5cclxuICAgIDxDb21wb25lbnQgeyAuLi5wYWdlUHJvcHMgfSAvPlxyXG4gIDwvUHJvdmlkZXI+XHJcbn1cclxuIiwiIiwiIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwic2Vzc2lvblNsaWNlIiwic3RvcmUiLCJyZWR1Y2VyIiwic2Vzc2lvbiIsImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwibmFtZSIsInJlZHVjZXJzIiwic2F2ZVNlc3Npb24iLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwiUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=