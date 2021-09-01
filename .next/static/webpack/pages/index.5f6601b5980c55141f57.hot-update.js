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
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
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
          lineNumber: 82,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default().login), (0,E_Code_shrimp_slip_bot_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, (_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default()["login-active"]), showLogin)),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.TextField, {
            id: "standard-basic",
            label: "\u8D26\u53F7",
            variant: "outlined"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.TextField, {
            id: "standard-basic",
            label: "\u5BC6\u7801",
            type: "password",
            variant: "outlined"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
          variant: "contained",
          color: "primary",
          children: "\u767B\u5F55"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWY2NjAxYjU5ODBjNTUxNDFmNTcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlVLEtBQUssR0FBRyxDQUFaO0FBQ0EsSUFBSUMsS0FBSyxHQUFHLENBQVo7O0FBQ0EsSUFBTUMsS0FBSyxHQUFJLFNBQVRBLEtBQVMsR0FBTTtBQUFBOztBQUFBLGtCQUN5QlQsK0NBQVEsQ0FBZ0IsSUFBaEIsQ0FEakM7QUFBQSxNQUNaVSxjQURZO0FBQUEsTUFDSUMsaUJBREo7O0FBQUEsbUJBRWlCWCwrQ0FBUSxDQUFTLENBQVQsQ0FGekI7QUFBQSxNQUVaWSxVQUZZO0FBQUEsTUFFQUMsYUFGQTs7QUFBQSxtQkFHV2IsK0NBQVEsQ0FBVSxLQUFWLENBSG5CO0FBQUEsTUFHWmMsT0FIWTtBQUFBLE1BR0hDLFVBSEc7O0FBQUEsbUJBSWFmLCtDQUFRLENBQVUsS0FBVixDQUpyQjtBQUFBLE1BSVpnQixRQUpZO0FBQUEsTUFJRkMsV0FKRTs7QUFBQSxtQkFLZWpCLCtDQUFRLENBQVUsS0FBVixDQUx2QjtBQUFBLE1BS1prQixTQUxZO0FBQUEsTUFLREMsWUFMQzs7QUFNbkIsTUFBTUMsaUJBQWlCLEdBQUd0QixrREFBVyxDQUFDLFVBQUN1QixHQUFEO0FBQUEsV0FBd0JWLGlCQUFpQixDQUFDVSxHQUFELENBQXpDO0FBQUEsR0FBRCxFQUFpRCxFQUFqRCxDQUFyQztBQUVBdEIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBR1csY0FBSCxFQUFtQjtBQUNqQkEsTUFBQUEsY0FBYyxDQUFDWSxZQUFmLENBQ0UsQ0FBQyxDQUFELEVBQUksR0FBSixDQURGLEVBRUUsS0FGRjtBQUlBWixNQUFBQSxjQUFjLENBQUNhLElBQWYsR0FBc0IsSUFBdEI7QUFDRDtBQUNGLEdBUlEsRUFRTixDQUFD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RDtBQUFXLGNBQUUsRUFBRyxnQkFBaEI7QUFBaUMsaUJBQUssRUFBRyxjQUF6QztBQUE4QyxtQkFBTyxFQUFHO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFBQSxpQ0FDRSw4REFBQyx3REFBRDtBQUFXLGNBQUUsRUFBRyxnQkFBaEI7QUFBaUMsaUJBQUssRUFBRyxjQUF6QztBQUE4QyxnQkFBSSxFQUFHLFVBQXJEO0FBQWdFLG1CQUFPLEVBQUc7QUFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsZUFPRSw4REFBQyw2REFBRDtBQUFRLGlCQUFPLEVBQUcsV0FBbEI7QUFBOEIsZUFBSyxFQUFHLFNBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBOEJELENBN0ZEOztHQUFNVDs7S0FBQUE7QUErRk4sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmltYXRpb25JdGVtIH0gZnJvbSAnbG90dGllLXdlYidcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMb3R0aWUgZnJvbSAnLi4vY29tcG9uZW50cy9Mb3R0aWUnXHJcbmltcG9ydCBfdGhyb3R0bGUgZnJvbSAnbG9kYXNoL3Rocm90dGxlJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBjcyBmcm9tICdjbGFzc25hbWVzJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5sZXQgY291bnQgPSAwXHJcbmxldCB0aW1lciA9IDBcclxuY29uc3QgSW5kZXggID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtsb3R0aWVJbnN0YW5jZSwgc2V0TG90dGllSW5zdGFuY2VdID0gdXNlU3RhdGU8QW5pbWF0aW9uSXRlbT4obnVsbClcclxuICBjb25zdCBbdG91Y2hDb3VudCwgc2V0VG91Y2hDb3VudF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXHJcbiAgY29uc3QgW2lzVG91Y2gsIHNldElzVG91Y2hdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcbiAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuICBjb25zdCBbc2hvd0xvZ2luLCBzZXRTaG93TG9naW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcbiAgY29uc3QgZ2V0TG90dGllSW5zdGFuY2UgPSB1c2VDYWxsYmFjaygoaW5zOiBBbmltYXRpb25JdGVtKSA9PiBzZXRMb3R0aWVJbnN0YW5jZShpbnMpLCBbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKGxvdHRpZUluc3RhbmNlKSB7XHJcbiAgICAgIGxvdHRpZUluc3RhbmNlLnBsYXlTZWdtZW50cyhcclxuICAgICAgICBbMCwgMzkwXSxcclxuICAgICAgICBmYWxzZVxyXG4gICAgICApXHJcbiAgICAgIGxvdHRpZUluc3RhbmNlLmxvb3AgPSB0cnVlXHJcbiAgICB9XHJcbiAgfSwgW2xvdHRpZUluc3RhbmNlXSlcclxuXHJcbiAgY29uc3Qgb25Nb3VzZU1vdmUgPSB1c2VDYWxsYmFjayhfdGhyb3R0bGUoKGUpID0+IHtcclxuICAgIHNldElzVG91Y2godHJ1ZSlcclxuICAgIHNldFRvdWNoQ291bnQoKytjb3VudClcclxuICAgIGNvbnNvbGUubG9nKGNvdW50KVxyXG4gIH0sIDEwMDAsIHtsZWFkaW5nOiB0cnVlfSksIFtdKVxyXG5cclxuICBjb25zdCBvbk1vdXNlTGVhdmUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBvbk1vdXNlTW92ZS5mbHVzaCgpXHJcbiAgICBzZXRUb3VjaENvdW50KDApXHJcbiAgICBjb3VudCA9IDBcclxuICAgIHNldElzVG91Y2goZmFsc2UpXHJcbiAgICBzZXRJc0FjdGl2ZShmYWxzZSlcclxuICB9LCBbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKCFpc0FjdGl2ZSAmJiBsb3R0aWVJbnN0YW5jZT8uY3VycmVudEZyYW1lIDw9IDM5MCAmJiB0b3VjaENvdW50ID49IDMpIHtcclxuICAgICAgbG90dGllSW5zdGFuY2UucGxheVNlZ21lbnRzKFxyXG4gICAgICAgIFszOTAsIDQ4MF0sXHJcbiAgICAgICAgdHJ1ZVxyXG4gICAgICApXHJcbiAgICAgIGxvdHRpZUluc3RhbmNlLmxvb3AgPSBmYWxzZVxyXG4gICAgICBzZXRJc0FjdGl2ZSh0cnVlKVxyXG4gICAgfVxyXG4gIH0sIFt0b3VjaENvdW50LCBsb3R0aWVJbnN0YW5jZSwgaXNBY3RpdmVdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoIWlzVG91Y2ggJiYgbG90dGllSW5zdGFuY2UpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxyXG4gICAgICB0aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBsb3R0aWVJbnN0YW5jZS5wbGF5U2VnbWVudHMoXHJcbiAgICAgICAgICBbMCwgMzkwXSxcclxuICAgICAgICAgIHRydWVcclxuICAgICAgICApXHJcbiAgICAgICAgbG90dGllSW5zdGFuY2UubG9vcCA9IHRydWVcclxuICAgICAgfSwgMjAwMClcclxuICAgIH1cclxuICB9LCBbaXNUb3VjaCwgbG90dGllSW5zdGFuY2VdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoIXNob3dMb2dpbikge1xyXG4gICAgICBpZihpc0FjdGl2ZSkge1xyXG4gICAgICAgIHNldFNob3dMb2dpbih0cnVlKVxyXG4gICAgICB9IFxyXG4gICAgfVxyXG4gIH0sIFtpc0FjdGl2ZSwgc2hvd0xvZ2luXSlcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWUgPSB7IHN0eWxlc1snbWFpbiddIH0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgb25Nb3VzZU1vdmUgPSB7IG9uTW91c2VNb3ZlIH0gXHJcbiAgICAgICAgICBvbk1vdXNlTGVhdmUgPSB7IG9uTW91c2VMZWF2ZSB9XHJcbiAgICAgICAgICBjbGFzc05hbWUgPSB7IHN0eWxlc1snbG90dGllLWNvbnRhaW5lciddIH0+XHJcbiAgICAgICAgICA8TG90dGllIFxyXG4gICAgICAgICAgICBvblBsYXllclJlYWR5ID0geyBnZXRMb3R0aWVJbnN0YW5jZSB9XHJcbiAgICAgICAgICAgIHBhcmFtcyA9IHsgeyBcclxuICAgICAgICAgICAgICBwYXRoOiAnL2xvdHRpZUZpbGVzL2NhdC5qc29uJyxcclxuICAgICAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9IH0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHsgY3Moc3R5bGVzWydsb2dpbiddLCB7W3N0eWxlc1snbG9naW4tYWN0aXZlJ11dOiBzaG93TG9naW59KSB9PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFRleHRGaWVsZCBpZCA9IFwic3RhbmRhcmQtYmFzaWNcIiBsYWJlbCA9IFwi6LSm5Y+3XCIgdmFyaWFudCA9IFwib3V0bGluZWRcIi8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGQgaWQgPSBcInN0YW5kYXJkLWJhc2ljXCIgbGFiZWwgPSBcIuWvhueggVwiIHR5cGUgPSAncGFzc3dvcmQnIHZhcmlhbnQgPSBcIm91dGxpbmVkXCIvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQgPSBcImNvbnRhaW5lZFwiIGNvbG9yID0gXCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIOeZu+W9lVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTG90dGllIiwiX3Rocm90dGxlIiwic3R5bGVzIiwiY3MiLCJCdXR0b24iLCJUZXh0RmllbGQiLCJjb3VudCIsInRpbWVyIiwiSW5kZXgiLCJsb3R0aWVJbnN0YW5jZSIsInNldExvdHRpZUluc3RhbmNlIiwidG91Y2hDb3VudCIsInNldFRvdWNoQ291bnQiLCJpc1RvdWNoIiwic2V0SXNUb3VjaCIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJzaG93TG9naW4iLCJzZXRTaG93TG9naW4iLCJnZXRMb3R0aWVJbnN0YW5jZSIsImlucyIsInBsYXlTZWdtZW50cyIsImxvb3AiLCJvbk1vdXNlTW92ZSIsImUiLCJjb25zb2xlIiwibG9nIiwibGVhZGluZyIsIm9uTW91c2VMZWF2ZSIsImZsdXNoIiwiY3VycmVudEZyYW1lIiwiY2xlYXJUaW1lb3V0Iiwid2luZG93Iiwic2V0VGltZW91dCIsInBhdGgiLCJhdXRvcGxheSJdLCJzb3VyY2VSb290IjoiIn0=