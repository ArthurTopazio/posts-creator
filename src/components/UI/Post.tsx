import { FC } from 'react';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import { IPost } from '../../models/IPost';

interface PostTPD {
  post: IPost,
  size: 'lg' | 'sm'
}

const Post: FC<PostTPD> = ({ post, size }) => {

  const stackStyle = size === 'lg'
    ? {
      m: '15px auto', p: '10px', width: '92%', backgroundColor: '#66bb6a', borderRadius: '7px'
    }
    : {
      m: '7px auto', p: '5px', width: '88%', backgroundColor: '#66bb6a', borderRadius: '7px'
    }

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={stackStyle}
    >
      <Avatar
        src={post.avatar_link}
        alt={post.author}
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontWeight: 'bold' }}>{post.author}</div>
        <div>{post.text}</div>
      </div>
    </Stack>
  )
}

export default Post;
