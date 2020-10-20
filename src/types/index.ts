export interface Location {
    longitude: number,
    latitude: number
}

export interface UserInfo {
    nickName: string
    avatarUrl: string
}

export interface User extends UserInfo {
    id: number
}

export interface Comment {
    content: string
    mood: string
    boardId: number
    location: Location
    tag: string
    userInfo: UserInfo
    userId: number
}

export interface CommentResponse extends Comment {
    reply: string[]
    time: string
    id: number
}