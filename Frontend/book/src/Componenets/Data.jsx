import React from 'react';

const Data = () => {
  return (
    <div style={{
      width: '250px',
      backgroundColor: '#20232a',
      color: '#ffffff',
      padding: '30px 20px',
      height: '100vh',
      position: 'sticky',
      top: '64px',
    }}>
      <h3 style={{ marginBottom: '30px', fontSize: '22px' }}>Dashboard</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><a href="/dashboard/uploads" style={linkStyle}>Upload Books</a></li>
        <li><a href="/dashboard/manage" style={linkStyle}>Manage Books</a></li>
        
        <li><a href="/dashboard/favorites" style={linkStyle}>Favorite Books</a></li>
        <li><a href="/dashboard/more" style={linkStyle}>Renowned Authors and their books</a></li>
      </ul>
    </div>
  );
};

const linkStyle = {
  color: '#61dafb',
  textDecoration: 'none',
  margin: '15px 0',
  display: 'block',
  fontSize: '16px',
};

export default Data;
