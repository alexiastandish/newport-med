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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    triggerAnimationFunc(true);
  }, []);
  return __jsx(_components_layouts__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_styles_theme__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: _styles_theme__WEBPACK_IMPORTED_MODULE_1__["base"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_components_services_styles__WEBPACK_IMPORTED_MODULE_4__["StyledServicesHero"], {
    layout: _styles_theme_layout__WEBPACK_IMPORTED_MODULE_2__["centered"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(_helpers_triggerAnimations__WEBPACK_IMPORTED_MODULE_11__["EaseInBottom"], {
    triggerEaseIn: beginAnimation,
    className: "services-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, _content_services_page_json__WEBPACK_IMPORTED_MODULE_5__["hero"].header), __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_3__["Subheader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, _content_services_page_json__WEBPACK_IMPORTED_MODULE_5__["hero"].subheader)), __jsx(_components_services_styles__WEBPACK_IMPORTED_MODULE_4__["StyledServiceBoxes"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, _content_services_page_json__WEBPACK_IMPORTED_MODULE_5__["hero"].services.map(function (service) {
    return __jsx(_helpers_triggerAnimations__WEBPACK_IMPORTED_MODULE_11__["EaseInBottom"], {
      triggerEaseIn: beginAnimation,
      key: service.service,
      className: "styled-service-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx(_components_services_styles__WEBPACK_IMPORTED_MODULE_4__["StyledServiceBox"], {
      onClick: function onClick() {
        return setSection(service.link);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("img", {
      src: service.icon,
      alt: service.service,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_3__["Subheader"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, service.service)));
  }))))), __jsx("div", {
    id: _content_services_page_json__WEBPACK_IMPORTED_MODULE_5__["hero"].services[0].link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(_components_services_revenue_cycle_management__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  })), __jsx("div", {
    id: _content_services_page_json__WEBPACK_IMPORTED_MODULE_5__["hero"].services[1].link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(_components_services_cloud_based_services__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  })), __jsx("div", {
    id: _content_services_page_json__WEBPACK_IMPORTED_MODULE_5__["hero"].services[2].link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(_components_services_solutions_integration__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })), __jsx("div", {
    id: _content_services_page_json__WEBPACK_IMPORTED_MODULE_5__["hero"].services[3].link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(_components_services_practice_advocates__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ })

})
//# sourceMappingURL=services.js.70bd2f0bf35bd59f2ade.hot-update.js.map