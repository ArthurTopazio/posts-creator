import './App.css';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import Container from '@mui/material/Container';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg" sx={{ pt: 4 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={6} md={8}>
              <Item>form</Item>
            </Grid>
            <Grid xs={6} md={4}>
              <Item>last five posts</Item>
            </Grid>
            <Grid xs={12} md={12}>
              <Item>all posts</Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default App;
