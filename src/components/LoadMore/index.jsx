import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtDivider } from 'taro-ui';

/**
 * 加载线条
 * @param text 线条文案
 */
function LoadMore({ text = '加载中...' }) {
    return(
        <View className='load-more-box padding-load'>
            <AtDivider className='load-more' content='' fontColor='#333333' lineColor='#e5e5e5' >
                <View className='load-content'>{text}</View>
            </AtDivider>
        </View>
    )
}

export default LoadMore
