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
      setShow = _useState2[1];

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    var form = event.target;
    var newIssue = {
      state: 'New',
      owner: form.ownerAdd.value,
      creation: new Date(),
      effort: form.effortAdd.value,
      completion: null,
      description: form.descAdd.value
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
          return alertMsg(true, "Failed to add issue: ".concat(error.message));
        });
      }
    })["catch"](function (err) {
      return alertMsg("Error in sending data to server: ".concat(err.message));
    });
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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default.a.Group, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default.a.Label, null, "Owner"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default.a.Control, {
    name: "ownerAdd",
    as: "input"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default.a.Group, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default.a.Label, null, "Effort"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default.a.Control, {
    name: "effortAdd",
    as: "select"
  }, optionMaker('effortAdd'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default.a.Group, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default.a.Label, null, "Description"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default.a.Control, {
    name: "descAdd",
    as: "input",
    autoFocus: true
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
  refreshPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setAlert: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Add);

/***/ }),

/***/ "./src/AlertMsg.jsx":
/*!**************************!*\
  !*** ./src/AlertMsg.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Toast */ "./node_modules/react-bootstrap/Toast.js");
/* harmony import */ var react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_2__);




var AlertMsg = function AlertMsg(props) {
  var setAlert = props.setAlert;
  var alertMsg = props.alertMsg;
  var alertShow = props.alertShow;
  var normalMsg = props.normalMsg;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "alertSection"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "alertToast",
    className: normalMsg ? 'successToast' : 'errorToast',
    onClose: function onClose() {
      return setAlert(' ', true, false);
    },
    show: alertShow,
    delay: 3000,
    autohide: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_2___default.a.Body, null, alertMsg)));
};

AlertMsg.propTypes = {
  setAlert: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  alertMsg: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  alertShow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  normalMsg: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AlertMsg);

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
/* harmony import */ var _DatePicker_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DatePicker.jsx */ "./src/DatePicker.jsx");
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
    var filter = filterMaker();
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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (props.filterClear) clearFilter();
  });
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
  }, " From: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DatePicker_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    date: from,
    subType: "from",
    onChangeDate: onChangeDate
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Text, {
    sm: 2
  }, " Until: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DatePicker_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
  iFilter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  canvasToggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  filterClear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
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
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/Nav.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/Form.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/Navbar.js");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Dropdown */ "./node_modules/react-bootstrap/Dropdown.js");
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/DropdownButton */ "./node_modules/react-bootstrap/DropdownButton.js");
/* harmony import */ var react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Add_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Add.jsx */ "./src/Add.jsx");
/* harmony import */ var _Login_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Login.jsx */ "./src/Login.jsx");
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "navbar"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_5___default.a.Brand, null, "Issue Tracker"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "navItems"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onSubmit: function onSubmit() {
      return event.preventDefault();
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Control, {
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
  })), "\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClick: props.canvasToggle,
    variant: "light"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-filter"
  }), ' ', "Filter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Add_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
    refreshPage: props.refreshPage,
    setAlert: props.setAlert
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "user-dropdown",
    navbar: true,
    drop: "left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6___default.a.Toggle, {
    as: CustomToggle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-ellipsis-h"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6___default.a.Menu, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
    id: "signIn",
    href: "/auth/github/login"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Sign in"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-github-square fa-2x"
  }))))));
};

