import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import classnames from 'classnames/bind'
import style from './index.scss'
import { fetchWeather } from '../../utils/apis'
import SunLogo from '../../asserts/icons/sun.png'
import SnowLogo from '../../asserts/icons/snow.png'
import ThunderLogo from '../../asserts/icons/thunder.png'
import SmogLogo from '../../asserts/icons/smog.png'
import WindLogo from '../../asserts/icons/wind.png'
import CloudyLogo from '../../asserts/icons/cloud.png'
import RainLogo from '../../asserts/icons/rain.png'

const weatherIconMap = {
    '晴': SunLogo,
    '雪': SnowLogo,
    '雷': ThunderLogo,
    '雾': SmogLogo,
    '风': WindLogo,
    '阴': CloudyLogo,
    '雨': RainLogo
}
const cx = classnames.bind(style)

interface Weather {
    weather: string,
    temperature: number,
    province: string,
    city: string
}
interface IProps { }
const WeatherCard: Taro.FC<IProps> = () => {
    const [weather, setWeather] = useState<Weather>({
        weather: '',
        temperature: 0,
        province: '',
        city: ''
    })
    useEffect(() => {
        const fetch = async () => {
            const [err, data] = await fetchWeather()
            if (err) {
                Taro.showToast({
                    title: '获取天气信息失败',
                    icon: 'none'
                })
            } else {
                const { liveData: { weather, temperature, province, city } } = data
                setWeather({
                    weather,
                    temperature,
                    province,
                    city
                })
            }
        }
        fetch()
    }, [])
    return (
        <View className={cx('container')}>
            <View className={cx('inner')}>
                <View className={cx('weather')}>{weather.weather || '-'}</View>
                <View className={cx('temperature')}>{weather.temperature || '-'}℃</View>
                <View className={cx('location')}>{weather.province || '-'}-{weather.city || '-'}</View>
                <Image src={weatherIconMap[weather.weather] ||SunLogo} />
            </View>
        </View>
    )
}

export default WeatherCard