// src/App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
        setUserData(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {userData && (
        <div className="card">
          <div className="card-img">
            <img src={userData.picture.large} alt="Profile" />
          </div>
          <div className="info">
            <h2>{`${userData.name.first} ${userData.name.last}`}</h2>
            <p>{userData.gender}</p>
            <p>{userData.phone}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
