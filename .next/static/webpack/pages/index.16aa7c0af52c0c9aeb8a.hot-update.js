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

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      showLogin = _useState5[0],
      setShowLogin = _useState5[1];

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
      setIsActive(true);
    }
  }, [touchCount, lottieInstance, isActive]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (!isTouch && lottieInstance) {
      clearTimeout(timer);
      timer = window.setTimeout(function () {
        lottieInstance.playSegments([0, 390], true);
        lottieInstance.loop = true;
      }, 2000);
    }
  }, [isTouch, lottieInstance]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setShowLogin(!showLogin && isActive);
  }, [isActive, showLogin]);
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
          lineNumber: 75,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default().login), (0,E_Code_shrimp_slip_bot_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, (_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default()["login-active"]), showLogin))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(Index, "478zQaqMlqXElrPH5D3u2mq3Ras=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTZhYTdjMGFmNTJjMGM5YWViOGEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlRLEtBQUssR0FBRyxDQUFaO0FBQ0EsSUFBSUMsS0FBSyxHQUFHLENBQVo7O0FBQ0EsSUFBTUMsS0FBSyxHQUFJLFNBQVRBLEtBQVMsR0FBTTtBQUFBOztBQUFBLGtCQUN5QlAsK0NBQVEsQ0FBZ0IsSUFBaEIsQ0FEakM7QUFBQSxNQUNaUSxjQURZO0FBQUEsTUFDSUMsaUJBREo7O0FBQUEsbUJBRWlCVCwrQ0FBUSxDQUFTLENBQVQsQ0FGekI7QUFBQSxNQUVaVSxVQUZZO0FBQUEsTUFFQUMsYUFGQTs7QUFBQSxtQkFHV1gsK0NBQVEsQ0FBVSxLQUFWLENBSG5CO0FBQUEsTUFHWlksT0FIWTtBQUFBLE1BR0hDLFVBSEc7O0FBQUEsbUJBSWFiLCtDQUFRLENBQVUsS0FBVixDQUpyQjtBQUFBLE1BSVpjLFFBSlk7QUFBQSxNQUlGQyxXQUpFOztBQUFBLG1CQUtlZiwrQ0FBUSxDQUFVLEtBQVYsQ0FMdkI7QUFBQSxNQUtaZ0IsU0FMWTtBQUFBLE1BS0RDLFlBTEM7O0FBTW5CLE1BQU1DLGlCQUFpQixHQUFHcEIsa0RBQVcsQ0FBQyxVQUFDcUIsR0FBRDtBQUFBLFdBQXdCVixpQkFBaUIsQ0FBQ1UsR0FBRCxDQUF6QztBQUFBLEdBQUQsRUFBaUQsRUFBakQsQ0FBckM7QUFFQXBCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUdTLGNBQUgsRUFBbUI7QUFDakJBLE1BQUFBLGNBQWMsQ0FBQ1ksWUFBZixDQUNFLENBQUMsQ0FBRCxFQUFJLEdBQUosQ0FERixFQUVFLEtBRkY7QUFJQVosTUFBQUEsY0FBYyxDQUFDYSxJQUFmLEdBQXNCLElBQXRCO0FBQ0Q7QUFDRixHQVJRLEVBUU4sQ0FBQ2IsY0FBRCxDQVJNLENB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bUZOLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5pbWF0aW9uSXRlbSB9IGZyb20gJ2xvdHRpZS13ZWInXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTG90dGllIGZyb20gJy4uL2NvbXBvbmVudHMvTG90dGllJ1xyXG5pbXBvcnQgX3Rocm90dGxlIGZyb20gJ2xvZGFzaC90aHJvdHRsZSdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgY3MgZnJvbSAnY2xhc3NuYW1lcydcclxubGV0IGNvdW50ID0gMFxyXG5sZXQgdGltZXIgPSAwXHJcbmNvbnN0IEluZGV4ICA9ICgpID0+IHtcclxuICBjb25zdCBbbG90dGllSW5zdGFuY2UsIHNldExvdHRpZUluc3RhbmNlXSA9IHVzZVN0YXRlPEFuaW1hdGlvbkl0ZW0+KG51bGwpXHJcbiAgY29uc3QgW3RvdWNoQ291bnQsIHNldFRvdWNoQ291bnRdID0gdXNlU3RhdGU8bnVtYmVyPigwKVxyXG4gIGNvbnN0IFtpc1RvdWNoLCBzZXRJc1RvdWNoXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG4gIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcbiAgY29uc3QgW3Nob3dMb2dpbiwgc2V0U2hvd0xvZ2luXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG4gIGNvbnN0IGdldExvdHRpZUluc3RhbmNlID0gdXNlQ2FsbGJhY2soKGluczogQW5pbWF0aW9uSXRlbSkgPT4gc2V0TG90dGllSW5zdGFuY2UoaW5zKSwgW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihsb3R0aWVJbnN0YW5jZSkge1xyXG4gICAgICBsb3R0aWVJbnN0YW5jZS5wbGF5U2VnbWVudHMoXHJcbiAgICAgICAgWzAsIDM5MF0sXHJcbiAgICAgICAgZmFsc2VcclxuICAgICAgKVxyXG4gICAgICBsb3R0aWVJbnN0YW5jZS5sb29wID0gdHJ1ZVxyXG4gICAgfVxyXG4gIH0sIFtsb3R0aWVJbnN0YW5jZV0pXHJcblxyXG4gIGNvbnN0IG9uTW91c2VNb3ZlID0gdXNlQ2FsbGJhY2soX3Rocm90dGxlKChlKSA9PiB7XHJcbiAgICBzZXRJc1RvdWNoKHRydWUpXHJcbiAgICBzZXRUb3VjaENvdW50KCsrY291bnQpXHJcbiAgICBjb25zb2xlLmxvZyhjb3VudClcclxuICB9LCAxMDAwLCB7bGVhZGluZzogdHJ1ZX0pLCBbXSlcclxuXHJcbiAgY29uc3Qgb25Nb3VzZUxlYXZlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgb25Nb3VzZU1vdmUuZmx1c2goKVxyXG4gICAgc2V0VG91Y2hDb3VudCgwKVxyXG4gICAgY291bnQgPSAwXHJcbiAgICBzZXRJc1RvdWNoKGZhbHNlKVxyXG4gICAgc2V0SXNBY3RpdmUoZmFsc2UpXHJcbiAgfSwgW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZighaXNBY3RpdmUgJiYgbG90dGllSW5zdGFuY2U/LmN1cnJlbnRGcmFtZSA8PSAzOTAgJiYgdG91Y2hDb3VudCA+PSAzKSB7XHJcbiAgICAgIGxvdHRpZUluc3RhbmNlLnBsYXlTZWdtZW50cyhcclxuICAgICAgICBbMzkwLCA0ODBdLFxyXG4gICAgICAgIHRydWVcclxuICAgICAgKVxyXG4gICAgICBsb3R0aWVJbnN0YW5jZS5sb29wID0gZmFsc2VcclxuICAgICAgc2V0SXNBY3RpdmUodHJ1ZSlcclxuICAgIH1cclxuICB9LCBbdG91Y2hDb3VudCwgbG90dGllSW5zdGFuY2UsIGlzQWN0aXZlXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKCFpc1RvdWNoICYmIGxvdHRpZUluc3RhbmNlKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcclxuICAgICAgdGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgbG90dGllSW5zdGFuY2UucGxheVNlZ21lbnRzKFxyXG4gICAgICAgICAgWzAsIDM5MF0sXHJcbiAgICAgICAgICB0cnVlXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGxvdHRpZUluc3RhbmNlLmxvb3AgPSB0cnVlXHJcbiAgICAgIH0sIDIwMDApXHJcbiAgICB9XHJcbiAgfSwgW2lzVG91Y2gsIGxvdHRpZUluc3RhbmNlXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFNob3dMb2dpbighc2hvd0xvZ2luICYmIGlzQWN0aXZlKVxyXG4gIH0sIFtpc0FjdGl2ZSwgc2hvd0xvZ2luXSlcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWUgPSB7IHN0eWxlc1snbWFpbiddIH0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgb25Nb3VzZU1vdmUgPSB7IG9uTW91c2VNb3ZlIH0gXHJcbiAgICAgICAgICBvbk1vdXNlTGVhdmUgPSB7IG9uTW91c2VMZWF2ZSB9XHJcbiAgICAgICAgICBjbGFzc05hbWUgPSB7IHN0eWxlc1snbG90dGllLWNvbnRhaW5lciddIH0+XHJcbiAgICAgICAgICA8TG90dGllIFxyXG4gICAgICAgICAgICBvblBsYXllclJlYWR5ID0geyBnZXRMb3R0aWVJbnN0YW5jZSB9XHJcbiAgICAgICAgICAgIHBhcmFtcyA9IHsgeyBcclxuICAgICAgICAgICAgICBwYXRoOiAnL2xvdHRpZUZpbGVzL2NhdC5qc29uJyxcclxuICAgICAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9IH0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHsgY3Moc3R5bGVzWydsb2dpbiddLCB7W3N0eWxlc1snbG9naW4tYWN0aXZlJ11dOiBzaG93TG9naW59KSB9PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMb3R0aWUiLCJfdGhyb3R0bGUiLCJzdHlsZXMiLCJjcyIsImNvdW50IiwidGltZXIiLCJJbmRleCIsImxvdHRpZUluc3RhbmNlIiwic2V0TG90dGllSW5zdGFuY2UiLCJ0b3VjaENvdW50Iiwic2V0VG91Y2hDb3VudCIsImlzVG91Y2giLCJzZXRJc1RvdWNoIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsInNob3dMb2dpbiIsInNldFNob3dMb2dpbiIsImdldExvdHRpZUluc3RhbmNlIiwiaW5zIiwicGxheVNlZ21lbnRzIiwibG9vcCIsIm9uTW91c2VNb3ZlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJsZWFkaW5nIiwib25Nb3VzZUxlYXZlIiwiZmx1c2giLCJjdXJyZW50RnJhbWUiLCJjbGVhclRpbWVvdXQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwicGF0aCIsImF1dG9wbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==