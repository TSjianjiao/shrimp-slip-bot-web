"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/hooks/useRequest.ts":
/*!*********************************!*\
  !*** ./src/hooks/useRequest.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/axios */ "./src/api/axios/index.ts");
/* module decorator */ module = __webpack_require__.hmd(module);
var _s = $RefreshSig$();

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};



/* harmony default export */ __webpack_exports__["default"] = (_s(function (options) {
  _s();

  // 响应对象
  var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    loading: false,
    data: null,
    success: false
  }),
      response = _a[0],
      setResponse = _a[1]; // 立即执行


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (options.immediate) {
      trigger();
    }
  }, []); // 触发函数

  var trigger = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_config) {
    return __awaiter(void 0, void 0, void 0, function () {
      var res, err_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (response.loading) {
              return [2
              /*return*/
              ];
            }

            setResponse({
              loading: true,
              data: null,
              success: false
            });
            _a.label = 1;

          case 1:
            _a.trys.push([1, 3,, 4]);

            return [4
            /*yield*/
            , (0,_api_axios__WEBPACK_IMPORTED_MODULE_1__.default)(__assign(__assign({}, options.config), _config))];

          case 2:
            res = _a.sent();
            console.log(res);
            setResponse({
              loading: false,
              data: res.data,
              success: !res.error
            });
            return [3
            /*break*/
            , 4];

          case 3:
            err_1 = _a.sent();
            setResponse({
              loading: false,
              data: null,
              success: false
            });
            return [3
            /*break*/
            , 4];

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  }, []);
  return [response, trigger];
}, "Y8FIi3Tx03Wfq4BIiveOSg+XjvU="));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTk1OTJiYjc2YTliYzg2YjBhNmYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUSxHQUFJLFNBQUksSUFBSSxTQUFJLENBQUNBLFFBQWQsSUFBMkIsWUFBWTtBQUNsREEsRUFBQUEsUUFBUSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsSUFBaUIsVUFBU0MsQ0FBVCxFQUFZO0FBQ3BDLFNBQUssSUFBSUMsQ0FBSixFQUFPQyxDQUFDLEdBQUcsQ0FBWCxFQUFjQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBakMsRUFBeUNILENBQUMsR0FBR0MsQ0FBN0MsRUFBZ0RELENBQUMsRUFBakQsRUFBcUQ7QUFDakRELE1BQUFBLENBQUMsR0FBR0csU0FBUyxDQUFDRixDQUFELENBQWI7O0FBQ0EsV0FBSyxJQUFJSSxDQUFULElBQWNMLENBQWQ7QUFBaUIsWUFBSUgsTUFBTSxDQUFDUyxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNSLENBQXJDLEVBQXdDSyxDQUF4QyxDQUFKLEVBQ2JOLENBQUMsQ0FBQ00sQ0FBRCxDQUFELEdBQU9MLENBQUMsQ0FBQ0ssQ0FBRCxDQUFSO0FBREo7QUFFSDs7QUFDRCxXQUFPTixDQUFQO0FBQ0gsR0FQRDs7QUFRQSxTQUFPSCxRQUFRLENBQUNhLEtBQVQsQ0FBZSxJQUFmLEVBQXFCTixTQUFyQixDQUFQO0FBQ0gsQ0FWRDs7QUFXQSxJQUFJTyxTQUFTLEdBQUksU0FBSSxJQUFJLFNBQUksQ0FBQ0EsU0FBZCxJQUE0QixVQUFVQyxPQUFWLEVBQW1CQyxVQUFuQixFQUErQkMsQ0FBL0IsRUFBa0NDLFNBQWxDLEVBQTZDO0FBQ3JGLFdBQVNDLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFFLFdBQU9BLEtBQUssWUFBWUgsQ0FBakIsR0FBcUJHLEtBQXJCLEdBQTZCLElBQUlILENBQUosQ0FBTSxVQUFVSSxPQUFWLEVBQW1C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T0FBL0IsQ0FBVCxDQUFuQixDQUFQOztBQUNKLGVBQUssQ0FBTDtBQUNJQyxZQUFBQSxHQUFHLEdBQUdULEVBQUUsQ0FBQ25CLElBQUgsRUFBTjtBQUNBK0IsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlKLEdBQVo7QUFDQUosWUFBQUEsV0FBVyxDQUFDO0FBQ1JKLGNBQUFBLE9BQU8sRUFBRSxLQUREO0FBRVJDLGNBQUFBLElBQUksRUFBRU8sR0FBRyxDQUFDUCxJQUZGO0FBR1JDLGNBQUFBLE9BQU8sRUFBRSxDQUFDTSxHQUFHLENBQUNLO0FBSE4sYUFBRCxDQUFYO0FBS0EsbUJBQU8sQ0FBQztBQUFFO0FBQUgsY0FBYyxDQUFkLENBQVA7O0FBQ0osZUFBSyxDQUFMO0FBQ0lKLFlBQUFBLEtBQUssR0FBR1YsRUFBRSxDQUFDbkIsSUFBSCxFQUFSO0FBQ0F3QixZQUFBQSxXQUFXLENBQUM7QUFDUkosY0FBQUEsT0FBTyxFQUFFLEtBREQ7QUFFUkMsY0FBQUEsSUFBSSxFQUFFLElBRkU7QUFHUkMsY0FBQUEsT0FBTyxFQUFFO0FBSEQsYUFBRCxDQUFYO0FBS0EsbUJBQU8sQ0FBQztBQUFFO0FBQUgsY0FBYyxDQUFkLENBQVA7O0FBQ0osZUFBSyxDQUFMO0FBQVEsbUJBQU8sQ0FBQztBQUFFO0FBQUgsYUFBUDtBQS9CWjtBQWlDSCxPQWxDaUIsQ0FBbEI7QUFtQ0gsS0FyQzhELENBQWhCO0FBcUMxQyxHQXJDb0IsRUFxQ2xCLEVBckNrQixDQUF6QjtBQXNDQSxTQUFPLENBQ0hDLFFBREcsRUFFSEcsT0FGRyxDQUFQO0FBSUgsQ0F4REQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVJlcXVlc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICcuLi9hcGkvYXhpb3MnO1xyXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIC8vIOWTjeW6lOWvueixoVxyXG4gICAgdmFyIF9hID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgc3VjY2VzczogZmFsc2VcclxuICAgIH0pLCByZXNwb25zZSA9IF9hWzBdLCBzZXRSZXNwb25zZSA9IF9hWzFdO1xyXG4gICAgLy8g56uL5Y2z5omn6KGMXHJcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChvcHRpb25zLmltbWVkaWF0ZSkge1xyXG4gICAgICAgICAgICB0cmlnZ2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgLy8g6Kem5Y+R5Ye95pWwXHJcbiAgICB2YXIgdHJpZ2dlciA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChfY29uZmlnKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByZXMsIGVycl8xO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5sb2FkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVzcG9uc2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGF4aW9zKF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb25zLmNvbmZpZyksIF9jb25maWcpKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVzcG9uc2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICFyZXMuZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBlcnJfMSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRSZXNwb25zZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pOyB9LCBbXSk7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIHJlc3BvbnNlLFxyXG4gICAgICAgIHRyaWdnZXJcclxuICAgIF07XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiX19hc3NpZ24iLCJPYmplY3QiLCJhc3NpZ24iLCJ0IiwicyIsImkiLCJuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFwcGx5IiwiX19hd2FpdGVyIiwidGhpc0FyZyIsIl9hcmd1bWVudHMiLCJQIiwiZ2VuZXJhdG9yIiwiYWRvcHQiLCJ2YWx1ZSIsInJlc29sdmUiLCJQcm9taXNlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwic3RlcCIsIm5leHQiLCJlIiwicmVqZWN0ZWQiLCJyZXN1bHQiLCJkb25lIiwidGhlbiIsIl9fZ2VuZXJhdG9yIiwiYm9keSIsIl8iLCJsYWJlbCIsInNlbnQiLCJ0cnlzIiwib3BzIiwiZiIsInkiLCJnIiwidmVyYiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwidiIsIm9wIiwiVHlwZUVycm9yIiwicG9wIiwicHVzaCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIm9wdGlvbnMiLCJfYSIsImxvYWRpbmciLCJkYXRhIiwic3VjY2VzcyIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJpbW1lZGlhdGUiLCJ0cmlnZ2VyIiwiX2NvbmZpZyIsInJlcyIsImVycl8xIiwiY29uZmlnIiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==