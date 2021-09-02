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
/* harmony import */ var D_Code_mirai_shrimp_slip_bot_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Lottie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Lottie */ "./src/components/Lottie/index.tsx");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\Code\\mirai\\shrimp-slip-bot-web\\src\\pages\\index.tsx",
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
    if (!isActive && (lottieInstance === null || lottieInstance === void 0 ? void 0 : lottieInstance.currentFrame) <= 390 && touchCount >= 2) {
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
          lineNumber: 81,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default().login), (0,D_Code_mirai_shrimp_slip_bot_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, (_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default()["login-active"]), showLogin)),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.TextField, {
          id: "standard-basic",
          label: "\u8D26\u53F7",
          variant: "outlined"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.TextField, {
          id: "standard-basic",
          label: "\u5BC6\u7801",
          type: "password",
          variant: "outlined"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Button, {
          variant: "contained",
          color: "primary",
          classes: {
            containedPrimary: (_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default()["login-btn"])
          },
          children: "\u767B\u5F55"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGQ3ZGY2NTdhODk5ZGI2NzkwNzMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlVLEtBQUssR0FBRyxDQUFaO0FBQ0EsSUFBSUMsS0FBSyxHQUFHLENBQVo7O0FBQ0EsSUFBTUMsS0FBSyxHQUFJLFNBQVRBLEtBQVMsR0FBTTtBQUFBOztBQUFBLGtCQUN5QlQsK0NBQVEsQ0FBZ0IsSUFBaEIsQ0FEakM7QUFBQSxNQUNaVSxjQURZO0FBQUEsTUFDSUMsaUJBREo7O0FBQUEsbUJBRWlCWCwrQ0FBUSxDQUFTLENBQVQsQ0FGekI7QUFBQSxNQUVaWSxVQUZZO0FBQUEsTUFFQUMsYUFGQTs7QUFBQSxtQkFHV2IsK0NBQVEsQ0FBVSxLQUFWLENBSG5CO0FBQUEsTUFHWmMsT0FIWTtBQUFBLE1BR0hDLFVBSEc7O0FBQUEsbUJBSWFmLCtDQUFRLENBQVUsS0FBVixDQUpyQjtBQUFBLE1BSVpnQixRQUpZO0FBQUEsTUFJRkMsV0FKRTs7QUFBQSxtQkFLZWpCLCtDQUFRLENBQVUsS0FBVixDQUx2QjtBQUFBLE1BS1prQixTQUxZO0FBQUEsTUFLREMsWUFMQzs7QUFNbkIsTUFBTUMsaUJBQWlCLEdBQUd0QixrREFBVyxDQUFDLFVBQUN1QixHQUFEO0FBQUEsV0FBd0JWLGlCQUFpQixDQUFDVSxHQUFELENBQXpDO0FBQUEsR0FBRCxFQUFpRCxFQUFqRCxDQUFyQztBQUVBdEIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBR1csY0FBSCxFQUFtQjtBQUNqQkEsTUFBQUEsY0FBYyxDQUFDWSxZQUFmLENBQ0UsQ0FBQyxDQUFELEVBQUksR0FBSixDQURGLEVBRUUsS0FGRjtBQUlBWixNQUFBQSxjQUFjLENBQUNhLElBQWYsR0FBc0IsSUFBdEI7QUFDRDtBQUNGLEdBUlEsRUFRTixDQUFDYixjQUFE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Z0JBQWhCO0FBQWlDLGVBQUssRUFBRyxjQUF6QztBQUE4QyxpQkFBTyxFQUFHO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFHRSw4REFBQyx3REFBRDtBQUFXLFlBQUUsRUFBRyxnQkFBaEI7QUFBaUMsZUFBSyxFQUFHLGNBQXpDO0FBQThDLGNBQUksRUFBRyxVQUFyRDtBQUFnRSxpQkFBTyxFQUFHO0FBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFJRSw4REFBQyxxREFBRDtBQUFRLGlCQUFPLEVBQUcsV0FBbEI7QUFBOEIsZUFBSyxFQUFHLFNBQXRDO0FBQWdELGlCQUFPLEVBQUs7QUFBQ21CLFlBQUFBLGdCQUFnQixFQUFFbEMsd0VBQU07QUFBekIsV0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUEyQkQsQ0ExRkQ7O0dBQU1NOztLQUFBQTtBQTRGTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuaW1hdGlvbkl0ZW0gfSBmcm9tICdsb3R0aWUtd2ViJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExvdHRpZSBmcm9tICcuLi9jb21wb25lbnRzL0xvdHRpZSdcclxuaW1wb3J0IF90aHJvdHRsZSBmcm9tICdsb2Rhc2gvdGhyb3R0bGUnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IGNzIGZyb20gJ2NsYXNzbmFtZXMnXHJcbmltcG9ydCB7IFRleHRGaWVsZCwgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5sZXQgY291bnQgPSAwXHJcbmxldCB0aW1lciA9IDBcclxuY29uc3QgSW5kZXggID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtsb3R0aWVJbnN0YW5jZSwgc2V0TG90dGllSW5zdGFuY2VdID0gdXNlU3RhdGU8QW5pbWF0aW9uSXRlbT4obnVsbClcclxuICBjb25zdCBbdG91Y2hDb3VudCwgc2V0VG91Y2hDb3VudF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXHJcbiAgY29uc3QgW2lzVG91Y2gsIHNldElzVG91Y2hdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcbiAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuICBjb25zdCBbc2hvd0xvZ2luLCBzZXRTaG93TG9naW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcbiAgY29uc3QgZ2V0TG90dGllSW5zdGFuY2UgPSB1c2VDYWxsYmFjaygoaW5zOiBBbmltYXRpb25JdGVtKSA9PiBzZXRMb3R0aWVJbnN0YW5jZShpbnMpLCBbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKGxvdHRpZUluc3RhbmNlKSB7XHJcbiAgICAgIGxvdHRpZUluc3RhbmNlLnBsYXlTZWdtZW50cyhcclxuICAgICAgICBbMCwgMzkwXSxcclxuICAgICAgICBmYWxzZVxyXG4gICAgICApXHJcbiAgICAgIGxvdHRpZUluc3RhbmNlLmxvb3AgPSB0cnVlXHJcbiAgICB9XHJcbiAgfSwgW2xvdHRpZUluc3RhbmNlXSlcclxuXHJcbiAgY29uc3Qgb25Nb3VzZU1vdmUgPSB1c2VDYWxsYmFjayhfdGhyb3R0bGUoKGUpID0+IHtcclxuICAgIHNldElzVG91Y2godHJ1ZSlcclxuICAgIHNldFRvdWNoQ291bnQoKytjb3VudClcclxuICAgIGNvbnNvbGUubG9nKGNvdW50KVxyXG4gIH0sIDEwMDAsIHtsZWFkaW5nOiB0cnVlfSksIFtdKVxyXG5cclxuICBjb25zdCBvbk1vdXNlTGVhdmUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBvbk1vdXNlTW92ZS5mbHVzaCgpXHJcbiAgICBzZXRUb3VjaENvdW50KDApXHJcbiAgICBjb3VudCA9IDBcclxuICAgIHNldElzVG91Y2goZmFsc2UpXHJcbiAgICBzZXRJc0FjdGl2ZShmYWxzZSlcclxuICB9LCBbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKCFpc0FjdGl2ZSAmJiBsb3R0aWVJbnN0YW5jZT8uY3VycmVudEZyYW1lIDw9IDM5MCAmJiB0b3VjaENvdW50ID49IDIpIHtcclxuICAgICAgbG90dGllSW5zdGFuY2UucGxheVNlZ21lbnRzKFxyXG4gICAgICAgIFszOTAsIDQ4MF0sXHJcbiAgICAgICAgdHJ1ZVxyXG4gICAgICApXHJcbiAgICAgIGxvdHRpZUluc3RhbmNlLmxvb3AgPSBmYWxzZVxyXG4gICAgICBzZXRJc0FjdGl2ZSh0cnVlKVxyXG4gICAgfVxyXG4gIH0sIFt0b3VjaENvdW50LCBsb3R0aWVJbnN0YW5jZSwgaXNBY3RpdmVdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoIWlzVG91Y2ggJiYgbG90dGllSW5zdGFuY2UpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxyXG4gICAgICB0aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBsb3R0aWVJbnN0YW5jZS5wbGF5U2VnbWVudHMoXHJcbiAgICAgICAgICBbMCwgMzkwXSxcclxuICAgICAgICAgIHRydWVcclxuICAgICAgICApXHJcbiAgICAgICAgbG90dGllSW5zdGFuY2UubG9vcCA9IHRydWVcclxuICAgICAgfSwgMjAwMClcclxuICAgIH1cclxuICB9LCBbaXNUb3VjaCwgbG90dGllSW5zdGFuY2VdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoIXNob3dMb2dpbikge1xyXG4gICAgICBpZihpc0FjdGl2ZSkge1xyXG4gICAgICAgIHNldFNob3dMb2dpbih0cnVlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW2lzQWN0aXZlLCBzaG93TG9naW5dKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IHsgc3R5bGVzWydtYWluJ10gfT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBvbk1vdXNlTW92ZSA9IHsgb25Nb3VzZU1vdmUgfVxyXG4gICAgICAgICAgb25Nb3VzZUxlYXZlID0geyBvbk1vdXNlTGVhdmUgfVxyXG4gICAgICAgICAgY2xhc3NOYW1lID0geyBzdHlsZXNbJ2xvdHRpZS1jb250YWluZXInXSB9PlxyXG4gICAgICAgICAgPExvdHRpZVxyXG4gICAgICAgICAgICBvblBsYXllclJlYWR5ID0geyBnZXRMb3R0aWVJbnN0YW5jZSB9XHJcbiAgICAgICAgICAgIHBhcmFtcyA9IHsge1xyXG4gICAgICAgICAgICAgIHBhdGg6ICcvbG90dGllRmlsZXMvY2F0Lmpzb24nLFxyXG4gICAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0gfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0geyBjcyhzdHlsZXNbJ2xvZ2luJ10sIHtbc3R5bGVzWydsb2dpbi1hY3RpdmUnXV06IHNob3dMb2dpbn0pIH0+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkIGlkID0gXCJzdGFuZGFyZC1iYXNpY1wiIGxhYmVsID0gXCLotKblj7dcIiB2YXJpYW50ID0gXCJvdXRsaW5lZFwiLz5cclxuXHJcbiAgICAgICAgICA8VGV4dEZpZWxkIGlkID0gXCJzdGFuZGFyZC1iYXNpY1wiIGxhYmVsID0gXCLlr4bnoIFcIiB0eXBlID0gJ3Bhc3N3b3JkJyB2YXJpYW50ID0gXCJvdXRsaW5lZFwiLz5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudCA9IFwiY29udGFpbmVkXCIgY29sb3IgPSBcInByaW1hcnlcIiBjbGFzc2VzID0geyB7Y29udGFpbmVkUHJpbWFyeTogc3R5bGVzWydsb2dpbi1idG4nXX0gfT5cclxuICAgICAgICAgICAg55m75b2VXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMb3R0aWUiLCJfdGhyb3R0bGUiLCJzdHlsZXMiLCJjcyIsIlRleHRGaWVsZCIsIkJ1dHRvbiIsImNvdW50IiwidGltZXIiLCJJbmRleCIsImxvdHRpZUluc3RhbmNlIiwic2V0TG90dGllSW5zdGFuY2UiLCJ0b3VjaENvdW50Iiwic2V0VG91Y2hDb3VudCIsImlzVG91Y2giLCJzZXRJc1RvdWNoIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsInNob3dMb2dpbiIsInNldFNob3dMb2dpbiIsImdldExvdHRpZUluc3RhbmNlIiwiaW5zIiwicGxheVNlZ21lbnRzIiwibG9vcCIsIm9uTW91c2VNb3ZlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJsZWFkaW5nIiwib25Nb3VzZUxlYXZlIiwiZmx1c2giLCJjdXJyZW50RnJhbWUiLCJjbGVhclRpbWVvdXQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwicGF0aCIsImF1dG9wbGF5IiwiY29udGFpbmVkUHJpbWFyeSJdLCJzb3VyY2VSb290IjoiIn0=