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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./src/store/index.ts");

var _jsxFileName = "E:\\Code\\shrimp-slip-bot-web\\src\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
    store: _store__WEBPACK_IMPORTED_MODULE_5__.store,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDTyxJQUFJRSxLQUFLLEdBQUdGLGdFQUFjLENBQUM7QUFDOUJHLEVBQUFBLE9BQU8sRUFBRTtBQUNMQyxJQUFBQSxPQUFPLEVBQUVILHlEQUFZQTtBQURoQjtBQURxQixDQUFELENBQTFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRlA7QUFDQSxJQUFJSyxZQUFZLEdBQUc7QUFDZkYsRUFBQUEsT0FBTyxFQUFFO0FBRE0sQ0FBbkI7QUFHTyxJQUFJSCxZQUFZLEdBQUdJLDZEQUFXLENBQUM7QUFDbENFLEVBQUFBLElBQUksRUFBRSxTQUQ0QjtBQUVsQ0QsRUFBQUEsWUFBWSxFQUFFQSxZQUZvQjtBQUdsQ0UsRUFBQUEsUUFBUSxFQUFFO0FBQ05DLElBQUFBLFdBQVcsRUFBRSxVQUFVQyxLQUFWLEVBQWlCQyxNQUFqQixFQUF5QjtBQUNsQ0QsTUFBQUEsS0FBSyxDQUFDTixPQUFOLEdBQWdCTyxNQUFNLENBQUNDLE9BQXZCO0FBQ0g7QUFISztBQUh3QixDQUFELENBQTlCLEVBU1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBSUgsV0FBVyxHQUFHUixZQUFZLENBQUNZLE9BQWIsQ0FBcUJKLFdBQXZDO0FBQ1AsaUVBQWVSLFlBQVksQ0FBQ0UsT0FBNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSxTQUFTYSxLQUFULENBQWdCO0FBQUVDLEVBQUFBLFNBQUY7QUFBYUMsRUFBQUE7QUFBYixDQUFoQixFQUEwQztBQUN2RCxzQkFBTyw4REFBQyxpREFBRDtBQUFVLFNBQUssRUFBS2hCLHlDQUFwQjtBQUFBLDRCQUNMLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBTSxXQUFHLEVBQUcsWUFBWjtBQUF5QixZQUFJLEVBQUc7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESyxlQUlMLDhEQUFDLFNBQUQsb0JBQWdCZ0IsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBTUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NocmltcC1zbGlwLWJvdC13ZWIvLi9zcmMvc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc2hyaW1wLXNsaXAtYm90LXdlYi8uL3NyYy9zdG9yZS9zbGljZXMvc2Vzc2lvblNsaWNlLnRzIiwid2VicGFjazovL3NocmltcC1zbGlwLWJvdC13ZWIvLi9zcmMvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9zaHJpbXAtc2xpcC1ib3Qtd2ViL2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovL3NocmltcC1zbGlwLWJvdC13ZWIvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9zaHJpbXAtc2xpcC1ib3Qtd2ViL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9zaHJpbXAtc2xpcC1ib3Qtd2ViL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHNlc3Npb25TbGljZSBmcm9tICcuL3NsaWNlcy9zZXNzaW9uU2xpY2UnO1xyXG5leHBvcnQgdmFyIHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xyXG4gICAgcmVkdWNlcjoge1xyXG4gICAgICAgIHNlc3Npb246IHNlc3Npb25TbGljZSxcclxuICAgIH0sXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG52YXIgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgc2Vzc2lvbjogJydcclxufTtcclxuZXhwb3J0IHZhciBzZXNzaW9uU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiAnc2Vzc2lvbicsXHJcbiAgICBpbml0aWFsU3RhdGU6IGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgc2F2ZVNlc3Npb246IGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnNlc3Npb24gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4vLyAvLyDlpITnkIblvILmraVcclxuLy8gLyoqXHJcbi8vICAqIOi/meS4qmFjdGlvbui/lOWbnuS4gOS4quWHveaVsFxyXG4vLyAgKiDov5nkuKrlh73mlbDov5Tlm57kuIDkuKpwcm9taXNlXHJcbi8vICAqL1xyXG4vLyAgZXhwb3J0IGNvbnN0IGNoYW5nZUNvbG9yID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbi8vICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbi8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuLy8gICAgICAgZGlzcGF0Y2gocmFuZG9tQ29sb3IoKSlcclxuLy8gICAgICAgcmVzb2x2ZSgwKVxyXG4vLyAgICAgfSwgMTAwMClcclxuLy8gICB9KVxyXG4vLyB9XHJcbmV4cG9ydCB2YXIgc2F2ZVNlc3Npb24gPSBzZXNzaW9uU2xpY2UuYWN0aW9ucy5zYXZlU2Vzc2lvbjtcclxuZXhwb3J0IGRlZmF1bHQgc2Vzc2lvblNsaWNlLnJlZHVjZXI7XHJcbiIsImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLm1pbi5jc3MnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi9zdG9yZSdcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAgKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiA8UHJvdmlkZXIgc3RvcmUgPSB7IHN0b3JlIH0+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPGxpbmsgcmVsID0gXCJzdHlsZXNoZWV0XCIgaHJlZiA9IFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDUwMCw3MDAmZGlzcGxheT1zd2FwXCIgLz5cclxuICAgIDwvSGVhZD5cclxuICAgIDxDb21wb25lbnQgeyAuLi5wYWdlUHJvcHMgfSAvPlxyXG4gIDwvUHJvdmlkZXI+XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsInNlc3Npb25TbGljZSIsInN0b3JlIiwicmVkdWNlciIsInNlc3Npb24iLCJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNhdmVTZXNzaW9uIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWN0aW9ucyIsIkhlYWQiLCJQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==