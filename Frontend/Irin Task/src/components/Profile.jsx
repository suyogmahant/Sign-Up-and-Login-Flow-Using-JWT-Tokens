import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthProvider';
import authService from '../services/authService';

const Profile = ({ history }) => {
  const { user, logout } = useAuth();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (user) {
      authService.getProfile(user.token).then(({ data }) => setProfile(data));
    } else {
      history.push('/login');
    }
  }, [user, history]);

  const handleLogout = () => {
    logout();
    history.push('/login');
  };

  return (
    <div>
      {profile && (
        <div>
          <h1>Profile</h1>
          <p>Username: {profile.username}</p>
          <p>Email: {profile.email}</p>
          <button onClick={() => history.push('/update-profile')}>Update Profile</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
