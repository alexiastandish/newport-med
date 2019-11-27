webpackHotUpdate("static/development/pages/testimonials.js",{

/***/ "./components/testimonials-list/index.js":
/*!***********************************************!*\
  !*** ./components/testimonials-list/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/common */ "./styles/common/index.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/testimonials-list/styles.js");
var _jsxFileName = "/Users/alexiastandish/Desktop/Freelance Clients/NewportMed/newportmed/components/testimonials-list/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var TestimonialsList = function TestimonialsList(_ref) {
  var setSlide = _ref.setSlide,
      testimonials = _ref.testimonials;
  return __jsx(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_1__["Hero"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["StyledTestimonialsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, testimonials.map(function (testimonial, index) {
    return __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      columns: 3,
      key: testimonial.person,
      onClick: function onClick() {
        return setSlide(index);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, testimonial.review);
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (TestimonialsList);

/***/ }),

/***/ "./components/testimonials-list/styles.js":
/*!************************************************!*\
  !*** ./components/testimonials-list/styles.js ***!
  \************************************************/
/*! exports provided: StyledTestimonialsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledTestimonialsContainer", function() { return StyledTestimonialsContainer; });
/* harmony import */ var _styles_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/common */ "./styles/common/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var StyledTestimonialsContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_styles_common__WEBPACK_IMPORTED_MODULE_0__["Container"]).withConfig({
  displayName: "styles__StyledTestimonialsContainer",
  componentId: "ympidp-0"
})(["padding-top:0px;"]);


/***/ })

})
//# sourceMappingURL=testimonials.js.e7e209721b2cee309f47.hot-update.js.map