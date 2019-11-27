webpackHotUpdate("static/development/pages/testimonials.js",{

/***/ "./components/testimonials-list/styles.js":
/*!************************************************!*\
  !*** ./components/testimonials-list/styles.js ***!
  \************************************************/
/*! exports provided: StyledTestimonialsContainer, StyledTestimonialsHero, StyledHeroTestimonial, StyledHeroTestimonialInfo, StyledHeroTestimonialImage, StyledTestimonialBox, StyledTestimonialsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledTestimonialsContainer", function() { return StyledTestimonialsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledTestimonialsHero", function() { return StyledTestimonialsHero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledHeroTestimonial", function() { return StyledHeroTestimonial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledHeroTestimonialInfo", function() { return StyledHeroTestimonialInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledHeroTestimonialImage", function() { return StyledHeroTestimonialImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledTestimonialBox", function() { return StyledTestimonialBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledTestimonialsList", function() { return StyledTestimonialsList; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _styles_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/common */ "./styles/common/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/_variables */ "./styles/_variables.js");
/* harmony import */ var _styles_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/_media */ "./styles/_media.js");


function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: auto;\n  .styled-box-cols {\n    width: 100%;\n  }\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      height: 1550px;\n  .styled-box-cols {\n    width: 50%;\n  }\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    height: 1100px;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    height: 1000px;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 100%;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-top: 50px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: auto;\n  padding-top: 50px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var StyledTestimonialsHero = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_styles_common__WEBPACK_IMPORTED_MODULE_1__["Hero"]).withConfig({
  displayName: "styles__StyledTestimonialsHero",
  componentId: "ympidp-0"
})(["min-height:600px;height:600px;", ""], _styles_media__WEBPACK_IMPORTED_MODULE_4__["default"].smxs(_templateObject()));
var StyledTestimonialsContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_styles_common__WEBPACK_IMPORTED_MODULE_1__["Container"]).withConfig({
  displayName: "styles__StyledTestimonialsContainer",
  componentId: "ympidp-1"
})(["padding-top:30px;box-sizing:border-box;"]);
var StyledHeroTestimonial = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_styles_common__WEBPACK_IMPORTED_MODULE_1__["Box"]).withConfig({
  displayName: "styles__StyledHeroTestimonial",
  componentId: "ympidp-2"
})(["padding:10px 30px 20px 30px;box-sizing:border-box;width:100%;", ""], _styles_media__WEBPACK_IMPORTED_MODULE_4__["default"].sm(_templateObject2()));
var StyledHeroTestimonialInfo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styles__StyledHeroTestimonialInfo",
  componentId: "ympidp-3"
})(["display:flex;flex-direction:row;align-items:flex-start;.hero-testimonial-info{p:nth-of-type(1){text-transform:uppercase;}p:nth-of-type(2){font-size:12px;}}"]);
var StyledHeroTestimonialImage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "styles__StyledHeroTestimonialImage",
  componentId: "ympidp-4"
})(["width:50px;height:50px;border-radius:50%;object-fit:cover;margin-right:20px;"]);
var StyledTestimonialBox = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_styles_common__WEBPACK_IMPORTED_MODULE_1__["Box"]).withConfig({
  displayName: "styles__StyledTestimonialBox",
  componentId: "ympidp-5"
})(["box-sizing:border-box;font-family:Work Sans;padding:20px;border:1px solid transparent;margin:0 auto;.person{text-transform:uppercase;font-size:12px;font-weight:500;color:", ";letter-spacing:1px;margin-top:20px;}.position{font-size:12px;font-weight:500;margin-top:0px;}&:hover{cursor:pointer;border:1px solid ", ";}transition:0.2s all linear;", ""], _styles_variables__WEBPACK_IMPORTED_MODULE_3__["colors"].red, _styles_variables__WEBPACK_IMPORTED_MODULE_3__["colors"].red, _styles_media__WEBPACK_IMPORTED_MODULE_4__["default"].sm(_templateObject3()));
var StyledTestimonialsList = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styles__StyledTestimonialsList",
  componentId: "ympidp-6"
})(["display:flex;flex-direction:column;height:800px;flex-wrap:wrap;.styled-box-cols{width:33.3%;margin-bottom:15px;box-sizing:border-box;}", " ", " ", " ", ""], _styles_media__WEBPACK_IMPORTED_MODULE_4__["default"].xl(_templateObject4()), _styles_media__WEBPACK_IMPORTED_MODULE_4__["default"].lg(_templateObject5()), _styles_media__WEBPACK_IMPORTED_MODULE_4__["default"].md(_templateObject6()), _styles_media__WEBPACK_IMPORTED_MODULE_4__["default"].sm(_templateObject7()));


/***/ })

})
//# sourceMappingURL=testimonials.js.8de45ce88d220095657a.hot-update.js.map