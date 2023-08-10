require("./runtime");
require("./common");
require("./vendors");
require("./taro");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/_@babel_runtime@7.22.10@@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.22.10@@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _defineProperty;

var _toPropertyKey = __webpack_require__(/*! ./toPropertyKey */ "./node_modules/_@babel_runtime@7.22.10@@babel/runtime/helpers/esm/toPropertyKey.js");

var _toPropertyKey2 = _interopRequireDefault(_toPropertyKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) {
  key = (0, _toPropertyKey2.default)(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.22.10@@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.22.10@@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _objectSpread2;

var _defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/_@babel_runtime@7.22.10@@babel/runtime/helpers/esm/defineProperty.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function (key) {
      (0, _defineProperty2.default)(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.22.10@@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.22.10@@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _toPrimitive;

var _typeof2 = __webpack_require__(/*! ./typeof */ "./node_modules/_@babel_runtime@7.22.10@@babel/runtime/helpers/esm/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toPrimitive(input, hint) {
  if ((0, _typeof3.default)(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0, _typeof3.default)(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.22.10@@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.22.10@@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _toPropertyKey;

var _typeof2 = __webpack_require__(/*! ./typeof */ "./node_modules/_@babel_runtime@7.22.10@@babel/runtime/helpers/esm/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _toPrimitive = __webpack_require__(/*! ./toPrimitive */ "./node_modules/_@babel_runtime@7.22.10@@babel/runtime/helpers/esm/toPrimitive.js");

var _toPrimitive2 = _interopRequireDefault(_toPrimitive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toPropertyKey(arg) {
  var key = (0, _toPrimitive2.default)(arg, "string");
  return (0, _typeof3.default)(key) === "symbol" ? key : String(key);
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.22.10@@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.22.10@@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = _typeof;
function _typeof(obj) {
  "@babel/helpers - typeof";

  return exports.default = _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
  }, _typeof(obj);
}

/***/ }),

/***/ "./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/app.jsx?taro&type=script&parse=ENTRY&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./src/app.jsx?taro&type=script&parse=ENTRY& ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.2.17@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/_@tarojs_redux@2.2.17@@tarojs/redux/index.js");

var _index = __webpack_require__(/*! ./store/index */ "./src/store/index.js");

var _index2 = _interopRequireDefault(_index);

__webpack_require__(/*! ./app.scss */ "./src/app.scss");

var _wxLog = __webpack_require__(/*! ./utils/wxLog */ "./src/utils/wxLog.js");

var _wxLog2 = _interopRequireDefault(_wxLog);

var _index3 = __webpack_require__(/*! ./utils/index */ "./src/utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5') {
//     require('nerv-devtools')
// }

var store = (0, _index2.default)();

(0, _redux.setStore)(store);

if (_redux.ReduxContext.Provider) {
  _redux.ReduxContext.Provider({
    store: store
  });
  _redux.ReduxContext.Provider({
    store: store
  });
}

var _App = function (_BaseComponent) {
  _inherits(_App, _BaseComponent);

  function _App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _App.__proto__ || Object.getPrototypeOf(_App)).call.apply(_ref, [this].concat(args))), _this), _this.store = store, _this.globalData = {}, _this.config = {
      pages: ["pages/index/index", "pages/orderList/index", "pages/source/index", "pages/saleProduct/index", "pages/mySetting/index"],
      // subPackages: [
      //     /** 设置分包 **/
      //     {
      //         root: "packageSetting",
      //         name: "packageSetting",
      //         pages: [
      //             "changeCategory/index",
      //             "distributeSetting/index",
      //             "amountAlert/index",
      //             "syncLog/index",
      //             "myService/index",
      //             "whiteImage/index",
      //             "helpCenter/index",
      //             "helpDetail/index",
      //             "autoPayGuide/index",
      //         ],
      //     },
      //     /** 订单分包 **/
      //     {
      //         root: "packageOrder",
      //         name: "packageOrder",
      //         pages: [
      //             "confirmOrder/index",
      //             "syncOrder/index",
      //             "orderRemark/index",
      //             "batchPayOrder/index",
      //         ],
      //     },
      //     /** 授权教程 店铺 供应商分包 **/
      //     {
      //         root: "packageShop",
      //         name: "packageShop",
      //         pages: [
      //             "guidePage/index",
      //             "shopManage/index",
      //             "webPage/index",
      //             "supplierList/index",
      //             "supplierDetail/index",
      //             "relationProduct/index",
      //             "pddShopAuth/index",
      //             "addShop/index",
      //         ],
      //     },
      // ],
      preloadRule: {
        "pages/index/index": {
          network: "all",
          packages: ["packageOrder", "packageShop", "packageSetting"]
        }
      },
      window: {
        backgroundTextStyle: "light",
        navigationBarBackgroundColor: "#fff",
        navigationBarTitleText: "代发助手",
        navigationStyle: "custom"
      },
      tabBar: {
        // "custom": true,
        color: "#ADADAD",
        selectedColor: "#F37845",
        backgroundColor: "#ffffff",
        borderStyle: "black",
        list: [{
          pagePath: "pages/index/index",
          text: "首页",
          iconPath: "./assets/imgs/home_uncheck.png",
          selectedIconPath: "./assets/imgs/home_check.png"
        }, {
          pagePath: "pages/orderList/index",
          text: "统计",
          iconPath: "./assets/imgs/order_uncheck.png",
          selectedIconPath: "./assets/imgs/order_check.png"
        }, {
          pagePath: "pages/source/index",
          text: "日历",
          iconPath: "./assets/imgs/source_uncheck.png",
          selectedIconPath: "./assets/imgs/source_check.png"
        }, {
          pagePath: "pages/saleProduct/index",
          text: "备忘",
          iconPath: "./assets/imgs/product_uncheck.png",
          selectedIconPath: "./assets/imgs/product_check.png"
        }, {
          pagePath: "pages/mySetting/index",
          text: "我的",
          iconPath: "./assets/imgs/my_uncheck.png",
          selectedIconPath: "./assets/imgs/my_check.png"
        }]
      }
    }, _this.setNavBarInfo = function () {
      // 获取系统信息
      var systemInfo = _taroWeapp2.default.getSystemInfoSync();
      // 胶囊按钮位置信息
      var menuButtonInfo = _taroWeapp2.default.getMenuButtonBoundingClientRect();
      // 导航栏高度 = 状态栏到胶囊的间距（胶囊距上距离-状态栏高度） * 2 + 胶囊高度 + 状态栏高度
      _this.globalData.navBarHeight = (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 + menuButtonInfo.height + systemInfo.statusBarHeight;
      _this.globalData.menuBottom = menuButtonInfo.top - systemInfo.statusBarHeight;
      _this.globalData.menuRight = systemInfo.screenWidth - menuButtonInfo.right;
      _this.globalData.menuHeight = menuButtonInfo.height;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_App, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (_taroWeapp2.default.getEnv() === "WEAPP") {
        this.setNavBarInfo();
      }

      var res = _taroWeapp2.default.getLaunchOptionsSync();
      if (res.scene == "1065") {
        // 这里说明是从URL scheme进来的
        _wxLog2.default.info("\u4E8C\u7EF4\u7801URL scheme: " + JSON.stringify(res));
        this.globalData.from = "URLScheme";
        this.globalData.fromQuery = res.query;
      }

      if ([1047, 1048, 1049].includes(res.scene) && !(0, _index3.isEmpty)(res.query)) {
        // 从小程序二维码进来的
        this.globalData.qrCodeUserId = res.query.scene;
        _wxLog2.default.info("\u4ECE\u5C0F\u7A0B\u5E8F\u4E8C\u7EF4\u7801\u8FDB\u6765\u7684: " + JSON.stringify(res));
      }
    }

    //  获取小程序信息，用于设置自定义顶部

  }, {
    key: "_createData",


    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数

    value: function _createData() {}
  }]);

  return _App;
}(_taroWeapp.Component);

exports.default = _App;

App(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.2.17@@tarojs/taro-weapp/index.js").default.createApp(_App));
_taroWeapp2.default.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});

/***/ }),

