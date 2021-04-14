import styled from 'styled-components';

export const StyledList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  max-width: 500px;
  padding: 40px 30px;
  border-radius: 25px;
  margin: 0 10px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.darkGrey};
`;
