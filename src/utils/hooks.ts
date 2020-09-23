import Taro, {useDidShow, useState} from '@tarojs/taro'
interface UserLocation {
    longitude: number,
    latitude: number
}

export const useUserLocation = () => {
    const [location, setLocation] = useState<UserLocation>({
        longitude: 116.434446,
        latitude: 39.90816
    })
    useDidShow(() => {
        Taro.getLocation({
            success(info) {
                const {longitude, latitude} = info
                setLocation({
                    longitude,
                    latitude
                })
            }
        })  
    })
    return location
}