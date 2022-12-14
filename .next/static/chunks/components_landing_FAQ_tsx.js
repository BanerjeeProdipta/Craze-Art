"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_landing_FAQ_tsx"],{

/***/ "./components/landing/FAQ.tsx":
/*!************************************!*\
  !*** ./components/landing/FAQ.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_data_faqData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/data/faqData */ \"./utils/data/faqData.ts\");\n/* harmony import */ var _ui_Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Accordion */ \"./components/ui/Accordion.tsx\");\n/* harmony import */ var _ui_SectionHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/SectionHeader */ \"./components/ui/SectionHeader.tsx\");\n\n\n\n\nfunction FAQ() {\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"faq\",\n        className: \"space-y-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_SectionHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"Frequently Asked Question\",\n                description: \"Wanna Ask Something?\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Personal\\\\NFT-Marketplace\\\\components\\\\landing\\\\FAQ.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 gap-4 lg:grid-cols-2\",\n                children: _utils_data_faqData__WEBPACK_IMPORTED_MODULE_1__[\"default\"].map(function(faq, index) {\n                    return(// eslint-disable-next-line react/no-array-index-key\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Accordion__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        title: faq.title,\n                        body: faq.body\n                    }, index, false, {\n                        fileName: \"D:\\\\Personal\\\\NFT-Marketplace\\\\components\\\\landing\\\\FAQ.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 13\n                    }, _this));\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\Personal\\\\NFT-Marketplace\\\\components\\\\landing\\\\FAQ.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Personal\\\\NFT-Marketplace\\\\components\\\\landing\\\\FAQ.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = FAQ;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FAQ);\nvar _c;\n$RefreshReg$(_c, \"FAQ\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xhbmRpbmcvRkFRLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUE4QztBQUNQO0FBQ1E7QUFFL0MsU0FBU0csTUFBTTs7SUFDYixxQkFDRSw4REFBQ0M7UUFBSUMsSUFBRztRQUFNQyxXQUFVOzswQkFDdEIsOERBQUNKLHlEQUFhQTtnQkFDWkssT0FBTTtnQkFFTkMsYUFBWTs7Ozs7OzBCQUdkLDhEQUFDSjtnQkFBSUUsV0FBVTswQkFFWE4sK0RBQVcsQ0FBQyxTQUFDVSxLQUFLQzsyQkFDaEIsb0RBQW9EO2tDQUNwRCw4REFBQ1YscURBQVNBO3dCQUFhTSxPQUFPRyxJQUFJSCxLQUFLO3dCQUFFSyxNQUFNRixJQUFJRSxJQUFJO3VCQUF2Q0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTVCO0tBbkJTUjtBQXFCVCwrREFBZUEsR0FBR0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xhbmRpbmcvRkFRLnRzeD85ZWRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmYXFEYXRhIGZyb20gJy4uLy4uL3V0aWxzL2RhdGEvZmFxRGF0YSdcclxuaW1wb3J0IEFjY29yZGlvbiBmcm9tICcuLi91aS9BY2NvcmRpb24nXHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJy4uL3VpL1NlY3Rpb25IZWFkZXInXHJcblxyXG5mdW5jdGlvbiBGQVEoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJmYXFcIiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICB0aXRsZT1cIkZyZXF1ZW50bHkgQXNrZWRcclxuICAgICAgICAgIFF1ZXN0aW9uXCJcclxuICAgICAgICBkZXNjcmlwdGlvbj1cIldhbm5hIEFzayBTb21ldGhpbmc/XCJcclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtNCBsZzpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZhcURhdGEubWFwKChmYXEsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXlcclxuICAgICAgICAgICAgPEFjY29yZGlvbiBrZXk9e2luZGV4fSB0aXRsZT17ZmFxLnRpdGxlfSBib2R5PXtmYXEuYm9keX0gLz5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRkFRXHJcbiJdLCJuYW1lcyI6WyJmYXFEYXRhIiwiQWNjb3JkaW9uIiwiU2VjdGlvbkhlYWRlciIsIkZBUSIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm1hcCIsImZhcSIsImluZGV4IiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/landing/FAQ.tsx\n"));

/***/ }),

