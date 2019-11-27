webpackHotUpdate("static/development/pages/testimonials.js",{

/***/ "./components/testimonials-list/index.js":
/*!***********************************************!*\
  !*** ./components/testimonials-list/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/common */ "./styles/common/index.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/testimonials-list/styles.js");

var _jsxFileName = "/Users/alexiastandish/Desktop/Freelance Clients/NewportMed/newportmed/components/testimonials-list/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var TestimonialsList = function TestimonialsList(_ref) {
  var setSlide = _ref.setSlide,
      testimonials = _ref.testimonials;

  var _useState = useState(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      easeUpBoxesAnimation = _useState2[0],
      easeUpBoxesAnimationFunc = _useState2[1];

  return __jsx(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["StyledTestimonialsHero"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["StyledTestimonialsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(ScrollIntoView, {
    returnFunc: easeUpBoxesAnimationFunc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, testimonials.map(function (testimonial, index) {
    return __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["StyledTestimonialBox"], {
      columns: 3,
      key: testimonial.person,
      onClick: function onClick() {
        return setSlide(index);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "\u201C", testimonial.review, " \u201D");
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (TestimonialsList);

/***/ })

})
//# sourceMappingURL=testimonials.js.9a9991691eb41035aed0.hot-update.js.map