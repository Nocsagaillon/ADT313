import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <br />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;