Header.propTypes = {
  canvasToggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  refreshPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  iFilter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setAlert: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/Login.jsx":
/*!***********************!*\
  !*** ./src/Login.jsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Login.jsx



var Login = function Login(props) {
  var toParams = function toParams(query) {
    var q = query.replace(/^\??\//, '');
    return q.split('&').reduce(function (values, param) {
      var _param$split = param.split('='),
          _param$split2 = _slicedToArray(_param$split, 2),
          key = _param$split2[0],
          value = _param$split2[1];

      values[key] = value;
      return values;
    }, {});
  };

  var toQuery = function toQuery(params) {
    var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '&';
    var keys = Object.keys(params);
    return keys.reduce(function (str, key, index) {
      var query = "".concat(str).concat(key, "=").concat(params[key]);
      if (index < keys.length - 1) query += delimiter;
      return query;
    }, '');
  };

  var onRequest = function onRequest() {
    return props.onRequest();
  };

  var onSuccess = function onSuccess(data) {
    if (!data.code) return onFailure(new Error('\'code\' not found'));
    props.onSuccess(data);
  };

  var onFailure = function onFailure(error) {
    return props.onFailure(error);
  };

  var onBtnClick = function onBtnClick() {
    var clientId = props.clientId,
        scope = props.scope,
        redirectUri = props.redirectUri;
    var search = toQuery({
      client_id: clientId,
      scope: scope,
      redirect_uri: redirectUri
    });
    var popup = LoginPop.begin('github-oauth-authorize', "https://github.com/login/oauth/authorize?".concat(search), {
      height: 1000,
      width: 600
    });
    onRequest();
    popup.then(function (data) {
      return onSuccess(data);
    }, function (error) {
      return onFailure(error);
    });
  };

  var className = props.className,
      buttonText = props.buttonText,
      children = props.children;
  var attrs = {
    onClick: onBtnClick
  };
  if (className) attrs.className = className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", attrs, children || buttonText);
};

Login.propTypes = {
  buttonText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  clientId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  onRequest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onSuccess: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onFailure: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  redirectUri: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  scope: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Login.defaultProps = {
  buttonText: 'Sign in with GitHub',
  scope: 'user:email',
  onRequest: function onRequest() {},
  onSuccess: function onSuccess() {},
  onFailure: function onFailure() {}
};
/* harmony default export */ __webpack_exports__["default"] = (Login);

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
/* harmony import */ var _OffCanvasBody_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OffCanvasBody.jsx */ "./src/OffCanvasBody.jsx");
/* harmony import */ var _OffCanvasMenu_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OffCanvasMenu.jsx */ "./src/OffCanvasMenu.jsx");
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
      filterClear: false,
      actualPage: 0,
      maxPageNum: 0,
      iPerPage: 20,
      alertShow: false,
      alertMsg: ' ',
      normalMsg: true
    };
    _this.canvasToggle = _this.canvasToggle.bind(_assertThisInitialized(_this));
    _this.setAlert = _this.setAlert.bind(_assertThisInitialized(_this));
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
    key: "setAlert",
    value: function setAlert(msg) {
      var normal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var show = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      this.setState({
        alertMsg: msg,
        normalMsg: normal,
        alertShow: show
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
              issue.onScreen = false;
              issue.selected = '';
              issue.filters = {
                state: true,
                owner: true,
                creation: true,
                effort: true,
                description: true
              };
              issue.filteredIn = true;
            });

            _this2.setState({
              issues: data.records,
              maxPageNum: Math.ceil(data.records.length / _this2.state.iPerPage),
              filterClear: false
            });
          });
        } else {
          response.json().then(function (error) {
            _this2.setAlert("Failed to fetch issues", false);

            console.log(error);
          });
        }
      })["catch"](function (error) {
        _this2.setAlert("Error in fetching data from server", false);

        console.log(error);
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
        if (issue.filteredIn && issue.onScreen) return issue.selected = 'edit';
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
      var setAlert = this.setAlert;
      var rowsToDelete = [];
      issues.forEach(function (issue) {
        if (issue.selected === 'delete') rowsToDelete.push(issue._id);
      });

      if (rowsToDelete.length === 1) {
        var id = rowsToDelete[0];
        fetch("/api/issues/".concat(id), {
          method: 'DELETE'
        }).then(function (response) {
          var success = "Successfully deleted the issue";
          var failure = "Failed to delete the issue!";
          response.ok ? setAlert(success) : setAlert(failure);
        })["catch"](function (error) {
          return console.log(error);
        });
      } else if (rowsToDelete.length > 1) {
        var delParams = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(rowsToDelete)
        };
        fetch("/api/issues/deleteMany", delParams).then(function (response) {
          var success = "Successfully deleted the issues";
          var failure = "Failed to delete the issues";
          response.ok ? setAlert(success) : setAlert(failure);
        })["catch"](function (error) {
          return console.log(error);
        });
      }
    }
  }, {
    key: "updateIssues",
    value: function updateIssues(issues) {
      var setAlert = this.setAlert;
      var rowsToUpdate = issues.filter(function (issue) {
        return issue.selected === 'edit';
      });
      var issueNumber = rowsToUpdate.length;
      var currentIssue = 0;
      var respOKs = [];

      var feedbackAlert = function feedbackAlert(current) {
        if (current === issueNumber) {
          var allRight = respOKs.every(function (resp) {
            return resp;
          });
          var plural = issueNumber > 1 ? 's' : '';
          var success = "Successfully updated the issue".concat(plural, ".");
          var failure = "Failed to update the issue".concat(plural, "!");
          allRight ? setAlert(success) : setAlert(failure);
        }
      };

      rowsToUpdate.forEach(function (row) {
        var issue = {};
        var properties = ['state', 'owner', 'creation', 'effort', 'completion', 'description'];
        properties.forEach(function (property) {
          var input = document.forms.tableForm["".concat(row._id + property)];
          input.value ? issue[property] = input.value : issue[property] = input.placeholder;

          if (property === 'creation' || property === 'completion') {
            if (issue[property]) {
              var date;
              date = Date.parse(issue[property]);
              date = new Date(date);

              if (date.toString() === 'Invalid Date') {
                var dateErr = new Error("".concat(row._id.substr(-4), ": Invalid ").concat(property, " date!"));
                setAlert("".concat(dateErr.message), false);
                throw dateErr;
              }

              if (property === 'completion' && date < new Date(issue.creation)) {
                var seqErr = new Error("Completion should be later than creation!");
                setAlert("".concat(seqErr.message), false);
                throw seqErr;
              }

              issue[property] = date.toISOString();
            }
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
          currentIssue++;
          respOKs.push(response.ok ? true : false);
          feedbackAlert(currentIssue);
        })["catch"](function (error) {
          currentIssue++;
          respOKs.push(false);
          setAlert("Error in sending data to server", false);
        });
      });
    }
  }, {
    key: "submitChanges",
    value: function submitChanges(event) {
      var issues = this.state.issues;
      this.deleteIssues(issues);
      this.updateIssues(issues);
      var clear = issues.every(function (issue) {
        return issue.filteredIn;
      });
      if (!clear) this.setState({
        filterClear: true
      });
      this.refreshPage();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_OffCanvasBody_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        width: 160,
        transitionDuration: 200,
        position: "left",
        effect: "push",
        isMenuOpened: this.state.filterOn,
        refreshPage: this.refreshPage,
        canvasToggle: this.canvasToggle,
        iFilter: this.iFilter,
        pageGo: this.pageGo,
        setAlert: this.setAlert,
        actualPage: this.state.actualPage,
        maxPageNum: this.state.maxPageNum,
        alertMsg: this.state.alertMsg,
        alertShow: this.state.alertShow,
        normalMsg: this.state.normalMsg,
        issues: this.state.issues,
        iPerPage: this.state.iPerPage,
        submitChanges: this.submitChanges,
        selectSingleRow: this.selectSingleRow,
        cancelSingleRow: this.cancelSingleRow,
        deleteSingleRow: this.deleteSingleRow,
        selectAll: this.selectAll,
        selectDelAll: this.selectDelAll,
        unSelectDelAll: this.unSelectDelAll,
        cancelAll: this.cancelAll
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_OffCanvasMenu_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        width: 160,
        transitionDuration: 200,
        position: "left",
        effect: "push",
        isMenuOpened: this.state.filterOn,
        filterClear: this.state.filterClear,
        iFilter: this.iFilter,
        canvasToggle: this.canvasToggle
      }));
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var mainNode = document.getElementById('main');
react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Main, null), mainNode);
if (false) {}

