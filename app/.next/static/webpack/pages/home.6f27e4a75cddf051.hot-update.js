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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var C_Users_acer_Downloads_GitHub_LoginUsingLinkedin_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_acer_Downloads_GitHub_LoginUsingLinkedin_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_acer_Downloads_GitHub_LoginUsingLinkedin_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_loader_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/loader.gif */ \"./images/loader.gif\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), data = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var getData = function() {\n        var _ref = _asyncToGenerator(C_Users_acer_Downloads_GitHub_LoginUsingLinkedin_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var resp, d;\n            return C_Users_acer_Downloads_GitHub_LoginUsingLinkedin_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch('http://localhost:9000/fetchInfo?token=' + window.localStorage.getItem('token'), {\n                            method: 'POST'\n                        });\n                    case 2:\n                        resp = _ctx.sent;\n                        _ctx.next = 5;\n                        return resp.json();\n                    case 5:\n                        d = _ctx.sent;\n                        console.log(d);\n                        setData(d);\n                        if (d.firstName == undefined) {\n                            router.push('/');\n                        }\n                        setLoading(false);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    if (loading) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"loader\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                src: _images_loader_gif__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                width: 300,\n                height: 300\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acer\\\\Downloads\\\\GitHub\\\\LoginUsingLinkedin\\\\app\\\\pages\\\\home.js\",\n                lineNumber: 27,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\acer\\\\Downloads\\\\GitHub\\\\LoginUsingLinkedin\\\\app\\\\pages\\\\home.js\",\n            lineNumber: 26,\n            columnNumber: 13\n        }, this));\n    }\n    if (!loading && data.firstName == undefined) {\n        setLoading(true);\n        getData();\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"Welcome\",\n        children: [\n            \" Welcome \",\n            data.firstName,\n            \" \",\n            data.localizedLastName,\n            \" ! \"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\acer\\\\Downloads\\\\GitHub\\\\LoginUsingLinkedin\\\\app\\\\pages\\\\home.js\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, this));\n};\n_s(Home, \"jEhkT/zgeg58M2gm7Pn9vdOh5kw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ1M7QUFDWDtBQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhCLFFBQVEsQ0FBQ0ksSUFBSSxHQUFFLENBQUM7O0lBQzNCLEdBQUssQ0FBbUJKLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBNUJLLElBQUksR0FBYUwsR0FBWSxLQUF2Qk0sT0FBTyxHQUFJTixHQUFZO0lBQ3BDLEdBQUssQ0FBeUJBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQXJDTyxPQUFPLEdBQWdCUCxJQUFlLEtBQTdCUSxVQUFVLEdBQUlSLElBQWU7SUFDN0MsR0FBSyxDQUFDUyxNQUFNLEdBQUdOLHNEQUFTO0lBRXhCLEdBQUssQ0FBQ08sT0FBTztxTUFBRyxRQUFRLFdBQUksQ0FBQztnQkFDbkJDLElBQUksRUFHSkMsQ0FBQzs7Ozs7K0JBSFlDLEtBQUssQ0FBQyxDQUF3QywwQ0FBR0MsTUFBTSxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFPLFNBQUcsQ0FBQzs0QkFDdkdDLE1BQU0sRUFBRSxDQUFNO3dCQUNsQixDQUFDOzt3QkFGS04sSUFBSTs7K0JBR01BLElBQUksQ0FBQ08sSUFBSTs7d0JBQW5CTixDQUFDO3dCQUNQTyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1IsQ0FBQzt3QkFDYk4sT0FBTyxDQUFDTSxDQUFDO3dCQUNULEVBQUUsRUFBRUEsQ0FBQyxDQUFDUyxTQUFTLElBQUlDLFNBQVMsRUFBQyxDQUFDOzRCQUMxQmIsTUFBTSxDQUFDYyxJQUFJLENBQUMsQ0FBRzt3QkFDbkIsQ0FBQzt3QkFDRGYsVUFBVSxDQUFDLEtBQUs7Ozs7OztRQUNwQixDQUFDO3dCQVhLRSxPQUFPOzs7O0lBYWIsRUFBRSxFQUFFSCxPQUFPLEVBQUMsQ0FBQztRQUNULE1BQU0sNkVBQ0RpQixDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFRO2tHQUNsQnZCLG1EQUFLO2dCQUFDd0IsR0FBRyxFQUFJekIsMERBQU07Z0JBQUUwQixLQUFLLEVBQUksR0FBRztnQkFBRUMsTUFBTSxFQUFJLEdBQUc7Ozs7Ozs7Ozs7O0lBRzdELENBQUM7SUFFRCxFQUFFLEdBQUdyQixPQUFPLElBQUlGLElBQUksQ0FBQ2dCLFNBQVMsSUFBSUMsU0FBUyxFQUFDLENBQUM7UUFDekNkLFVBQVUsQ0FBQyxJQUFJO1FBQ2ZFLE9BQU87SUFDWCxDQUFDO0lBRUQsTUFBTSw2RUFDRGMsQ0FBRztRQUFDQyxTQUFTLEVBQUcsQ0FBUzs7WUFBQyxDQUFTO1lBQUNwQixJQUFJLENBQUNnQixTQUFTO1lBQUMsQ0FBQztZQUFDaEIsSUFBSSxDQUFDd0IsaUJBQWlCO1lBQUMsQ0FBRzs7Ozs7OztBQUV4RixDQUFDO0dBbEN1QnpCLElBQUk7O1FBR1RELGtEQUFTOzs7S0FISkMsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ob21lLmpzPzE2NzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBsb2FkZXIgZnJvbSAnLi4vaW1hZ2VzL2xvYWRlci5naWYnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKXtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjkwMDAvZmV0Y2hJbmZvP3Rva2VuPScgKyB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyksIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCdcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBkID0gYXdhaXQgcmVzcC5qc29uKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZCk7XHJcbiAgICAgICAgc2V0RGF0YShkKTtcclxuICAgICAgICBpZiAoZC5maXJzdE5hbWUgPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChsb2FkaW5nKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGVyJz5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmMgPSB7bG9hZGVyfSB3aWR0aCA9IHszMDB9IGhlaWdodCA9IHszMDB9PjwvSW1hZ2U+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFsb2FkaW5nICYmIGRhdGEuZmlyc3ROYW1lID09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBnZXREYXRhKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAnV2VsY29tZSc+IFdlbGNvbWUge2RhdGEuZmlyc3ROYW1lfSB7ZGF0YS5sb2NhbGl6ZWRMYXN0TmFtZX0gISA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJsb2FkZXIiLCJJbWFnZSIsInVzZVJvdXRlciIsIkhvbWUiLCJkYXRhIiwic2V0RGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicm91dGVyIiwiZ2V0RGF0YSIsInJlc3AiLCJkIiwiZmV0Y2giLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibWV0aG9kIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJmaXJzdE5hbWUiLCJ1bmRlZmluZWQiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJsb2NhbGl6ZWRMYXN0TmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/home.js\n");

/***/ })

});