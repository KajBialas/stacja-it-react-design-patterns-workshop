import React, { useState, useEffect } from 'react';
import UsersListComponent from './userList.component';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export function UsersListContainer() {
  const [ userList, setUserList ] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(json => setUserList(json))
  }, []);

  return (
    <div>
      <h2>Lista użytkowników</h2>
      <UsersListComponent userList={userList} />
    </div>
  );
}

