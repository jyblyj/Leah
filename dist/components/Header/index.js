(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/Header/index"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/Header/index.jsx?taro&type=script&parse=COMPONENT&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./src/components/Header/index.jsx?taro&type=script&parse=COMPONENT& ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.2.17@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./index.scss */ "./src/components/Header/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 自定义小程序头部导航栏
 * @param {string} title           导航栏标题
 * @param {string} backgroundColor 背景色
 * @param {object} customStyle     自定义样式
 */

var Header = (_temp2 = _class = function (_Taro$Component) {
  _inherits(Header, _Taro$Component);

  function Header() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "_$anonymousState__temp", "_$anonymousState__temp2", "title", "customStyle", "backgroundColor"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Header, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Header.prototype.__proto__ || Object.getPrototypeOf(Header.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _$anonymousState__temp, _$anonymousState__temp2;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var _props = this.__props,
          title = _props.title,
          customStyle = _props.customStyle,
          backgroundColor = _props.backgroundColor;


      var app = _taroWeapp2.default.getApp();
      var _app$globalData = app.globalData,
          _app$globalData$navBa = _app$globalData.navBarHeight,
          navBarHeight = _app$globalData$navBa === undefined ? 60 : _app$globalData$navBa,
          _app$globalData$menuB = _app$globalData.menuBottom,
          menuBottom = _app$globalData$menuB === undefined ? 4 : _app$globalData$menuB,
          _app$globalData$menuH = _app$globalData.menuHeight,
          menuHeight = _app$globalData$menuH === undefined ? 32 : _app$globalData$menuH;


      var style = _extends({
        height: navBarHeight + "px",
        background: backgroundColor
      }, customStyle);

      var anonymousState__temp = _taroWeapp2.default.getEnv() === 'WEAPP';
      if (anonymousState__temp) {
        _$anonymousState__temp = (0, _taroWeapp.internal_inline_style)(style);
        _$anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)({ height: menuHeight + "px", lineHeight: menuHeight + "px", bottom: menuBottom + 4 + "px" });
      }
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        _$anonymousState__temp: _$anonymousState__temp,
        _$anonymousState__temp2: _$anonymousState__temp2,
        title: title
      });
      return this.__state;
    }
  }]);

  return Header;
}(_taroWeapp2.default.Component), _class.$$events = [], _class.$$componentPath = "components/Header/index", _temp2);


Header.defaultProps = {
  title: '',
  backgroundColor: 'linear-gradient(#EA4d2C, #FFA62E)',
  customStyle: {}
};

exports.default = Header;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.2.17@@tarojs/taro-weapp/index.js").default.createComponent(Header));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/aiyong/Desktop/workspace/Leah/src!./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/Header/index.jsx?taro&type=template&parse=COMPONENT&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/aiyong/Desktop/workspace/Leah/src!./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./src/components/Header/index.jsx?taro&type=template&parse=COMPONENT& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "components/Header/index.wxml";

/***/ }),

/***/ "./src/components/Header/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=COMPONENT& */ "./src/components/Header/index.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=COMPONENT& */ "./src/components/Header/index.jsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/components/Header/index.jsx?taro&type=script&parse=COMPONENT&":
/*!***************************************************************************!*\
  !*** ./src/components/Header/index.jsx?taro&type=script&parse=COMPONENT& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./index.jsx?taro&type=script&parse=COMPONENT& */ "./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/Header/index.jsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/Header/index.jsx?taro&type=template&parse=COMPONENT&":
/*!*****************************************************************************!*\
  !*** ./src/components/Header/index.jsx?taro&type=template&parse=COMPONENT& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_aiyong_Desktop_workspace_Leah_src_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/aiyong/Desktop/workspace/Leah/src!../../../node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./index.jsx?taro&type=template&parse=COMPONENT& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/aiyong/Desktop/workspace/Leah/src!./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/Header/index.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_aiyong_Desktop_workspace_Leah_src_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_aiyong_Desktop_workspace_Leah_src_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_aiyong_Desktop_workspace_Leah_src_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_aiyong_Desktop_workspace_Leah_src_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/Header/index.scss":
/*!******************************************!*\
  !*** ./src/components/Header/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/components/Header/index.jsx","runtime","taro","vendors"]]]);