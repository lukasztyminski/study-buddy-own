import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
`;

export const FormWrapper = styled.div`
  background: ${({ theme }) => theme.colors[theme]};
`;