/***/ "./node_modules/_redux-logger@3.0.6@redux-logger/dist/redux-logger.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_redux-logger@3.0.6@redux-logger/dist/redux-logger.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? t(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(undefined, function (e) {
  "use strict";

  function t(e, t) {
    e.super_ = t, e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: false, writable: true, configurable: true } });
  }function r(e, t) {
    Object.defineProperty(this, "kind", { value: e, enumerable: true }), t && t.length && Object.defineProperty(this, "path", { value: t, enumerable: true });
  }function n(e, t, r) {
    n.super_.call(this, "E", e), Object.defineProperty(this, "lhs", { value: t, enumerable: true }), Object.defineProperty(this, "rhs", { value: r, enumerable: true });
  }function o(e, t) {
    o.super_.call(this, "N", e), Object.defineProperty(this, "rhs", { value: t, enumerable: true });
  }function i(e, t) {
    i.super_.call(this, "D", e), Object.defineProperty(this, "lhs", { value: t, enumerable: true });
  }function a(e, t, r) {
    a.super_.call(this, "A", e), Object.defineProperty(this, "index", { value: t, enumerable: true }), Object.defineProperty(this, "item", { value: r, enumerable: true });
  }function f(e, t, r) {
    var n = e.slice((r || t) + 1 || e.length);return e.length = t < 0 ? e.length + t : t, e.push.apply(e, n), e;
  }function u(e) {
    var t = "undefined" == typeof e ? "undefined" : N(e);return "object" !== t ? t : e === Math ? "math" : null === e ? "null" : Array.isArray(e) ? "array" : "[object Date]" === Object.prototype.toString.call(e) ? "date" : "function" == typeof e.toString && /^\/.*\//.test(e.toString()) ? "regexp" : "object";
  }function l(e, t, r, c, s, d, p) {
    s = s || [], p = p || [];var g = s.slice(0);if ("undefined" != typeof d) {
      if (c) {
        if ("function" == typeof c && c(g, d)) return;if ("object" === ("undefined" == typeof c ? "undefined" : N(c))) {
          if (c.prefilter && c.prefilter(g, d)) return;if (c.normalize) {
            var h = c.normalize(g, d, e, t);h && (e = h[0], t = h[1]);
          }
        }
      }g.push(d);
    }"regexp" === u(e) && "regexp" === u(t) && (e = e.toString(), t = t.toString());var y = "undefined" == typeof e ? "undefined" : N(e),
        v = "undefined" == typeof t ? "undefined" : N(t),
        b = "undefined" !== y || p && p[p.length - 1].lhs && p[p.length - 1].lhs.hasOwnProperty(d),
        m = "undefined" !== v || p && p[p.length - 1].rhs && p[p.length - 1].rhs.hasOwnProperty(d);if (!b && m) r(new o(g, t));else if (!m && b) r(new i(g, e));else if (u(e) !== u(t)) r(new n(g, e, t));else if ("date" === u(e) && e - t !== 0) r(new n(g, e, t));else if ("object" === y && null !== e && null !== t) {
      if (p.filter(function (t) {
        return t.lhs === e;
      }).length) e !== t && r(new n(g, e, t));else {
        if (p.push({ lhs: e, rhs: t }), Array.isArray(e)) {
          var w;e.length;for (w = 0; w < e.length; w++) {
            w >= t.length ? r(new a(g, w, new i(undefined, e[w]))) : l(e[w], t[w], r, c, g, w, p);
          }for (; w < t.length;) {
            r(new a(g, w, new o(undefined, t[w++])));
          }
        } else {
          var x = Object.keys(e),
              S = Object.keys(t);x.forEach(function (n, o) {
            var i = S.indexOf(n);i >= 0 ? (l(e[n], t[n], r, c, g, n, p), S = f(S, i)) : l(e[n], undefined, r, c, g, n, p);
          }), S.forEach(function (e) {
            l(undefined, t[e], r, c, g, e, p);
          });
        }p.length = p.length - 1;
      }
    } else e !== t && ("number" === y && isNaN(e) && isNaN(t) || r(new n(g, e, t)));
  }function c(e, t, r, n) {
    return n = n || [], l(e, t, function (e) {
      e && n.push(e);
    }, r), n.length ? n : undefined;
  }function s(e, t, r) {
    if (r.path && r.path.length) {
      var n,
          o = e[t],
          i = r.path.length - 1;for (n = 0; n < i; n++) {
        o = o[r.path[n]];
      }switch (r.kind) {case "A":
          s(o[r.path[n]], r.index, r.item);break;case "D":
          delete o[r.path[n]];break;case "E":case "N":
          o[r.path[n]] = r.rhs;}
    } else switch (r.kind) {case "A":
        s(e[t], r.index, r.item);break;case "D":
        e = f(e, t);break;case "E":case "N":
        e[t] = r.rhs;}return e;
  }function d(e, t, r) {
    if (e && t && r && r.kind) {
      for (var n = e, o = -1, i = r.path ? r.path.length - 1 : 0; ++o < i;) {
        "undefined" == typeof n[r.path[o]] && (n[r.path[o]] = "number" == typeof r.path[o] ? [] : {}), n = n[r.path[o]];
      }switch (r.kind) {case "A":
          s(r.path ? n[r.path[o]] : n, r.index, r.item);break;case "D":
          delete n[r.path[o]];break;case "E":case "N":
          n[r.path[o]] = r.rhs;}
    }
  }function p(e, t, r) {
    if (r.path && r.path.length) {
      var n,
          o = e[t],
          i = r.path.length - 1;for (n = 0; n < i; n++) {
        o = o[r.path[n]];
      }switch (r.kind) {case "A":
          p(o[r.path[n]], r.index, r.item);break;case "D":
          o[r.path[n]] = r.lhs;break;case "E":
          o[r.path[n]] = r.lhs;break;case "N":
          delete o[r.path[n]];}
    } else switch (r.kind) {case "A":
        p(e[t], r.index, r.item);break;case "D":
        e[t] = r.lhs;break;case "E":
        e[t] = r.lhs;break;case "N":
        e = f(e, t);}return e;
  }function g(e, t, r) {
    if (e && t && r && r.kind) {
      var n,
          o,
          i = e;for (o = r.path.length - 1, n = 0; n < o; n++) {
        "undefined" == typeof i[r.path[n]] && (i[r.path[n]] = {}), i = i[r.path[n]];
      }switch (r.kind) {case "A":
          p(i[r.path[n]], r.index, r.item);break;case "D":
          i[r.path[n]] = r.lhs;break;case "E":
          i[r.path[n]] = r.lhs;break;case "N":
          delete i[r.path[n]];}
    }
  }function h(e, t, r) {
    if (e && t) {
      var n = function n(_n) {
        r && !r(e, t, _n) || d(e, t, _n);
      };l(e, t, n);
    }
  }function y(e) {
    return "color: " + F[e].color + "; font-weight: bold";
  }function v(e) {
    var t = e.kind,
        r = e.path,
        n = e.lhs,
        o = e.rhs,
        i = e.index,
        a = e.item;switch (t) {case "E":
        return [r.join("."), n, "→", o];case "N":
        return [r.join("."), o];case "D":
        return [r.join(".")];case "A":
        return [r.join(".") + "[" + i + "]", a];default:
        return [];}
  }function b(e, t, r, n) {
    var o = c(e, t);try {
      n ? r.groupCollapsed("diff") : r.group("diff");
    } catch (e) {
      r.log("diff");
    }o ? o.forEach(function (e) {
      var t = e.kind,
          n = v(e);r.log.apply(r, ["%c " + F[t].text, y(t)].concat(P(n)));
    }) : r.log("—— no diff ——");try {
      r.groupEnd();
    } catch (e) {
      r.log("—— diff end —— ");
    }
  }function m(e, t, r, n) {
    switch ("undefined" == typeof e ? "undefined" : N(e)) {case "object":
        return "function" == typeof e[n] ? e[n].apply(e, P(r)) : e[n];case "function":
        return e(t);default:
        return e;}
  }function w(e) {
    var t = e.timestamp,
        r = e.duration;return function (e, n, o) {
      var i = ["action"];return i.push("%c" + String(e.type)), t && i.push("%c@ " + n), r && i.push("%c(in " + o.toFixed(2) + " ms)"), i.join(" ");
    };
  }function x(e, t) {
    var r = t.logger,
        n = t.actionTransformer,
        o = t.titleFormatter,
        i = undefined === o ? w(t) : o,
        a = t.collapsed,
        f = t.colors,
        u = t.level,
        l = t.diff,
        c = "undefined" == typeof t.titleFormatter;e.forEach(function (o, s) {
      var d = o.started,
          p = o.startedTime,
          g = o.action,
          h = o.prevState,
          y = o.error,
          v = o.took,
          w = o.nextState,
          x = e[s + 1];x && (w = x.prevState, v = x.started - d);var S = n(g),
          k = "function" == typeof a ? a(function () {
        return w;
      }, g, o) : a,
          j = D(p),
          E = f.title ? "color: " + f.title(S) + ";" : "",
          A = ["color: gray; font-weight: lighter;"];A.push(E), t.timestamp && A.push("color: gray; font-weight: lighter;"), t.duration && A.push("color: gray; font-weight: lighter;");var O = i(S, j, v);try {
        k ? f.title && c ? r.groupCollapsed.apply(r, ["%c " + O].concat(A)) : r.groupCollapsed(O) : f.title && c ? r.group.apply(r, ["%c " + O].concat(A)) : r.group(O);
      } catch (e) {
        r.log(O);
      }var N = m(u, S, [h], "prevState"),
          P = m(u, S, [S], "action"),
          C = m(u, S, [y, h], "error"),
          F = m(u, S, [w], "nextState");if (N) if (f.prevState) {
        var L = "color: " + f.prevState(h) + "; font-weight: bold";r[N]("%c prev state", L, h);
      } else r[N]("prev state", h);if (P) if (f.action) {
        var T = "color: " + f.action(S) + "; font-weight: bold";r[P]("%c action    ", T, S);
      } else r[P]("action    ", S);if (y && C) if (f.error) {
        var M = "color: " + f.error(y, h) + "; font-weight: bold;";r[C]("%c error     ", M, y);
      } else r[C]("error     ", y);if (F) if (f.nextState) {
        var _ = "color: " + f.nextState(w) + "; font-weight: bold";r[F]("%c next state", _, w);
      } else r[F]("next state", w);l && b(h, w, r, k);try {
        r.groupEnd();
      } catch (e) {
        r.log("—— log end ——");
      }
    });
  }function S() {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {},
        t = Object.assign({}, L, e),
        r = t.logger,
        n = t.stateTransformer,
        o = t.errorTransformer,
        i = t.predicate,
        a = t.logErrors,
        f = t.diffPredicate;if ("undefined" == typeof r) return function () {
      return function (e) {
        return function (t) {
          return e(t);
        };
      };
    };if (e.getState && e.dispatch) return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"), function () {
      return function (e) {
        return function (t) {
          return e(t);
        };
      };
    };var u = [];return function (e) {
      var r = e.getState;return function (e) {
        return function (l) {
          if ("function" == typeof i && !i(r, l)) return e(l);var c = {};u.push(c), c.started = O.now(), c.startedTime = new Date(), c.prevState = n(r()), c.action = l;var s = undefined;if (a) try {
            s = e(l);
          } catch (e) {
            c.error = o(e);
          } else s = e(l);c.took = O.now() - c.started, c.nextState = n(r());var d = t.diff && "function" == typeof f ? f(r, l) : t.diff;if (x(u, Object.assign({}, t, { diff: d })), u.length = 0, c.error) throw c.error;return s;
        };
      };
    };
  }var k,
      j,
      E = function E(e, t) {
    return new Array(t + 1).join(e);
  },
      A = function A(e, t) {
    return E("0", t - e.toString().length) + e;
  },
      D = function D(e) {
    return A(e.getHours(), 2) + ":" + A(e.getMinutes(), 2) + ":" + A(e.getSeconds(), 2) + "." + A(e.getMilliseconds(), 3);
  },
      O = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance : Date,
      N = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return typeof e === "undefined" ? "undefined" : _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
  },
      P = function P(e) {
    if (Array.isArray(e)) {
      for (var t = 0, r = Array(e.length); t < e.length; t++) {
        r[t] = e[t];
      }return r;
    }return Array.from(e);
  },
      C = [];k = "object" === ("undefined" == typeof global ? "undefined" : N(global)) && global ? global : "undefined" != typeof window ? window : {}, j = k.DeepDiff, j && C.push(function () {
    "undefined" != typeof j && k.DeepDiff === c && (k.DeepDiff = j, j = undefined);
  }), t(n, r), t(o, r), t(i, r), t(a, r), Object.defineProperties(c, { diff: { value: c, enumerable: true }, observableDiff: { value: l, enumerable: true }, applyDiff: { value: h, enumerable: true }, applyChange: { value: d, enumerable: true }, revertChange: { value: g, enumerable: true }, isConflict: { value: function value() {
        return "undefined" != typeof j;
      }, enumerable: true }, noConflict: { value: function value() {
        return C && (C.forEach(function (e) {
          e();
        }), C = null), c;
      }, enumerable: true } });var F = { E: { color: "#2196F3", text: "CHANGED:" }, N: { color: "#4CAF50", text: "ADDED:" }, D: { color: "#F44336", text: "DELETED:" }, A: { color: "#2196F3", text: "ARRAY:" } },
      L = { level: "log", logger: console, logErrors: true, collapsed: undefined, predicate: undefined, duration: false, timestamp: true, stateTransformer: function stateTransformer(e) {
      return e;
    }, actionTransformer: function actionTransformer(e) {
      return e;
    }, errorTransformer: function errorTransformer(e) {
      return e;
    }, colors: { title: function title() {
        return "inherit";
      }, prevState: function prevState() {
        return "#9E9E9E";
      }, action: function action() {
        return "#03A9F4";
      }, nextState: function nextState() {
        return "#4CAF50";
      }, error: function error() {
        return "#F20404";
      } }, diff: false, diffPredicate: undefined, transformer: undefined },
      T = function T() {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {},
        t = e.dispatch,
        r = e.getState;return "function" == typeof t || "function" == typeof r ? S()({ dispatch: t, getState: r }) : undefined;
  };e.defaults = L, e.createLogger = S, e.logger = T, e.default = T, Object.defineProperty(e, "__esModule", { value: true });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../_webpack@4.41.6@webpack/buildin/global.js */ "./node_modules/_webpack@4.41.6@webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/_redux-thunk@2.4.2@redux-thunk/es/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_redux-thunk@2.4.2@redux-thunk/es/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** A function that accepts a potential "extra argument" value to be injected later,
 * and returns an instance of the thunk middleware that uses that value
 */
