import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ConferenceDetails = () => {
  const { id } = useParams();
  const [conference, setConference] = useState(null);

  useEffect(() => {
    const fetchConference = async () => {
      const response = await fetch(`/api/conferences/${id}`);
      const data = await response.json();
      setConference(data);
    };
    fetchConference();
  }, [id]);

  if (!conference) return <div>Loading...</div>;

  return (
    <div style={{ backgroundColor: conference.colorCode }}>
      <h1>{conference.title}</h1>
      <p>{conference.description}</p>
    </div>
  );
};

export default ConferenceDetails;
