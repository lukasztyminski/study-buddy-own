import React from 'react';
import { useParams } from 'react-router';
import { useStudents } from 'hooks/useStudents';

import StudentsListItem from 'components/molecules/StudentsListItem/StudentsListItem';

import { Wrapper, StyledList, StyledTitle } from './StudentsList.styles';

const StudentsList = () => {
  const { id } = useParams();
  const { students } = useStudents({ groupId: id });

  return (
    <Wrapper>
      <StyledTitle>Students List</StyledTitle>
      <StyledList>
        {students.map((userData) => (
          <StudentsListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default StudentsList;
