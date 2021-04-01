import styled from 'styled-components';
import { chooseFont } from 'styles/globalStyle';

export const Label = styled.label`
  ${chooseFont()};
  font-weight: bold;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
