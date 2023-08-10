import Taro, { Component } from '@tarojs/taro';
import { Button, OfficialAccount, View } from '@tarojs/components';
import { AtList, AtListItem } from "taro-ui"
import Header from 'components/Header';
import './index.scss';
import { connect } from '@tarojs/redux';
import { getNavBarHeight } from 'utils/index';
import MyInfo from './myInfo';
import ScrollList from 'components/ScrollList';
@connect(({ home }) => home)
/**
 * 设置页
 */
class MySetting extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    // 分享微信好友
    onShareAppMessage(obj) {
        return {
            title: '一曲肝肠断,天涯何处觅知音？',
            path: '/pages/index/index',
            imageUrl: 'https://www.baidu.com/link?url=lTZ00oI4P-Rk0HvaMR_u7iSsVP9F0omVMpdBniDrOOlH-3HEgKacVcPzbVC0xVLRgi3xPPxWhLrlIS-1Wo_U9nqB2ddzE2UzGcw7Y2kqAXYeXUxq_xXGkA6jBJzy6tuMxghTmzRPw29lrAfndPlqwAjX0xGsGcoS1uYpAqS7kgCeghJE7sZ0AcYHy2492DtWxgdnyvEn7BExyrd8XeARd58_uqrtJJXGwPi70midlS-YtYf68gQx6dwNtlE24mvfPndiUx_CTFiDykPe5ji1G8dxqS94LHsctWw8wGMHIVNiAUah7fRSy6DXY_g2JGSp4Wae02h-YGlICOtqro-rOlxv4u9NvhZXCJpJGbS7xF1gLAGivtuqWPOi4Eos6O8JqgMryB5JOA3nlK8KTeP3IQpaS9PjzeAvJCmj9HW0bo1Ecbw9rI5X5roQSBkWcjvjqc3iGfj17_FBKIyYoEoxqsIhMUQK4VzM-RzEDjbaeJg9ejZwWDEEtSpN1e3CpvS03ExMVH3j_H9GP4EHjW2c_72Lj_r-C5_qSvneoyLr5ECTStu79ohuijJGIgoiqDOkWtcpuFbtPCFfxehl3AwIAHiDtlrNRB1s7mOX6GoGo8fyjQYPKFR0lSMHSVy6cqJzQxSeLm5RKkuWwAcugnDX5_&wd=&eqid=89bce2b40000a8d50000000464d35b81',
        }
    }
    onRefresh = () => {

    }
    render() {

        return (
            <View className='my-setting'>
                <Header backgroundColor='linear-gradient(rgba(0, 145, 255, 0.5), rgba(0, 169, 255, 0.5))' />
                <ScrollList
                    height={`calc(100vh - ${getNavBarHeight()}px)`}
                    refresherEnabled={true}
                    refresherDefaultStyle='white'
                    refresherBackground='rgba(0, 169, 255, 0.5)'
                    // refresherTriggered={triggered && this.scrollStatus}
                    onRefresherRefresh={this.onRefresh}
                >
                    <MyInfo
                        shopList={[]}
                        dfLogin={false}
                        wxLogin={false}
                        needFresh={false}
                        serviceEnd={'2024-01-01'}
                    />
                    <OfficialAccount />
                    <AtList className='my-list'>
                        <Button openType='share'>
                            <AtListItem
                                title='分享'
                                arrow='right'
                            />
                        </Button>
                        {/* <AtListItem
                            title='帮助中心'
                            arrow='right'
                            onClick={this.goToHelpPage}
                        />
                        <AtListItem
                            title='我的服务'
                            arrow='right'
                            onClick={this.goToServicePage}
                        /> */}
                    </AtList>
                </ScrollList>
            </View>
        )
    }
}

export default MySetting;
