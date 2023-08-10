(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/saleProduct/index"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/saleProduct/index.jsx?taro&type=script&parse=PAGE&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./src/pages/saleProduct/index.jsx?taro&type=script&parse=PAGE& ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class, _class2, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.2.17@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/_@tarojs_redux@2.2.17@@tarojs/redux/index.js");

__webpack_require__(/*! ./index.scss */ "./src/pages/saleProduct/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 备忘录页面
var SaleProduct = (_dec = (0, _redux.connect)(function (_ref) {
  var home = _ref.home,
      product = _ref.product;

  return _extends({}, home, product);
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(SaleProduct, _BaseComponent);

  function SaleProduct() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, SaleProduct);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = SaleProduct.__proto__ || Object.getPrototypeOf(SaleProduct)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["$compid__15"], _this.customComponents = ["Header"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SaleProduct, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(SaleProduct.prototype.__proto__ || Object.getPrototypeOf(SaleProduct.prototype), '_constructor', this).call(this, props);
      this.state = {};
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__15"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__15 = _genCompid2[0],
          $compid__15 = _genCompid2[1];

      this.anonymousFunc0 = function () {
        _taroWeapp2.default.showToast({
          title: '来了，老铁',
          icon: 'none',
          duration: 2000
        });
      };

      _taroWeapp.propsManager.set({
        "title": '备忘录',
        "backgroundColor": "linear-gradient(rgba(0, 169, 255, 0.5), rgba(0, 196, 255, 0.5))"
      }, $compid__15, $prevCompid__15);
      Object.assign(this.__state, {
        $compid__15: $compid__15
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(e) {
      ;
    }
  }]);

  return SaleProduct;
}(_taroWeapp.Component), _class2.$$events = ["anonymousFunc0"], _class2.$$componentPath = "pages/saleProduct/index", _temp2)) || _class);
exports.default = SaleProduct;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.2.17@@tarojs/taro-weapp/index.js").default.createComponent(SaleProduct, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/aiyong/Desktop/workspace/Leah/src!./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/saleProduct/index.jsx?taro&type=template&parse=PAGE&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/aiyong/Desktop/workspace/Leah/src!./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./src/pages/saleProduct/index.jsx?taro&type=template&parse=PAGE& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/saleProduct/index.wxml";

/***/ }),

/***/ "./src/pages/saleProduct/index.jsx":
/*!*****************************************!*\
  !*** ./src/pages/saleProduct/index.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=PAGE& */ "./src/pages/saleProduct/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=PAGE& */ "./src/pages/saleProduct/index.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/saleProduct/index.jsx?taro&type=script&parse=PAGE&":
/*!**********************************************************************!*\
  !*** ./src/pages/saleProduct/index.jsx?taro&type=script&parse=PAGE& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./index.jsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/saleProduct/index.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/saleProduct/index.jsx?taro&type=template&parse=PAGE&":
/*!************************************************************************!*\
  !*** ./src/pages/saleProduct/index.jsx?taro&type=template&parse=PAGE& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_aiyong_Desktop_workspace_Leah_src_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/aiyong/Desktop/workspace/Leah/src!../../../node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./index.jsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/aiyong/Desktop/workspace/Leah/src!./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/saleProduct/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_aiyong_Desktop_workspace_Leah_src_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_aiyong_Desktop_workspace_Leah_src_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_aiyong_Desktop_workspace_Leah_src_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_aiyong_Desktop_workspace_Leah_src_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/saleProduct/index.scss":
/*!******************************************!*\
  !*** ./src/pages/saleProduct/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/saleProduct/index.jsx","runtime","taro","vendors"]]]);