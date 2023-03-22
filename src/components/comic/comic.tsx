import { ReactNode } from 'react';
import { StyledComic } from '.';
export const Comic = (props: {path: string, children: ReactNode}) => {
  return (
    <StyledComic >
      <div className="image-container">
        <img
          width={100}
          height={100}
          alt={`front page of a comic`}
          src={props.path}
        />
      </div>

      <div className="wrapper">
        {props.children}
      </div>
    </StyledComic>
  )
}