import { StyledButton } from "../."
import { ButtonHTMLAttributes, ReactNode } from "react"

interface Ibutton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const Button = ({ children, ...props }: Ibutton) => {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  )
}