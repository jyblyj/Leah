import Taro from '@tarojs/taro';
import { Text, View } from '@tarojs/components';
import './index.scss';
import { NOOP } from 'utils/index';

/**
 * tab标签选项
 * @param {array} tabList           tab数据
 * @param {number} currentTabIndex  当前选择的tab索引
 * @param {function} changeTab      选择tab函数回调
 * @param {number} totalRecords     当前tab下项目总数
 */
function TabList (
    {
        tabList,
        currentTabIndex,
        changeTab,
        totalRecords
    }) {
    return (
        <View className='tab-item'>
            {tabList.map((item, index) => (
                <View
                    className={`item ${currentTabIndex === index && 'active'}`}
                    key={item.title}
                    onClick={() => changeTab(index)}
                >
                    {item.title} {currentTabIndex === index ? totalRecords : ''}
                    {currentTabIndex === index ? null : item.redNum && <Text className='red-dot'>{item.redNum}</Text>}
                </View>
            ))}
        </View>
    )
}

TabList.defaultProps = {
    tabList: [],
    currentTabIndex: 0,
    changeTab:NOOP,
    totalRecords: 0,
}

export default TabList;
