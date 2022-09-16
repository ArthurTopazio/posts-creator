import { FC, useEffect, useState } from 'react';

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

  const [isValidForm, setIsValidForm] = useState(false);

  useEffect(() => {
    if (postAuthor.value && postText.value) {
      setIsValidForm(true)
    } else {
      setIsValidForm(false)
    }
  }, [postText.value, postAuthor.value]);

  const handleSubmit = () => {
    const newPost: IPost = {
      author: postAuthor.value,
      avatar_link: avatarLink.value,
      text: postText.value,
      create_time: String(Date.now()),
      id: Date.now()
    }
    formAction(newPost);
    postAuthor.clearValue();
    avatarLink.clearValue();
    postText.clearValue();
  }

  return (
    <GridElementWrapper sx={{ minHeight: '30vh' }}>
      <Stack direction="column" spacing={3}>

        <TextField {...postAuthor} label="Your name" variant="standard" required />
        <TextField {...avatarLink} label="Avatar link" variant="filled" />
        <TextField {...postText} label="Post text" multiline required />

        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!isValidForm}
        >
          Post
        </Button>
        <Chip label={`Overall: ${postsAmount}`} sx={{ width: '30%' }} />

      </Stack>
    </GridElementWrapper>
  )
}

export default PostForm;
