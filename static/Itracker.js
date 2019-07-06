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
    var form = document.forms.addForm;
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

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Add));
Add.propTypes = {
  refreshPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

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
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/Row.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/Col.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/Nav.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/Card.js");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/Form.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/Modal.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Collapse */ "./node_modules/react-bootstrap/Collapse.js");
/* harmony import */ var react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Dropdown */ "./node_modules/react-bootstrap/Dropdown.js");
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap/InputGroup */ "./node_modules/react-bootstrap/InputGroup.js");
/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_bootstrap_ButtonGroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap/ButtonGroup */ "./node_modules/react-bootstrap/ButtonGroup.js");
/* harmony import */ var react_bootstrap_ButtonGroup__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ButtonGroup__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_bootstrap_ButtonToolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap/ButtonToolbar */ "./node_modules/react-bootstrap/ButtonToolbar.js");
/* harmony import */ var react_bootstrap_ButtonToolbar__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ButtonToolbar__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-bootstrap/DropdownButton */ "./node_modules/react-bootstrap/DropdownButton.js");
/* harmony import */ var react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_15__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Filter.jsx

















var Filter = function Filter(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      opened = _useState4[0],
      setOpen = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState6 = _slicedToArray(_useState5, 2),
      sts = _useState6[0],
      setSts = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState8 = _slicedToArray(_useState7, 2),
      effort_gte = _useState8[0],
      setEffGte = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState10 = _slicedToArray(_useState9, 2),
      effort_lte = _useState10[0],
      setEffLte = _useState10[1];

  var applyFilter = function applyFilter() {
    var newFilter = {};
    if (sts) newFilter.sts = sts;
    if (effort_gte) newFilter.effort_gte = effort_gte;
    if (effort_lte) newFilter.effort_lte = effort_lte;
    props.iFilter(newFilter);
  };

  var onChangeSts = function onChangeSts(event) {
    setSts(event.target.value);
    console.log(sts);
    applyFilter();
  };

  var onChangeEffortGte = function onChangeEffortGte(event) {
    var effortString = event.target.value;

    if (effortString.match(/^\d*$/)) {
      setEffGte(effortString);
    }
  };

  var onChangeEffortLte = function onChangeEffortLte(event) {
    var effortString = event.target.value;

    if (effortString.match(/^\d*$/)) {
      setEffLte(effortString);
    }
  };

  var resetFilter = function resetFilter() {
    props.iFilter({});
  };

  var clearFilter = function clearFilter() {
    setSts(props.query.sts || sts);
    setEffGte(props.query.effort_gte);
    setEffLte(props.query.effort_lte);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "filterForm",
    name: "filter"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default.a.Group, {
    as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default.a,
    id: "stateFilter"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default.a.Label, {
    column: true,
    sm: 2
  }, " State: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default.a.Control, {
    as: "select",
    value: sts,
    onChange: onChangeSts,
    size: "sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "(Any)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "New"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Open"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Assigned"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Fixed"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Verified"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Closed"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default.a.Group, {
    as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default.a,
    id: "effortFilter"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default.a.Label, {
    column: true,
    sm: 2
  }, " Effort: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_12___default.a, {
    size: "sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default.a.Control, {
    as: "input",
    value: effort_gte,
    onChange: onChangeEffortGte,
    placeholder: "from"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_12___default.a.Append, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_12___default.a.Text, null, "\u2015")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default.a.Control, {
    as: "input",
    value: effort_lte,
    onChange: onChangeEffortLte,
    placeholder: "to"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7___default.a.Group, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_ButtonGroup__WEBPACK_IMPORTED_MODULE_13___default.a, {
    size: "sm",
    "aria-label": "Filter_buttons",
    id: "applyClear"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
    onClick: applyFilter
  }, "Apply"), "\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "info",
    onClick: clearFilter
  }, "Clear"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "info",
    onClick: resetFilter,
    disabled: props.query === ''
  }, "Reset"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Filter));
Filter.propTypes = {
  iFilter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  query: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};

/***/ }),

