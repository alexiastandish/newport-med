module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/contact-section/contact-form/error-text.js":
/*!***************************************************************!*\
  !*** ./components/contact-section/contact-form/error-text.js ***!
  \***************************************************************/
/*! exports provided: getFormErrorText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormErrorText", function() { return getFormErrorText; });
/**
 * Helper to get the text of a specific field error.
 * Returns the first message, and error checks.
 * @param errors
 * @param field
 * @returns {null|*}
 */
const getFormErrorText = (errors = [], field) => {
  if (errors && errors[field] && errors[field].length) {
    return errors[field][0];
  }

  return null;
};



/***/ }),

/***/ "./components/contact-section/contact-form/form-state.js":
/*!***************************************************************!*\
  !*** ./components/contact-section/contact-form/form-state.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/set */ "lodash/set");
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/has */ "lodash/has");
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_3__);





const enhancedReducer = (state, updateArg) => {
  // check if the type of update argument is a callback function
  if (updateArg.constructor === Function) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, updateArg(state));
  } // if the type of update argument is an object


  if (updateArg.constructor === Object) {
    // does the update object have _path and _value as it's keys
    // if yes then use them to update deep object values
    if (lodash_has__WEBPACK_IMPORTED_MODULE_3___default()(updateArg, "_path") && lodash_has__WEBPACK_IMPORTED_MODULE_3___default()(updateArg, "_value")) {
      const {
        _path,
        _value
      } = updateArg;
      return produce(state, draft => {
        lodash_set__WEBPACK_IMPORTED_MODULE_2___default()(draft, _path, _value);
      });
    } else {
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, updateArg);
    }
  }
};

const useFormState = initialState => {
  const [state, updateState] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useReducer(enhancedReducer, initialState);
  const updateForm = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(({
    target: {
      value,
      name,
      type
    }
  }) => {
    const updatePath = name.split("."); // if the input is a checkbox then use callback function to update
    // the toggle state based on previous state

    if (type === "checkbox") {
      updateState(prevState => ({
        [name]: !prevState[name]
      }));
      return;
    } // if we have to update the root level nodes in the form


    if (updatePath.length === 1) {
      const [key] = updatePath;
      updateState({
        [key]: value
      });
    } // if we have to update nested nodes in the form object
    // use _path and _value to update them.


    if (updatePath.length === 2) {
      updateState({
        _path: updatePath,
        _value: value
      });
    }
  }, []);
  return [state, updateForm];
};

/* harmony default export */ __webpack_exports__["default"] = (useFormState);

/***/ }),

/***/ "./components/contact-section/contact-form/form/index.js":
/*!***************************************************************!*\
  !*** ./components/contact-section/contact-form/form/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var deep_diff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! deep-diff */ "deep-diff");
/* harmony import */ var deep_diff__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(deep_diff__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/alexiastandish/Desktop/Freelance Clients/NewportMed/newportmed/components/contact-section/contact-form/form/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




class Form extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "validateAllFields", (schema, fields) => {
      try {
        schema.validateSync(fields, {
          abortEarly: false
        });
        return null;
      } catch (err) {
        const errors = err.inner.reduce((acc, currentError) => {
          if (acc[currentError.params.path]) {
            acc[currentError.params.path].push(currentError.message);
            return acc;
          } else {
            acc[currentError.params.path] = [currentError.message];
            return acc;
          }
        }, {});
        return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(errors).length > 0 ? errors : null;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "validatePrevFields", (schema, fields) => {
      try {
        schema.validateSync(fields, {
          abortEarly: false
        });
        return null;
      } catch (err) {
        const errors = err.inner.reduce((acc, currentError) => {
          if (!this.state.prevErrors[currentError.params.path]) {
            return acc;
          }

          if (acc[currentError.params.path]) {
            acc[currentError.params.path].push(currentError.message);
            return acc;
          } else {
            acc[currentError.params.path] = [currentError.message];
            return acc;
          }
        }, {});
        return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(errors).length > 0 ? errors : null;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "submitFormWithValidation", () => {
      const errors = this.validateAllFields(this.props.validationSchema, this.props.fields);

      if (!errors) {
        return this.props.submitForm();
      }

      this.setState({
        errors,
        prevErrors: errors
      });
    });

    this.state = {
      errors: null,
      prevErrors: {}
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const errors = this.validatePrevFields(this.props.validationSchema, this.props.fields);
    const errDiff = deep_diff__WEBPACK_IMPORTED_MODULE_3___default()(errors, this.state.errors);

    if (errDiff) {
      this.setState({
        errors
      });
    }
  }

  render() {
    const {
      className
    } = this.props;
    return __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('form', className && className),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, this.props.children({
      errors: this.state.errors,
      submitFormWithValidation: this.submitFormWithValidation
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./components/contact-section/contact-form/index.js":
/*!**********************************************************!*\
  !*** ./components/contact-section/contact-form/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/common */ "./styles/common/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/contact-section/contact-form/styles.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form */ "./components/contact-section/contact-form/form/index.js");
/* harmony import */ var _validationSchema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validationSchema */ "./components/contact-section/contact-form/validationSchema.js");
/* harmony import */ var _form_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-state */ "./components/contact-section/contact-form/form-state.js");
/* harmony import */ var _input_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input-wrapper */ "./components/contact-section/contact-form/input-wrapper.js");
/* harmony import */ var _error_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error-text */ "./components/contact-section/contact-form/error-text.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/alexiastandish/Desktop/Freelance Clients/NewportMed/newportmed/components/contact-section/contact-form/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const ContactForm = () => {
  const initialState = {
    fname: "",
    lname: "",
    email: "",
    message: ""
  };
  const [fields, updateForm] = Object(_form_state__WEBPACK_IMPORTED_MODULE_5__["default"])(initialState);

  const handleFormSubmit = () => {
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("https://formcarry.com/s/5YodmAHlQNY", fields, {
      headers: {
        Accept: "application/json"
      }
    }).then(res => console.log("res", res)).catch(error => console.log("error", error));
  };

  return __jsx(_form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fields: fields,
    validationSchema: _validationSchema__WEBPACK_IMPORTED_MODULE_4__["default"],
    submitForm: handleFormSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, ({
    errors,
    submitFormWithValidation
  }) => {
    return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["StyledForm"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: undefined
    }, __jsx(_input_wrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "First Name",
      error: Object(_error_text__WEBPACK_IMPORTED_MODULE_7__["getFormErrorText"])(errors, "fname"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: undefined
    }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      type: "text",
      name: "fname",
      value: fields.fname || "",
      error: errors && errors["fname"],
      onChange: updateForm,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: undefined
    })), __jsx(_input_wrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Last Name",
      error: Object(_error_text__WEBPACK_IMPORTED_MODULE_7__["getFormErrorText"])(errors, "lname"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: undefined
    }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      type: "text",
      name: "lname" // placeholder="Last name"
      ,
      error: errors && errors["lname"],
      value: fields.lname || "",
      onChange: updateForm,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: undefined
    })), __jsx(_input_wrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Email",
      error: Object(_error_text__WEBPACK_IMPORTED_MODULE_7__["getFormErrorText"])(errors, "email"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: undefined
    }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      type: "email",
      name: "email",
      "aria-describedby": "emailHelp",
      error: errors && errors["email"] // placeholder="Your Email Here"
      ,
      value: fields.email || "",
      onChange: updateForm,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: undefined
    })), __jsx(_input_wrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Message",
      error: Object(_error_text__WEBPACK_IMPORTED_MODULE_7__["getFormErrorText"])(errors, "message"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: undefined
    }, __jsx("textarea", {
      placeholder: "Leave a message...",
      error: errors && errors["message"],
      name: "message",
      rows: "5",
      value: fields.message || "",
      onChange: updateForm,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: undefined
    })), __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "primary",
      onClick: submitFormWithValidation,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: undefined
    }, "Submit"));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ }),

/***/ "./components/contact-section/contact-form/input-wrapper.js":
/*!******************************************************************!*\
  !*** ./components/contact-section/contact-form/input-wrapper.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/_media */ "./styles/_media.js");
/* harmony import */ var _styles_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/common */ "./styles/common/index.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/_variables */ "./styles/_variables.js");
var _jsxFileName = "/Users/alexiastandish/Desktop/Freelance Clients/NewportMed/newportmed/components/contact-section/contact-form/input-wrapper.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const StyledFormInputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "input-wrapper__StyledFormInputWrapper",
  componentId: "sc-1bqpybd-0"
})(["min-height:80px;width:100%;input{background:#ffffff;}textarea{background:#ffffff;}", " ", ";"], _styles_media__WEBPACK_IMPORTED_MODULE_2__["default"].lg`
  width: 100%;
`, props => props.stretch && `width: 100%`);
const StyledFormChildren = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "input-wrapper__StyledFormChildren",
  componentId: "sc-1bqpybd-1"
})(["position:relative;width:100%;display:flex;", ""], props => props.stretch && `width: 100%`);

