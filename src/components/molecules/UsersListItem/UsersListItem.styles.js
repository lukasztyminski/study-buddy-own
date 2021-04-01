import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding: 33px 0 24px 0;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.border};
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 14px 0 24px;
`;
