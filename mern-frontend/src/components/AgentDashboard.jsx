// Sample content for src/components/AgentDashboard.jsx
import React from 'react';
import AddAgent from './AddAgent';
import UploadCSV from './UploadCSV';

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome Admin</h1>
      <AddAgent />
      <UploadCSV />
    </div>
  );
};

export default Dashboard;
