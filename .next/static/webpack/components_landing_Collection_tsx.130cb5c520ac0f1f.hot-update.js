"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_landing_Collection_tsx",{

/***/ "./components/landing/Collection.tsx":
/*!*******************************************!*\
  !*** ./components/landing/Collection.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_data_collectionData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/data/collectionData */ \"./utils/data/collectionData.ts\");\n/* harmony import */ var _ui_ArtCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/ArtCard */ \"./components/ui/ArtCard.tsx\");\n/* harmony import */ var _ui_MotionContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/MotionContainer */ \"./components/ui/MotionContainer.tsx\");\n/* harmony import */ var _ui_SectionHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/SectionHeader */ \"./components/ui/SectionHeader.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Collection() {\n    var _this = this;\n    _s();\n    var _useState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Sport\"), 2), selected = _useState[0], setSelected = _useState[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"collections\",\n        className: \"space-y-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_SectionHeader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                title: \"Collection\",\n                description: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Personal\\\\NFT-Marketplace\\\\components\\\\landing\\\\Collection.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"justify-between text-white sm:flex\",\n                children: _utils_data_collectionData__WEBPACK_IMPORTED_MODULE_2__.tabItems.map(function(singleItem) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: function() {\n                            return setSelected(singleItem);\n                        },\n                        className: \"\".concat(selected === singleItem ? \"bg-primaryLight\" : \"bg-primaryDark\", \" w-full px-4 py-2 font-medium transition duration-1000 rounded-md lg:px-4 whitespace-nowrap hover:bg-gradient-to-tr\"),\n                        children: singleItem\n                    }, singleItem, false, {\n                        fileName: \"D:\\\\Personal\\\\NFT-Marketplace\\\\components\\\\landing\\\\Collection.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\Personal\\\\NFT-Marketplace\\\\components\\\\landing\\\\Collection.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_MotionContainer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                className: \"grid grid-cols-1 gap-4 lg:grid-cols-3\",\n                children: _utils_data_collectionData__WEBPACK_IMPORTED_MODULE_2__.arts.map(function(art) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_ArtCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        img: art.img,\n                        author: art.author,\n                        price: art.price,\n                        name: art.name\n                    }, art.img, false, {\n                        fileName: \"D:\\\\Personal\\\\NFT-Marketplace\\\\components\\\\landing\\\\Collection.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\Personal\\\\NFT-Marketplace\\\\components\\\\landing\\\\Collection.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Personal\\\\NFT-Marketplace\\\\components\\\\landing\\\\Collection.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(Collection, \"MCnSxSJ7vMwHMV5Epm8D/Hvdvro=\");\n_c = Collection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Collection);\nvar _c;\n$RefreshReg$(_c, \"Collection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xhbmRpbmcvQ29sbGVjdGlvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7QUFBZ0M7QUFDZ0M7QUFDN0I7QUFDZ0I7QUFDSjtBQUUvQyxTQUFTTSxhQUFhOzs7SUFDcEIsSUFBZ0NOLFlBQUFBLGdGQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxjQUFsQ08sV0FBeUJQLGNBQWZRLGNBQWVSO0lBRWhDLHFCQUNFLDhEQUFDUztRQUFJQyxJQUFHO1FBQWNDLFdBQVU7OzBCQUM5Qiw4REFBQ04seURBQWFBO2dCQUNaTyxPQUFNO2dCQUNOQyxhQUFZOzs7Ozs7MEJBR2QsOERBQUNKO2dCQUFJRSxXQUFVOzBCQUNaVCxvRUFBWSxDQUFDLFNBQUNhO3lDQUViLDhEQUFDQzt3QkFFQ0MsTUFBSzt3QkFDTEMsU0FBUzttQ0FBTVYsWUFBWU87O3dCQUMzQkosV0FBVyxHQUlWLE9BSENKLGFBQWFRLGFBQ1Qsb0JBQ0EsZ0JBQWdCLEVBQ3JCO2tDQUVBQTt1QkFUSUE7Ozs7Ozs7Ozs7OzBCQWNYLDhEQUFDWCwyREFBZUE7Z0JBQ2RPLFdBQVU7MEJBRVRWLGdFQUFRLENBQUMsU0FBQ2tCO3lDQUNULDhEQUFDaEIsbURBQU9BO3dCQUVOaUIsS0FBS0QsSUFBSUMsR0FBRzt3QkFDWkMsUUFBUUYsSUFBSUUsTUFBTTt3QkFDbEJDLE9BQU9ILElBQUlHLEtBQUs7d0JBQ2hCQyxNQUFNSixJQUFJSSxJQUFJO3VCQUpUSixJQUFJQyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7OztBQVV4QjtHQTNDU2Q7S0FBQUE7QUE2Q1QsK0RBQWVBLFVBQVVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYW5kaW5nL0NvbGxlY3Rpb24udHN4Pzk4NDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgYXJ0cywgdGFiSXRlbXMgfSBmcm9tICcuLi8uLi91dGlscy9kYXRhL2NvbGxlY3Rpb25EYXRhJ1xyXG5pbXBvcnQgQXJ0Q2FyZCBmcm9tICcuLi91aS9BcnRDYXJkJ1xyXG5pbXBvcnQgTW90aW9uQ29udGFpbmVyIGZyb20gJy4uL3VpL01vdGlvbkNvbnRhaW5lcidcclxuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnLi4vdWkvU2VjdGlvbkhlYWRlcidcclxuXHJcbmZ1bmN0aW9uIENvbGxlY3Rpb24oKSB7XHJcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgnU3BvcnQnKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cImNvbGxlY3Rpb25zXCIgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgIDxTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgdGl0bGU9XCJDb2xsZWN0aW9uXCJcclxuICAgICAgICBkZXNjcmlwdGlvbj1cIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuXCJcclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1iZXR3ZWVuIHRleHQtd2hpdGUgc206ZmxleFwiPlxyXG4gICAgICAgIHt0YWJJdGVtcy5tYXAoKHNpbmdsZUl0ZW0pID0+IChcclxuXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGtleT17c2luZ2xlSXRlbX1cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkKHNpbmdsZUl0ZW0pfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgIHNlbGVjdGVkID09PSBzaW5nbGVJdGVtXHJcbiAgICAgICAgICAgICAgICA/ICdiZy1wcmltYXJ5TGlnaHQnXHJcbiAgICAgICAgICAgICAgICA6ICdiZy1wcmltYXJ5RGFyaydcclxuICAgICAgICAgICAgfSB3LWZ1bGwgcHgtNCBweS0yIGZvbnQtbWVkaXVtIHRyYW5zaXRpb24gZHVyYXRpb24tMTAwMCByb3VuZGVkLW1kIGxnOnB4LTQgd2hpdGVzcGFjZS1ub3dyYXAgaG92ZXI6YmctZ3JhZGllbnQtdG8tdHJgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7c2luZ2xlSXRlbX1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxNb3Rpb25Db250YWluZXJcclxuICAgICAgICBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC00IGxnOmdyaWQtY29scy0zXCJcclxuICAgICAgPlxyXG4gICAgICAgIHthcnRzLm1hcCgoYXJ0KSA9PiAoXHJcbiAgICAgICAgICA8QXJ0Q2FyZFxyXG4gICAgICAgICAgICBrZXk9e2FydC5pbWd9XHJcbiAgICAgICAgICAgIGltZz17YXJ0LmltZ31cclxuICAgICAgICAgICAgYXV0aG9yPXthcnQuYXV0aG9yfVxyXG4gICAgICAgICAgICBwcmljZT17YXJ0LnByaWNlfVxyXG4gICAgICAgICAgICBuYW1lPXthcnQubmFtZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvTW90aW9uQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2xsZWN0aW9uXHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImFydHMiLCJ0YWJJdGVtcyIsIkFydENhcmQiLCJNb3Rpb25Db250YWluZXIiLCJTZWN0aW9uSGVhZGVyIiwiQ29sbGVjdGlvbiIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJkaXYiLCJpZCIsImNsYXNzTmFtZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJtYXAiLCJzaW5nbGVJdGVtIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJhcnQiLCJpbWciLCJhdXRob3IiLCJwcmljZSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/landing/Collection.tsx\n"));

/***/ })

});