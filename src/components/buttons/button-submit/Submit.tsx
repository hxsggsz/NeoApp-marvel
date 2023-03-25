import { StyledSubmit } from "../index"
import { ButtonHTMLAttributes, ReactNode } from "react"

interface ISubmit extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const Submit = ({ children, ...props}: ISubmit) => {
  return (
    <StyledSubmit {...props}>
      {children}
    </StyledSubmit>
  )
}