import Taro, { useCallback, useRouter } from '@tarojs/taro'
import { View, Image, Button } from '@tarojs/components'
import LoginPng from '../../asserts/icons/login.png'
import classnames from 'classnames/bind'
import style from './index.scss'
import { get, omit } from 'lodash'
import {fetchUserId} from '../../utils/apis'


const cx = classnames.bind(style)

interface Iprops {

}

const Login: Taro.FC<Iprops> = () => {
    const { params } = useRouter()
    const redirectUrl = get(params, ['redirectUrl'])

    const paramsPayload = omit(params, ['redirectUrl'])
    let urlSuffixes: string[] = []

    Object.entries(paramsPayload).forEach(([key, value]) => {
        urlSuffixes.push(`${key}=${value}`)
    })

    const handleGetUserInfo = useCallback(async (e) => {
        const userInfo = get(e, ['target', 'userInfo']) || null

        if (userInfo) {
            const {err, res} = await fetchUserId(userInfo)
            
            if (err) {
                Taro.showToast({
                    title: '登陆失败，请点击重试',
                    icon: 'none',
                    duration: 1000
                })
            } else {
                Taro.setStorageSync('userInfo', res)
                Taro.showToast({
                    title: '授权成功',
                    duration: 1000
                })

                setTimeout(() => {
                    redirectUrl ? Taro.redirectTo({
                        url: redirectUrl + '?' + `${urlSuffixes.join('&')}`
                    }) : Taro.navigateBack()
                }, 1000)
            }
        } else {
            Taro.hideLoading()
            Taro.showToast({
                title: '请确认授权以正常使用Find的功能',
                icon: 'none'
            })
        }
    }, [])

    return (
        <View className={cx('container')}>
            <Image src={LoginPng} />
            <Button
                className={cx('button')}
                openType="getUserInfo"
                onGetUserInfo={handleGetUserInfo}
            >
                授权登录
            </Button>
        </View>
    )
}

export default Login