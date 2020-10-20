import Taro, { useState, useCallback, useDidShow } from '@tarojs/taro'
import { View, Image, Text, Swiper, SwiperItem } from '@tarojs/components'
import classnames from 'classnames/bind';
import style from './index.scss'
import Avatar from '../../asserts/icons/avatar.png'
import Surround from '../../asserts/icons/ring.png'
import Send from '../../asserts/icons/send.png'
import { splitString, useUserInfo, entitiestoUtf16 } from '../../utils';
import { get } from 'lodash'
import { fetchNewestComment } from '../../utils/apis'
import { CommentResponse } from '../../types'
import ClockIn from '../../component/ClockIn'

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

const Home: React.FC<IProps> = () => {
    const [comments, setComments] = useState<CommentResponse[]>([])
    const userInfo = useUserInfo()
    const goToPage = useCallback((url: string): void => {
        Taro.navigateTo({ url })
    }, [])

    const fetchNewestCommentIn = useCallback(async () => {
        const { err, res } = await fetchNewestComment()
        if (err) {
            Taro.showToast({
                title: '获取最新留言失败',
                icon: 'none'
            })
        } else {
            setComments(res)
        }
    }, [])
    const openLocation = useCallback((longitude: number, latitude: number) => {
        Taro.openLocation({
            longitude,
            latitude
        })
    }, [])

    useDidShow(() => {
        fetchNewestCommentIn()
    })

    return (
        <View className={cx('container')}>
            <View className={cx('panner')}>
                <Image src={get(userInfo, ['avatarUrl']) || Avatar} className={cx('avatar')} />
                {
                    get(userInfo, ['avatarUrl'])
                        ? (
                            <View className={cx('login')}>
                                {userInfo.nickName}
                            </View>
                        )
                        : (
                            <View className={cx('login')} onClick={
                                () => goToPage('/pages/Login/index')
                            }>
                                点我去登陆 👉
                            </View>
                        )
                }

                <View className={cx('clock-in')}>
                    <ClockIn />
                </View>
                <Text className={cx('comment')}>最新留言</Text>
                {
                    comments.length > 0 && (
                        <Swiper
                            className={cx('swiper')}
                            nextMargin="100rpx"
                        >
                            {
                                comments.map((comment) => (
                                    <SwiperItem className={cx('item')} key={comment.time} onClick={() => {
                                        const { longitude, latitude } = comment.location

                                        openLocation(longitude, latitude)
                                    }}>
                                        <View className={cx('inner')}>
                                            <View className={cx('mood')}>{entitiestoUtf16(comment.mood)}</View>
                                            <View className={cx('commend')}>
                                                {splitString(comment.content, 120)}
                                            </View>
                                        </View>
                                    </SwiperItem>
                                ))
                            }
                        </Swiper>
                    )
                }
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