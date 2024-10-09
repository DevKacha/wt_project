import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="container shadow d-flex flex-column justify-content-center align-items-center mt-5 text-center">
      <h1>Welcome to Our Construction Company</h1>
      <h2 className="slogan mt-4">"GURUKRUPA Construction"</h2>
      <p className="lead mt-3">
        We are committed to delivering high-quality construction services and ensuring customer satisfaction.
        Our mission is to build safe, sustainable, and innovative projects that shape the future.
      </p>
    </div>
  );
}

export default Home;