import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddClient from './components/AddClient';
import DisplayClients from './components/DisplayClients';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src="/logo.png" alt="Logo" width="40" height="40" className="d-inline-block align-text-top" />
              <span className="ms-2">Construction Co.</span>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add-client">Add Client</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/display-clients">Client Details</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-client" element={<AddClient />} />
            <Route path="/display-clients" element={<DisplayClients />} />
          </Routes>
        </div>
        <footer className="mt-auto bg-dark text-white text-center py-3">
          <p>Construction Co. © 2024</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;