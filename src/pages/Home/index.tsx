import Taro, { useCallback } from '@tarojs/taro'
import { View, Image, Text, Swiper, SwiperItem } from '@tarojs/components'
import classnames from 'classnames/bind';
import style from './index.scss'
import Avatar from '../../asserts/icons/avatar.png'
import Surround from '../../asserts/icons/ring.png'
import Send from '../../asserts/icons/send.png'
import { splitString } from '../../utils/common';

const cx = classnames.bind(style)

interface IProps { }

const menus = [
    {
        title: '发现周边',
        iconPath: Surround,
        navigateTo: '/pages/Pois/index'
    },
    {
        title: '今日推荐',
        iconPath: Send,
        navigateTo: '/pages/Recome/index'
    }
]

const comments = [
    {
        mood: '😄',
        comment: '今天天气好好啊'
    },
    {
        mood: '🙃',
        comment: `
            今天天气好好啊
            今天天气好好啊
            今天天气好好啊
            今天天气好好啊
        `
    },
    {
        mood: '😐',
        comment: '今天天气好好啊'
    },
    {
        mood: '😔',
        comment: `
        今天天气好好啊
        今天天气好好啊
        今天天气好好啊
        今天天气好好啊
        今天天气好好啊
        今天天气好好啊
        今天天气好好啊
        今天天气好好啊
    `
    },
]

const Home: React.FC<IProps> = () => {
    const goToPage = useCallback((url: string): void => {
        Taro.navigateTo({url})
    }, [])
    
    return (
        <View className={cx('container')}>
            <View className={cx('panner')}>
                <Image src={Avatar} className={cx('avatar')} />
                <View className={cx('login')} onClick={
                    () => goToPage('/pages/Login/index')
                }>
                    点我去登陆 👉
                </View>
                <Text className={cx('comment')}>最新留言</Text>
                <Swiper                                                                                                                                                         
                    className={cx('swiper')}
                    nextMargin="100rpx"
                >
                    {
                        comments.map((comment) => (
                            <SwiperItem className={cx('item')} key={comment.comment}>
                                <View className={cx('inner')}>
                                    <View className={cx('mood')}>{comment.mood}</View>
                                    <View className={cx('commend')}>
                                        {splitString(comment.comment, 120)}
                                    </View>
                                </View>
                            </SwiperItem>
                        ))
                    }
                </Swiper>
                <View className={cx('menus')}> 
                    {
                        menus.map(menu => (
                            <View 
                                className={cx('menu')}
                                key={menu.title} 
                                onClick={
                                    () => goToPage(menu.navigateTo)
                                }
                            >
                                <Text>{menu.title}</Text>
                                <Image src={menu.iconPath} />
                            </View>
                        ))
                    }
                </View>
            </View>
        </View>
    )
}

export default Home