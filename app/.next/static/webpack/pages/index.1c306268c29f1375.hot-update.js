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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var C_Users_acer_Downloads_GitHub_LoginUsingLinkedin_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_acer_Downloads_GitHub_LoginUsingLinkedin_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_acer_Downloads_GitHub_LoginUsingLinkedin_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_Sign_In_Large_Default_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/Sign-In-Large---Default.png */ \"./images/Sign-In-Large---Default.png\");\n/* harmony import */ var _images_Sign_In_Large_Active_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/Sign-In-Large---Active.png */ \"./images/Sign-In-Large---Active.png\");\n/* harmony import */ var _images_Sign_In_Large_Hover_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/Sign-In-Large---Hover.png */ \"./images/Sign-In-Large---Hover.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _images_loader_gif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/loader.gif */ \"./images/loader.gif\");\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Login() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(_images_Sign_In_Large_Default_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), image = ref[0], setImage = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null), token = ref1[0], setToken = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false), loading = ref2[0], setLoading = ref2[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    var handleHover = function() {\n        setImage(_images_Sign_In_Large_Hover_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    };\n    var handleClick = function() {\n        setImage(_images_Sign_In_Large_Active_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    };\n    var handleDefault = function() {\n        setImage(_images_Sign_In_Large_Default_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    };\n    var getToken = function() {\n        var _ref = _asyncToGenerator(C_Users_acer_Downloads_GitHub_LoginUsingLinkedin_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var code, response, dat;\n            return C_Users_acer_Downloads_GitHub_LoginUsingLinkedin_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        code = router.query.code;\n                        _ctx.next = 3;\n                        return fetch('http://localhost:9000/fetchCode?code=' + code, {\n                            method: 'POST'\n                        });\n                    case 3:\n                        response = _ctx.sent;\n                        _ctx.next = 6;\n                        return response.json();\n                    case 6:\n                        dat = _ctx.sent;\n                        setToken(dat.access_token);\n                        setLoading(false);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getToken() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        setToken(window.localStorage.getItem('token'));\n        if (token == undefined) {\n            setToken(null);\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        window.localStorage.setItem('token', token);\n    }, [\n        token\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        if (token != null) {\n            console.log(token);\n            router.push('/home');\n        }\n    }, [\n        token\n    ]);\n    if (loading) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"loader\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: _images_loader_gif__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                width: 300,\n                height: 300\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acer\\\\Downloads\\\\GitHub\\\\LoginUsingLinkedin\\\\app\\\\pages\\\\index.js\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\acer\\\\Downloads\\\\GitHub\\\\LoginUsingLinkedin\\\\app\\\\pages\\\\index.js\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, this));\n    }\n    if (!loading && router.query.code != undefined) {\n        setLoading(true);\n        getToken();\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"LoginDiv\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n            href: \"https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=777wrznuz9eit6&redirect_uri=http://localhost:3000/&state=hehe&scope=r_liteprofile%20r_emailaddress\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: image,\n                width: 500,\n                height: 100,\n                onMouseEnter: handleHover,\n                onMouseLeave: handleDefault,\n                onClick: handleClick\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acer\\\\Downloads\\\\GitHub\\\\LoginUsingLinkedin\\\\app\\\\pages\\\\index.js\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\acer\\\\Downloads\\\\GitHub\\\\LoginUsingLinkedin\\\\app\\\\pages\\\\index.js\",\n            lineNumber: 70,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\acer\\\\Downloads\\\\GitHub\\\\LoginUsingLinkedin\\\\app\\\\pages\\\\index.js\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this));\n};\n_s(Login, \"KWkIUqe26tihBjdieqcCeJUeBcE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxNQUFNLENBQUNRLEtBQUssQ0FBQ0gsSUFBSSxJQUFJVyxTQUFTLEVBQUMsQ0FBQztRQUM5Q2pCLFVBQVUsQ0FBQyxJQUFJO1FBQ2ZLLFFBQVE7SUFDVixDQUFDO0lBRUQsTUFBTSw2RUFDSGlCLENBQUc7UUFBQ0MsU0FBUyxFQUFHLENBQVU7OEZBQ3hCSSxDQUFDO1lBQUNDLElBQUksRUFBRyxDQUFpTDtrR0FDeEwxQyxtREFBSztnQkFBQ3NDLEdBQUcsRUFBSTdCLEtBQUs7Z0JBQUU4QixLQUFLLEVBQUksR0FBRztnQkFBRUMsTUFBTSxFQUFJLEdBQUc7Z0JBQUVHLFlBQVksRUFBSTNCLFdBQVc7Z0JBQUU0QixZQUFZLEVBQUkxQixhQUFhO2dCQUFFMkIsT0FBTyxFQUFJNUIsV0FBVzs7Ozs7Ozs7Ozs7Ozs7OztBQUk1SSxDQUFDO0dBbEV1QlQsS0FBSzs7UUFJWkYsa0RBQVM7OztLQUpGRSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IGxvZ2luRGVmYXVsdCBmcm9tICcuLi9pbWFnZXMvU2lnbi1Jbi1MYXJnZS0tLURlZmF1bHQucG5nJztcbmltcG9ydCBsb2dpbkFjdGl2ZSBmcm9tICcuLi9pbWFnZXMvU2lnbi1Jbi1MYXJnZS0tLUFjdGl2ZS5wbmcnO1xuaW1wb3J0IGxvZ2luSG92ZXIgZnJvbSAnLi4vaW1hZ2VzL1NpZ24tSW4tTGFyZ2UtLS1Ib3Zlci5wbmcnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBsb2FkZXIgZnJvbSAnLi4vaW1hZ2VzL2xvYWRlci5naWYnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShsb2dpbkRlZmF1bHQpO1xuICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZUhvdmVyID0gKCkgPT4ge1xuICAgIHNldEltYWdlKGxvZ2luSG92ZXIpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldEltYWdlKGxvZ2luQWN0aXZlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWZhdWx0ID0gKCkgPT4ge1xuICAgIHNldEltYWdlKGxvZ2luRGVmYXVsdCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VG9rZW4gPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgY29kZSA9IHJvdXRlci5xdWVyeS5jb2RlO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6OTAwMC9mZXRjaENvZGU/Y29kZT0nK2NvZGUsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgfSk7XG4gICAgY29uc3QgZGF0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHNldFRva2VuKGRhdC5hY2Nlc3NfdG9rZW4pO1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VG9rZW4od2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKTtcbiAgICBpZiAodG9rZW4gPT0gdW5kZWZpbmVkKXtcbiAgICAgIHNldFRva2VuKG51bGwpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKTtcbiAgfSwgW3Rva2VuXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodG9rZW4gIT0gbnVsbCl7XG4gICAgICBjb25zb2xlLmxvZyh0b2tlbik7XG4gICAgICByb3V0ZXIucHVzaCgnL2hvbWUnKTtcbiAgICB9XG4gIH0sIFt0b2tlbl0pO1xuXG4gIGlmIChsb2FkaW5nKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRlcic+XG4gICAgICAgIDxJbWFnZSBzcmMgPSB7bG9hZGVyfSB3aWR0aCA9IHszMDB9IGhlaWdodCA9IHszMDB9PjwvSW1hZ2U+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgaWYgKCFsb2FkaW5nICYmIHJvdXRlci5xdWVyeS5jb2RlICE9IHVuZGVmaW5lZCl7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBnZXRUb2tlbigpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZSA9ICdMb2dpbkRpdic+XG4gICAgICA8YSBocmVmID0gXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vb2F1dGgvdjIvYXV0aG9yaXphdGlvbj9yZXNwb25zZV90eXBlPWNvZGUmY2xpZW50X2lkPTc3N3dyem51ejllaXQ2JnJlZGlyZWN0X3VyaT1odHRwOi8vbG9jYWxob3N0OjMwMDAvJnN0YXRlPWhlaGUmc2NvcGU9cl9saXRlcHJvZmlsZSUyMHJfZW1haWxhZGRyZXNzXCI+XG4gICAgICAgIDxJbWFnZSBzcmMgPSB7aW1hZ2V9IHdpZHRoID0gezUwMH0gaGVpZ2h0ID0gezEwMH0gb25Nb3VzZUVudGVyID0ge2hhbmRsZUhvdmVyfSBvbk1vdXNlTGVhdmUgPSB7aGFuZGxlRGVmYXVsdH0gb25DbGljayA9IHtoYW5kbGVDbGlja30+PC9JbWFnZT5cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiSW1hZ2UiLCJsb2dpbkRlZmF1bHQiLCJsb2dpbkFjdGl2ZSIsImxvZ2luSG92ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImxvYWRlciIsIkxvZ2luIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInRva2VuIiwic2V0VG9rZW4iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsImhhbmRsZUhvdmVyIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVEZWZhdWx0IiwiZ2V0VG9rZW4iLCJjb2RlIiwicmVzcG9uc2UiLCJkYXQiLCJxdWVyeSIsImZldGNoIiwibWV0aG9kIiwianNvbiIsImFjY2Vzc190b2tlbiIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1bmRlZmluZWQiLCJzZXRJdGVtIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImEiLCJocmVmIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});