self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Lottie/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Lottie/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_Code_shrimp_slip_bot_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lottie-web */ "./node_modules/lottie-web/build/player/lottie.js");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.scss */ "./src/components/Lottie/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classname__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classname */ "./node_modules/classname/classname.js");
/* harmony import */ var classname__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classname__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\Code\\shrimp-slip-bot-web\\src\\components\\Lottie\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_Code_shrimp_slip_bot_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Lottie = function Lottie(_ref) {
  _s();

  var params = _ref.params,
      className = _ref.className;
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
    className: classname__WEBPACK_IMPORTED_MODULE_4___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container), className)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
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


/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Lottie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Lottie */ "./src/components/Lottie/index.tsx");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\Code\\shrimp-slip-bot-web\\src\\pages\\index.tsx",
    _this = undefined;





var Index = function Index() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["lottie-container"]),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Lottie__WEBPACK_IMPORTED_MODULE_2__.default, {
      params: {
        path: '/lottieFiles/cat.json'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, _this);
};

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


/***/ }),

/***/ "./node_modules/classname/classname.js":
/*!*********************************************!*\
  !*** ./node_modules/classname/classname.js ***!
  \*********************************************/
/***/ (function(module) {

function classname () {
    var result = {},
        objects = {},
        resultString = "";

    function add (strings) {
        classname.each(strings.split(" "), function (string) {
            result[string] = !!string;
        });
    }

    classname.each([].slice.call(arguments), function (x) {
        switch (classname.getType(x)) {
        case "string":
        case "number":
            add(x);
            break;

        case "array":
            add(classname.apply(null, x));
            break;

        case "element":
            add(classname(x.className || ""));
            break;

        case "nodelist":
            add(classname.apply(null, [].slice.call(x)));
            break;

        case "jquery":
            add(classname.apply(null, x.get()));
            break;

        case "object":
            objects = classname.extend(objects, x);
            break;
        }
    });

    result = classname.extend(result, objects);

    classname.each(result, function (val, key) {
        if (val) {
            resultString += " " + key;
        }
    });

    return resultString.substr(1);
}

classname.setTo = function (elements) {
    var type = classname.getType(elements);

    if (type === "element") {
        elements = [elements];
    }

    if (type === "jquery") {
        elements = elements.get();
    }

    if (type === "nodelist") {
        elements = [].slice.call(elements);
    }

    return function () {
        var classNames = classname.apply(null, arguments);

        classname.each(elements, function (element) {
            element.className = classNames;
        });
    };
};

classname.each = function (arr, fn) {
    var type = classname.getType(arr);

    if (type === "array") {
        for (var i = 0; i < arr.length; i++) {
            fn(arr[i], i);
        }
    }

    if (type === "object") {
        for (var key in arr) {
            fn(arr[key], key);
        }
    }
};

classname.getType = function (x) {
    var type = Object.prototype.toString.call(x).slice(8, -1).toLowerCase();

    if (type === "object" && x.jquery) {
        return "jquery";
    }

    if (type.indexOf("element") > 1) {
        return "element";
    }

    return type;
};

classname.extend = function (obj1, obj2) {
    var result = {},
        objs = [obj1, obj2];

    classname.each(objs, function (obj) {
        classname.each(obj, function (val, key) {
            if (obj.hasOwnProperty(key)) {
                result[key] = val;
            }
        });
    });

    return result;
};

if ( true && module.exports) {
    module.exports = classname;
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2ExNTUyOTk3ZDlkMTVhOGY4YjguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQSxJQUFNTSxNQUFzQixHQUFJLFNBQTFCQSxNQUEwQixPQUcxQjtBQUFBOztBQUFBLE1BRkpDLE1BRUksUUFGSkEsTUFFSTtBQUFBLE1BREpDLFNBQ0ksUUFESkEsU0FDSTtBQUNKLE1BQU1DLFlBQVksR0FBR1AsNkNBQU0sRUFBM0I7QUFDQUQsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBR1EsWUFBWSxDQUFDQyxPQUFoQixFQUF5QjtBQUN2QlAsTUFBQUEsK0RBQUE7QUFDRVMsUUFBQUEsU0FBUyxFQUFFSCxZQUFZLENBQUNDO0FBRDFCLFNBRUtILE1BRkw7QUFLRDtBQUNGLEdBUlEsRUFRTixFQVJNLENBQVQ7QUFTQSxzQkFDRTtBQUFLLE9BQUcsRUFBS0UsWUFBYjtBQUE0QixhQUFTLEVBQUtKLGdEQUFFLENBQUNELHFFQUFELEVBQXNCSSxTQUF0QjtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQW5CRDs7R0FBTUY7O0tBQUFBO0FBcUJOLCtEQUFlQSxNQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNTyxLQUFLLEdBQUksU0FBVEEsS0FBUyxHQUFNO0FBQ25CLHNCQUNFO0FBQUssYUFBUyxFQUFLVCwrRUFBbkI7QUFBQSwyQkFDRSw4REFBQyx1REFBRDtBQUFRLFlBQU0sRUFBSztBQUFFVSxRQUFBQSxJQUFJLEVBQUU7QUFBUjtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FORDs7S0FBTUQ7QUFRTiwrREFBZUEsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0EsbUJBQW1CO0FBQ25CLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLGdCQUFnQjtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBOztBQUVBLElBQUksS0FBNkI7QUFDakM7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Mb3R0aWUvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lL2NsYXNzbmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMb3R0aWVQbGF5ZXIsIHsgQW5pbWF0aW9uQ29uZmlnV2l0aERhdGEsIEFuaW1hdGlvbkNvbmZpZ1dpdGhQYXRoIH0gZnJvbSAnbG90dGllLXdlYidcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgY3MgZnJvbSAnY2xhc3NuYW1lJ1xyXG5pbnRlcmZhY2UgTG90dGllUHJvcHMge1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xyXG4gIHBhcmFtczogUGFydGlhbDxBbmltYXRpb25Db25maWdXaXRoUGF0aCB8IEFuaW1hdGlvbkNvbmZpZ1dpdGhEYXRhPlxyXG59XHJcbmNvbnN0IExvdHRpZTpGQzxMb3R0aWVQcm9wcz4gID0gKHtcclxuICBwYXJhbXMsXHJcbiAgY2xhc3NOYW1lXHJcbn0pID0+IHtcclxuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoY29udGFpbmVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgTG90dGllUGxheWVyLmxvYWRBbmltYXRpb24oe1xyXG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyUmVmLmN1cnJlbnQsXHJcbiAgICAgICAgLi4ucGFyYW1zXHJcbiAgICAgXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgcmVmID0geyBjb250YWluZXJSZWYgfSBjbGFzc05hbWUgPSB7IGNzKHN0eWxlc1snY29udGFpbmVyJ10sIGNsYXNzTmFtZSkgfT5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvdHRpZSBcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTG90dGllIGZyb20gJy4uL2NvbXBvbmVudHMvTG90dGllJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLnNjc3MnXHJcbmNvbnN0IEluZGV4ICA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWUgPSB7IHN0eWxlc1snbG90dGllLWNvbnRhaW5lciddIH0+XHJcbiAgICAgIDxMb3R0aWUgcGFyYW1zID0geyB7IHBhdGg6ICcvbG90dGllRmlsZXMvY2F0Lmpzb24nIH0gfS8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4XHJcbiIsImZ1bmN0aW9uIGNsYXNzbmFtZSAoKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9LFxuICAgICAgICBvYmplY3RzID0ge30sXG4gICAgICAgIHJlc3VsdFN0cmluZyA9IFwiXCI7XG5cbiAgICBmdW5jdGlvbiBhZGQgKHN0cmluZ3MpIHtcbiAgICAgICAgY2xhc3NuYW1lLmVhY2goc3RyaW5ncy5zcGxpdChcIiBcIiksIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgICAgICAgIHJlc3VsdFtzdHJpbmddID0gISFzdHJpbmc7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsYXNzbmFtZS5lYWNoKFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSwgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgc3dpdGNoIChjbGFzc25hbWUuZ2V0VHlwZSh4KSkge1xuICAgICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgICAgIGFkZCh4KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJhcnJheVwiOlxuICAgICAgICAgICAgYWRkKGNsYXNzbmFtZS5hcHBseShudWxsLCB4KSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiZWxlbWVudFwiOlxuICAgICAgICAgICAgYWRkKGNsYXNzbmFtZSh4LmNsYXNzTmFtZSB8fCBcIlwiKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwibm9kZWxpc3RcIjpcbiAgICAgICAgICAgIGFkZChjbGFzc25hbWUuYXBwbHkobnVsbCwgW10uc2xpY2UuY2FsbCh4KSkpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcImpxdWVyeVwiOlxuICAgICAgICAgICAgYWRkKGNsYXNzbmFtZS5hcHBseShudWxsLCB4LmdldCgpKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICAgICAgICBvYmplY3RzID0gY2xhc3NuYW1lLmV4dGVuZChvYmplY3RzLCB4KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXN1bHQgPSBjbGFzc25hbWUuZXh0ZW5kKHJlc3VsdCwgb2JqZWN0cyk7XG5cbiAgICBjbGFzc25hbWUuZWFjaChyZXN1bHQsIGZ1bmN0aW9uICh2YWwsIGtleSkge1xuICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgICByZXN1bHRTdHJpbmcgKz0gXCIgXCIgKyBrZXk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHRTdHJpbmcuc3Vic3RyKDEpO1xufVxuXG5jbGFzc25hbWUuc2V0VG8gPSBmdW5jdGlvbiAoZWxlbWVudHMpIHtcbiAgICB2YXIgdHlwZSA9IGNsYXNzbmFtZS5nZXRUeXBlKGVsZW1lbnRzKTtcblxuICAgIGlmICh0eXBlID09PSBcImVsZW1lbnRcIikge1xuICAgICAgICBlbGVtZW50cyA9IFtlbGVtZW50c107XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IFwianF1ZXJ5XCIpIHtcbiAgICAgICAgZWxlbWVudHMgPSBlbGVtZW50cy5nZXQoKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gXCJub2RlbGlzdFwiKSB7XG4gICAgICAgIGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChlbGVtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNsYXNzTmFtZXMgPSBjbGFzc25hbWUuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcblxuICAgICAgICBjbGFzc25hbWUuZWFjaChlbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lcztcbiAgICAgICAgfSk7XG4gICAgfTtcbn07XG5cbmNsYXNzbmFtZS5lYWNoID0gZnVuY3Rpb24gKGFyciwgZm4pIHtcbiAgICB2YXIgdHlwZSA9IGNsYXNzbmFtZS5nZXRUeXBlKGFycik7XG5cbiAgICBpZiAodHlwZSA9PT0gXCJhcnJheVwiKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmbihhcnJbaV0sIGkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGFycikge1xuICAgICAgICAgICAgZm4oYXJyW2tleV0sIGtleSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5jbGFzc25hbWUuZ2V0VHlwZSA9IGZ1bmN0aW9uICh4KSB7XG4gICAgdmFyIHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeCkuc2xpY2UoOCwgLTEpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAodHlwZSA9PT0gXCJvYmplY3RcIiAmJiB4LmpxdWVyeSkge1xuICAgICAgICByZXR1cm4gXCJqcXVlcnlcIjtcbiAgICB9XG5cbiAgICBpZiAodHlwZS5pbmRleE9mKFwiZWxlbWVudFwiKSA+IDEpIHtcbiAgICAgICAgcmV0dXJuIFwiZWxlbWVudFwiO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xufTtcblxuY2xhc3NuYW1lLmV4dGVuZCA9IGZ1bmN0aW9uIChvYmoxLCBvYmoyKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9LFxuICAgICAgICBvYmpzID0gW29iajEsIG9iajJdO1xuXG4gICAgY2xhc3NuYW1lLmVhY2gob2JqcywgZnVuY3Rpb24gKG9iaikge1xuICAgICAgICBjbGFzc25hbWUuZWFjaChvYmosIGZ1bmN0aW9uICh2YWwsIGtleSkge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjbGFzc25hbWU7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJMb3R0aWVQbGF5ZXIiLCJzdHlsZXMiLCJjcyIsIkxvdHRpZSIsInBhcmFtcyIsImNsYXNzTmFtZSIsImNvbnRhaW5lclJlZiIsImN1cnJlbnQiLCJsb2FkQW5pbWF0aW9uIiwiY29udGFpbmVyIiwiSW5kZXgiLCJwYXRoIl0sInNvdXJjZVJvb3QiOiIifQ==