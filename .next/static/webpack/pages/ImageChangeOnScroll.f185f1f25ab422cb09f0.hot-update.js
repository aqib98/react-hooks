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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/ImageToggleOnScroll */ \"./src/ImageToggleOnScroll.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/aqibshaik/Documents/pluralsight-react-hooks/pages/ImageChangeOnScroll.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar ImageChangeOnScroll = function ImageChangeOnScroll() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      currentSpeakerId = _useState[0],\n      setCurrentSpeakerId = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    window.document.title = \"SpeakerId: \".concat(currentSpeakerId);\n    console.log(\"useEffect: setting title to \".concat(currentSpeakerId));\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: [187, 823, 1124, 1269, 1725].map(function (each, index) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        onMouseOver: function onMouseOver() {\n          setCurrentSpeakerId(each);\n          console.log(\"on MouseOver \".concat(each));\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_1__.default, {\n          primaryImage: \"/static/bw/Speaker-\".concat(each, \".jpg\"),\n          secondaryImage: \"/static/color/Speaker-\".concat(each, \".jpg\")\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 25\n        }, _this)\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 21\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(ImageChangeOnScroll, \"XwfeDdtPvOZOuHAA3TR96cetj0E=\");\n\n_c = ImageChangeOnScroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageChangeOnScroll);\n\nvar _c;\n\n$RefreshReg$(_c, \"ImageChangeOnScroll\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9JbWFnZUNoYW5nZU9uU2Nyb2xsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsSUFBTUksbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQUE7O0FBQzlCLGtCQUErQ0YsK0NBQVEsQ0FBQyxDQUFELENBQXZEO0FBQUEsTUFBT0csZ0JBQVA7QUFBQSxNQUF3QkMsbUJBQXhCOztBQUVBTCxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDWk0sSUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxLQUFoQix3QkFBc0NKLGdCQUF0QztBQUNBSyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsdUNBQTJDTixnQkFBM0M7QUFDSCxHQUhRLENBQVQ7QUFLQSxzQkFDSTtBQUFBLGNBQ0ssQ0FBQyxHQUFELEVBQUssR0FBTCxFQUFTLElBQVQsRUFBYyxJQUFkLEVBQW1CLElBQW5CLEVBQXlCTyxHQUF6QixDQUE2QixVQUFDQyxJQUFELEVBQU1DLEtBQU4sRUFBZ0I7QUFDMUMsMEJBQ0k7QUFDSSxtQkFBVyxFQUFJLHVCQUFNO0FBQ2pCUixVQUFBQSxtQkFBbUIsQ0FBQ08sSUFBRCxDQUFuQjtBQUNBSCxVQUFBQSxPQUFPLENBQUNDLEdBQVIsd0JBQTRCRSxJQUE1QjtBQUNILFNBSkw7QUFBQSwrQkFNSSw4REFBQyw2REFBRDtBQUNBLHNCQUFZLCtCQUF3QkEsSUFBeEIsU0FEWjtBQUVBLHdCQUFjLGtDQUEyQkEsSUFBM0I7QUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkosU0FBWUMsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFZSCxLQWJBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBa0JILENBMUJEOztHQUFNVjs7S0FBQUE7QUE0Qk4sK0RBQWVBLG1CQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0ltYWdlQ2hhbmdlT25TY3JvbGwuanM/ZDg2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgSW1hZ2VUb2dnbGVPblNjcm9sbCBmcm9tICcuLi9zcmMvSW1hZ2VUb2dnbGVPblNjcm9sbCc7XG5cbmNvbnN0IEltYWdlQ2hhbmdlT25TY3JvbGwgPSAoKSA9PiB7XG4gICAgY29uc3QgW2N1cnJlbnRTcGVha2VySWQsc2V0Q3VycmVudFNwZWFrZXJJZF0gPSB1c2VTdGF0ZSgwKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC50aXRsZSA9IGBTcGVha2VySWQ6ICR7Y3VycmVudFNwZWFrZXJJZH1gO1xuICAgICAgICBjb25zb2xlLmxvZyhgdXNlRWZmZWN0OiBzZXR0aW5nIHRpdGxlIHRvICR7Y3VycmVudFNwZWFrZXJJZH1gKVxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge1sxODcsODIzLDExMjQsMTI2OSwxNzI1XS5tYXAoKGVhY2gsaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleSA9IHtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyID0geygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50U3BlYWtlcklkKGVhY2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBvbiBNb3VzZU92ZXIgJHtlYWNofWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlVG9nZ2xlT25TY3JvbGwgXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5SW1hZ2U9e2Avc3RhdGljL2J3L1NwZWFrZXItJHtlYWNofS5qcGdgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeUltYWdlPXtgL3N0YXRpYy9jb2xvci9TcGVha2VyLSR7ZWFjaH0uanBnYH0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNoYW5nZU9uU2Nyb2xsIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZVRvZ2dsZU9uU2Nyb2xsIiwiSW1hZ2VDaGFuZ2VPblNjcm9sbCIsImN1cnJlbnRTcGVha2VySWQiLCJzZXRDdXJyZW50U3BlYWtlcklkIiwid2luZG93IiwiZG9jdW1lbnQiLCJ0aXRsZSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJlYWNoIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/ImageChangeOnScroll.js\n");

/***/ })

});