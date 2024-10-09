import React, { useState } from 'react';
import axios from 'axios';
import './AddClient.css';

function AddClient() {
  const [formData, setFormData] = useState({
    clientId: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5001/clients', formData)
      .then(response => {
        console.log('Client added successfully');
        setFormData({
          clientId: '',
          name: '',
          email: '',
          phone: ''
        });
      })
      .catch(error => console.error('Error adding client:', error));
  };

  return (
    <div className="shadow container mt-4">
      <h2>Add Client</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Client ID</label>
          <input type="text" className="form-control" name="clientId" value={formData.clientId} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default AddClient;