/***/ "./src/Header.jsx":
/*!************************!*\
  !*** ./src/Header.jsx ***!
  \************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/Navbar.js");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/Nav.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Dropdown */ "./node_modules/react-bootstrap/Dropdown.js");
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/DropdownButton */ "./node_modules/react-bootstrap/DropdownButton.js");
/* harmony import */ var react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Add_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Add.jsx */ "./src/Add.jsx");
/* harmony import */ var react_offcanvas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-offcanvas */ "./node_modules/react-offcanvas/lib/index.js");
/* harmony import */ var react_offcanvas__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_offcanvas__WEBPACK_IMPORTED_MODULE_8__);
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "navbar"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3___default.a.Brand, null, "Issue Tracker"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: "justify-content-between"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: props.canvasToggle,
    variant: "light"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-filter"
  }), ' ', "Filter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: props.canvasToggle,
    variant: "light"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-undo-alt"
  }), ' ', "Reset Filter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Add_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
    refreshPage: props.refreshPage
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "user-dropdown",
    navbar: true,
    drop: "left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_5___default.a.Toggle, {
    as: CustomToggle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-ellipsis-h"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_5___default.a.Menu, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_5___default.a.Item, null, "Logout")))));
};

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_offcanvas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-offcanvas */ "./node_modules/react-offcanvas/lib/index.js");
/* harmony import */ var react_offcanvas__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_offcanvas__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Table */ "./node_modules/react-bootstrap/Table.js");
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Filter_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Filter.jsx */ "./src/Filter.jsx");
/* harmony import */ var _TableOfIssues_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TableOfIssues.jsx */ "./src/TableOfIssues.jsx");
/* harmony import */ var _Header_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Header.jsx */ "./src/Header.jsx");
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
      filterOn: false
    };
    _this.canvasToggle = _this.canvasToggle.bind(_assertThisInitialized(_this));
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

      fetch("/api/issues".concat(this.props.location.search)).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            // console.log('Total count of records:', data._metadata.total_count);
            data.records.forEach(function (issue) {
              issue.selected = '';
              issue.creation = new Date(issue.creation);
              if (issue.completion) issue.completion = new Date(issue.completion);
            });

            _this2.setState({
              issues: data.records
            });
          });
        } else {
          response.json().then(function (error) {
            alert("Failed to fetch issues:".concat(error.message));
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
    key: "iFilter",
    value: function iFilter(query) {
      var toQueryString = function toQueryString(obj) {
        var parts = [];

        for (var i in obj) {
          if (obj.hasOwnProperty(i)) {
            parts.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]));
          }
        }

        return parts.join('&');
      };

      var path = this.props.location.pathname;
      var queryString = toQueryString(query);
      this.props.history.push({
        pathname: path,
        search: queryString
      });
    }
  }, {
    key: "selectAll",
    value: function selectAll() {
      var issues = this.state.issues;
      issues.forEach(function (issue) {
        return issue.selected = 'edit';
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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_offcanvas__WEBPACK_IMPORTED_MODULE_5__["OffCanvas"], {
        width: 400,
        transitionDuration: 200,
        position: "left",
        effect: "push",
        isMenuOpened: this.state.filterOn
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_offcanvas__WEBPACK_IMPORTED_MODULE_5__["OffCanvasBody"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header_jsx__WEBPACK_IMPORTED_MODULE_10__["Header"], {
        refreshPage: this.refreshPage,
        canvasToggle: this.canvasToggle
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TableOfIssues_jsx__WEBPACK_IMPORTED_MODULE_9__["TableOfIssues"], {
        issues: this.state.issues,
        refreshPage: this.refreshPage,
        submitChanges: this.submitChanges,
        selectSingleRow: this.selectSingleRow,
        cancelSingleRow: this.cancelSingleRow,
        deleteSingleRow: this.deleteSingleRow,
        selectAll: this.selectAll,
        selectDelAll: this.selectDelAll,
        unSelectDelAll: this.unSelectDelAll,
        cancelAll: this.cancelAll
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_offcanvas__WEBPACK_IMPORTED_MODULE_5__["OffCanvasMenu"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Filter_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
        iFilter: this.iFilter,
        query: this.props.location.search
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        onClick: this.canvasToggle
      }, "Close")));
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var NoMatch = function NoMatch() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Page Not Found");
};

var RoutedApp = function RoutedApp() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: "/",
    render: function render(props) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container-fluid"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
        path: "/issues",
        component: Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Main)
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], {
        from: "/",
        to: "/issues"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
        path: "*",
        component: NoMatch
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, " Source: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://github.com/noiffion/Itracker.git",
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "fab fa-github",
        style: {
          fontSize: '24px'
        }
      }))));
    }
  }));
};

var mainNode = document.getElementById('main');
react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RoutedApp, null), mainNode);
if (false) {}

/***/ }),

/***/ "./src/Row.jsx":
/*!*********************!*\
  !*** ./src/Row.jsx ***!
  \*********************/
/*! exports provided: Row */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RowNormal_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RowNormal.jsx */ "./src/RowNormal.jsx");
/* harmony import */ var _RowEdit_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RowEdit.jsx */ "./src/RowEdit.jsx");
// Row.jsx




var Row = function Row(props) {
  var selected = props.issue.selected;
  var rowNormal = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RowNormal_jsx__WEBPACK_IMPORTED_MODULE_2__["RowNormal"], {
    issue: props.issue,
    selectSingleRow: props.selectSingleRow
  });
  var rowEdit = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RowEdit_jsx__WEBPACK_IMPORTED_MODULE_3__["RowEdit"], {
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
/* harmony import */ var react_bootstrap_ButtonToolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/ButtonToolbar */ "./node_modules/react-bootstrap/ButtonToolbar.js");
/* harmony import */ var react_bootstrap_ButtonToolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ButtonToolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/Form.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__);
// RowEdDel.jsx





