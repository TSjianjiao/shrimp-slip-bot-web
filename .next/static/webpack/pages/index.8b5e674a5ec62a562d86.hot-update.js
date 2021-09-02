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
          id: "account",
          label: "\u8D26\u53F7",
          classes: {
            root: (_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default().input)
          },
          variant: "outlined"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.TextField, {
          id: "pwd",
          label: "\u5BC6\u7801",
          type: "password",
          classes: {
            root: (_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default().input)
          },
          variant: "outlined"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
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
          lineNumber: 103,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGI1ZTY3NGE1ZWM2MmE1NjJkODYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlVLEtBQUssR0FBRyxDQUFaO0FBQ0EsSUFBSUMsS0FBSyxHQUFHLENBQVo7O0FBQ0EsSUFBTUMsS0FBSyxHQUFJLFNBQVRBLEtBQVMsR0FBTTtBQUFBOztBQUFBLGtCQUN5QlQsK0NBQVEsQ0FBZ0IsSUFBaEIsQ0FEakM7QUFBQSxNQUNaVSxjQURZO0FBQUEsTUFDSUMsaUJBREo7O0FBQUEsbUJBRWlCWCwrQ0FBUSxDQUFTLENBQVQsQ0FGekI7QUFBQSxNQUVaWSxVQUZZO0FBQUEsTUFFQUMsYUFGQTs7QUFBQSxtQkFHV2IsK0NBQVEsQ0FBVSxLQUFWLENBSG5CO0FBQUEsTUFHWmMsT0FIWTtBQUFBLE1BR0hDLFVBSEc7O0FBQUEsbUJBSWFmLCtDQUFRLENBQVUsS0FBVixDQUpyQjtBQUFBLE1BSVpnQixRQUpZO0FBQUEsTUFJRkMsV0FKRTs7QUFBQSxtQkFLZWpCLCtDQUFRLENBQVUsS0FBVixDQUx2QjtBQUFBLE1BS1prQixTQUxZO0FBQUEsTUFLREMsWUFMQzs7QUFNbkIsTUFBTUMsaUJBQWlCLEdBQUd0QixrREFBVyxDQUFDLFVBQUN1QixHQUFEO0FBQUEsV0FBd0JWLGlCQUFpQixDQUFDVSxHQUFELENBQXpDO0FBQUEsR0FBRCxFQUFpRCxFQUFqRCxDQUFyQztBQUVBdEIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBR1csY0FBSCxFQUFtQjtBQUNqQkEsTUFBQUEsY0FBYyxDQUFDWSxZQUFmLENBQ0UsQ0FBQyxDQUFELEVBQUksR0FBSixDQURGLEVBRUUsS0FGRjtBQUlBWixNQUFBQSxjQUFjLENBQUNhLElBQWYsR0FBc0IsSUFBdEI7QUFDRDtBQUNGLEdBUlEsRUFRTixDQUFDYixjQUFE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U0FEUDtBQUVFLGVBQUssRUFBRyxjQUZWO0FBR0UsaUJBQU8sRUFBSztBQUFDbUIsWUFBQUEsSUFBSSxFQUFFbEMsaUVBQU07QUFBYixXQUhkO0FBSUUsaUJBQU8sRUFBRztBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRSw4REFBQyx3REFBRDtBQUNFLFlBQUUsRUFBRyxLQURQO0FBRUUsZUFBSyxFQUFHLGNBRlY7QUFHRSxjQUFJLEVBQUcsVUFIVDtBQUlFLGlCQUFPLEVBQUs7QUFBQ2tDLFlBQUFBLElBQUksRUFBRWxDLGlFQUFNO0FBQWIsV0FKZDtBQUtFLGlCQUFPLEVBQUc7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGLGVBYUUsOERBQUMscURBQUQ7QUFDRSxpQkFBTyxFQUFHLFdBRFo7QUFFRSxlQUFLLEVBQUcsU0FGVjtBQUdFLGlCQUFPLEVBQUs7QUFBQ21DLFlBQUFBLGdCQUFnQixFQUFFbkMsd0VBQU07QUFBekIsV0FIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQXVDRCxDQXRHRDs7R0FBTU07O0tBQUFBO0FBd0dOLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5pbWF0aW9uSXRlbSB9IGZyb20gJ2xvdHRpZS13ZWInXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTG90dGllIGZyb20gJy4uL2NvbXBvbmVudHMvTG90dGllJ1xyXG5pbXBvcnQgX3Rocm90dGxlIGZyb20gJ2xvZGFzaC90aHJvdHRsZSdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgY3MgZnJvbSAnY2xhc3NuYW1lcydcclxuaW1wb3J0IHsgVGV4dEZpZWxkLCBCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuXHJcbmxldCBjb3VudCA9IDBcclxubGV0IHRpbWVyID0gMFxyXG5jb25zdCBJbmRleCAgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2xvdHRpZUluc3RhbmNlLCBzZXRMb3R0aWVJbnN0YW5jZV0gPSB1c2VTdGF0ZTxBbmltYXRpb25JdGVtPihudWxsKVxyXG4gIGNvbnN0IFt0b3VjaENvdW50LCBzZXRUb3VjaENvdW50XSA9IHVzZVN0YXRlPG51bWJlcj4oMClcclxuICBjb25zdCBbaXNUb3VjaCwgc2V0SXNUb3VjaF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG4gIGNvbnN0IFtzaG93TG9naW4sIHNldFNob3dMb2dpbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuICBjb25zdCBnZXRMb3R0aWVJbnN0YW5jZSA9IHVzZUNhbGxiYWNrKChpbnM6IEFuaW1hdGlvbkl0ZW0pID0+IHNldExvdHRpZUluc3RhbmNlKGlucyksIFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYobG90dGllSW5zdGFuY2UpIHtcclxuICAgICAgbG90dGllSW5zdGFuY2UucGxheVNlZ21lbnRzKFxyXG4gICAgICAgIFswLCAzOTBdLFxyXG4gICAgICAgIGZhbHNlXHJcbiAgICAgIClcclxuICAgICAgbG90dGllSW5zdGFuY2UubG9vcCA9IHRydWVcclxuICAgIH1cclxuICB9LCBbbG90dGllSW5zdGFuY2VdKVxyXG5cclxuICBjb25zdCBvbk1vdXNlTW92ZSA9IHVzZUNhbGxiYWNrKF90aHJvdHRsZSgoZSkgPT4ge1xyXG4gICAgc2V0SXNUb3VjaCh0cnVlKVxyXG4gICAgc2V0VG91Y2hDb3VudCgrK2NvdW50KVxyXG4gICAgY29uc29sZS5sb2coY291bnQpXHJcbiAgfSwgMTAwMCwge2xlYWRpbmc6IHRydWV9KSwgW10pXHJcblxyXG4gIGNvbnN0IG9uTW91c2VMZWF2ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIG9uTW91c2VNb3ZlLmZsdXNoKClcclxuICAgIHNldFRvdWNoQ291bnQoMClcclxuICAgIGNvdW50ID0gMFxyXG4gICAgc2V0SXNUb3VjaChmYWxzZSlcclxuICAgIHNldElzQWN0aXZlKGZhbHNlKVxyXG4gIH0sIFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoIWlzQWN0aXZlICYmIGxvdHRpZUluc3RhbmNlPy5jdXJyZW50RnJhbWUgPD0gMzkwICYmIHRvdWNoQ291bnQgPj0gMikge1xyXG4gICAgICBsb3R0aWVJbnN0YW5jZS5wbGF5U2VnbWVudHMoXHJcbiAgICAgICAgWzM5MCwgNDgwXSxcclxuICAgICAgICB0cnVlXHJcbiAgICAgIClcclxuICAgICAgbG90dGllSW5zdGFuY2UubG9vcCA9IGZhbHNlXHJcbiAgICAgIHNldElzQWN0aXZlKHRydWUpXHJcbiAgICB9XHJcbiAgfSwgW3RvdWNoQ291bnQsIGxvdHRpZUluc3RhbmNlLCBpc0FjdGl2ZV0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZighaXNUb3VjaCAmJiBsb3R0aWVJbnN0YW5jZSkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpXHJcbiAgICAgIHRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGxvdHRpZUluc3RhbmNlLnBsYXlTZWdtZW50cyhcclxuICAgICAgICAgIFswLCAzOTBdLFxyXG4gICAgICAgICAgdHJ1ZVxyXG4gICAgICAgIClcclxuICAgICAgICBsb3R0aWVJbnN0YW5jZS5sb29wID0gdHJ1ZVxyXG4gICAgICB9LCAyMDAwKVxyXG4gICAgfVxyXG4gIH0sIFtpc1RvdWNoLCBsb3R0aWVJbnN0YW5jZV0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZighc2hvd0xvZ2luKSB7XHJcbiAgICAgIGlmKGlzQWN0aXZlKSB7XHJcbiAgICAgICAgc2V0U2hvd0xvZ2luKHRydWUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbaXNBY3RpdmUsIHNob3dMb2dpbl0pXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lID0geyBzdHlsZXNbJ21haW4nXSB9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIG9uTW91c2VNb3ZlID0geyBvbk1vdXNlTW92ZSB9XHJcbiAgICAgICAgICBvbk1vdXNlTGVhdmUgPSB7IG9uTW91c2VMZWF2ZSB9XHJcbiAgICAgICAgICBjbGFzc05hbWUgPSB7IHN0eWxlc1snbG90dGllLWNvbnRhaW5lciddIH0+XHJcbiAgICAgICAgICA8TG90dGllXHJcbiAgICAgICAgICAgIG9uUGxheWVyUmVhZHkgPSB7IGdldExvdHRpZUluc3RhbmNlIH1cclxuICAgICAgICAgICAgcGFyYW1zID0geyB7XHJcbiAgICAgICAgICAgICAgcGF0aDogJy9sb3R0aWVGaWxlcy9jYXQuanNvbicsXHJcbiAgICAgICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgICAgICBhdXRvcGxheTogZmFsc2VcclxuICAgICAgICAgICAgfSB9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7IGNzKHN0eWxlc1snbG9naW4nXSwge1tzdHlsZXNbJ2xvZ2luLWFjdGl2ZSddXTogc2hvd0xvZ2lufSkgfT5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgaWQgPSBcImFjY291bnRcIlxyXG4gICAgICAgICAgICBsYWJlbCA9IFwi6LSm5Y+3XCJcclxuICAgICAgICAgICAgY2xhc3NlcyA9IHsge3Jvb3Q6IHN0eWxlc1snaW5wdXQnXX0gfVxyXG4gICAgICAgICAgICB2YXJpYW50ID0gXCJvdXRsaW5lZFwiLz5cclxuXHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGlkID0gXCJwd2RcIlxyXG4gICAgICAgICAgICBsYWJlbCA9IFwi5a+G56CBXCJcclxuICAgICAgICAgICAgdHlwZSA9ICdwYXNzd29yZCdcclxuICAgICAgICAgICAgY2xhc3NlcyA9IHsge3Jvb3Q6IHN0eWxlc1snaW5wdXQnXX0gfVxyXG4gICAgICAgICAgICB2YXJpYW50ID0gXCJvdXRsaW5lZFwiLz5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudCA9IFwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3IgPSBcInByaW1hcnlcIlxyXG4gICAgICAgICAgICBjbGFzc2VzID0geyB7Y29udGFpbmVkUHJpbWFyeTogc3R5bGVzWydsb2dpbi1idG4nXX0gfT5cclxuICAgICAgICAgICAg55m75b2VXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMb3R0aWUiLCJfdGhyb3R0bGUiLCJzdHlsZXMiLCJjcyIsIlRleHRGaWVsZCIsIkJ1dHRvbiIsImNvdW50IiwidGltZXIiLCJJbmRleCIsImxvdHRpZUluc3RhbmNlIiwic2V0TG90dGllSW5zdGFuY2UiLCJ0b3VjaENvdW50Iiwic2V0VG91Y2hDb3VudCIsImlzVG91Y2giLCJzZXRJc1RvdWNoIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsInNob3dMb2dpbiIsInNldFNob3dMb2dpbiIsImdldExvdHRpZUluc3RhbmNlIiwiaW5zIiwicGxheVNlZ21lbnRzIiwibG9vcCIsIm9uTW91c2VNb3ZlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJsZWFkaW5nIiwib25Nb3VzZUxlYXZlIiwiZmx1c2giLCJjdXJyZW50RnJhbWUiLCJjbGVhclRpbWVvdXQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwicGF0aCIsImF1dG9wbGF5Iiwicm9vdCIsImNvbnRhaW5lZFByaW1hcnkiXSwic291cmNlUm9vdCI6IiJ9