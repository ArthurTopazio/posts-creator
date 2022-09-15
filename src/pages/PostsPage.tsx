import { FC } from 'react';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import PostForm from '../components/PostForm/PostForm';
import TopicalPosts from '../components/TopicalPosts/TopicalPosts';
import AllPosts from '../components/AllPosts/AllPosts';

const PostsPage: FC = () => {

  const posts = useTypedSelector(state => state.posts);
  const postsAmount = posts.posts.length;
  const { createPost } = useActions();

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={6} md={8}>
            <PostForm {...{ postsAmount, formAction: createPost }} />
          </Grid>
          <Grid xs={6} md={4}>
            <TopicalPosts {...posts} />
          </Grid>
          <Grid xs={12} md={12}>
            <AllPosts {...posts} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default PostsPage;