/***/ }),

/***/ "./src/OffCanvasBody.jsx":
/*!*******************************!*\
  !*** ./src/OffCanvasBody.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.jsx */ "./src/Header.jsx");
/* harmony import */ var _Paginator_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Paginator.jsx */ "./src/Paginator.jsx");
/* harmony import */ var _TableOfIssues_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TableOfIssues.jsx */ "./src/TableOfIssues.jsx");
/* harmony import */ var _AlertMsg_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AlertMsg.jsx */ "./src/AlertMsg.jsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// OffCanvasBody.jsx







var OffCanvasBody = function OffCanvasBody(props) {
  var width = props.width;
  var transitionDuration = props.transitionDuration;
  var isMenuOpened = props.isMenuOpened;
  var position = props.position;
  var effect = props.effect;
  var translateX = position === "left" ? 0 : 0;
  var closedStyle = {
    transitionDuration: transitionDuration + "ms",
    transform: "translate(" + translateX + "px, 0px)",
    backfaceVisibility: "hidden"
  }; // open state style

  var translateOpenX = position === "left" ? width : -1 * width;
  translateOpenX = effect === "parallax" ? translateOpenX / 2 : translateOpenX;
  translateOpenX = effect === "overlay" ? 0 : translateOpenX;
  var openStyle = {
    transform: "translate(" + translateOpenX + "px, 0px)"
  }; // create current state styles

  var currStyle = Object.assign({}, closedStyle);

  if (isMenuOpened) {
    currStyle = Object.assign({}, currStyle, openStyle);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: _objectSpread({}, currStyle)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    refreshPage: props.refreshPage,
    canvasToggle: props.canvasToggle,
    iFilter: props.iFilter,
    maxPageNum: props.maxPageNum,
    pageGo: props.pageGo,
    setAlert: props.setAlert
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Paginator_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    actualPage: props.actualPage,
    maxPageNum: props.maxPageNum,
    pageGo: props.pageGo
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AlertMsg_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setAlert: props.setAlert,
    alertMsg: props.alertMsg,
    alertShow: props.alertShow,
    normalMsg: props.normalMsg
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableOfIssues_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    issues: props.issues,
    actualPage: props.actualPage,
    iPerPage: props.iPerPage,
    refreshPage: props.refreshPage,
    submitChanges: props.submitChanges,
    selectSingleRow: props.selectSingleRow,
    cancelSingleRow: props.cancelSingleRow,
    deleteSingleRow: props.deleteSingleRow,
    selectAll: props.selectAll,
    selectDelAll: props.selectDelAll,
    unSelectDelAll: props.unSelectDelAll,
    cancelAll: props.cancelAll
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Paginator_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    actualPage: props.actualPage,
    maxPageNum: props.maxPageNum,
    pageGo: props.pageGo
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " Source: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/noiffion/Itracker.git",
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-github",
    style: {
      fontSize: '24px'
    }
  }))));
};

