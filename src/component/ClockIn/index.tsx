import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import classnames from 'classnames/bind';
import style from './index.scss'

const cx = classnames.bind(style)

interface IProps {

}


const ClockIn: Taro.FC<IProps> = () => {

    return (
        <View className={cx('container')}>
            已打卡
            <View className={cx('dot')}></View>
            <View className={cx('wave')}></View>
        </View>
    )
}

export default ClockIn
