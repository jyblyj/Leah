import Taro from '@tarojs/taro';
import { ScrollView } from '@tarojs/components';
import { NOOP } from 'utils/index';

/**
 * 竖向滚动列表 用于下拉刷新/触底加载
 * @param {React.Node} children              列表内容
 * @param {string} height                    高度
 * @param {object} customStyle               自定义样式
 * @param {string} refresherDefaultStyle     下拉刷新加载按钮颜色
 * @param {string} refresherBackground       下拉刷新背景色颜色
 * @param {boolean} refresherTriggered       下拉刷新开关
 * @param {function} onRefresherRefresh      下拉刷新回调
 * @param {function} onScrollToLower         触底加载回调
 * @param {boolean} refresherEnabled         是否开启下拉刷新
 * @param {number} lowerThreshold            距底部/右边多远时，触发 scrolltolower 事件
 * @param {string}  className                className
 * @param {function} onScroll                滚动事件
 * @param {number}  scrollTop                滚动条位置
 */
function ScrollList (
    {
        children,
        height,
        customStyle,
        refresherDefaultStyle,
        refresherBackground,
        refresherTriggered,
        onRefresherRefresh,
        onScrollToLower,
        refresherEnabled,
        lowerThreshold,
        className,
        onScroll,
        scrollTop,
    }) {
    return (
        <ScrollView
            scrollY
            enableBackToTop
            className={className}
            refresherEnabled={refresherEnabled}
            style={{ height, ...customStyle }}
            refresherDefaultStyle={refresherDefaultStyle}
            refresherBackground={refresherBackground}
            refresherTriggered={refresherTriggered}
            onRefresherRefresh={onRefresherRefresh}
            onScrollToLower={onScrollToLower}
            lowerThreshold={lowerThreshold}
            onScroll={onScroll}
            scrollTop={scrollTop}
        >
            {children}
        </ScrollView>
    )
}

ScrollList.defaultProps = {
    height: '100vh',
    refresherEnabled: true,
    refresherDefaultStyle: 'black',
    refresherBackground: '#fff',
    refresherTriggered: false,
    onRefresherRefresh: NOOP,
    onScrollToLower: NOOP,
    customStyle: {},
    className: '',
    lowerThreshold: 250,
    onScroll: NOOP,
    scrollTop: 0,
}

export default ScrollList;
