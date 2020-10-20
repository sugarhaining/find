import Taro, { useDidShow, useState } from '@tarojs/taro'
import { Location, UserInfo } from '../types'

export const useUserLocation = () => {
    const [location, setLocation] = useState<Location>({
        longitude: 116.434446,
        latitude: 39.90816
    })
    const [finished, setFinished] = useState<boolean>(false)
    useDidShow(() => {
        Taro.getLocation({
            success(info) {
                const { longitude, latitude } = info
                setFinished(true)
                setLocation({
                    longitude,
                    latitude
                })
            }
        })
    })
    return {
        finished,
        location
    }
}

export const useUserInfo = () => {
    const [userInfo, setUserInfo] = useState<UserInfo>({
        nickName: '',
        avatarUrl: ''
    })

    useDidShow(async () => {
        const { data } = await Taro.getStorage({
            key: 'userInfo'
        })
        setUserInfo(data)
    })

    return userInfo
}
