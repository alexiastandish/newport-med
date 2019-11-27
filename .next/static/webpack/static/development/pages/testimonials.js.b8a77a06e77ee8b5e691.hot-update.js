webpackHotUpdate("static/development/pages/testimonials.js",{

/***/ "./pages/testimonials.js":
/*!*******************************!*\
  !*** ./pages/testimonials.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme/index.js");
/* harmony import */ var _styles_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/common */ "./styles/common/index.js");
/* harmony import */ var _components_layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layouts */ "./components/layouts/index.js");
/* harmony import */ var _components_testimonials_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/testimonials-list */ "./components/testimonials-list/index.js");
/* harmony import */ var _components_helpers_useInterval__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/helpers/useInterval */ "./components/helpers/useInterval.js");
/* harmony import */ var _content_testimonials_page_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../content/testimonials-page.json */ "./content/testimonials-page.json");
var _content_testimonials_page_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/testimonials-page.json */ "./content/testimonials-page.json", 1);
/* harmony import */ var _components_testimonials_list_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/testimonials-list/styles */ "./components/testimonials-list/styles.js");
/* harmony import */ var _helpers_triggerAnimations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/triggerAnimations */ "./helpers/triggerAnimations.js");
var _jsxFileName = "/Users/alexiastandish/Desktop/Freelance Clients/NewportMed/newportmed/pages/testimonials.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var Testimonials = function Testimonials(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      slideIdx = _useState[0],
      setSlide = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      beginAnimation = _useState2[0],
      triggerAnimationFunc = _useState2[1];

  Object(_components_helpers_useInterval__WEBPACK_IMPORTED_MODULE_5__["useInterval"])(function () {
    if (slideIdx === _content_testimonials_page_json__WEBPACK_IMPORTED_MODULE_6__["testimonials"].length - 1) {
      setSlide(0);
    } else {
      setSlide(slideIdx + 1);
    }
  }, 10000);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    triggerAnimationFunc(true);
  }, []);
  return __jsx(_components_layouts__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_styles_theme__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(_components_testimonials_list_styles__WEBPACK_IMPORTED_MODULE_7__["StyledTestimonialsHero"], {
    layout: _styles_theme__WEBPACK_IMPORTED_MODULE_1__["leftAlign"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    style: {
      paddingBottom: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Column"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(_helpers_triggerAnimations__WEBPACK_IMPORTED_MODULE_8__["EaseInLeft"], {
    style: {
      display: "flex"
    },
    target: "testimonials-hero-left",
    triggerEaseIn: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, _content_testimonials_page_json__WEBPACK_IMPORTED_MODULE_6__["hero"].header), __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Subheader"], {
    style: {
      maxWidth: "80%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, _content_testimonials_page_json__WEBPACK_IMPORTED_MODULE_6__["hero"].subheader))), __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Column"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(_helpers_triggerAnimations__WEBPACK_IMPORTED_MODULE_8__["EaseInRight"], {
    style: {
      display: "flex"
    },
    target: "testimonials-hero-right",
    triggerEaseIn: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_components_testimonials_list_styles__WEBPACK_IMPORTED_MODULE_7__["StyledHeroTestimonial"], {
    columns: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["StyledBlockQuote"], {
    style: {
      textAlign: "left",
      marginLeft: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "\u201C"), __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Subheader"], {
    style: {
      marginTop: 5,
      marginBottom: 5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, _content_testimonials_page_json__WEBPACK_IMPORTED_MODULE_6__["testimonials"][slideIdx].review), __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["StyledBlockQuote"], {
    style: {
      textAlign: "right"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "\u201D"), __jsx(_components_testimonials_list_styles__WEBPACK_IMPORTED_MODULE_7__["StyledHeroTestimonialInfo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(_components_testimonials_list_styles__WEBPACK_IMPORTED_MODULE_7__["StyledHeroTestimonialImage"], {
    src: _content_testimonials_page_json__WEBPACK_IMPORTED_MODULE_6__["testimonials"][slideIdx].image,
    alt: _content_testimonials_page_json__WEBPACK_IMPORTED_MODULE_6__["testimonials"][slideIdx].person,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), __jsx("div", {
    className: "hero-testimonial-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Body"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, _content_testimonials_page_json__WEBPACK_IMPORTED_MODULE_6__["testimonials"][slideIdx].person), __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Body"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, _content_testimonials_page_json__WEBPACK_IMPORTED_MODULE_6__["testimonials"][slideIdx].position)))))))))), __jsx(_components_testimonials_list__WEBPACK_IMPORTED_MODULE_4__["default"], {
    testimonials: _content_testimonials_page_json__WEBPACK_IMPORTED_MODULE_6__["testimonials"],
    setSlide: setSlide,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Testimonials);

/***/ })

})
//# sourceMappingURL=testimonials.js.b8a77a06e77ee8b5e691.hot-update.js.map