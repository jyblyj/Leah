import Taro from '@tarojs/taro';
import { getProxyShopInfo, getShopAuthor } from 'apis/shop';
import { getUserInfo } from 'apis/user';
import { isEmpty } from 'utils/index';
import { Beacon } from 'utils/Beacon';
import {
    DF_LOGIN_CHANGE, SET_DISTRIBUTE_INFO,
    SET_INFO_WX, SET_ITEM_INFO,
    SET_SHOP_INDEX,
    SET_SHOP_LIST, SET_SUPPLIER_DETAIL,
    SET_WX_LOGIN_SHOW,
    WX_LOGIN_CHANGE,
    SET_CONDITION,
    SET_FROM_SHOP
} from 'constant/actionType';

let app = Taro.getApp();

// 改变代发授权状态
export const dfLogin = (payload) => {
    app.store.dispatch({
        type: DF_LOGIN_CHANGE,
        payload,
    });
}
// 改变微信授权状态
export const wxLogin = (payload) => {
    app.store.dispatch({
        type: WX_LOGIN_CHANGE,
        payload,
    });
    // 授权成功关闭弹窗
    if (payload) {
        setWXLoginShow(false);
    }
}
// 设置微信用户信息 openID等
export const setInfo = (payload) => {
    app.store.dispatch({
        type: SET_INFO_WX,
        payload,
    })
}
//  设置用户的店铺列表
export const setShopList = async () => {
    const { result } = await getProxyShopInfo();

    if (!isEmpty(result)) {
        let shopIds = result.map(({ id }) => id);
        const authRes = await getShopAuthor({ shopIds });

        // authFail为true，店铺授权到期
        for (const item of result) {
            if (!isEmpty(authRes.result)) {
                item.authFail = authRes.result.indexOf(item.id) !== -1;
            }
        }

    }

    app.store.dispatch({
        type: SET_SHOP_LIST,
        payload: result,
    });
}
/**
 * 设置当代发助手没有授权时，用户店铺的假数据（仅有过来的微信小商店店铺名）
 * @param {*} code 小商店code
 */
export const setWxShopList = async (data) => {
    let _data = [{
        pic_url: `https://q.aiyongtech.com/1688/web/img/preview/${data.shopType}Logo.png`,
        remark: null,
        shop_care_num: "0",
        shop_name: data.shopName,
        shop_type: data.shopType,
        user_nick: data.storeNick,
    }];
    app.store.dispatch({
        type: SET_SHOP_LIST,
        payload: _data,
    });
}
// 切换店铺
export const changeShop = (index) => {
    app.store.dispatch({
        type: SET_SHOP_INDEX,
        payload: index,
    })
}
// 更改筛选条件
export const changeCondition = (data) => {
    app.store.dispatch({
        type: SET_CONDITION,
        payload: data,
    })
}
// 设置微信弹窗显示
export const setWXLoginShow = (payload) => {
    getUserInfo().then(() =>
        app.store.dispatch({
            type: SET_WX_LOGIN_SHOW,
            payload,
        })
    );
    // Beacon({ code: 'weixing_givepowersucess' });
    // Taro.showToast({
    //     title: '授权成功',
    //     icon: 'success',
    //     duration: 2000
    // });
    // return;
    // app.store.dispatch({
    //     type: SET_WX_LOGIN_SHOW,
    //     payload, 
    // });
}

// 设置商品详情页的数据
export const setItemDetail = (payload) => {
    app.store.dispatch({
        type: SET_ITEM_INFO,
        payload,
    });
}
// 设置要铺货的信息参数
export const setDistributeInfo = ({ item = {}, shopList = [], batchType = false, productIDs = [], type = 'fast' }) => {
    let payload = {};
    if (!isEmpty(item.distributeInfo)) {
        payload = item.distributeInfo;
    } else {
        if (!isEmpty(item)) {
            if (batchType) {
                // 批量铺货
                Object.assign(payload, {
                    productId: productIDs.join(),
                    batchType: '1',
                    supplierMemberId: item.memberId,
                    type,
                })
            } else {
                Object.assign(payload, {
                    productId: item.offerId,
                    batchType: 'single',
                    supplierMemberId: '',
                    type,
                });
            }
        } else {
            Object.assign(payload, { shopList });
        }
    }

    app.store.dispatch({
        type: SET_DISTRIBUTE_INFO,
        payload,
    })
}
// 设置供应商详情页数据
export const setSupplierDetail = async (payload = {}) => {
    app.store.dispatch({
        type: SET_SUPPLIER_DETAIL,
        payload,
    })
}
//设置是否来自于微信小商店的flag
export const setFromShop = (payload) => {
    app.store.dispatch({
        type: SET_FROM_SHOP,
        payload,
    })
}
// 更新用户的信息
export const updateUserMsg = (payload) => {
    app.store.dispatch({
        type: SET_INFO_WX,
        payload,
    })
}