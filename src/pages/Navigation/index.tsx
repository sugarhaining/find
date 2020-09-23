import Taro, { useRouter, useState, useEffect, useCallback } from '@tarojs/taro'
import { Map, Image, View } from '@tarojs/components'
import classnames from 'classnames/bind'
import style from './index.scss'
import { useUserLocation } from '../../utils/hooks'
import PointLogo from '../../asserts/icons/point.png'
import OriginMarker from '../../asserts/icons/marker-origin.png'
import DestMarker from '../../asserts/icons/marker-destination.png'
import WalkLogo from '../../asserts/icons/walk.png'
import BicyLogo from '../../asserts/icons/bicy.png'
import DriveLogo from '../../asserts/icons/drive.png'
import { fetchTravelRoute } from '../../utils/apis/index'

const cx = classnames.bind(style)
interface IProps { }
interface Marker {
    iconPath: string,
    id: number,
    latitude: number,
    longitude: number,
    width: number,
    height: number
}
interface Point {
    longitude: number,
    latitude: number
}
interface Polyline {
    points: Point[],
    color: string,
    width: number
}
type TravelMode = 'walking' | 'driving' | 'riding'

const splitLocation = (location: string = ''): Point => {
    const locationArr = location.split(',')
    return {
        longitude: +locationArr[0],
        latitude: +locationArr[1] 
    }
}
const travelModeMap = {
    walking: '步行',
    driving: '开车',
    riding: '骑行'
}

const Navigation: Taro.FC<IProps> = () => {
    const {longitude, latitude} = useUserLocation()
    const { params: { location } } = useRouter()
    const [travelMode, setTravelMode] = useState<TravelMode>('walking')
    const [isSelectTraelMode, setIsSelectTravelMode] = useState(false)
    const [polyline, setPolyline] = useState<Polyline[]>()
    const selectTravelMode = useCallback((mode: TravelMode): void => {
        setTravelMode(mode)
        setIsSelectTravelMode(false)
    }, [])
    const markers: Marker[] = [
        {
            iconPath: OriginMarker,
            id: 0,
            latitude,
            longitude,
            width: 46,
            height: 52
        }, {
            iconPath: DestMarker,
            id: 0,
            latitude: splitLocation(location).latitude,
            longitude: splitLocation(location).longitude,
            width: 46,
            height: 52
        }
    ]
    useEffect(() => {
        const fetch = async () => {
            // Taro.showLoading({
            //     title: '路线规划中'
            // })
            const [err, data] = await fetchTravelRoute(travelMode, `${longitude},${latitude}`, location)
            if (err) {
                Taro.showToast({
                    title: '获取路线失败',
                    icon: 'none'
                })
            } else {
                let points: Point[] = [];
                if(data.paths && data.paths[0] && data.paths[0].steps){
                var steps = data.paths[0].steps;
                for(var i = 0; i < steps.length; i++){
                    var poLen = steps[i].polyline.split(';');
                    for(var j = 0;j < poLen.length; j++){
                    points.push({
                        longitude: parseFloat(poLen[j].split(',')[0]),
                        latitude: parseFloat(poLen[j].split(',')[1])
                    })
                    } 
                }
                setPolyline([
                    {
                        points,
                        color: '#0091ff',
                        width: 6,
                    }
                ])
            }
        }
    }
        fetch()
        // Taro.openLocation({
        //     latitude,
        //     longitude
        // })
    }, [travelMode, longitude, location, latitude])
    return (
        <View>
            <Map className={cx('map')} polyline={polyline} markers={markers} longitude={longitude} latitude={latitude}></Map>
            <View className={cx('panel')}>{travelModeMap[travelMode]}</View>
            {
                isSelectTraelMode ? (
                    <View className={cx('way')}>
                        <Image src={WalkLogo} onClick={() => selectTravelMode('walking')}/>
                        <Image src={BicyLogo} onClick={() => selectTravelMode('riding')}/>
                        <Image src={DriveLogo} onClick={() => selectTravelMode('driving')}/>
                    </View>
                ) : (
                    <Image src={PointLogo} className={cx('point')} onClick={() => setIsSelectTravelMode(true)}/>
                )
            }
        </View>
    )
}

export default Navigation