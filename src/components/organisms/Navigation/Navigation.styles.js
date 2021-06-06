import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
  justify-content: flex-start;
  padding: 30px 0;
  grid-row: 1/3;
  grid-column: 1/1;
`;

export const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
  h1 {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.white};
    text-align: right;
    margin-right: 20px;
  }
`;

const activeClassName = 'active-link';
export const StyledLink = styled(NavLink).attrs({
  activeClassName,
})`
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: right;
  margin: 15px 20px 15px auto;
  position: relative;
  cursor: pointer;
  &.${activeClassName} {
    &::after {
      opacity: 1;
    }
  }

  &::after {
    content: '';
    opacity: 0;
    position: absolute;
    width: 18px;
    height: 3px;
    top: 50%;
    transform: translate3d(0, -50%, 0);
    right: -20px;
    transition: opacity 0.4s ease-in-out;
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }
`;