class FormWrapper extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      title,
      description,
      component,
      error,
      stretch
    } = this.props;
    return __jsx(StyledFormInputWrapper, {
      stretch: stretch,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, component ? component : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !error ? __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_3__["Body"], {
      style: {
        marginBottom: 3,
        color: error ? _styles_variables__WEBPACK_IMPORTED_MODULE_4__["colors"].red : _styles_variables__WEBPACK_IMPORTED_MODULE_4__["colors"].black
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, title) : __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_3__["Body"], {
      style: {
        marginBottom: 3,
        color: error ? _styles_variables__WEBPACK_IMPORTED_MODULE_4__["colors"].red : _styles_variables__WEBPACK_IMPORTED_MODULE_4__["colors"].black
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, error), __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_3__["Body"], {
      style: {
        marginTop: -3,
        fontSize: 15,
        fontWeight: 300
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, description))), __jsx(StyledFormChildren, {
      error: !!error,
      stretch: stretch,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, this.props.children));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FormWrapper);

/***/ }),

/***/ "./components/contact-section/contact-form/styles.js":
/*!***********************************************************!*\
  !*** ./components/contact-section/contact-form/styles.js ***!
  \***********************************************************/
/*! exports provided: StyledForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledForm", function() { return StyledForm; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/_variables */ "./styles/_variables.js");


const StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__StyledForm",
  componentId: "sc-6d5aez-0"
})(["display:flex;flex-direction:column;background:white;box-shadow:0px 2px 10px 0px rgba(0,0,0,0.15);border-radius:3px;padding:20px 30px;box-sizing:border-box;justify-items:flex-start;align-items:flex-start;textarea{border-radius:3px;", ";padding:10px 20px;letter-spacing:0.25px;width:100%;font-family:Work Sans;&:hover{cursor:pointer;}&::placeholder{color:", ";}&:focus{outline:none;}font-size:18px;font-weight:400;transition:border 200ms ease;}button{margin-top:20px;}"], props => props.error ? `border: 1px solid ${_styles_variables__WEBPACK_IMPORTED_MODULE_1__["colors"].red}` : `border: 1px solid ${_styles_variables__WEBPACK_IMPORTED_MODULE_1__["colors"].gray}`, _styles_variables__WEBPACK_IMPORTED_MODULE_1__["colors"].gray);


/***/ }),

/***/ "./components/contact-section/contact-form/validationSchema.js":
/*!*********************************************************************!*\
  !*** ./components/contact-section/contact-form/validationSchema.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

const formValidationSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  fname: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Enter your first name'),
  lname: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Enter your last name'),
  email: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Enter a valid email address').email('Email address is not valid'),
  message: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required('Enter your company')
});
/* harmony default export */ __webpack_exports__["default"] = (formValidationSchema);

/***/ }),

/***/ "./components/contact-section/index.js":
/*!*********************************************!*\
  !*** ./components/contact-section/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme/index.js");
/* harmony import */ var _render_props_scroll_into_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render-props/scroll-into-view */ "./components/render-props/scroll-into-view/index.js");
/* harmony import */ var _styles_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/common */ "./styles/common/index.js");
/* harmony import */ var _helpers_triggerAnimations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/triggerAnimations */ "./helpers/triggerAnimations.js");
/* harmony import */ var _contact_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-form */ "./components/contact-section/contact-form/index.js");
var _jsxFileName = "/Users/alexiastandish/Desktop/Freelance Clients/NewportMed/newportmed/components/contact-section/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const ContactSection = props => {
  const {
    0: state,
    1: setAnimation
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(_styles_theme__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: Object(_styles_theme__WEBPACK_IMPORTED_MODULE_1__["lightGradient"])(_styles_theme__WEBPACK_IMPORTED_MODULE_1__["base"]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx(_render_props_scroll_into_view__WEBPACK_IMPORTED_MODULE_2__["default"], {
    returnFunc: setAnimation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_3__["Hero"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_3__["Column"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(_helpers_triggerAnimations__WEBPACK_IMPORTED_MODULE_4__["EaseInLeft"], {
    triggerEaseIn: state,
    target: "contact-us",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Contact Us"), __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_3__["Subheader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Send a message! Let's chat..."))), __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_3__["Column"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx(_helpers_triggerAnimations__WEBPACK_IMPORTED_MODULE_4__["EaseInRight"], {
    triggerEaseIn: state,
    target: "contact-form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx(_contact_form__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactSection);

/***/ }),

/***/ "./components/footer/index.js":
/*!************************************!*\
  !*** ./components/footer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme/index.js");
/* harmony import */ var _styles_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/common */ "./styles/common/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/footer/styles.js");
var _jsxFileName = "/Users/alexiastandish/Desktop/Freelance Clients/NewportMed/newportmed/components/footer/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Footer = props => {
  return __jsx(_styles_theme__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: Object(_styles_theme__WEBPACK_IMPORTED_MODULE_1__["invert"])(_styles_theme__WEBPACK_IMPORTED_MODULE_1__["base"]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["StyledFooterWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["StyledFooterContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["StyledFooterColumnLeft"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["StyledFooterLogo"], {
    src: "/images/newportmed-logos/b+w-logo.svg",
    alt: "newportmed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Body"], {
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "(800) 865-2490"), __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Body"], {
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Josh@newportmed.com")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["StyledFooterColumnRight"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Column"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["StyledLocationHeader"], {
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "California"), __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Body"], {
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "NewportMed", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), "625 The City Drive, Suite 200", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }), "Orange, CA 92646")), __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Column"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["StyledLocationHeader"], {
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "Texas"), __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Body"], {
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "NewportMed", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }), "6735 Salt Cedar Way, Suite 120", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }), "Frisco, Tx 75034"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/footer/styles.js":
/*!*************************************!*\
  !*** ./components/footer/styles.js ***!
  \*************************************/
/*! exports provided: StyledFooterWrapper, StyledFooterContainer, StyledFooterLogo, StyledLocationHeader, StyledFooterColumnRight, StyledFooterColumnLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledFooterWrapper", function() { return StyledFooterWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledFooterContainer", function() { return StyledFooterContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledFooterLogo", function() { return StyledFooterLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLocationHeader", function() { return StyledLocationHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledFooterColumnRight", function() { return StyledFooterColumnRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledFooterColumnLeft", function() { return StyledFooterColumnLeft; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/common */ "./styles/common/index.js");
/* harmony import */ var _styles_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/_media */ "./styles/_media.js");



const StyledFooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_styles_common__WEBPACK_IMPORTED_MODULE_1__["Hero"]).withConfig({
  displayName: "styles__StyledFooterWrapper",
  componentId: "m599ba-0"
})(["min-height:1px;"]);
const StyledFooterContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_styles_common__WEBPACK_IMPORTED_MODULE_1__["Container"]).withConfig({
  displayName: "styles__StyledFooterContainer",
  componentId: "m599ba-1"
})(["padding-top:60px;padding-bottom:60px;"]);
const StyledFooterLogo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "styles__StyledFooterLogo",
  componentId: "m599ba-2"
})(["width:200px;margin-bottom:20px;"]);
const StyledLocationHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_styles_common__WEBPACK_IMPORTED_MODULE_1__["Body"]).withConfig({
  displayName: "styles__StyledLocationHeader",
  componentId: "m599ba-3"
})(["text-transform:uppercase;letter-spacing:1px;", ""], _styles_media__WEBPACK_IMPORTED_MODULE_2__["default"].md`
  margin-top: 25px;
  `);
const StyledFooterColumnLeft = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_styles_common__WEBPACK_IMPORTED_MODULE_1__["Column"]).withConfig({
  displayName: "styles__StyledFooterColumnLeft",
  componentId: "m599ba-4"
})(["max-width:40%;flex:0 0 40%;", " ", ""], _styles_media__WEBPACK_IMPORTED_MODULE_2__["default"].md`
  max-width: 40%;
  flex: 0 0 40%;
  `, _styles_media__WEBPACK_IMPORTED_MODULE_2__["default"].sm`
  max-width: 100%;
  flex: 0 0 100%;
  `);
const StyledFooterColumnRight = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_styles_common__WEBPACK_IMPORTED_MODULE_1__["Column"]).withConfig({
  displayName: "styles__StyledFooterColumnRight",
  componentId: "m599ba-5"
})(["max-width:60%;flex:0 0 60%;", " ", ""], _styles_media__WEBPACK_IMPORTED_MODULE_2__["default"].md`
  max-width: 60%;
  flex: 0 0 60%;
  `, _styles_media__WEBPACK_IMPORTED_MODULE_2__["default"].sm`
  margin-top: 30px;
  max-width: 100%;
  flex: 0 0 100%;
  `);


