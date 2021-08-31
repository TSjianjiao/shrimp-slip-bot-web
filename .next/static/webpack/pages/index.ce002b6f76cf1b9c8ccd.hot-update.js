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
            setResponse({
              loading: false,
              data: res.data,
              success: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2UwMDJiNmY3NmNmMWI5YzhjY2QuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUSxHQUFJLFNBQUksSUFBSSxTQUFJLENBQUNBLFFBQWQsSUFBMkIsWUFBWTtBQUNsREEsRUFBQUEsUUFBUSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsSUFBaUIsVUFBU0MsQ0FBVCxFQUFZO0FBQ3BDLFNBQUssSUFBSUMsQ0FBSixFQUFPQyxDQUFDLEdBQUcsQ0FBWCxFQUFjQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBakMsRUFBeUNILENBQUMsR0FBR0MsQ0FBN0MsRUFBZ0RELENBQUMsRUFBakQsRUFBcUQ7QUFDakRELE1BQUFBLENBQUMsR0FBR0csU0FBUyxDQUFDRixDQUFELENBQWI7O0FBQ0EsV0FBSyxJQUFJSSxDQUFULElBQWNMLENBQWQ7QUFBaUIsWUFBSUgsTUFBTSxDQUFDUyxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNSLENBQXJDLEVBQXdDSyxDQUF4QyxDQUFKLEVBQ2JOLENBQUMsQ0FBQ00sQ0FBRCxDQUFELEdBQU9MLENBQUMsQ0FBQ0ssQ0FBRCxDQUFSO0FBREo7QUFFSDs7QUFDRCxXQUFPTixDQUFQO0FBQ0gsR0FQRDs7QUFRQSxTQUFPSCxRQUFRLENBQUNhLEtBQVQsQ0FBZSxJQUFmLEVBQXFCTixTQUFyQixDQUFQO0FBQ0gsQ0FWRDs7QUFXQSxJQUFJTyxTQUFTLEdBQUksU0FBSSxJQUFJLFNBQUksQ0FBQ0EsU0FBZCxJQUE0QixVQUFVQyxPQUFWLEVBQW1CQyxVQUFuQixFQUErQkMsQ0FBL0IsRUFBa0NDLFNBQWxDLEVBQTZDO0FBQ3JGLFdBQVNDLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFFLFdBQU9BLEtBQUssWUFBWUgsQ0FBakIsR0FBcUJHLEtBQXJCLEdBQTZCLElBQUlILENBQUosQ0FBTSxVQUFVSSxPQUFWLEVBQW1C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T0FBL0IsQ0FBVCxDQUFuQixDQUFQOztBQUNKLGVBQUssQ0FBTDtBQUNJQyxZQUFBQSxHQUFHLEdBQUdULEVBQUUsQ0FBQ25CLElBQUgsRUFBTjtBQUNBd0IsWUFBQUEsV0FBVyxDQUFDO0FBQ1JKLGNBQUFBLE9BQU8sRUFBRSxLQUREO0FBRVJDLGNBQUFBLElBQUksRUFBRU8sR0FBRyxDQUFDUCxJQUZGO0FBR1JDLGNBQUFBLE9BQU8sRUFBRTtBQUhELGFBQUQsQ0FBWDtBQUtBLG1CQUFPLENBQUM7QUFBRTtBQUFILGNBQWMsQ0FBZCxDQUFQOztBQUNKLGVBQUssQ0FBTDtBQUNJTyxZQUFBQSxLQUFLLEdBQUdWLEVBQUUsQ0FBQ25CLElBQUgsRUFBUjtBQUNBd0IsWUFBQUEsV0FBVyxDQUFDO0FBQ1JKLGNBQUFBLE9BQU8sRUFBRSxLQUREO0FBRVJDLGNBQUFBLElBQUksRUFBRSxJQUZFO0FBR1JDLGNBQUFBLE9BQU8sRUFBRTtBQUhELGFBQUQsQ0FBWDtBQUtBLG1CQUFPLENBQUM7QUFBRTtBQUFILGNBQWMsQ0FBZCxDQUFQOztBQUNKLGVBQUssQ0FBTDtBQUFRLG1CQUFPLENBQUM7QUFBRTtBQUFILGFBQVA7QUE5Qlo7QUFnQ0gsT0FqQ2lCLENBQWxCO0FBa0NILEtBcEM4RCxDQUFoQjtBQW9DMUMsR0FwQ29CLEVBb0NsQixFQXBDa0IsQ0FBekI7QUFxQ0EsU0FBTyxDQUNIQyxRQURHLEVBRUhHLE9BRkcsQ0FBUDtBQUlILENBdkREIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy91c2VSZXF1ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnLi4vYXBpL2F4aW9zJztcclxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAvLyDlk43lupTlr7nosaFcclxuICAgIHZhciBfYSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlXHJcbiAgICB9KSwgcmVzcG9uc2UgPSBfYVswXSwgc2V0UmVzcG9uc2UgPSBfYVsxXTtcclxuICAgIC8vIOeri+WNs+aJp+ihjFxyXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAob3B0aW9ucy5pbW1lZGlhdGUpIHtcclxuICAgICAgICAgICAgdHJpZ2dlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIC8vIOinpuWPkeWHveaVsFxyXG4gICAgdmFyIHRyaWdnZXIgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoX2NvbmZpZykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmVzLCBlcnJfMTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UubG9hZGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBheGlvcyhfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9ucy5jb25maWcpLCBfY29uZmlnKSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRSZXNwb25zZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXMuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIGVycl8xID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7IH0sIFtdKTtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgcmVzcG9uc2UsXHJcbiAgICAgICAgdHJpZ2dlclxyXG4gICAgXTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJfX2Fzc2lnbiIsIk9iamVjdCIsImFzc2lnbiIsInQiLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYXBwbHkiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJhZG9wdCIsInZhbHVlIiwicmVzb2x2ZSIsIlByb21pc2UiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJzdGVwIiwibmV4dCIsImUiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJ0aGVuIiwiX19nZW5lcmF0b3IiLCJib2R5IiwiXyIsImxhYmVsIiwic2VudCIsInRyeXMiLCJvcHMiLCJmIiwieSIsImciLCJ2ZXJiIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJ2Iiwib3AiLCJUeXBlRXJyb3IiLCJwb3AiLCJwdXNoIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwib3B0aW9ucyIsIl9hIiwibG9hZGluZyIsImRhdGEiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJzZXRSZXNwb25zZSIsImltbWVkaWF0ZSIsInRyaWdnZXIiLCJfY29uZmlnIiwicmVzIiwiZXJyXzEiLCJjb25maWciXSwic291cmNlUm9vdCI6IiJ9