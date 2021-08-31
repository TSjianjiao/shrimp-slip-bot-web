"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/api/axios/index.ts":
/*!********************************!*\
  !*** ./src/api/axios/index.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);


var isPro = false;
/**
 * 地址获取思路
 * 1. 生产环境
 *  写绝对地址，因为这个项目nginx代理的是443端口 所以这里不能带上端口
 * 2. 开发环境
 *  2.1. getServerSideProps里面掉接口的时候是服务器在请求，所以要写绝对地址，端口号要带上
 *  2.2 其他地方请求的时候不需要带上端口号，直接相对地址就行了（绝对也可以）。
 *      但是这里为,node_port在浏览器环境中是undefined，所以再判断了一次，浏览器环境用相对地址
 */

var instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: '/api' // baseURL: isPro ? `${ process.env.NEXT_PUBLIC_URL }/api`
  //   : `${ process.env.NODE_OPRT ? process.env.NEXT_PUBLIC_URL + ':' + process.env.NODE_OPRT : '' }/api`,

});
instance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  var _a; // 请求参数 网络错误


  return ((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || error;
});
instance.interceptors.response.use(function (response) {
  var axiosData = response.data;
  var success = true;
  var error = '';

  try {
    if (axiosData.error) {
      success = false;
      antd__WEBPACK_IMPORTED_MODULE_1__.message.error(axiosData.error);
    }
  } catch (err) {
    error = err;
    success = false;
    antd__WEBPACK_IMPORTED_MODULE_1__.message.error(axiosData.error);
  }

  return {
    success: success,
    error: error,
    data: axiosData
  };
}, function (error) {
  antd__WEBPACK_IMPORTED_MODULE_1__.message.error(error);
  return {
    success: false,
    error: error,
    data: null
  };
});
/* harmony default export */ __webpack_exports__["default"] = (instance);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGFlZjU3MmVmNDAxMTdiMzY0ODYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxJQUFJRSxLQUFLLFFBQVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSUMsUUFBUSxHQUFHRixtREFBQSxDQUFhO0FBQ3hCSSxFQUFBQSxPQUFPLEVBQUUsTUFEZSxDQUV4QjtBQUNBOztBQUh3QixDQUFiLENBQWY7QUFLQUYsUUFBUSxDQUFDRyxZQUFULENBQXNCQyxPQUF0QixDQUE4QkMsR0FBOUIsQ0FBa0MsVUFBVUMsTUFBVixFQUFrQjtBQUNoRCxTQUFPQSxNQUFQO0FBQ0gsQ0FGRCxFQUVHLFVBQVVDLEtBQVYsRUFBaUI7QUFDaEIsTUFBSUMsRUFBSixDQURnQixDQUVoQjs7O0FBQ0EsU0FBTyxDQUFDLENBQUNBLEVBQUUsR0FBR0QsS0FBSyxLQUFLLElBQVYsSUFBa0JBLEtBQUssS0FBSyxLQUFLLENBQWpDLEdBQXFDLEtBQUssQ0FBMUMsR0FBOENBLEtBQUssQ0FBQ0UsUUFBMUQsTUFBd0UsSUFBeEUsSUFBZ0ZELEVBQUUsS0FBSyxLQUFLLENBQTVGLEdBQWdHLEtBQUssQ0FBckcsR0FBeUdBLEVBQUUsQ0FBQ0UsSUFBN0csS0FBc0hILEtBQTdIO0FBQ0gsQ0FORDtBQU9BUCxRQUFRLENBQUNHLFlBQVQsQ0FBc0JNLFFBQXRCLENBQStCSixHQUEvQixDQUFtQyxVQUFVSSxRQUFWLEVBQW9CO0FBQ25ELE1BQUlFLFNBQVMsR0FBR0YsUUFBUSxDQUFDQyxJQUF6QjtBQUNBLE1BQUlFLE9BQU8sR0FBRyxJQUFkO0FBQ0EsTUFBSUwsS0FBSyxHQUFHLEVBQVo7O0FBQ0EsTUFBSTtBQUNBLFFBQUlJLFNBQVMsQ0FBQ0osS0FBZCxFQUFxQjtBQUNqQkssTUFBQUEsT0FBTyxHQUFHLEtBQVY7QUFDQWYsTUFBQUEsK0NBQUEsQ0FBY2MsU0FBUyxDQUFDSixLQUF4QjtBQUNIO0FBQ0osR0FMRCxDQU1BLE9BQU9NLEdBQVAsRUFBWTtBQUNSTixJQUFBQSxLQUFLLEdBQUdNLEdBQVI7QUFDQUQsSUFBQUEsT0FBTyxHQUFHLEtBQVY7QUFDQWYsSUFBQUEsK0NBQUEsQ0FBY2MsU0FBUyxDQUFDSixLQUF4QjtBQUNIOztBQUNELFNBQU87QUFDSEssSUFBQUEsT0FBTyxFQUFFQSxPQUROO0FBRUhMLElBQUFBLEtBQUssRUFBRUEsS0FGSjtBQUdIRyxJQUFBQSxJQUFJLEVBQUVDO0FBSEgsR0FBUDtBQUtILENBcEJELEVBb0JHLFVBQVVKLEtBQVYsRUFBaUI7QUFDaEJWLEVBQUFBLCtDQUFBLENBQWNVLEtBQWQ7QUFDQSxTQUFPO0FBQ0hLLElBQUFBLE9BQU8sRUFBRSxLQUROO0FBRUhMLElBQUFBLEtBQUssRUFBRUEsS0FGSjtBQUdIRyxJQUFBQSxJQUFJLEVBQUU7QUFISCxHQUFQO0FBS0gsQ0EzQkQ7QUE0QkEsK0RBQWVWLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwaS9heGlvcy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbnZhciBpc1BybyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XHJcbi8qKlxyXG4gKiDlnLDlnYDojrflj5bmgJ3ot69cclxuICogMS4g55Sf5Lqn546v5aKDXHJcbiAqICDlhpnnu53lr7nlnLDlnYDvvIzlm6DkuLrov5nkuKrpobnnm65uZ2lueOS7o+eQhueahOaYrzQ0M+err+WPoyDmiYDku6Xov5nph4zkuI3og73luKbkuIrnq6/lj6NcclxuICogMi4g5byA5Y+R546v5aKDXHJcbiAqICAyLjEuIGdldFNlcnZlclNpZGVQcm9wc+mHjOmdouaOieaOpeWPo+eahOaXtuWAmeaYr+acjeWKoeWZqOWcqOivt+axgu+8jOaJgOS7peimgeWGmee7neWvueWcsOWdgO+8jOerr+WPo+WPt+imgeW4puS4ilxyXG4gKiAgMi4yIOWFtuS7luWcsOaWueivt+axgueahOaXtuWAmeS4jemcgOimgeW4puS4iuerr+WPo+WPt++8jOebtOaOpeebuOWvueWcsOWdgOWwseihjOS6hu+8iOe7neWvueS5n+WPr+S7pe+8ieOAglxyXG4gKiAgICAgIOS9huaYr+i/memHjOS4uixub2RlX3BvcnTlnKjmtY/op4jlmajnjq/looPkuK3mmK91bmRlZmluZWTvvIzmiYDku6Xlho3liKTmlq3kuobkuIDmrKHvvIzmtY/op4jlmajnjq/looPnlKjnm7jlr7nlnLDlnYBcclxuICovXHJcbnZhciBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiAnL2FwaScsXHJcbiAgICAvLyBiYXNlVVJMOiBpc1BybyA/IGAkeyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkwgfS9hcGlgXHJcbiAgICAvLyAgIDogYCR7IHByb2Nlc3MuZW52Lk5PREVfT1BSVCA/IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTCArICc6JyArIHByb2Nlc3MuZW52Lk5PREVfT1BSVCA6ICcnIH0vYXBpYCxcclxufSk7XHJcbmluc3RhbmNlLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShmdW5jdGlvbiAoY29uZmlnKSB7XHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG59LCBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgIHZhciBfYTtcclxuICAgIC8vIOivt+axguWPguaVsCDnvZHnu5zplJnor69cclxuICAgIHJldHVybiAoKF9hID0gZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9yLnJlc3BvbnNlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZGF0YSkgfHwgZXJyb3I7XHJcbn0pO1xyXG5pbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgdmFyIGF4aW9zRGF0YSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICB2YXIgc3VjY2VzcyA9IHRydWU7XHJcbiAgICB2YXIgZXJyb3IgPSAnJztcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKGF4aW9zRGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICBzdWNjZXNzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoYXhpb3NEYXRhLmVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgZXJyb3IgPSBlcnI7XHJcbiAgICAgICAgc3VjY2VzcyA9IGZhbHNlO1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoYXhpb3NEYXRhLmVycm9yKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2Vzczogc3VjY2VzcyxcclxuICAgICAgICBlcnJvcjogZXJyb3IsXHJcbiAgICAgICAgZGF0YTogYXhpb3NEYXRhLFxyXG4gICAgfTtcclxufSwgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICBtZXNzYWdlLmVycm9yKGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgZXJyb3I6IGVycm9yLFxyXG4gICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICB9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XHJcbiJdLCJuYW1lcyI6WyJtZXNzYWdlIiwiYXhpb3MiLCJpc1BybyIsImluc3RhbmNlIiwiY3JlYXRlIiwiYmFzZVVSTCIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJjb25maWciLCJlcnJvciIsIl9hIiwicmVzcG9uc2UiLCJkYXRhIiwiYXhpb3NEYXRhIiwic3VjY2VzcyIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=