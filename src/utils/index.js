import Taro from "@tarojs/taro";

/**
 * 判断一个东西是不是空 空格 空字符串 undefined 长度为0的数组及对象会被认为是空的
 * @param key
 * @returns {boolean}
 */
export function isEmpty(key) {
    let trimReg = /(^\s*)|(\s*$)/g;
    if (key === undefined || key === "" || key === null) {
        return true;
    }
    if (typeof key === "string") {
        key = key.replace(trimReg, "");
        if (
            key == "" ||
            key == null ||
            key == "null" ||
            key == undefined ||
            key == "undefined"
        ) {
            return true;
        } else {
            return false;
        }
    } else if (typeof key === "undefined") {
        return true;
    } else if (typeof key === "object") {
        for (let i in key) {
            return false;
        }
        return true;
    } else if (typeof key === "boolean") {
        return false;
    } else if (typeof key === "number") {
        return false;
    }
}

export function ToQueryString(info) {
    if (isEmpty(info)) {
        return "";
    } else {
        let arr = [];
        for (var i in info) {
            arr[arr.length] = i + "=" + info[i];
        }
        arr = arr.join("&");
        return arr;
    }
}

export function Parse2json(info) {
    if (info && typeof info === "string") {
        info = info.replace(/[\r\n]/g, "");
        if (
            (info.substr(0, 1) == "{" &&
                info.substr(info.length - 1, 1) == "}") ||
            (info.substr(0, 1) == "[" && info.substr(info.length - 1, 1) == "]")
        ) {
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
export function getUrlParam(name) {
    let urlArr = window.location.href.split("?");
    if (urlArr.length < 2) {
        return "";
    }
    let tempArr = urlArr[1].split("&");
    for (let i = 0; i < tempArr.length; i++) {
        let item = tempArr[i].split("=");
        if (item[0].trim() == name) {
            return item[1];
        }
    }
    return "";
}

// 空函数
export const NOOP = () => { };

// 判断是否为全面屏 是返回true
export const isIphoneX = () => {
    if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
        return false;
    }
    let app = Taro.getApp();
    if (!isEmpty(app.globalData.isIphoneX)) {
        return app.globalData.isIphoneX;
    }
    const { screenHeight, safeArea, model } = Taro.getSystemInfoSync();
    app.globalData.isIphoneX =
        model.includes("iPhone") && screenHeight !== safeArea.bottom;

    return app.globalData.isIphoneX;
};
/**
 * 判断是不是苹果手机
 */
export const isiOS = () => {
    if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
        return false;
    }
    let app = Taro.getApp();
    if (!isEmpty(app.globalData.isiOS)) {
        return app.globalData.isiOS;
    }
    const { model } = Taro.getSystemInfoSync();
    app.globalData.isiOS = model.includes("iPhone");

    return app.globalData.isiOS;
}
/**
 * 根据不同模板消息跳转相应页面
 */
export const checkTemplateMessage = () => {
    let app = Taro.getApp();
    if (app.globalData.templateID) {
        let findItem = TEMPLATE_ID_MAP.find(v => v['template_id'] === app.globalData.templateID);

        app.globalData.templateID = '';
        if (findItem && findItem.path) {
            Taro.hideLoading();
            if (findItem['isTab']) {
                Taro.switchTab({ url: findItem.path })
            } else {
                if (findItem.path.includes('orderDetail') && !isiOS()) {
                    return;
                }
                Taro.navigateTo({ url: findItem.path });
            }
        }
    }
}
/**
 * 场景值判断
 */
export const sceneCheck = () => {
    let app = Taro.getApp();
    const res = Taro.getLaunchOptionsSync();
    if (!isEmpty(res.scene)) {
        app.globalData.scene = res.scene;
        if (res.scene == 1043) {
            // 公众号模板消息渠道进来的
            if (res.query.templateID) {
                app.globalData.templateID = res.query.templateID;
                app.globalData.templateData = res.query.data;
                app.globalData.shopId = res.query.shopId;
            }
            Taro.showLoading();
            setTimeout(() => Taro.hideLoading(), 5000);
        }
    }
}

/**
 * 获取自定义导航栏的高度
 */
export const getNavBarHeight = () => {
    let app = Taro.getApp();
    let { navBarHeight = 60 } = app.globalData;
    // H5兼容
    if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
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
export const GetTimeString = (matchStr, time) => {
    let nowDate = new Date();
    if (time) {
        nowDate = new Date(time);
    }

    let year = nowDate.getFullYear();
    let month = nowDate.getMonth() + 1;
    if (month <= 9) {
        month = "0" + month;
    }
    let date = nowDate.getDate();
    if (date <= 9) {
        date = "0" + date;
    }
    let hours = nowDate.getHours();
    if (hours <= 9) {
        hours = "0" + hours;
    }
    let minutes = nowDate.getMinutes();
    if (minutes <= 9) {
        minutes = "0" + minutes;
    }
    let seconds = nowDate.getSeconds();
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
        return (
            year +
            "-" +
            month +
            "-" +
            date +
            " " +
            hours +
            ":" +
            minutes +
            ":" +
            seconds
        );
    }
};
// 功能正在开发提示
export const devTips = (code = "") => {
    Beacon({ code });
    Taro.showToast({
        title: "该功能正在开发中",
        icon: "none",
        duration: 1500,
    });
};
// 检测更新版本
export const checkVersionUpDate = (callback = NOOP) => {
    const updateManager = Taro.getUpdateManager();

    updateManager.onCheckForUpdate(function (res) {
        // 请求完新版本信息的回调
        if (res.hasUpdate) {
            updateManager.onUpdateReady(function () {
                Taro.showModal({
                    title: "更新提示",
                    content: "新版本已经准备好，是否重启应用？",
                    success(res) {
                        if (res.confirm) {
                            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                            updateManager.applyUpdate();
                        } else {
                            Taro.showModal({
                                title: "您取消了更新",
                                content: `可以前往我的页面\r\n点击【版本更新】获取最新版本`,
                                confirmText: "我知道了",
                                showCancel: false,
                            });
                        }
                    },
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
export const writePhotosAlbum = (e, videoURL) => {
    Taro.showActionSheet({
        itemList: ["保存到相册"],
        success: () => {
            let url = videoURL || e.currentTarget.dataset.url;
            Taro.getSetting({
                success: (res) => {
                    if (res.authSetting["scope.writePhotosAlbum"]) {
                        if (videoURL) {
                            saveVideo(videoURL);
                        } else {
                            saveImg(url);
                        }
                    } else {
                        Taro.authorize({
                            scope: "scope.writePhotosAlbum",
                            success: () => {
                                if (videoURL) {
                                    saveVideo(videoURL);
                                } else {
                                    saveImg(url);
                                }
                            },
                            fail: () => {
                                Taro.showModal({
                                    title: "保存失败",
                                    content: "请开启访问手机相册权限",
                                    success: () => {
                                        Taro.openSetting();
                                    },
                                });
                            },
                        });
                    }
                },
            });
        },
    });
};
// 保存视频
export const saveVideo = (url) => {
    Taro.showLoading({ title: "正在保存视频" });
    Taro.downloadFile({
        url,
        success: (res) => {
            if (res.statusCode === 200) {
                Taro.saveVideoToPhotosAlbum({
                    filePath: res.tempFilePath,
                    success: () => {
                        Taro.showToast({ title: "保存成功" });
                        let FileSystemManager = Taro.getFileSystemManager();
                        FileSystemManager.unlink({
                            filePath: res.tempFilePath,
                        });
                    },
                    fail: (res) => {
                        Taro.showToast({ title: "保存失败", icon: "none" });
                        console.error("保存失败", res);
                    },
                });
            } else {
                Taro.showToast({ title: "下载失败, 请稍后再试", icon: "none" });
            }
        },
        fail: (err) => {
            Taro.showModal({
                title: "请联系客服处理",
                content: err.errMsg,
                showCancel: false,
            });
        },
        complete: () => {
            Taro.hideLoading();
        },
    });
};
// 保存图片
export const saveImg = (imgURL) => {
    Taro.getImageInfo({
        src: imgURL,
        success: (res) => {
            if (res.errMsg === "getImageInfo:ok") {
                Taro.saveImageToPhotosAlbum({
                    filePath: res.path,
                    success: () => {
                        Taro.showToast({ title: "保存成功" });
                        let FileSystemManager = Taro.getFileSystemManager();
                        FileSystemManager.unlink({ filePath: res.path });
                    },
                    fail: (res) => {
                        Taro.showToast({ title: "图片保存失败", icon: "none" });
                        console.error("图片保存失败", res);
                    },
                });
            }
        },
    });
};
/**
 * 放大图片预览
 * @param images   图片链接数组
 * @param curImg   当前图片链接
 */
export const imgPreview = ({ images = [], curImg = "" }) => {
    if (isEmpty(images)) return;

    Taro.previewImage({
        urls: images,
        current: images.length === 1 ? images[0] : curImg,
    });
};
/**
 * 返回一个介于min与max之间的随机整数
 * @param min 最小值
 * @param max 最大值
 */
export const getRandomInt = (min = 0, max = 10) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
/**
 * 随机化数组顺序
 * @param arr
 */
export const randomArray = (arr = []) => {
    if (isEmpty(arr)) return [];

    let result = [];
    while (arr.length > 0) {
        let randomNum = getRandomInt(0, arr.length - 1);
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
export const deDuplicationArray = (arr, key) => {
    if (typeof key !== 'string' || isEmpty(arr) || key === '') return [];

    return [...new Map(arr.map(item => [item[key], item])).values()]
}

/**
 * 是否为审核版本，部分功能审核版本隐藏
 * @return {boolean} 是审核版本返回true
 */
export const isTrialVersion = () => {
    let app = Taro.getApp();
    if (app.globalData.hasOwnProperty('isTrial')) {
        return app.globalData.isTrial;
    }
    const { miniProgram } = Taro.getAccountInfoSync();
    app.globalData.isTrial = miniProgram.envVersion === "trial";

    return app.globalData.isTrial;
}
