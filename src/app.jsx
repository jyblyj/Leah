import Taro, { Component } from "@tarojs/taro";
import { Provider } from "@tarojs/redux";
import configStore from "./store";
import Index from "./pages/index";
import "./app.scss";
import wxLog from "utils/wxLog";
import { isEmpty } from "utils/index";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5') {
//     require('nerv-devtools')
// }

const store = configStore();

class App extends Component {
    store = store;
    globalData = {};
    config = {
        pages: [
            "pages/index/index",
            "pages/orderList/index",
            "pages/source/index",
            "pages/saleProduct/index",
            "pages/mySetting/index",
            // "pages/searchItem/index",
            // "pages/itemDetail/index",
            // "pages/distributeSubmit/index",
            // "pages/logList/index",
            // "pages/guessLike/index",
            // "pages/myCollection/index",
            // "pages/accountList/index",
            // "pages/orderDetail/index",
            // "pages/similarProduct/index",
            // "pages/switichShopPages/index",
            // "pages/videoIndex/index",
        ],
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
                packages: ["packageOrder", "packageShop", "packageSetting"],
            },
        },
        window: {
            backgroundTextStyle: "light",
            navigationBarBackgroundColor: "#fff",
            navigationBarTitleText: "代发助手",
            navigationStyle: "custom",
        },
        tabBar: {
            // "custom": true,
            color: "#ADADAD",
            selectedColor: "#F37845",
            backgroundColor: "#ffffff",
            borderStyle: "black",
            list: [
                {
                    pagePath: "pages/index/index",
                    text: "首页",
                    iconPath: "./assets/imgs/home_uncheck.png",
                    selectedIconPath: "./assets/imgs/home_check.png",
                },
                {
                    pagePath: "pages/orderList/index",
                    text: "统计",
                    iconPath: "./assets/imgs/order_uncheck.png",
                    selectedIconPath: "./assets/imgs/order_check.png",
                },
                {
                    pagePath: "pages/source/index",
                    text: "日历",
                    iconPath: "./assets/imgs/source_uncheck.png",
                    selectedIconPath: "./assets/imgs/source_check.png",
                },
                {
                    pagePath: "pages/saleProduct/index",
                    text: "备忘",
                    iconPath: "./assets/imgs/product_uncheck.png",
                    selectedIconPath: "./assets/imgs/product_check.png",
                },
                {
                    pagePath: "pages/mySetting/index",
                    text: "我的",
                    iconPath: "./assets/imgs/my_uncheck.png",
                    selectedIconPath: "./assets/imgs/my_check.png",
                },
            ],
        },
    };

    componentWillMount() {
        if (Taro.getEnv() === "WEAPP") {
            this.setNavBarInfo();
        }

        const res = Taro.getLaunchOptionsSync();
        if (res.scene == "1065") {
            // 这里说明是从URL scheme进来的
            wxLog.info(`二维码URL scheme: ${JSON.stringify(res)}`);
            this.globalData.from = "URLScheme";
            this.globalData.fromQuery = res.query;
        }

        if ([1047, 1048, 1049].includes(res.scene) && !isEmpty(res.query)) {
            // 从小程序二维码进来的
            this.globalData.qrCodeUserId = res.query.scene;
            wxLog.info(`从小程序二维码进来的: ${JSON.stringify(res)}`);
        }
    }

    //  获取小程序信息，用于设置自定义顶部
    setNavBarInfo = () => {
        // 获取系统信息
        const systemInfo = Taro.getSystemInfoSync();
        // 胶囊按钮位置信息
        const menuButtonInfo = Taro.getMenuButtonBoundingClientRect();
        // 导航栏高度 = 状态栏到胶囊的间距（胶囊距上距离-状态栏高度） * 2 + 胶囊高度 + 状态栏高度
        this.globalData.navBarHeight =
            (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 +
            menuButtonInfo.height +
            systemInfo.statusBarHeight;
        this.globalData.menuBottom =
            menuButtonInfo.top - systemInfo.statusBarHeight;
        this.globalData.menuRight =
            systemInfo.screenWidth - menuButtonInfo.right;
        this.globalData.menuHeight = menuButtonInfo.height;
    };

    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数
    render() {
        return (
            <Provider store={store}>
                <Index />
            </Provider>
        );
    }
}

Taro.render(<App />, document.getElementById("app"));
