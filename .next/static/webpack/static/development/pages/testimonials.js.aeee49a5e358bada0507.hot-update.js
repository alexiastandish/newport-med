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
var _jsxFileName = "/Users/alexiastandish/Desktop/Freelance Clients/NewportMed/newportmed/pages/testimonials.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Testimonials = function Testimonials(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      slideIdx = _useState[0],
      setSlide = _useState[1];

  Object(_components_helpers_useInterval__WEBPACK_IMPORTED_MODULE_5__["useInterval"])(function () {
    if (slideIdx === _content_testimonials_page_json__WEBPACK_IMPORTED_MODULE_6__["testimonials"].length - 1) {
      setSlide(0);
    } else {
      setSlide(slideIdx + 1);
    }
  }, 3000);
  return __jsx(_components_layouts__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(_styles_theme__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Hero"], {
    layout: _styles_theme__WEBPACK_IMPORTED_MODULE_1__["leftAlign"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Column"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, _content_testimonials_page_json__WEBPACK_IMPORTED_MODULE_6__["hero"].header), __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Subheader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, _content_testimonials_page_json__WEBPACK_IMPORTED_MODULE_6__["hero"].subheader)), __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Column"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Subheader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, _content_testimonials_page_json__WEBPACK_IMPORTED_MODULE_6__["testimonials"][slideIdx].review), __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Body"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, _content_testimonials_page_json__WEBPACK_IMPORTED_MODULE_6__["testimonials"][slideIdx].person)))))), __jsx(_components_testimonials_list__WEBPACK_IMPORTED_MODULE_4__["default"], {
    testimonials: _content_testimonials_page_json__WEBPACK_IMPORTED_MODULE_6__["testimonials"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Testimonials);

/***/ })

})
//# sourceMappingURL=testimonials.js.aeee49a5e358bada0507.hot-update.js.map