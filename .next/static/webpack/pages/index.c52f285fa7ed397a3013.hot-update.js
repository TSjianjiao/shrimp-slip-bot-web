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
    if (!showLogin) {
      if (isActive) {
        setShowLogin(true);
      }
    }
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
          lineNumber: 79,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default().login), (0,E_Code_shrimp_slip_bot_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, (_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default()["login-active"]), showLogin))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzUyZjI4NWZhN2VkMzk3YTMwMTMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlRLEtBQUssR0FBRyxDQUFaO0FBQ0EsSUFBSUMsS0FBSyxHQUFHLENBQVo7O0FBQ0EsSUFBTUMsS0FBSyxHQUFJLFNBQVRBLEtBQVMsR0FBTTtBQUFBOztBQUFBLGtCQUN5QlAsK0NBQVEsQ0FBZ0IsSUFBaEIsQ0FEakM7QUFBQSxNQUNaUSxjQURZO0FBQUEsTUFDSUMsaUJBREo7O0FBQUEsbUJBRWlCVCwrQ0FBUSxDQUFTLENBQVQsQ0FGekI7QUFBQSxNQUVaVSxVQUZZO0FBQUEsTUFFQUMsYUFGQTs7QUFBQSxtQkFHV1gsK0NBQVEsQ0FBVSxLQUFWLENBSG5CO0FBQUEsTUFHWlksT0FIWTtBQUFBLE1BR0hDLFVBSEc7O0FBQUEsbUJBSWFiLCtDQUFRLENBQVUsS0FBVixDQUpyQjtBQUFBLE1BSVpjLFFBSlk7QUFBQSxNQUlGQyxXQUpFOztBQUFBLG1CQUtlZiwrQ0FBUSxDQUFVLEtBQVYsQ0FMdkI7QUFBQSxNQUtaZ0IsU0FMWTtBQUFBLE1BS0RDLFlBTEM7O0FBTW5CLE1BQU1DLGlCQUFpQixHQUFHcEIsa0RBQVcsQ0FBQyxVQUFDcUIsR0FBRDtBQUFBLFdBQXdCVixpQkFBaUIsQ0FBQ1UsR0FBRCxDQUF6QztBQUFBLEdBQUQsRUFBaUQsRUFBakQsQ0FBckM7QUFFQXBCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUdTLGNBQUgsRUFBbUI7QUFDakJBLE1BQUFBLGNBQWMsQ0FBQ1ksWUFBZixDQUNFLENBQUMsQ0FBRCxFQUFJLEdBQUosQ0FERixFQUVFLEtBRkY7QUFJQVosTUFBQUEsY0FBYyxDQUFDYSxJQUFmLEdBQXNCLElBQXRCO0FBQ0Q7QUFDRixHQVJRLEVBUU4sQ0FBQ2IsY0FBRCxDQVJNLENB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O0FBREYsbUJBREY7QUFzQkQsQ0FyRkQ7O0dBQU1UOztLQUFBQTtBQXVGTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuaW1hdGlvbkl0ZW0gfSBmcm9tICdsb3R0aWUtd2ViJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExvdHRpZSBmcm9tICcuLi9jb21wb25lbnRzL0xvdHRpZSdcclxuaW1wb3J0IF90aHJvdHRsZSBmcm9tICdsb2Rhc2gvdGhyb3R0bGUnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IGNzIGZyb20gJ2NsYXNzbmFtZXMnXHJcbmxldCBjb3VudCA9IDBcclxubGV0IHRpbWVyID0gMFxyXG5jb25zdCBJbmRleCAgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2xvdHRpZUluc3RhbmNlLCBzZXRMb3R0aWVJbnN0YW5jZV0gPSB1c2VTdGF0ZTxBbmltYXRpb25JdGVtPihudWxsKVxyXG4gIGNvbnN0IFt0b3VjaENvdW50LCBzZXRUb3VjaENvdW50XSA9IHVzZVN0YXRlPG51bWJlcj4oMClcclxuICBjb25zdCBbaXNUb3VjaCwgc2V0SXNUb3VjaF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG4gIGNvbnN0IFtzaG93TG9naW4sIHNldFNob3dMb2dpbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuICBjb25zdCBnZXRMb3R0aWVJbnN0YW5jZSA9IHVzZUNhbGxiYWNrKChpbnM6IEFuaW1hdGlvbkl0ZW0pID0+IHNldExvdHRpZUluc3RhbmNlKGlucyksIFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYobG90dGllSW5zdGFuY2UpIHtcclxuICAgICAgbG90dGllSW5zdGFuY2UucGxheVNlZ21lbnRzKFxyXG4gICAgICAgIFswLCAzOTBdLFxyXG4gICAgICAgIGZhbHNlXHJcbiAgICAgIClcclxuICAgICAgbG90dGllSW5zdGFuY2UubG9vcCA9IHRydWVcclxuICAgIH1cclxuICB9LCBbbG90dGllSW5zdGFuY2VdKVxyXG5cclxuICBjb25zdCBvbk1vdXNlTW92ZSA9IHVzZUNhbGxiYWNrKF90aHJvdHRsZSgoZSkgPT4ge1xyXG4gICAgc2V0SXNUb3VjaCh0cnVlKVxyXG4gICAgc2V0VG91Y2hDb3VudCgrK2NvdW50KVxyXG4gICAgY29uc29sZS5sb2coY291bnQpXHJcbiAgfSwgMTAwMCwge2xlYWRpbmc6IHRydWV9KSwgW10pXHJcblxyXG4gIGNvbnN0IG9uTW91c2VMZWF2ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIG9uTW91c2VNb3ZlLmZsdXNoKClcclxuICAgIHNldFRvdWNoQ291bnQoMClcclxuICAgIGNvdW50ID0gMFxyXG4gICAgc2V0SXNUb3VjaChmYWxzZSlcclxuICAgIHNldElzQWN0aXZlKGZhbHNlKVxyXG4gIH0sIFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoIWlzQWN0aXZlICYmIGxvdHRpZUluc3RhbmNlPy5jdXJyZW50RnJhbWUgPD0gMzkwICYmIHRvdWNoQ291bnQgPj0gMykge1xyXG4gICAgICBsb3R0aWVJbnN0YW5jZS5wbGF5U2VnbWVudHMoXHJcbiAgICAgICAgWzM5MCwgNDgwXSxcclxuICAgICAgICB0cnVlXHJcbiAgICAgIClcclxuICAgICAgbG90dGllSW5zdGFuY2UubG9vcCA9IGZhbHNlXHJcbiAgICAgIHNldElzQWN0aXZlKHRydWUpXHJcbiAgICB9XHJcbiAgfSwgW3RvdWNoQ291bnQsIGxvdHRpZUluc3RhbmNlLCBpc0FjdGl2ZV0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZighaXNUb3VjaCAmJiBsb3R0aWVJbnN0YW5jZSkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpXHJcbiAgICAgIHRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGxvdHRpZUluc3RhbmNlLnBsYXlTZWdtZW50cyhcclxuICAgICAgICAgIFswLCAzOTBdLFxyXG4gICAgICAgICAgdHJ1ZVxyXG4gICAgICAgIClcclxuICAgICAgICBsb3R0aWVJbnN0YW5jZS5sb29wID0gdHJ1ZVxyXG4gICAgICB9LCAyMDAwKVxyXG4gICAgfVxyXG4gIH0sIFtpc1RvdWNoLCBsb3R0aWVJbnN0YW5jZV0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZighc2hvd0xvZ2luKSB7XHJcbiAgICAgIGlmKGlzQWN0aXZlKSB7XHJcbiAgICAgICAgc2V0U2hvd0xvZ2luKHRydWUpXHJcbiAgICAgIH0gXHJcbiAgICB9XHJcbiAgfSwgW2lzQWN0aXZlLCBzaG93TG9naW5dKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IHsgc3R5bGVzWydtYWluJ10gfT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBvbk1vdXNlTW92ZSA9IHsgb25Nb3VzZU1vdmUgfSBcclxuICAgICAgICAgIG9uTW91c2VMZWF2ZSA9IHsgb25Nb3VzZUxlYXZlIH1cclxuICAgICAgICAgIGNsYXNzTmFtZSA9IHsgc3R5bGVzWydsb3R0aWUtY29udGFpbmVyJ10gfT5cclxuICAgICAgICAgIDxMb3R0aWUgXHJcbiAgICAgICAgICAgIG9uUGxheWVyUmVhZHkgPSB7IGdldExvdHRpZUluc3RhbmNlIH1cclxuICAgICAgICAgICAgcGFyYW1zID0geyB7IFxyXG4gICAgICAgICAgICAgIHBhdGg6ICcvbG90dGllRmlsZXMvY2F0Lmpzb24nLFxyXG4gICAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0gfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0geyBjcyhzdHlsZXNbJ2xvZ2luJ10sIHtbc3R5bGVzWydsb2dpbi1hY3RpdmUnXV06IHNob3dMb2dpbn0pIH0+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxvdHRpZSIsIl90aHJvdHRsZSIsInN0eWxlcyIsImNzIiwiY291bnQiLCJ0aW1lciIsIkluZGV4IiwibG90dGllSW5zdGFuY2UiLCJzZXRMb3R0aWVJbnN0YW5jZSIsInRvdWNoQ291bnQiLCJzZXRUb3VjaENvdW50IiwiaXNUb3VjaCIsInNldElzVG91Y2giLCJpc0FjdGl2ZSIsInNldElzQWN0aXZlIiwic2hvd0xvZ2luIiwic2V0U2hvd0xvZ2luIiwiZ2V0TG90dGllSW5zdGFuY2UiLCJpbnMiLCJwbGF5U2VnbWVudHMiLCJsb29wIiwib25Nb3VzZU1vdmUiLCJlIiwiY29uc29sZSIsImxvZyIsImxlYWRpbmciLCJvbk1vdXNlTGVhdmUiLCJmbHVzaCIsImN1cnJlbnRGcmFtZSIsImNsZWFyVGltZW91dCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJwYXRoIiwiYXV0b3BsYXkiXSwic291cmNlUm9vdCI6IiJ9