import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import WeatherCard from '../../component/WeatherCard'
import TitlePanel from '../../component/TitlePanel'
import classnames from 'classnames/bind'
import style from './index.scss'

interface IProps { }

const Recome: Taro.FC<IProps> = () => {
    return (
        <View>
            <TitlePanel text="今日推荐" />
            <WeatherCard />
        </View>
    )
}

Recome.config = {
    navigationBarBackgroundColor: '#ffd531',
    navigationBarTitleText: '',
}

export default Recome