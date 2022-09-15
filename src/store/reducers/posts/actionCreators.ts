import { PostsAction, PostsActionEnum } from './type';
import { IPost } from './../../../models/IPost';
import { AppDispatch } from '../..';

export const PostsActionCreators = {
  setPosts: (payload: IPost[]): PostsAction => ({ type: PostsActionEnum.SetPosts, payload }),

  fetchPosts: () => async (dispatch: AppDispatch) => {
    try {
      const posts = localStorage.getItem('posts') || '[]';
      const json = JSON.parse(posts) as IPost[];
      dispatch(PostsActionCreators.setPosts(json));
    } catch (e) {
      alert(e);
    }
  },

  createPost: (post: IPost) => async (dispatch: AppDispatch) => {
    try {
      const posts = localStorage.getItem('posts') || '[]';
      const json = JSON.parse(posts) as IPost[];
      json.push(post);
      dispatch(PostsActionCreators.setPosts(json));
      localStorage.setItem('posts', JSON.stringify(json));
    } catch (e) {
      alert(e);
    }
  }
}