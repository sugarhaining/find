import Taro, { useState, useEffect, useCallback } from '@tarojs/taro'
import { View, Image, Text, Swiper, SwiperItem} from '@tarojs/components'
import { fetchPois } from '../../utils/apis'
import placeholder from '../../asserts/icons/placeholder.png'
import classnames from 'classnames/bind'
import style from './index.scss'
import TitlePanel from '../../component/TitlePanel/index';

const cx = classnames.bind(style)

interface IProps {}
interface Poi {
    name: string,
    distance: number,
    address: string,
    [key: string]: any
}
interface Location {
    longitude: number,
    latitude: number
}
const splitLocation = (location: string = ''): Location => {
    const locationArr = location.split(',')
    return {
        longitude: +locationArr[0],
        latitude: +locationArr[1] 
    }
}

const swiperImages = [
    {
        path: 'https://dimg04.c-ctrip.com/images/0zg1t1200083hddunE51D.jpg'
    },
    {
        path: 'https://dimg04.c-ctrip.com/images/0zg1t1200083hddunE51D.jpg'
    },
    {
        path: 'https://dimg04.c-ctrip.com/images/0zg1t1200083hddunE51D.jpg'
    },
    {
        path: 'https://dimg04.c-ctrip.com/images/0zg1t1200083hddunE51D.jpg'
    },
]

const Pois: Taro.FC<IProps> = () => {
    const [pois, setPois] = useState<Poi[]>([])
    const showRoute = useCallback((location: string, name: string, address: string): void => {
        Taro.openLocation({
            longitude: splitLocation(location).longitude,
            latitude: splitLocation(location).latitude,
            name,
            address
        })
    }, [])
    useEffect(() => {
        const fetch = async () => {
            Taro.showLoading({
                title: '数据请求中'
            })
            try {
                const { poisData = [] } = await fetchPois()
                setPois(poisData)
            } catch (err) {
                Taro.showToast({
                    icon: 'none',
                    title: '获取poi信息失败'
                })
            }
            Taro.hideLoading()
        }
        fetch()
    }, [])
    return (
        <View className={cx('container')}>
            <TitlePanel text='发现周边' />
            <Swiper
                className={cx('swiper')}
                indicatorDots={true}
                indicatorColor="rgba(255, 255, 255, .4)"
                indicatorActiveColor="rgba(255, 255, 255, 1)"
                autoplay={true}
            >
                {
                    swiperImages.map(swiper => (
                        <SwiperItem className={cx('item')}>
                            <Image src={swiper.path} />
                        </SwiperItem>
                    ))
                }
            </Swiper>
            <View className={cx('pois')}>
                {
                    pois.map(poi => (
                        <View className={cx('poi')} onClick={() => showRoute(poi.location, poi.name, poi.address)}>
                            <Image src={poi.photos[0] ? poi.photos[0].url : placeholder} />
                            <View>
                                <View className={cx('name')}>
                                    {poi.name.length > 16 ? `${poi.name}...` : poi.name}
                                    <Text className={cx('distance')}>{poi.distance}m</Text>
                                </View>
                                <View className={cx('addr')}>
                                    {poi.address}
                                </View>
                            </View>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}

Pois.config = {
    navigationBarBackgroundColor: '#ffd531',
    navigationBarTitleText: '',
}

export default Pois