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
/* harmony import */ var _render_props_scroll_into_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../render-props/scroll-into-view */ "./components/render-props/scroll-into-view/index.js");
/* harmony import */ var _helpers_triggerAnimations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/triggerAnimations */ "./helpers/triggerAnimations.js");
var _jsxFileName = "/Users/alexiastandish/Desktop/Freelance Clients/NewportMed/newportmed/components/testimonials-list/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var TestimonialsList = function TestimonialsList(_ref) {
  var setSlide = _ref.setSlide,
      testimonials = _ref.testimonials;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      easeUpBoxesAnimation = _useState[0],
      easeUpBoxesAnimationFunc = _useState[1];

  return __jsx(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_1__["Hero"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["StyledTestimonialsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(_render_props_scroll_into_view__WEBPACK_IMPORTED_MODULE_4__["default"], {
    returnFunc: easeUpBoxesAnimationFunc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["StyledTestimonialsList"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, testimonials.map(function (testimonial, index) {
    return __jsx(_helpers_triggerAnimations__WEBPACK_IMPORTED_MODULE_5__["EaseInBottom"], {
      triggerEaseIn: easeUpBoxesAnimation,
      key: testimonial.person,
      style: {
        width: "33%",
        boxSizing: "border-box"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["StyledTestimonialBox"], {
      columns: 1,
      onClick: function onClick() {
        return setSlide(index);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_1__["Body"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "\"", testimonial.review, "\""), __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_1__["Body"], {
      className: "person",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, testimonial.person), __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_1__["Body"], {
      className: "position",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, testimonial.person)));
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (TestimonialsList);

/***/ })

})
//# sourceMappingURL=testimonials.js.ba334b06d41d481509f6.hot-update.js.map