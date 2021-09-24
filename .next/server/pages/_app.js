(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/api/graphql/index.ts":
/*!**********************************!*\
  !*** ./src/api/graphql/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client/link/context */ "@apollo/client/link/context");
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/link/error */ "@apollo/client/link/error");
/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_2__);
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};




var dev = true;
var httpLink = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.createHttpLink)({
  uri: '/graphql'
});
var errorLink = (0,_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_2__.onError)(function (_a) {
  var graphQLErrors = _a.graphQLErrors,
      networkError = _a.networkError;
  if (graphQLErrors) graphQLErrors.forEach(function (_a) {
    var message = _a.message,
        locations = _a.locations,
        path = _a.path,
        extensions = _a.extensions;

    if (extensions.code === 'FORBIDDEN') {
      console.log('token有问题');
    }
  });
  if (networkError) console.log("[Network error]: " + networkError);
});
var authLink = (0,_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_1__.setContext)(function (_, _a) {
  var headers = _a.headers; // get the authentication token from local storage if it exists

  var token = localStorage.getItem('token'); // return the headers to the context so httpLink can read them

  return {
    headers: __assign(__assign({}, headers), {
      authorization: token ? "Bearer " + token : ''
    })
  };
});
var client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
  link: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.from)([authLink, errorLink, httpLink]),
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);

/***/ }),

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
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api_graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/graphql */ "./src/api/graphql/index.ts");

var _jsxFileName = "D:\\Code\\mirai\\shrimp-slip-bot-web\\src\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_6__.ApolloProvider, {
    client: _api_graphql__WEBPACK_IMPORTED_MODULE_7__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
      store: _store__WEBPACK_IMPORTED_MODULE_5__.store,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
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

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/link/context":
/*!**********************************************!*\
  !*** external "@apollo/client/link/context" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/link/context");

/***/ }),

