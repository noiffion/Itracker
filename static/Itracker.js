/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/Main.jsx","vendors~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Add.jsx":
/*!*********************!*\
  !*** ./src/Add.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/Nav.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_ButtonToolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/ButtonToolbar */ "./node_modules/react-bootstrap/ButtonToolbar.js");
/* harmony import */ var react_bootstrap_ButtonToolbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ButtonToolbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/Form.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/Modal.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Add.jsx









var Add = function Add(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1]; //TODO: 


  var showError = function showError(error) {
    console.log(error);
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    var form = event.target;
    var newIssue = {
      owner: form.ownerInput.value,
      description: form.descInput.value,
      state: 'New',
      creation: new Date()
    };
    var postParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newIssue)
    };
    fetch('/api/issues', postParams).then(function (response) {
      if (response.ok) {
        response.json().then(function () {
          setShow(false);
          props.refreshPage();
        });
      } else {
        response.json().then(function (error) {
          return showError("Failed to add issue: ".concat(error.message));
        });
      }
    })["catch"](function (err) {
      return showError("Error in sending data to server: ".concat(err.message));
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "createIssueModal",
    variant: "light",
    onClick: function onClick() {
      return setShow(true);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-plus"
  }), ' ', "Create Issue"), "\xA0\xA0\xA0\xA0\xA0\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7___default.a, {
    show: show,
    onHide: function onHide() {
      return setShow(false);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7___default.a.Header, {
    closeButton: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7___default.a.Title, null, "Create Issue")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7___default.a.Body, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default.a, {
    name: "addForm",
    id: "addForm",
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default.a.Group, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default.a.Label, null, "Description"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default.a.Control, {
    name: "descInput",
    as: "input",
    autoFocus: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default.a.Group, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default.a.Label, null, "Owner"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default.a.Control, {
    name: "ownerInput",
    as: "input"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7___default.a.Footer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_ButtonToolbar__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    type: "submit",
    form: "addForm",
    variant: "primary"
  }, "Save to database"), "\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "secondary",
    onClick: function onClick() {
      return setShow(false);
    }
  }, "Cancel")))));
};

Add.propTypes = {
  refreshPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Add);

/***/ }),

/***/ "./src/Bubble.jsx":
/*!************************!*\
  !*** ./src/Bubble.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bubble; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Alert */ "./node_modules/react-bootstrap/Alert.js");
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Collapse */ "./node_modules/react-bootstrap/Collapse.js");
/* harmony import */ var react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Bubble.jsx



 //TODO: useState, useEffect

var Bubble =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Bubble, _React$Component);

  function Bubble() {
    _classCallCheck(this, Bubble);

    return _possibleConstructorReturn(this, _getPrototypeOf(Bubble).apply(this, arguments));
  }

  _createClass(Bubble, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.showing) {
        clearTimeout(this.dismissTimer);
        this.dismissTimer = setTimeout(this.props.onDismiss, 3000);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.dismissTimer);
    } // onDismiss={this.props.onDismiss}

  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_2___default.a, {
        "in": this.props.showing
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          position: 'fixed',
          top: 30,
          left: 0,
          right: 0,
          textAlign: 'center'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          display: 'inline-block',
          width: 500
        }
      }, this.props.message)));
    }
  }]);

  return Bubble;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


Bubble.propTypes = {
  showing: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  onDismiss: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  bsStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  message: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any.isRequired
};
Bubble.defaultProps = {
  bsStyle: 'success'
};

/***/ }),

/***/ "./src/DatePicker.jsx":
/*!****************************!*\
  !*** ./src/DatePicker.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/Modal.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_infinite_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-infinite-calendar */ "./node_modules/react-infinite-calendar/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// DatePicker.jsx






var DatePicker = function DatePicker(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      modal = _useState2[0],
      setModal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('All'),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedDate = _useState4[0],
      setDate = _useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "datePickerBtns",
    title: "Select a date",
    variant: "info",
    onClick: function onClick() {
      return setModal(true);
    }
  }, props.date === 'All' ? 'All' : props.date.toLocaleDateString()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default.a, {
    show: modal,
    onHide: function onHide() {
      return setModal(false);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default.a.Header, {
    closeButton: true
  }, props.subType === 'from' ? 'From' : 'Until'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default.a.Body, {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_infinite_calendar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    min: new Date(2018, 0, 1),
    max: new Date(2020, 12, 31),
    minDate: new Date(2018, 0, 1),
    maxDate: new Date(2020, 12, 31),
    height: window.innerHeight - 400,
    selected: false,
    display: "years",
    locale: {
      blank: 'Select a date...',
      headerFormat: 'ddd, MMM Do',
      todayLabel: {
        "long": 'Today'
      },
      weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      weekStartsOn: 1
    },
    onSelect: function onSelect(date) {
      return setDate(new Date(date));
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default.a.Footer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "primary",
    onClick: function onClick() {
      props.onChangeDate(selectedDate, props.subType);
      setDate('All');
      setModal(false);
    }
  }, "Pick date"))));
};

