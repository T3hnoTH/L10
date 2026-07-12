import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import './App.css';

const Users = [
  { "Name": "Александр", "Age": 20, "Email": "olex@i.ua" },
  { "Name": "Мария", "Age": 18, "Email": "maria@i.ua" },
  { "Name": "Дмитрий", "Age": 22, "Email": "dima@i.ua" },
  { "Name": "Анна", "Age": 19, "Email": "anya@i.ua" }
];

function useUsers() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers(Users);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return { users, isLoading };
}

function SearchApp() {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const { users, isLoading } = useUsers();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  const filterUsers = useCallback((allUsers, searchQuery) => {
    if (!searchQuery) return allUsers;
    return allUsers.filter(user =>
      user.Name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const filteredUsers = useMemo(() => {
    return filterUsers(users, query);
  }, [users, query, filterUsers]);

  const renderList = (items) => {
    if (items.length === 0) {
      return <p>Пользователей не найдено</p>;
    }

    return (
      <ul style={{ listStyleType: 'none'}}>
        {items.map((user, index) => (
          <li key={index}>
            {user.Name}({user.Age} лет) - {user.Email}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="SearchApp">
      <h1>Search app</h1>
      <hr />
      
      <input 
        ref={inputRef} 
        type="text" 
        value={query} 
        placeholder="Поиск по имени..."
        onChange={e => setQuery(e.target.value)}
        disabled={isLoading}
      />
      <hr />

      {isLoading ? (
        <div className="loader">Загрузка пользователей...</div>
      ) : (
        renderList(filteredUsers)
      )}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <SearchApp />
    </div>
  );
}

export default App;