/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/firebase/firebase-key.json":
/*!****************************************!*\
  !*** ./src/firebase/firebase-key.json ***!
  \****************************************/
/*! exports provided: type, project_id, private_key_id, private_key, client_email, client_id, auth_uri, token_uri, auth_provider_x509_cert_url, client_x509_cert_url, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"type\\\":\\\"service_account\\\",\\\"project_id\\\":\\\"prodigy-b614e\\\",\\\"private_key_id\\\":\\\"83ab3b1c63597c50ec95fcf47d9c1cdcc66f3f6c\\\",\\\"private_key\\\":\\\"-----BEGIN PRIVATE KEY-----\\\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDZyymAlojj0gtu\\\\n0Z9zpOxq+w7F/oJdNPY/fnh/AU0PuiXaAe/3TYpAJQQQmz8AY1zPIwO5K1XGmg+P\\\\nKPMJIbGy7oz451oz/8Y+9AYqIQ8NlQ7EaU7QvuECDO9CmXbkLCJ/r23jVXHAlJ38\\\\nor7zVJaP1ZECSQGMu8zrdbtFIx3kzfhl61lIMcUoYAzJgEmoqxol4v6iWZIRUR9S\\\\nvGWP0l8JHLVgDPJdbFknEY71kdzlNRDQTxQeLoX4kGJkmkzTnpp6kvWWEdG5KgEG\\\\n+tQMw9xossofCbWNOdkr0SL9sRWAXeDcas4VmFcGwm5i0gJqo+PRDw3PTu0AKCCB\\\\nN5a8ewxrAgMBAAECggEAB1PNySag/P00ZxDEl99WfudROp/fiSNx6qmM6ngqPHTr\\\\ng7EPmD1/gPBd3/GN+V7ebZYEsMANY9M+4ioJoM1STUe37kKmWijpGNwcsWH18v1V\\\\nU/SKpmMNoeqHScsGlEWlDkoVXRHv8+YFuYBMnIld6Wfqt+3dEGJb67FFBCrBMJ3q\\\\nqDGv8jOGjVYQtwsnl/ZE+kNXPOPGN2Ey81p8zrCKBx/R+DBBlJEBpya+XOlGUa1h\\\\nPG3/8JDRO32ST4U/7MhxL2gGJLDkrMaRjCO+W9LXClxzmrxpYYwhx3RX0GO3S6Ot\\\\nZZ1E6wTefVNxd6K7YQ6n//qNT+z9BbWu+I/DY5d/MQKBgQD849t1aHhq2bS+fZv1\\\\nExRfPF9YLgEKhdYvU/C73Y0Ifckgv979qadYxilUtWIZm+2haUIY0UsJ/jRUF+aG\\\\nanJEIPqNqIwRUHkgSVtvoMKR+5mj+Qf6stm1aZIMsuZrI3jRctyB9OkoOi3JZYM8\\\\njO4nEeBHxjILV79GUl7bDFUQ2wKBgQDceNChpiCrHu+1gE4k69j2pPmut7Vju1ZB\\\\nol8b9T8W7z2sGeOy3jgVIaRT4V7uy9/GaRoDHkQMkAqwduZAkqBjUyx1FK4x571Y\\\\nSwojsngm0Q3SN7MFMyjY7j9newqbNGl/O+s8VriZEhbDoc4vU1TyC+wPiF0m0mR6\\\\nNJEOPnW/sQKBgEjlOV5HheZu6L28IVdsb4PgOC+H2z74QzwTOyI8A6o979rj09hU\\\\nretV+5XyTtvI6Z+MYsQamEHCJ71Rwl5ekp92ziJFQlK/Wprm6ldsBInl92yfnSAz\\\\nq7OyQaota2PYrrvZGxzOxuKUmpwiCclLal6StY6a39QLMBSKK9OCY4bfAoGBALWL\\\\nztCtic0fRmiA5NhGVXyUUP3sTLN5OggF+qd9BZyPGIu1LejGUAwmjbh8pr2gp/4r\\\\n4b2bmJF3szWoUuXtV6EyhjNK+j4iA6rG7+yBM6tTDjyCnSm0/PfVB+TgTtWLDSw2\\\\nXPhsuMljOdeST8RsrFA8PQB1W69yJEb1LlU6XZ+hAoGBAPWSPWbEL/iYCb4kLUs7\\\\n2ZpVLKK9Ss2h8vIV7VFoUEZePYBSakAAQoyaHxivIYPWeaFe8dikbO1zyUjART5B\\\\npIsNV0g89i/zFeU5G3IsOtLHskavPvJSJCqJczF32MC7HPlUB9QVivdtIdxcCjiC\\\\nQR3WNddja7mLQhac2fPASfpa\\\\n-----END PRIVATE KEY-----\\\\n\\\",\\\"client_email\\\":\\\"firebase-adminsdk-5i6pd@prodigy-b614e.iam.gserviceaccount.com\\\",\\\"client_id\\\":\\\"108161580343033292316\\\",\\\"auth_uri\\\":\\\"https://accounts.google.com/o/oauth2/auth\\\",\\\"token_uri\\\":\\\"https://oauth2.googleapis.com/token\\\",\\\"auth_provider_x509_cert_url\\\":\\\"https://www.googleapis.com/oauth2/v1/certs\\\",\\\"client_x509_cert_url\\\":\\\"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-5i6pd%40prodigy-b614e.iam.gserviceaccount.com\\\"}\");\n\n//# sourceURL=webpack:///./src/firebase/firebase-key.json?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar jwt = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n\nvar jwks = __webpack_require__(/*! jwks-rsa */ \"jwks-rsa\");\n\nvar firebaseAdmin = __webpack_require__(/*! firebase-admin */ \"firebase-admin\");\n\nvar serviceAccount = __webpack_require__(/*! ../firebase/firebase-key.json */ \"./src/firebase/firebase-key.json\");\n\nvar app = express();\nfirebaseAdmin.initializeApp({\n  credential: firebaseAdmin.credential.cert(serviceAccount),\n  databaseURL: \"https://prodigy-b614e.firebaseio.com\"\n});\napp.use(cors());\napp.use(express[\"static\"]('dist'));\nvar jwtCheck = jwt({\n  secret: jwks.expressJwtSecret({\n    cache: true,\n    rateLimit: true,\n    jwksRequestsPerMinute: 5,\n    jwksUri: \"https://prodigy-gate.auth0.com/.well-known/jwks.json\"\n  }),\n  aud: \"https://prodigy-gate.auth0.com/userinfo\",\n  iss: \"https://prodigy-gate.auth0.com\",\n  alg: 'RS256'\n});\napp.get('/firebase', jwtCheck,\n/*#__PURE__*/\nfunction () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {\n    var uid, firebaseToken;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            uid = req.user.sub;\n            _context.prev = 1;\n            _context.next = 4;\n            return firebaseAdmin.auth().createCustomToken(uid);\n\n          case 4:\n            firebaseToken = _context.sent;\n            res.json({\n              firebaseToken: firebaseToken\n            });\n            firebaseAdmin.auth().updateUser(uid, req.user);\n            _context.next = 12;\n            break;\n\n          case 9:\n            _context.prev = 9;\n            _context.t0 = _context[\"catch\"](1);\n            res.status(500).send({\n              message: 'Something went wrong acquiring a Firebase token.',\n              error: _context.t0\n            });\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 9]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\napp.get('*', function (req, res) {\n  res.sendFile(__dirname + \"/index.html\", function (err) {\n    console.log(err + \"error\");\n  });\n});\napp.listen(3001, function () {\n  return console.log('Server running');\n});\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-jwt\");\n\n//# sourceURL=webpack:///external_%22express-jwt%22?");

/***/ }),

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase-admin\");\n\n//# sourceURL=webpack:///external_%22firebase-admin%22?");

/***/ }),

/***/ "jwks-rsa":
/*!***************************!*\
  !*** external "jwks-rsa" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jwks-rsa\");\n\n//# sourceURL=webpack:///external_%22jwks-rsa%22?");

/***/ })

/******/ });