webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/landing-page/testimonials/review/index.js":
/*!**************************************************************!*\
  !*** ./components/landing-page/testimonials/review/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/landing-page/testimonials/review/styles.js");
/* harmony import */ var _styles_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../styles/common */ "./styles/common/index.js");
var _jsxFileName = "/Users/alexiastandish/Desktop/Freelance Clients/NewportMed/newportmed/components/landing-page/testimonials/review/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Review = function Review(_ref) {
  var person = _ref.person,
      position = _ref.position,
      image = _ref.image,
      review = _ref.review,
      currentSlide = _ref.currentSlide;
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["StyledReview"], {
    currentSlide: currentSlide,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["StyledReviewHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["StyledBlockQuote"], {
    currentSlide: currentSlide,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "\u201C"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["StyledReviewImg"], {
    currentSlide: currentSlide,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("img", {
    src: image,
    alt: person,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["StyledPerson"], {
    currentSlide: currentSlide,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Subheader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, person), __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Body"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, position))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["StyledReviewBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "\"", review, "\""));
};

/* harmony default export */ __webpack_exports__["default"] = (Review);

/***/ }),

/***/ "./components/landing-page/testimonials/review/styles.js":
/*!***************************************************************!*\
  !*** ./components/landing-page/testimonials/review/styles.js ***!
  \***************************************************************/
/*! exports provided: StyledReview, StyledReviewHeader, StyledReviewBody, StyledReviewImg, StyledPerson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledReview", function() { return StyledReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledReviewHeader", function() { return StyledReviewHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledReviewBody", function() { return StyledReviewBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledReviewImg", function() { return StyledReviewImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledPerson", function() { return StyledPerson; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../styles/common */ "./styles/common/index.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../styles/_variables */ "./styles/_variables.js");
/* harmony import */ var _styles_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../styles/_media */ "./styles/_media.js");


function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  right: auto;\n  width:100%;\n  text-align: center;\n  position: relative;\n  p:nth-of-type(2) {\n    font-size: 12px;\n    line-height: 18px;\n    color: ", ";\n  }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 50px;\n  margin-top: -10px;\n  width: 50px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  align-items: center;\n  height: auto;\n  flex-direction: column;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: 20px 10px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var StyledReview = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Box"]).withConfig({
  displayName: "styles__StyledReview",
  componentId: "dgf9g-0"
})(["overflow:hidden;height:100%;width:100%;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;box-sizing:border-box;padding:40px 25px;", ""], _styles_media__WEBPACK_IMPORTED_MODULE_4__["default"].smxs(_templateObject()));
var StyledReviewBody = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Body"]).withConfig({
  displayName: "styles__StyledReviewBody",
  componentId: "dgf9g-1"
})(["align-self:flex-end;text-indent:-0.4125em;margin:0.5rem;text-align:left;margin-top:30px;"]);
var StyledReviewHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "styles__StyledReviewHeader",
  componentId: "dgf9g-2"
})(["height:100px;width:100%;display:flex;justify-content:flex-start;", ""], _styles_media__WEBPACK_IMPORTED_MODULE_4__["default"].smxs(_templateObject2()));
var StyledReviewImg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "styles__StyledReviewImg",
  componentId: "dgf9g-3"
})(["height:100px;margin-top:-10px;width:100px;object-fit:cover;overflow:hidden;border-radius:50px;background:", ";img{height:100%;object-fit:cover;", ";}", ""], _styles_variables__WEBPACK_IMPORTED_MODULE_3__["colors"].blue, function (props) {
  return props.currentSlide ? "opacity: 1" : "opacity: .2; filter: grayscale(100%)";
}, _styles_media__WEBPACK_IMPORTED_MODULE_4__["default"].smxs(_templateObject3()));
var StyledPerson = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "styles__StyledPerson",
  componentId: "dgf9g-4"
})(["position:absolute;right:50px;display:flex;flex-direction:column;width:300px;text-align:left;p:nth-of-type(1){margin-bottom:0px;margin-top:0px;", ";}p:nth-of-type(2){font-size:14px;line-height:20px;color:", ";}", ""], function (props) {
  return props.currentSlide ? "  color: ".concat(_styles_variables__WEBPACK_IMPORTED_MODULE_3__["colors"].red) : "  color: ".concat(_styles_variables__WEBPACK_IMPORTED_MODULE_3__["colors"].blue);
}, _styles_variables__WEBPACK_IMPORTED_MODULE_3__["colors"].gray, _styles_media__WEBPACK_IMPORTED_MODULE_4__["default"].smxs(_templateObject4(), _styles_variables__WEBPACK_IMPORTED_MODULE_3__["colors"].gray));
 // ${props =>