DatePicker.propTypes = {
  onChangeDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  subType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DatePicker);

/***/ }),

/***/ "./src/Filter.jsx":
/*!************************!*\
  !*** ./src/Filter.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/Row.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/Form.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/InputGroup */ "./node_modules/react-bootstrap/InputGroup.js");
/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/Modal.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_infinite_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-infinite-calendar */ "./node_modules/react-infinite-calendar/es/index.js");
/* harmony import */ var _DatePicker_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DatePicker.jsx */ "./src/DatePicker.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Filter.jsx










var Filter = function Filter(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      modal = _useState2[0],
      setModal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('All'),
      _useState4 = _slicedToArray(_useState3, 2),
      state = _useState4[0],
      setState = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState6 = _slicedToArray(_useState5, 2),
      owner = _useState6[0],
      setOwner = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState8 = _slicedToArray(_useState7, 2),
      description = _useState8[0],
      setDesc = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      _useState10 = _slicedToArray(_useState9, 2),
      effortGte = _useState10[0],
      setEffGte = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(10),
      _useState12 = _slicedToArray(_useState11, 2),
      effortLte = _useState12[0],
      setEffLte = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('All'),
      _useState14 = _slicedToArray(_useState13, 2),
      from = _useState14[0],
      setFrom = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('All'),
      _useState16 = _slicedToArray(_useState15, 2),
      until = _useState16[0],
      setUntil = _useState16[1];

  var iFilter = props.iFilter;

  var filterMaker = function filterMaker() {
    return {
      state: state,
      owner: owner || 'All',
      description: description || 'All',
      effort: effortGte === 1 && effortLte === 10 ? 'All' : [effortGte, effortLte],
      creation: from === 'All' && until === 'All' ? 'All' : [from, until]
    };
  };

  var onChangeState = function onChangeState(event) {
    var filter = filterMaker();
    var tValue = event.target.value;
    filter.state = tValue;
    iFilter(filter);
    setState(tValue);
  };

  var onChangeOwner = function onChangeOwner(event) {
    var filter = filterMaker();
    var tValue = event.target.value.toLowerCase();
    tValue === '' ? filter.owner = 'All' : filter.owner = tValue;
    iFilter(filter);
    setOwner(tValue);
  };

  var onChangeDate = function onChangeDate(date, subType) {
    var filter = filterMaker();

    if (subType === 'from') {
      setFrom(date);

      if (date === 'All') {
        until === 'All' ? filter.creation = 'All' : filter.creation = [new Date(1), until];
      } else {
        until === 'All' ? filter.creation = [date, new Date(2100, 0, 1)] : filter.creation = [date, until];
      }
    } else if (subType === 'until') {
      setUntil(date);

      if (date === 'All') {
        from === 'All' ? filter.creation = 'All' : filter.creation = [from, new Date(2100, 0, 1)];
      } else {
        from === 'All' ? filter.creation = [new Date(1), date] : filter.creation = [from, date];
      }
    }

    iFilter(filter);
  };

  var onChangeEffort = function onChangeEffort(event, subType) {
    var filter = filterMaker();
    var tValue = Number(event.target.value);

    if (tValue > 0 && tValue < 11) {
      if (subType === 'gte' && tValue <= effortLte) {
        setEffGte(tValue);

        if (tValue === 1 && effortLte === 10) {
          filter.effort = 'All';
          iFilter(filter);
          return;
        }

        filter.effort = [tValue, effortLte];
      } else if (subType === 'lte' && tValue >= effortGte) {
        setEffLte(tValue);

        if (effortGte === 1 && tValue === 10) {
          filter.effort = 'All';
          iFilter(filter);
          return;
        }

        filter.effort = [effortGte, tValue];
      }

      iFilter(filter);
    }
  };

  var onChangeDesc = function onChangeDesc(event) {
    var filter = filterMaker();
    var tValue = event.target.value.toLowerCase();
    tValue === '' ? filter.description = 'All' : filter.description = tValue;
    iFilter(filter);
    setDesc(tValue);
  };

  var clearFilter = function clearFilter() {
    filter = filterMaker();
    Object.keys(filter).forEach(function (key) {
      return filter[key] = 'All';
    });
    setState('All');
    setOwner('');
    setDesc('');
    setEffGte(1);
    setEffLte(10);
    setFrom('All');
    setUntil('All');
    iFilter(filter);
  };

  var optionMaker = function optionMaker(unique) {
    var options = [];

    var recOpt = function recOpt(till, current) {
      if (current > till) return;
      options.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        key: current + unique
      }, " ", current, " "));
      return recOpt(till, current + 1);
    };

    recOpt(10, 1);
    return options;
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "sideFilter"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "sideCloseDiv"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClick: props.canvasToggle,
    variant: "light"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-times"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "filterForm",
    name: "filter"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Text, {
    sm: 2
  }, " State: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Group, {
    as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default.a,
    id: "stateFilter"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Control, {
    as: "select",
    value: state,
    onChange: onChangeState,
    size: "sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "All"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "New"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Open"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Assigned"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Fixed"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Verified"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Closed"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Text, {
    sm: 2
  }, " Owner: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Group, {
    id: "ownerFilter",
    type: "text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Control, {
    type: "text",
    size: "sm",
    placeholder: "Name",
    value: owner,
    onChange: onChangeOwner
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Text, {
    sm: 2
  }, " Effort: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Row, {
    id: "effortFilter"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Group, {
    id: "effortGte"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Control, {
    as: "select",
    value: effortGte,
    onChange: function onChange(event) {
      return onChangeEffort(event, 'gte');
    },
    size: "sm"
  }, optionMaker('effortGte'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Text, null, "\xA0\u2015\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Group, {
    id: "effortLte"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Control, {
    as: "select",
    value: effortLte,
    onChange: function onChange(event) {
      return onChangeEffort(event, 'lte');
    },
    size: "sm"
  }, optionMaker('effortLte')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Text, {
    sm: 2
  }, " Description "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Group, {
    id: "descFilter",
    type: "text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Control, {
    type: "text",
    size: "sm",
    placeholder: "Description",
    value: description,
    onChange: onChangeDesc
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Text, {
    sm: 2
  }, " From: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DatePicker_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
    date: from,
    subType: "from",
    onChangeDate: onChangeDate
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Text, {
    sm: 2
  }, " Until: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DatePicker_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
    date: until,
    subType: "until",
    onChangeDate: onChangeDate
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Group, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "clearFilter",
    variant: "success",
    onClick: clearFilter
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-undo-alt"
  }), "\xA0Clear"))));
};

