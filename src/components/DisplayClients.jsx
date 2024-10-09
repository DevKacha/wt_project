import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DisplayClients.css';

function DisplayClients() {
  const [clients, setClients] = useState([]);
  const [editingClient, setEditingClient] = useState(null);
  const [editFormData, setEditFormData] = useState({
    clientId: '',
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = () => {
    axios.get('http://localhost:5001/clients')
      .then(response => setClients(response.data))
      .catch(error => console.error('Error fetching clients:', error));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5001/clients/${id}`)
      .then(() => {
        console.log('Client deleted successfully');
        fetchClients();
      })
      .catch(error => console.error('Error deleting client:', error));
  };

  const handleEditClick = (client) => {
    setEditingClient(client._id);
    setEditFormData(client);
  };

  const handleEditChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5001/clients/${editingClient}`, editFormData)
      .then(() => {
        console.log('Client updated successfully');
        setEditingClient(null);
        fetchClients();
      })
      .catch(error => console.error('Error updating client:', error));
  };

  return (
    <div className="shadow container mt-4">
      <h2 className=" text-black">Client Details</h2>
      <div className="row">
        {clients.map(client => (
          <div className="col-md-4 mb-3" key={client._id}>
            <div className="card bg-dark text-white shadow h-100">
              <div className="card-body">
                {editingClient === client._id ? (
                  <form onSubmit={handleEditSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Client ID</label>
                      <input type="text" className="form-control" name="clientId" value={editFormData.clientId} onChange={handleEditChange} required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input type="text" className="form-control" name="name" value={editFormData.name} onChange={handleEditChange} required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" name="email" value={editFormData.email} onChange={handleEditChange} required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Phone</label>
                      <input type="tel" className="form-control" name="phone" value={editFormData.phone} onChange={handleEditChange} required />
                    </div>
                    <button type="submit" className="btn btn-success">Save</button>
                    <button type="button" className="btn btn-secondary ms-2" onClick={() => setEditingClient(null)}>Cancel</button>
                  </form>
                ) : (
                  <>
                    <h5 className="card-title">{client.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Client ID: {client.clientId}</h6>
                    <p className="card-text">Email: {client.email}</p>
                    <p className="card-text">Phone: {client.phone}</p>
                    <button className="btn btn-primary" onClick={() => handleEditClick(client)}>Edit</button>
                    <button className="btn btn-danger ms-2" onClick={() => handleDelete(client._id)}>Delete</button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayClients;