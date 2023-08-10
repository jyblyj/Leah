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

const INITIAL_STATE = {
    wxLogin: false, // 微信是否授权
    dfLogin: false, // 代发是否授权
    wxLoginShow: false, // 微信弹窗显示
    weChatNick: '',   // 微信昵称
    vipFlag: 0,       // 是否为代发高级版，1为高级版
    isVip: false,
    unionId: '',      // unionId
    shopList: [],     // 店铺列表
    currentShopIndex: 0, // 当前选择的店铺索引
    itemInfo: {},      // 商品详情页
    distributeInfo: {}, // 铺货信息
    supplierDetail: {}, // 供应商详情页数据
    condition: '',/* 筛选条件 */
    fromShop: 0, //0 不是从微信小商店过来的 1从微信小商店过来但没授权 2从微信小商店过来且授权成功 3从视频号小店过来但没授权 4从视频号小店过来且授权成功
    serviceEnd: '',/* 服务到期时间 */
}

export default function home(state = INITIAL_STATE, action) {
    switch (action.type) {
        case WX_LOGIN_CHANGE:
            return { ...state, wxLogin: action.payload }
        case DF_LOGIN_CHANGE:
            return { ...state, dfLogin: action.payload }
        case SET_INFO_WX:
            return { ...state, ...action.payload }
        case SET_SHOP_LIST:
            return { ...state, shopList: action.payload }
        case SET_SHOP_INDEX:
            return { ...state, currentShopIndex: action.payload }
        case SET_WX_LOGIN_SHOW:
            return { ...state, wxLoginShow: action.payload }
        case SET_ITEM_INFO:
            return { ...state, itemInfo: action.payload }
        case SET_DISTRIBUTE_INFO:
            return { ...state, distributeInfo: { ...state.distributeInfo, ...action.payload } }
        case SET_SUPPLIER_DETAIL:
            return { ...state, supplierDetail: { ...action.payload } }
        case SET_CONDITION:
            return { ...state, condition: action.payload }
        case SET_FROM_SHOP:
            return { ...state, fromShop: action.payload }
        default:
            return state
    }
}
