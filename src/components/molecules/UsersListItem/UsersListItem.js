import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Flex, Wrapper } from './UsersListItem.styles';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import Average from 'components/atoms/Average/Average';
import { Title } from 'components/atoms/Title/Title';
import { UserShape } from 'types';
import { UsersContext } from 'providers/UsersProvider';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  const { deleteUser } = useContext(UsersContext);
  return (
    <>
      <Wrapper key={`id-${name}`}>
        <Average value={average}>{average}</Average>
        <Flex>
          <Title>{name}</Title>
          <p>attendance: {attendance}</p>
        </Flex>
        <DeleteButton onClick={() => deleteUser(name)} />
      </Wrapper>
    </>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default UsersListItem;
