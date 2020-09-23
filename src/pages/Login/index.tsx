import Taro from '@tarojs/taro'
import { View, Image, Button } from '@tarojs/components'
import LoginPng from '../../asserts/icons/login.png'
import classnames from 'classnames/bind'
import style from './index.scss'


const cx = classnames.bind(style)

interface Iprops {

}

const Login: Taro.FC<Iprops> = () => {
    return (
        <View className={cx('container')}>
            <Image src={LoginPng} />
            <Button className={cx('button')}>授权登录</Button>
        </View>
    )
}

export default Login