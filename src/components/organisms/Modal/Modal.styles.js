import styled from 'styled-components';
import ReactModal from 'react-modal';
import { Flex } from 'helpers/mixins';

export const ModalWrapper = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  min-width: 600px;
  min-height: 700px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 8px -5px 25px -10px rgba(0, 0, 0, 0.3);
  ${Flex('column', 'center', 'space-between')};
  opacity: 1;

  &:focus {
    outline: none;
  }

  .Overlay {
    background: rgba(115, 124, 142, 0.6);
  }
`;
