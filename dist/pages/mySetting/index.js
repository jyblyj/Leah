(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/mySetting/index"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mySetting/index.jsx?taro&type=script&parse=PAGE&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./src/pages/mySetting/index.jsx?taro&type=script&parse=PAGE& ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.2.17@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./index.scss */ "./src/pages/mySetting/index.scss");

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/_@tarojs_redux@2.2.17@@tarojs/redux/index.js");

var _index = __webpack_require__(/*! ../../utils/index */ "./src/utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 设置页
 */
var MySetting = (_dec = (0, _redux.connect)(function (_ref) {
  var home = _ref.home;
  return home;
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(MySetting, _BaseComponent);

  function MySetting() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, MySetting);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = MySetting.__proto__ || Object.getPrototypeOf(MySetting)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "$compid__16", "$compid__17", "$compid__18", "$compid__19", "$compid__20"], _this.onRefresh = function () {}, _this.customComponents = ["Header", "ScrollList", "MyInfo", "AtList", "AtListItem"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MySetting, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(MySetting.prototype.__proto__ || Object.getPrototypeOf(MySetting.prototype), '_constructor', this).call(this, props);
      this.state = {};
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
    // 分享微信好友

  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(obj) {
      return {
        title: '一曲肝肠断,天涯何处觅知音？',
        path: '/pages/index/index',
        imageUrl: 'https://www.baidu.com/link?url=lTZ00oI4P-Rk0HvaMR_u7iSsVP9F0omVMpdBniDrOOlH-3HEgKacVcPzbVC0xVLRgi3xPPxWhLrlIS-1Wo_U9nqB2ddzE2UzGcw7Y2kqAXYeXUxq_xXGkA6jBJzy6tuMxghTmzRPw29lrAfndPlqwAjX0xGsGcoS1uYpAqS7kgCeghJE7sZ0AcYHy2492DtWxgdnyvEn7BExyrd8XeARd58_uqrtJJXGwPi70midlS-YtYf68gQx6dwNtlE24mvfPndiUx_CTFiDykPe5ji1G8dxqS94LHsctWw8wGMHIVNiAUah7fRSy6DXY_g2JGSp4Wae02h-YGlICOtqro-rOlxv4u9NvhZXCJpJGbS7xF1gLAGivtuqWPOi4Eos6O8JqgMryB5JOA3nlK8KTeP3IQpaS9PjzeAvJCmj9HW0bo1Ecbw9rI5X5roQSBkWcjvjqc3iGfj17_FBKIyYoEoxqsIhMUQK4VzM-RzEDjbaeJg9ejZwWDEEtSpN1e3CpvS03ExMVH3j_H9GP4EHjW2c_72Lj_r-C5_qSvneoyLr5ECTStu79ohuijJGIgoiqDOkWtcpuFbtPCFfxehl3AwIAHiDtlrNRB1s7mOX6GoGo8fyjQYPKFR0lSMHSVy6cqJzQxSeLm5RKkuWwAcugnDX5_&wd=&eqid=89bce2b40000a8d50000000464d35b81'
      };
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__16"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__16 = _genCompid2[0],
          $compid__16 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__17"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__17 = _genCompid4[0],
          $compid__17 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__18"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__18 = _genCompid6[0],
          $compid__18 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__19"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__19 = _genCompid8[0],
          $compid__19 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__20"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__20 = _genCompid10[0],
          $compid__20 = _genCompid10[1];

      var anonymousState__temp = "calc(100vh - " + (0, _index.getNavBarHeight)() + "px)";
      var anonymousState__temp2 = [];
      _taroWeapp.propsManager.set({
        "backgroundColor": "linear-gradient(rgba(0, 145, 255, 0.5), rgba(0, 169, 255, 0.5))"
      }, $compid__16, $prevCompid__16);
      _taroWeapp.propsManager.set({
        "height": anonymousState__temp,
        "refresherEnabled": true,
        "refresherDefaultStyle": "white",
        "refresherBackground": "rgba(0, 169, 255, 0.5)",
        "onRefresherRefresh": this.onRefresh
      }, $compid__17, $prevCompid__17);
      _taroWeapp.propsManager.set({
        "shopList": anonymousState__temp2,
        "dfLogin": false,
        "wxLogin": false,
        "needFresh": false,
        "serviceEnd": '2024-01-01'
      }, $compid__18, $prevCompid__18);
      _taroWeapp.propsManager.set({
        "className": "my-list"
      }, $compid__19, $prevCompid__19);
      _taroWeapp.propsManager.set({
        "title": '\u5206\u4EAB',
        "arrow": "right"
      }, $compid__20, $prevCompid__20);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        $compid__16: $compid__16,
        $compid__17: $compid__17,
        $compid__18: $compid__18,
        $compid__19: $compid__19,
        $compid__20: $compid__20
      });
      return this.__state;
    }
  }]);

  return MySetting;
}(_taroWeapp.Component), _class2.$$events = [], _class2.$$componentPath = "pages/mySetting/index", _temp2)) || _class);
exports.default = MySetting;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.2.17@@tarojs/taro-weapp/index.js").default.createComponent(MySetting, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/aiyong/Desktop/workspace/Leah/src!./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mySetting/index.jsx?taro&type=template&parse=PAGE&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/aiyong/Desktop/workspace/Leah/src!./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./src/pages/mySetting/index.jsx?taro&type=template&parse=PAGE& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/mySetting/index.wxml";

/***/ }),

/***/ "./src/pages/mySetting/index.jsx":
/*!***************************************!*\
  !*** ./src/pages/mySetting/index.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=PAGE& */ "./src/pages/mySetting/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=PAGE& */ "./src/pages/mySetting/index.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/mySetting/index.jsx?taro&type=script&parse=PAGE&":
/*!********************************************************************!*\
  !*** ./src/pages/mySetting/index.jsx?taro&type=script&parse=PAGE& ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./index.jsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mySetting/index.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/mySetting/index.jsx?taro&type=template&parse=PAGE&":
/*!**********************************************************************!*\
  !*** ./src/pages/mySetting/index.jsx?taro&type=template&parse=PAGE& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_aiyong_Desktop_workspace_Leah_src_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/aiyong/Desktop/workspace/Leah/src!../../../node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./index.jsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/aiyong/Desktop/workspace/Leah/src!./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mySetting/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_aiyong_Desktop_workspace_Leah_src_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_aiyong_Desktop_workspace_Leah_src_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_aiyong_Desktop_workspace_Leah_src_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_aiyong_Desktop_workspace_Leah_src_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/mySetting/index.scss":
/*!****************************************!*\
  !*** ./src/pages/mySetting/index.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/mySetting/index.jsx","runtime","taro","vendors","common"]]]);