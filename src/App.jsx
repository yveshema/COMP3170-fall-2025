import { useEffect, useState } from 'react';

import PostList from './components/PostList';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5';

    const fetchData = async () => {
      setLoading(true);
      try { 
        const resp = await fetch(url);
        if (!resp.ok) throw new Error('Network failure');
        const data = await resp.json();
        setPosts(data);
      } catch (e) {
        setError(e.message);
        console.error(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, []);
  return (
    <div className="App">
      <h1>My blog posts</h1>
      {error ? <p>Something went wrong: {error}</p> : <PostList posts={posts} loading={loading} />}
    </div>
  );
}

export default App;
