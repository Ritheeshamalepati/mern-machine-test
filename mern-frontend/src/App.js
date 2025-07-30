// Sample content for src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import AgentDashboard from './components/AgentDashboard';
import AgentForm from './components/AgentForm';
import UploadList from './components/UploadList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<AgentDashboard />} />
        <Route path="/add-agent" element={<AgentForm />} />
        <Route path="/upload-list" element={<UploadList />} />
      </Routes>
    </Router>
  );
}

export default App;
