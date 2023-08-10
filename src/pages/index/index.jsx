import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import Header from 'components/Header';
import './index.scss';

@connect(({ home }) => home)
/**
 * 首页
 */
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount() {
        if (Taro.getEnv() === 'WEB') {
            Taro.setNavigationBarTitle({
                title: '后起之秀'
            });
        }
    }
    render() {
        return (
            <View className='index'>
                <Header title={'小贴士'} backgroundColor='linear-gradient(rgba(0, 169, 255, 0.5), rgba(0, 196, 255, 0.5))' />
                <View>公司简介</View>
                <View className='index-introduce-card'>
                    <Text className='index-introduce-card-txt'>
                        我们是一家专业的服装厂，致力于设计、制造和销售高质量的时尚服装。我们拥有一支经验丰富且富有创造力的设计团队，他们紧跟时尚潮流，不断推陈出新。我们的工厂设备先进，生产线高效，能够确保产品的高质量和准时交付。
                    </Text>
                    <Text className='index-introduce-card-txt'>
                        作为一家服装厂，我们注重品质和可持续性。我们选择优质的面料和材料，并且严格把控生产过程中的每一个环节，以确保我们的产品符合最高的标准。我们也积极采取环保措施，减少对环境的影响。
                    </Text>
                    <Text className='index-introduce-card-txt'>
                        我们的服装厂提供多样化的服装制造服务，包括定制服装、批量生产以及品牌合作。我们与国内外的客户建立了长期合作关系，并且以我们的专业和可靠性而闻名。我们的目标是为客户提供最好的产品和服务，满足他们的需求和期望。
                    </Text>
                    <Text className='index-introduce-card-txt'>
                        如果您对我们的服装厂有任何疑问或合作意向，请随时与我们联系。我们期待与您合作，共同打造时尚与品质兼具的服装产品。
                    </Text>
                </View>
                <View>统计看板</View>
                <View className='index-message-card'>用来记录截止今天所有员工、每道工序的总数，例如：衣服：**件，裤子：**件，需要支付给员工的薪资：**元，总共带来的利润：**元</View>
                <Image className='index-image-box' src='https://img1.baidu.com/it/u=413894958,3921115500&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=855' onClick={() => {
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

export default Index
