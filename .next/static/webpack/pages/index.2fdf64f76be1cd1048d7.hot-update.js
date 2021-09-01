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
  var showLogin = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    if (!showLogin && isActive) {
      return true;
    }

    return false;
  }, [isActive]);
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
          lineNumber: 77,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default().login), (0,E_Code_shrimp_slip_bot_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, (_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default()["login-active"]), showLogin))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(Index, "pnx+9hT192zFWKMqUk4VxGClKlg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmZkZjY0Zjc2YmUxY2QxMDQ4ZDcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlTLEtBQUssR0FBRyxDQUFaO0FBQ0EsSUFBSUMsS0FBSyxHQUFHLENBQVo7O0FBQ0EsSUFBTUMsS0FBSyxHQUFJLFNBQVRBLEtBQVMsR0FBTTtBQUFBOztBQUFBLGtCQUN5QlAsK0NBQVEsQ0FBZ0IsSUFBaEIsQ0FEakM7QUFBQSxNQUNaUSxjQURZO0FBQUEsTUFDSUMsaUJBREo7O0FBQUEsbUJBRWlCVCwrQ0FBUSxDQUFTLENBQVQsQ0FGekI7QUFBQSxNQUVaVSxVQUZZO0FBQUEsTUFFQUMsYUFGQTs7QUFBQSxtQkFHV1gsK0NBQVEsQ0FBVSxLQUFWLENBSG5CO0FBQUEsTUFHWlksT0FIWTtBQUFBLE1BR0hDLFVBSEc7O0FBQUEsbUJBSWFiLCtDQUFRLENBQVUsS0FBVixDQUpyQjtBQUFBLE1BSVpjLFFBSlk7QUFBQSxNQUlGQyxXQUpFOztBQUtuQixNQUFNQyxpQkFBaUIsR0FBR25CLGtEQUFXLENBQUMsVUFBQ29CLEdBQUQ7QUFBQSxXQUF3QlIsaUJBQWlCLENBQUNRLEdBQUQsQ0FBekM7QUFBQSxHQUFELEVBQWlELEVBQWpELENBQXJDO0FBRUFuQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxRQUFHVSxjQUFILEVBQW1CO0FBQ2pCQSxNQUFBQSxjQUFjLENBQUNVLFlBQWYsQ0FDRSxDQUFDLENBQUQsRUFBSSxHQUFKLENBREYsRUFFRSxLQUZGO0FBSUFWLE1BQUFBLGNBQWMsQ0FBQ1csSUFBZixHQUFzQixJQUF0QjtBQUNEO0FBQ0YsR0FSUSxFQVFOLENBQUNYLGNBQUQsQ0FSTSxDQUFUO0FBVUEsTUFBTVksV0FBVyxHQUFHdkIsa0RBQVcsQ0FBQ0ssc0RBQVMsQ0FBQyxVQUFDbUIsQ0FBRCxFQUFPO0FB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ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5pbWF0aW9uSXRlbSB9IGZyb20gJ2xvdHRpZS13ZWInXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTG90dGllIGZyb20gJy4uL2NvbXBvbmVudHMvTG90dGllJ1xyXG5pbXBvcnQgX3Rocm90dGxlIGZyb20gJ2xvZGFzaC90aHJvdHRsZSdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgY3MgZnJvbSAnY2xhc3NuYW1lcydcclxubGV0IGNvdW50ID0gMFxyXG5sZXQgdGltZXIgPSAwXHJcbmNvbnN0IEluZGV4ICA9ICgpID0+IHtcclxuICBjb25zdCBbbG90dGllSW5zdGFuY2UsIHNldExvdHRpZUluc3RhbmNlXSA9IHVzZVN0YXRlPEFuaW1hdGlvbkl0ZW0+KG51bGwpXHJcbiAgY29uc3QgW3RvdWNoQ291bnQsIHNldFRvdWNoQ291bnRdID0gdXNlU3RhdGU8bnVtYmVyPigwKVxyXG4gIGNvbnN0IFtpc1RvdWNoLCBzZXRJc1RvdWNoXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG4gIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcbiAgY29uc3QgZ2V0TG90dGllSW5zdGFuY2UgPSB1c2VDYWxsYmFjaygoaW5zOiBBbmltYXRpb25JdGVtKSA9PiBzZXRMb3R0aWVJbnN0YW5jZShpbnMpLCBbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKGxvdHRpZUluc3RhbmNlKSB7XHJcbiAgICAgIGxvdHRpZUluc3RhbmNlLnBsYXlTZWdtZW50cyhcclxuICAgICAgICBbMCwgMzkwXSxcclxuICAgICAgICBmYWxzZVxyXG4gICAgICApXHJcbiAgICAgIGxvdHRpZUluc3RhbmNlLmxvb3AgPSB0cnVlXHJcbiAgICB9XHJcbiAgfSwgW2xvdHRpZUluc3RhbmNlXSlcclxuXHJcbiAgY29uc3Qgb25Nb3VzZU1vdmUgPSB1c2VDYWxsYmFjayhfdGhyb3R0bGUoKGUpID0+IHtcclxuICAgIHNldElzVG91Y2godHJ1ZSlcclxuICAgIHNldFRvdWNoQ291bnQoKytjb3VudClcclxuICAgIGNvbnNvbGUubG9nKGNvdW50KVxyXG4gIH0sIDEwMDAsIHtsZWFkaW5nOiB0cnVlfSksIFtdKVxyXG5cclxuICBjb25zdCBvbk1vdXNlTGVhdmUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBvbk1vdXNlTW92ZS5mbHVzaCgpXHJcbiAgICBzZXRUb3VjaENvdW50KDApXHJcbiAgICBjb3VudCA9IDBcclxuICAgIHNldElzVG91Y2goZmFsc2UpXHJcbiAgICBzZXRJc0FjdGl2ZShmYWxzZSlcclxuICB9LCBbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKCFpc0FjdGl2ZSAmJiBsb3R0aWVJbnN0YW5jZT8uY3VycmVudEZyYW1lIDw9IDM5MCAmJiB0b3VjaENvdW50ID49IDMpIHtcclxuICAgICAgbG90dGllSW5zdGFuY2UucGxheVNlZ21lbnRzKFxyXG4gICAgICAgIFszOTAsIDQ4MF0sXHJcbiAgICAgICAgdHJ1ZVxyXG4gICAgICApXHJcbiAgICAgIGxvdHRpZUluc3RhbmNlLmxvb3AgPSBmYWxzZVxyXG4gICAgICBzZXRJc0FjdGl2ZSh0cnVlKVxyXG4gICAgfVxyXG4gIH0sIFt0b3VjaENvdW50LCBsb3R0aWVJbnN0YW5jZSwgaXNBY3RpdmVdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoIWlzVG91Y2ggJiYgbG90dGllSW5zdGFuY2UpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxyXG4gICAgICB0aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBsb3R0aWVJbnN0YW5jZS5wbGF5U2VnbWVudHMoXHJcbiAgICAgICAgICBbMCwgMzkwXSxcclxuICAgICAgICAgIHRydWVcclxuICAgICAgICApXHJcbiAgICAgICAgbG90dGllSW5zdGFuY2UubG9vcCA9IHRydWVcclxuICAgICAgfSwgMjAwMClcclxuICAgIH1cclxuICB9LCBbaXNUb3VjaCwgbG90dGllSW5zdGFuY2VdKVxyXG5cclxuICBjb25zdCBzaG93TG9naW4gPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGlmKCFzaG93TG9naW4gJiYgaXNBY3RpdmUpIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH0sIFtpc0FjdGl2ZV0pXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lID0geyBzdHlsZXNbJ21haW4nXSB9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIG9uTW91c2VNb3ZlID0geyBvbk1vdXNlTW92ZSB9IFxyXG4gICAgICAgICAgb25Nb3VzZUxlYXZlID0geyBvbk1vdXNlTGVhdmUgfVxyXG4gICAgICAgICAgY2xhc3NOYW1lID0geyBzdHlsZXNbJ2xvdHRpZS1jb250YWluZXInXSB9PlxyXG4gICAgICAgICAgPExvdHRpZSBcclxuICAgICAgICAgICAgb25QbGF5ZXJSZWFkeSA9IHsgZ2V0TG90dGllSW5zdGFuY2UgfVxyXG4gICAgICAgICAgICBwYXJhbXMgPSB7IHsgXHJcbiAgICAgICAgICAgICAgcGF0aDogJy9sb3R0aWVGaWxlcy9jYXQuanNvbicsXHJcbiAgICAgICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgICAgICBhdXRvcGxheTogZmFsc2VcclxuICAgICAgICAgICAgfSB9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7IGNzKHN0eWxlc1snbG9naW4nXSwge1tzdHlsZXNbJ2xvZ2luLWFjdGl2ZSddXTogc2hvd0xvZ2lufSkgfT5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsIkxvdHRpZSIsIl90aHJvdHRsZSIsInN0eWxlcyIsImNzIiwiY291bnQiLCJ0aW1lciIsIkluZGV4IiwibG90dGllSW5zdGFuY2UiLCJzZXRMb3R0aWVJbnN0YW5jZSIsInRvdWNoQ291bnQiLCJzZXRUb3VjaENvdW50IiwiaXNUb3VjaCIsInNldElzVG91Y2giLCJpc0FjdGl2ZSIsInNldElzQWN0aXZlIiwiZ2V0TG90dGllSW5zdGFuY2UiLCJpbnMiLCJwbGF5U2VnbWVudHMiLCJsb29wIiwib25Nb3VzZU1vdmUiLCJlIiwiY29uc29sZSIsImxvZyIsImxlYWRpbmciLCJvbk1vdXNlTGVhdmUiLCJmbHVzaCIsImN1cnJlbnRGcmFtZSIsImNsZWFyVGltZW91dCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJzaG93TG9naW4iLCJwYXRoIiwiYXV0b3BsYXkiXSwic291cmNlUm9vdCI6IiJ9