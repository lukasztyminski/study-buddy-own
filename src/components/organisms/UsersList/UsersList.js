import React from 'react';
import PropTypes from 'prop-types';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';

import { Wrapper, StyledList, StyledTitle } from './UsersList.styles';
import { UserShape } from 'types';

const UsersList = ({ users = [] }) => {
  return (
    <Wrapper>
      <StyledTitle>Users List</StyledTitle>
      <StyledList>
        {users.map((userData, i) => (
          <UsersListItem index={i} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
};

export default UsersList;
