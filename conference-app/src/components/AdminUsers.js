import React, { useEffect, useState } from 'react';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/admin/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Admin - Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminUsers;
