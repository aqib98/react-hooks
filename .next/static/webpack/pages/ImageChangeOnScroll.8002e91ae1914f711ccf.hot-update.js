"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ImageChangeOnScroll",{

/***/ "./pages/ImageChangeOnScroll.js":
/*!**************************************!*\
  !*** ./pages/ImageChangeOnScroll.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/ImageToggleOnScroll */ \"./src/ImageToggleOnScroll.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/aqibshaik/Documents/pluralsight-react-hooks/pages/ImageChangeOnScroll.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar ImageChangeOnScroll = function ImageChangeOnScroll() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      currentSpeakerId = _useState[0],\n      setCurrentSpeakerId = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: [187, 823, 1124, 1269, 1725].map(function (each, index) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        onMouseOver: function onMouseOver() {\n          setCurrentSpeakerId(each);\n          console.log(\"on MouseOver \".concat(each));\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_1__.default, {\n          primaryImage: \"/static/bw/Speaker-\".concat(each, \".jpg\"),\n          secondaryImage: \"/static/color/Speaker-\".concat(each, \".jpg\")\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 25\n        }, _this)\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 21\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(ImageChangeOnScroll, \"+qKJ3UXcClvPxOeG6Vv1jjX61oQ=\");\n\n_c = ImageChangeOnScroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageChangeOnScroll);\n\nvar _c;\n\n$RefreshReg$(_c, \"ImageChangeOnScroll\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9JbWFnZUNoYW5nZU9uU2Nyb2xsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsSUFBTUcsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQUE7O0FBQzlCLGtCQUErQ0YsK0NBQVEsQ0FBQyxDQUFELENBQXZEO0FBQUEsTUFBT0csZ0JBQVA7QUFBQSxNQUF3QkMsbUJBQXhCOztBQUNBLHNCQUNJO0FBQUEsY0FDSyxDQUFDLEdBQUQsRUFBSyxHQUFMLEVBQVMsSUFBVCxFQUFjLElBQWQsRUFBbUIsSUFBbkIsRUFBeUJDLEdBQXpCLENBQTZCLFVBQUNDLElBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUMxQywwQkFDSTtBQUNJLG1CQUFXLEVBQUksdUJBQU07QUFDakJILFVBQUFBLG1CQUFtQixDQUFDRSxJQUFELENBQW5CO0FBQ0FFLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUix3QkFBNEJILElBQTVCO0FBQ0gsU0FKTDtBQUFBLCtCQU1JLDhEQUFDLDZEQUFEO0FBQ0Esc0JBQVksK0JBQXdCQSxJQUF4QixTQURaO0FBRUEsd0JBQWMsa0NBQTJCQSxJQUEzQjtBQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSixTQUFZQyxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVlILEtBYkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFrQkgsQ0FwQkQ7O0dBQU1MOztLQUFBQTtBQXNCTiwrREFBZUEsbUJBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvSW1hZ2VDaGFuZ2VPblNjcm9sbC5qcz9kODY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgSW1hZ2VUb2dnbGVPblNjcm9sbCBmcm9tICcuLi9zcmMvSW1hZ2VUb2dnbGVPblNjcm9sbCc7XG5cbmNvbnN0IEltYWdlQ2hhbmdlT25TY3JvbGwgPSAoKSA9PiB7XG4gICAgY29uc3QgW2N1cnJlbnRTcGVha2VySWQsc2V0Q3VycmVudFNwZWFrZXJJZF0gPSB1c2VTdGF0ZSgwKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge1sxODcsODIzLDExMjQsMTI2OSwxNzI1XS5tYXAoKGVhY2gsaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleSA9IHtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyID0geygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50U3BlYWtlcklkKGVhY2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBvbiBNb3VzZU92ZXIgJHtlYWNofWApXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlJbWFnZT17YC9zdGF0aWMvYncvU3BlYWtlci0ke2VhY2h9LmpwZ2B9IFxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5SW1hZ2U9e2Avc3RhdGljL2NvbG9yL1NwZWFrZXItJHtlYWNofS5qcGdgfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlQ2hhbmdlT25TY3JvbGwiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkltYWdlVG9nZ2xlT25TY3JvbGwiLCJJbWFnZUNoYW5nZU9uU2Nyb2xsIiwiY3VycmVudFNwZWFrZXJJZCIsInNldEN1cnJlbnRTcGVha2VySWQiLCJtYXAiLCJlYWNoIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/ImageChangeOnScroll.js\n");

/***/ })

});