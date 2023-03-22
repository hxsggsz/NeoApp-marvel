import { ReactNode } from "react"
import { Text } from "../text/text"
import { Link } from "react-router-dom"
import { StyledLinkText } from "."

export const LinkText = (props: {path: string, children: ReactNode}) => {
  return ( 
    <Link target="_blank" to={props.path}>
      <StyledLinkText>
      {props.children}
    </StyledLinkText>
    </Link>
  )
}