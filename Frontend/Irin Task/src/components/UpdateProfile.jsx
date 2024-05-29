import React, { useState } from 'react';
import { useAuth } from '../context/AuthProvider';
import authService from '../services/authService';

const UpdateProfile = ({ history }) => {
  const { user, updateUser } = useAuth();
  const [username, setUsername] = useState(user ? user.username : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [message, setMessage] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await authService.updateProfile(user.token, { username, email });
      updateUser(data);
      history.push('/profile');
    } catch (error) {
      setMessage('Error updating profile');
    }
  };

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateProfile;
