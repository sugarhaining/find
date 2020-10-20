import Taro, { useState, useCallback } from '@tarojs/taro'
import { View, Image, Text, Textarea, Button } from '@tarojs/components';
import avatarPng from '../../asserts/icons/avatar.png'
import replyPng from '../../asserts/icons/reply.png'
import classnames from 'classnames/bind';
import style from './index.scss'
import { entitiestoUtf16 } from '../../utils'
import dayjs from 'dayjs'
import { CommentResponse } from '../../types'
import { fetchReplyComment, fetchCommentById } from '../../utils/apis'


interface IProps {
    comment: CommentResponse
    activeComment: number | null
    setAvtiveComment: any
}

const cx = classnames.bind(style)

const CommetnCard: Taro.FC<IProps> = ({ comment, activeComment, setAvtiveComment }) => {
    const [commentIn, setCommentIn] = useState<CommentResponse>(comment)
    setCommentIn(comment)
    
    const {
        userInfo: {
            avatarUrl = '',
            nickName = ''
        },
        id,
        content = '',
        mood = '',
        time = '',
        reply = []
    } = commentIn

    const [replyContent, setReplyContent] = useState<string>('')
    const replyComment = useCallback(async (commentId, content) => {
        const { err } = await fetchReplyComment(commentId, content)

        if (err) {
            Taro.showToast({
                title: '留言失败',
                icon: 'none'
            })
        } else {
            const { res } = await fetchCommentById(commentId)

            setCommentIn(res)
            setAvtiveComment(null)
            setReplyContent('')
        }
    }, [])

    return (
        <View className={cx('container')}>
            <View className={cx('avatar')}>
                <View>
                    <Image src={avatarUrl || avatarPng} />
                    <Text className={cx('nick-name')}>{nickName}</Text>
                </View>
                <View className={cx('mood')}>
                    {
                        new Array(3).fill('').map(() => (
                            <Text key={mood}>{entitiestoUtf16(mood) || '😄'}</Text>
                        ))
                    }
                </View>
            </View>
            <View className={cx('content')}>
                {content}
            </View>
            <View className={cx('operate')}>
                <View className={cx('time')}>{dayjs(time).format('YYYY-MM-DD')}</View>
                <Image src={replyPng} onClick={() => {
                    setAvtiveComment(activeComment ? null : id)
                }} className={cx('comment-reply')} />
            </View>
            {
                activeComment === id
                    ? (
                        <View className={cx('reply-area')}>
                            <Textarea
                                value={replyContent}
                                onInput={e => setReplyContent(e.detail.value)}
                                maxlength={40} />
                            <View className={cx('menus')}>
                                <Button onClick={() => {
                                    setAvtiveComment(null)
                                }}>
                                    取消
                                </Button>
                                <Button onClick={() => replyComment(id, replyContent)}>回复</Button>
                            </View>
                        </View>
                    )
                    : null
            }
            {
                reply.length > 0 && (
                    <View className={cx('hr')} />
                )
            }
            {
                reply.map(msg => (
                    <View className={cx('reply')} key={msg}>{msg}</View>
                ))
            }
        </View>
    )
}

export default CommetnCard