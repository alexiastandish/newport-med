webpackHotUpdate("static/development/pages/testimonials.js",{

/***/ "./components/header/mobile-nav/open-mobile-menu/index.js":
/*!****************************************************************!*\
  !*** ./components/header/mobile-nav/open-mobile-menu/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/header/mobile-nav/open-mobile-menu/styles.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/alexiastandish/Desktop/Freelance Clients/NewportMed/newportmed/components/header/mobile-nav/open-mobile-menu/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var OpenMobileMenu = function OpenMobileMenu(_ref) {
  var menuOpen = _ref.menuOpen,
      handleMenuToggle = _ref.handleMenuToggle,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["menuOpen", "handleMenuToggle"]);

  var navLinks = [{
    slug: "/about",
    link: "About Us"
  }, {
    slug: "/process",
    link: "Our Process"
  }, {
    slug: "/services",
    link: "Our Services"
  }, {
    slug: "/testimonials",
    link: "Testimonials"
  }];
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["StyledOpenMobileMenu"], {
    menuOpen: menuOpen,
    className: menuOpen ? "open" : "closed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["StyledMobileLinkList"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, navLinks.map(function (item, index) {
    return __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["StyledMobileLink"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: item.link
    }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: item.slug,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, item.link)));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (OpenMobileMenu);

/***/ })

})
//# sourceMappingURL=testimonials.js.91ed20a745aae151b5ce.hot-update.js.map