import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtDivider } from 'taro-ui';

/**
 * 列表加载线条
 * @param {string} btnText         文案
 * @param {string} backgroundColor 背景色
 */
function LoadingLine ({ btnText, backgroundColor }) {
    return (
        <AtDivider customStyle={{ backgroundColor }} fontColor='#999' fontSize='24' lineColor='#e5e5e5'>
            <View style={{ backgroundColor }}> { btnText } </View>
        </AtDivider>
    )
}

LoadingLine.defaultProps = {
    btnText: '到底了',
    backgroundColor: '#fff'
}

export default LoadingLine;
