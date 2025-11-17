import { useEffect, useState } from 'react';
import { Link } from 'react-router';

export default function AllUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';

    async function fetchUsers() {
      try {
        const resp = await fetch(url);
        if (!resp.ok) throw new Error('Failed to fetch users');
        const data = await resp.json();
        setUsers(data);
      } catch (e) {
        console.error(e.message);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Our writers</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`${user.id}`}>{user.name} - {user.email}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}