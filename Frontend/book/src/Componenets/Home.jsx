import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
  const navigate = useNavigate();

  const functions = [
    {
      name: 'Add Books',
      method: 'POST',
      color: '#61dafb',
      icon: '📚',
      desc: 'Create new book entries',
    },
    {
      name: 'View Books',
      method: 'GET',
      color: '#61dafb',
      icon: '🔍',
      desc: 'Browse and read book data',
    },
    {
      name: 'Edit Books',
      method: 'PUT',
      color: '#61dafb',
      icon: '✏️',
      desc: 'Modify details of existing books',
    },
    {
      name: 'Delete Books',
      method: 'DELETE',
      color: '#61dafb',
      icon: '🗑️',
      desc: 'Permanently remove unwanted books',
    },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#20232a', color: '#fff' }}>
      <Navbar />

      {/* Hero Section */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', padding: '60px 20px', maxWidth: '1200px', margin: 'auto' }}>
        <div style={{ flex: '1 1 400px', paddingRight: '40px' }}>
          <h1 style={{ fontSize: '2.8rem', color: '#61dafb', marginBottom: '20px' }}>
            📘 Book Management Made Easy
          </h1>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#ccc' }}>
            Welcome to your personalized Book Manager. Add, view, edit, and delete your books easily using intuitive CRUD operations. Keep your library organized, whether for personal reading or academic needs.
          </p>
          <button
            onClick={() => navigate('/dashboard')}
            style={{
              marginTop: '30px',
              padding: '10px 25px',
              backgroundColor: '#61dafb',
              color: '#20232a',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Go to Dashboard
          </button>
        </div>
        <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/29/29302.png"
            alt="Books"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </div>

      {/* Functions Section */}
      <div style={{ maxWidth: '1200px', margin: 'auto', padding: '40px 20px' }}>
        <h2 style={{ fontSize: '2rem', textAlign: 'center', color: '#61dafb', marginBottom: '30px' }}>
          CRUD Operations
        </h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {functions.map((func, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#2c2f35',
                border: '1px solid #444',
                borderRadius: '8px',
                padding: '20px',
                width: '240px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '2rem' }}>{func.icon}</div>
              <h3 style={{ fontSize: '1.3rem', margin: '10px 0' }}>{func.name}</h3>
              <span
                style={{
                  backgroundColor: func.color,
                  color: '#20232a',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                }}
              >
                {func.method}
              </span>
              <p style={{ color: '#aaa', fontSize: '0.9rem', marginTop: '10px' }}>{func.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>

  );
};

export default Home;
