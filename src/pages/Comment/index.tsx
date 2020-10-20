import Taro, { useCallback, useState, useReachBottom, useDidShow, useRouter } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import classnames from 'classnames/bind'
import addCommentPng from '../../asserts/icons/add-comment.png'
import noCommentPng from '../../asserts/icons/noComment.png'
import style from './index.scss'
import CommetnCard from '../../component/CommentCard';
import TitlePanel from '../../component/TitlePanel';
import { fetchComment } from '../../utils/apis'
import { CommentResponse } from '../../types'

interface IProps {

}

const cx = classnames.bind(style)
const pageSize = 10

const Comment: Taro.FC<IProps> = () => {
    const { params } = useRouter()
    const boardId = +params.boardId

    const [offset, setOffset] = useState<number>(0)
    const [comments, setComments] = useState<CommentResponse[]>([])
    const [isMoreComment, setIsMoreComment] = useState<boolean>(true)
    const [activeComment, setActiveComment] = useState<number | null>(null)

    const fetchCommentIn = useCallback(async (boardId: number, offset: number, pageSize: number, comments: CommentResponse[] userId?: number) => {
        Taro.showLoading({
            title: '查找留言中'
        })
        const { err, res } = await fetchComment(boardId, offset, pageSize)
        Taro.hideLoading()

        if (err) {
            Taro.showToast({
                title: '请重试',
                icon: 'none'
            })
        } else {
            setComments([...comments, ...res.comments])
            setOffset(res.pagination.offset)
            setIsMoreComment(res.comments.length >= pageSize ? true : false)
        }
    }, [])

    useReachBottom(() => {
        if (isMoreComment) {
            fetchCommentIn(boardId, offset + 1, pageSize, comments)
        }
    })

    useDidShow(() => {
        fetchCommentIn(boardId, 0, pageSize, [])
    })

    const handlePublish = useCallback(async () => {
        try {
            await Taro.getStorage({
                key: 'userInfo'
            })
            Taro.navigateTo({
                url: `/pages/Publish/index?boardId=${boardId}`
            })
        } catch (err) {
            Taro.navigateTo({
                url: `/pages/Login/index?redirectUrl=/pages/Publish/index&boardId=${boardId}`,
            })
        }
    }, [])

    return (
        <View className={cx('container')}>
            <TitlePanel text="留言板" />
            {
                comments.length === 0
                    ? (
                        <Image src={noCommentPng} className={cx('no-comment')} />
                    )
                    : comments.map(comment => (
                        <View className={cx('comment')} key={comment.time}>
                            <CommetnCard
                                comment={comment}
                                activeComment={activeComment}
                                setAvtiveComment={setActiveComment}
                            />
                        </View>
                    ))
            }
            {comments.length === 0 && <View className={cx('tip')}>点击下面发布该留言板的第一条留言吧</View>}
            <View className={cx('add')}>
                <Image src={addCommentPng} onClick={handlePublish} />
            </View>
        </View>
    )
}

Comment.config = {
    navigationBarBackgroundColor: '#ffd531',
    navigationBarTitleText: '',
}

export default Comment