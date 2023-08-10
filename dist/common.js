(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTrialVersion = exports.deDuplicationArray = exports.randomArray = exports.getRandomInt = exports.imgPreview = exports.saveImg = exports.saveVideo = exports.writePhotosAlbum = exports.checkVersionUpDate = exports.devTips = exports.GetTimeString = exports.getNavBarHeight = exports.sceneCheck = exports.checkTemplateMessage = exports.isiOS = exports.isIphoneX = exports.NOOP = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isEmpty = isEmpty;
exports.ToQueryString = ToQueryString;
exports.Parse2json = Parse2json;
exports.getUrlParam = getUrlParam;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.2.17@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * 判断一个东西是不是空 空格 空字符串 undefined 长度为0的数组及对象会被认为是空的
 * @param key
 * @returns {boolean}
 */
function isEmpty(key) {
  var trimReg = /(^\s*)|(\s*$)/g;
  if (key === undefined || key === "" || key === null) {
    return true;
  }
  if (typeof key === "string") {
    key = key.replace(trimReg, "");
    if (key == "" || key == null || key == "null" || key == undefined || key == "undefined") {
      return true;
    } else {
      return false;
    }
  } else if (typeof key === "undefined") {
    return true;
  } else if ((typeof key === "undefined" ? "undefined" : _typeof(key)) === "object") {
    for (var i in key) {
      return false;
    }
    return true;
  } else if (typeof key === "boolean") {
    return false;
  } else if (typeof key === "number") {
    return false;
  }
}

function ToQueryString(info) {
  if (isEmpty(info)) {
    return "";
  } else {
    var arr = [];
    for (var i in info) {
      arr[arr.length] = i + "=" + info[i];
    }
    arr = arr.join("&");
    return arr;
  }
}

function Parse2json(info) {
  if (info && typeof info === "string") {
    info = info.replace(/[\r\n]/g, "");
    if (info.substr(0, 1) == "{" && info.substr(info.length - 1, 1) == "}" || info.substr(0, 1) == "[" && info.substr(info.length - 1, 1) == "]") {
      try {
        return JSON.parse(info);
      } catch (e) {
        return info;
      }
    } else {
      return info;
    }
  } else {
    return info;
  }
}

/**
 * h5取参数
 * @param name
 * @returns {string}
 */
function getUrlParam(name) {
  var urlArr = window.location.href.split("?");
  if (urlArr.length < 2) {
    return "";
  }
  var tempArr = urlArr[1].split("&");
  for (var i = 0; i < tempArr.length; i++) {
    var item = tempArr[i].split("=");
    if (item[0].trim() == name) {
      return item[1];
    }
  }
  return "";
}

// 空函数
var NOOP = exports.NOOP = function NOOP() {};

// 判断是否为全面屏 是返回true
var isIphoneX = exports.isIphoneX = function isIphoneX() {
  if (_taroWeapp2.default.getEnv() === _taroWeapp2.default.ENV_TYPE.WEB) {
    return false;
  }
  var app = _taroWeapp2.default.getApp();
  if (!isEmpty(app.globalData.isIphoneX)) {
    return app.globalData.isIphoneX;
  }

  var _Taro$getSystemInfoSy = _taroWeapp2.default.getSystemInfoSync(),
      screenHeight = _Taro$getSystemInfoSy.screenHeight,
      safeArea = _Taro$getSystemInfoSy.safeArea,
      model = _Taro$getSystemInfoSy.model;

  app.globalData.isIphoneX = model.includes("iPhone") && screenHeight !== safeArea.bottom;

  return app.globalData.isIphoneX;
};
/**
 * 判断是不是苹果手机
 */
var isiOS = exports.isiOS = function isiOS() {
  if (_taroWeapp2.default.getEnv() === _taroWeapp2.default.ENV_TYPE.WEB) {
    return false;
  }
  var app = _taroWeapp2.default.getApp();
  if (!isEmpty(app.globalData.isiOS)) {
    return app.globalData.isiOS;
  }

  var _Taro$getSystemInfoSy2 = _taroWeapp2.default.getSystemInfoSync(),
      model = _Taro$getSystemInfoSy2.model;

  app.globalData.isiOS = model.includes("iPhone");

  return app.globalData.isiOS;
};
/**
 * 根据不同模板消息跳转相应页面
 */
var checkTemplateMessage = exports.checkTemplateMessage = function checkTemplateMessage() {
  var app = _taroWeapp2.default.getApp();
  if (app.globalData.templateID) {
    var findItem = TEMPLATE_ID_MAP.find(function (v) {
      return v['template_id'] === app.globalData.templateID;
    });

    app.globalData.templateID = '';
    if (findItem && findItem.path) {
      _taroWeapp2.default.hideLoading();
      if (findItem['isTab']) {
        _taroWeapp2.default.switchTab({ url: findItem.path });
      } else {
        if (findItem.path.includes('orderDetail') && !isiOS()) {
          return;
        }
        _taroWeapp2.default.navigateTo({ url: findItem.path });
      }
    }
  }
};
/**
 * 场景值判断
 */
var sceneCheck = exports.sceneCheck = function sceneCheck() {
  var app = _taroWeapp2.default.getApp();
  var res = _taroWeapp2.default.getLaunchOptionsSync();
  if (!isEmpty(res.scene)) {
    app.globalData.scene = res.scene;
    if (res.scene == 1043) {
      // 公众号模板消息渠道进来的
      if (res.query.templateID) {
        app.globalData.templateID = res.query.templateID;
        app.globalData.templateData = res.query.data;
        app.globalData.shopId = res.query.shopId;
      }
      _taroWeapp2.default.showLoading();
      setTimeout(function () {
        return _taroWeapp2.default.hideLoading();
      }, 5000);
    }
  }
};

/**
 * 获取自定义导航栏的高度
 */
var getNavBarHeight = exports.getNavBarHeight = function getNavBarHeight() {
  var app = _taroWeapp2.default.getApp();
  var _app$globalData$navBa = app.globalData.navBarHeight,
      navBarHeight = _app$globalData$navBa === undefined ? 60 : _app$globalData$navBa;
  // H5兼容

  if (_taroWeapp2.default.getEnv() === _taroWeapp2.default.ENV_TYPE.WEB) {
    navBarHeight = 0;
  }
  return navBarHeight;
};
/**
 *  @author jyb
 *  参数
 *  time 必须为合法时间字符串 不传为当前时间
 *  matchStr （格式）  例：YY-MM-DD hh:mm:ss
 **/
var GetTimeString = exports.GetTimeString = function GetTimeString(matchStr, time) {
  var nowDate = new Date();
  if (time) {
    nowDate = new Date(time);
  }

  var year = nowDate.getFullYear();
  var month = nowDate.getMonth() + 1;
  if (month <= 9) {
    month = "0" + month;
  }
  var date = nowDate.getDate();
  if (date <= 9) {
    date = "0" + date;
  }
  var hours = nowDate.getHours();
  if (hours <= 9) {
    hours = "0" + hours;
  }
  var minutes = nowDate.getMinutes();
  if (minutes <= 9) {
    minutes = "0" + minutes;
  }
  var seconds = nowDate.getSeconds();
  if (seconds <= 9) {
    seconds = "0" + seconds;
  }

  if (matchStr) {
    matchStr = matchStr.replace("YY", year);
    matchStr = matchStr.replace("MM", month);
    matchStr = matchStr.replace("DD", date);
    matchStr = matchStr.replace("hh", hours);
    matchStr = matchStr.replace("mm", minutes);
    matchStr = matchStr.replace("ss", seconds);
    return matchStr;
  } else {
    return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
  }
};
// 功能正在开发提示
var devTips = exports.devTips = function devTips() {
  var code = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  Beacon({ code: code });
  _taroWeapp2.default.showToast({
    title: "该功能正在开发中",
    icon: "none",
    duration: 1500
  });
};
// 检测更新版本
var checkVersionUpDate = exports.checkVersionUpDate = function checkVersionUpDate() {
  var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : NOOP;

  var updateManager = _taroWeapp2.default.getUpdateManager();

  updateManager.onCheckForUpdate(function (res) {
    // 请求完新版本信息的回调
    if (res.hasUpdate) {
      updateManager.onUpdateReady(function () {
        _taroWeapp2.default.showModal({
          title: "更新提示",
          content: "新版本已经准备好，是否重启应用？",
          success: function success(res) {
            if (res.confirm) {
              // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate();
            } else {
              _taroWeapp2.default.showModal({
                title: "您取消了更新",
                content: "\u53EF\u4EE5\u524D\u5F80\u6211\u7684\u9875\u9762\r\n\u70B9\u51FB\u3010\u7248\u672C\u66F4\u65B0\u3011\u83B7\u53D6\u6700\u65B0\u7248\u672C",
                confirmText: "我知道了",
                showCancel: false
              });
            }
          }
        });
      });
      updateManager.onUpdateFailed(function () {
        // 新版本下载失败
        console.error("新版本下载失败");
      });
    } else {
      callback();
    }
  });
};

// 手机相册授权
var writePhotosAlbum = exports.writePhotosAlbum = function writePhotosAlbum(e, videoURL) {
  _taroWeapp2.default.showActionSheet({
    itemList: ["保存到相册"],
    success: function success() {
      var url = videoURL || e.currentTarget.dataset.url;
      _taroWeapp2.default.getSetting({
        success: function success(res) {
          if (res.authSetting["scope.writePhotosAlbum"]) {
            if (videoURL) {
              saveVideo(videoURL);
            } else {
              saveImg(url);
            }
          } else {
            _taroWeapp2.default.authorize({
              scope: "scope.writePhotosAlbum",
              success: function success() {
                if (videoURL) {
                  saveVideo(videoURL);
                } else {
                  saveImg(url);
                }
              },
              fail: function fail() {
                _taroWeapp2.default.showModal({
                  title: "保存失败",
                  content: "请开启访问手机相册权限",
                  success: function success() {
                    _taroWeapp2.default.openSetting();
                  }
                });
              }
            });
          }
        }
      });
    }
  });
};
// 保存视频
var saveVideo = exports.saveVideo = function saveVideo(url) {
  _taroWeapp2.default.showLoading({ title: "正在保存视频" });
  _taroWeapp2.default.downloadFile({
    url: url,
    success: function success(res) {
      if (res.statusCode === 200) {
        _taroWeapp2.default.saveVideoToPhotosAlbum({
          filePath: res.tempFilePath,
          success: function success() {
            _taroWeapp2.default.showToast({ title: "保存成功" });
            var FileSystemManager = _taroWeapp2.default.getFileSystemManager();
            FileSystemManager.unlink({
              filePath: res.tempFilePath
            });
          },
          fail: function fail(res) {
            _taroWeapp2.default.showToast({ title: "保存失败", icon: "none" });
            console.error("保存失败", res);
          }
        });
      } else {
        _taroWeapp2.default.showToast({ title: "下载失败, 请稍后再试", icon: "none" });
      }
    },
    fail: function fail(err) {
      _taroWeapp2.default.showModal({
        title: "请联系客服处理",
        content: err.errMsg,
        showCancel: false
      });
    },
    complete: function complete() {
      _taroWeapp2.default.hideLoading();
    }
  });
};
// 保存图片
var saveImg = exports.saveImg = function saveImg(imgURL) {
  _taroWeapp2.default.getImageInfo({
    src: imgURL,
    success: function success(res) {
      if (res.errMsg === "getImageInfo:ok") {
        _taroWeapp2.default.saveImageToPhotosAlbum({
          filePath: res.path,
          success: function success() {
            _taroWeapp2.default.showToast({ title: "保存成功" });
            var FileSystemManager = _taroWeapp2.default.getFileSystemManager();
            FileSystemManager.unlink({ filePath: res.path });
          },
          fail: function fail(res) {
            _taroWeapp2.default.showToast({ title: "图片保存失败", icon: "none" });
            console.error("图片保存失败", res);
          }
        });
      }
    }
  });
};
/**
 * 放大图片预览
 * @param images   图片链接数组
 * @param curImg   当前图片链接
 */
var imgPreview = exports.imgPreview = function imgPreview(_ref) {
  var _ref$images = _ref.images,
      images = _ref$images === undefined ? [] : _ref$images,
      _ref$curImg = _ref.curImg,
      curImg = _ref$curImg === undefined ? "" : _ref$curImg;

  if (isEmpty(images)) return;

  _taroWeapp2.default.previewImage({
    urls: images,
    current: images.length === 1 ? images[0] : curImg
  });
};
/**
 * 返回一个介于min与max之间的随机整数
 * @param min 最小值
 * @param max 最大值
 */
var getRandomInt = exports.getRandomInt = function getRandomInt() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
/**
 * 随机化数组顺序
 * @param arr
 */
var randomArray = exports.randomArray = function randomArray() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (isEmpty(arr)) return [];

  var result = [];
  while (arr.length > 0) {
    var randomNum = getRandomInt(0, arr.length - 1);
    result = result.concat(arr.splice(randomNum, 1));
  }
  return result;
};

