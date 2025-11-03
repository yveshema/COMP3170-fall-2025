import { use, useEffect, useState } from 'react';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const url = 'https://jsonplaceholder.typicode.com/posts';
    const url = 'https://api.itbook.store/1.0/search/react';
    
    async function fetchData() {
      setLoading(true);
      try {
        const resp = await fetch(url);

        if (!resp.ok) {
          throw new Error(resp.status);
        }

        const data = await resp.json();
        setPosts(data.books);
      } catch (e) {
        setError(e.message);
        console.error(e.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();

  }, []);
  
  return (
    <div>
      <h2>My blog posts</h2>

      {error ? <p>{error}</p>
        : loading ? <p>Loading...</p>
          : <>{posts.map(post => <p key={post.id}>{post.title}</p>)}</>
      }
      
    </div>
  );
}