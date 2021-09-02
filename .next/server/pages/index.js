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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\Code\\mirai\\shrimp-slip-bot-web\\src\\components\\Lottie\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Lottie = ({
  params,
  className,
  onPlayerReady = () => {}
}) => {
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const {
    0: lottieInstance,
    1: setLottieInstance
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (containerRef.current) {
      const ins = lottie_web__WEBPACK_IMPORTED_MODULE_2___default().loadAnimation(_objectSpread({
        container: containerRef.current
      }, params));
      setLottieInstance(ins);
      onPlayerReady(ins);
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    ref: containerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container), className)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
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
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/throttle */ "lodash/throttle");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "D:\\Code\\mirai\\shrimp-slip-bot-web\\src\\pages\\index.tsx";






let count = 0;
let timer = 0;

const Index = () => {
  const {
    0: lottieInstance,
    1: setLottieInstance
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: touchCount,
    1: setTouchCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: isTouch,
    1: setIsTouch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: isActive,
    1: setIsActive
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: showLogin,
    1: setShowLogin
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const getLottieInstance = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(ins => setLottieInstance(ins), []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (lottieInstance) {
      lottieInstance.playSegments([0, 390], false);
      lottieInstance.loop = true;
    }
  }, [lottieInstance]);
  const onMouseMove = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default()(e => {
    setIsTouch(true);
    setTouchCount(++count);
    console.log(count);
  }, 1000, {
    leading: true
  }), []);
  const onMouseLeave = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    onMouseMove.flush();
    setTouchCount(0);
    count = 0;
    setIsTouch(false);
    setIsActive(false);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!isActive && (lottieInstance === null || lottieInstance === void 0 ? void 0 : lottieInstance.currentFrame) <= 390 && touchCount >= 2) {
      lottieInstance.playSegments([390, 480], true);
      lottieInstance.loop = false;
      setIsActive(true);
    }
  }, [touchCount, lottieInstance, isActive]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!isTouch && lottieInstance) {
      clearTimeout(timer);
      timer = window.setTimeout(() => {
        lottieInstance.playSegments([0, 390], true);
        lottieInstance.loop = true;
      }, 2000);
    }
  }, [isTouch, lottieInstance]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
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
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Lottie__WEBPACK_IMPORTED_MODULE_2__.default, {
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
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default().login), {
          [(_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default()["login-active"])]: showLogin
        }),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.TextField, {
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
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.TextField, {
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
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Button, {
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
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
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
	"main": "index_main__3f7ID",
	"lottie-container": "index_lottie-container__1pQyJ",
	"login": "index_login__2DgMP",
	"login-active": "index_login-active__3_j8f",
	"show_login": "index_show_login__3QV8e",
	"login-btn": "index_login-btn__1E5Ug",
	"notched-outline": "index_notched-outline__1mFtB"
};


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ "lodash/throttle":
/*!**********************************!*\
  !*** external "lodash/throttle" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/throttle");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sRUFBRztBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEYsZUFhRSw4REFBQyxxREFBRDtBQUNFLGlCQUFPLEVBQUcsV0FEWjtBQUVFLGVBQUssRUFBRyxTQUZWO0FBR0UsaUJBQU8sRUFBSztBQUFDNkMsWUFBQUEsZ0JBQWdCLEVBQUU3Qyx3RUFBTTtBQUF6QixXQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQXVDRCxDQXRHRDs7QUF3R0EsaUVBQWVtQixLQUFmOzs7Ozs7Ozs7O0FDbEhBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNUQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NocmltcC1zbGlwLWJvdC13ZWIvLi9zcmMvY29tcG9uZW50cy9Mb3R0aWUvaW5kZXgudHN4Iiwid2VicGFjazovL3NocmltcC1zbGlwLWJvdC13ZWIvLi9zcmMvcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL3NocmltcC1zbGlwLWJvdC13ZWIvLi9zcmMvY29tcG9uZW50cy9Mb3R0aWUvaW5kZXgubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vc2hyaW1wLXNsaXAtYm90LXdlYi8uL3NyYy9wYWdlcy9pbmRleC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9zaHJpbXAtc2xpcC1ib3Qtd2ViL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly9zaHJpbXAtc2xpcC1ib3Qtd2ViL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovL3NocmltcC1zbGlwLWJvdC13ZWIvZXh0ZXJuYWwgXCJsb2Rhc2gvdGhyb3R0bGVcIiIsIndlYnBhY2s6Ly9zaHJpbXAtc2xpcC1ib3Qtd2ViL2V4dGVybmFsIFwibG90dGllLXdlYlwiIiwid2VicGFjazovL3NocmltcC1zbGlwLWJvdC13ZWIvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3NocmltcC1zbGlwLWJvdC13ZWIvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTG90dGllUGxheWVyLCB7IEFuaW1hdGlvbkNvbmZpZ1dpdGhEYXRhLCBBbmltYXRpb25Db25maWdXaXRoUGF0aCwgQW5pbWF0aW9uSXRlbSB9IGZyb20gJ2xvdHRpZS13ZWInXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IGNzIGZyb20gJ2NsYXNzbmFtZXMnXHJcbmludGVyZmFjZSBMb3R0aWVQcm9wcyB7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nXHJcbiAgcGFyYW1zOiBQYXJ0aWFsPEFuaW1hdGlvbkNvbmZpZ1dpdGhQYXRoIHwgQW5pbWF0aW9uQ29uZmlnV2l0aERhdGE+XHJcbiAgb25QbGF5ZXJSZWFkeT86IChpbnM6QW5pbWF0aW9uSXRlbSkgPT4gYW55XHJcbn1cclxuY29uc3QgTG90dGllOkZDPExvdHRpZVByb3BzPiAgPSAoe1xyXG4gIHBhcmFtcyxcclxuICBjbGFzc05hbWUsXHJcbiAgb25QbGF5ZXJSZWFkeSA9ICgpID0+IHt9XHJcbn0pID0+IHtcclxuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KClcclxuICBjb25zdCBbbG90dGllSW5zdGFuY2UsIHNldExvdHRpZUluc3RhbmNlXSA9IHVzZVN0YXRlPEFuaW1hdGlvbkl0ZW0+KG51bGwpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKGNvbnRhaW5lclJlZi5jdXJyZW50KSB7XHJcbiAgICAgIGNvbnN0IGlucyA9IExvdHRpZVBsYXllci5sb2FkQW5pbWF0aW9uKHtcclxuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lclJlZi5jdXJyZW50LFxyXG4gICAgICAgIC4uLnBhcmFtc1xyXG4gICAgICB9KVxyXG4gICAgICBzZXRMb3R0aWVJbnN0YW5jZShpbnMpXHJcbiAgICAgIG9uUGxheWVyUmVhZHkoaW5zKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHJlZiA9IHsgY29udGFpbmVyUmVmIH0gY2xhc3NOYW1lID0geyBjcyhzdHlsZXNbJ2NvbnRhaW5lciddLCBjbGFzc05hbWUpIH0+XHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb3R0aWUgXHJcbiIsImltcG9ydCB7IEFuaW1hdGlvbkl0ZW0gfSBmcm9tICdsb3R0aWUtd2ViJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExvdHRpZSBmcm9tICcuLi9jb21wb25lbnRzL0xvdHRpZSdcclxuaW1wb3J0IF90aHJvdHRsZSBmcm9tICdsb2Rhc2gvdGhyb3R0bGUnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IGNzIGZyb20gJ2NsYXNzbmFtZXMnXHJcbmltcG9ydCB7IFRleHRGaWVsZCwgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5sZXQgY291bnQgPSAwXHJcbmxldCB0aW1lciA9IDBcclxuY29uc3QgSW5kZXggID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtsb3R0aWVJbnN0YW5jZSwgc2V0TG90dGllSW5zdGFuY2VdID0gdXNlU3RhdGU8QW5pbWF0aW9uSXRlbT4obnVsbClcclxuICBjb25zdCBbdG91Y2hDb3VudCwgc2V0VG91Y2hDb3VudF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXHJcbiAgY29uc3QgW2lzVG91Y2gsIHNldElzVG91Y2hdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcbiAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuICBjb25zdCBbc2hvd0xvZ2luLCBzZXRTaG93TG9naW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcbiAgY29uc3QgZ2V0TG90dGllSW5zdGFuY2UgPSB1c2VDYWxsYmFjaygoaW5zOiBBbmltYXRpb25JdGVtKSA9PiBzZXRMb3R0aWVJbnN0YW5jZShpbnMpLCBbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKGxvdHRpZUluc3RhbmNlKSB7XHJcbiAgICAgIGxvdHRpZUluc3RhbmNlLnBsYXlTZWdtZW50cyhcclxuICAgICAgICBbMCwgMzkwXSxcclxuICAgICAgICBmYWxzZVxyXG4gICAgICApXHJcbiAgICAgIGxvdHRpZUluc3RhbmNlLmxvb3AgPSB0cnVlXHJcbiAgICB9XHJcbiAgfSwgW2xvdHRpZUluc3RhbmNlXSlcclxuXHJcbiAgY29uc3Qgb25Nb3VzZU1vdmUgPSB1c2VDYWxsYmFjayhfdGhyb3R0bGUoKGUpID0+IHtcclxuICAgIHNldElzVG91Y2godHJ1ZSlcclxuICAgIHNldFRvdWNoQ291bnQoKytjb3VudClcclxuICAgIGNvbnNvbGUubG9nKGNvdW50KVxyXG4gIH0sIDEwMDAsIHtsZWFkaW5nOiB0cnVlfSksIFtdKVxyXG5cclxuICBjb25zdCBvbk1vdXNlTGVhdmUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBvbk1vdXNlTW92ZS5mbHVzaCgpXHJcbiAgICBzZXRUb3VjaENvdW50KDApXHJcbiAgICBjb3VudCA9IDBcclxuICAgIHNldElzVG91Y2goZmFsc2UpXHJcbiAgICBzZXRJc0FjdGl2ZShmYWxzZSlcclxuICB9LCBbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKCFpc0FjdGl2ZSAmJiBsb3R0aWVJbnN0YW5jZT8uY3VycmVudEZyYW1lIDw9IDM5MCAmJiB0b3VjaENvdW50ID49IDIpIHtcclxuICAgICAgbG90dGllSW5zdGFuY2UucGxheVNlZ21lbnRzKFxyXG4gICAgICAgIFszOTAsIDQ4MF0sXHJcbiAgICAgICAgdHJ1ZVxyXG4gICAgICApXHJcbiAgICAgIGxvdHRpZUluc3RhbmNlLmxvb3AgPSBmYWxzZVxyXG4gICAgICBzZXRJc0FjdGl2ZSh0cnVlKVxyXG4gICAgfVxyXG4gIH0sIFt0b3VjaENvdW50LCBsb3R0aWVJbnN0YW5jZSwgaXNBY3RpdmVdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoIWlzVG91Y2ggJiYgbG90dGllSW5zdGFuY2UpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxyXG4gICAgICB0aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBsb3R0aWVJbnN0YW5jZS5wbGF5U2VnbWVudHMoXHJcbiAgICAgICAgICBbMCwgMzkwXSxcclxuICAgICAgICAgIHRydWVcclxuICAgICAgICApXHJcbiAgICAgICAgbG90dGllSW5zdGFuY2UubG9vcCA9IHRydWVcclxuICAgICAgfSwgMjAwMClcclxuICAgIH1cclxuICB9LCBbaXNUb3VjaCwgbG90dGllSW5zdGFuY2VdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoIXNob3dMb2dpbikge1xyXG4gICAgICBpZihpc0FjdGl2ZSkge1xyXG4gICAgICAgIHNldFNob3dMb2dpbih0cnVlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW2lzQWN0aXZlLCBzaG93TG9naW5dKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IHsgc3R5bGVzWydtYWluJ10gfT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBvbk1vdXNlTW92ZSA9IHsgb25Nb3VzZU1vdmUgfVxyXG4gICAgICAgICAgb25Nb3VzZUxlYXZlID0geyBvbk1vdXNlTGVhdmUgfVxyXG4gICAgICAgICAgY2xhc3NOYW1lID0geyBzdHlsZXNbJ2xvdHRpZS1jb250YWluZXInXSB9PlxyXG4gICAgICAgICAgPExvdHRpZVxyXG4gICAgICAgICAgICBvblBsYXllclJlYWR5ID0geyBnZXRMb3R0aWVJbnN0YW5jZSB9XHJcbiAgICAgICAgICAgIHBhcmFtcyA9IHsge1xyXG4gICAgICAgICAgICAgIHBhdGg6ICcvbG90dGllRmlsZXMvY2F0Lmpzb24nLFxyXG4gICAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0gfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0geyBjcyhzdHlsZXNbJ2xvZ2luJ10sIHtbc3R5bGVzWydsb2dpbi1hY3RpdmUnXV06IHNob3dMb2dpbn0pIH0+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGlkID0gXCJhY2NvdW50XCJcclxuICAgICAgICAgICAgbGFiZWwgPSBcIui0puWPt1wiXHJcbiAgICAgICAgICAgIGNsYXNzZXMgPSB7IHtyb290OiBzdHlsZXNbJ2lucHV0J119IH1cclxuICAgICAgICAgICAgdmFyaWFudCA9IFwib3V0bGluZWRcIi8+XHJcblxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBpZCA9IFwicHdkXCJcclxuICAgICAgICAgICAgbGFiZWwgPSBcIuWvhueggVwiXHJcbiAgICAgICAgICAgIHR5cGUgPSAncGFzc3dvcmQnXHJcbiAgICAgICAgICAgIGNsYXNzZXMgPSB7IHtyb290OiBzdHlsZXNbJ2lucHV0J119IH1cclxuICAgICAgICAgICAgdmFyaWFudCA9IFwib3V0bGluZWRcIi8+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQgPSBcImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIGNvbG9yID0gXCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgY2xhc3NlcyA9IHsge2NvbnRhaW5lZFByaW1hcnk6IHN0eWxlc1snbG9naW4tYnRuJ119IH0+XHJcbiAgICAgICAgICAgIOeZu+W9lVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJMb3R0aWVfY29udGFpbmVyX19rTWNxS1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpblwiOiBcImluZGV4X21haW5fXzNmN0lEXCIsXG5cdFwibG90dGllLWNvbnRhaW5lclwiOiBcImluZGV4X2xvdHRpZS1jb250YWluZXJfXzFwUXlKXCIsXG5cdFwibG9naW5cIjogXCJpbmRleF9sb2dpbl9fMkRnTVBcIixcblx0XCJsb2dpbi1hY3RpdmVcIjogXCJpbmRleF9sb2dpbi1hY3RpdmVfXzNfajhmXCIsXG5cdFwic2hvd19sb2dpblwiOiBcImluZGV4X3Nob3dfbG9naW5fXzNRVjhlXCIsXG5cdFwibG9naW4tYnRuXCI6IFwiaW5kZXhfbG9naW4tYnRuX18xRTVVZ1wiLFxuXHRcIm5vdGNoZWQtb3V0bGluZVwiOiBcImluZGV4X25vdGNoZWQtb3V0bGluZV9fMW1GdEJcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoL3Rocm90dGxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvdHRpZS13ZWJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiTG90dGllUGxheWVyIiwic3R5bGVzIiwiY3MiLCJMb3R0aWUiLCJwYXJhbXMiLCJjbGFzc05hbWUiLCJvblBsYXllclJlYWR5IiwiY29udGFpbmVyUmVmIiwibG90dGllSW5zdGFuY2UiLCJzZXRMb3R0aWVJbnN0YW5jZSIsImN1cnJlbnQiLCJpbnMiLCJsb2FkQW5pbWF0aW9uIiwiY29udGFpbmVyIiwidXNlQ2FsbGJhY2siLCJfdGhyb3R0bGUiLCJUZXh0RmllbGQiLCJCdXR0b24iLCJjb3VudCIsInRpbWVyIiwiSW5kZXgiLCJ0b3VjaENvdW50Iiwic2V0VG91Y2hDb3VudCIsImlzVG91Y2giLCJzZXRJc1RvdWNoIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsInNob3dMb2dpbiIsInNldFNob3dMb2dpbiIsImdldExvdHRpZUluc3RhbmNlIiwicGxheVNlZ21lbnRzIiwibG9vcCIsIm9uTW91c2VNb3ZlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJsZWFkaW5nIiwib25Nb3VzZUxlYXZlIiwiZmx1c2giLCJjdXJyZW50RnJhbWUiLCJjbGVhclRpbWVvdXQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwicGF0aCIsImF1dG9wbGF5Iiwicm9vdCIsImNvbnRhaW5lZFByaW1hcnkiXSwic291cmNlUm9vdCI6IiJ9