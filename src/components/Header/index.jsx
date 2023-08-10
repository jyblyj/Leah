import Taro from '@tarojs/taro';
import { Text, View } from '@tarojs/components';
import './index.scss';

/**
 * 自定义小程序头部导航栏
 * @param {string} title           导航栏标题
 * @param {string} backgroundColor 背景色
 * @param {object} customStyle     自定义样式
 */
function Header ({ title, customStyle, backgroundColor }) {
    let app = Taro.getApp();
    const { navBarHeight = 60, menuBottom = 4, menuHeight = 32 } = app.globalData;

    const style = {
        height: `${navBarHeight}px`,
        background: backgroundColor,
        ...customStyle,
    };

    if(Taro.getEnv() === 'WEAPP'){
        return(
            <View className='header' style={style}>
                <View style={{ height: `${menuHeight}px`, lineHeight: `${menuHeight}px`, bottom: `${menuBottom + 4}px` }}>
                    <Text className='title'>{title}</Text>
                </View>
            </View>
        )
    }
}

Header.defaultProps = {
    title: '',
    backgroundColor: 'linear-gradient(#EA4d2C, #FFA62E)',
    customStyle: {},
}

export default Header;
