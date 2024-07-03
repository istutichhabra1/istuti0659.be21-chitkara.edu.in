import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser, loginUser } from '../actions/authActions';

const AuthForm = ({ isRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      dispatch(registerUser({ username, password }));
    } else {
      dispatch(loginUser({ username, password }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
    </form>
  );
};

export default AuthForm;
