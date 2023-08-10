import { Domain } from 'env/domain';
import Taro from '@tarojs/taro';
import { isEmpty } from 'utils/index';

/**
 * promise网络请求
 * @param host     请求域名
 * @param router   请求路由/目录
 * @param method   请求方法
 * @param params   请求参数
 * @param header   自定义头
 * @param rest     其他参数
 * @return {Promise<void>}
 */
async function fetch(
    {
        host = Domain.WEB_URL,
        router = '',
        method = 'GET',
        params = {},
        header = {},
        ...rest
    }
) {

    let requestHeader = {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-From-App": "wx_distribute",
        ...header,
    };
    let app = Taro.getApp();
    if (!isEmpty(app.globalData) && !isEmpty(app.globalData.phpSessionId)) {
        requestHeader.cookie = 'PHPSESSID=' + app.globalData.phpSessionId;
    }

    try {
        const result = await Taro.request({
            url: host + router,
            method,
            header: requestHeader,
            data: params,
            credentials: 'include',
            ...rest,
        });
        if (!isEmpty(result) && !isEmpty(result.data)) {
            return result.data;
        } else {
            console.error('请求错误：', result);
        }
    } catch (e) {
        console.error('请求错误：', e);
    }
}

export default fetch;