/***/ }),

/***/ "./components/head/index.js":
/*!**********************************!*\
  !*** ./components/head/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/alexiastandish/Desktop/Freelance Clients/NewportMed/newportmed/components/head/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Head = props => {
  const {
    page,
    title,
    description,
    image
  } = props;
  let _title = title;
  let _description = description;
  let _image = image;

  if (page) {
    _title = page.metaTitle;
    _description = page.metaDescription;
    _image = page.metaImage ? page.metaImage : null;
  }

  return __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, title), __jsx("meta", {
    name: "health-med-hospital-surgeon",
    content: "yes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), __jsx("meta", {
    name: "description",
    content: _description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), __jsx("meta", {
    property: "og:title",
    content: _title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), __jsx("meta", {
    property: "og:locale",
    content: "en_US",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), __jsx("meta", {
    property: "og:description",
    content: _description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), __jsx("meta", {
    property: "og:url",
    content: false ? undefined : 'missing',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), __jsx("meta", {
    name: "twitter:title",
    content: _title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), __jsx("meta", {
    name: "twitter:description",
    content: _description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./components/header/desktop-nav/index.js":
/*!************************************************!*\
  !*** ./components/header/desktop-nav/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/header/desktop-nav/styles.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/common */ "./styles/common/index.js");
var _jsxFileName = "/Users/alexiastandish/Desktop/Freelance Clients/NewportMed/newportmed/components/header/desktop-nav/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 //import './.css';

const DesktopNav = ({
  stickyNav,
  router,
  navLight
}) => {
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["StyledDesktopNav"], {
    stickyNav: stickyNav || navLight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["StyledNewportMedLogo"], {
    src: "/images/logos/npm-logo.png",
    alt: "newport-med",
    onClick: () => router.push("/"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["StyledNavLinksWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_3__["ATag"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "About Us")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/process",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_3__["ATag"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Our Process")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_3__["ATag"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "Our Services")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/testimonials",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_3__["ATag"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "Testimonials"))));
};

/* harmony default export */ __webpack_exports__["default"] = (DesktopNav);

/***/ }),

/***/ "./components/header/desktop-nav/styles.js":
/*!*************************************************!*\
  !*** ./components/header/desktop-nav/styles.js ***!
  \*************************************************/
/*! exports provided: StyledDesktopNav, StyledNewportMedLogo, StyledNavLinksWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledDesktopNav", function() { return StyledDesktopNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledNewportMedLogo", function() { return StyledNewportMedLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledNavLinksWrapper", function() { return StyledNavLinksWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/_media */ "./styles/_media.js");
/* harmony import */ var _styles_sizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/_sizes */ "./styles/_sizes.js");



const StyledDesktopNav = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__StyledDesktopNav",
  componentId: "sc-1rersqe-0"
})(["font-family:Work Sans;display:flex;justify-content:space-between;align-items:center;width:100%;z-index:10;padding-left:3em;padding-right:3em;padding-top:", ";box-sizing:border-box;margin:0 auto;", ";", ";transition:400ms ease;"], props => props.stickyNav ? `0px` : `10px`, _styles_media__WEBPACK_IMPORTED_MODULE_1__["default"].lg`
  padding-left: 1.5em;
  padding-right: 1.5em;
  `, _styles_media__WEBPACK_IMPORTED_MODULE_1__["default"].md`
  display: none;
  `);
const StyledNewportMedLogo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "styles__StyledNewportMedLogo",
  componentId: "sc-1rersqe-1"
})(["width:200px;"]);
const StyledNavLinksWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__StyledNavLinksWrapper",
  componentId: "sc-1rersqe-2"
})(["display:flex;margin-right:-15px;margin-left:-15px;"]);


/***/ }),

/***/ "./components/header/index.js":
/*!************************************!*\
  !*** ./components/header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-waypoint */ "react-waypoint");
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_waypoint__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/header/styles.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _desktop_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./desktop-nav */ "./components/header/desktop-nav/index.js");
/* harmony import */ var _mobile_nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mobile-nav */ "./components/header/mobile-nav/index.js");

var _jsxFileName = "/Users/alexiastandish/Desktop/Freelance Clients/NewportMed/newportmed/components/header/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const Header = (_ref) => {
  let {
    menuOpen,
    handleMenuToggle,
    navLight,
    router,
    user
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["menuOpen", "handleMenuToggle", "navLight", "router", "user"]);

  const {
    0: stickyNav,
    1: setStickyNav
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const getPosition = ({
    currentPosition,
    previousPosition
  }) => {
    if (previousPosition === "above") {
      return setStickyNav(false);
    }

    if (previousPosition === "inside" || currentPosition === "above") {
      return setStickyNav(true);
    }

    return;
  };

  return __jsx(react_waypoint__WEBPACK_IMPORTED_MODULE_2__["Waypoint"], {
    onPositionChange: getPosition,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      position: "relative",
      zIndex: 5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["StyledNavWrapper"], {
    menuOpen: menuOpen,
    stickyNav: stickyNav || navLight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx(_desktop_nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    stickyNav: stickyNav,
    navLight: navLight,
    router: router,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), __jsx(_mobile_nav__WEBPACK_IMPORTED_MODULE_6__["default"], {
    menuOpen: menuOpen,
    handleMenuToggle: handleMenuToggle,
    stickyNav: stickyNav,
    navLight: navLight,
    router: router,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Header));

/***/ }),

/***/ "./components/header/mobile-nav/hamburger-menu/index.js":
/*!**************************************************************!*\
  !*** ./components/header/mobile-nav/hamburger-menu/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/header/mobile-nav/hamburger-menu/styles.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../styles/_variables */ "./styles/_variables.js");

var _jsxFileName = "/Users/alexiastandish/Desktop/Freelance Clients/NewportMed/newportmed/components/header/mobile-nav/hamburger-menu/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const HamburgerMenu = props => {
  const styles = {
    container: {
      height: "32px",
      width: "32px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      padding: "4px",
      zIndex: "200"
    },
    line: {
      height: "2px",
      width: "20px",
      background: _styles_variables__WEBPACK_IMPORTED_MODULE_3__["colors"].blue,
      transition: "all 200ms ease"
    },
    lineTop: {
      transform: props.menuOpen ? "rotate(45deg)" : "none",
      transformOrigin: "top left",
      marginBottom: "5px"
    },
    lineMiddle: {
      opacity: props.menuOpen ? 0 : 1,
      transform: props.menuOpen ? "translateX(-16px)" : "none"
    },
    lineBottom: {
      transform: props.menuOpen ? "translateX(-1px) rotate(-45deg)" : "none",
      transformOrigin: "top left",
      marginTop: "5px"
    }
  };
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["StyledHamburgerButton"], {
    style: styles.container,
    onClick: () => props.onClick(!props.menuOpen),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.line, styles.lineTop),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }), __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.line, styles.lineMiddle),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }), __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.line, styles.lineBottom),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HamburgerMenu);

/***/ }),

/***/ "./components/header/mobile-nav/hamburger-menu/styles.js":
/*!***************************************************************!*\
  !*** ./components/header/mobile-nav/hamburger-menu/styles.js ***!
  \***************************************************************/
/*! exports provided: StyledHamburgerButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledHamburgerButton", function() { return StyledHamburgerButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledHamburgerButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__StyledHamburgerButton",
  componentId: "sc-1vyn5y5-0"
})(["&:hover{cursor:pointer;}"]);


/***/ }),

