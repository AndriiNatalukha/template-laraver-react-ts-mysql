import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const getUsers = async () => {
    const { data } = await axios.get("http://localhost:8080/api/users");
    return data;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Привіт
        </a>
        {loading ? (
          <div>Завантаженя...</div>
        ) : (
          <div>
            <h1>Use</h1>
            <ul>
              {users && users.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
