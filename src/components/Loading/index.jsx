import Taro from '@tarojs/taro';
import { AtActivityIndicator } from 'taro-ui';

/**
 * loading组件
 * @document https://taro-ui.jd.com/#/docs/activityindicator
 * @param {string} content 加载文字
 * @param {string} mode    元素的类型
 */
function Loading ({ content, mode }) {
    return(
        <AtActivityIndicator
            mode={mode}
            color='#ff6600'
            content={content}
        />
    )
}

Loading.defaultProps = {
    content: '加载中...',
    mode: 'center'
}

export default Loading;