OffCanvasBody.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  transitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  isMenuOpened: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  position: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["left", "right"]),
  effect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["push", "parallax", "overlay"]),
  refreshPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  canvasToggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  iFilter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  pageGo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setAlert: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  actualPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  maxPageNum: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  alertMsg: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  alertShow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  normalMsg: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  issues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  iPerPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  submitChanges: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  selectSingleRow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  cancelSingleRow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  deleteSingleRow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  selectAll: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  selectDelAll: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  unSelectDelAll: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  cancelAll: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (OffCanvasBody);

/***/ }),

/***/ "./src/OffCanvasMenu.jsx":
/*!*******************************!*\
  !*** ./src/OffCanvasMenu.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Filter_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Filter.jsx */ "./src/Filter.jsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// OffCanvasMenu.jsx




var OffCanvasMenu = function OffCanvasMenu(props) {
  var width = props.width;
  var transitionDuration = props.transitionDuration;
  var isMenuOpened = props.isMenuOpened;
  var position = props.position;
  var effect = props.effect;
  var left = position === "left" ? -1 * width + "px" : "auto";
  var right = position === "left" ? "auto" : -1 * width + "px";
  var translateX = position === "left" ? -1 * width : 0;
  var closedStyle = {
    width: width + "px",
    position: "fixed",
    top: "0px",
    left: left,
    right: right,
    transform: "translate(" + translateX + "px, 0px)",
    transitionDuration: transitionDuration + "ms",
    backfaceVisibility: "hidden"
  }; // open state style

  var translateOpenX = position === "left" ? width : -1 * width;
  var openStyle = {
    transform: "translate(" + translateOpenX + "px, 0px)"
  }; // create current state styles

  var currStyle = Object.assign({}, closedStyle);

  if (isMenuOpened) {
    currStyle = Object.assign({}, currStyle, openStyle);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: _objectSpread({}, currStyle)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Filter_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    iFilter: props.iFilter,
    canvasToggle: props.canvasToggle,
    filterClear: props.filterClear
  }));
};

OffCanvasMenu.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  transitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  isMenuOpened: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  filterClear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  position: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["left", "right"]),
  effect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["push", "parallax", "overlay"])
};
/* harmony default export */ __webpack_exports__["default"] = (OffCanvasMenu);

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
/* harmony import */ var react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Pagination */ "./node_modules/react-bootstrap/Pagination.js");
/* harmony import */ var react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_2__);




var Paginator = function Paginator(props) {
  var pageGo = props.pageGo;
  var actPg = props.actualPage;
  var max = props.maxPageNum;
  var pagItems = [];
  var pagiDisplay;

  var arrFill = function arrFill(till, current) {
    if (current === till) return;

    if (current === actPg) {
      pagItems.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
        key: current + 1,
        active: true
      }, current + 1));
    } else {
      pagItems.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
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
    pagiDisplay = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
      active: true
    }, actPg + 1);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "paginators"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
    onClick: function onClick() {
      return pageGo(0);
    }
  }, " 1 "), "\xA0\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_2___default.a.Prev, {
    onClick: function onClick() {
      return actPg > 0 ? pageGo(actPg - 1) : pageGo(0);
    }
  }), pagiDisplay, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_2___default.a.Next, {
    onClick: function onClick() {
      return actPg < max - 1 ? pageGo(actPg + 1) : pageGo(max - 1);
    }
  }), "\xA0\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
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
/* harmony import */ var _RowSelect_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RowSelect.jsx */ "./src/RowSelect.jsx");
// Row.jsx





