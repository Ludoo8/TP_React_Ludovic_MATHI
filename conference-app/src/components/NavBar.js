import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="/conferences">Conferences</Link>
        </li>
        <li>
          <Link to="/admin/conferences">Admin Conferences</Link>
        </li>
        <li>
          <Link to="/admin/users">Admin Users</Link>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
