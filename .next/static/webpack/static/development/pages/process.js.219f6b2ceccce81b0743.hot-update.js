webpackHotUpdate("static/development/pages/process.js",{

/***/ "./helpers/triggerAnimations.js":
/*!**************************************!*\
  !*** ./helpers/triggerAnimations.js ***!
  \**************************************/
/*! exports provided: EaseInLeft, EaseInBottom, EaseInRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EaseInLeft", function() { return EaseInLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EaseInBottom", function() { return EaseInBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EaseInRight", function() { return EaseInRight; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
var _jsxFileName = "/Users/alexiastandish/Desktop/Freelance Clients/NewportMed/newportmed/helpers/triggerAnimations.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var EaseInLeft = function EaseInLeft(_ref) {
  var target = _ref.target,
      children = _ref.children,
      triggerEaseIn = _ref.triggerEaseIn,
      style = _ref.style;
  triggerEaseIn && Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(animejs__WEBPACK_IMPORTED_MODULE_2__["default"])({
      targets: ".".concat(target),
      translateX: [-100, 0],
      easing: "easeOutQuad",
      duration: 700,
      loop: false,
      autoplay: true,
      opacity: 1,
      delay: animejs__WEBPACK_IMPORTED_MODULE_2__["default"].stagger(150, {
        start: 600
      })
    });
  }, [target]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children.length > 1 ? children.map(function (child) {
    return __jsx(StyledEaseInWrapper, {
      style: style,
      key: child.props.children,
      className: target,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, child);
  }) : __jsx(StyledEaseInWrapper, {
    className: target,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, children));
};

var EaseInRight = function EaseInRight(_ref2) {
  var target = _ref2.target,
      children = _ref2.children,
      triggerEaseIn = _ref2.triggerEaseIn,
      style = _ref2.style;
  triggerEaseIn && Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(animejs__WEBPACK_IMPORTED_MODULE_2__["default"])({
      targets: ".".concat(target),
      translateX: [150, 0],
      easing: "easeOutQuad",
      duration: 700,
      loop: false,
      autoplay: true,
      opacity: 1,
      delay: animejs__WEBPACK_IMPORTED_MODULE_2__["default"].stagger(150, {
        start: 600
      })
    });
  }, [target]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children.length > 1 ? children.map(function (child) {
    return __jsx(StyledEaseInWrapper, {
      style: style,
      key: child.props.children || child.props.name,
      className: target,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, child);
  }) : __jsx(StyledEaseInWrapper, {
    className: target,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, children));
};

var EaseInBottom = function EaseInBottom(_ref3) {
  var beginAnimation = _ref3.beginAnimation,
      children = _ref3.children,
      triggerEaseIn = _ref3.triggerEaseIn,
      style = _ref3.style,
      className = _ref3.className;

  var triggerAnimation = function triggerAnimation() {
    triggerEaseIn && Object(animejs__WEBPACK_IMPORTED_MODULE_2__["default"])({
      targets: ".ease-in-bottom",
      translateY: [100, 0],
      easing: "easeOutQuad",
      duration: 700,
      autoplay: false,
      loop: false,
      opacity: [0, 1],
      delay: animejs__WEBPACK_IMPORTED_MODULE_2__["default"].stagger(150, {
        start: 600
      })
    }).play();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(triggerAnimation, [beginAnimation, triggerEaseIn]);
  return __jsx("div", {
    style: style,
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, children.length > 1 ? children.map(function (child) {
    return __jsx(StyledEaseInWrapper, {
      style: style,
      key: child.props.children,
      className: "ease-in-bottom",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, child);
  }) : __jsx(StyledEaseInWrapper, {
    className: "ease-in-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, children));
};


var StyledEaseInWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "triggerAnimations__StyledEaseInWrapper",
  componentId: "sc-1f74he5-0"
})(["opacity:0;", ""], function (props) {
  return props.style ? props.style : null;
});

/***/ })

})
//# sourceMappingURL=process.js.219f6b2ceccce81b0743.hot-update.js.map