/***/ "./components/header/mobile-nav/index.js":
/*!***********************************************!*\
  !*** ./components/header/mobile-nav/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/header/mobile-nav/styles.js");
/* harmony import */ var _hamburger_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hamburger-menu */ "./components/header/mobile-nav/hamburger-menu/index.js");
/* harmony import */ var _open_mobile_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./open-mobile-menu */ "./components/header/mobile-nav/open-mobile-menu/index.js");
var _jsxFileName = "/Users/alexiastandish/Desktop/Freelance Clients/NewportMed/newportmed/components/header/mobile-nav/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const MobileNav = ({
  menuOpen,
  handleMenuToggle,
  stickyNav,
  router
}) => {
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["StyledMobileNav"], {
    menuOpen: menuOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["StyledMobileNewportMedLogo"], {
    src: "/images/logos/npm-logo.png",
    alt: "newport-med",
    onClick: () => router.push("/"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx(_hamburger_menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    menuOpen: menuOpen,
    onClick: handleMenuToggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), __jsx(_open_mobile_menu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    router: router,
    menuOpen: menuOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MobileNav);

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/header/mobile-nav/open-mobile-menu/styles.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/alexiastandish/Desktop/Freelance Clients/NewportMed/newportmed/components/header/mobile-nav/open-mobile-menu/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




const OpenMobileMenu = (_ref) => {
  let {
    menuOpen,
    handleMenuToggle
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["menuOpen", "handleMenuToggle"]);

  const navLinks = [{
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
    __self: undefined
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["StyledMobileLinkList"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, navLinks.map((item, index) => {
    return __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["StyledMobileLink"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: item.link
    }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: undefined
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: item.slug,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: undefined
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: undefined
    }, item.link)));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (OpenMobileMenu);

/***/ }),

/***/ "./components/header/mobile-nav/open-mobile-menu/styles.js":
/*!*****************************************************************!*\
  !*** ./components/header/mobile-nav/open-mobile-menu/styles.js ***!
  \*****************************************************************/
/*! exports provided: StyledOpenMobileMenu, StyledMobileLinkList, StyledMobileLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledOpenMobileMenu", function() { return StyledOpenMobileMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledMobileLinkList", function() { return StyledMobileLinkList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledMobileLink", function() { return StyledMobileLink; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../styles/_media */ "./styles/_media.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../styles/_variables */ "./styles/_variables.js");



const StyledOpenMobileMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__StyledOpenMobileMenu",
  componentId: "sc-1w38run-0"
})(["visibility:", ";", ";", ""], props => props.menuOpen ? "visible" : "hidden", _styles_media__WEBPACK_IMPORTED_MODULE_1__["default"].md`
  visibility: ${props => props.menuOpen ? "visible" : "hidden"};
  opacity: ${props => props.menuOpen ? 1 : 0};
  transition-delay: ${props => props.menuOpen && "0.25s"};
  margin: 0px;
  padding: 40px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  color: ${_styles_variables__WEBPACK_IMPORTED_MODULE_2__["colors"].blue};
  font-size: 18px;
  line-height: 36px;
  box-sizing: border-box;
  z-index: 8;

  button {
    width: 100%;
    margin-top: 30px;
  }
  height: 0px;
  transition: all 400ms ease-in;

  ${props => props.menuOpen && `height: 50vh; background: white;   transition: all 400ms ease-in; box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.1);`};
  `, _styles_media__WEBPACK_IMPORTED_MODULE_1__["default"].sm`
    ${props => props.menuOpen && `height: 100vh; background: white; transition: all 400ms ease-in; box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.1);`}
  `);
const StyledMobileLinkList = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "styles__StyledMobileLinkList",
  componentId: "sc-1w38run-1"
})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;margin-top:80px;transition:all 400ms ease-in;"]);
const StyledMobileLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "styles__StyledMobileLink",
  componentId: "sc-1w38run-2"
})(["font-family:Work Sans;border-bottom:1.2px solid ", ";width:100%;padding:10px 0px;box-sizing:border-box;transition:all 400ms ease-in;height:auto;&:hover{cursor:pointer;}a{text-decoration:none;color:", ";}"], _styles_variables__WEBPACK_IMPORTED_MODULE_2__["colors"].gray, _styles_variables__WEBPACK_IMPORTED_MODULE_2__["colors"].blue);


/***/ }),

/***/ "./components/header/mobile-nav/styles.js":
/*!************************************************!*\
  !*** ./components/header/mobile-nav/styles.js ***!
  \************************************************/
/*! exports provided: StyledMobileNav, StyledMobileNewportMedLogo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledMobileNav", function() { return StyledMobileNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledMobileNewportMedLogo", function() { return StyledMobileNewportMedLogo; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/_media */ "./styles/_media.js");


const StyledMobileNav = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__StyledMobileNav",
  componentId: "sc-1etg11k-0"
})(["display:none;", ""], _styles_media__WEBPACK_IMPORTED_MODULE_1__["default"].md`
  padding-left: 1.5em;
  padding-right: 1.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  `);
const StyledMobileNewportMedLogo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "styles__StyledMobileNewportMedLogo",
  componentId: "sc-1etg11k-1"
})(["width:20%;height:100%;", ""], _styles_media__WEBPACK_IMPORTED_MODULE_1__["default"].smxs`
  height: 25px;
  width: auto;
  `);


/***/ }),

/***/ "./components/header/styles.js":
/*!*************************************!*\
  !*** ./components/header/styles.js ***!
  \*************************************/
/*! exports provided: StyledNavWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledNavWrapper", function() { return StyledNavWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/_media */ "./styles/_media.js");


const StyledNavWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__StyledNavWrapper",
  componentId: "sc-1p94yhq-0"
})(["width:100%;transition:all 0.3s ease-in;box-sizing:border-box;position:fixed;padding-top:25px;padding-bottom:25px;z-index:1;", ";"], props => props.stickyNav && `box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.1); padding-top: 16px;
    padding-bottom: 16px; background: white;`);


/***/ }),

/***/ "./components/layouts/index.js":
/*!*************************************!*\
  !*** ./components/layouts/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/layouts/styles.js");
/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../head */ "./components/head/index.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header */ "./components/header/index.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer */ "./components/footer/index.js");
/* harmony import */ var _contact_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contact-section */ "./components/contact-section/index.js");


var _jsxFileName = "/Users/alexiastandish/Desktop/Freelance Clients/NewportMed/newportmed/components/layouts/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







const Layout = props => {
  const {
    navLight,
    children
  } = props;
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    menuOpen: false
  });

  const handleMenuToggle = () => {
    setState(prevState => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prevState, {
      menuOpen: !prevState.menuOpen
    }));
  };

  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["StyledLayoutWrapper"], {
    menuOpen: state.menuOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(_head__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  })), __jsx(_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    handleMenuToggle: handleMenuToggle,
    menuOpen: state.menuOpen,
    navLight: navLight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["StyledBodyWrapper"], {
    menuOpen: state.menuOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, children), __jsx(_contact_section__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), __jsx(_footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/layouts/styles.js":
/*!**************************************!*\
  !*** ./components/layouts/styles.js ***!
  \**************************************/
/*! exports provided: StyledBodyWrapper, StyledLayoutWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledBodyWrapper", function() { return StyledBodyWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLayoutWrapper", function() { return StyledLayoutWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/_media */ "./styles/_media.js");


const StyledBodyWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__StyledBodyWrapper",
  componentId: "sc-1hwy3kr-0"
})(["", ";"], _styles_media__WEBPACK_IMPORTED_MODULE_1__["default"].md`
  opacity: ${props => props.menuOpen ? '.2' : '1'};
  transition: opacity 400ms ease-in;
  `);
const StyledLayoutWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__StyledLayoutWrapper",
  componentId: "sc-1hwy3kr-1"
})(["", ";"], _styles_media__WEBPACK_IMPORTED_MODULE_1__["default"].md`
  ${props => props.menuOpen && `height: 100vh; overflow: hidden`};
  `);


/***/ }),

/***/ "./components/render-props/scroll-into-view/index.js":
/*!***********************************************************!*\
  !*** ./components/render-props/scroll-into-view/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-waypoint */ "react-waypoint");
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_waypoint__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_onEnterPosition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/onEnterPosition */ "./helpers/onEnterPosition.js");
var _jsxFileName = "/Users/alexiastandish/Desktop/Freelance Clients/NewportMed/newportmed/components/render-props/scroll-into-view/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ScrollIntoView = ({
  children,
  returnFunc
}) => {
  const positionEntered = ({
    currentPosition,
    previousPosition
  }) => {
    return Object(_helpers_onEnterPosition__WEBPACK_IMPORTED_MODULE_2__["onEnterPosition"])(currentPosition, previousPosition, returnFunc(true));
  };

  return __jsx(react_waypoint__WEBPACK_IMPORTED_MODULE_1__["Waypoint"], {
    onEnter: positionEntered,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (ScrollIntoView);

/***/ }),

/***/ "./components/services/cloud-based-services/index.js":
/*!***********************************************************!*\
  !*** ./components/services/cloud-based-services/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/theme */ "./styles/theme/index.js");
/* harmony import */ var _styles_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/common */ "./styles/common/index.js");
var _jsxFileName = "/Users/alexiastandish/Desktop/Freelance Clients/NewportMed/newportmed/components/services/cloud-based-services/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 //import './.css';

const CloudBasedServices = props => {
  return __jsx(_styles_theme__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Hero"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "CloudBasedServices"));
};

/* harmony default export */ __webpack_exports__["default"] = (CloudBasedServices);

/***/ }),

/***/ "./components/services/practice-advocates/index.js":
/*!*********************************************************!*\
  !*** ./components/services/practice-advocates/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/theme */ "./styles/theme/index.js");
/* harmony import */ var _styles_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/common */ "./styles/common/index.js");
var _jsxFileName = "/Users/alexiastandish/Desktop/Freelance Clients/NewportMed/newportmed/components/services/practice-advocates/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 //import './.css';

const PracticeAdvocates = props => {
  return __jsx(_styles_theme__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Hero"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "PracticeAdvocates"));
};

/* harmony default export */ __webpack_exports__["default"] = (PracticeAdvocates);

/***/ }),

