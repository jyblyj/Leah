/**
 * @author cy
 * 网络请求
 */
import Taro from '@tarojs/taro';
import { Domain } from 'env/domain';
import { isEmpty, ToQueryString, Parse2json } from 'utils/index';

let NetWork = {};
const WEB_URL = Domain.WEB_URL;

const request = ({ url, param = {}, host = WEB_URL, method = 'GET', successCallback, errorCallback }) => {
    let queryStr = '';
    if (isEmpty(param)) {
        queryStr = '';
    } else {
        queryStr = ToQueryString(param);
        if (queryStr) {
            queryStr = "?" + queryStr;
        } else {
            queryStr = '';
        }
    }

    let codeUrl = host + url + queryStr;

    let headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-From-App": "wx_distribute"
    };

    let app = Taro.getApp();
    if (!isEmpty(app.globalData) && !isEmpty(app.globalData.phpSessionId)) {
        headers.cookie = 'PHPSESSID=' + app.globalData.phpSessionId;
    }

    return Taro.request({
        method: method,
        url: encodeURI(codeUrl),
        dataType: 'json',
        data: '',
        header: headers,
        credentials: 'include'
    }).then((result) => {
        if (!isEmpty(result) && !isEmpty(result.data)) {
            if (successCallback) {
                try {
                    successCallback(Parse2json(result.data));
                } catch (e) {
                    successCallback(result.data);
                }
            }
        } else {
            if (successCallback) {
                successCallback({});
            }
        }
    }).catch((error) => {
        console.error(error);
        if (errorCallback) {
            errorCallback(error);
        }
    });
}

NetWork.Post = ({
    url, param = {}, host = WEB_URL, successCallback, errorCallback
}) => {
    return request({ url, param, host, method: 'post', successCallback, errorCallback })
}

NetWork.Get = ({
    url, param = {}, host = WEB_URL, successCallback, errorCallback
}) => {
    return request({ url, param, host, method: 'get', successCallback, errorCallback })
}

export { NetWork };
