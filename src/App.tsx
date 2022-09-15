import { useActions } from './hooks/useActions';
import { useEffect } from 'react';

import PostsPage from './pages/PostsPage';

import './App.css';

function App() {

  const { fetchPosts, createPost } = useActions();

  useEffect(() => {
    if (localStorage.getItem('posts')) {
      fetchPosts();
    } else {
      createPost({ author: 'a', create_time: '12', id: 1, text: 'sdcsdc', avatar_link: 'https://img.freepik.com/premium-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg' });
      createPost({ author: 'b', create_time: '12', id: 2, text: 'sdcsdc', avatar_link: 'https://img.freepik.com/premium-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg' });
      createPost({ author: 'c', create_time: '12', id: 3, text: 'sdcsdc', avatar_link: 'https://img.freepik.com/premium-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg' });
      createPost({ author: 'd', create_time: '12', id: 4, text: 'sdcsdc', avatar_link: 'https://img.freepik.com/premium-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg' });
      createPost({ author: 'e', create_time: '12', id: 5, text: 'sdcsdc', avatar_link: 'https://img.freepik.com/premium-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg' });
      createPost({ author: 'f', create_time: '12', id: 6, text: 'sdcsdc', avatar_link: 'https://img.freepik.com/premium-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg' });
    }
  }, []);

  return (
    <div className="App">
      <PostsPage />
    </div>
  );
}

export default App;
