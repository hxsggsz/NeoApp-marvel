import { StyledInfoCard } from "."
import { Text } from "../text/text"
import { Star, X } from "phosphor-react"

type BuyCardTypes = { path: string, text: string, isRare: boolean, remove: () => void }

export const BuyCard = (props: BuyCardTypes) => {
  return (
    <StyledInfoCard>
      <div className="top">
        <X onClick={props.remove} cursor="pointer" className="close" size={26} weight="bold" />
        {props.isRare && <Star size={26} color="red" weight="fill" />}
      </div>

      <div className="image-container">
        <img width={100} height={100} src={props.path} alt="a frontpage comic" />
      </div>

      <Text>{props.text}</Text>
    </StyledInfoCard>
  )
}