Filter.propTypes = {
  iFilter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Filter);

/***/ }),

/***/ "./src/Header.jsx":
/*!************************!*\
  !*** ./src/Header.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/Form.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/Navbar.js");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/Nav.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Dropdown */ "./node_modules/react-bootstrap/Dropdown.js");
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/DropdownButton */ "./node_modules/react-bootstrap/DropdownButton.js");
/* harmony import */ var react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Add_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Add.jsx */ "./src/Add.jsx");
/* harmony import */ var react_offcanvas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-offcanvas */ "./node_modules/react-offcanvas/lib/index.js");
/* harmony import */ var react_offcanvas__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_offcanvas__WEBPACK_IMPORTED_MODULE_9__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Header.jsx











var CustomToggle =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CustomToggle, _React$Component);

  function CustomToggle(props, context) {
    var _this;

    _classCallCheck(this, CustomToggle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CustomToggle).call(this, props, context));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CustomToggle, [{
    key: "handleClick",
    value: function handleClick(event) {
      event.preventDefault();
      this.props.onClick(event);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        onClick: this.handleClick
      }, this.props.children);
    }
  }]);

  return CustomToggle;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Header = function Header(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "navbar"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4___default.a.Brand, null, "Issue Tracker"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "navItems"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onSubmit: function onSubmit() {
      return event.preventDefault();
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default.a.Control, {
    id: "goToPage",
    title: "Number + Enter to go to page",
    style: {
      width: '50px',
      fontSize: '12px',
      textAlign: 'center'
    },
    size: "sm",
    as: "input",
    placeholder: 'Go to',
    onFocus: function onFocus() {
      return event.target.placeholder = '';
    },
    onBlur: function onBlur() {
      return event.target.placeholder = 'Go to';
    },
    onKeyPress: function onKeyPress() {
      if (event.key === 'Enter') {
        var page = Number(event.target.value);

        if (page >= 1 && page <= props.maxPageNum) {
          event.target.value = '';
          props.pageGo(page - 1);
        }
      }
    }
  })), "\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onClick: props.canvasToggle,
    variant: "light"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-filter"
  }), ' ', "Filter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Add_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
    refreshPage: props.refreshPage
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "user-dropdown",
    navbar: true,
    drop: "left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6___default.a.Toggle, {
    as: CustomToggle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-ellipsis-h"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6___default.a.Menu, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6___default.a.Item, null, "Logout")))));
};

Header.propTypes = {
  canvasToggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  refreshPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  iFilter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/Main.jsx":
/*!**********************!*\
  !*** ./src/Main.jsx ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_offcanvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-offcanvas */ "./node_modules/react-offcanvas/lib/index.js");
/* harmony import */ var react_offcanvas__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_offcanvas__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Table */ "./node_modules/react-bootstrap/Table.js");
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Header_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Header.jsx */ "./src/Header.jsx");
/* harmony import */ var _Filter_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Filter.jsx */ "./src/Filter.jsx");
/* harmony import */ var _Paginator_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Paginator.jsx */ "./src/Paginator.jsx");
/* harmony import */ var _TableOfIssues_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TableOfIssues.jsx */ "./src/TableOfIssues.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Main.jsx












