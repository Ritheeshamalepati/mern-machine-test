import React, { useState } from 'react';
import axios from 'axios';

const AddAgent = () => {
  const [agentData, setAgentData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setAgentData({ ...agentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/agents', agentData);
      alert('Agent added successfully!');
      setAgentData({ name: '', email: '', phone: '' });
    } catch (err) {
      console.error(err);
      alert('Error adding agent');
    }
  };

  return (
    <div>
      <h2>Add Agent</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={agentData.name} onChange={handleChange} placeholder="Name" required />
        <input type="email" name="email" value={agentData.email} onChange={handleChange} placeholder="Email" required />
        <input type="text" name="phone" value={agentData.phone} onChange={handleChange} placeholder="Phone" required />
        <button type="submit">Add Agent</button>
      </form>
    </div>
  );
};

export default AddAgent;
