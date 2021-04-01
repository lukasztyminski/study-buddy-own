import React from 'react';

import { ReactComponent as DeleteIcon } from 'assets/delete-icon.svg';
import { StyledButton } from './DeleteButton.styles';

const Button = (props) => {
  return (
    <StyledButton {...props} isSecondary>
      <DeleteIcon />
    </StyledButton>
  );
};

export default Button;
