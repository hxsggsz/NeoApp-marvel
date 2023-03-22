import { Star } from "phosphor-react"
import { Text } from "../text/text"
import { StyledStar } from "."
import { useState } from "react"

export const StarRare = () => {
  const [isHover, setIsHover ] = useState(false);
  return (
    <StyledStar onHoverStart={() => setIsHover(true)} onHoverEnd={() => setIsHover(false)}>
      <Star size={36} className="star" weight="fill" />
      {isHover && <Text>this comic is rare!</Text> }
    </StyledStar>
  )
}