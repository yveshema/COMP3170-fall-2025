import { useLoaderData } from "react-router";

export async function loader({ params }) {
  const { id } = params;
  const url = `https://jsonplaceholder.typicode.com/users/${id}?_embed=posts`;
  const resp = await fetch(url);
  if (!resp.ok) throw new Error('Failed to fetch user details');
  const data = await resp.json();
  return data;
}

export default function UserDetails() {
  const data = useLoaderData();

  if (data.isLoading) return <div>Loading...</div>;
  if (data.isError) return <div>Failed to fetch user details</div>;

  return (
    <div>
      <h2>{data.name}'s blog posts</h2>
      <>
        {data.posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
      ))}
      </>
    </div>
  )

  
}