import React from 'react';
import PropTypes from 'prop-types';
import { StyledAverage, StyledInfo, Wrapper } from './StudentsListItem.styles';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { UserShape } from 'types';

const StudentsListItem = ({ userData: { average, name, attendance = '0%' } }) => {
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

StudentsListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default StudentsListItem;