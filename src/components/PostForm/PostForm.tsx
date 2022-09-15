import { FC } from 'react';

import { IPost } from '../../models/IPost';

import { GridElementWrapper } from '../UI/GridElementWrapper';

interface PostFormTPD {
  postsAmount: number,
  formAction: (newPost: IPost) => void
}

const PostForm: FC<PostFormTPD> = ({ postsAmount, formAction }) => {

  console.log('Form props', postsAmount, formAction);

  return (
    <GridElementWrapper sx={{ minHeight: '30vh' }}>
      Form </GridElementWrapper>
  )
}

export default PostForm;
