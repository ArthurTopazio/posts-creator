import { FC } from 'react';

import { IPost } from '../../models/IPost';

import { GridElementWrapper } from '../UI/GridElementWrapper';
import Post from '../UI/Post';

interface AllPostsTPD {
  posts: IPost[]
}

const AllPosts: FC<AllPostsTPD> = ({ posts }) => {

  const postsList = posts.reverse().map(post =>
    <Post key={post.id} {...{ post }} size='lg' />);

  return (
    <GridElementWrapper sx={{ minHeight: '35vh' }}>
      {posts.length === 0 ? <h2>Posts</h2> : postsList}
    </GridElementWrapper>
  )
}

export default AllPosts;
