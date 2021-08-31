(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/Lottie/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Lottie/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lottie-web */ "lottie-web");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.scss */ "./src/components/Lottie/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classname__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classname */ "classname");
/* harmony import */ var classname__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classname__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "E:\\Code\\shrimp-slip-bot-web\\src\\components\\Lottie\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Lottie = ({
  params,
  className
}) => {
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (containerRef.current) {
      lottie_web__WEBPACK_IMPORTED_MODULE_2___default().loadAnimation(_objectSpread({
        container: containerRef.current
      }, params));
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    ref: containerRef,
    className: classname__WEBPACK_IMPORTED_MODULE_3___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container), className)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Lottie);

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Lottie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Lottie */ "./src/components/Lottie/index.tsx");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "E:\\Code\\shrimp-slip-bot-web\\src\\pages\\index.tsx";




const Index = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["lottie-container"]),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Lottie__WEBPACK_IMPORTED_MODULE_2__.default, {
      params: {
        path: '/lottieFiles/cat.json'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ }),

/***/ "./src/components/Lottie/index.module.scss":
/*!*************************************************!*\
  !*** ./src/components/Lottie/index.module.scss ***!
  \*************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Lottie_container__kMcqK"
};


/***/ }),

/***/ "./src/pages/index.module.scss":
/*!*************************************!*\
  !*** ./src/pages/index.module.scss ***!
  \*************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"lottie-container": "index_lottie-container__1pQyJ"
};


/***/ }),

/***/ "classname":
/*!****************************!*\
  !*** external "classname" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("classname");

/***/ }),

/***/ "lottie-web":
/*!*****************************!*\
  !*** external "lottie-web" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("lottie-web");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBS0EsTUFBTU0sTUFBc0IsR0FBSSxDQUFDO0FBQy9CQyxFQUFBQSxNQUQrQjtBQUUvQkMsRUFBQUE7QUFGK0IsQ0FBRCxLQUcxQjtBQUNKLFFBQU1DLFlBQVksR0FBR1AsNkNBQU0sRUFBM0I7QUFDQUQsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBR1EsWUFBWSxDQUFDQyxPQUFoQixFQUF5QjtBQUN2QlAsTUFBQUEsK0RBQUE7QUFDRVMsUUFBQUEsU0FBUyxFQUFFSCxZQUFZLENBQUNDO0FBRDFCLFNBRUtILE1BRkw7QUFLRDtBQUNGLEdBUlEsRUFRTixFQVJNLENBQVQ7QUFTQSxzQkFDRTtBQUFLLE9BQUcsRUFBS0UsWUFBYjtBQUE0QixhQUFTLEVBQUtKLGdEQUFFLENBQUNELHFFQUFELEVBQXNCSSxTQUF0QjtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxDQW5CRDs7QUFxQkEsaUVBQWVGLE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTU8sS0FBSyxHQUFJLE1BQU07QUFDbkIsc0JBQ0U7QUFBSyxhQUFTLEVBQUtULCtFQUFuQjtBQUFBLDJCQUNFLDhEQUFDLHVEQUFEO0FBQVEsWUFBTSxFQUFLO0FBQUVVLFFBQUFBLElBQUksRUFBRTtBQUFSO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxDQU5EOztBQVFBLGlFQUFlRCxLQUFmOzs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hyaW1wLXNsaXAtYm90LXdlYi8uL3NyYy9jb21wb25lbnRzL0xvdHRpZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vc2hyaW1wLXNsaXAtYm90LXdlYi8uL3NyYy9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vc2hyaW1wLXNsaXAtYm90LXdlYi8uL3NyYy9jb21wb25lbnRzL0xvdHRpZS9pbmRleC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9zaHJpbXAtc2xpcC1ib3Qtd2ViLy4vc3JjL3BhZ2VzL2luZGV4Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL3NocmltcC1zbGlwLWJvdC13ZWIvZXh0ZXJuYWwgXCJjbGFzc25hbWVcIiIsIndlYnBhY2s6Ly9zaHJpbXAtc2xpcC1ib3Qtd2ViL2V4dGVybmFsIFwibG90dGllLXdlYlwiIiwid2VicGFjazovL3NocmltcC1zbGlwLWJvdC13ZWIvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3NocmltcC1zbGlwLWJvdC13ZWIvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMb3R0aWVQbGF5ZXIsIHsgQW5pbWF0aW9uQ29uZmlnV2l0aERhdGEsIEFuaW1hdGlvbkNvbmZpZ1dpdGhQYXRoIH0gZnJvbSAnbG90dGllLXdlYidcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgY3MgZnJvbSAnY2xhc3NuYW1lJ1xyXG5pbnRlcmZhY2UgTG90dGllUHJvcHMge1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xyXG4gIHBhcmFtczogUGFydGlhbDxBbmltYXRpb25Db25maWdXaXRoUGF0aCB8IEFuaW1hdGlvbkNvbmZpZ1dpdGhEYXRhPlxyXG59XHJcbmNvbnN0IExvdHRpZTpGQzxMb3R0aWVQcm9wcz4gID0gKHtcclxuICBwYXJhbXMsXHJcbiAgY2xhc3NOYW1lXHJcbn0pID0+IHtcclxuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoY29udGFpbmVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgTG90dGllUGxheWVyLmxvYWRBbmltYXRpb24oe1xyXG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyUmVmLmN1cnJlbnQsXHJcbiAgICAgICAgLi4ucGFyYW1zXHJcbiAgICAgXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgcmVmID0geyBjb250YWluZXJSZWYgfSBjbGFzc05hbWUgPSB7IGNzKHN0eWxlc1snY29udGFpbmVyJ10sIGNsYXNzTmFtZSkgfT5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvdHRpZSBcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTG90dGllIGZyb20gJy4uL2NvbXBvbmVudHMvTG90dGllJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLnNjc3MnXHJcbmNvbnN0IEluZGV4ICA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWUgPSB7IHN0eWxlc1snbG90dGllLWNvbnRhaW5lciddIH0+XHJcbiAgICAgIDxMb3R0aWUgcGFyYW1zID0geyB7IHBhdGg6ICcvbG90dGllRmlsZXMvY2F0Lmpzb24nIH0gfS8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkxvdHRpZV9jb250YWluZXJfX2tNY3FLXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsb3R0aWUtY29udGFpbmVyXCI6IFwiaW5kZXhfbG90dGllLWNvbnRhaW5lcl9fMXBReUpcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb3R0aWUtd2ViXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJMb3R0aWVQbGF5ZXIiLCJzdHlsZXMiLCJjcyIsIkxvdHRpZSIsInBhcmFtcyIsImNsYXNzTmFtZSIsImNvbnRhaW5lclJlZiIsImN1cnJlbnQiLCJsb2FkQW5pbWF0aW9uIiwiY29udGFpbmVyIiwiSW5kZXgiLCJwYXRoIl0sInNvdXJjZVJvb3QiOiIifQ==