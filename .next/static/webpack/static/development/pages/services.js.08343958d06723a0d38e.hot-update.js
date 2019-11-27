webpackHotUpdate("static/development/pages/services.js",{

/***/ "./pages/services.js":
/*!***************************!*\
  !*** ./pages/services.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme/index.js");
/* harmony import */ var _styles_theme_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme/_layout */ "./styles/theme/_layout.js");
/* harmony import */ var _styles_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/common */ "./styles/common/index.js");
/* harmony import */ var _components_services_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/services/styles */ "./components/services/styles.js");
/* harmony import */ var _content_services_page_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../content/services-page.json */ "./content/services-page.json");
var _content_services_page_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/services-page.json */ "./content/services-page.json", 1);
/* harmony import */ var _components_layouts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layouts */ "./components/layouts/index.js");
/* harmony import */ var _components_services_revenue_cycle_management__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/services/revenue-cycle-management */ "./components/services/revenue-cycle-management/index.js");
/* harmony import */ var _components_services_cloud_based_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/services/cloud-based-services */ "./components/services/cloud-based-services/index.js");
/* harmony import */ var _components_services_solutions_integration__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/services/solutions-integration */ "./components/services/solutions-integration/index.js");
/* harmony import */ var _components_services_practice_advocates__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/services/practice-advocates */ "./components/services/practice-advocates/index.js");
/* harmony import */ var _helpers_triggerAnimations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helpers/triggerAnimations */ "./helpers/triggerAnimations.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
var _jsxFileName = "/Users/alexiastandish/Desktop/Freelance Clients/NewportMed/newportmed/pages/services.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














var Services = function Services(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      beginAnimation = _useState[0],
      triggerAnimationFunc = _useState[1];

  var setSection = function setSection(section) {
    var target = document.getElementById(section);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  var triggerAnimation = function triggerAnimation() {
    beginAnimation && Object(animejs__WEBPACK_IMPORTED_MODULE_12__["default"])({
      targets: ".ease-in-bottom",
      translateY: [100, 0],
      easing: "easeOutQuad",
      duration: 700,
      autoplay: false,
      loop: false,
      opacity: [0, 1],
      delay: animejs__WEBPACK_IMPORTED_MODULE_12__["default"].stagger(150, {
        start: 600
      })
    }).play();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    triggerAnimationFunc(true);
  }, [beginAnimation]);
  return __jsx(_components_layouts__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(_styles_theme__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: _styles_theme__WEBPACK_IMPORTED_MODULE_1__["base"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_components_services_styles__WEBPACK_IMPORTED_MODULE_4__["StyledServicesHero"], {
    layout: _styles_theme_layout__WEBPACK_IMPORTED_MODULE_2__["centered"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(_helpers_triggerAnimations__WEBPACK_IMPORTED_MODULE_11__["EaseInBottom"], {
    triggerEaseIn: beginAnimation,
    className: "services-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, _content_services_page_json__WEBPACK_IMPORTED_MODULE_5__["hero"].header), __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_3__["Subheader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, _content_services_page_json__WEBPACK_IMPORTED_MODULE_5__["hero"].subheader)), __jsx(_components_services_styles__WEBPACK_IMPORTED_MODULE_4__["StyledServiceBoxes"], {
    className: "ease-in-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, _content_services_page_json__WEBPACK_IMPORTED_MODULE_5__["hero"].services.map(function (service) {
    return __jsx(_components_services_styles__WEBPACK_IMPORTED_MODULE_4__["StyledServiceBox"], {
      onClick: function onClick() {
        return setSection(service.link);
      },
      key: service.service,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("img", {
      src: service.icon,
      alt: service.service,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }), __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_3__["Subheader"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, service.service));
  }))))), __jsx("div", {
    id: _content_services_page_json__WEBPACK_IMPORTED_MODULE_5__["hero"].services[0].link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(_components_services_revenue_cycle_management__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })), __jsx("div", {
    id: _content_services_page_json__WEBPACK_IMPORTED_MODULE_5__["hero"].services[1].link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(_components_services_cloud_based_services__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  })), __jsx("div", {
    id: _content_services_page_json__WEBPACK_IMPORTED_MODULE_5__["hero"].services[2].link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(_components_services_solutions_integration__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  })), __jsx("div", {
    id: _content_services_page_json__WEBPACK_IMPORTED_MODULE_5__["hero"].services[3].link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(_components_services_practice_advocates__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ })

})
//# sourceMappingURL=services.js.08343958d06723a0d38e.hot-update.js.map