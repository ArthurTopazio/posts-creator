import { FC } from 'react';

import useInput from '../../hooks/useInput';
import { IPost } from '../../models/IPost';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import { GridElementWrapper } from '../UI/GridElementWrapper';

interface PostFormTPD {
  postsAmount: number,
  formAction: (newPost: IPost) => void
}

const PostForm: FC<PostFormTPD> = ({ postsAmount, formAction }) => {

  const postAuthor = useInput('');
  const avatarLink = useInput('');
  const postText = useInput('');

  const handleSubmit = () => {

    const newPost: IPost = {
      author: postAuthor.value,
      avatar_link: avatarLink.value,
      text: postText.value,
      create_time: String(Date.now()),
      id: Date.now()
    }

    formAction(newPost);
  }

  return (
    <GridElementWrapper sx={{ minHeight: '30vh' }}>
      <Stack direction="column" spacing={3}>

        <TextField {...postAuthor} label="Your name*" variant="standard" />
        <TextField {...avatarLink} label="Avatar link" variant="filled" />
        <TextField {...postText} label="Post text" multiline />

        <Button variant="contained" onClick={handleSubmit}> Post </Button>
        <Chip label={`Overall: ${postsAmount}`} sx={{ width: '30%' }} />

      </Stack>
    </GridElementWrapper>
  )
}

export default PostForm;