var Row = function Row(props) {
  var selected = props.issue.selected;
  var rowNormal = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RowNormal_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    issue: props.issue,
    selectSingleRow: props.selectSingleRow
  });
  var rowSelect = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RowSelect_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    issue: props.issue,
    cancelSingleRow: props.cancelSingleRow,
    deleteSingleRow: props.deleteSingleRow,
    selectSingleRow: props.selectSingleRow
  });
  return selected ? rowSelect : rowNormal;
};

Row.propTypes = {
  issue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  selectSingleRow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  cancelSingleRow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  deleteSingleRow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Row);

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

/***/ "./src/RowSelEdDel.jsx":
/*!*****************************!*\
  !*** ./src/RowSelEdDel.jsx ***!
  \*****************************/
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
// RowSelEdDel.jsx




var BeingEdited = function BeingEdited(props) {
  var stateOptions = function stateOptions() {
    var states = ['New', 'Open', 'Assigned', 'Fixed', 'Verified', 'Closed'];
    var options = states.map(function (state, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        key: state + i
      }, " ", state, " ");
    });
    return options;
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

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "issueId",
    title: props.iss._id
  }, props.iss._id.substr(-4)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "issueState"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Control, {
    name: props.iss._id + 'state',
    size: "sm",
    as: "select",
    defaultValue: props.iss.state
  }, stateOptions())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
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
    as: "select",
    defaultValue: props.iss.effort
  }, optionMaker('effort'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
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

/***/ "./src/RowSelect.jsx":
/*!***************************!*\
  !*** ./src/RowSelect.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RowSelEdDel_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RowSelEdDel.jsx */ "./src/RowSelEdDel.jsx");
// RowSelect.jsx




var RowSelect = function RowSelect(props) {
  var del = props.issue.selected === 'delete';
  var beingEdited = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RowSelEdDel_jsx__WEBPACK_IMPORTED_MODULE_2__["BeingEdited"], {
    iss: props.issue,
    deleteSingleRow: props.deleteSingleRow,
    cancelSingleRow: props.cancelSingleRow
  });
  var beingDeleted = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RowSelEdDel_jsx__WEBPACK_IMPORTED_MODULE_2__["BeingDeleted"], {
    iss: props.issue,
    cancelDelete: props.selectSingleRow,
    cancelSingleRow: props.cancelSingleRow
  });
  return del ? beingDeleted : beingEdited;
};

RowSelect.propTypes = {
  issue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  deleteSingleRow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  cancelSingleRow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (RowSelect);

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
/* harmony import */ var _tableButtons_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tableButtons.jsx */ "./src/tableButtons.jsx");
// TableOfIssues.jsx







var TableOfIssues = function TableOfIssues(props) {
  var p = props;
  var actual = props.actualPage;
  var iPerPage = props.iPerPage;
  var issueRows = [];
  var ind = -1;
  var anyEdit = false;
  p.issues.forEach(function (issue) {
    if (issue.filteredIn) {
      ind++;

      if (ind >= actual * iPerPage && ind < actual * iPerPage + iPerPage) {
        issue.onScreen = true;
        issueRows.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Row_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: issue._id,
          issue: issue,
          selectSingleRow: props.selectSingleRow,
          cancelSingleRow: props.cancelSingleRow,
          deleteSingleRow: props.deleteSingleRow
        }));
      } else {
        issue.onScreen = false;
        issue.selected = '';
      }
    }

    if (issue.selected) anyEdit = true;
  });
  var tB = Object(_tableButtons_jsx__WEBPACK_IMPORTED_MODULE_5__["default"])(p.issues, p.selectAll, p.selectDelAll, p.unSelectDelAll, p.cancelAll, p.submitChanges);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a, {
    name: "tableForm",
    onSubmit: function onSubmit(event) {
      return event.preventDefault();
    }
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


function tableButtons(issues, selectAll, selectDelAll, unSelectDelAll, cancelAll, submitChanges) {
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
  var selected = issues.filter(function (issue) {
    return issue.selected;
  });
  var allSelectedDelete = selected.every(function (issue) {
    return issue.selected === 'delete';
  });
  var editTable = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "submit",
    title: "Submit",
    onClick: submitChanges,
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