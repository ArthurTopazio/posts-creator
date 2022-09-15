import { FC } from 'react';

import { IPost } from '../../models/IPost';

import { GridElementWrapper } from '../UI/GridElementWrapper';
import Post from '../UI/Post';

interface AllPostsTPD {
  posts: IPost[]
}

const AllPosts: FC<AllPostsTPD> = ({ posts }) => {

  console.log('all posts', posts);

  const postsList = posts.reverse().map(post =>
    <Post key={post.id} {...{ post }} size='lg' />);

  return (
    <GridElementWrapper sx={{ minHeight: '60vh' }}>
      {postsList}
    </GridElementWrapper>
  )
}

export default AllPosts;
