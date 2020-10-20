import Taro, { useState, useRouter, useCallback } from '@tarojs/taro'
import { View, Button, Textarea, Image, Picker, Input } from '@tarojs/components'
import classnames from 'classnames/bind';
import MoodPng from '../../asserts/icons/mood.png'
import TagPng from '../../asserts/icons/tag.png'
import style from './index.scss'
import { moodRange } from './contants';
import { fecthPublishComment } from '../../utils/apis';
import { Comment } from '../../types'
import { utf16toEntities, useUserLocation, useUserInfo } from '../../utils';
import { pick, get } from 'lodash'

const cx = classnames.bind(style)

interface IProps {

}

const Publish: Taro.FC<IProps> = () => {

    const [comment, setComment] = useState<string>('')
    const [mood, setMood] = useState<string>('')
    const [tag, setTag] = useState<string>('')
    const [editTag, setEditTag] = useState<boolean>(false)

    const { params: { boardId } } = useRouter()
    const { finished, location } = useUserLocation()
    const userInfo = useUserInfo()

    const verifyComment = (comment: Exclude<Comment, 'reply'>): { valiable: boolean, message: string } => {
        const { content, mood, tag } = comment;

        if (!content) {
            return {
                valiable: false,
                message: '分享内容不能为空'
            }
        }
        if (!mood) {
            return {
                valiable: false,
                message: '选择你的心情'
            }
        }
        if (!tag) {
            return {
                valiable: false,
                message: '给你的分享打上标签吧'
            }
        }

        return {
            valiable: true,
            message: ''
        }

    }

    const publishComment = useCallback(async () => {
        if (!finished) {
            Taro.showToast({
                title: '定位信息获取失败，请稍后重试',
                icon: 'none'
            })

            return;
        }
        const currComment = {
            content: comment,
            mood: utf16toEntities(mood),
            boardId: +boardId,
            tag,
            location,
            userId: get(userInfo, 'id'),
            userInfo: pick(userInfo, ['nickName', 'avatarUrl'])
        }

        const { valiable, message } = verifyComment(currComment)

        if (!valiable) {
            Taro.showToast({
                title: message,
                icon: 'none',
                duration: 1000
            })
            return;
        }

        const { err } = await fecthPublishComment(currComment)

        if (err) {
            Taro.showToast({
                title: '发布失败,请重试',
                icon: 'none'
            })
        } else {
            Taro.showToast({
                title: '发布成功',
                duration: 1000
            })

            setTimeout(() => {
                Taro.navigateBack()
            }, 1000)
        }

    }, [userInfo, location, boardId, comment, tag, mood, finished])

    return (
        <View className={cx('publish')}>
            <View className={cx('publish-title')}>
                <View>发动态</View>
                <Button onClick={publishComment}>发表</Button>
            </View>
            <Textarea
                className={cx('publish-area')}
                placeholder="分享新鲜事..."
                value={comment}
                maxlength={140}
                onInput={comment => {
                    setComment(comment.detail.value)
                }}
            />
            <Picker
                mode="selector"
                className={cx('publish-picker')}
                range={moodRange}
                rangeKey="mood"
                value={0}
                onChange={e => {
                    const { mood, desc } = moodRange[e.detail.value]
                    setMood(mood)
                    Taro.showToast({
                        title: desc,
                        icon: 'none',
                        duration: 800
                    })
                }}
            >
                <View className={cx('publish-options')}>
                    <View className={cx('title')}>
                        <Image src={MoodPng} />
                        心情
                    </View>
                    {mood && <View>{mood}</View>}
                </View>
            </Picker>
            <View className={cx('publish-options')} onClick={() => setEditTag(!editTag)}>
                <View className={cx('title')}>
                    <Image src={TagPng} />
                    添加标签
                </View>
                {tag && <View className={cx('tag')}>#{tag}</View>}
            </View>
            {editTag && (
                <View className={cx('publish-tag')}>
                    <Input placeholder="标签在7个字以内" value={tag} maxLength={20} onInput={
                        e => setTag(e.detail.value)
                    } />
                </View>
            )}
        </View>
    )
}

export default Publish