var Main =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main(props) {
    var _this;

    _classCallCheck(this, Main);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Main).call(this, props));
    _this.state = {
      issues: [],
      filterOn: false,
      actualPage: 0,
      maxPageNum: 0,
      iPerPage: 20
    };
    _this.canvasToggle = _this.canvasToggle.bind(_assertThisInitialized(_this));
    _this.pageGo = _this.pageGo.bind(_assertThisInitialized(_this));
    _this.refreshPage = _this.refreshPage.bind(_assertThisInitialized(_this));
    _this.iFilter = _this.iFilter.bind(_assertThisInitialized(_this));
    _this.selectAll = _this.selectAll.bind(_assertThisInitialized(_this));
    _this.selectDelAll = _this.selectDelAll.bind(_assertThisInitialized(_this));
    _this.unSelectDelAll = _this.unSelectDelAll.bind(_assertThisInitialized(_this));
    _this.cancelAll = _this.cancelAll.bind(_assertThisInitialized(_this));
    _this.selectSingleRow = _this.selectSingleRow.bind(_assertThisInitialized(_this));
    _this.deleteSingleRow = _this.deleteSingleRow.bind(_assertThisInitialized(_this));
    _this.cancelSingleRow = _this.cancelSingleRow.bind(_assertThisInitialized(_this));
    _this.deleteIssues = _this.deleteIssues.bind(_assertThisInitialized(_this));
    _this.updateIssues = _this.updateIssues.bind(_assertThisInitialized(_this));
    _this.submitChanges = _this.submitChanges.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Main, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "canvasToggle",
    value: function canvasToggle() {
      this.setState({
        filterOn: !this.state.filterOn
      });
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this2 = this;

      fetch("/api/issues").then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            // console.log('Total count of records:', data._metadata.total_count);
            data.records.forEach(function (issue) {
              if (issue.completion) issue.completion = new Date(issue.completion);
              issue.creation = new Date(issue.creation);
              issue.selected = '';
              issue.filters = {
                state: true,
                owner: true,
                creation: true,
                effort: true,
                completion: true,
                description: true
              };
              issue.filteredIn = true;
            });

            _this2.setState({
              issues: data.records,
              maxPageNum: Math.ceil(data.records.length / _this2.state.iPerPage)
            });
          });
        } else {
          response.json().then(function (error) {
            alert("Failed to fetch issues: ".concat(error.message));
          });
        }
      })["catch"](function (err) {
        alert('Error in fetching data from server:', err);
      });
    }
  }, {
    key: "refreshPage",
    value: function refreshPage() {
      this.loadData();
    }
  }, {
    key: "pageGo",
    value: function pageGo(pageNum) {
      this.setState({
        actualPage: pageNum
      });
    }
  }, {
    key: "iFilter",
    value: function iFilter(filter) {
      var issues = this.state.issues;
      var types = Object.keys(filter);
      var count = -1;
      console.log(filter);
      issues.forEach(function (issue) {
        types.forEach(function (type) {
          if (filter[type] === 'All') {
            issue.filters[type] = true;
          } else if (type === 'state') {
            if (issue[type] !== filter[type]) {
              issue.filters[type] = false;
            } else {
              issue.filters[type] = true;
            }
          } else if (type === 'owner' || type === 'description') {
            if (!issue[type].toLowerCase().includes(filter[type])) {
              issue.filters[type] = false;
            } else {
              issue.filters[type] = true;
            }
          } else if (type === 'effort') {
            if (issue[type] < filter[type][0] || issue[type] > filter[type][1]) {
              issue.filters[type] = false;
            } else {
              issue.filters[type] = true;
            }
          } else if (type === 'creation') {
            var issueDate = issue[type].valueOf();
            var from = filter[type][0].valueOf();
            var until = filter[type][1].valueOf();

            if (issueDate < from || issueDate > until) {
              issue.filters[type] = false;
            } else {
              issue.filters[type] = true;
            }
          }
        });
        issue.filteredIn = Object.values(issue.filters).every(function (filter) {
          return filter;
        });
        if (issue.filteredIn) count++;
      });
      this.setState({
        issues: issues,
        maxPageNum: Math.ceil(count / this.state.iPerPage) || 1,
        actualPage: 0
      });
    }
  }, {
    key: "selectAll",
    value: function selectAll() {
      var issues = this.state.issues;
      issues.forEach(function (issue) {
        if (issue.filteredIn) return issue.selected = 'edit';
      });
      this.setState({
        issues: issues
      });
    }
  }, {
    key: "selectDelAll",
    value: function selectDelAll() {
      var issues = this.state.issues;
      issues.forEach(function (issue) {
        if (issue.selected === 'edit') return issue.selected = 'delete';
      });
      this.setState({
        issues: issues
      });
    }
  }, {
    key: "unSelectDelAll",
    value: function unSelectDelAll() {
      var issues = this.state.issues;
      issues.forEach(function (issue) {
        if (issue.selected === 'delete') return issue.selected = 'edit';
      });
      this.setState({
        issues: issues
      });
    }
  }, {
    key: "cancelAll",
    value: function cancelAll() {
      var issues = this.state.issues;
      issues.forEach(function (issue) {
        if (issue.selected) return issue.selected = '';
      });
      this.setState({
        issues: issues
      });
    }
  }, {
    key: "selectSingleRow",
    value: function selectSingleRow(id) {
      var issues = this.state.issues;
      issues.forEach(function (issue) {
        if (issue._id === id) return issue.selected = 'edit';
      });
      this.setState({
        issues: issues
      });
    }
  }, {
    key: "deleteSingleRow",
    value: function deleteSingleRow(id) {
      var issues = this.state.issues;
      issues.forEach(function (issue) {
        if (issue._id === id) return issue.selected = 'delete';
      });
      this.setState({
        issues: issues
      });
    }
  }, {
    key: "cancelSingleRow",
    value: function cancelSingleRow(id) {
      var issues = this.state.issues;
      issues.forEach(function (issue) {
        if (issue._id === id) return issue.selected = '';
      });
      this.setState({
        issues: issues
      });
    }
  }, {
    key: "deleteIssues",
    value: function deleteIssues(issues) {
      var rowsToDelete = issues.filter(function (issue) {
        return issue.selected === 'delete';
      });
      rowsToDelete.forEach(function (row) {
        return fetch("/api/issues/".concat(row._id), {
          method: 'DELETE'
        }).then(function (response) {
          if (response.ok) {//delete selectedRows[id];
          } else {
            alert("Failed to delete issue: ".concat(id, "!"));
          }
        })["catch"](function (error) {
          return alert(error);
        });
      });
    }
  }, {
    key: "updateIssues",
    value: function updateIssues(issues) {
      var _this3 = this;

      var rowsToUpdate = issues.filter(function (issue) {
        return issue.selected === 'edit';
      });
      rowsToUpdate.forEach(function (row) {
        var issue = {};
        var properties = ['state', 'owner', 'creation', 'effort', 'completion', 'description'];
        properties.forEach(function (property) {
          var input = document.forms.tableForm["".concat(row._id + property)];
          input.value ? issue[property] = input.value : issue[property] = input.placeholder;

          if (property === 'creation' || property === 'completion') {
            var date = Date.parse(issue[property]);
            date ? date = new Date(date).toISOString() : date = null;
            issue[property] = date;
          }
        });
        var putParams = {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(issue)
        };
        fetch("/api/issues/".concat(row._id), putParams).then(function (response) {
          if (response.ok) {//delete selectedRows[id];
          } else {
            alert("Failed to update issue: ".concat(id, "!"));
          }

          _this3.setState({
            selectedRows: {}
          });
        })["catch"](function (err) {
          return alert("Error in sending data to server: ".concat(err.message));
        });
      });
    }
  }, {
    key: "submitChanges",
    value: function submitChanges(event) {
      event.preventDefault();
      /*
      if (Object.keys(this.state.invalidFields).length !== 0) {
        return;
      }
      */

      var issues = this.state.issues;
      this.deleteIssues(issues);
      this.updateIssues(issues);
      this.refreshPage();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_offcanvas__WEBPACK_IMPORTED_MODULE_4__["OffCanvas"], {
        width: 160,
        transitionDuration: 200,
        position: "left",
        effect: "push",
        isMenuOpened: this.state.filterOn
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_offcanvas__WEBPACK_IMPORTED_MODULE_4__["OffCanvasBody"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
        refreshPage: this.refreshPage,
        canvasToggle: this.canvasToggle,
        iFilter: this.iFilter,
        maxPageNum: this.state.maxPageNum,
        pageGo: this.pageGo
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Paginator_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        actualPage: this.state.actualPage,
        maxPageNum: this.state.maxPageNum,
        pageGo: this.pageGo
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TableOfIssues_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
        issues: this.state.issues,
        actualPage: this.state.actualPage,
        iPerPage: this.state.iPerPage,
        refreshPage: this.refreshPage,
        submitChanges: this.submitChanges,
        selectSingleRow: this.selectSingleRow,
        cancelSingleRow: this.cancelSingleRow,
        deleteSingleRow: this.deleteSingleRow,
        selectAll: this.selectAll,
        selectDelAll: this.selectDelAll,
        unSelectDelAll: this.unSelectDelAll,
        cancelAll: this.cancelAll
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Paginator_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        actualPage: this.state.actualPage,
        maxPageNum: this.state.maxPageNum,
        pageGo: this.pageGo
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, " Source: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://github.com/noiffion/Itracker.git",
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "fab fa-github",
        style: {
          fontSize: '24px'
        }
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_offcanvas__WEBPACK_IMPORTED_MODULE_4__["OffCanvasMenu"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Filter_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
        iFilter: this.iFilter,
        canvasToggle: this.canvasToggle
      })));
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var mainNode = document.getElementById('main');
react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Main, null), mainNode);
if (false) {}

