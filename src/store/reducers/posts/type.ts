import { IPost } from './../../../models/IPost';

export interface PostsState {
  posts: IPost[]
}

export enum PostsActionEnum {
  SetPosts = 'SET_POSTS'
}

export interface SetPostsAction {
  type: PostsActionEnum.SetPosts,
  payload: IPost[]
}

export type PostsAction = SetPostsAction;