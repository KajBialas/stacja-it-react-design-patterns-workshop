import React, { useState, useEffect } from 'react';
import UsersListComponent from './userList.component';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

function UsersListContainer() {
  const [ userList, setUserList ] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(json => setUserList(json))
  }, []);

  return (
    <div>
      <UsersListComponent userList={userList} />
    </div>
  );
}

export default UsersListContainer;