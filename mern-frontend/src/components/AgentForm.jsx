import React, { useState } from 'react';
import axios from 'axios';

const AddAgent = () => {
  const [agent, setAgent] = useState({ name: '', email: '', mobile: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/agents/add', agent, {
        headers: { Authorization: localStorage.getItem('token') }
      });
      alert('Agent added successfully');
    } catch (err) {
      alert(err.response?.data?.msg || 'Error adding agent');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Agent</h2>
      <input type="text" placeholder="Name" onChange={(e) => setAgent({ ...agent, name: e.target.value })} required />
      <input type="email" placeholder="Email" onChange={(e) => setAgent({ ...agent, email: e.target.value })} required />
      <input type="text" placeholder="Mobile" onChange={(e) => setAgent({ ...agent, mobile: e.target.value })} required />
      <input type="password" placeholder="Password" onChange={(e) => setAgent({ ...agent, password: e.target.value })} required />
      <button type="submit">Add Agent</button>
    </form>
  );
};

export default AddAgent;
