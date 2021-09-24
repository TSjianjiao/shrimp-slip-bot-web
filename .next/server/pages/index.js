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
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_6__);


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
  const books = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery)(_apollo_client__WEBPACK_IMPORTED_MODULE_6__.gql`
    query {
      books {
        title
        author
      }
    }
  `);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!books.error) {
      console.log(books.data);
    } else {
      console.log(books.error);
    }
  }, [books]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onMouseMove: onMouseMove,
        onMouseLeave: onMouseLeave,
        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["lottie-container"]),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Lottie__WEBPACK_IMPORTED_MODULE_2__.default, {
          onPlayerReady: getLottieInstance,
          params: {
            path: '/lottieFiles/cat.json',
            loop: true,
            autoplay: false
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().login), {
          [(_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["login-active"])]: showLogin
        }),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.TextField, {
          id: "account",
          label: "\u8D26\u53F7",
          classes: {
            root: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().input)
          },
          variant: "outlined"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.TextField, {
          id: "pwd",
          label: "\u5BC6\u7801",
          type: "password",
          classes: {
            root: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().input)
          },
          variant: "outlined"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Button, {
          variant: "contained",
          color: "primary",
          classes: {
            containedPrimary: (_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["login-btn"])
          },
          children: "\u767B\u5F55"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 94,
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

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBTUEsTUFBTU8sTUFBc0IsR0FBSSxDQUFDO0FBQy9CQyxFQUFBQSxNQUQrQjtBQUUvQkMsRUFBQUEsU0FGK0I7QUFHL0JDLEVBQUFBLGFBQWEsR0FBRyxNQUFNLENBQUU7QUFITyxDQUFELEtBSTFCO0FBQ0osUUFBTUMsWUFBWSxHQUFHVCw2Q0FBTSxFQUEzQjtBQUNBLFFBQU07QUFBQSxPQUFDVSxjQUFEO0FBQUEsT0FBaUJDO0FBQWpCLE1BQXNDViwrQ0FBUSxDQUFnQixJQUFoQixDQUFwRDtBQUNBRixFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZCxRQUFHVSxZQUFZLENBQUNHLE9BQWhCLEVBQXlCO0FBQ3ZCLFlBQU1DLEdBQUcsR0FBR1gsK0RBQUE7QUFDVmEsUUFBQUEsU0FBUyxFQUFFTixZQUFZLENBQUNHO0FBRGQsU0FFUE4sTUFGTyxFQUFaO0FBSUFLLE1BQUFBLGlCQUFpQixDQUFDRSxHQUFELENBQWpCO0FBQ0FMLE1BQUFBLGFBQWEsQ0FBQ0ssR0FBRCxDQUFiO0FBQ0Q7QUFDRixHQVRRLEVBU04sRUFUTSxDQUFUO0FBV0Esc0JBQ0U7QUFBSyxPQUFHLEVBQUtKLFlBQWI7QUFBNEIsYUFBUyxFQUFLTCxpREFBRSxDQUFDRCxxRUFBRCxFQUFzQkksU0FBdEI7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBS0QsQ0F2QkQ7O0FBeUJBLGlFQUFlRixNQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFJaUIsS0FBSyxHQUFHLENBQVo7QUFDQSxJQUFJQyxLQUFLLEdBQUcsQ0FBWjs7QUFDQSxNQUFNQyxLQUFLLEdBQUksTUFBTTtBQUNuQixRQUFNO0FBQUEsT0FBQ2QsY0FBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFzQ1YsK0NBQVEsQ0FBZ0IsSUFBaEIsQ0FBcEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ3dCLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCekIsK0NBQVEsQ0FBUyxDQUFULENBQTVDO0FBQ0EsUUFBTTtBQUFBLE9BQUMwQixPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QjNCLCtDQUFRLENBQVUsS0FBVixDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDNEIsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEI3QiwrQ0FBUSxDQUFVLEtBQVYsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQzhCLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCL0IsK0NBQVEsQ0FBVSxLQUFWLENBQTFDO0FBQ0EsUUFBTWdDLGlCQUFpQixHQUFHakIsa0RBQVcsQ0FBRUgsR0FBRCxJQUF3QkYsaUJBQWlCLENBQUNFLEdBQUQsQ0FBMUMsRUFBaUQsRUFBakQsQ0FBckM7QUFFQWQsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBR1csY0FBSCxFQUFtQjtBQUNqQkEsTUFBQUEsY0FBYyxDQUFDd0IsWUFBZixDQUNFLENBQUMsQ0FBRCxFQUFJLEdBQUosQ0FERixFQUVFLEtBRkY7QUFJQXhCLE1BQUFBLGNBQWMsQ0FBQ3lCLElBQWYsR0FBc0IsSUFBdEI7QUFDRDtBQUNGLEdBUlEsRUFRTixDQUFDekIsY0FBRCxDQVJNLENBQVQ7QUFVQSxRQUFNMEIsV0FBVyxHQUFHcEIsa0RBQVcsQ0FBQ0Msc0RBQVMsQ0FBRW9CLENBQUQsSUFBTztBQUMvQ1QsSUFBQUEsVUFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBRixJQUFBQSxhQUFhLENBQUMsRUFBRUosS0FBSCxDQUFiO0FBQ0FnQixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWpCLEtBQVo7QUFDRCxHQUp3QyxFQUl0QyxJQUpzQyxFQUloQztBQUFDa0IsSUFBQUEsT0FBTyxFQUFFO0FBQVYsR0FKZ0MsQ0FBVixFQUlKLEVBSkksQ0FBL0I7QUFNQSxRQUFNQyxZQUFZLEdBQUd6QixrREFBVyxDQUFDLE1BQU07QUFDckNvQixJQUFBQSxXQUFXLENBQUNNLEtBQVo7QUFDQWhCLElBQUFBLGFBQWEsQ0FBQyxDQUFELENBQWI7QUFDQUosSUFBQUEsS0FBSyxHQUFHLENBQVI7QUFDQU0sSUFBQUEsVUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBRSxJQUFBQSxXQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0QsR0FOK0IsRUFNN0IsRUFONkIsQ0FBaEM7QUFRQS9CLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUcsQ0FBQzhCLFFBQUQsSUFBYSxDQUFBbkIsY0FBYyxTQUFkLElBQUFBLGNBQWMsV0FBZCxZQUFBQSxjQUFjLENBQUVpQyxZQUFoQixLQUFnQyxHQUE3QyxJQUFvRGxCLFVBQVUsSUFBSSxDQUFyRSxFQUF3RTtBQUN0RWYsTUFBQUEsY0FBYyxDQUFDd0IsWUFBZixDQUNFLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FERixFQUVFLElBRkY7QUFJQXhCLE1BQUFBLGNBQWMsQ0FBQ3lCLElBQWYsR0FBc0IsS0FBdEI7QUFDQUwsTUFBQUEsV0FBVyxDQUFDLElBQUQsQ0FBWDtBQUNEO0FBQ0YsR0FUUSxFQVNOLENBQUNMLFVBQUQsRUFBYWYsY0FBYixFQUE2Qm1CLFFBQTdCLENBVE0sQ0FBVDtBQVdBOUIsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBRyxDQUFDNEIsT0FBRCxJQUFZakIsY0FBZixFQUErQjtBQUM3QmtDLE1BQUFBLFlBQVksQ0FBQ3JCLEtBQUQsQ0FBWjtBQUNBQSxNQUFBQSxLQUFLLEdBQUdzQixNQUFNLENBQUNDLFVBQVAsQ0FBa0IsTUFBTTtBQUM5QnBDLFFBQUFBLGNBQWMsQ0FBQ3dCLFlBQWYsQ0FDRSxDQUFDLENBQUQsRUFBSSxHQUFKLENBREYsRUFFRSxJQUZGO0FBSUF4QixRQUFBQSxjQUFjLENBQUN5QixJQUFmLEdBQXNCLElBQXRCO0FBQ0QsT0FOTyxFQU1MLElBTkssQ0FBUjtBQU9EO0FBQ0YsR0FYUSxFQVdOLENBQUNSLE9BQUQsRUFBVWpCLGNBQVYsQ0FYTSxDQUFUO0FBYUFYLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUcsQ0FBQ2dDLFNBQUosRUFBZTtBQUNiLFVBQUdGLFFBQUgsRUFBYTtBQUNYRyxRQUFBQSxZQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0Q7QUFDRjtBQUNGLEdBTlEsRUFNTixDQUFDSCxRQUFELEVBQVdFLFNBQVgsQ0FOTSxDQUFUO0FBUUEsUUFBTWdCLEtBQUssR0FBRzNCLHdEQUFRLENBQUNDLCtDQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBUHdCLENBQXRCO0FBUUF0QixFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZCxRQUFHLENBQUNnRCxLQUFLLENBQUNDLEtBQVYsRUFBaUI7QUFDZlYsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlRLEtBQUssQ0FBQ0UsSUFBbEI7QUFDRCxLQUZELE1BRU07QUFDSlgsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlRLEtBQUssQ0FBQ0MsS0FBbEI7QUFDRDtBQUNGLEdBTlEsRUFNTixDQUFDRCxLQUFELENBTk0sQ0FBVDtBQU9BLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUs1QyxnRUFBbkI7QUFBQSw4QkFDRTtBQUNFLG1CQUFXLEVBQUtpQyxXQURsQjtBQUVFLG9CQUFZLEVBQUtLLFlBRm5CO0FBR0UsaUJBQVMsRUFBS3RDLCtFQUhoQjtBQUFBLCtCQUlFLDhEQUFDLHVEQUFEO0FBQ0UsdUJBQWEsRUFBSzhCLGlCQURwQjtBQUVFLGdCQUFNLEVBQUs7QUFDVGlCLFlBQUFBLElBQUksRUFBRSx1QkFERztBQUVUZixZQUFBQSxJQUFJLEVBQUUsSUFGRztBQUdUZ0IsWUFBQUEsUUFBUSxFQUFFO0FBSEQ7QUFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQWNFO0FBQUssaUJBQVMsRUFBSy9DLGlEQUFFLENBQUNELGlFQUFELEVBQWtCO0FBQUMsV0FBQ0EsMkVBQUQsR0FBMEI0QjtBQUEzQixTQUFsQixDQUFyQjtBQUFBLGdDQUNFLDhEQUFDLHdEQUFEO0FBQ0UsWUFBRSxFQUFHLFNBRFA7QUFFRSxlQUFLLEVBQUcsY0FGVjtBQUdFLGlCQUFPLEVBQUs7QUFBQ3FCLFlBQUFBLElBQUksRUFBRWpELGlFQUFNO0FBQWIsV0FIZDtBQUlFLGlCQUFPLEVBQUc7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBT0UsOERBQUMsd0RBQUQ7QUFDRSxZQUFFLEVBQUcsS0FEUDtBQUVFLGVBQUssRUFBRyxjQUZWO0FBR0UsY0FBSSxFQUFHLFVBSFQ7QUFJRSxpQkFBTyxFQUFLO0FBQUNpRCxZQUFBQSxJQUFJLEVBQUVqRCxpRUFBTTtBQUFiLFdBSmQ7QUFLRSxpQkFBTyxFQUFHO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRixlQWFFLDhEQUFDLHFEQUFEO0FBQ0UsaUJBQU8sRUFBRyxXQURaO0FBRUUsZUFBSyxFQUFHLFNBRlY7QUFHRSxpQkFBTyxFQUFLO0FBQUNrRCxZQUFBQSxnQkFBZ0IsRUFBRWxELHdFQUFNO0FBQXpCLFdBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBdUNELENBdEhEOztBQXdIQSxpRUFBZXFCLEtBQWY7Ozs7Ozs7Ozs7QUNwSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1RBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hyaW1wLXNsaXAtYm90LXdlYi8uL3NyYy9jb21wb25lbnRzL0xvdHRpZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vc2hyaW1wLXNsaXAtYm90LXdlYi8uL3NyYy9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vc2hyaW1wLXNsaXAtYm90LXdlYi8uL3NyYy9jb21wb25lbnRzL0xvdHRpZS9pbmRleC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9zaHJpbXAtc2xpcC1ib3Qtd2ViLy4vc3JjL3BhZ2VzL2luZGV4Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL3NocmltcC1zbGlwLWJvdC13ZWIvZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovL3NocmltcC1zbGlwLWJvdC13ZWIvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovL3NocmltcC1zbGlwLWJvdC13ZWIvZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vc2hyaW1wLXNsaXAtYm90LXdlYi9leHRlcm5hbCBcImxvZGFzaC90aHJvdHRsZVwiIiwid2VicGFjazovL3NocmltcC1zbGlwLWJvdC13ZWIvZXh0ZXJuYWwgXCJsb3R0aWUtd2ViXCIiLCJ3ZWJwYWNrOi8vc2hyaW1wLXNsaXAtYm90LXdlYi9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vc2hyaW1wLXNsaXAtYm90LXdlYi9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMb3R0aWVQbGF5ZXIsIHsgQW5pbWF0aW9uQ29uZmlnV2l0aERhdGEsIEFuaW1hdGlvbkNvbmZpZ1dpdGhQYXRoLCBBbmltYXRpb25JdGVtIH0gZnJvbSAnbG90dGllLXdlYidcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgY3MgZnJvbSAnY2xhc3NuYW1lcydcclxuaW50ZXJmYWNlIExvdHRpZVByb3BzIHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmdcclxuICBwYXJhbXM6IFBhcnRpYWw8QW5pbWF0aW9uQ29uZmlnV2l0aFBhdGggfCBBbmltYXRpb25Db25maWdXaXRoRGF0YT5cclxuICBvblBsYXllclJlYWR5PzogKGluczpBbmltYXRpb25JdGVtKSA9PiBhbnlcclxufVxyXG5jb25zdCBMb3R0aWU6RkM8TG90dGllUHJvcHM+ICA9ICh7XHJcbiAgcGFyYW1zLFxyXG4gIGNsYXNzTmFtZSxcclxuICBvblBsYXllclJlYWR5ID0gKCkgPT4ge31cclxufSkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKVxyXG4gIGNvbnN0IFtsb3R0aWVJbnN0YW5jZSwgc2V0TG90dGllSW5zdGFuY2VdID0gdXNlU3RhdGU8QW5pbWF0aW9uSXRlbT4obnVsbClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoY29udGFpbmVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgY29uc3QgaW5zID0gTG90dGllUGxheWVyLmxvYWRBbmltYXRpb24oe1xyXG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyUmVmLmN1cnJlbnQsXHJcbiAgICAgICAgLi4ucGFyYW1zXHJcbiAgICAgIH0pXHJcbiAgICAgIHNldExvdHRpZUluc3RhbmNlKGlucylcclxuICAgICAgb25QbGF5ZXJSZWFkeShpbnMpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgcmVmID0geyBjb250YWluZXJSZWYgfSBjbGFzc05hbWUgPSB7IGNzKHN0eWxlc1snY29udGFpbmVyJ10sIGNsYXNzTmFtZSkgfT5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvdHRpZSBcclxuIiwiaW1wb3J0IHsgQW5pbWF0aW9uSXRlbSB9IGZyb20gJ2xvdHRpZS13ZWInXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTG90dGllIGZyb20gJy4uL2NvbXBvbmVudHMvTG90dGllJ1xyXG5pbXBvcnQgX3Rocm90dGxlIGZyb20gJ2xvZGFzaC90aHJvdHRsZSdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgY3MgZnJvbSAnY2xhc3NuYW1lcydcclxuaW1wb3J0IHsgVGV4dEZpZWxkLCBCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHsgdXNlUXVlcnksIGdxbCwgdXNlTGF6eVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXHJcblxyXG5cclxubGV0IGNvdW50ID0gMFxyXG5sZXQgdGltZXIgPSAwXHJcbmNvbnN0IEluZGV4ICA9ICgpID0+IHtcclxuICBjb25zdCBbbG90dGllSW5zdGFuY2UsIHNldExvdHRpZUluc3RhbmNlXSA9IHVzZVN0YXRlPEFuaW1hdGlvbkl0ZW0+KG51bGwpXHJcbiAgY29uc3QgW3RvdWNoQ291bnQsIHNldFRvdWNoQ291bnRdID0gdXNlU3RhdGU8bnVtYmVyPigwKVxyXG4gIGNvbnN0IFtpc1RvdWNoLCBzZXRJc1RvdWNoXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG4gIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcbiAgY29uc3QgW3Nob3dMb2dpbiwgc2V0U2hvd0xvZ2luXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG4gIGNvbnN0IGdldExvdHRpZUluc3RhbmNlID0gdXNlQ2FsbGJhY2soKGluczogQW5pbWF0aW9uSXRlbSkgPT4gc2V0TG90dGllSW5zdGFuY2UoaW5zKSwgW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihsb3R0aWVJbnN0YW5jZSkge1xyXG4gICAgICBsb3R0aWVJbnN0YW5jZS5wbGF5U2VnbWVudHMoXHJcbiAgICAgICAgWzAsIDM5MF0sXHJcbiAgICAgICAgZmFsc2VcclxuICAgICAgKVxyXG4gICAgICBsb3R0aWVJbnN0YW5jZS5sb29wID0gdHJ1ZVxyXG4gICAgfVxyXG4gIH0sIFtsb3R0aWVJbnN0YW5jZV0pXHJcblxyXG4gIGNvbnN0IG9uTW91c2VNb3ZlID0gdXNlQ2FsbGJhY2soX3Rocm90dGxlKChlKSA9PiB7XHJcbiAgICBzZXRJc1RvdWNoKHRydWUpXHJcbiAgICBzZXRUb3VjaENvdW50KCsrY291bnQpXHJcbiAgICBjb25zb2xlLmxvZyhjb3VudClcclxuICB9LCAxMDAwLCB7bGVhZGluZzogdHJ1ZX0pLCBbXSlcclxuXHJcbiAgY29uc3Qgb25Nb3VzZUxlYXZlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgb25Nb3VzZU1vdmUuZmx1c2goKVxyXG4gICAgc2V0VG91Y2hDb3VudCgwKVxyXG4gICAgY291bnQgPSAwXHJcbiAgICBzZXRJc1RvdWNoKGZhbHNlKVxyXG4gICAgc2V0SXNBY3RpdmUoZmFsc2UpXHJcbiAgfSwgW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZighaXNBY3RpdmUgJiYgbG90dGllSW5zdGFuY2U/LmN1cnJlbnRGcmFtZSA8PSAzOTAgJiYgdG91Y2hDb3VudCA+PSAyKSB7XHJcbiAgICAgIGxvdHRpZUluc3RhbmNlLnBsYXlTZWdtZW50cyhcclxuICAgICAgICBbMzkwLCA0ODBdLFxyXG4gICAgICAgIHRydWVcclxuICAgICAgKVxyXG4gICAgICBsb3R0aWVJbnN0YW5jZS5sb29wID0gZmFsc2VcclxuICAgICAgc2V0SXNBY3RpdmUodHJ1ZSlcclxuICAgIH1cclxuICB9LCBbdG91Y2hDb3VudCwgbG90dGllSW5zdGFuY2UsIGlzQWN0aXZlXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKCFpc1RvdWNoICYmIGxvdHRpZUluc3RhbmNlKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcclxuICAgICAgdGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgbG90dGllSW5zdGFuY2UucGxheVNlZ21lbnRzKFxyXG4gICAgICAgICAgWzAsIDM5MF0sXHJcbiAgICAgICAgICB0cnVlXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGxvdHRpZUluc3RhbmNlLmxvb3AgPSB0cnVlXHJcbiAgICAgIH0sIDIwMDApXHJcbiAgICB9XHJcbiAgfSwgW2lzVG91Y2gsIGxvdHRpZUluc3RhbmNlXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKCFzaG93TG9naW4pIHtcclxuICAgICAgaWYoaXNBY3RpdmUpIHtcclxuICAgICAgICBzZXRTaG93TG9naW4odHJ1ZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtpc0FjdGl2ZSwgc2hvd0xvZ2luXSlcclxuXHJcbiAgY29uc3QgYm9va3MgPSB1c2VRdWVyeShncWxgXHJcbiAgICBxdWVyeSB7XHJcbiAgICAgIGJvb2tzIHtcclxuICAgICAgICB0aXRsZVxyXG4gICAgICAgIGF1dGhvclxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgYClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoIWJvb2tzLmVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGJvb2tzLmRhdGEpXHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGJvb2tzLmVycm9yKVxyXG4gICAgfVxyXG4gIH0sIFtib29rc10pXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lID0geyBzdHlsZXNbJ21haW4nXSB9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIG9uTW91c2VNb3ZlID0geyBvbk1vdXNlTW92ZSB9XHJcbiAgICAgICAgICBvbk1vdXNlTGVhdmUgPSB7IG9uTW91c2VMZWF2ZSB9XHJcbiAgICAgICAgICBjbGFzc05hbWUgPSB7IHN0eWxlc1snbG90dGllLWNvbnRhaW5lciddIH0+XHJcbiAgICAgICAgICA8TG90dGllXHJcbiAgICAgICAgICAgIG9uUGxheWVyUmVhZHkgPSB7IGdldExvdHRpZUluc3RhbmNlIH1cclxuICAgICAgICAgICAgcGFyYW1zID0geyB7XHJcbiAgICAgICAgICAgICAgcGF0aDogJy9sb3R0aWVGaWxlcy9jYXQuanNvbicsXHJcbiAgICAgICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgICAgICBhdXRvcGxheTogZmFsc2VcclxuICAgICAgICAgICAgfSB9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7IGNzKHN0eWxlc1snbG9naW4nXSwge1tzdHlsZXNbJ2xvZ2luLWFjdGl2ZSddXTogc2hvd0xvZ2lufSkgfT5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgaWQgPSBcImFjY291bnRcIlxyXG4gICAgICAgICAgICBsYWJlbCA9IFwi6LSm5Y+3XCJcclxuICAgICAgICAgICAgY2xhc3NlcyA9IHsge3Jvb3Q6IHN0eWxlc1snaW5wdXQnXX0gfVxyXG4gICAgICAgICAgICB2YXJpYW50ID0gXCJvdXRsaW5lZFwiLz5cclxuXHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGlkID0gXCJwd2RcIlxyXG4gICAgICAgICAgICBsYWJlbCA9IFwi5a+G56CBXCJcclxuICAgICAgICAgICAgdHlwZSA9ICdwYXNzd29yZCdcclxuICAgICAgICAgICAgY2xhc3NlcyA9IHsge3Jvb3Q6IHN0eWxlc1snaW5wdXQnXX0gfVxyXG4gICAgICAgICAgICB2YXJpYW50ID0gXCJvdXRsaW5lZFwiLz5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudCA9IFwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3IgPSBcInByaW1hcnlcIlxyXG4gICAgICAgICAgICBjbGFzc2VzID0geyB7Y29udGFpbmVkUHJpbWFyeTogc3R5bGVzWydsb2dpbi1idG4nXX0gfT5cclxuICAgICAgICAgICAg55m75b2VXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkxvdHRpZV9jb250YWluZXJfX2tNY3FLXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluXCI6IFwiaW5kZXhfbWFpbl9fM2Y3SURcIixcblx0XCJsb3R0aWUtY29udGFpbmVyXCI6IFwiaW5kZXhfbG90dGllLWNvbnRhaW5lcl9fMXBReUpcIixcblx0XCJsb2dpblwiOiBcImluZGV4X2xvZ2luX18yRGdNUFwiLFxuXHRcImxvZ2luLWFjdGl2ZVwiOiBcImluZGV4X2xvZ2luLWFjdGl2ZV9fM19qOGZcIixcblx0XCJzaG93X2xvZ2luXCI6IFwiaW5kZXhfc2hvd19sb2dpbl9fM1FWOGVcIixcblx0XCJsb2dpbi1idG5cIjogXCJpbmRleF9sb2dpbi1idG5fXzFFNVVnXCIsXG5cdFwibm90Y2hlZC1vdXRsaW5lXCI6IFwiaW5kZXhfbm90Y2hlZC1vdXRsaW5lX18xbUZ0QlwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2gvdGhyb3R0bGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG90dGllLXdlYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJMb3R0aWVQbGF5ZXIiLCJzdHlsZXMiLCJjcyIsIkxvdHRpZSIsInBhcmFtcyIsImNsYXNzTmFtZSIsIm9uUGxheWVyUmVhZHkiLCJjb250YWluZXJSZWYiLCJsb3R0aWVJbnN0YW5jZSIsInNldExvdHRpZUluc3RhbmNlIiwiY3VycmVudCIsImlucyIsImxvYWRBbmltYXRpb24iLCJjb250YWluZXIiLCJ1c2VDYWxsYmFjayIsIl90aHJvdHRsZSIsIlRleHRGaWVsZCIsIkJ1dHRvbiIsInVzZVF1ZXJ5IiwiZ3FsIiwiY291bnQiLCJ0aW1lciIsIkluZGV4IiwidG91Y2hDb3VudCIsInNldFRvdWNoQ291bnQiLCJpc1RvdWNoIiwic2V0SXNUb3VjaCIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJzaG93TG9naW4iLCJzZXRTaG93TG9naW4iLCJnZXRMb3R0aWVJbnN0YW5jZSIsInBsYXlTZWdtZW50cyIsImxvb3AiLCJvbk1vdXNlTW92ZSIsImUiLCJjb25zb2xlIiwibG9nIiwibGVhZGluZyIsIm9uTW91c2VMZWF2ZSIsImZsdXNoIiwiY3VycmVudEZyYW1lIiwiY2xlYXJUaW1lb3V0Iiwid2luZG93Iiwic2V0VGltZW91dCIsImJvb2tzIiwiZXJyb3IiLCJkYXRhIiwicGF0aCIsImF1dG9wbGF5Iiwicm9vdCIsImNvbnRhaW5lZFByaW1hcnkiXSwic291cmNlUm9vdCI6IiJ9