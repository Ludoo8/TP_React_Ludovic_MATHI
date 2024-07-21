import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ConferenceList = () => {
  const [conferences, setConferences] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchConferences = async () => {
      const token = localStorage.getItem('token'); 
      try {
        const response = await fetch('http://localhost:4555/conferences', { // Chemin d'API corrigé
          headers: {
            'Authorization': `Bearer ${token}`, 
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setConferences(data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching conferences:', error);
      }
    };
    fetchConferences();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>All Conferences</h1>
      <ul>
        {conferences.map((conference) => (
          <li key={conference._id} style={{ backgroundColor: conference.design.mainColor }}>
            <Link to={`/conference/${conference._id}`}>{conference.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConferenceList;