/***/ "./components/ui/Accordion.tsx":
/*!*************************************!*\
  !*** ./components/ui/Accordion.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\n\nfunction Accordion(param) {\n    var title = param.title, body = param.body;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var _useState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), selected = _useState[0], setSelected = _useState[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        onClick: function() {\n            return setSelected(function(v) {\n                return !v;\n            });\n        },\n        className: \"border-b cursor-pointer border-white/50 \".concat(selected && \"pb-4\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between py-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Personal\\\\NFT-Marketplace\\\\components\\\\ui\\\\Accordion.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-bold transition duration-500 ease-out transform\",\n                        children: selected ? \"+\" : \"-\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Personal\\\\NFT-Marketplace\\\\components\\\\ui\\\\Accordion.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Personal\\\\NFT-Marketplace\\\\components\\\\ui\\\\Accordion.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: ref,\n                className: \"relative overflow-hidden transition-all duration-500 not-prose\",\n                style: {\n                    maxHeight: selected && ref.current ? ref.current.scrollHeight : 0\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-sm text-left\",\n                    children: body\n                }, void 0, false, {\n                    fileName: \"D:\\\\Personal\\\\NFT-Marketplace\\\\components\\\\ui\\\\Accordion.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Personal\\\\NFT-Marketplace\\\\components\\\\ui\\\\Accordion.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Personal\\\\NFT-Marketplace\\\\components\\\\ui\\\\Accordion.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(Accordion, \"JZkeJfooE90va+dyrCuCqrC1dko=\");\n_c = Accordion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Accordion);\nvar _c;\n$RefreshReg$(_c, \"Accordion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL0FjY29yZGlvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7OztBQUF3QztBQU94QyxTQUFTRSxVQUFVLEtBQXNCLEVBQUU7UUFBdEJDLFFBQUYsTUFBRUEsT0FBT0MsT0FBVCxNQUFTQTs7SUFDMUIsSUFBTUMsTUFBTUwsNkNBQU1BLENBQWlCLElBQUk7SUFDdkMsSUFBZ0NDLFlBQUFBLGdGQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxLQUFLLE9BQXZDSyxXQUF5QkwsY0FBZk0sY0FBZU47SUFFaEMscUJBQ0UsOERBQUNPO1FBQ0NDLE1BQUs7UUFDTEMsU0FBUzttQkFBTUgsWUFBWSxTQUFDSTt1QkFBTSxDQUFDQTs7O1FBQ25DQyxXQUFXLDJDQUE4RCxPQUFuQk4sWUFBWTs7MEJBRWxFLDhEQUFDTztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUFFRixXQUFVO2tDQUFJVDs7Ozs7O2tDQUNqQiw4REFBQ1k7d0JBQUtILFdBQVU7a0NBQ2JOLFdBQVcsTUFBTSxHQUFHOzs7Ozs7Ozs7Ozs7MEJBR3pCLDhEQUFDTztnQkFDQ1IsS0FBS0E7Z0JBQ0xPLFdBQVU7Z0JBQ1ZJLE9BQU87b0JBQUVDLFdBQVdYLFlBQVlELElBQUlhLE9BQU8sR0FBR2IsSUFBSWEsT0FBTyxDQUFDQyxZQUFZLEdBQUcsQ0FBQztnQkFBQzswQkFFM0UsNEVBQUNMO29CQUFFRixXQUFVOzhCQUFxQlI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTFDO0dBekJTRjtLQUFBQTtBQTJCVCwrREFBZUEsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VpL0FjY29yZGlvbi50c3g/YmJkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbnRlcmZhY2UgcHJvcHMge1xyXG4gIHRpdGxlOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgYm9keTogc3RyaW5nIHwgbnVtYmVyIHwgSlNYLkVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFjY29yZGlvbih7IHRpdGxlLCBib2R5IH06IHByb3BzKSB7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxyXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZCgodikgPT4gIXYpfVxyXG4gICAgICBjbGFzc05hbWU9e2Bib3JkZXItYiBjdXJzb3ItcG9pbnRlciBib3JkZXItd2hpdGUvNTAgJHtzZWxlY3RlZCAmJiAncGItNCd9YH1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHktNVwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPnt0aXRsZX08L3A+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2Utb3V0IHRyYW5zZm9ybVwiPlxyXG4gICAgICAgICAge3NlbGVjdGVkID8gJysnIDogJy0nfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIG5vdC1wcm9zZVwiXHJcbiAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiBzZWxlY3RlZCAmJiByZWYuY3VycmVudCA/IHJlZi5jdXJyZW50LnNjcm9sbEhlaWdodCA6IDAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1sZWZ0XCI+e2JvZHl9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYnV0dG9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uXHJcbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkFjY29yZGlvbiIsInRpdGxlIiwiYm9keSIsInJlZiIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsInYiLCJjbGFzc05hbWUiLCJkaXYiLCJwIiwic3BhbiIsInN0eWxlIiwibWF4SGVpZ2h0IiwiY3VycmVudCIsInNjcm9sbEhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ui/Accordion.tsx\n"));

/***/ }),

