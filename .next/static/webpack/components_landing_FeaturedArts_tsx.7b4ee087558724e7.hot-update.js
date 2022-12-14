"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_landing_FeaturedArts_tsx",{

/***/ "./components/ui/ArtCard.tsx":
/*!***********************************!*\
  !*** ./components/ui/ArtCard.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _utils_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/animation */ \"./utils/animation/index.ts\");\n/* harmony import */ var _PrimaryButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrimaryButton */ \"./components/ui/PrimaryButton.tsx\");\n\n\n\n\nfunction ArtCard(param) {\n    var img = param.img, author = param.author, price = param.price, name = param.name;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.li, {\n        transition: {\n            duration: 0.2,\n            ease: \"easeInOut\"\n        },\n        variants: _utils_animation__WEBPACK_IMPORTED_MODULE_1__.item,\n        className: \"transition duration-300 group\",\n        whileTap: {\n            scale: 0.90\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-4 space-y-4 transition rounded-lg shadow-lg bg-white/10 group-hover:bg-white/50\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    whileHover: {\n                        scale: 1.05\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageContainer, {\n                        src: img,\n                        alt: img,\n                        className: \"object-scale-down w-full xs:object-fill\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Personal\\\\NFT-Marketplace\\\\components\\\\ui\\\\ArtCard.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Personal\\\\NFT-Marketplace\\\\components\\\\ui\\\\ArtCard.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-wrap justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"@\",\n                                        author\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Personal\\\\NFT-Marketplace\\\\components\\\\ui\\\\ArtCard.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"text-xl font-semibold\",\n                                    children: name\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Personal\\\\NFT-Marketplace\\\\components\\\\ui\\\\ArtCard.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Personal\\\\NFT-Marketplace\\\\components\\\\ui\\\\ArtCard.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-right not-prose\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm font-normal\",\n                                    children: \"Current Bid\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Personal\\\\NFT-Marketplace\\\\components\\\\ui\\\\ArtCard.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"text-xl font-semibold text-white\",\n                                    children: price\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Personal\\\\NFT-Marketplace\\\\components\\\\ui\\\\ArtCard.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Personal\\\\NFT-Marketplace\\\\components\\\\ui\\\\ArtCard.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Personal\\\\NFT-Marketplace\\\\components\\\\ui\\\\ArtCard.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PrimaryButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    text: \"Place a bid\",\n                    className: \"w-full border border-transparent group-hover:border-primaryDark group-hover:bg-none group-hover:text-primaryDark\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Personal\\\\NFT-Marketplace\\\\components\\\\ui\\\\ArtCard.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Personal\\\\NFT-Marketplace\\\\components\\\\ui\\\\ArtCard.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Personal\\\\NFT-Marketplace\\\\components\\\\ui\\\\ArtCard.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_c = ArtCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArtCard);\nvar _c;\n$RefreshReg$(_c, \"ArtCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL0FydENhcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQXNDO0FBQ007QUFDRDtBQVMzQyxTQUFTRyxRQUFRLEtBRVYsRUFBRTtRQURQQyxNQURlLE1BQ2ZBLEtBQUtDLFNBRFUsTUFDVkEsUUFBUUMsUUFERSxNQUNGQSxPQUFPQyxPQURMLE1BQ0tBO0lBRXBCLHFCQUNFLDhEQUFDUCxvREFBUztRQUNSUyxZQUFZO1lBQUVDLFVBQVU7WUFBS0MsTUFBTTtRQUFZO1FBQy9DQyxVQUFVWCxrREFBSUE7UUFDZFksV0FBVTtRQUNWQyxVQUFVO1lBQUVDLE9BQU87UUFBSztrQkFFeEIsNEVBQUNDO1lBQUlILFdBQVU7OzhCQUNiLDhEQUFDYixxREFBVTtvQkFBQ2lCLFlBQVk7d0JBQUVGLE9BQU87b0JBQUs7OEJBQ3BDLDRFQUFDRzt3QkFBZUMsS0FBS2Y7d0JBQUtnQixLQUFLaEI7d0JBQUtTLFdBQVU7Ozs7Ozs7Ozs7OzhCQUVoRCw4REFBQ0c7b0JBQUlILFdBQVU7O3NDQUNiLDhEQUFDRzs0QkFBSUgsV0FBVTs7OENBQ2IsOERBQUNROzt3Q0FBRTt3Q0FFQWhCOzs7Ozs7OzhDQUVILDhEQUFDaUI7b0NBQUdULFdBQVU7OENBQXlCTjs7Ozs7Ozs7Ozs7O3NDQUV6Qyw4REFBQ1M7NEJBQUlILFdBQVU7OzhDQUNiLDhEQUFDUTtvQ0FBRVIsV0FBVTs4Q0FBc0I7Ozs7Ozs4Q0FHbkMsOERBQUNTO29DQUFHVCxXQUFVOzhDQUNYUDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUlQLDhEQUFDSixzREFBYUE7b0JBQ1pxQixNQUFLO29CQUNMVixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtwQjtLQXRDU1Y7QUF3Q1QsK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9BcnRDYXJkLnRzeD8yNTFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcbmltcG9ydCB7IGl0ZW0gfSBmcm9tICcuLi8uLi91dGlscy9hbmltYXRpb24nXHJcbmltcG9ydCBQcmltYXJ5QnV0dG9uIGZyb20gJy4vUHJpbWFyeUJ1dHRvbidcclxuXHJcbmludGVyZmFjZSBwcm9wc3tcclxuICBpbWc6c3RyaW5nO1xyXG4gIGF1dGhvcjpzdHJpbmc7XHJcbiAgcHJpY2U6c3RyaW5nO1xyXG4gIG5hbWU6c3RyaW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBBcnRDYXJkKHtcclxuICBpbWcsIGF1dGhvciwgcHJpY2UsIG5hbWUsXHJcbn06cHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5saVxyXG4gICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjIsIGVhc2U6ICdlYXNlSW5PdXQnIH19XHJcbiAgICAgIHZhcmlhbnRzPXtpdGVtfVxyXG4gICAgICBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBncm91cFwiXHJcbiAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjkwIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHNwYWNlLXktNCB0cmFuc2l0aW9uIHJvdW5kZWQtbGcgc2hhZG93LWxnIGJnLXdoaXRlLzEwIGdyb3VwLWhvdmVyOmJnLXdoaXRlLzUwXCI+XHJcbiAgICAgICAgPG1vdGlvbi5kaXYgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4wNSB9fT5cclxuICAgICAgICAgIDxJbWFnZUNvbnRhaW5lciBzcmM9e2ltZ30gYWx0PXtpbWd9IGNsYXNzTmFtZT1cIm9iamVjdC1zY2FsZS1kb3duIHctZnVsbCB4czpvYmplY3QtZmlsbFwiIC8+XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBAXHJcbiAgICAgICAgICAgICAge2F1dGhvcn1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkXCI+e25hbWV9PC9oND5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0IG5vdC1wcm9zZVwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgQ3VycmVudCBCaWRcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICB7cHJpY2V9XHJcbiAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8UHJpbWFyeUJ1dHRvblxyXG4gICAgICAgICAgdGV4dD1cIlBsYWNlIGEgYmlkXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IGdyb3VwLWhvdmVyOmJvcmRlci1wcmltYXJ5RGFyayBncm91cC1ob3ZlcjpiZy1ub25lIGdyb3VwLWhvdmVyOnRleHQtcHJpbWFyeURhcmtcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tb3Rpb24ubGk+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRDYXJkXHJcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJpdGVtIiwiUHJpbWFyeUJ1dHRvbiIsIkFydENhcmQiLCJpbWciLCJhdXRob3IiLCJwcmljZSIsIm5hbWUiLCJsaSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJ2YXJpYW50cyIsImNsYXNzTmFtZSIsIndoaWxlVGFwIiwic2NhbGUiLCJkaXYiLCJ3aGlsZUhvdmVyIiwiSW1hZ2VDb250YWluZXIiLCJzcmMiLCJhbHQiLCJwIiwiaDQiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ui/ArtCard.tsx\n"));

/***/ })

});