/***/ }),

/***/ "./src/Paginator.jsx":
/*!***************************!*\
  !*** ./src/Paginator.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/Form.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Pagination */ "./node_modules/react-bootstrap/Pagination.js");
/* harmony import */ var react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_3__);





var Paginator = function Paginator(props) {
  var pageGo = props.pageGo;
  var actPg = props.actualPage;
  var max = props.maxPageNum;
  var pagItems = [];
  var pagiDisplay;

  var arrFill = function arrFill(till, current) {
    if (current === till) return;

    if (current === actPg) {
      pagItems.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
        key: current + 1,
        active: true
      }, current + 1));
    } else {
      pagItems.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
        key: current + 1,
        onClick: function onClick() {
          return pageGo(current);
        }
      }, current + 1));
    }

    return arrFill(till, current + 1);
  };

  if (max <= 10) {
    arrFill(max, 0);
    pagiDisplay = pagItems;
  } else {
    pagiDisplay = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
      active: true
    }, actPg + 1);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "paginators"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    onClick: function onClick() {
      return pageGo(0);
    }
  }, " 1 "), "\xA0\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_3___default.a.Prev, {
    onClick: function onClick() {
      return actPg > 0 ? pageGo(actPg - 1) : pageGo(0);
    }
  }), pagiDisplay, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_3___default.a.Next, {
    onClick: function onClick() {
      return actPg < max - 1 ? pageGo(actPg + 1) : pageGo(max - 1);
    }
  }), "\xA0\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    onClick: function onClick() {
      return pageGo(max - 1);
    }
  }, " ", max, " "));
};

