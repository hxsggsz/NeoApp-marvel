import { StyledButton } from '../.';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface Ibutton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const Button = ({ children }: Ibutton) => {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  )
}