/***/ "./components/ui/SectionHeader.tsx":
/*!*****************************************!*\
  !*** ./components/ui/SectionHeader.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction SectionHeader(param) {\n    var title = param.title, description = param.description;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pb-4 space-y-4 text-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"max-w-sm\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"D:\\\\Personal\\\\NFT-Marketplace\\\\components\\\\ui\\\\SectionHeader.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Personal\\\\NFT-Marketplace\\\\components\\\\ui\\\\SectionHeader.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"max-w-md\",\n                    children: description\n                }, void 0, false, {\n                    fileName: \"D:\\\\Personal\\\\NFT-Marketplace\\\\components\\\\ui\\\\SectionHeader.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Personal\\\\NFT-Marketplace\\\\components\\\\ui\\\\SectionHeader.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Personal\\\\NFT-Marketplace\\\\components\\\\ui\\\\SectionHeader.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = SectionHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SectionHeader);\nvar _c;\n$RefreshReg$(_c, \"SectionHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL1NlY3Rpb25IZWFkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBS0EsU0FBU0EsY0FBYyxLQUdoQixFQUFFO1FBRlBDLFFBRHFCLE1BQ3JCQSxPQUNBQyxjQUZxQixNQUVyQkE7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDQztvQkFBR0QsV0FBVTs4QkFBWUg7Ozs7Ozs7Ozs7OzBCQUU1Qiw4REFBQ0U7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNFO29CQUFFRixXQUFVOzhCQUNWRjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLWDtLQWhCU0Y7QUFrQlQsK0RBQWVBLGFBQWFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9TZWN0aW9uSGVhZGVyLnRzeD9mMWVhIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBwcm9wc3tcclxuICB0aXRsZTpzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246c3RyaW5nXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNlY3Rpb25IZWFkZXIoe1xyXG4gIHRpdGxlLFxyXG4gIGRlc2NyaXB0aW9uLFxyXG59OnByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGItNCBzcGFjZS15LTQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB3LWZ1bGxcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWF4LXctc21cIj57dGl0bGV9PC9oMj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdy1mdWxsXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWF4LXctbWRcIj5cclxuICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uSGVhZGVyXHJcbiJdLCJuYW1lcyI6WyJTZWN0aW9uSGVhZGVyIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ui/SectionHeader.tsx\n"));

/***/ }),

