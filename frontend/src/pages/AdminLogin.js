import React from 'react';

const AdminLogin = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Admin Login</h2>
      <form>
        <div style={{ marginBottom: '1rem' }}>
          <input type="email" placeholder="Email" style={{ padding: '0.5rem' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <input type="password" placeholder="Password" style={{ padding: '0.5rem' }} />
        </div>
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
