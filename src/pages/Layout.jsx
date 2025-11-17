import { NavLink, Outlet } from 'react-router';

export default function Layout() {
  return (
    <div className="app">
      <nav>
        <NavLink to="">Home</NavLink>
        <NavLink to="users">Our writers</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}