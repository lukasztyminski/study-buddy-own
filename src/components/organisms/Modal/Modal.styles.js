import { Flex } from 'helpers/mixins';
import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  min-width: 600px;
  min-height: 700px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 -5px 25px -10px rgba(0, 0, 0, 0.3);
  ${Flex('column', 'center', 'space-between')}
`;
