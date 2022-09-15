import { FC } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import PostForm from '../components/PostForm/PostForm';
import TopicalPosts from '../components/TopicalPosts/TopicalPosts';
import AllPosts from '../components/AllPosts/AllPosts';

const PostsPage: FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={6} md={8}>
            <PostForm />
          </Grid>
          <Grid xs={6} md={4}>
            <TopicalPosts />
          </Grid>
          <Grid xs={12} md={12}>
            <AllPosts />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default PostsPage;
