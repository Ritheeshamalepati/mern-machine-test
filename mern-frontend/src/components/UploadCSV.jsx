// Sample content for src/components/UploadList.jsx
import React, { useState } from 'react';
import axios from 'axios';

const UploadCSV = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      alert('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('csv', file);

    try {
      await axios.post('/api/agents/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('CSV uploaded successfully!');
      setFile(null);
    } catch (err) {
      console.error('Upload error:', err);
      alert('Failed to upload CSV.');
    }
  };

  return (
    <div>
      <h2>Upload CSV</h2>
      <form onSubmit={handleUpload}>
        <input type="file" accept=".csv" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadCSV;
