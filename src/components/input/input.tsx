import { StyledInput } from "."
import { InputHTMLAttributes } from "react"

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  isActive: boolean
}

export const Input = ({isActive,...props}: IInput) => {
  return (
    <StyledInput>
      <label className={isActive ? "active" : ""} htmlFor="ticket">
        Insert a ticket: 
      </label>
      <input id="ticket" {...props} />
    </StyledInput>
  )
}