function createThunkMiddleware(extraArgument) {
  // Standard Redux middleware definition pattern:
  // See: https://redux.js.org/tutorials/fundamentals/part-4-store#writing-custom-middleware
  var middleware = function middleware(_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        // The thunk middleware looks for any functions that were passed to `store.dispatch`.
        // If this "action" is really a function, call it and return the result.
        if (typeof action === 'function') {
          // Inject the store's `dispatch` and `getState` methods, as well as any "extra arg"
          return action(dispatch, getState, extraArgument);
        } // Otherwise, pass the action down the middleware chain as usual


        return next(action);
      };
    };
  };

  return middleware;
}

var thunk = createThunkMiddleware(); // Attach the factory function so users can create a customized version
// with whatever "extra arg" they want to inject into their thunks

thunk.withExtraArgument = createThunkMiddleware;
exports.default = thunk;

/***/ }),

/***/ "./node_modules/_redux@4.2.1@redux/es/redux.js":
/*!*****************************************************!*\
  !*** ./node_modules/_redux@4.2.1@redux/es/redux.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.legacy_createStore = exports.createStore = exports.compose = exports.combineReducers = exports.bindActionCreators = exports.applyMiddleware = exports.__DO_NOT_USE__ActionTypes = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _objectSpread2 = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/_@babel_runtime@7.22.10@@babel/runtime/helpers/esm/objectSpread2.js");

var _objectSpread3 = _interopRequireDefault(_objectSpread2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}

// Inlined version of the `symbol-observable` polyfill
var $$observable = function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}();

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
  if (val === undefined) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val === "undefined" ? "undefined" : _typeof(val);

  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function':
      {
        return type;
      }
  }

  if (Array.isArray(val)) return 'array';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  var constructorName = ctorName(val);

  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName;
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function kindOf(val) {
  var typeOfVal = typeof val === "undefined" ? "undefined" : _typeof(val);

  {
    typeOfVal = miniKindOf(val);
  }

  return typeOfVal;
}

/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error("Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error("Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */

  function getState() {
    if (isDispatching) {
      throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */

  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error("Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
    }

    if (isDispatching) {
      throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */

  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error("Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */

  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error("Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */

  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if ((typeof observer === "undefined" ? "undefined" : _typeof(observer)) !== 'object' || observer === null) {
          throw new Error("Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
/**
 * Creates a Redux store that holds the state tree.
 *
 * **We recommend using `configureStore` from the
 * `@reduxjs/toolkit` package**, which replaces `createStore`:
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

var legacy_createStore = createStore;

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */

  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("The slice reducer for key \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("The slice reducer for key \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle '" + ActionTypes.INIT + "' or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */

function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === undefined) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var actionType = action && action.type;
        throw new Error("When called with an action of type " + (actionType ? "\"" + String(actionType) + "\"" : '(unknown type)') + ", the slice reducer for key \"" + _key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.");
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */

function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if ((typeof actionCreators === "undefined" ? "undefined" : _typeof(actionCreators)) !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + "'. " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(undefined, arguments);

      var _dispatch = function dispatch() {
        throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(undefined, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(undefined, chain)(store.dispatch);
      return (0, _objectSpread3.default)((0, _objectSpread3.default)({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}

exports.__DO_NOT_USE__ActionTypes = ActionTypes;
exports.applyMiddleware = applyMiddleware;
exports.bindActionCreators = bindActionCreators;
exports.combineReducers = combineReducers;
exports.compose = compose;
exports.createStore = createStore;
exports.legacy_createStore = legacy_createStore;

/***/ }),

/***/ "./src/app.jsx":
/*!*********************!*\
  !*** ./src/app.jsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_jsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.jsx?taro&type=script&parse=ENTRY& */ "./src/app.jsx?taro&type=script&parse=ENTRY&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _app_jsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _app_jsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/app.jsx?taro&type=script&parse=ENTRY&":
/*!***************************************************!*\
  !*** ./src/app.jsx?taro&type=script&parse=ENTRY& ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_app_jsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./app.jsx?taro&type=script&parse=ENTRY& */ "./node_modules/_@tarojs_mini-runner@2.2.17@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/app.jsx?taro&type=script&parse=ENTRY&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_app_jsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_app_jsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_app_jsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_app_jsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_2_17_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_app_jsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/constant/actionType.js":
/*!************************************!*\
  !*** ./src/constant/actionType.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// 微信登录
var WX_LOGIN_CHANGE = exports.WX_LOGIN_CHANGE = 'WX_LOGIN_CHANGE';

// 微信用户信息
var SET_INFO_WX = exports.SET_INFO_WX = 'SET_INFO_WX';

//设置订单reducer的值
var CHANGE_ORDER_STATE = exports.CHANGE_ORDER_STATE = 'CHANGE_ORDER_STATE';

/***/ }),

/***/ "./src/pages/index/reducer.js":
/*!************************************!*\
  !*** ./src/pages/index/reducer.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = home;

var _actionType = __webpack_require__(/*! ../../constant/actionType */ "./src/constant/actionType.js");

var INITIAL_STATE = {
  wxLogin: false, // 微信是否授权
  dfLogin: false, // 代发是否授权
  wxLoginShow: false, // 微信弹窗显示
  weChatNick: '', // 微信昵称
  vipFlag: 0, // 是否为代发高级版，1为高级版
  isVip: false,
  unionId: '', // unionId
  shopList: [], // 店铺列表
  currentShopIndex: 0, // 当前选择的店铺索引
  itemInfo: {}, // 商品详情页
  distributeInfo: {}, // 铺货信息
  supplierDetail: {}, // 供应商详情页数据
  condition: '', /* 筛选条件 */
  fromShop: 0, //0 不是从微信小商店过来的 1从微信小商店过来但没授权 2从微信小商店过来且授权成功 3从视频号小店过来但没授权 4从视频号小店过来且授权成功
  serviceEnd: '' /* 服务到期时间 */
};

function home() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _actionType.WX_LOGIN_CHANGE:
      return _extends({}, state, { wxLogin: action.payload });
    case _actionType.DF_LOGIN_CHANGE:
      return _extends({}, state, { dfLogin: action.payload });
    case _actionType.SET_INFO_WX:
      return _extends({}, state, action.payload);
    case _actionType.SET_SHOP_LIST:
      return _extends({}, state, { shopList: action.payload });
    case _actionType.SET_SHOP_INDEX:
      return _extends({}, state, { currentShopIndex: action.payload });
    case _actionType.SET_WX_LOGIN_SHOW:
      return _extends({}, state, { wxLoginShow: action.payload });
    case _actionType.SET_ITEM_INFO:
      return _extends({}, state, { itemInfo: action.payload });
    case _actionType.SET_DISTRIBUTE_INFO:
      return _extends({}, state, { distributeInfo: _extends({}, state.distributeInfo, action.payload) });
    case _actionType.SET_SUPPLIER_DETAIL:
      return _extends({}, state, { supplierDetail: _extends({}, action.payload) });
    case _actionType.SET_CONDITION:
      return _extends({}, state, { condition: action.payload });
    case _actionType.SET_FROM_SHOP:
      return _extends({}, state, { fromShop: action.payload });
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/pages/orderList/reducer.js":
/*!****************************************!*\
  !*** ./src/pages/orderList/reducer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = order;

var _actionType = __webpack_require__(/*! ../../constant/actionType */ "./src/constant/actionType.js");

var INITIAL_STATE = {};

function order() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _actionType.CHANGE_ORDER_STATE:
      return Object.assign({}, state, _extends({}, action.data));
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/pages/saleProduct/reducer.js":
/*!******************************************!*\
  !*** ./src/pages/saleProduct/reducer.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = product;

var _actionType = __webpack_require__(/*! ../../constant/actionType */ "./src/constant/actionType.js");

var INITIAL_STATE = {};

function product() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _actionType.CHANGE_ORDER_STATE:
      return Object.assign({}, state, _extends({}, action.data));
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/_redux@4.2.1@redux/es/redux.js");

var _reducer = __webpack_require__(/*! ../pages/index/reducer */ "./src/pages/index/reducer.js");

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = __webpack_require__(/*! ../pages/orderList/reducer */ "./src/pages/orderList/reducer.js");

var _reducer4 = _interopRequireDefault(_reducer3);

var _reducer5 = __webpack_require__(/*! ../pages/saleProduct/reducer */ "./src/pages/saleProduct/reducer.js");

var _reducer6 = _interopRequireDefault(_reducer5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  home: _reducer2.default,
  order: _reducer4.default,
  product: _reducer6.default
});

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = configStore;

var _redux = __webpack_require__(/*! redux */ "./node_modules/_redux@4.2.1@redux/es/redux.js");

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "./node_modules/_redux-thunk@2.4.2@redux-thunk/es/index.js");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _index = __webpack_require__(/*! ../reducers/index */ "./src/reducers/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var composeEnhancers = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
}) : _redux.compose;

var middlewares = [_reduxThunk2.default];

{
  middlewares.push(__webpack_require__(/*! redux-logger */ "./node_modules/_redux-logger@3.0.6@redux-logger/dist/redux-logger.js").createLogger());
}

var enhancer = composeEnhancers(_redux.applyMiddleware.apply(undefined, middlewares)
// other store enhancers if any
);

function configStore() {
  var store = (0, _redux.createStore)(_index2.default, enhancer);
  return store;
}

/***/ }),

/***/ "./src/utils/wxLog.js":
/*!****************************!*\
  !*** ./src/utils/wxLog.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.2.17@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 微信小程序实时日志
 * @url https://developers.weixin.qq.com/miniprogram/dev/framework/realtimelog/
 * 为帮助小程序开发者快捷地排查小程序漏洞、定位问题，我们推出了实时日志功能。
 * 从基础库2.7.1开始，开发者可通过提供的接口打印日志，日志汇聚并实时上报到小程序后台。
 * 开发者可从小程序管理后台“开发->运维中心->实时日志”进入日志查询页面，查看开发者打印的日志信息
 */
var log = _taroWeapp2.default.getRealtimeLogManager ? _taroWeapp2.default.getRealtimeLogManager() : null;

var wxLog = {
  info: function info() {
    if (!log) return;
    log.info.apply(log, arguments);
  },
  warn: function warn() {
    if (!log) return;
    log.warn.apply(log, arguments);
  },
  error: function error() {
    if (!log) return;
    log.error.apply(log, arguments);
  },
  setFilterMsg: function setFilterMsg(msg) {
    // 从基础库2.7.3开始支持
    if (!log || !log.setFilterMsg) return;
    if (typeof msg !== 'string') return;
    log.setFilterMsg(msg);
  },
  addFilterMsg: function addFilterMsg(msg) {
    // 从基础库2.8.1开始支持
    if (!log || !log.addFilterMsg) return;
    if (typeof msg !== 'string') return;
    log.addFilterMsg(msg);
  }
};

exports.default = wxLog;

/***/ })

},[["./src/app.jsx","runtime","taro","vendors","common"]]]);;