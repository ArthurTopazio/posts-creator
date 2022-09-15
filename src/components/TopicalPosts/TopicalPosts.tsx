import { FC } from 'react';
import { IPost } from '../../models/IPost';

import { GridElementWrapper } from '../UI/GridElementWrapper';

interface TopicalPostsTPD {
  posts: IPost[]
}

const TopicalPosts: FC<TopicalPostsTPD> = ({ posts }) => {

  const topicalPosts = posts.length > 5 ? [...posts.slice(-5)] : [...posts];

  console.log('Topical posts', topicalPosts);

  return (
    <GridElementWrapper> Topical posts </GridElementWrapper>
  )
}

export default TopicalPosts;
