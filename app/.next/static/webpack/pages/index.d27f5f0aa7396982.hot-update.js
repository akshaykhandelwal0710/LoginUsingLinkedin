"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var C_Users_acer_Downloads_GitHub_LoginUsingLinkedin_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_acer_Downloads_GitHub_LoginUsingLinkedin_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_acer_Downloads_GitHub_LoginUsingLinkedin_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_Sign_In_Large_Default_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/Sign-In-Large---Default.png */ \"./images/Sign-In-Large---Default.png\");\n/* harmony import */ var _images_Sign_In_Large_Active_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/Sign-In-Large---Active.png */ \"./images/Sign-In-Large---Active.png\");\n/* harmony import */ var _images_Sign_In_Large_Hover_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/Sign-In-Large---Hover.png */ \"./images/Sign-In-Large---Hover.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _images_loader_gif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/loader.gif */ \"./images/loader.gif\");\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nvar loading = false;\nfunction Login() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(_images_Sign_In_Large_Default_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), image = ref[0], setImage = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    var handleHover = function() {\n        setImage(_images_Sign_In_Large_Hover_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    };\n    var handleClick = function() {\n        setImage(_images_Sign_In_Large_Active_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    };\n    var handleDefault = function() {\n        setImage(_images_Sign_In_Large_Default_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    };\n    var getToken = function() {\n        var _ref = _asyncToGenerator(C_Users_acer_Downloads_GitHub_LoginUsingLinkedin_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var code, response;\n            return C_Users_acer_Downloads_GitHub_LoginUsingLinkedin_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        code = router.query.code;\n                        _ctx.next = 3;\n                        return fetch('http://localhost:9000/fetchCode?code=' + code, {\n                            method: 'POST'\n                        });\n                    case 3:\n                        response = _ctx.sent;\n                        _ctx.t0 = window.localStorage;\n                        _ctx.next = 7;\n                        return response.json();\n                    case 7:\n                        _ctx.t1 = _ctx.sent.access_token;\n                        _ctx.t0.setItem.call(_ctx.t0, 'token', _ctx.t1);\n                        loading = false;\n                        if (window.localStorage.getItem('token') != undefined) {\n                            //console.log(window.localStorage.getItem('token'));\n                            router.push('/home');\n                        }\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getToken() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        if (window.localStorage.getItem('token') != undefined) {\n            //console.log(window.localStorage.getItem('token'));\n            router.push('/home');\n        }\n    });\n    if (loading) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"loader\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: _images_loader_gif__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                width: 300,\n                height: 300\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acer\\\\Downloads\\\\GitHub\\\\LoginUsingLinkedin\\\\app\\\\pages\\\\index.js\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\acer\\\\Downloads\\\\GitHub\\\\LoginUsingLinkedin\\\\app\\\\pages\\\\index.js\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, this));\n    }\n    if (!loading && router.query.code != undefined) {\n        loading = true;\n        getToken();\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"LoginDiv\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n            href: \"https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=777wrznuz9eit6&redirect_uri=http://localhost:3000/&state=hehe&scope=r_liteprofile%20r_emailaddress\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: image,\n                width: 500,\n                height: 100,\n                onMouseEnter: handleHover,\n                onMouseLeave: handleDefault,\n                onClick: handleClick\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acer\\\\Downloads\\\\GitHub\\\\LoginUsingLinkedin\\\\app\\\\pages\\\\index.js\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\acer\\\\Downloads\\\\GitHub\\\\LoginUsingLinkedin\\\\app\\\\pages\\\\index.js\",\n            lineNumber: 62,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\acer\\\\Downloads\\\\GitHub\\\\LoginUsingLinkedin\\\\app\\\\pages\\\\index.js\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this));\n};\n_s(Login, \"8HdLDuo+BYVroajYNzq1ShmcuzE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUJMLEtBQUs7O1FBRVpILGtEQUFTOzs7S0FGRkcsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBsb2dpbkRlZmF1bHQgZnJvbSAnLi4vaW1hZ2VzL1NpZ24tSW4tTGFyZ2UtLS1EZWZhdWx0LnBuZyc7XG5pbXBvcnQgbG9naW5BY3RpdmUgZnJvbSAnLi4vaW1hZ2VzL1NpZ24tSW4tTGFyZ2UtLS1BY3RpdmUucG5nJztcbmltcG9ydCBsb2dpbkhvdmVyIGZyb20gJy4uL2ltYWdlcy9TaWduLUluLUxhcmdlLS0tSG92ZXIucG5nJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgbG9hZGVyIGZyb20gJy4uL2ltYWdlcy9sb2FkZXIuZ2lmJztcblxudmFyIGxvYWRpbmcgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUobG9naW5EZWZhdWx0KTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlSG92ZXIgPSAoKSA9PiB7XG4gICAgc2V0SW1hZ2UobG9naW5Ib3Zlcik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0SW1hZ2UobG9naW5BY3RpdmUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlZmF1bHQgPSAoKSA9PiB7XG4gICAgc2V0SW1hZ2UobG9naW5EZWZhdWx0KTtcbiAgfTtcblxuICBjb25zdCBnZXRUb2tlbiA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBjb2RlID0gcm91dGVyLnF1ZXJ5LmNvZGU7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo5MDAwL2ZldGNoQ29kZT9jb2RlPScrY29kZSwge1xuICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICB9KTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgKGF3YWl0IHJlc3BvbnNlLmpzb24oKSkuYWNjZXNzX3Rva2VuKTtcbiAgICBsb2FkaW5nID0gZmFsc2U7XG4gICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSAhPSB1bmRlZmluZWQpe1xuICAgICAgLy9jb25zb2xlLmxvZyh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpO1xuICAgICAgcm91dGVyLnB1c2goJy9ob21lJyk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSAhPSB1bmRlZmluZWQpe1xuICAgICAgLy9jb25zb2xlLmxvZyh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpO1xuICAgICAgcm91dGVyLnB1c2goJy9ob21lJyk7XG4gICAgfVxuICB9KTtcblxuICBpZiAobG9hZGluZyl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkZXInPlxuICAgICAgICA8SW1hZ2Ugc3JjID0ge2xvYWRlcn0gd2lkdGggPSB7MzAwfSBoZWlnaHQgPSB7MzAwfT48L0ltYWdlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGlmICghbG9hZGluZyAmJiByb3V0ZXIucXVlcnkuY29kZSAhPSB1bmRlZmluZWQpe1xuICAgIGxvYWRpbmcgPSB0cnVlO1xuICAgIGdldFRva2VuKCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lID0gJ0xvZ2luRGl2Jz5cbiAgICAgIDxhIGhyZWYgPSBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9vYXV0aC92Mi9hdXRob3JpemF0aW9uP3Jlc3BvbnNlX3R5cGU9Y29kZSZjbGllbnRfaWQ9Nzc3d3J6bnV6OWVpdDYmcmVkaXJlY3RfdXJpPWh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8mc3RhdGU9aGVoZSZzY29wZT1yX2xpdGVwcm9maWxlJTIwcl9lbWFpbGFkZHJlc3NcIj5cbiAgICAgICAgPEltYWdlIHNyYyA9IHtpbWFnZX0gd2lkdGggPSB7NTAwfSBoZWlnaHQgPSB7MTAwfSBvbk1vdXNlRW50ZXIgPSB7aGFuZGxlSG92ZXJ9IG9uTW91c2VMZWF2ZSA9IHtoYW5kbGVEZWZhdWx0fSBvbkNsaWNrID0ge2hhbmRsZUNsaWNrfT48L0ltYWdlPlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJJbWFnZSIsImxvZ2luRGVmYXVsdCIsImxvZ2luQWN0aXZlIiwibG9naW5Ib3ZlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwibG9hZGVyIiwibG9hZGluZyIsIkxvZ2luIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInJvdXRlciIsImhhbmRsZUhvdmVyIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVEZWZhdWx0IiwiZ2V0VG9rZW4iLCJjb2RlIiwicmVzcG9uc2UiLCJxdWVyeSIsImZldGNoIiwibWV0aG9kIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwianNvbiIsImFjY2Vzc190b2tlbiIsInNldEl0ZW0iLCJnZXRJdGVtIiwidW5kZWZpbmVkIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYSIsImhyZWYiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});