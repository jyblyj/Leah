import Taro from '@tarojs/taro';
import { Text, View } from '@tarojs/components';
import { isIphoneX, NOOP } from 'utils/index';
import './index.scss';

/**
 * 吸底按钮
 * @param {string}   name           按钮文字
 * @param {function} onClick        点击事件函数
 * @param {boolean}  disable        按钮状态 true为不能点击
 * @param {boolean}  linear         是否渐变背景
 * @param {object}   doubleSetting  是否为两个按钮
 * @param {boolean}  checkIphoneX   是否需要检测全面屏
 */
function FixedButton ({ name, onClick, disable, linear, doubleSetting, checkIphoneX }) {
    return(
        <View className={`fixed-view ${!checkIphoneX ? '' : isIphoneX() && 'fullscreen'}`}>
            {doubleSetting.switch ? <View className='double-btn'>
                <Text
                    className='double-left'
                    onClick={doubleSetting.leftClick}
                    style={{ backgroundColor: doubleSetting.leftBgColor, color: doubleSetting.leftTextColor }}
                >
                    {doubleSetting.leftName}
                </Text>
                <Text
                    className='double-right'
                    onClick={doubleSetting.rightClick}
                    style={{ backgroundColor: doubleSetting.rightBgColor, color: doubleSetting.rightTextColor }}
                >
                    {doubleSetting.rightName}
                </Text>
            </View> : <View className={`fixed-btn ${disable && 'disable-btn'} ${linear && 'linear-bg'}`} onClick={onClick}>
                {name}
            </View>}
        </View>
    )
}

FixedButton.defaultProps = {
    name: '',
    onClick: NOOP,
    disable: false,
    linear: false,
    checkIphoneX: true,
    doubleSetting: {               // 两个按钮
        switch: false,             // 是否开启
        leftName: '左边按钮文字',
        leftBgColor: '#FF9500',
        leftTextColor: '#fff',
        leftClick: NOOP,
        rightName: '左边按钮文字',
        rightBgColor: '#ff6000',
        rightTextColor: '#fff',
        rightClick: NOOP,
    },
}

export default FixedButton;
