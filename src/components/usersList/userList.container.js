import React from 'react';
import UsersListComponent from './userList.component';
import useApi from '../../hooks/useApi';
const API_URL = 'https://jsonplaceholder.typicode.com/users';

export function UsersListContainer() {
  const { list, loading, error } = useApi(API_URL);

  if(loading) {
    return (<div>ładowanie...</div>);
  }

  if(error) {
    return (<div>Błąd ładowania</div>);
  }

  return (
    <div>
      <h2>Lista użytkowników</h2>
      <UsersListComponent userList={list} />
    </div>
  );
}

