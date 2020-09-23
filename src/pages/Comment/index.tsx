import Taro, { useRouter } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import classnames from 'classnames/bind'
import addCommentPng from '../../asserts/icons/add-comment.png'
import style from './index.scss'
import CommetnCard from '../../component/CommentCard';
import TitlePanel from '../../component/TitlePanel';
import avatarPng from '../../asserts/icons/avatar.png'

interface IProps {
    commentBoardId: number
}

const commetns = [
    {
        content: `今天天气好好啊今天天气好好啊今天天气好好啊
        今天天气好好啊今天天气好好啊今天天气好好啊今天天气好好啊
        今天天气好好啊今天天气好好啊今天天气好好啊今天天气好好啊
        今天天气好好啊今天天气好好啊今天天气好好啊今天天气好好啊
        今天天气好好啊今天天气好好啊今天天气好好啊今天天气好好啊`,
        mood: '🥰',
        time: '2020-09-18',
        avatar: avatarPng,
        nickName: '翌宁',
        id: 0,
        commentBoardId: 12,
        replyMessage: [
            '我也觉得呢',
            '待会要下雨了，记得早点回去哦'
        ]
    },
    {
        content: '今天天气好好啊',
        mood: '🥰',
        time: '2020-09-18',
        avatar: avatarPng,
        nickName: '翌宁',
        id: 0,
        commentBoardId: 12,
        replyMessage: [
            '我也觉得呢',
            '待会要下雨了，记得早点回去哦'
        ]
    },
    {
        content: '今天天气好好啊',
        mood: '🥰',
        time: '2020-09-18',
        avatar: avatarPng,
        nickName: '翌宁',
        id: 0,
        commentBoardId: 12,
        replyMessage: [
            '我也觉得呢',
            '待会要下雨了，记得早点回去哦'
        ]
    },
    {
        content: '今天天气好好啊',
        mood: '🥰',
        time: '2020-09-18',
        avatar: avatarPng,
        nickName: '翌宁',
        id: 0,
        commentBoardId: 12,
        replyMessage: [
            '我也觉得呢',
            '待会要下雨了，记得早点回去哦'
        ]
    },
    {
        content: '今天天气好好啊',
        mood: '',
        time: '2020-09-18',
        avatar: avatarPng,
        nickName: '翌宁',
        id: 0,
        commentBoardId: 12,
        replyMessage: [
            '我也觉得呢',
            '待会要下雨了，记得早点回去哦'
        ]
    },
    {
        content: '今天天气好好啊',
        mood: '🥰',
        time: '2020-09-18',
        avatar: avatarPng,
        nickName: '翌宁',
        id: 0,
        commentBoardId: 12,
        replyMessage: [
            '我也觉得呢',
            `待会要下雨了，记得早点回去哦待会要下雨了，记得早点回去哦
            待会要下雨了，记得早点回去哦待会要下雨了，记得早点回去哦
            待会要下雨了，记得早点回去哦待会要下雨了，记得早点回去哦
            待会要下雨了，记得早点回去哦待会要下雨了，记得早点回去哦`
        ]
    },
]

const cx = classnames.bind(style)

const Comment: Taro.FC<IProps> = () => {
    const { params: { commentBoardId } } = useRouter()



    return (
        <View className={cx('container')}>
            <TitlePanel text="留言板"/>
            {
                commetns.map(comment => (
                   <View className={cx('comment')}>
                        <CommetnCard
                            comment={comment}
                        />
                   </View>
                ))
            }
            <View className={cx('add')}>
                <Image src={addCommentPng}/>
            </View>
        </View>
    )
}

Comment.config = {
    navigationBarBackgroundColor: '#ffd531',
    navigationBarTitleText: '',
}

export default Comment