/***/ "./utils/data/faqData.ts":
/*!*******************************!*\
  !*** ./utils/data/faqData.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nvar faqData = [\n    {\n        title: \"lorem ipsum ipsum\",\n        body: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet est felis. Pellentesque pharetra ex vel ultricies auctor. Donec sit amet molestie risus, eget venenatis ligula. \"\n    },\n    {\n        title: \"lorem ipsum ipsum\",\n        body: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet est felis. Pellentesque pharetra ex vel ultricies auctor. Donec sit amet molestie risus, eget venenatis ligula. \"\n    },\n    {\n        title: \"lorem ipsum ipsum\",\n        body: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet est felis. Pellentesque pharetra ex vel ultricies auctor. Donec sit amet molestie risus, eget venenatis ligula. \"\n    },\n    {\n        title: \"lorem ipsum ipsum\",\n        body: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet est felis. Pellentesque pharetra ex vel ultricies auctor. Donec sit amet molestie risus, eget venenatis ligula. \"\n    },\n    {\n        title: \"lorem ipsum ipsum\",\n        body: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet est felis. Pellentesque pharetra ex vel ultricies auctor. Donec sit amet molestie risus, eget venenatis ligula. \"\n    },\n    {\n        title: \"lorem ipsum ipsum\",\n        body: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet est felis. Pellentesque pharetra ex vel ultricies auctor. Donec sit amet molestie risus, eget venenatis ligula. \"\n    }\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (faqData);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9kYXRhL2ZhcURhdGEudHMuanMiLCJtYXBwaW5ncyI6IjtBQUVBLElBQU1BLFVBQXFCO0lBQ3pCO1FBQ0VDLE9BQU87UUFDUEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsT0FBTztRQUNQQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxPQUFPO1FBQ1BDLE1BQU07SUFDUjtJQUNBO1FBQ0VELE9BQU87UUFDUEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsT0FBTztRQUNQQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxPQUFPO1FBQ1BDLE1BQU07SUFDUjtDQUNEO0FBRUQsK0RBQWVGLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZGF0YS9mYXFEYXRhLnRzPzc2MGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkFRVHlwZSB9IGZyb20gJy4uL3R5cGVzL2ZhcURhdGFUeXBlJ1xyXG5cclxuY29uc3QgZmFxRGF0YTogRkFRVHlwZVtdID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnbG9yZW0gaXBzdW0gaXBzdW0nLFxyXG4gICAgYm9keTogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIER1aXMgc2l0IGFtZXQgZXN0IGZlbGlzLiBQZWxsZW50ZXNxdWUgcGhhcmV0cmEgZXggdmVsIHVsdHJpY2llcyBhdWN0b3IuIERvbmVjIHNpdCBhbWV0IG1vbGVzdGllIHJpc3VzLCBlZ2V0IHZlbmVuYXRpcyBsaWd1bGEuICcsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ2xvcmVtIGlwc3VtIGlwc3VtJyxcclxuICAgIGJvZHk6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBEdWlzIHNpdCBhbWV0IGVzdCBmZWxpcy4gUGVsbGVudGVzcXVlIHBoYXJldHJhIGV4IHZlbCB1bHRyaWNpZXMgYXVjdG9yLiBEb25lYyBzaXQgYW1ldCBtb2xlc3RpZSByaXN1cywgZWdldCB2ZW5lbmF0aXMgbGlndWxhLiAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdsb3JlbSBpcHN1bSBpcHN1bScsXHJcbiAgICBib2R5OiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gRHVpcyBzaXQgYW1ldCBlc3QgZmVsaXMuIFBlbGxlbnRlc3F1ZSBwaGFyZXRyYSBleCB2ZWwgdWx0cmljaWVzIGF1Y3Rvci4gRG9uZWMgc2l0IGFtZXQgbW9sZXN0aWUgcmlzdXMsIGVnZXQgdmVuZW5hdGlzIGxpZ3VsYS4gJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnbG9yZW0gaXBzdW0gaXBzdW0nLFxyXG4gICAgYm9keTogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIER1aXMgc2l0IGFtZXQgZXN0IGZlbGlzLiBQZWxsZW50ZXNxdWUgcGhhcmV0cmEgZXggdmVsIHVsdHJpY2llcyBhdWN0b3IuIERvbmVjIHNpdCBhbWV0IG1vbGVzdGllIHJpc3VzLCBlZ2V0IHZlbmVuYXRpcyBsaWd1bGEuICcsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ2xvcmVtIGlwc3VtIGlwc3VtJyxcclxuICAgIGJvZHk6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBEdWlzIHNpdCBhbWV0IGVzdCBmZWxpcy4gUGVsbGVudGVzcXVlIHBoYXJldHJhIGV4IHZlbCB1bHRyaWNpZXMgYXVjdG9yLiBEb25lYyBzaXQgYW1ldCBtb2xlc3RpZSByaXN1cywgZWdldCB2ZW5lbmF0aXMgbGlndWxhLiAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdsb3JlbSBpcHN1bSBpcHN1bScsXHJcbiAgICBib2R5OiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gRHVpcyBzaXQgYW1ldCBlc3QgZmVsaXMuIFBlbGxlbnRlc3F1ZSBwaGFyZXRyYSBleCB2ZWwgdWx0cmljaWVzIGF1Y3Rvci4gRG9uZWMgc2l0IGFtZXQgbW9sZXN0aWUgcmlzdXMsIGVnZXQgdmVuZW5hdGlzIGxpZ3VsYS4gJyxcclxuICB9LFxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmYXFEYXRhXHJcbiJdLCJuYW1lcyI6WyJmYXFEYXRhIiwidGl0bGUiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/data/faqData.ts\n"));

/***/ })

}]);