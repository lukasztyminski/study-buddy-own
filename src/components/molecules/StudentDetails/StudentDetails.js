import React from 'react';
import { Title } from 'components/atoms/Title/Title';

import { BigAverage, StyledDetails, StyledLabel, Wrapper, StyledInfo, StyledSubjectInfo } from './StudentDetails.styles';
import { AverageStyled } from 'components/atoms/Average/Average.styles';

const StudentDetails = ({ student }) => {
  return (
    <Wrapper>
      <BigAverage value={student.average}>{student.average}</BigAverage>
      <Title isBig>{student.name}</Title>
      <StyledDetails>
        <StyledLabel>Course:</StyledLabel>
        <StyledInfo isBig>{student.course}</StyledInfo>
        <StyledLabel>Average grades:</StyledLabel>
        {student.grades.map(({ subject, average }) => (
          <StyledSubjectInfo key={subject}>
            <StyledInfo>{subject}</StyledInfo>
            <AverageStyled value={average}>{average}</AverageStyled>
          </StyledSubjectInfo>
        ))}
      </StyledDetails>
    </Wrapper>
  );
};

export default StudentDetails;
