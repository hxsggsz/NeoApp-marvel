import { Text } from '../text/text';
import { StyledButton } from './index';
import { ReactNode } from 'react';

export const Button = (props: { children: ReactNode}) => {
  return (
    <StyledButton>
      {props.children}
    </StyledButton>
  )
}