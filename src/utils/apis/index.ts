import {AMAPKEY} from '../CONSTANT'
import AMapWX from '../../libs/amap-wx'

const myAmapFun = new AMapWX({key: AMAPKEY})

export const fetchPois = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        myAmapFun.getPoiAround({
            success(data) {
                resolve(data)
            },
            fail(info) {
                reject(info)
            }
        })
    })
}

export const fetchAuthStatus = (): Promise<any> => {
    return new Promise(resolve => {
        Taro.getSetting().then(res => {
            resolve([null, res])
        }).catch(err => {
            resolve([err, null])
        })
    })
}

const fetchWalkingRoute = (origin: string, destination: string): Promise<any> => {
    return new Promise(resolve => {
        myAmapFun.getWalkingRoute({
            origin,
            destination,
            success: res => resolve([null, res]),
            fail: err => resolve([err, null])
        })
    } )
}
const fetchDrivingRoute = (origin: string, destination: string): Promise<any> => {
    return new Promise(resolve => {
        myAmapFun.getDrivingRoute({
            origin,
            destination,
            success: res => resolve([null, res]),
            fail: err => resolve([err, null])
        })
    } )
}
const fetchRidingRoute = (origin: string, destination: string): Promise<any> => {
    return new Promise(resolve => {
        myAmapFun.getRidingRoute({
            origin,
            destination,
            success: res => resolve([null, res]),
            fail: err => resolve([err, null])
        })
    } )
}
const travelModeApiMap = {
    walking: fetchWalkingRoute,
    driving: fetchDrivingRoute,
    riding: fetchRidingRoute
}
export const fetchTravelRoute = (mode: string, origin: string, destination: string): Promise<any> => {
    const fetchApi = travelModeApiMap[mode]
    return fetchApi(origin, destination)
}

export const fetchWeather = (): Promise<any> => {
    return new Promise(resolve => {
        myAmapFun.getWeather({
            success: res => resolve([null, res]),
            fail: err => resolve([err, null])
        })
    })
}