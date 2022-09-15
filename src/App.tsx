import { useActions } from './hooks/useActions';
import { useEffect } from 'react';

import PostsPage from './pages/PostsPage';

import './App.css';

function App() {

  const { fetchPosts } = useActions();

  useEffect(() => {
    if (localStorage.getItem('posts')) {
      fetchPosts();
    }
  }, []);

  return (
    <div className="App">
      <PostsPage />
    </div>
  );
}

export default App;
