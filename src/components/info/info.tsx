import { ReactNode } from 'react';
import { StyledInfo } from '.';
export const Info = (props: {children: ReactNode}) => {
  return (
    <StyledInfo whileHover={{ scale: 1.1}}>
      {props.children}
    </StyledInfo>
  )
}