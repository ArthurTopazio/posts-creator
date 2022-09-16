import { FC } from 'react';
import { IPost } from '../../models/IPost';

import { GridElementWrapper } from '../UI/GridElementWrapper';
import Post from '../UI/Post';

interface TopicalPostsTPD {
  posts: IPost[]
}

const TopicalPosts: FC<TopicalPostsTPD> = ({ posts }) => {

  const topicalPosts = posts.length > 5 ? [...posts.slice(-5)] : [...posts];
  const postsList = topicalPosts.reverse().map(post =>
    <Post key={post.id} {...{ post }} size='sm' />);

  return (
    <GridElementWrapper>
      {posts.length === 0 ? <h2>Last 5 posts</h2> : postsList}
    </GridElementWrapper>
  )
}

export default TopicalPosts;