/***/ "./components/services/revenue-cycle-management/index.js":
/*!***************************************************************!*\
  !*** ./components/services/revenue-cycle-management/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/theme */ "./styles/theme/index.js");
/* harmony import */ var _styles_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/common */ "./styles/common/index.js");
var _jsxFileName = "/Users/alexiastandish/Desktop/Freelance Clients/NewportMed/newportmed/components/services/revenue-cycle-management/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 //import './.css';

const RevenueCycleManagement = props => {
  return __jsx(_styles_theme__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Hero"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "RevenueCycleManagement"));
};

/* harmony default export */ __webpack_exports__["default"] = (RevenueCycleManagement);

/***/ }),

/***/ "./components/services/solutions-integration/index.js":
/*!************************************************************!*\
  !*** ./components/services/solutions-integration/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/theme */ "./styles/theme/index.js");
/* harmony import */ var _styles_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/common */ "./styles/common/index.js");
var _jsxFileName = "/Users/alexiastandish/Desktop/Freelance Clients/NewportMed/newportmed/components/services/solutions-integration/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 //import './.css';

const SolutionsIntegration = props => {
  return __jsx(_styles_theme__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_2__["Hero"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "SolutionsIntegration"));
};

/* harmony default export */ __webpack_exports__["default"] = (SolutionsIntegration);

/***/ }),

/***/ "./components/services/styles.js":
/*!***************************************!*\
  !*** ./components/services/styles.js ***!
  \***************************************/
/*! exports provided: StyledServicesHero, StyledServiceBoxes, StyledServiceBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledServicesHero", function() { return StyledServicesHero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledServiceBoxes", function() { return StyledServiceBoxes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledServiceBox", function() { return StyledServiceBox; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/common */ "./styles/common/index.js");
/* harmony import */ var _styles_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/_media */ "./styles/_media.js");



const StyledServicesHero = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_styles_common__WEBPACK_IMPORTED_MODULE_1__["Hero"]).withConfig({
  displayName: "styles__StyledServicesHero",
  componentId: "sc-1udrnwe-0"
})(["background-image:url(\"/images/services/services-hero-bg.jpg\");background-size:100%;background-repeat:no-repeat;"]);
const StyledServiceBoxes = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__StyledServiceBoxes",
  componentId: "sc-1udrnwe-1"
})(["display:flex;flex-direction:row;max-width:900px;margin:0 auto;margin-top:30px;", ""], _styles_media__WEBPACK_IMPORTED_MODULE_2__["default"].sm`
    flex-wrap: wrap;
    justify-content: space-between;
  `);
const StyledServiceBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_styles_common__WEBPACK_IMPORTED_MODULE_1__["Box"]).withConfig({
  displayName: "styles__StyledServiceBox",
  componentId: "sc-1udrnwe-2"
})(["display:flex;flex-direction:column;justify-content:flex-start;box-sizing:border-box;margin:10px;align-items:center;img{width:75px;margin-top:25px;}a{text-decoration:none;}", " ", ""], _styles_media__WEBPACK_IMPORTED_MODULE_2__["default"].sm`
  width: 48%;
  margin: 0px;
  margin-bottom: 20px;
  `, _styles_media__WEBPACK_IMPORTED_MODULE_2__["default"].xs`
  padding: 20px;
  img {
    margin-top: 0px;
  }
  ${_styles_common__WEBPACK_IMPORTED_MODULE_1__["Subheader"]}{
    display: none;
  }
  `);


/***/ }),

/***/ "./content/services-page.json":
/*!************************************!*\
  !*** ./content/services-page.json ***!
  \************************************/
/*! exports provided: hero, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"hero\":{\"header\":\"Services that are second-to-none.\",\"subheader\":\"Learn more about our services that make your life easier.\",\"services\":[{\"service\":\"Revenue Cycle Management (RCM)\",\"link\":\"#revenue-cycle-management\",\"icon\":\"/images/icons/money.svg\"},{\"service\":\"Cloud based services\",\"link\":\"#cloud-based-services\",\"icon\":\"/images/icons/cloud.svg\"},{\"service\":\"Solutions integration\",\"link\":\"#solutions-integration\",\"icon\":\"/images/icons/gear.svg\"},{\"service\":\"Practice advocates\",\"link\":\"#practice-advocates\",\"icon\":\"/images/icons/medical.svg\"}]}}");

/***/ }),

/***/ "./helpers/onEnterPosition.js":
/*!************************************!*\
  !*** ./helpers/onEnterPosition.js ***!
  \************************************/
/*! exports provided: onEnterPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onEnterPosition", function() { return onEnterPosition; });
const onEnterPosition = ({
  currentPosition,
  previousPosition,
  returnFunction
}) => {
  if (currentPosition === 'inside' && previousPosition !== 'inside') {
    return returnFunction;
  } else {
    return;
  }
};



/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animejs */ "animejs");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/alexiastandish/Desktop/Freelance Clients/NewportMed/newportmed/helpers/triggerAnimations.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const EaseInLeft = ({
  target,
  children,
  triggerEaseIn,
  style
}) => {
  triggerEaseIn && Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    animejs__WEBPACK_IMPORTED_MODULE_2___default()({
      targets: `.${target}`,
      translateX: [-100, 0],
      easing: "easeOutQuad",
      duration: 700,
      loop: false,
      autoplay: true,
      opacity: 1,
      delay: animejs__WEBPACK_IMPORTED_MODULE_2___default.a.stagger(150, {
        start: 600
      })
    });
  }, [target]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children.length > 1 ? children.map(child => {
    return __jsx(StyledEaseInWrapper, {
      style: style,
      key: child.props.children,
      className: target,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: undefined
    }, child);
  }) : __jsx(StyledEaseInWrapper, {
    className: target,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, children));
};

const EaseInRight = ({
  target,
  children,
  triggerEaseIn,
  style
}) => {
  triggerEaseIn && Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    animejs__WEBPACK_IMPORTED_MODULE_2___default()({
      targets: `.${target}`,
      translateX: [150, 0],
      easing: "easeOutQuad",
      duration: 700,
      loop: false,
      autoplay: true,
      opacity: 1,
      delay: animejs__WEBPACK_IMPORTED_MODULE_2___default.a.stagger(150, {
        start: 600
      })
    });
  }, [target]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children.length > 1 ? children.map(child => {
    return __jsx(StyledEaseInWrapper, {
      style: style,
      key: child.props.children || child.props.name,
      className: target,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: undefined
    }, child);
  }) : __jsx(StyledEaseInWrapper, {
    className: target,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, children));
};

