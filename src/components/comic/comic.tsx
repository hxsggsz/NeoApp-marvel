import { ReactNode, useState } from 'react';
import { StyledComic } from '.';
import { Eye, EyeClosed } from 'phosphor-react';
import bg from "/bg-comic.jpg"
export const Comic = (props: { path: string, children: ReactNode }) => {
  const [isShow, setIsShow] = useState(true)
  return (
    <StyledComic >
      <div className="image-container" style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}>
        <img
          width={100}
          height={100}
          alt={`front page of a comic`}
          src={props.path}
        />
      </div>

      <div onClick={() => setIsShow(!isShow)} className="eye">
        {isShow ? <EyeClosed cursor="pointer" color="white" size={58} weight="bold" /> : <Eye cursor="pointer" color="white" size={58} weight="bold" />}
      </div>

      {isShow &&
        <div className="wrapper">
          {props.children}
        </div>
      }
    </StyledComic>
  )
}