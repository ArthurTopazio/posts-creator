import { PostsAction, PostsActionEnum, PostsState } from "./type";

const initialState: PostsState = {
  posts: []
}

function postsReducer(state = initialState, action: PostsAction): PostsState {
  switch (action.type) {
    case PostsActionEnum.SetPosts:
      return { ...state, posts: action.payload }
    default:
      return state
  }
}

export default postsReducer;