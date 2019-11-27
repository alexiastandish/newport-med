webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/landing-page/testimonials/index.js":
/*!*******************************************************!*\
  !*** ./components/landing-page/testimonials/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/theme */ "./styles/theme/index.js");
/* harmony import */ var _styles_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/common */ "./styles/common/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/landing-page/testimonials/styles.js");
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-waypoint */ "./node_modules/react-waypoint/es/index.js");
/* harmony import */ var nuka_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nuka-carousel */ "./node_modules/nuka-carousel/es/index.js");
/* harmony import */ var _review__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./review */ "./components/landing-page/testimonials/review/index.js");
var _jsxFileName = "/Users/alexiastandish/Desktop/Freelance Clients/NewportMed/newportmed/components/landing-page/testimonials/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Testimonials = function Testimonials(_ref) {
  var reviews = _ref.reviews;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      currentSlide = _useState[0],
      updateCurrentSlide = _useState[1];

  var beforeSlide = function beforeSlide(current) {
    if (current === reviews.length - 1) {
      return updateCurrentSlide(0);
    }

    return updateCurrentSlide(current + 1);
  };

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      inView = _useState2[0],
      setView = _useState2[1];

  var onEnter = function onEnter(_ref2) {
    var previousPosition = _ref2.previousPosition;
    setTimeout(function () {
      if (previousPosition === react_waypoint__WEBPACK_IMPORTED_MODULE_4__["Waypoint"].below || previousPosition === react_waypoint__WEBPACK_IMPORTED_MODULE_4__["Waypoint"].above) {
        setView(true);
      }
    }, 100);
  };

  var onLeave = function onLeave(_ref3) {
    var previousPosition = _ref3.previousPosition;
    setTimeout(function () {
      if (previousPosition === react_waypoint__WEBPACK_IMPORTED_MODULE_4__["Waypoint"].inside) {
        setView(false);
      }
    }, 100);
  };

  return __jsx(_styles_theme__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: Object(_styles_theme__WEBPACK_IMPORTED_MODULE_1__["invert"])(_styles_theme__WEBPACK_IMPORTED_MODULE_1__["base"]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["StyledGradientHero"], {
    layout: _styles_theme__WEBPACK_IMPORTED_MODULE_1__["centered"],
    inView: inView,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["StyledTestimonialsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "What clients say"), __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Subheader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Hear from your peers that know us best."), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["StyledTestimonialsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(nuka_carousel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    withoutControls: true,
    wrapAround: true,
    autoplay: true,
    autoplayInterval: 4000,
    dragging: false,
    beforeSlide: beforeSlide,
    cellSpacing: 0,
    slidesToShow: 3,
    slideWidth: "600px",
    cellAlign: "center",
    style: {
      width: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, reviews.map(function (review, idx) {
    return __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["StyledReviewWrapper"], {
      currentSlide: currentSlide === idx,
      key: review.person,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, __jsx(_review__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: review.person,
      person: review.person,
      position: review.position,
      image: review.image,
      review: review.review,
      currentSlide: currentSlide === idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }));
  })))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["StyledMobileResponsiveCarousel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "What clients say"), __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Subheader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Hear from your peers that know us best."), __jsx(nuka_carousel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    withoutControls: true,
    wrapAround: true,
    autoplay: true,
    autoplayInterval: 4000,
    dragging: false,
    beforeSlide: beforeSlide,
    cellSpacing: 0,
    slidesToShow: 3,
    slideWidth: "300px",
    cellAlign: "center",
    style: {
      width: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, reviews.map(function (review, idx) {
    return __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["StyledReviewWrapper"], {
      currentSlide: currentSlide === idx,
      key: review.person,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx(_review__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: review.person,
      person: review.person,
      position: review.position,
      image: review.image,
      review: review.review,
      currentSlide: currentSlide === idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Testimonials);
Testimonials.defaultProps = {
  reviews: [{
    review: "NewportMed’s passion for healthcare and attention to detail cannot be overestimated. We are very pleased with our working relationship and continue to use them to improve our efficiencies and revenue cycle.",
    person: "James T. Caillouette",
    position: "M.D. of Newport Orthopedic Institute in Newport Beach, CA",
    image: "https://en.bcdn.biz/Images/2014/2/20/2d572872-a8da-40b3-9dcc-378200fcaf71.jpg"
  }, {
    review: "NewportMed has done a terrific job and we are very pleased with their collaboration. Their education services and custom charge ticket development has had a direct impact on our bottom line.",
    person: "Cara M. Waller",
    position: "Newport Orthopedic Institute in Newport Beach, CA",
    image: "https://en.bcdn.biz/Images/2014/2/20/2d572872-a8da-40b3-9dcc-378200fcaf71.jpg"
  }, {
    review: "With your help, we made a smooth transition to electronic medical records (EMR) and achieved our goal of satisfying the criteria for Phase I of Meaningful Use for 100% of our physicians.",
    person: "Michael J. Fitzpatrick",
    position: "M.D., President of South Orange County Orthopedics in Mission Viejo, CA",
    image: "https://en.bcdn.biz/Images/2014/2/20/2d572872-a8da-40b3-9dcc-378200fcaf71.jpg"
  }, {
    review: "We made the change to Newport Medical Services back in February 2018. Since we have made the change, our monthly revenue has continued to increase! We are averaging almost 35-40% more than in previous years under our old system.",
    person: "Ian Corland",
    position: "Administrator of Expert Spine Care in Nashville, TN",
    image: "https://en.bcdn.biz/Images/2014/2/20/2d572872-a8da-40b3-9dcc-378200fcaf71.jpg"
  }, {
    review: "We have been working with Newport Medical Solutions for nearly 8 years now. NMS has repeatedly demonstrated professionalism and attention to detail on every single claim as well as the willingness to educate and work with our entire team.",
    person: "Ting Chi",
    position: "M.D. of Orange County Hand Surgery Specialists in Fountain Valley, CA",
    image: "https://en.bcdn.biz/Images/2014/2/20/2d572872-a8da-40b3-9dcc-378200fcaf71.jpg"
  }, {
    review: "I have been extremely happy using NewportMed as our billing company. In all my years of experience, I have never been as satisfied as I am with them.",
    person: "Michael Gillman",
    position: "M.D. of Restore Orthopedic and Spine Center in Orange, CA",
    image: "https://en.bcdn.biz/Images/2014/2/20/2d572872-a8da-40b3-9dcc-378200fcaf71.jpg"
  }, {
    review: "NewportMed’s services are second-to-none. Your partnership with my practice has also enabled me to focus more time on surgeries and services I specialize in.",
    person: "Christopher Duma",
    position: "M.D. of Brain &amp; Spine Surgeons of Orange County in Newport Beach, CA",
    image: "https://en.bcdn.biz/Images/2014/2/20/2d572872-a8da-40b3-9dcc-378200fcaf71.jpg"
  }, {
    review: "I’ve been extremely impressed with your knowledge of my specialty and expertise in the coding nuances. In addition, your understanding and direct involvement in credentialing and proper dictation has been invaluable.",
    person: "Richard Kim",
    position: "M.D., M.S. of DISC Sports and Spine Center in Newport Beach, CA",
    image: "https://en.bcdn.biz/Images/2014/2/20/2d572872-a8da-40b3-9dcc-378200fcaf71.jpg"
  }, {
    review: "The meetings to review my coding, my dictation and carrier reimbursements have been essential to my understanding of what specific areas of surgery generate revenue for my practice.",
    person: "William Dobkin",
    position: "M.D. of William Dobkin, MD, Inc. in Newport Beach, CA",
    image: "https://en.bcdn.biz/Images/2014/2/20/2d572872-a8da-40b3-9dcc-378200fcaf71.jpg"
  }]
};

/***/ })

})
//# sourceMappingURL=index.js.e3ba37352cf2b9ecbf1f.hot-update.js.map