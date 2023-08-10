import Taro, { useState, useEffect } from '@tarojs/taro';
import { Image, Text, View, OpenData } from '@tarojs/components';
import './index.scss';
import { devTips, GetTimeString, isEmpty, NOOP } from 'utils/index';

/**
 * 我的信息
 */
function MyInfo(
    {
        dfLogin,
        wxLogin,
        shopList,
        needFresh,
        checkDFLogin,
        serviceEnd
    }) {
    const [myInfo, setMyInfo] = useState({
        vipFlag: '0',
        endTime: '',
        loginId: '',
    });
    //  要不要红点
    const [redDot, setRedDot] = useState(false);
    const [myList, setMyList] = useState([
        {
            name: '厂商',
            code: 'my_shop_click',
            value: shopList.length,
        },
        {
            name: '收藏',
            code: 'my_collect_click',
            value: 0,
        },
        {
            name: '积分',
            code: 'my_integral_click',
            value: 0,
        },
        {
            name: '账户',
            code: 'my_current_click',
            value: 0,
        },
    ]);

    useEffect(() => {
        if (dfLogin) {
            getData();
        }
    }, [dfLogin])

    useEffect(() => {
        if (needFresh) {
            getData();
        }
    }, [needFresh])

    useEffect(() => {
        setMyList(list => {
            list[0].value = shopList.length;
            return list;
        });
    }, [shopList])

    const getData = async () => {
    }

    let text = '';

    let noticeStyle = {
        position: 'relative',
        margin: '0 36px',
        padding: '12px 40px',
        fontSize: '18px',
        borderRadius: '10px 10px 0 0',
        color: '#333',
        background: 'linear-gradient(#CDA947, #EACC7C)',
        textAlign: 'center',
    }

    return (
        <View className='my-info'>
            <View className='my-top' onClick={checkDFLogin}>
                <View className='user-img'>
                    <OpenData type='userAvatarUrl' />
                </View>
                <View className='user-txt'>
                    {myInfo.loginId
                        ? <Text className='nick'>{myInfo.loginId}</Text>
                        : <View className='nick'> <OpenData type='userNickName' /> </View>
                    }
                </View>
            </View>
            <View className='info-list' onClick={checkDFLogin}>
                {myList.map((item, index) => {
                    return (
                        <View key={item.name} className='info-list-item'>
                            <Text>{item.value}</Text>
                            <Text className='info-title'>{item.name}</Text>
                            {index === 1 && redDot && <Text className='red-dot' />}
                        </View>
                    )
                })}
            </View>
            {/* 公告栏预留 */}
            {/*<View onClick={goWeb}>*/}
            {/*    <AtNoticebar customStyle={noticeStyle} single >*/}
            {/*        关注代发助手公众号，最新资讯及时知晓*/}
            {/*    </AtNoticebar>*/}
            {/*</View>*/}
        </View>
    )
}

MyInfo.defaultProps = {
    dfLogin: false,
    needFresh: false,
    wxLogin: false,
    shopList: [],
    checkDFLogin: NOOP,
}

export default MyInfo;
