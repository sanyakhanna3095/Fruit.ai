import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Welcome to Fruit.ai</h1>
      <button onClick={() => navigate('/chatbot')}>Explore Fruits (Chatbot)</button>
      <button onClick={() => navigate('/translator')}>Translate to Regional Languages</button>
      <button onClick={() => navigate('/faq')}>Frequently Asked Questions</button>
      <button onClick={() => navigate('/about')}>About Fruit.ai</button>
    </div>
  );
};

export default Home;
