(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slices_sessionSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slices/sessionSlice */ "./src/store/slices/sessionSlice.ts");


var store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: {
    session: _slices_sessionSlice__WEBPACK_IMPORTED_MODULE_1__.default
  }
});

/***/ }),

/***/ "./src/store/slices/sessionSlice.ts":
/*!******************************************!*\
  !*** ./src/store/slices/sessionSlice.ts ***!
  \******************************************/
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

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./src/styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_dist_antd_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.min.css */ "./node_modules/antd/dist/antd.min.css");
/* harmony import */ var antd_dist_antd_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./src/store/index.ts");

var _jsxFileName = "E:\\Code\\shrimp-slip-bot-web\\src\\pages\\_app.js";

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
      lineNumber: 8,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./node_modules/antd/dist/antd.min.css":
/*!*********************************************!*\
  !*** ./node_modules/antd/dist/antd.min.css ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
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
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDTyxJQUFJRSxLQUFLLEdBQUdGLGdFQUFjLENBQUM7QUFDOUJHLEVBQUFBLE9BQU8sRUFBRTtBQUNMQyxJQUFBQSxPQUFPLEVBQUVILHlEQUFZQTtBQURoQjtBQURxQixDQUFELENBQTFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRlA7QUFDQSxJQUFJSyxZQUFZLEdBQUc7QUFDZkYsRUFBQUEsT0FBTyxFQUFFO0FBRE0sQ0FBbkI7QUFHTyxJQUFJSCxZQUFZLEdBQUdJLDZEQUFXLENBQUM7QUFDbENFLEVBQUFBLElBQUksRUFBRSxTQUQ0QjtBQUVsQ0QsRUFBQUEsWUFBWSxFQUFFQSxZQUZvQjtBQUdsQ0UsRUFBQUEsUUFBUSxFQUFFO0FBQ05DLElBQUFBLFdBQVcsRUFBRSxVQUFVQyxLQUFWLEVBQWlCQyxNQUFqQixFQUF5QjtBQUNsQ0QsTUFBQUEsS0FBSyxDQUFDTixPQUFOLEdBQWdCTyxNQUFNLENBQUNDLE9BQXZCO0FBQ0g7QUFISztBQUh3QixDQUFELENBQTlCLEVBU1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBSUgsV0FBVyxHQUFHUixZQUFZLENBQUNZLE9BQWIsQ0FBcUJKLFdBQXZDO0FBQ1AsaUVBQWVSLFlBQVksQ0FBQ0UsT0FBNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBRUE7QUFDQTtBQUNlLFNBQVNZLEtBQVQsQ0FBZ0I7QUFBRUMsRUFBQUEsU0FBRjtBQUFhQyxFQUFBQTtBQUFiLENBQWhCLEVBQTBDO0FBQ3ZELHNCQUFPLDhEQUFDLGlEQUFEO0FBQVUsU0FBSyxFQUFLZix5Q0FBcEI7QUFBQSwyQkFDTCw4REFBQyxTQUFELG9CQUFnQmUsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURLO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FHVEQ7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaHJpbXAtc2xpcC1ib3Qtd2ViLy4vc3JjL3N0b3JlL2luZGV4LnRzIiwid2VicGFjazovL3NocmltcC1zbGlwLWJvdC13ZWIvLi9zcmMvc3RvcmUvc2xpY2VzL3Nlc3Npb25TbGljZS50cyIsIndlYnBhY2s6Ly9zaHJpbXAtc2xpcC1ib3Qtd2ViLy4vc3JjL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vc2hyaW1wLXNsaXAtYm90LXdlYi8uL25vZGVfbW9kdWxlcy9hbnRkL2Rpc3QvYW50ZC5taW4uY3NzIiwid2VicGFjazovL3NocmltcC1zbGlwLWJvdC13ZWIvLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzIiwid2VicGFjazovL3NocmltcC1zbGlwLWJvdC13ZWIvZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vc2hyaW1wLXNsaXAtYm90LXdlYi9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vc2hyaW1wLXNsaXAtYm90LXdlYi9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCBzZXNzaW9uU2xpY2UgZnJvbSAnLi9zbGljZXMvc2Vzc2lvblNsaWNlJztcclxuZXhwb3J0IHZhciBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICAgIHJlZHVjZXI6IHtcclxuICAgICAgICBzZXNzaW9uOiBzZXNzaW9uU2xpY2UsXHJcbiAgICB9LFxyXG59KTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxudmFyIGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHNlc3Npb246ICcnXHJcbn07XHJcbmV4cG9ydCB2YXIgc2Vzc2lvblNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ3Nlc3Npb24nLFxyXG4gICAgaW5pdGlhbFN0YXRlOiBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIHNhdmVTZXNzaW9uOiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICAgICAgICBzdGF0ZS5zZXNzaW9uID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuLy8gLy8g5aSE55CG5byC5q2lXHJcbi8vIC8qKlxyXG4vLyAgKiDov5nkuKphY3Rpb27ov5Tlm57kuIDkuKrlh73mlbBcclxuLy8gICog6L+Z5Liq5Ye95pWw6L+U5Zue5LiA5LiqcHJvbWlzZVxyXG4vLyAgKi9cclxuLy8gIGV4cG9ydCBjb25zdCBjaGFuZ2VDb2xvciA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4vLyAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4vLyAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbi8vICAgICAgIGRpc3BhdGNoKHJhbmRvbUNvbG9yKCkpXHJcbi8vICAgICAgIHJlc29sdmUoMClcclxuLy8gICAgIH0sIDEwMDApXHJcbi8vICAgfSlcclxuLy8gfVxyXG5leHBvcnQgdmFyIHNhdmVTZXNzaW9uID0gc2Vzc2lvblNsaWNlLmFjdGlvbnMuc2F2ZVNlc3Npb247XHJcbmV4cG9ydCBkZWZhdWx0IHNlc3Npb25TbGljZS5yZWR1Y2VyO1xyXG4iLCJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5taW4uY3NzJ1xyXG5cclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi9zdG9yZSdcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAgKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiA8UHJvdmlkZXIgc3RvcmUgPSB7IHN0b3JlIH0+XHJcbiAgICA8Q29tcG9uZW50IHsgLi4ucGFnZVByb3BzIH0gLz5cclxuICA8L1Byb3ZpZGVyPlxyXG59XHJcbiIsIiIsIiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsInNlc3Npb25TbGljZSIsInN0b3JlIiwicmVkdWNlciIsInNlc3Npb24iLCJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNhdmVTZXNzaW9uIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWN0aW9ucyIsIlByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9