const EaseInBottom = ({
  beginAnimation,
  children,
  triggerEaseIn,
  style,
  className
}) => {
  const triggerAnimation = () => {
    triggerEaseIn && animejs__WEBPACK_IMPORTED_MODULE_2___default()({
      targets: ".ease-in-bottom",
      translateY: [100, 0],
      easing: "easeOutQuad",
      duration: 700,
      autoplay: false,
      loop: false,
      opacity: [0, 1],
      delay: animejs__WEBPACK_IMPORTED_MODULE_2___default.a.stagger(150, {
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
    __self: undefined
  }, children.length > 1 ? children.map(child => {
    return __jsx(StyledEaseInWrapper, {
      style: style,
      key: child.props.children,
      className: "ease-in-bottom",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: undefined
    }, child);
  }) : __jsx(StyledEaseInWrapper, {
    className: "ease-in-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, children));
};


const StyledEaseInWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "triggerAnimations__StyledEaseInWrapper",
  componentId: "sc-1f74he5-0"
})(["opacity:0;", ""], props => props.style ? props.style : null);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouteWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      props = await fetch(`/_next/data${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/services.js":
/*!***************************!*\
  !*** ./pages/services.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! animejs */ "animejs");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/Users/alexiastandish/Desktop/Freelance Clients/NewportMed/newportmed/pages/services.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














const Services = props => {
  const {
    0: beginAnimation,
    1: triggerAnimationFunc
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const setSection = section => {
    let target = document.getElementById(section);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  beginAnimation && animejs__WEBPACK_IMPORTED_MODULE_12___default()({
    targets: ".ease-in-bottom",
    translateY: [100, 0],
    easing: "easeOutQuad",
    duration: 700,
    autoplay: false,
    loop: false,
    opacity: [0, 1],
    delay: animejs__WEBPACK_IMPORTED_MODULE_12___default.a.stagger(150, {
      start: 600
    })
  }).play();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    triggerAnimationFunc(true);
  }, beginAnimation);
  return __jsx(_components_layouts__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx(_styles_theme__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: _styles_theme__WEBPACK_IMPORTED_MODULE_1__["base"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx(_components_services_styles__WEBPACK_IMPORTED_MODULE_4__["StyledServicesHero"], {
    layout: _styles_theme_layout__WEBPACK_IMPORTED_MODULE_2__["centered"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx(_helpers_triggerAnimations__WEBPACK_IMPORTED_MODULE_11__["EaseInBottom"], {
    triggerEaseIn: beginAnimation,
    className: "services-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, _content_services_page_json__WEBPACK_IMPORTED_MODULE_5__["hero"].header), __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_3__["Subheader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, _content_services_page_json__WEBPACK_IMPORTED_MODULE_5__["hero"].subheader)), __jsx(_components_services_styles__WEBPACK_IMPORTED_MODULE_4__["StyledServiceBoxes"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, _content_services_page_json__WEBPACK_IMPORTED_MODULE_5__["hero"].services.map(service => {
    return __jsx(_components_services_styles__WEBPACK_IMPORTED_MODULE_4__["StyledServiceBox"], {
      className: "ease-in-bottom",
      onClick: () => setSection(service.link),
      key: service.service,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: undefined
    }, __jsx("img", {
      src: service.icon,
      alt: service.service,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: undefined
    }), __jsx(_styles_common__WEBPACK_IMPORTED_MODULE_3__["Subheader"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: undefined
    }, service.service));
  }))))), __jsx("div", {
    id: _content_services_page_json__WEBPACK_IMPORTED_MODULE_5__["hero"].services[0].link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, __jsx(_components_services_revenue_cycle_management__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  })), __jsx("div", {
    id: _content_services_page_json__WEBPACK_IMPORTED_MODULE_5__["hero"].services[1].link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx(_components_services_cloud_based_services__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  })), __jsx("div", {
    id: _content_services_page_json__WEBPACK_IMPORTED_MODULE_5__["hero"].services[2].link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, __jsx(_components_services_solutions_integration__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  })), __jsx("div", {
    id: _content_services_page_json__WEBPACK_IMPORTED_MODULE_5__["hero"].services[3].link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx(_components_services_practice_advocates__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ }),

/***/ "./styles/_media.js":
/*!**************************!*\
  !*** ./styles/_media.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_sizes */ "./styles/_sizes.js");



/* harmony default export */ __webpack_exports__["default"] = (_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_sizes__WEBPACK_IMPORTED_MODULE_2__["sizes"]).reduce((acc, label) => {
  acc[label] = (...args) => Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media (max-width:", "px){", ";}"], _sizes__WEBPACK_IMPORTED_MODULE_2__["sizes"][label], Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(...args));

  return acc;
}, {}));

/***/ }),

/***/ "./styles/_sizes.js":
/*!**************************!*\
  !*** ./styles/_sizes.js ***!
  \**************************/
/*! exports provided: sizes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizes", function() { return sizes; });
const sizes = {
  xl: 1440,
  lg: 1090,
  md: 900,
  sm: 700,
  smxs: 590,
  xs: 480
};

/***/ }),

/***/ "./styles/_variables.js":
/*!******************************!*\
  !*** ./styles/_variables.js ***!
  \******************************/
/*! exports provided: colors, buttonAndLinkHover, boxShadow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonAndLinkHover", function() { return buttonAndLinkHover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxShadow", function() { return boxShadow; });
const colors = {
  blue: '#568dbb',
  red: '#f27451',
  lightblue: '#e0fbfc',
  hightlightBlue: '#c9f8fa',
  black: '#576572',
  gray: '#c1c1c1',
  bgGray: '#f3f3f3'
};
const buttonAndLinkHover = {
  transform: 'translateY(-2px)',
  transition: 'transform .2s;',
  cursor: 'pointer'
};
const boxShadow = {
  boxShadow: '0 0 28px 0 rgba(0, 0, 0, 0.1)'
};


/***/ }),

/***/ "./styles/common/ATag.js":
/*!*******************************!*\
  !*** ./styles/common/ATag.js ***!
  \*******************************/
/*! exports provided: ATag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATag", function() { return ATag; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_variables */ "./styles/_variables.js");


const ATag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "ATag",
  componentId: "sc-1sfci4u-0"
})(["font-size:15px;line-height:28px;color:", ";font-family:Work Sans;margin-top:5px;font-weight:600;margin-bottom:5px;margin-right:15px;margin-left:15px;color:", ";&:hover{", "}", ""], props => props.color ? props.color : '#000000', _variables__WEBPACK_IMPORTED_MODULE_1__["colors"].blue, _variables__WEBPACK_IMPORTED_MODULE_1__["buttonAndLinkHover"], props => props.style ? props.style : null);


/***/ }),

/***/ "./styles/common/Body.js":
/*!*******************************!*\
  !*** ./styles/common/Body.js ***!
  \*******************************/
/*! exports provided: Body */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_variables */ "./styles/_variables.js");


const Body = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "Body",
  componentId: "sc-10xnzfb-0"
})(["font-size:16px;line-height:24px;font-family:Work Sans;color:", ";font-style:normal;margin-top:5px;letter-spacing:0.1px;font-weight:400;", ""], props => props.color ? props.color : _variables__WEBPACK_IMPORTED_MODULE_1__["colors"].black, props => props.style ? props.style : null);


/***/ }),

/***/ "./styles/common/Box.js":
/*!******************************!*\
  !*** ./styles/common/Box.js ***!
  \******************************/
/*! exports provided: Box */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_variables */ "./styles/_variables.js");

var _jsxFileName = "/Users/alexiastandish/Desktop/Freelance Clients/NewportMed/newportmed/styles/common/Box.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const ContainerStyle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.section.withConfig({
  displayName: "Box__ContainerStyle",
  componentId: "min52s-0"
})(["border-radius:3px;background:white;box-sizing:border-box;width:", ";", ";", ""], props => props.columns ? `${100 / props.columns - 5}%` : "100%", _variables__WEBPACK_IMPORTED_MODULE_3__["boxShadow"], props => props.style ? props.style : null);

const Box = props => {
  return __jsx(ContainerStyle, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), props.children);
};



/***/ }),

/***/ "./styles/common/Button.js":
/*!*********************************!*\
  !*** ./styles/common/Button.js ***!
  \*********************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_variables */ "./styles/_variables.js");


var _jsxFileName = "/Users/alexiastandish/Desktop/Freelance Clients/NewportMed/newportmed/styles/common/Button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



const options = ['primary', 'primary--reversed', 'secondary', 'transparent--blue', 'transparent--green', 'transparent--red', 'transparent--white', 'save', 'save--reversed', 'delete', 'delete--reversed', 'inverted', 'inverted--reversed', 'secondary--green'];

const getButtonStyles = type => {
  switch (type) {
    case 'primary':
      return {
        backgroundColor: _variables__WEBPACK_IMPORTED_MODULE_4__["colors"].red,
        boxShadow: '0px 2px 10px 0px rgba(0,0,0,0.2)',
        color: '#FFFFFF'
      };

    case 'secondary':
      return {
        backgroundColor: '#FFFFFF',
        color: _variables__WEBPACK_IMPORTED_MODULE_4__["colors"].blue,
        boxShadow: '0px 2px 10px 0px rgba(0,0,0,0.2)'
      };

    case 'centered':
      return {
        backgroundColor: _variables__WEBPACK_IMPORTED_MODULE_4__["colors"].lightblue,
        color: _variables__WEBPACK_IMPORTED_MODULE_4__["colors"].blue
      };

    case 'link-btn':
      return {
        color: '#FFFFFF',
        backgroundColor: _variables__WEBPACK_IMPORTED_MODULE_4__["colors"].blue
      };

    case 'link-btn-inverted':
      return {
        color: _variables__WEBPACK_IMPORTED_MODULE_4__["colors"].blue,
        border: `1px solid ${_variables__WEBPACK_IMPORTED_MODULE_4__["colors"].blue}`,
        backgroundColor: '#FFFFFF'
      };

    default:
      break;
  }
};

const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button.withConfig({
  displayName: "Button__StyledButton",
  componentId: "sc-1fps2wd-0"
})(["text-transform:uppercase;font-family:Work Sans;font-weight 400;border-radius:25px;position:relative;display:flex;justify-content:center flex-direction:row;align-items:center;justify-items:center;font-size:14px;text-transform:uppercase;letter-spacing:1px;padding-top:13px;padding-bottom:12px;padding-right:", ";padding-left:", ";outline:none;border:none;transition:all 400ms ease;&:hover{", "}", " a{font-size:14px;color:white;text-decoration:none;}img{margin-right:4px;margin-left:4px;}", " ", ";", ""], props => props.type.includes('transparent') ? '0px' : '20px', props => props.type.includes('transparent') ? '0px' : '20px', _variables__WEBPACK_IMPORTED_MODULE_4__["buttonAndLinkHover"], props => props.isDisabled && `background: ${_variables__WEBPACK_IMPORTED_MODULE_4__["colors"].gray}; color: ${_variables__WEBPACK_IMPORTED_MODULE_4__["colors"].black}; border: none; box-shadow: none;
    &:hover{
      cursor: default;
      transform: translateY(0px)
    }
    `, props => props.type ? getButtonStyles(props.type) : getButtonStyles('primary'), props => props.mobileHide ? `display: none` : `display: flex`, props => props.style ? props.style : null); // {props.isLoading ? (
//   <>
//     <Loader {...props} />
//     <div style={{ color: 'transparent' }}>{props.children}</div>
//   </>
// ) : (
//   props.children
// )}

const Button = (_ref) => {
  let {
    label
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["label"]);

  return __jsx(StyledButton, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }), props.children);
};

 // const Loader = styled.span`
//   text-indent: -9999em;
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background: ${props => {
//     return props.type
//       ? getColors(props.type).background === 'transparent'
//         ? '#D8D8D8'
//         : 'rgba(255, 255, 255, 0.2)'
//       : 'white';
//   }};
//   position: absolute;
//   -webkit-animation: load3 1s infinite linear;
//   animation: load3 1s infinite linear;
//   -webkit-transform: translateZ(0);
//   -ms-transform: translateZ(0);
//   transform: translateZ(0);
//   &:before {
//     width: 50%;
//     height: 50%;
//     background: ${props => {
//       return props.type ? getColors(props.type).color : 'white';
//     }};
//     border-radius: 100% 0 0 0;
//     position: absolute;
//     top: 0;
//     left: 0;
//     content: '';
//   }
//   &:after {
//     background: ${props => {
//       return props.type
//         ? getColors(props.type).background === 'transparent'
//           ? 'white'
//           : getColors(props.type).background
//         : 'white';
//     }};
//     width: 78%;
//     height: 78%;
//     border-radius: 50%;
//     content: '';
//     margin: auto;
//     position: absolute;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     right: 0;
//   }
//   @-webkit-keyframes load3 {
//     0% {
//       -webkit-transform: rotate(0deg);
//       transform: rotate(0deg);
//     }
//     100% {
//       -webkit-transform: rotate(360deg);
//       transform: rotate(360deg);
//     }
//   }
//   @keyframes load3 {
//     0% {
//       -webkit-transform: rotate(0deg);
//       transform: rotate(0deg);
//     }
//     100% {
//       -webkit-transform: rotate(360deg);
//       transform: rotate(360deg);
//     }
//   }
// `;

/***/ }),

/***/ "./styles/common/ButtonLink.js":
/*!*************************************!*\
  !*** ./styles/common/ButtonLink.js ***!
  \*************************************/
/*! exports provided: ButtonLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonLink", function() { return ButtonLink; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_variables */ "./styles/_variables.js");



const getButtonStyles = type => {
  switch (type) {
    case "primary":
      return {
        backgroundColor: _variables__WEBPACK_IMPORTED_MODULE_1__["colors"].red,
        boxShadow: "0px 2px 10px 0px rgba(0,0,0,0.2)",
        color: "#FFFFFF"
      };

    case "secondary":
      return {
        backgroundColor: "#FFFFFF",
        color: _variables__WEBPACK_IMPORTED_MODULE_1__["colors"].blue,
        boxShadow: "0px 2px 10px 0px rgba(0,0,0,0.2)"
      };

    case "centered":
      return {
        backgroundColor: _variables__WEBPACK_IMPORTED_MODULE_1__["colors"].lightblue,
        color: _variables__WEBPACK_IMPORTED_MODULE_1__["colors"].blue
      };

    case "link-btn":
      return {
        color: "#FFFFFF",
        backgroundColor: _variables__WEBPACK_IMPORTED_MODULE_1__["colors"].blue
      };

    case "link-btn-inverted":
      return {
        color: _variables__WEBPACK_IMPORTED_MODULE_1__["colors"].blue,
        border: `1px solid ${_variables__WEBPACK_IMPORTED_MODULE_1__["colors"].blue}`,
        backgroundColor: "#FFFFFF"
      };

    default:
      break;
  }
}; // const ButtonLink = ({ label, ...props }) => {
//   return <StyledButtonLink {...props}>{props.children}</StyledButtonLink>;
// };


const ButtonLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "ButtonLink",
  componentId: "sc-8cci6a-0"
})(["text-transform:uppercase;font-family:Work Sans;font-weight 400;border-radius:25px;position:relative;display:flex;justify-content:center flex-direction:row;align-items:center;justify-items:center;font-size:14px;text-transform:uppercase;letter-spacing:1px;padding-top:13px;padding-bottom:12px;padding-right:", ";padding-left:", ";outline:none;border:none;transition:all 400ms ease;&:hover{", "}", " a{font-size:14px;color:white;text-decoration:none;}img{margin-right:4px;margin-left:4px;}", " ", ";", ""], props => props.type.includes("transparent") ? "0px" : "20px", props => props.type.includes("transparent") ? "0px" : "20px", _variables__WEBPACK_IMPORTED_MODULE_1__["buttonAndLinkHover"], props => props.isDisabled && `background: ${_variables__WEBPACK_IMPORTED_MODULE_1__["colors"].gray}; color: ${_variables__WEBPACK_IMPORTED_MODULE_1__["colors"].black}; border: none; box-shadow: none;
  &:hover{
    cursor: default;
    transform: translateY(0px)
  }
  `, props => props.type ? getButtonStyles(props.type) : getButtonStyles("primary"), props => props.mobileHide ? `display: none` : `display: flex`, props => props.style ? props.style : null);


/***/ }),

