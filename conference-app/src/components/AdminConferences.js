import React, { useEffect, useState } from 'react';

const AdminConferences = () => {
  const [conferences, setConferences] = useState([]);
  const [newConference, setNewConference] = useState({
    title: '',
    description: '',
    date: '',
    createdAt: new Date().toISOString(),
    img: '',
    content: '',
    mainColor: '',
    secondColor: ''
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchConferences = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await fetch('/api/admin/conferences', {
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

  const handleAddConference = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('/api/admin/conferences', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(newConference),
      });
      if (!response.ok) {
        throw new Error('Failed to add conference');
      }
      const data = await response.json();
      setConferences([...conferences, data]);
      setNewConference({
        title: '',
        description: '',
        date: '',
        createdAt: new Date().toISOString(),
        img: '',
        content: '',
        mainColor: '',
        secondColor: ''
      });
    } catch (error) {
      setError(error.message);
      console.error('Error adding conference:', error);
    }
  };

  return (
    <div>
      <h1>Admin - Conferences</h1>
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}
      <ul>
        {conferences.map((conference) => (
          <li key={conference.id} style={{ backgroundColor: conference.mainColor }}>
            {conference.title}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Title"
        value={newConference.title}
        onChange={(e) => setNewConference({ ...newConference, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={newConference.description}
        onChange={(e) => setNewConference({ ...newConference, description: e.target.value })}
      />
      <input
        type="date"
        placeholder="Date"
        value={newConference.date}
        onChange={(e) => setNewConference({ ...newConference, date: e.target.value })}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={newConference.img}
        onChange={(e) => setNewConference({ ...newConference, img: e.target.value })}
      />
      <input
        type="text"
        placeholder="Content"
        value={newConference.content}
        onChange={(e) => setNewConference({ ...newConference, content: e.target.value })}
      />
      <input
        type="text"
        placeholder="Main Color"
        value={newConference.mainColor}
        onChange={(e) => setNewConference({ ...newConference, mainColor: e.target.value })}
      />
      <input
        type="text"
        placeholder="Second Color"
        value={newConference.secondColor}
        onChange={(e) => setNewConference({ ...newConference, secondColor: e.target.value })}
      />
      <button onClick={handleAddConference}>Add Conference</button>
    </div>
  );
};

export default AdminConferences;
