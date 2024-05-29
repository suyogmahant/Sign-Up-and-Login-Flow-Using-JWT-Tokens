import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [error, setError] = useState(null);

  const fetchClients = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/clients');
      setClients(response.data);
    } catch (error) {
      console.error('Error fetching clients:', error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  if (error) {
    return <div>Error fetching clients: {error.message}</div>;
  }

  return (
    <div>
      <h2>Clients List</h2>
      <ul>
        {clients.map((client) => (
          <li key={client._id}>{client.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClientList;
