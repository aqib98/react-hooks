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

/***/ "./src/ImageToggleOnScroll.js":
/*!************************************!*\
  !*** ./src/ImageToggleOnScroll.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/aqibshaik/Documents/pluralsight-react-hooks/src/ImageToggleOnScroll.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar ImageToggleOnScroll = function ImageToggleOnScroll(_ref) {\n  _s();\n\n  var primaryImage = _ref.primaryImage,\n      secondaryImage = _ref.secondaryImage;\n  var imageRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      inView = _useState[0],\n      setInView = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n      isLoading = _useState2[0],\n      setIsLoading = _useState2[1];\n\n  var isInView = function isInView() {\n    var rect = imageRef.current.getBoundingClientRect();\n    return rect.top >= 0 && rect.bottom <= window.innerHeight;\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setIsLoading(false);\n    setInView(isInView());\n    window.addEventListener(\"scroll\", scrollHandler);\n    return function () {\n      window.addEventListener(\"scroll\", scrollHandler);\n    };\n  }, []);\n\n  var scrollHandler = function scrollHandler() {\n    setInView(isInView());\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n    src: inView ? secondaryImage : primaryImage,\n    alt: \"\",\n    ref: imageRef\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(ImageToggleOnScroll, \"C8+GHfeGI0A4g5nO5LEje9gUINk=\");\n\n_c = ImageToggleOnScroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageToggleOnScroll);\n\nvar _c;\n\n$RefreshReg$(_c, \"ImageToggleOnScroll\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvSW1hZ2VUb2dnbGVPblNjcm9sbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztBQUVBLElBQU1JLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsT0FBb0M7QUFBQTs7QUFBQSxNQUFsQ0MsWUFBa0MsUUFBbENBLFlBQWtDO0FBQUEsTUFBcEJDLGNBQW9CLFFBQXBCQSxjQUFvQjtBQUU1RCxNQUFNQyxRQUFRLEdBQUdMLDZDQUFNLENBQUMsSUFBRCxDQUF2Qjs7QUFFQSxrQkFBMkJDLCtDQUFRLENBQUMsS0FBRCxDQUFuQztBQUFBLE1BQU9LLE1BQVA7QUFBQSxNQUFjQyxTQUFkOztBQUNBLG1CQUFpQ04sK0NBQVEsQ0FBQyxJQUFELENBQXpDO0FBQUEsTUFBT08sU0FBUDtBQUFBLE1BQWlCQyxZQUFqQjs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ25CLFFBQU1DLElBQUksR0FBR04sUUFBUSxDQUFDTyxPQUFULENBQWlCQyxxQkFBakIsRUFBYjtBQUNBLFdBQU9GLElBQUksQ0FBQ0csR0FBTCxJQUFZLENBQVosSUFBaUJILElBQUksQ0FBQ0ksTUFBTCxJQUFlQyxNQUFNLENBQUNDLFdBQTlDO0FBQ0gsR0FIRDs7QUFLQWxCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNaVSxJQUFBQSxZQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0FGLElBQUFBLFNBQVMsQ0FBQ0csUUFBUSxFQUFULENBQVQ7QUFDQU0sSUFBQUEsTUFBTSxDQUFDRSxnQkFBUCxDQUF3QixRQUF4QixFQUFpQ0MsYUFBakM7QUFDQSxXQUFPLFlBQU07QUFDVEgsTUFBQUEsTUFBTSxDQUFDRSxnQkFBUCxDQUF3QixRQUF4QixFQUFpQ0MsYUFBakM7QUFDSCxLQUZEO0FBR0gsR0FQUSxFQU9QLEVBUE8sQ0FBVDs7QUFTQSxNQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDeEJaLElBQUFBLFNBQVMsQ0FBQ0csUUFBUSxFQUFULENBQVQ7QUFDSCxHQUZEOztBQUlBLHNCQUNJO0FBRUksT0FBRyxFQUFJSixNQUFNLEdBQUdGLGNBQUgsR0FBb0JELFlBRnJDO0FBR0ksT0FBRyxFQUFHLEVBSFY7QUFJSSxPQUFHLEVBQUlFO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBUUgsQ0FqQ0Q7O0dBQU1IOztLQUFBQTtBQW1DTiwrREFBZUEsbUJBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0ltYWdlVG9nZ2xlT25TY3JvbGwuanM/OTY2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEltYWdlVG9nZ2xlT25TY3JvbGwgPSAoe3ByaW1hcnlJbWFnZSwgc2Vjb25kYXJ5SW1hZ2V9KSA9PiB7XG5cbiAgICBjb25zdCBpbWFnZVJlZiA9IHVzZVJlZihudWxsKTtcblxuICAgIGNvbnN0IFtpblZpZXcsc2V0SW5WaWV3XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaXNMb2FkaW5nLHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAgIGNvbnN0IGlzSW5WaWV3ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZWN0ID0gaW1hZ2VSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgcmV0dXJuIHJlY3QudG9wID49IDAgJiYgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHNldEluVmlldyhpc0luVmlldygpKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixzY3JvbGxIYW5kbGVyKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsc2Nyb2xsSGFuZGxlcik7XG4gICAgICAgIH1cbiAgICB9LFtdKVxuXG4gICAgY29uc3Qgc2Nyb2xsSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgc2V0SW5WaWV3KGlzSW5WaWV3KCkpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGltZyBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc3JjID0ge2luVmlldyA/IHNlY29uZGFyeUltYWdlIDogcHJpbWFyeUltYWdlfVxuICAgICAgICAgICAgYWx0ID0gXCJcIlxuICAgICAgICAgICAgcmVmID0ge2ltYWdlUmVmfVxuICAgICAgICAvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VUb2dnbGVPblNjcm9sbDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkltYWdlVG9nZ2xlT25TY3JvbGwiLCJwcmltYXJ5SW1hZ2UiLCJzZWNvbmRhcnlJbWFnZSIsImltYWdlUmVmIiwiaW5WaWV3Iiwic2V0SW5WaWV3IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaXNJblZpZXciLCJyZWN0IiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImJvdHRvbSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbEhhbmRsZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ImageToggleOnScroll.js\n");

/***/ })

});