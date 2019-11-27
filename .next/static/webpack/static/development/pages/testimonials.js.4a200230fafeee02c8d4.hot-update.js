webpackHotUpdate("static/development/pages/testimonials.js",{

/***/ "./components/helpers/useInterval.js":
/*!*******************************************!*\
  !*** ./components/helpers/useInterval.js ***!
  \*******************************************/
/*! exports provided: useInterval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInterval", function() { return useInterval; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useInterval(callback, delay) {
  var savedCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(); // Remember the latest function.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    savedCallback.current = callback;
  }, [callback]); // Set up the interval.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      var id = setInterval(tick, delay);
      return function () {
        return clearInterval(id);
      };
    }
  }, [delay]);
}



/***/ })

})
//# sourceMappingURL=testimonials.js.4a200230fafeee02c8d4.hot-update.js.map