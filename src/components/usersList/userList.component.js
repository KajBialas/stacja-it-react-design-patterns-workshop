import React from 'react';


function UsersListComponent({ userList }) {
  const renderUserList = () => userList.map( user => (
    <div key={user.id}>{user.name}</div>
  ));

  return (
    <div>
      {renderUserList()}
    </div>
  );
}

export default UsersListComponent;