Paginator.propTypes = {
  pageGo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  actualPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  maxPageNum: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Paginator);

/***/ }),

/***/ "./src/Row.jsx":
/*!*********************!*\
  !*** ./src/Row.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RowNormal_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RowNormal.jsx */ "./src/RowNormal.jsx");
/* harmony import */ var _RowEdit_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RowEdit.jsx */ "./src/RowEdit.jsx");
// Row.jsx





var Row = function Row(props) {
  var selected = props.issue.selected;
  var rowNormal = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RowNormal_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    issue: props.issue,
    selectSingleRow: props.selectSingleRow
  });
  var rowEdit = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RowEdit_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    issue: props.issue,
    cancelSingleRow: props.cancelSingleRow,
    deleteSingleRow: props.deleteSingleRow,
    selectSingleRow: props.selectSingleRow
  });
  return selected ? rowEdit : rowNormal;
};

Row.propTypes = {
  issue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  selectSingleRow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  cancelSingleRow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  deleteSingleRow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Row);

/***/ }),

/***/ "./src/RowEdDel.jsx":
/*!**************************!*\
  !*** ./src/RowEdDel.jsx ***!
  \**************************/
/*! exports provided: BeingEdited, BeingDeleted */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeingEdited", function() { return BeingEdited; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeingDeleted", function() { return BeingDeleted; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/Form.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__);
// RowEdDel.jsx




var BeingEdited = function BeingEdited(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "issueId",
    title: props.iss._id
  }, props.iss._id.substr(-4)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "issueState"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Control, {
    name: props.iss._id + 'state',
    size: "sm",
    as: "input",
    placeholder: props.iss.state
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "issueOwner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Control, {
    name: props.iss._id + 'owner',
    size: "sm",
    as: "input",
    placeholder: props.iss.owner
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "issueCreation"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Control, {
    name: props.iss._id + 'creation',
    size: "sm",
    as: "input",
    placeholder: props.iss.creation.toDateString()
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "issueEffort"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Control, {
    name: props.iss._id + 'effort',
    size: "sm",
    as: "input",
    placeholder: props.iss.effort
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "issueCompletion"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Control, {
    name: props.iss._id + 'completion',
    size: "sm",
    as: "input",
    placeholder: props.iss.completion ? props.iss.completion.toDateString() : ''
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "issueDescription"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Control, {
    name: props.iss._id + 'description',
    size: "sm",
    as: "input",
    placeholder: props.iss.description
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "buttonCell"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    title: "Delete issue",
    variant: "light",
    size: "sm",
    onClick: function onClick() {
      return props.deleteSingleRow(props.iss._id);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-trash-alt"
  })), "\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    title: "Cancel",
    variant: "secondary",
    size: "sm",
    onClick: function onClick() {
      return props.cancelSingleRow(props.iss._id);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-ban"
  }))));
};
BeingEdited.propTypes = {
  iss: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
var BeingDeleted = function BeingDeleted(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "deletedIssueId",
    title: props.iss._id
  }, props.iss._id.substr(-4)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "issueState"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Control, {
    disabled: true,
    size: "sm",
    as: "input",
    placeholder: "\u2014"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "issueOwner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Control, {
    disabled: true,
    size: "sm",
    as: "input",
    placeholder: "\u2014"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "issueCreation"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Control, {
    disabled: true,
    size: "sm",
    as: "input",
    placeholder: "\u2014"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "issueEffort"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Control, {
    disabled: true,
    size: "sm",
    as: "input",
    placeholder: "\u2014"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "issueCompletion"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Control, {
    disabled: true,
    size: "sm",
    as: "input",
    placeholder: "\u2014"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "issueDescription"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Control, {
    disabled: true,
    size: "sm",
    as: "input",
    placeholder: "\u2014"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "buttonCell"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    title: "Cancel delete",
    variant: "danger",
    size: "sm",
    onClick: function onClick() {
      return props.cancelDelete(props.iss._id);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-trash-alt"
  })), "\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    title: "Cancel edit",
    variant: "secondary",
    size: "sm",
    onClick: function onClick() {
      return props.cancelSingleRow(props.iss._id);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-ban"
  }))));
};
BeingDeleted.propTypes = {
  iss: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./src/RowEdit.jsx":
/*!*************************!*\
  !*** ./src/RowEdit.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ValidInput_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ValidInput.jsx */ "./src/ValidInput.jsx");
