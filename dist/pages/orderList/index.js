(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/orderList/index"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/orderList/index.jsx?taro&type=script&parse=PAGE&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./src/pages/orderList/index.jsx?taro&type=script&parse=PAGE& ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class, _class2, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.2.17@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/_@tarojs_redux@2.2.17@@tarojs/redux/index.js");

var _index = __webpack_require__(/*! ../../utils/index */ "./src/utils/index.js");

var _constant = __webpack_require__(/*! ./constant */ "./src/pages/orderList/constant.js");

__webpack_require__(/*! ./index.scss */ "./src/pages/orderList/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PAGE_LIST = [{ name: '小红', jacketNums: 1, pantsNums: 21, counts: 0 }, { name: '小橙', jacketNums: 2, pantsNums: 22, counts: 0 }, { name: '小黄', jacketNums: 3, pantsNums: 23, counts: 0 }, { name: '小绿', jacketNums: 4, pantsNums: 24, counts: 0 }, { name: '小青', jacketNums: 5, pantsNums: 25, counts: 0 }, { name: '小蓝', jacketNums: 6, pantsNums: 26, counts: 0 }, { name: '小紫', jacketNums: 7, pantsNums: 27, counts: 0 }];

/**
 * 统计列表页面
 */
var Order = (_dec = (0, _redux.connect)(function (_ref) {
  var home = _ref.home,
      order = _ref.order;

  return _extends({}, home, order);
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Order, _BaseComponent);

  function Order() {
    var _ref2,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Order);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Order.__proto__ || Object.getPrototypeOf(Order)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "loopArray25", "$compid__79", "$compid__80", "$compid__81", "tabList", "PAGE_LIST", "currentTab", "orderList"], _this.pageNo = 1, _this.pageSize = _constant.PAGE_SIZE, _this.config = {
      enablePullDownRefresh: false,
      disableScroll: true
      // 小程序下拉刷新
    }, _this.onRefresh = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("onRefresh");

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.onScrollToLower = function () {
      var orderList = _this.props.orderList;
    }, _this.searchValueChange = function () {}, _this.searchOrder = function () {}, _this.anonymousFunc0Map = {}, _this.customComponents = ["Header", "AtSearchBar"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Order, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Order.prototype.__proto__ || Object.getPrototypeOf(Order.prototype), "_constructor", this).call(this, props);
      this.state = {
        tabList: [{ title: '姓名', orderStatus: '0', code: 'daicaigou_show' }, { title: '日期', orderStatus: '1', code: 'daifahuo_show' }, { title: '上衣', orderStatus: '2', code: 'yifahuo_show' }, { title: '裤子', orderStatus: '4', code: 'tuikunzhong_show' }, { title: '合计', orderStatus: '5', code: 'yiguanbi_show' }, { title: '详情', orderStatus: '3', code: 'yichenggong_show' }],
        currentTab: 0 // 当前选中的tab索引
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }

    // 触底加载

  }, {
    key: "_createData",
    value: function _createData() {
      var _this3 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__79"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__79 = _genCompid2[0],
          $compid__79 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__80"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__80 = _genCompid4[0],
          $compid__80 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__81"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__81 = _genCompid6[0],
          $compid__81 = _genCompid6[1];

      var tabList = this.__state.tabList;


      var anonymousState__temp = "calc(100vh - " + ((0, _index.getNavBarHeight)() + 80) + "px)";
      var loopArray25 = PAGE_LIST.map(function (listItem, listIndex) {
        listItem = {
          $original: (0, _taroWeapp.internal_get_original)(listItem)
        };

        var _$indexKey = "bbzzz" + listIndex;

        _this3.anonymousFunc0Map[_$indexKey] = function () {
          _taroWeapp2.default.showToast({
            title: '可修改每道工序的单价',
            icon: 'none',
            duration: 2000
          });
        };

        return {
          _$indexKey: _$indexKey,
          $original: listItem.$original
        };
      });
      _taroWeapp.propsManager.set({
        "title": '统计列表',
        "backgroundColor": "linear-gradient(rgba(0, 169, 255, 0.5), rgba(0, 196, 255, 0.5))"
      }, $compid__79, $prevCompid__79);
      _taroWeapp.propsManager.set({
        "placeholder": '输入要搜索的姓名',
        "onActionClick": this.searchOrder,
        "value": '',
        "onChange": this.searchValueChange,
        "onConfirm": this.searchOrder
      }, $compid__80, $prevCompid__80);
      _taroWeapp.propsManager.set({
        "className": "page-list-box",
        "height": anonymousState__temp
      }, $compid__81, $prevCompid__81);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        loopArray25: loopArray25,
        $compid__79: $compid__79,
        $compid__80: $compid__80,
        $compid__81: $compid__81,
        PAGE_LIST: PAGE_LIST
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }]);

  return Order;
}(_taroWeapp.Component), _class2.$$events = ["anonymousFunc0"], _class2.$$componentPath = "pages/orderList/index", _temp2)) || _class);
exports.default = Order;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.2.17@@tarojs/taro-weapp/index.js").default.createComponent(Order, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/aiyong/Desktop/workspace/Leah/src!./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/orderList/index.jsx?taro&type=template&parse=PAGE&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/aiyong/Desktop/workspace/Leah/src!./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./src/pages/orderList/index.jsx?taro&type=template&parse=PAGE& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/orderList/index.wxml";

/***/ }),

/***/ "./src/pages/orderList/constant.js":
/*!*****************************************!*\
  !*** ./src/pages/orderList/constant.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var PAGE_SIZE = exports.PAGE_SIZE = 5; // 订单一页请求多少个

/***/ }),

/***/ "./src/pages/orderList/index.jsx":
/*!***************************************!*\
  !*** ./src/pages/orderList/index.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=PAGE& */ "./src/pages/orderList/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=PAGE& */ "./src/pages/orderList/index.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/orderList/index.jsx?taro&type=script&parse=PAGE&":
/*!********************************************************************!*\
  !*** ./src/pages/orderList/index.jsx?taro&type=script&parse=PAGE& ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./index.jsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/orderList/index.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/orderList/index.jsx?taro&type=template&parse=PAGE&":
/*!**********************************************************************!*\
  !*** ./src/pages/orderList/index.jsx?taro&type=template&parse=PAGE& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_aiyong_Desktop_workspace_Leah_src_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/aiyong/Desktop/workspace/Leah/src!../../../node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./index.jsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/aiyong/Desktop/workspace/Leah/src!./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/orderList/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_aiyong_Desktop_workspace_Leah_src_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_aiyong_Desktop_workspace_Leah_src_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_aiyong_Desktop_workspace_Leah_src_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_aiyong_Desktop_workspace_Leah_src_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/orderList/index.scss":
/*!****************************************!*\
  !*** ./src/pages/orderList/index.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/orderList/index.jsx","runtime","taro","vendors","common"]]]);