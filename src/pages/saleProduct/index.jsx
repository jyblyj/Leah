import Taro, { Component } from '@tarojs/taro';
import { Checkbox, Image, View, CheckboxGroup, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import Header from 'components/Header';
import './index.scss';
@connect(({ home, product }) => {
    return { ...home, ...product }
})

// 备忘录页面
class SaleProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <View className='page-wrap'>
                <Header title={'备忘录'} backgroundColor='linear-gradient(rgba(0, 169, 255, 0.5), rgba(0, 196, 255, 0.5))' />
                <Image className='page-wrap-img-box' src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201903%2F11%2F20190311000407_tlxbh.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1694165424&t=00fb99d6db201d29e9df5412f8fa8a1b' onClick={() => {
                    Taro.showToast({
                        title: '来了，老铁',
                        icon: 'none',
                        duration: 2000,
                    });
                }}></Image>
            </View>
        )
    }
}

export default SaleProduct;