/* harmony import */ var _RowEdDel_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RowEdDel.jsx */ "./src/RowEdDel.jsx");
// RowEdit.jsx





var RowEdit = function RowEdit(props) {
  /*
    onChange(event, convertedValue) {
      const issue = Object.assign({}, state.issue);
      const value = (convertedValue !== undefined) ? convertedValue : event.target.value;
      issue[event.target.name] = value;
      setState({ issue });
    }
  
    onValidityChange(event, valid) {
      const invalidFields = Object.assign({}, state.invalidFields);
      if (!valid) {
        invalidFields[event.target.name] = true;
      } else {
        delete invalidFields[event.target.name];
      }
      setState({ invalidFields });
    }
  
    const noInvalidFields = Object.keys(state.invalidFields).length === 0;
    const msg = (<div className="error">Please correct invalid fields before submitting.</div>);
    const validationMessage =  noInvalidFields ?  null : msg;
  */
  var del = props.issue.selected === 'delete';
  var beingEdited = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RowEdDel_jsx__WEBPACK_IMPORTED_MODULE_3__["BeingEdited"], {
    iss: props.issue,
    deleteSingleRow: props.deleteSingleRow,
    cancelSingleRow: props.cancelSingleRow
  });
  var beingDeleted = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RowEdDel_jsx__WEBPACK_IMPORTED_MODULE_3__["BeingDeleted"], {
    iss: props.issue,
    cancelDelete: props.selectSingleRow,
    cancelSingleRow: props.cancelSingleRow
  });
  return del ? beingDeleted : beingEdited;
};

RowEdit.propTypes = {
  issue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  deleteSingleRow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  cancelSingleRow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (RowEdit);

/***/ }),

/***/ "./src/RowNormal.jsx":
/*!***************************!*\
  !*** ./src/RowNormal.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);
// RowNormal.jsx




var RowNormal = function RowNormal(props) {
  var iss = props.issue;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "issueId",
    title: iss._id
  }, iss._id.substr(-4)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "issueState"
  }, iss.state), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "issueOwner"
  }, iss.owner), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "issueCreation"
  }, iss.creation.toDateString()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "issueEffort"
  }, iss.effort), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "issueCompletion"
  }, iss.completion ? iss.completion.toDateString() : ''), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "issueDescription"
  }, iss.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "buttonCell"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    title: "Edit row",
    variant: "warning",
    size: "sm",
    onClick: function onClick() {
      return props.selectSingleRow(iss._id);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-edit"
  }))));
};

RowNormal.propTypes = {
  issue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  selectSingleRow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (RowNormal);

/***/ }),

/***/ "./src/TableOfIssues.jsx":
/*!*******************************!*\
  !*** ./src/TableOfIssues.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Table */ "./node_modules/react-bootstrap/Table.js");
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/Form.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Row_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Row.jsx */ "./src/Row.jsx");
/* harmony import */ var _Bubble_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Bubble.jsx */ "./src/Bubble.jsx");
/* harmony import */ var _tableButtons_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tableButtons.jsx */ "./src/tableButtons.jsx");
// TableOfIssues.jsx








var TableOfIssues = function TableOfIssues(props) {
  var actual = props.actualPage;
  var iPerPage = props.iPerPage;
  var issueRows = [];
  var ind = -1;
  props.issues.forEach(function (issue) {
    if (issue.filteredIn) {
      ind++;

      if (ind >= actual * iPerPage && ind < actual * iPerPage + iPerPage) {
        issueRows.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Row_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: issue._id,
          issue: issue,
          selectSingleRow: props.selectSingleRow,
          cancelSingleRow: props.cancelSingleRow,
          deleteSingleRow: props.deleteSingleRow
        }));
      }
    }
  });
  var ids = Object.keys(props.issues);
  var anyEdit = ids.some(function (id) {
    return props.issues[id].selected !== '';
  });
  var p = props;
  var tB = Object(_tableButtons_jsx__WEBPACK_IMPORTED_MODULE_6__["default"])(p.issues, p.selectAll, p.selectDelAll, p.unSelectDelAll, p.cancelAll);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "tableForm",
    onSubmit: props.submitChanges
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2___default.a, {
    size: "sm",
    variant: "dark",
    striped: true,
    bordered: true,
    hover: true,
    responsive: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Id"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "State"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Owner"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Created\xA0on"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Effort"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Completed\xA0on"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Description"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "buttonCell"
  }, anyEdit ? tB.editTable : tB.displayTable))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, issueRows)));
};