/**
 * 去重数组
 * @param arr 数组数据
 * @param key 唯一标识符 ID
 * 使用方法：
 * deDuplicationArray([{ id: 1, name: 'a' },{ id: 2, name: 'b' },{ id: 1, name: 'c' }], 'id')
 * => [{ id: 2, name: 'a' },{ id: 1, name: 'c' }]
 */
var deDuplicationArray = exports.deDuplicationArray = function deDuplicationArray(arr, key) {
  if (typeof key !== 'string' || isEmpty(arr) || key === '') return [];

  return [].concat(_toConsumableArray(new Map(arr.map(function (item) {
    return [item[key], item];
  })).values()));
};

/**
 * 是否为审核版本，部分功能审核版本隐藏
 * @return {boolean} 是审核版本返回true
 */
var isTrialVersion = exports.isTrialVersion = function isTrialVersion() {
  var app = _taroWeapp2.default.getApp();
  if (app.globalData.hasOwnProperty('isTrial')) {
    return app.globalData.isTrial;
  }

  var _Taro$getAccountInfoS = _taroWeapp2.default.getAccountInfoSync(),
      miniProgram = _Taro$getAccountInfoS.miniProgram;

  app.globalData.isTrial = miniProgram.envVersion === "trial";

  return app.globalData.isTrial;
};

/***/ })

}]);