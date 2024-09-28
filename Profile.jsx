import React from 'react';

const Profile = ({ name, email, profilePicture }) => {
  return (
    <div className="profile">
      <img src={profilePicture} alt={name} />
      <h2>{name}</h2>
      <p>Email: {email}</p>
    </div>
  );
};

export default Profile;