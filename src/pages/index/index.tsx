import Taro, { useCallback } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import classnames from 'classnames/bind'
import QRCode from '../../asserts/icons/scan.png'
import Logo from '../../asserts/icons/logo.png'
import HomePng from '../../asserts/icons/around.png'
import style from './index.scss'

const cx = classnames.bind(style)

interface IProps {}

const Index: Taro.FC<IProps> = () => {

    const handleScanCode = useCallback(async (): Promise<void> => {
        try {
            let { result } = await Taro.scanCode({})
            Taro.navigateTo({
                url: `/pages/Comment/index?commentBoardId=${result}`,
            })
        } catch (err) {
            Taro.showToast({
                title: '扫码失败',
                icon: 'none'
            })
        }
    }, [])

    const goToHomePage = useCallback(() => {
        Taro.navigateTo({
            url: '/pages/Home/index'
        })
    }, [])
    
    return (
        <View className={cx('container')}>
        <Text className={cx(['web-font', 'logo'])}>FIND -- 校园轻社交</Text>
        <Image className={cx('logo-image')} src={Logo} />
        <View className={cx('controller')}>
            <View className={cx('home')}>
                <Image src={HomePng} />
                <Text>探索</Text>
            </View>
            <View className={cx('qrcode')} onClick={handleScanCode}>
                <Image src={QRCode} />
            </View>
            <View className={cx('home')} onClick={goToHomePage}>
                <Image src={HomePng} />
                <Text>周边</Text>
            </View>
        </View>
      </View>
    )
}

Index.config = {
    navigationBarTitleText: '首页',
}

export default Index
