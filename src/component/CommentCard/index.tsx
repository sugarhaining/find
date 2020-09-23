import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import classnames from 'classnames/bind';
import style from './index.scss'


interface Comment {
    avatar: string
    nickName: string
    id: number
    commentBoardId: number
    content: string
    mood: string
    time: string
    replyMessage: string[]
}

interface IProps {
    comment: Comment
}

const cx = classnames.bind(style)

const CommetnCard: Taro.FC<IProps> = ({ comment }) => {
    const {
        avatar,
        content,
        nickName,
        mood,
        time,
        replyMessage
    } = comment;

    return (
        <View className={cx('container')}>
            <View className={cx('avatar')}>
                <View>
                    <Image src={avatar} />
                    <Text className={cx('nick-name')}>{nickName}</Text>
                </View>
                <View className={cx('mood')}>
                    {
                        new Array(3).fill('').map(() => (
                            <Text key={mood}>{mood || '😄'}</Text>
                        ))
                    }
                </View>
            </View>
            <View className={cx('content')}>
                {content}
            </View>
            <View className={cx('time')}>
                {time}
            </View>
            <View className={cx('hr')}/>
            {
                replyMessage.map(msg => (
                    <View className={cx('reply')} key={msg}>{msg}</View>
                ))
            }
        </View>
    )
}

export default CommetnCard