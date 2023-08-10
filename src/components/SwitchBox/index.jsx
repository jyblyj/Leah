import Taro from '@tarojs/taro';
import { Text, View } from '@tarojs/components';
import './index.scss';
import { NOOP } from 'utils/index';

/**
 * @author JYB
 * switch开关组件
 */
function SwitchBox (
    {
        isChecked,
        color,
        onInputChange
    }) {
    return (
        <View className='switch' onClick={onInputChange.bind(this,isChecked)}>
            <View className='switch-check-box' style={isChecked ? {backgroundColor: color} : {backgroundColor: '#a7aaa6'}}/>
            <View className={isChecked ? 'switch-container-checked' : 'switch-container'} />
        </View>
    )
}

SwitchBox.defaultProps = {
    onInputChange: NOOP,
    isChecked: false,
    color: '',
}

export default SwitchBox;