/***/ "./styles/common/Column.js":
/*!*********************************!*\
  !*** ./styles/common/Column.js ***!
  \*********************************/
/*! exports provided: Column */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return Column; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_media */ "./styles/_media.js");


const Column = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Column",
  componentId: "sc-1iwdl7e-0"
})(["box-sizing:border-box;min-height:1px;position:relative;flex:0 0 50%;max-width:50%;right:auto;left:auto;flex-wrap:wrap;", ""], _media__WEBPACK_IMPORTED_MODULE_1__["default"].md`
  flex: 0 0 100%;
  max-width: 100%;
  margin: 0 auto;
  `);


/***/ }),

/***/ "./styles/common/Container.js":
/*!************************************!*\
  !*** ./styles/common/Container.js ***!
  \************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_media */ "./styles/_media.js");
/* harmony import */ var _sizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_sizes */ "./styles/_sizes.js");



const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "Container",
  componentId: "v02k3-0"
})(["box-sizing:border-box;position:relative;margin-left:auto;margin-right:auto;width:100%;max-width:", "px;padding-left:5em;padding-right:5em;z-index:1;padding-top:100px;padding-bottom:100px;", ";", ";", ";", ";"], _sizes__WEBPACK_IMPORTED_MODULE_2__["sizes"].xl, _media__WEBPACK_IMPORTED_MODULE_1__["default"].lg`
  padding-left: 2.5em;
  padding-right: 2.5em;
`, _media__WEBPACK_IMPORTED_MODULE_1__["default"].md`
  width: 100%;
`, _media__WEBPACK_IMPORTED_MODULE_1__["default"].sm`
  width: 100%;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 25px;
  padding-right: 25px;
  `, _media__WEBPACK_IMPORTED_MODULE_1__["default"].xs`
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: 15px;
  padding-right: 15px;
  `);


/***/ }),

/***/ "./styles/common/Header.js":
/*!*********************************!*\
  !*** ./styles/common/Header.js ***!
  \*********************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_variables */ "./styles/_variables.js");
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_media */ "./styles/_media.js");



const Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "Header",
  componentId: "sc-1tad71y-0"
})(["font-family:Work Sans;font-weight:500;font-size:44px;line-height:52px;color:", ";transition:400ms ease-in;", ""], props => props.theme.fg || _variables__WEBPACK_IMPORTED_MODULE_1__["colors"].blue, _media__WEBPACK_IMPORTED_MODULE_2__["default"].smxs`
    font-size: 34px;
    line-height: 42px;
  `);


/***/ }),

/***/ "./styles/common/Hero.js":
/*!*******************************!*\
  !*** ./styles/common/Hero.js ***!
  \*******************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
 // import media from "../_media";

const Hero = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "Hero",
  componentId: "sc-1jrfxfg-0"
})(["width:100%;display:flex;min-height:700px;margin:0px;overflow:hidden;align-items:center;flex-direction:", ";justify-content:", ";justify-items:", ";text-align:", ";", ";"], props => props.layout ? props.layout.direction : "row", props => {
  return props.layout ? props.layout.justify : "flex-start";
}, props => {
  return props.layout ? props.layout.justify : "flex-start";
}, props => props.layout ? props.layout.textAlign : "left", props => props.theme && `background: ${props.theme.bg}`);


/***/ }),

