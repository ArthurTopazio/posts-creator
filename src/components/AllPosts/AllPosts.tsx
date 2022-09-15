import { FC } from 'react';

import { IPost } from '../../models/IPost';

import { GridElementWrapper } from '../UI/GridElementWrapper';

interface AllPostsTPD {
  posts: IPost[]
}

const AllPosts: FC<AllPostsTPD> = ({ posts }) => {


  console.log('all posts', posts);

  return (
    <GridElementWrapper sx={{ minHeight: '60vh' }}>
      All posts
    </GridElementWrapper>
  )
}

export default AllPosts;