/***/ "@apollo/client/link/error":
/*!********************************************!*\
  !*** external "@apollo/client/link/error" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/link/error");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLEVBQUcsWUFBWjtBQUF5QixjQUFJLEVBQUc7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFLDhEQUFDLFNBQUQsb0JBQWdCaUIsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURLO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQVFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FHbkJEOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hyaW1wLXNsaXAtYm90LXdlYi8uL3NyYy9hcGkvZ3JhcGhxbC9pbmRleC50cyIsIndlYnBhY2s6Ly9zaHJpbXAtc2xpcC1ib3Qtd2ViLy4vc3JjL3N0b3JlL2luZGV4LnRzIiwid2VicGFjazovL3NocmltcC1zbGlwLWJvdC13ZWIvLi9zcmMvc3RvcmUvc2xpY2VzL3Nlc3Npb25TbGljZS50cyIsIndlYnBhY2s6Ly9zaHJpbXAtc2xpcC1ib3Qtd2ViLy4vc3JjL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vc2hyaW1wLXNsaXAtYm90LXdlYi8uL25vZGVfbW9kdWxlcy9hbnRkL2Rpc3QvYW50ZC5taW4uY3NzIiwid2VicGFjazovL3NocmltcC1zbGlwLWJvdC13ZWIvLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzIiwid2VicGFjazovL3NocmltcC1zbGlwLWJvdC13ZWIvZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovL3NocmltcC1zbGlwLWJvdC13ZWIvZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudC9saW5rL2NvbnRleHRcIiIsIndlYnBhY2s6Ly9zaHJpbXAtc2xpcC1ib3Qtd2ViL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnQvbGluay9lcnJvclwiIiwid2VicGFjazovL3NocmltcC1zbGlwLWJvdC13ZWIvZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vc2hyaW1wLXNsaXAtYm90LXdlYi9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3NocmltcC1zbGlwLWJvdC13ZWIvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL3NocmltcC1zbGlwLWJvdC13ZWIvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbmltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSwgY3JlYXRlSHR0cExpbmssIGZyb20gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCB7IHNldENvbnRleHQgfSBmcm9tICdAYXBvbGxvL2NsaWVudC9saW5rL2NvbnRleHQnO1xyXG5pbXBvcnQgeyBvbkVycm9yIH0gZnJvbSAnQGFwb2xsby9jbGllbnQvbGluay9lcnJvcic7XHJcbnZhciBkZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nO1xyXG52YXIgaHR0cExpbmsgPSBjcmVhdGVIdHRwTGluayh7XHJcbiAgICB1cmk6ICcvZ3JhcGhxbCcsXHJcbn0pO1xyXG52YXIgZXJyb3JMaW5rID0gb25FcnJvcihmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciBncmFwaFFMRXJyb3JzID0gX2EuZ3JhcGhRTEVycm9ycywgbmV0d29ya0Vycm9yID0gX2EubmV0d29ya0Vycm9yO1xyXG4gICAgaWYgKGdyYXBoUUxFcnJvcnMpXHJcbiAgICAgICAgZ3JhcGhRTEVycm9ycy5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICB2YXIgbWVzc2FnZSA9IF9hLm1lc3NhZ2UsIGxvY2F0aW9ucyA9IF9hLmxvY2F0aW9ucywgcGF0aCA9IF9hLnBhdGgsIGV4dGVuc2lvbnMgPSBfYS5leHRlbnNpb25zO1xyXG4gICAgICAgICAgICBpZiAoZXh0ZW5zaW9ucy5jb2RlID09PSAnRk9SQklEREVOJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rva2Vu5pyJ6Zeu6aKYJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIGlmIChuZXR3b3JrRXJyb3IpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJbTmV0d29yayBlcnJvcl06IFwiICsgbmV0d29ya0Vycm9yKTtcclxufSk7XHJcbnZhciBhdXRoTGluayA9IHNldENvbnRleHQoZnVuY3Rpb24gKF8sIF9hKSB7XHJcbiAgICB2YXIgaGVhZGVycyA9IF9hLmhlYWRlcnM7XHJcbiAgICAvLyBnZXQgdGhlIGF1dGhlbnRpY2F0aW9uIHRva2VuIGZyb20gbG9jYWwgc3RvcmFnZSBpZiBpdCBleGlzdHNcclxuICAgIHZhciB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgLy8gcmV0dXJuIHRoZSBoZWFkZXJzIHRvIHRoZSBjb250ZXh0IHNvIGh0dHBMaW5rIGNhbiByZWFkIHRoZW1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaGVhZGVyczogX19hc3NpZ24oX19hc3NpZ24oe30sIGhlYWRlcnMpLCB7IGF1dGhvcml6YXRpb246IHRva2VuID8gXCJCZWFyZXIgXCIgKyB0b2tlbiA6ICcnIH0pXHJcbiAgICB9O1xyXG59KTtcclxudmFyIGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gICAgbGluazogZnJvbShbYXV0aExpbmssIGVycm9yTGluaywgaHR0cExpbmtdKSxcclxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50O1xyXG4iLCJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgc2Vzc2lvblNsaWNlIGZyb20gJy4vc2xpY2VzL3Nlc3Npb25TbGljZSc7XHJcbmV4cG9ydCB2YXIgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgICByZWR1Y2VyOiB7XHJcbiAgICAgICAgc2Vzc2lvbjogc2Vzc2lvblNsaWNlLFxyXG4gICAgfSxcclxufSk7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbnZhciBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBzZXNzaW9uOiAnJ1xyXG59O1xyXG5leHBvcnQgdmFyIHNlc3Npb25TbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6ICdzZXNzaW9uJyxcclxuICAgIGluaXRpYWxTdGF0ZTogaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBzYXZlU2Vzc2lvbjogZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgICAgICAgc3RhdGUuc2Vzc2lvbiA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbi8vIC8vIOWkhOeQhuW8guatpVxyXG4vLyAvKipcclxuLy8gICog6L+Z5LiqYWN0aW9u6L+U5Zue5LiA5Liq5Ye95pWwXHJcbi8vICAqIOi/meS4quWHveaVsOi/lOWbnuS4gOS4qnByb21pc2VcclxuLy8gICovXHJcbi8vICBleHBvcnQgY29uc3QgY2hhbmdlQ29sb3IgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuLy8gICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4vLyAgICAgICBkaXNwYXRjaChyYW5kb21Db2xvcigpKVxyXG4vLyAgICAgICByZXNvbHZlKDApXHJcbi8vICAgICB9LCAxMDAwKVxyXG4vLyAgIH0pXHJcbi8vIH1cclxuZXhwb3J0IHZhciBzYXZlU2Vzc2lvbiA9IHNlc3Npb25TbGljZS5hY3Rpb25zLnNhdmVTZXNzaW9uO1xyXG5leHBvcnQgZGVmYXVsdCBzZXNzaW9uU2xpY2UucmVkdWNlcjtcclxuIiwiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQubWluLmNzcydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uL3N0b3JlJ1xyXG5pbXBvcnQge1xyXG4gIEFwb2xsb1Byb3ZpZGVyLFxyXG59IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xyXG5pbXBvcnQgQXBvbGxvQ2xpZW50IGZyb20gJy4uL2FwaS9ncmFwaHFsJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAgKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiA8QXBvbGxvUHJvdmlkZXIgY2xpZW50ID0geyBBcG9sbG9DbGllbnQgfT5cclxuICAgIDxQcm92aWRlciBzdG9yZSA9IHsgc3RvcmUgfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsID0gXCJzdHlsZXNoZWV0XCIgaHJlZiA9IFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDUwMCw3MDAmZGlzcGxheT1zd2FwXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Q29tcG9uZW50IHsgLi4ucGFnZVByb3BzIH0gLz5cclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgPC9BcG9sbG9Qcm92aWRlcj5cclxufVxyXG4iLCIiLCIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudC9saW5rL2NvbnRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnQvbGluay9lcnJvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIl9fYXNzaWduIiwiT2JqZWN0IiwiYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsIkFwb2xsb0NsaWVudCIsIkluTWVtb3J5Q2FjaGUiLCJjcmVhdGVIdHRwTGluayIsImZyb20iLCJzZXRDb250ZXh0Iiwib25FcnJvciIsImRldiIsImh0dHBMaW5rIiwidXJpIiwiZXJyb3JMaW5rIiwiX2EiLCJncmFwaFFMRXJyb3JzIiwibmV0d29ya0Vycm9yIiwiZm9yRWFjaCIsIm1lc3NhZ2UiLCJsb2NhdGlvbnMiLCJwYXRoIiwiZXh0ZW5zaW9ucyIsImNvZGUiLCJjb25zb2xlIiwibG9nIiwiYXV0aExpbmsiLCJfIiwiaGVhZGVycyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImF1dGhvcml6YXRpb24iLCJjbGllbnQiLCJsaW5rIiwiY2FjaGUiLCJjb25maWd1cmVTdG9yZSIsInNlc3Npb25TbGljZSIsInN0b3JlIiwicmVkdWNlciIsInNlc3Npb24iLCJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNhdmVTZXNzaW9uIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWN0aW9ucyIsIkhlYWQiLCJQcm92aWRlciIsIkFwb2xsb1Byb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9