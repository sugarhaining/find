import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import classnames from 'classnames/bind'
import style from './index.scss'

const cx = classnames.bind(style)
interface IProps {
    text: string
}
const TitlePanel: Taro.FC<IProps> = ({ text }) => {
    return <View className={cx('title')}>{text}</View>
}

export default TitlePanel