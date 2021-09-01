"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_Code_shrimp_slip_bot_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Lottie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Lottie */ "./src/components/Lottie/index.tsx");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "E:\\Code\\shrimp-slip-bot-web\\src\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var count = 0;
var timer = 0;

var Index = function Index() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      lottieInstance = _useState[0],
      setLottieInstance = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      touchCount = _useState2[0],
      setTouchCount = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      isTouch = _useState3[0],
      setIsTouch = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      isActive = _useState4[0],
      setIsActive = _useState4[1];

  var getLottieInstance = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (ins) {
    return setLottieInstance(ins);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (lottieInstance) {
      lottieInstance.playSegments([0, 390], false);
      lottieInstance.loop = true;
    }
  }, [lottieInstance]);
  var onMouseMove = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(lodash_throttle__WEBPACK_IMPORTED_MODULE_4___default()(function (e) {
    setIsTouch(true);
    setTouchCount(++count);
    console.log(count);
  }, 1000, {
    leading: true
  }), []);
  var onMouseLeave = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {
    onMouseMove.flush();
    setTouchCount(0);
    count = 0;
    setIsTouch(false);
    setIsActive(false);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (!isActive && (lottieInstance === null || lottieInstance === void 0 ? void 0 : lottieInstance.currentFrame) <= 390 && touchCount >= 3) {
      lottieInstance.playSegments([390, 480], true);
      lottieInstance.loop = false;
    }
  }, [touchCount, lottieInstance, isActive]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (!isTouch && lottieInstance) {
      clearTimeout(timer);
      timer = window.setTimeout(function () {
        lottieInstance.playSegments([0, 390], true);
        lottieInstance.loop = true;
        setIsActive(true);
      }, 2000);
    }
  }, [isTouch, lottieInstance]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onMouseMove: onMouseMove,
        onMouseLeave: onMouseLeave,
        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default()["lottie-container"]),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Lottie__WEBPACK_IMPORTED_MODULE_3__.default, {
          onPlayerReady: getLottieInstance,
          params: {
            path: '/lottieFiles/cat.json',
            loop: true,
            autoplay: false
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default().login), (0,E_Code_shrimp_slip_bot_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, (_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default()["login-active"]), isActive))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(Index, "Kfe5GWhakAsxLSf9a0JRo5jq1Wg=");

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzAwOWQ0MzQ5NWFiYTkwY2RjN2QuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlRLEtBQUssR0FBRyxDQUFaO0FBQ0EsSUFBSUMsS0FBSyxHQUFHLENBQVo7O0FBQ0EsSUFBTUMsS0FBSyxHQUFJLFNBQVRBLEtBQVMsR0FBTTtBQUFBOztBQUFBLGtCQUN5QlAsK0NBQVEsQ0FBZ0IsSUFBaEIsQ0FEakM7QUFBQSxNQUNaUSxjQURZO0FBQUEsTUFDSUMsaUJBREo7O0FBQUEsbUJBRWlCVCwrQ0FBUSxDQUFTLENBQVQsQ0FGekI7QUFBQSxNQUVaVSxVQUZZO0FBQUEsTUFFQUMsYUFGQTs7QUFBQSxtQkFHV1gsK0NBQVEsQ0FBVSxLQUFWLENBSG5CO0FBQUEsTUFHWlksT0FIWTtBQUFBLE1BR0hDLFVBSEc7O0FBQUEsbUJBSWFiLCtDQUFRLENBQVUsS0FBVixDQUpyQjtBQUFBLE1BSVpjLFFBSlk7QUFBQSxNQUlGQyxXQUpFOztBQUtuQixNQUFNQyxpQkFBaUIsR0FBR2xCLGtEQUFXLENBQUMsVUFBQ21CLEdBQUQ7QUFBQSxXQUF3QlIsaUJBQWlCLENBQUNRLEdBQUQsQ0FBekM7QUFBQSxHQUFELEVBQWlELEVBQWpELENBQXJDO0FBRUFsQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxRQUFHUyxjQUFILEVBQW1CO0FBQ2pCQSxNQUFBQSxjQUFjLENBQUNVLFlBQWYsQ0FDRSxDQUFDLENBQUQsRUFBSSxHQUFKLENBREYsRUFFRSxLQUZGO0FBSUFWLE1BQUFBLGNBQWMsQ0FBQ1csSUFBZixHQUFzQixJQUF0QjtBQUNEO0FBQ0YsR0FSUSxFQVFOLENBQUNYLGNBQUQsQ0FSTSxDQUFUO0FBVUEsTUFBTVksV0FBVyxHQUFHdEIsa0RBQVcsQ0FBQ0ksc0RBQVMsQ0FBQyxVQUFDbUIsQ0FBRCxFQUFPO0FBQy9DUixJQUFBQSxVQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FGLElBQUFBLGFBQWEsQ0FBQyxFQUFFTixLQUFILENBQWI7QUFDQWlCLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZbEIsS0FBWjtBQUNELEdBSndDLEVBSXRDLElBSnNDLEVBSWhDO0FBQUNtQixJQUFBQSxPQUFPLEVBQUU7QUFBVixHQUpnQyxDQUFWLEVBSUosRUFKSSxDQUEvQjtBQU1BLE1BQU1DLFlBQVksR0FBRzNCLGtEQUFXLENBQUMsWUFBTTtBQUNyQ3NCLElBQUFBLFdBQVcsQ0FBQ00sS0FBWjtBQUNBZixJQUFBQSxhQUFhLENBQUMsQ0FBRCxDQUFiO0FBQ0FOLElBQUFBLEtBQUssR0FBRyxDQUFSO0FBQ0FRLElBQUFBLFVBQVUsQ0FBQyxLQUFELENBQVY7QUFDQUUsSUFBQUEsV0FBVyxDQUFDLEtBQUQsQ0FBWDtBQUNELEdBTitCLEVBTTdCLEVBTjZCLENBQWhDO0FBUUFoQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxRQUFHLENBQUNlLFFBQUQsSUFBYSxDQUFBTixjQUFjLFNBQWQsSUFBQUEsY0FBYyxXQUFkLFlBQUFBLGNBQWMsQ0FBRW1CLFlBQWhCLEtBQWdDLEdBQTdDLElBQW9EakIsVUFBVSxJQUFJLENBQXJFLEVBQXdFO0FBQ3RFRixNQUFBQSxjQUFjLENBQUNVLFlBQWYsQ0FDRSxDQUFDLEdBQUQsRUFBTSxHQUFOLENBREYsRUFFRSxJQUZGO0FBSUFWLE1BQUFBLGNBQWMsQ0FBQ1csSUFBZixHQUFzQixLQUF0QjtBQUVEO0FBQ0YsR0FUUSxFQVNOLENBQUNULFVBQUQsRUFBYUYsY0FBYixFQUE2Qk0sUUFBN0IsQ0FUTSxDQUFUO0FBV0FmLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUcsQ0FBQ2EsT0FBRCxJQUFZSixjQUFmLEVBQStCO0FBQzdCb0IsTUFBQUEsWUFBWSxDQUFDdEIsS0FBRCxDQUFaO0FBQ0FBLE1BQUFBLEtBQUssR0FBR3VCLE1BQU0sQ0FBQ0MsVUFBUCxDQUFrQixZQUFNO0FBQzlCdEIsUUFBQUEsY0FBYyxDQUFDVSxZQUFmLENBQ0UsQ0FBQyxDQUFELEVBQUksR0FBSixDQURGLEVBRUUsSUFGRjtBQUlBVixRQUFBQSxjQUFjLENBQUNXLElBQWYsR0FBc0IsSUFBdEI7QUFDQUosUUFBQUEsV0FBVyxDQUFDLElBQUQsQ0FBWDtBQUNELE9BUE8sRUFPTCxJQVBLLENBQVI7QUFRRDtBQUNGLEdBWlEsRUFZTixDQUFDSCxPQUFELEVBQVVKLGNBQVYsQ0FaTSxDQUFUO0FBYUEsc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBS0wsZ0VBQW5CO0FBQUEsOEJBQ0U7QUFDRSxtQkFBVyxFQUFLaUIsV0FEbEI7QUFFRSxvQkFBWSxFQUFLSyxZQUZuQjtBQUdFLGlCQUFTLEVBQUt0QiwrRUFIaEI7QUFBQSwrQkFJRSw4REFBQyx1REFBRDtBQUNFLHVCQUFhLEVBQUthLGlCQURwQjtBQUVFLGdCQUFNLEVBQUs7QUFDVGUsWUFBQUEsSUFBSSxFQUFFLHVCQURHO0FBRVRaLFlBQUFBLElBQUksRUFBRSxJQUZHO0FBR1RhLFlBQUFBLFFBQVEsRUFBRTtBQUhEO0FBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQWNFO0FBQUssaUJBQVMsRUFBSzVCLGlEQUFFLENBQUNELGlFQUFELGtKQUFvQkEsMkVBQXBCLEVBQTZDVyxRQUE3QztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFzQkQsQ0E3RUQ7O0dBQU1QOztLQUFBQTtBQStFTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuaW1hdGlvbkl0ZW0gfSBmcm9tICdsb3R0aWUtd2ViJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExvdHRpZSBmcm9tICcuLi9jb21wb25lbnRzL0xvdHRpZSdcclxuaW1wb3J0IF90aHJvdHRsZSBmcm9tICdsb2Rhc2gvdGhyb3R0bGUnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IGNzIGZyb20gJ2NsYXNzbmFtZXMnXHJcbmxldCBjb3VudCA9IDBcclxubGV0IHRpbWVyID0gMFxyXG5jb25zdCBJbmRleCAgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2xvdHRpZUluc3RhbmNlLCBzZXRMb3R0aWVJbnN0YW5jZV0gPSB1c2VTdGF0ZTxBbmltYXRpb25JdGVtPihudWxsKVxyXG4gIGNvbnN0IFt0b3VjaENvdW50LCBzZXRUb3VjaENvdW50XSA9IHVzZVN0YXRlPG51bWJlcj4oMClcclxuICBjb25zdCBbaXNUb3VjaCwgc2V0SXNUb3VjaF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG4gIGNvbnN0IGdldExvdHRpZUluc3RhbmNlID0gdXNlQ2FsbGJhY2soKGluczogQW5pbWF0aW9uSXRlbSkgPT4gc2V0TG90dGllSW5zdGFuY2UoaW5zKSwgW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihsb3R0aWVJbnN0YW5jZSkge1xyXG4gICAgICBsb3R0aWVJbnN0YW5jZS5wbGF5U2VnbWVudHMoXHJcbiAgICAgICAgWzAsIDM5MF0sXHJcbiAgICAgICAgZmFsc2VcclxuICAgICAgKVxyXG4gICAgICBsb3R0aWVJbnN0YW5jZS5sb29wID0gdHJ1ZVxyXG4gICAgfVxyXG4gIH0sIFtsb3R0aWVJbnN0YW5jZV0pXHJcblxyXG4gIGNvbnN0IG9uTW91c2VNb3ZlID0gdXNlQ2FsbGJhY2soX3Rocm90dGxlKChlKSA9PiB7XHJcbiAgICBzZXRJc1RvdWNoKHRydWUpXHJcbiAgICBzZXRUb3VjaENvdW50KCsrY291bnQpXHJcbiAgICBjb25zb2xlLmxvZyhjb3VudClcclxuICB9LCAxMDAwLCB7bGVhZGluZzogdHJ1ZX0pLCBbXSlcclxuXHJcbiAgY29uc3Qgb25Nb3VzZUxlYXZlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgb25Nb3VzZU1vdmUuZmx1c2goKVxyXG4gICAgc2V0VG91Y2hDb3VudCgwKVxyXG4gICAgY291bnQgPSAwXHJcbiAgICBzZXRJc1RvdWNoKGZhbHNlKVxyXG4gICAgc2V0SXNBY3RpdmUoZmFsc2UpXHJcbiAgfSwgW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZighaXNBY3RpdmUgJiYgbG90dGllSW5zdGFuY2U/LmN1cnJlbnRGcmFtZSA8PSAzOTAgJiYgdG91Y2hDb3VudCA+PSAzKSB7XHJcbiAgICAgIGxvdHRpZUluc3RhbmNlLnBsYXlTZWdtZW50cyhcclxuICAgICAgICBbMzkwLCA0ODBdLFxyXG4gICAgICAgIHRydWVcclxuICAgICAgKVxyXG4gICAgICBsb3R0aWVJbnN0YW5jZS5sb29wID0gZmFsc2VcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfSwgW3RvdWNoQ291bnQsIGxvdHRpZUluc3RhbmNlLCBpc0FjdGl2ZV0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZighaXNUb3VjaCAmJiBsb3R0aWVJbnN0YW5jZSkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpXHJcbiAgICAgIHRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGxvdHRpZUluc3RhbmNlLnBsYXlTZWdtZW50cyhcclxuICAgICAgICAgIFswLCAzOTBdLFxyXG4gICAgICAgICAgdHJ1ZVxyXG4gICAgICAgIClcclxuICAgICAgICBsb3R0aWVJbnN0YW5jZS5sb29wID0gdHJ1ZVxyXG4gICAgICAgIHNldElzQWN0aXZlKHRydWUpXHJcbiAgICAgIH0sIDIwMDApXHJcbiAgICB9XHJcbiAgfSwgW2lzVG91Y2gsIGxvdHRpZUluc3RhbmNlXSlcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWUgPSB7IHN0eWxlc1snbWFpbiddIH0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgb25Nb3VzZU1vdmUgPSB7IG9uTW91c2VNb3ZlIH0gXHJcbiAgICAgICAgICBvbk1vdXNlTGVhdmUgPSB7IG9uTW91c2VMZWF2ZSB9XHJcbiAgICAgICAgICBjbGFzc05hbWUgPSB7IHN0eWxlc1snbG90dGllLWNvbnRhaW5lciddIH0+XHJcbiAgICAgICAgICA8TG90dGllIFxyXG4gICAgICAgICAgICBvblBsYXllclJlYWR5ID0geyBnZXRMb3R0aWVJbnN0YW5jZSB9XHJcbiAgICAgICAgICAgIHBhcmFtcyA9IHsgeyBcclxuICAgICAgICAgICAgICBwYXRoOiAnL2xvdHRpZUZpbGVzL2NhdC5qc29uJyxcclxuICAgICAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9IH0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHsgY3Moc3R5bGVzWydsb2dpbiddLCB7W3N0eWxlc1snbG9naW4tYWN0aXZlJ11dOiBpc0FjdGl2ZX0pIH0+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxvdHRpZSIsIl90aHJvdHRsZSIsInN0eWxlcyIsImNzIiwiY291bnQiLCJ0aW1lciIsIkluZGV4IiwibG90dGllSW5zdGFuY2UiLCJzZXRMb3R0aWVJbnN0YW5jZSIsInRvdWNoQ291bnQiLCJzZXRUb3VjaENvdW50IiwiaXNUb3VjaCIsInNldElzVG91Y2giLCJpc0FjdGl2ZSIsInNldElzQWN0aXZlIiwiZ2V0TG90dGllSW5zdGFuY2UiLCJpbnMiLCJwbGF5U2VnbWVudHMiLCJsb29wIiwib25Nb3VzZU1vdmUiLCJlIiwiY29uc29sZSIsImxvZyIsImxlYWRpbmciLCJvbk1vdXNlTGVhdmUiLCJmbHVzaCIsImN1cnJlbnRGcmFtZSIsImNsZWFyVGltZW91dCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJwYXRoIiwiYXV0b3BsYXkiXSwic291cmNlUm9vdCI6IiJ9