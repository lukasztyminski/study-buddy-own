import styled from 'styled-components';

export const AverageStyled = styled.div`
  width: 34px;
  height: 34px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: red;
`;
