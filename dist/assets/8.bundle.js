(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/geotiff/dist-module/compression/deflate.js":
/*!*****************************************************************!*\
  !*** ./node_modules/geotiff/dist-module/compression/deflate.js ***!
  \*****************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DeflateDecoder; });\n/* harmony import */ var pako__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pako */ \"./node_modules/geotiff/node_modules/pako/dist/pako.esm.mjs\");\n/* harmony import */ var _basedecoder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basedecoder.js */ \"./node_modules/geotiff/dist-module/compression/basedecoder.js\");\n\n\n\nclass DeflateDecoder extends _basedecoder_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"] {\n  decodeBlock(buffer) {\n    return Object(pako__WEBPACK_IMPORTED_MODULE_0__[/* inflate */ \"a\"])(new Uint8Array(buffer)).buffer;\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/geotiff/dist-module/compression/deflate.js?");

/***/ })

}]);