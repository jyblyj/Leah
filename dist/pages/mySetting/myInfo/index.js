(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/mySetting/myInfo/index"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mySetting/myInfo/index.jsx?taro&type=script&parse=COMPONENT&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./src/pages/mySetting/myInfo/index.jsx?taro&type=script&parse=COMPONENT& ***!
  \*********************************************************************************************************************************************************************************************/
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

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.2.17@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./index.scss */ "./src/pages/mySetting/myInfo/index.scss");

var _index = __webpack_require__(/*! ../../../utils/index */ "./src/utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 我的信息
 */

var MyInfo = (_temp2 = _class = function (_Taro$Component) {
  _inherits(MyInfo, _Taro$Component);

  function MyInfo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MyInfo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyInfo.__proto__ || Object.getPrototypeOf(MyInfo)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["myInfo", "myList", "redDot", "dfLogin", "wxLogin", "shopList", "needFresh", "checkDFLogin", "serviceEnd", "__fn_onClick"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyInfo, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(MyInfo.prototype.__proto__ || Object.getPrototypeOf(MyInfo.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var _props = this.__props,
          dfLogin = _props.dfLogin,
          wxLogin = _props.wxLogin,
          shopList = _props.shopList,
          needFresh = _props.needFresh,
          checkDFLogin = _props.checkDFLogin,
          serviceEnd = _props.serviceEnd;

      var _useState = (0, _taroWeapp.useState)({
        vipFlag: '0',
        endTime: '',
        loginId: ''
      }),
          _useState2 = _slicedToArray(_useState, 2),
          myInfo = _useState2[0],
          setMyInfo = _useState2[1];
      //  要不要红点


      var _useState3 = (0, _taroWeapp.useState)(false),
          _useState4 = _slicedToArray(_useState3, 2),
          redDot = _useState4[0],
          setRedDot = _useState4[1];

      var _useState5 = (0, _taroWeapp.useState)([{
        name: '厂商',
        code: 'my_shop_click',
        value: shopList.length
      }, {
        name: '收藏',
        code: 'my_collect_click',
        value: 0
      }, {
        name: '积分',
        code: 'my_integral_click',
        value: 0
      }, {
        name: '账户',
        code: 'my_current_click',
        value: 0
      }]),
          _useState6 = _slicedToArray(_useState5, 2),
          myList = _useState6[0],
          setMyList = _useState6[1];

      (0, _taroWeapp.useEffect)(function () {
        if (dfLogin) {
          getData();
        }
      }, [dfLogin]);

      (0, _taroWeapp.useEffect)(function () {
        if (needFresh) {
          getData();
        }
      }, [needFresh]);

      (0, _taroWeapp.useEffect)(function () {
        setMyList(function (list) {
          list[0].value = shopList.length;
          return list;
        });
      }, [shopList]);

      var getData = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        return function getData() {
          return _ref2.apply(this, arguments);
        };
      }();

      var text = '';

      var noticeStyle = {
        position: 'relative',
        margin: '0 36px',
        padding: '12px 40px',
        fontSize: '18px',
        borderRadius: '10px 10px 0 0',
        color: '#333',
        background: 'linear-gradient(#CDA947, #EACC7C)',
        textAlign: 'center'
      };

      Object.assign(this.__state, {
        myInfo: myInfo,
        myList: myList,
        redDot: redDot
      });
      return this.__state;
    }
  }, {
    key: "funPrivatehzzzz",
    value: function funPrivatehzzzz() {
      return this.props.checkDFLogin.apply(undefined, Array.prototype.slice.call(arguments, 1));
    }
  }]);

  return MyInfo;
}(_taroWeapp2.default.Component), _class.$$events = ["funPrivatehzzzz"], _class.$$componentPath = "pages/mySetting/myInfo/index", _temp2);


MyInfo.defaultProps = {
  dfLogin: false,
  needFresh: false,
  wxLogin: false,
  shopList: [],
  checkDFLogin: _index.NOOP
};

exports.default = MyInfo;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.2.17@@tarojs/taro-weapp/index.js").default.createComponent(MyInfo));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/aiyong/Desktop/workspace/Leah/src!./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mySetting/myInfo/index.jsx?taro&type=template&parse=COMPONENT&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/aiyong/Desktop/workspace/Leah/src!./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./src/pages/mySetting/myInfo/index.jsx?taro&type=template&parse=COMPONENT& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/mySetting/myInfo/index.wxml";

/***/ }),

/***/ "./src/pages/mySetting/myInfo/index.jsx":
/*!**********************************************!*\
  !*** ./src/pages/mySetting/myInfo/index.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=COMPONENT& */ "./src/pages/mySetting/myInfo/index.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=COMPONENT& */ "./src/pages/mySetting/myInfo/index.jsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/mySetting/myInfo/index.jsx?taro&type=script&parse=COMPONENT&":
/*!********************************************************************************!*\
  !*** ./src/pages/mySetting/myInfo/index.jsx?taro&type=script&parse=COMPONENT& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./index.jsx?taro&type=script&parse=COMPONENT& */ "./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mySetting/myInfo/index.jsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/mySetting/myInfo/index.jsx?taro&type=template&parse=COMPONENT&":
/*!**********************************************************************************!*\
  !*** ./src/pages/mySetting/myInfo/index.jsx?taro&type=template&parse=COMPONENT& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_aiyong_Desktop_workspace_Leah_src_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/aiyong/Desktop/workspace/Leah/src!../../../../node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./index.jsx?taro&type=template&parse=COMPONENT& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/aiyong/Desktop/workspace/Leah/src!./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mySetting/myInfo/index.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_aiyong_Desktop_workspace_Leah_src_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_aiyong_Desktop_workspace_Leah_src_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_aiyong_Desktop_workspace_Leah_src_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_aiyong_Desktop_workspace_Leah_src_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/mySetting/myInfo/index.scss":
/*!***********************************************!*\
  !*** ./src/pages/mySetting/myInfo/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/mySetting/myInfo/index.jsx","runtime","taro","vendors","common"]]]);