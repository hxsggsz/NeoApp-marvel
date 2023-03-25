import { ReactNode } from "react"
import { StyledLinkText } from "."
import { Link } from "react-router-dom"

export const LinkText = (props: {path: string, children: ReactNode}) => {
  return ( 
    <Link target="_blank" to={props.path}>
      <StyledLinkText>
      {props.children}
    </StyledLinkText>
    </Link>
  )
}