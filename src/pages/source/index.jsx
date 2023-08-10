import Taro, { Component } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import Header from 'components/Header';
import { View, Image } from '@tarojs/components';
import './index.scss';
@connect(({ home }) => home)
/**
 * 日历
 */
class Source extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <View className='source-page'>
                <Header title={'日历'} backgroundColor='linear-gradient(rgba(0, 169, 255, 0.5), rgba(0, 196, 255, 0.5))' />
                <Image className='source-page-img-box' src='https://c-ssl.duitang.com/uploads/item/201407/20/20140720141535_Azvr8.jpeg' onClick={() => {
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

export default Source;
