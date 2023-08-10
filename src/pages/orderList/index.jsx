import Taro, { Component } from '@tarojs/taro';
import { View, ScrollView, Image, CheckboxGroup, Checkbox, Text, MovableArea, MovableView } from '@tarojs/components';
import { AtSearchBar, AtDrawer, AtActionSheet } from 'taro-ui'
import { connect } from '@tarojs/redux';
import Header from 'components/Header';
import { getNavBarHeight } from 'utils/index';
import { PAGE_SIZE } from './constant';
import './index.scss';
const PAGE_LIST = [
    { name: '小红', jacketNums: 1, pantsNums: 21, counts: 0 },
    { name: '小橙', jacketNums: 2, pantsNums: 22, counts: 0 },
    { name: '小黄', jacketNums: 3, pantsNums: 23, counts: 0 },
    { name: '小绿', jacketNums: 4, pantsNums: 24, counts: 0 },
    { name: '小青', jacketNums: 5, pantsNums: 25, counts: 0 },
    { name: '小蓝', jacketNums: 6, pantsNums: 26, counts: 0 },
    { name: '小紫', jacketNums: 7, pantsNums: 27, counts: 0 },
];
@connect(({ home, order }) => {
    return { ...home, ...order };
})

/**
 * 统计列表页面
 */
class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabList: [
                { title: '姓名', orderStatus: '0', code: 'daicaigou_show' },
                { title: '日期', orderStatus: '1', code: 'daifahuo_show' },
                { title: '上衣', orderStatus: '2', code: 'yifahuo_show' },
                { title: '裤子', orderStatus: '4', code: 'tuikunzhong_show' },
                { title: '合计', orderStatus: '5', code: 'yiguanbi_show' },
                { title: '详情', orderStatus: '3', code: 'yichenggong_show' },
            ],
            currentTab: 0,  // 当前选中的tab索引
        }
    }
    pageNo = 1;
    pageSize = PAGE_SIZE;

    config = {
        enablePullDownRefresh: false,
        disableScroll: true,
    }
    // 小程序下拉刷新
    onRefresh = async () => {
        console.log("onRefresh");
    }

    // 触底加载
    onScrollToLower = () => {
        const { orderList } = this.props;
    }


    searchValueChange = () => {

    }
    searchOrder = () => {

    }
    render() {
        const {
            tabList,
        } = this.state;

        return (
            <MovableArea className='page-wrap'>
                <Header title={'统计列表'} backgroundColor='linear-gradient(rgba(0, 169, 255, 0.5), rgba(0, 196, 255, 0.5))' />
                <View className='search-view'>
                    <View className='search-bar'>
                        <AtSearchBar
                            placeholder={'输入要搜索的姓名'}
                            onActionClick={this.searchOrder}
                            value={''}
                            onChange={this.searchValueChange}
                            onConfirm={this.searchOrder}
                        />
                    </View>
                </View>
                <View className='tab-view'>
                    {tabList.map((item, index) => (
                        <View
                            className='item'
                            key={item.title}
                        >
                            {item.title}
                        </View>
                    ))}
                </View>
                <ScrollList
                    className='page-list-box'
                    height={`calc(100vh - ${getNavBarHeight() + 80}px)`}
                // customStyle={{
                //     backgroundColor: '#F5F5F5',
                //     boxSizing: 'border-box',
                //     paddingBottom: 0,
                // }}
                >
                    {PAGE_LIST.map((listItem, listIndex) => {
                        return (
                            <View key={listIndex} className='page-list-item'>
                                <View className='page-list-item-line'>{listItem.name}</View>
                                <View className='page-list-item-line'>2023-08-09</View>
                                <Input className='page-list-item-line' type='number' placeholder='这是一个数字输入框' value={listItem.jacketNums} />
                                {/* <AtInputNumber
                                    min={0}
                                    max={9999}
                                    width={125}
                                    step={1}
                                    value={listItem.jacketNums}
                                    onChange={this.handleChange}
                                    type='number'
                                />
                                <AtInputNumber
                                    min={0}
                                    max={9999}
                                    width={125}
                                    step={1}
                                    value={listItem.pantsNums}
                                    onChange={this.handleChange}
                                    type='number'
                                /> */}
                                <Input className='page-list-item-line' type='number' placeholder='这是一个数字输入框' value={listItem.pantsNums} />
                                <View className='page-list-item-line'>200元</View>
                                <View className='page-list-item-line' onClick={() => {
                                    Taro.showToast({
                                        title: '可修改每道工序的单价',
                                        icon: 'none',
                                        duration: 2000,
                                    });
                                }}>修改</View>
                            </View>
                        )
                    })}
                </ScrollList>
            </MovableArea>
        )
    }
}

export default Order;
