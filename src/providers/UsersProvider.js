import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const UsersContext = createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
  handleInputChange: () => {},
});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);

    setUsers(filteredUsers);
  };

  const handleAddUser = (formValues) => {
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setUsers([newUser, ...users]);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('/students');
        setUsers(response.data.students);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <UsersContext.Provider
      value={{
        users,
        handleAddUser,
        deleteUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
