// Sample content for src/pages/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <div>
      <h1>Welcome, Admin</h1>
      <nav>
        <ul>
          <li><Link to="/agents">➕ Add Agent</Link></li>
          <li><Link to="/upload">📤 Upload & Distribute List</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardPage;
