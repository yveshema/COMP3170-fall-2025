import { useNavigate } from 'react-router';

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Contact Page</h1>
      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}