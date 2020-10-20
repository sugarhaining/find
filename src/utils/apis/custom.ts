import { wrapFetch } from '../common'
import { UserInfo, User, Comment, CommentResponse } from '../../types'

export const fetchUserId = (userInfo: UserInfo) => { 
    return wrapFetch<User>('/login', "POST", userInfo)
}
export const fecthPublishComment = (comment: Comment) => {
    return wrapFetch<Comment>('/comment', 'POST', comment)
}
export const fetchComment = (boardId: number, offset: number, pageSize: number) => {
    return wrapFetch<{
        comments: CommentResponse[],
        pagination: {
            offset: number,
            pageSize: number
        }
    }>('/comment', 'GET', {
        boardId,
        offset,
        pageSize
    })
}

export const fetchNewestComment = () => {
    return wrapFetch<CommentResponse[]>('/comment/newest', 'GET')
}

export const fetchReplyComment = (commentId: number, content: string) => {
    return wrapFetch<{}>('/comment', 'PUT', {
        commentId,
        content
    })
}

export const fetchCommentById = (id: number) => {
    return wrapFetch<CommentResponse>(`/comment/${id}`, 'GET')
}