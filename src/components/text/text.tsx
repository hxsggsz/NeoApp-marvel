import { StyledText } from "."
import { ReactNode } from "react"

type TextTypes = {
  //assim o intelicense recomenda "md" quando usar a propiedade "size"
  size?: "md" | "lg" | undefined
  children: ReactNode
}

export const Text = ({ size, children }: TextTypes) => {
  return (
    <StyledText size={size}>{children}</StyledText>
  )
}