/***/ "./styles/common/Input.js":
/*!********************************!*\
  !*** ./styles/common/Input.js ***!
  \********************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_variables */ "./styles/_variables.js");


var _jsxFileName = "/Users/alexiastandish/Desktop/Freelance Clients/NewportMed/newportmed/styles/common/Input.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



const InputStyle = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.input.withConfig({
  displayName: "Input__InputStyle",
  componentId: "sc-175p6cn-0"
})(["border-radius:3px;", ";padding:10px 20px;letter-spacing:0.25px;width:100%;font-family:Work Sans;&:hover{cursor:pointer;}&::placeholder{color:", ";}&:focus{outline:none;}font-size:18px;font-weight:400;transition:border 200ms ease;", ";"], props => props.error ? `border: 1px solid ${_variables__WEBPACK_IMPORTED_MODULE_4__["colors"].red}` : `border: 1px solid ${_variables__WEBPACK_IMPORTED_MODULE_4__["colors"].gray}`, _variables__WEBPACK_IMPORTED_MODULE_4__["colors"].gray, props => props.style ? props.style : null);

const Input = (_ref) => {
  let {
    value,
    name,
    placeholder
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["value", "name", "placeholder"]);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(InputStyle, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    value: value,
    name: name,
    onChange: props.onChange,
    placeholder: placeholder
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  })));
};



/***/ }),

/***/ "./styles/common/Row.js":
/*!******************************!*\
  !*** ./styles/common/Row.js ***!
  \******************************/
/*! exports provided: Row */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_media */ "./styles/_media.js");


const Row = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Row",
  componentId: "lq5yk4-0"
})(["display:flex;flex-wrap:wrap;flex-grow:0;flex-shrink:0;align-items:center;flex-direction:row;justify-content:space-between;", ""], _media__WEBPACK_IMPORTED_MODULE_1__["default"].md`
  justify-content: center;
  `);


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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_media */ "./styles/_media.js");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_variables */ "./styles/_variables.js");



const StyledBlockQuote = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2`
  ${props => props.currentSlide ? `  color: ${_variables__WEBPACK_IMPORTED_MODULE_2__["colors"].red}` : `  color: ${_variables__WEBPACK_IMPORTED_MODULE_2__["colors"].gray}`};
  opacity: ${props => props.currentSlide ? `1` : `.5`};
  font-size: 80px;
  margin-bottom: -30px;
  margin-right: 20px;

  ${_media__WEBPACK_IMPORTED_MODULE_1__["default"].smxs`
   margin-right: auto;
   margin-left: auto;
   margin-bottom: -20px;
    text-align: center;
  `}
`;


/***/ }),

/***/ "./styles/common/Subheader.js":
/*!************************************!*\
  !*** ./styles/common/Subheader.js ***!
  \************************************/
/*! exports provided: Subheader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subheader", function() { return Subheader; });
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_media */ "./styles/_media.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_variables */ "./styles/_variables.js");



const Subheader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "Subheader",
  componentId: "aej4ah-0"
})(["font-size:20px;line-height:28px;font-family:Work Sans;font-style:normal;letter-spacing:0.3px;font-weight:400;margin-top:20px;margin-bottom:20px;color:", ";", ";", ""], props => props.theme.fg || _variables__WEBPACK_IMPORTED_MODULE_2__["colors"].blue, _media__WEBPACK_IMPORTED_MODULE_0__["default"].sm`
  font-size: 18px;
  line-height: 28px;
`, props => props.style ? props.style : null);


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















/***/ }),

/***/ "./styles/theme/ThemeProvider.js":
/*!***************************************!*\
  !*** ./styles/theme/ThemeProvider.js ***!
  \***************************************/
/*! exports provided: ThemeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_theme */ "./styles/theme/_theme.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_global */ "./styles/theme/_global.js");


var _jsxFileName = "/Users/alexiastandish/Desktop/Freelance Clients/NewportMed/newportmed/styles/theme/ThemeProvider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





const ThemeProvider = props => {
  const theme = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _theme__WEBPACK_IMPORTED_MODULE_3__["base"], props.theme);

  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_global__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.global, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  })), props.children));
};



/***/ }),

/***/ "./styles/theme/_global.js":
/*!*********************************!*\
  !*** ./styles/theme/_global.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const fonts = `
@font-face {
  font-family: 'Work Sans';
  src: url('https://fonts.googleapis.com/css?family=Work+Sans:400&display=swap');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Work Sans';
  src: url('https://fonts.googleapis.com/css?family=Work+Sans:500&display=swap');
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: 'Work Sans';
  src: url('https://fonts.googleapis.com/css?family=Work+Sans:600&display=swap');
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: 'Work Sans';
  src: url('https://fonts.googleapis.com/css?family=Work+Sans:700&display=swap');
  font-weight: 700;
  font-style: normal;
}

@font-face {
	font-family: 'Montserrat';
  src: url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600&display=swap');
  font-weight: 300;
  font-style: normal;
}

@font-face {
	font-family: 'Montserrat';
  src: url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600&display=swap');
  font-weight: 400;
  font-style: normal;
}

@font-face {
	font-family: 'Montserrat';
  src: url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600&display=swap');
  font-weight: 500;
  font-style: normal;
}

@font-face {
	font-family: 'Montserrat';
  src: url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600&display=swap');
  font-weight: 600;
  font-style: normal;
}

`;
const reset = `
  html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed,
	figure, figcaption, footer, header, hgroup,
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	article, aside, details, figcaption, figure,
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
`;
const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
	${reset}
	${fonts}
`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ "./styles/theme/_layout.js":
/*!*********************************!*\
  !*** ./styles/theme/_layout.js ***!
  \*********************************/
/*! exports provided: centered, leftAlign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centered", function() { return centered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leftAlign", function() { return leftAlign; });
const centered = {
  textAlign: 'center',
  direction: 'column',
  justify: 'center'
};
const leftAlign = {
  textAlign: 'left',
  direction: 'row',
  justify: 'flex-start'
};


/***/ }),

/***/ "./styles/theme/_theme.js":
/*!********************************!*\
  !*** ./styles/theme/_theme.js ***!
  \********************************/
/*! exports provided: base, invert, lightGradient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base", function() { return base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightGradient", function() { return lightGradient; });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_variables */ "./styles/_variables.js");

const base = {
  fg: _variables__WEBPACK_IMPORTED_MODULE_0__["colors"].blue,
  bg: '#FFFFFF',
  header: _variables__WEBPACK_IMPORTED_MODULE_0__["colors"].blue,
  subtext: _variables__WEBPACK_IMPORTED_MODULE_0__["colors"].black,
  body: _variables__WEBPACK_IMPORTED_MODULE_0__["colors"].black
};

const invert = ({
  fg,
  bg
}) => ({
  fg: bg,
  bg: fg,
  header: '#FFFFFF',
  subtext: '#FFFFFF',
  body: '#FFFFFF'
});

const lightGradient = ({
  fg,
  header,
  subtext,
  body
}) => ({
  fg,
  bg: 'radial-gradient(rgb(255, 255, 255), rgb(224, 251, 252))',
  header,
  subtext,
  body
});



/***/ }),

/***/ "./styles/theme/index.js":
/*!*******************************!*\
  !*** ./styles/theme/index.js ***!
  \*******************************/
/*! exports provided: ThemeProvider, base, invert, lightGradient, centered, leftAlign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThemeProvider */ "./styles/theme/ThemeProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return _ThemeProvider__WEBPACK_IMPORTED_MODULE_0__["ThemeProvider"]; });

/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_theme */ "./styles/theme/_theme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "base", function() { return _theme__WEBPACK_IMPORTED_MODULE_1__["base"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return _theme__WEBPACK_IMPORTED_MODULE_1__["invert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lightGradient", function() { return _theme__WEBPACK_IMPORTED_MODULE_1__["lightGradient"]; });

/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_layout */ "./styles/theme/_layout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "centered", function() { return _layout__WEBPACK_IMPORTED_MODULE_2__["centered"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leftAlign", function() { return _layout__WEBPACK_IMPORTED_MODULE_2__["leftAlign"]; });





/***/ }),

/***/ 4:
/*!*********************************!*\
  !*** multi ./pages/services.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alexiastandish/Desktop/Freelance Clients/NewportMed/newportmed/pages/services.js */"./pages/services.js");


/***/ }),

/***/ "animejs":
/*!**************************!*\
  !*** external "animejs" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("animejs");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "deep-diff":
/*!****************************!*\
  !*** external "deep-diff" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("deep-diff");

/***/ }),

/***/ "lodash/has":
/*!*****************************!*\
  !*** external "lodash/has" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/has");

/***/ }),

/***/ "lodash/set":
/*!*****************************!*\
  !*** external "lodash/set" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/set");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-waypoint":
/*!*********************************!*\
  !*** external "react-waypoint" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-waypoint");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=services.js.map