//   props.currentSlide ? `  color: ${colors.red}` : `  color: ${colors.blue}`};

/***/ }),

/***/ "./styles/common/StyledBlockQuote.js":
/*!*******************************************!*\
  !*** ./styles/common/StyledBlockQuote.js ***!
  \*******************************************/
/*! exports provided: StyledBlockQuote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledBlockQuote", function() { return StyledBlockQuote; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_media */ "./styles/_media.js");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_variables */ "./styles/_variables.js");


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n   margin-right: auto;\n   margin-left: auto;\n   margin-bottom: -20px;\n    text-align: center;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", ";\n  opacity: ", ";\n  font-size: 80px;\n  margin-bottom: -30px;\n  margin-right: 20px;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var StyledBlockQuote = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2(_templateObject(), function (props) {
  return props.currentSlide ? "  color: ".concat(_variables__WEBPACK_IMPORTED_MODULE_3__["colors"].red) : "  color: ".concat(_variables__WEBPACK_IMPORTED_MODULE_3__["colors"].gray);
}, function (props) {
  return props.currentSlide ? "1" : ".5";
}, _media__WEBPACK_IMPORTED_MODULE_2__["default"].smxs(_templateObject2()));


/***/ }),

/***/ "./styles/common/index.js":
/*!********************************!*\
  !*** ./styles/common/index.js ***!
  \********************************/
/*! exports provided: Header, Hero, Container, Column, Row, Body, ATag, Subheader, Button, ButtonLink, Box, Input, StyledBlockQuote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Header */ "./styles/common/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _common_Header__WEBPACK_IMPORTED_MODULE_0__["Header"]; });

/* harmony import */ var _common_Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Hero */ "./styles/common/Hero.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return _common_Hero__WEBPACK_IMPORTED_MODULE_1__["Hero"]; });

/* harmony import */ var _common_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Container */ "./styles/common/Container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _common_Container__WEBPACK_IMPORTED_MODULE_2__["Container"]; });

/* harmony import */ var _common_Column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Column */ "./styles/common/Column.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return _common_Column__WEBPACK_IMPORTED_MODULE_3__["Column"]; });

/* harmony import */ var _common_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Row */ "./styles/common/Row.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return _common_Row__WEBPACK_IMPORTED_MODULE_4__["Row"]; });

/* harmony import */ var _common_Body__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Body */ "./styles/common/Body.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return _common_Body__WEBPACK_IMPORTED_MODULE_5__["Body"]; });

/* harmony import */ var _common_ATag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/ATag */ "./styles/common/ATag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ATag", function() { return _common_ATag__WEBPACK_IMPORTED_MODULE_6__["ATag"]; });

/* harmony import */ var _Subheader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Subheader */ "./styles/common/Subheader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subheader", function() { return _Subheader__WEBPACK_IMPORTED_MODULE_7__["Subheader"]; });

/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/Button */ "./styles/common/Button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _common_Button__WEBPACK_IMPORTED_MODULE_8__["Button"]; });

/* harmony import */ var _common_ButtonLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/ButtonLink */ "./styles/common/ButtonLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonLink", function() { return _common_ButtonLink__WEBPACK_IMPORTED_MODULE_9__["ButtonLink"]; });

/* harmony import */ var _common_Box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/Box */ "./styles/common/Box.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return _common_Box__WEBPACK_IMPORTED_MODULE_10__["Box"]; });

/* harmony import */ var _common_Input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/Input */ "./styles/common/Input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _common_Input__WEBPACK_IMPORTED_MODULE_11__["Input"]; });

/* harmony import */ var _common_StyledBlockQuote__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/StyledBlockQuote */ "./styles/common/StyledBlockQuote.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyledBlockQuote", function() { return _common_StyledBlockQuote__WEBPACK_IMPORTED_MODULE_12__["StyledBlockQuote"]; });















/***/ })

})
//# sourceMappingURL=index.js.639d2eaf3884e3970531.hot-update.js.map