TableOfIssues.propTypes = {
  issues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  refreshPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TableOfIssues);

/***/ }),

/***/ "./src/ValidInput.jsx":
/*!****************************!*\
  !*** ./src/ValidInput.jsx ***!
  \****************************/
/*! exports provided: NumInput, DateInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumInput", function() { return NumInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateInput", function() { return DateInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// ValidInput.jsx


var NumInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NumInput, _React$Component);

  function NumInput(props) {
    var _this;

    _classCallCheck(this, NumInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NumInput).call(this, props));
    _this.state = {
      value: _this.format(props.value)
    };
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(NumInput, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      this.setState({
        value: this.format(newProps.value)
      });
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      this.props.onChange(e, this.unformat(this.state.value));
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      if (e.target.value.match(/^\d*$/)) {
        this.setState({
          value: e.target.value
        });
      }
    }
  }, {
    key: "format",
    value: function format(num) {
      return num != null ? num.toString() : '';
    }
  }, {
    key: "unformat",
    value: function unformat(str) {
      var val = parseInt(str, 10);
      return isNaN(val) ? null : val;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
        type: "text"
      }, this.props, {
        value: this.state.value,
        onBlur: this.onBlur,
        onChange: this.onChange
      }));
    }
  }]);

  return NumInput;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
NumInput.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
var DateInput =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(DateInput, _React$Component2);

  function DateInput(props) {
    var _this2;

    _classCallCheck(this, DateInput);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(DateInput).call(this, props));
    _this2.state = {
      value: _this2.editFormat(props.value),
      focused: false,
      valid: true
    };
    _this2.onFocus = _this2.onFocus.bind(_assertThisInitialized(_this2));
    _this2.onBlur = _this2.onBlur.bind(_assertThisInitialized(_this2));
    _this2.onChange = _this2.onChange.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(DateInput, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      if (newProps.value !== this.props.value) {
        this.setState({
          value: this.editFormat(newProps.value)
        });
      }
    }
  }, {
    key: "onFocus",
    value: function onFocus() {
      this.setState({
        focused: true
      });
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      var value = this.unformat(this.state.value);
      var valid = this.state.value === '' || value != null;

      if (valid !== this.state.valid && this.props.onValidityChange) {
        this.props.onValidityChange(e, valid);
      }

      this.setState({
        focused: false,
        valid: valid
      });
      if (valid) this.props.onChange(e, value);
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      if (e.target.value.match(/^[\d-]*$/)) {
        this.setState({
          value: e.target.value
        });
      }
    }
  }, {
    key: "displayFormat",
    value: function displayFormat(date) {
      return date != null ? date.toDateString() : '';
    }
  }, {
    key: "editFormat",
    value: function editFormat(date) {
      return date != null ? date.toISOString().substr(0, 10) : '';
    }
  }, {
    key: "unformat",
    value: function unformat(str) {
      var val = new Date(str);
      return isNaN(val.getTime()) ? null : val;
    }
  }, {
    key: "render",
    value: function render() {
      var className = !this.state.valid && !this.state.focused ? 'invalid' : null;
      var value = this.state.focused || !this.state.valid ? this.state.value : this.displayFormat(this.props.value);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        size: 20,
        name: this.props.name,
        className: className,
        value: value,
        placeholder: this.state.focused ? 'YYYY-MM-DD' : null,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onChange: this.onChange
      });
    }
  }]);

  return DateInput;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
DateInput.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onValidityChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

/***/ }),

/***/ "./src/tableButtons.jsx":
/*!******************************!*\
  !*** ./src/tableButtons.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tableButtons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__);


function tableButtons(issues, selectAll, selectDelAll, unSelectDelAll, cancelAll) {
  var displayTable = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    title: "Edit all rows",
    onClick: selectAll,
    variant: "success",
    size: "sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-check-square"
  }));
  var selectDel = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    title: "Mark selected for deletion",
    onClick: selectDelAll,
    variant: "light",
    size: "sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-trash-alt"
  }));
  var cancelDel = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    title: "Cancel deletion of selected",
    onClick: unSelectDelAll,
    variant: "danger",
    size: "sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-trash-alt"
  }));
  var ids = Object.keys(issues);
  var selected = ids.filter(function (id) {
    return issues[id].selected;
  });
  var allSelectedDelete = selected.every(function (id) {
    return issues[id].selected === 'delete';
  });
  var editTable = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "submit",
    title: "Submit",
    variant: "primary",
    size: "sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-save"
  })), "\xA0", allSelectedDelete ? cancelDel : selectDel, "\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    title: "Cancel all",
    onClick: cancelAll,
    variant: "secondary",
    size: "sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-ban"
  })));
  return {
    displayTable: displayTable,
    editTable: editTable
  };
}

/***/ })

/******/ });
//# sourceMappingURL=Itracker.js.map