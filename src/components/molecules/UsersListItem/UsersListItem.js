import React from 'react';
import PropTypes from 'prop-types';
import { StyledAverage, StyledInfo, Wrapper } from './UsersListItem.styles';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { UserShape } from 'types';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  return (
    <>
      <Wrapper key={`id-${name}`}>
        <StyledAverage value={average}>{average}</StyledAverage>
        <StyledInfo>
          <p>
            {name}
            <DeleteButton />
          </p>
          <p>attendance: {attendance}</p>
        </StyledInfo>
      </Wrapper>
    </>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default UsersListItem;
