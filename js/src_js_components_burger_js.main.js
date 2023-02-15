"use strict";
(self["webpackChunkgulp_builder"] = self["webpackChunkgulp_builder"] || []).push([["src_js_components_burger_js"],{

/***/ "./src/js/components/burger.js":
/*!*************************************!*\
  !*** ./src/js/components/burger.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

if (_vars__WEBPACK_IMPORTED_MODULE_0__["default"].$burger) {
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$burger.addEventListener('click', () => {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$pageBody.classList.add('stop-scroll');
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$right.classList.add('header__right--visible');
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$burger.classList.add('burger--active');
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$navClose.addEventListener('click', () => {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$pageBody.classList.remove('stop-scroll');
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$right.classList.remove('header__right--visible');
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$burger.classList.remove('burger--active');
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$nav.addEventListener('click', e => {
    if (e.target.classList.contains('nav__link')) {
      _vars__WEBPACK_IMPORTED_MODULE_0__["default"].$right.classList.remove('header__right--visible');
    }
  });
}

/***/ })

}]);
//# sourceMappingURL=src_js_components_burger_js.main.js.map