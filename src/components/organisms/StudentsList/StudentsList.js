import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useStudents } from 'hooks/useStudents';

import StudentsListItem from 'components/molecules/StudentsListItem/StudentsListItem';

import { Wrapper, StyledList, StyledTitle } from './StudentsList.styles';

const StudentsList = ({ handleOpenStudentDetails }) => {
  const [students, setStudents] = useState([]);
  const { id } = useParams();
  const { getStudentsByGroup } = useStudents();

  useEffect(() => {
    (async () => {
      const students = await getStudentsByGroup(id);
      setStudents(students);
    })();
  }, [getStudentsByGroup, id]);

  return (
    <Wrapper>
      <StyledTitle>Students List</StyledTitle>
      <StyledList>
        {students.map((userData) => (
          <StudentsListItem onClick={() => handleOpenStudentDetails(userData.id)} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default StudentsList;