var BeingEdited = function BeingEdited(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "issueId",
    title: props.iss._id
  }, props.iss._id.substr(-4)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "issueState"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Control, {
    name: props.iss._id + 'state',
    size: "sm",
    as: "input",
    placeholder: props.iss.state
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "issueOwner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Control, {
    name: props.iss._id + 'owner',
    size: "sm",
    as: "input",
    placeholder: props.iss.owner
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "issueCreation"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Control, {
    name: props.iss._id + 'creation',
    size: "sm",
    as: "input",
    placeholder: props.iss.creation.toDateString()
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "issueEffort"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Control, {
    name: props.iss._id + 'effort',
    size: "sm",
    as: "input",
    placeholder: props.iss.effort
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "issueCompletion"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Control, {
    name: props.iss._id + 'completion',
    size: "sm",
    as: "input",
    placeholder: props.iss.completion ? props.iss.completion.toDateString() : ''
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "issueDescription"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Control, {
    name: props.iss._id + 'description',
    size: "sm",
    as: "input",
    placeholder: props.iss.description
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "cornerButtons"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_ButtonToolbar__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    title: "Delete issue",
    variant: "light",
    size: "sm",
    onClick: function onClick() {
      return props.deleteSingleRow(props.iss._id);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-trash-alt"
  })), "\xA0\xA0\xA0\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    title: "Cancel",
    variant: "secondary",
    size: "sm",
    onClick: function onClick() {
      return props.cancelSingleRow(props.iss._id);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-ban"
  })))));
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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Control, {
    disabled: true,
    size: "sm",
    as: "input",
    placeholder: "\u2014"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "issueOwner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Control, {
    disabled: true,
    size: "sm",
    as: "input",
    placeholder: "\u2014"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "issueCreation"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Control, {
    disabled: true,
    size: "sm",
    as: "input",
    placeholder: "\u2014"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "issueEffort"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Control, {
    disabled: true,
    size: "sm",
    as: "input",
    placeholder: "\u2014"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "issueCompletion"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Control, {
    disabled: true,
    size: "sm",
    as: "input",
    placeholder: "\u2014"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "issueDescription"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default.a.Control, {
    disabled: true,
    size: "sm",
    as: "input",
    placeholder: "\u2014"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "cornerButtons"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_ButtonToolbar__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    title: "Cancel delete",
    variant: "danger",
    size: "sm",
    onClick: function onClick() {
      return props.cancelDelete(props.iss._id);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-trash-alt"
  })), "\xA0\xA0\xA0\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    title: "Cancel edit",
    variant: "secondary",
    size: "sm",
    onClick: function onClick() {
      return props.cancelSingleRow(props.iss._id);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-ban"
  })))));
};
BeingDeleted.propTypes = {
  iss: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./src/RowEdit.jsx":
/*!*************************!*\
  !*** ./src/RowEdit.jsx ***!
  \*************************/
/*! exports provided: RowEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowEdit", function() { return RowEdit; });
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

/***/ }),

/***/ "./src/RowNormal.jsx":
/*!***************************!*\
  !*** ./src/RowNormal.jsx ***!
  \***************************/
/*! exports provided: RowNormal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowNormal", function() { return RowNormal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
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
    className: "cornerButtons"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
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

/***/ }),

/***/ "./src/TableOfIssues.jsx":
/*!*******************************!*\
  !*** ./src/TableOfIssues.jsx ***!
  \*******************************/
/*! exports provided: TableOfIssues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableOfIssues", function() { return TableOfIssues; });
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
  var issueRows = props.issues.map(function (issue) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Row_jsx__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      key: issue._id,
      issue: issue,
      selectSingleRow: props.selectSingleRow,
      cancelSingleRow: props.cancelSingleRow,
      deleteSingleRow: props.deleteSingleRow
    });
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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Id"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "State"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Owner"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Created on"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Effort"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Completed on"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Description"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "cornerButtons"
  }, anyEdit ? tB.editTable : tB.displayTable))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, issueRows)));
};
TableOfIssues.propTypes = {
  issues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  refreshPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");


function tableButtons(issues, selectAll, selectDelAll, unSelectDelAll, cancelAll) {
  var displayTable = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    title: "Edit all rows",
    onClick: selectAll,
    variant: "success",
    size: "sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-check-square"
  }));
  var selectDel = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    title: "Mark selected for deletion",
    onClick: selectDelAll,
    variant: "light",
    size: "sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-trash-alt"
  }));
  var cancelDel = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
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
  var editTable = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonToolbar"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "submit",
    title: "Submit",
    variant: "primary",
    size: "sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-save"
  })), "\xA0\xA0", allSelectedDelete ? cancelDel : selectDel, "\xA0\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
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