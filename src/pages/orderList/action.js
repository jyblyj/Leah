import Taro from '@tarojs/taro';
import {
    CHANGE_ORDER_STATE
} from 'constant/actionType';

let app = Taro.getApp();
export const changeState = (newState) => {
    app.store.dispatch({
        type: CHANGE_ORDER_STATE,
        data: newState
    })
}


