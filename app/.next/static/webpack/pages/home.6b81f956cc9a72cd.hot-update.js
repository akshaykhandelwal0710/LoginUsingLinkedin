"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var C_Users_acer_Downloads_GitHub_LoginUsingLinkedin_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_acer_Downloads_GitHub_LoginUsingLinkedin_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_acer_Downloads_GitHub_LoginUsingLinkedin_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.js */ \"./pages/index.js\");\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var code = router.query.code;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), loggedIn = ref[0], setLoggedIn = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0), count1 = ref1[0], setCount = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({}), data = ref2[0], setData = ref2[1];\n    var getData = function() {\n        var _ref = _asyncToGenerator(C_Users_acer_Downloads_GitHub_LoginUsingLinkedin_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response, dat;\n            return C_Users_acer_Downloads_GitHub_LoginUsingLinkedin_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch('http://localhost:9000/fetchCode?code=' + code, {\n                            method: 'POST'\n                        });\n                    case 2:\n                        response = _ctx.sent;\n                        _ctx.next = 5;\n                        return response.json();\n                    case 5:\n                        dat = _ctx.sent;\n                        if (dat.error == undefined) {\n                            setLoggedIn(true);\n                        }\n                        setData(dat);\n                        setCount(function(count) {\n                            return count + 1;\n                        });\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    if (!loggedIn && count1 < 1) {\n        getData();\n        console.log(data);\n    }\n    if (loggedIn) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: [\n                \" \",\n                JSON.stringify(data),\n                \" \"\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\acer\\\\Downloads\\\\GitHub\\\\LoginUsingLinkedin\\\\app\\\\pages\\\\home.js\",\n            lineNumber: 33,\n            columnNumber: 13\n        }, this));\n    } else {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\acer\\\\Downloads\\\\GitHub\\\\LoginUsingLinkedin\\\\app\\\\pages\\\\home.js\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, this),\n                JSON.stringify(data)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\acer\\\\Downloads\\\\GitHub\\\\LoginUsingLinkedin\\\\app\\\\pages\\\\home.js\",\n            lineNumber: 38,\n            columnNumber: 13\n        }, this));\n    }\n};\n_s(Home, \"j0cKTZKn4H9aoPkdhEuWpLYu6B0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNQO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZixRQUFRLENBQUNHLElBQUksR0FBRSxDQUFDOztJQUMzQixHQUFLLENBQUNDLE1BQU0sR0FBR0osc0RBQVM7SUFDeEIsR0FBSyxDQUFHSyxJQUFJLEdBQUtELE1BQU0sQ0FBQ0UsS0FBSyxDQUFyQkQsSUFBSTtJQUVaLEdBQUssQ0FBMkJKLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQXZDTSxRQUFRLEdBQWlCTixHQUFlLEtBQTlCTyxXQUFXLEdBQUlQLEdBQWU7SUFDL0MsR0FBSyxDQUFxQkEsSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBN0JRLE1BQUssR0FBY1IsSUFBVyxLQUF2QlMsUUFBUSxHQUFJVCxJQUFXO0lBQ3JDLEdBQUssQ0FBbUJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBNUJVLElBQUksR0FBYVYsSUFBWSxLQUF2QlcsT0FBTyxHQUFJWCxJQUFZO0lBRXBDLEdBQUssQ0FBQ1ksT0FBTztxTUFBRyxRQUFRLFdBQUksQ0FBQztnQkFDbkJDLFFBQVEsRUFJUkMsR0FBRzs7Ozs7K0JBSmNDLEtBQUssQ0FBQyxDQUF1Qyx5Q0FBQ1gsSUFBSSxFQUFFLENBQUM7NEJBQ3hFWSxNQUFNLEVBQUUsQ0FBTTt3QkFDbEIsQ0FBQzs7d0JBRktILFFBQVE7OytCQUlJQSxRQUFRLENBQUNJLElBQUk7O3dCQUF6QkgsR0FBRzt3QkFDVCxFQUFFLEVBQUVBLEdBQUcsQ0FBQ0ksS0FBSyxJQUFJQyxTQUFTLEVBQUMsQ0FBQzs0QkFDeEJaLFdBQVcsQ0FBQyxJQUFJO3dCQUNwQixDQUFDO3dCQUNESSxPQUFPLENBQUNHLEdBQUc7d0JBQ1hMLFFBQVEsQ0FBQyxRQUFRLENBQVBELEtBQUs7NEJBQUtBLE1BQU0sQ0FBTkEsS0FBSyxHQUFHLENBQUM7Ozs7Ozs7UUFDakMsQ0FBQzt3QkFYS0ksT0FBTzs7OztJQWFiLEVBQUUsR0FBR04sUUFBUSxJQUFJRSxNQUFLLEdBQUcsQ0FBQyxFQUFDLENBQUM7UUFDeEJJLE9BQU87UUFDUFEsT0FBTyxDQUFDQyxHQUFHLENBQUNYLElBQUk7SUFDcEIsQ0FBQztJQUVELEVBQUUsRUFBRUosUUFBUSxFQUFDLENBQUM7UUFDVixNQUFNLDZFQUNEZ0IsQ0FBRzs7Z0JBQUMsQ0FBQztnQkFBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNkLElBQUk7Z0JBQUUsQ0FBQzs7Ozs7OztJQUVyQyxDQUFDLE1BQ0csQ0FBQztRQUNELE1BQU0sNkVBQ0RZLENBQUc7OzRGQUNDckIsaURBQUs7Ozs7O2dCQUNMc0IsSUFBSSxDQUFDQyxTQUFTLENBQUNkLElBQUk7Ozs7Ozs7SUFHaEMsQ0FBQztBQUNMLENBQUM7R0F2Q3VCUixJQUFJOztRQUNUSCxrREFBUzs7O0tBREpHLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS5qcz8xNjc5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMb2dpbiBmcm9tICcuL2luZGV4LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKXtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBjb2RlIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gICAgY29uc3QgW2xvZ2dlZEluLCBzZXRMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo5MDAwL2ZldGNoQ29kZT9jb2RlPScrY29kZSwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBkYXQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgaWYgKGRhdC5lcnJvciA9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBzZXRMb2dnZWRJbih0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0RGF0YShkYXQpO1xyXG4gICAgICAgIHNldENvdW50KChjb3VudCkgPT4gY291bnQgKyAxKTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKCFsb2dnZWRJbiAmJiBjb3VudCA8IDEpe1xyXG4gICAgICAgIGdldERhdGEoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobG9nZ2VkSW4pe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+IHtKU09OLnN0cmluZ2lmeShkYXRhKX0gPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxMb2dpbj48L0xvZ2luPlxyXG4gICAgICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KGRhdGEpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlU3RhdGUiLCJMb2dpbiIsIkhvbWUiLCJyb3V0ZXIiLCJjb2RlIiwicXVlcnkiLCJsb2dnZWRJbiIsInNldExvZ2dlZEluIiwiY291bnQiLCJzZXRDb3VudCIsImRhdGEiLCJzZXREYXRhIiwiZ2V0RGF0YSIsInJlc3BvbnNlIiwiZGF0IiwiZmV0Y2giLCJtZXRob2QiLCJqc29uIiwiZXJyb3IiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/home.js\n");

/***/ })

});