"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Lottie/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Lottie/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_Code_shrimp_slip_bot_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lottie-web */ "./node_modules/lottie-web/build/player/lottie.js");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.scss */ "./src/components/Lottie/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\Code\\shrimp-slip-bot-web\\src\\components\\Lottie\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_Code_shrimp_slip_bot_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var Lottie = function Lottie(_ref) {
  _s();

  var params = _ref.params;
  var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (containerRef.current) {
      lottie_web__WEBPACK_IMPORTED_MODULE_3___default().loadAnimation(_objectSpread({
        container: containerRef.current
      }, params));
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    ref: containerRef,
    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, _this);
};

_s(Lottie, "8puyVO4ts1RhCfXUmci3vLI3Njw=");

_c = Lottie;
/* harmony default export */ __webpack_exports__["default"] = (Lottie);

var _c;

$RefreshReg$(_c, "Lottie");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzgxZTMwNzRjYTZiZTg5NDY4ZTEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUlBLElBQU1LLE1BQXNCLEdBQUksU0FBMUJBLE1BQTBCLE9BRTFCO0FBQUE7O0FBQUEsTUFESkMsTUFDSSxRQURKQSxNQUNJO0FBQ0osTUFBTUMsWUFBWSxHQUFHTCw2Q0FBTSxFQUEzQjtBQUNBRCxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxRQUFHTSxZQUFZLENBQUNDLE9BQWhCLEVBQXlCO0FBQ3ZCTCxNQUFBQSwrREFBQTtBQUNFTyxRQUFBQSxTQUFTLEVBQUVILFlBQVksQ0FBQ0M7QUFEMUIsU0FFS0YsTUFGTDtBQUtEO0FBQ0YsR0FSUSxFQVFOLEVBUk0sQ0FBVDtBQVNBLHNCQUNFO0FBQUssT0FBRyxFQUFLQyxZQUFiO0FBQTRCLGFBQVMsRUFBS0gscUVBQU07QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FsQkQ7O0dBQU1DOztLQUFBQTtBQW9CTiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Mb3R0aWUvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExvdHRpZVBsYXllciwgeyBBbmltYXRpb25Db25maWdXaXRoRGF0YSwgQW5pbWF0aW9uQ29uZmlnV2l0aFBhdGggfSBmcm9tICdsb3R0aWUtd2ViJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLnNjc3MnXHJcbmludGVyZmFjZSBMb3R0aWVQcm9wcyB7XHJcbiAgcGFyYW1zOiBQYXJ0aWFsPEFuaW1hdGlvbkNvbmZpZ1dpdGhQYXRoIHwgQW5pbWF0aW9uQ29uZmlnV2l0aERhdGE+XHJcbn1cclxuY29uc3QgTG90dGllOkZDPExvdHRpZVByb3BzPiAgPSAoe1xyXG4gIHBhcmFtc1xyXG59KSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PigpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKGNvbnRhaW5lclJlZi5jdXJyZW50KSB7XHJcbiAgICAgIExvdHRpZVBsYXllci5sb2FkQW5pbWF0aW9uKHtcclxuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lclJlZi5jdXJyZW50LFxyXG4gICAgICAgIC4uLnBhcmFtc1xyXG4gICAgIFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHJlZiA9IHsgY29udGFpbmVyUmVmIH0gY2xhc3NOYW1lID0geyBzdHlsZXNbJ2NvbnRhaW5lciddIH0+XHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb3R0aWUgXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkxvdHRpZVBsYXllciIsInN0eWxlcyIsIkxvdHRpZSIsInBhcmFtcyIsImNvbnRhaW5lclJlZiIsImN1cnJlbnQiLCJsb2FkQW5pbWF0aW9uIiwiY29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==