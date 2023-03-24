import { StyledCard } from ".";
import { Text } from "../text/text";
import { motion } from 'framer-motion';
import { Button } from "../buttons/button/button";
import { ShoppingCart } from "phosphor-react";
import { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import { StarRare } from "../star/star";
import { Reducer, initialState } from "../../reducer/reducer";

type CardTypes = {
  img: string
  title: string
  desc: string | undefined
  path: string
  addShopCart: () => void
}
export const Card = (props: CardTypes) => {
  const [{ IsRare }, dispatch] = useReducer(Reducer, initialState)

  useEffect(() => {
      // gera um numero de 1 a 10 (10 no total)
      const generateNumber = (Math.floor(Math.random() * 10) + 1)
        if (generateNumber === 1) {
          dispatch({ type: "IsRare" })
        }
  }, [])

  return (
    <StyledCard>
      <div className="image-container">
        {IsRare  && <StarRare />}
        <motion.img
          whileHover={{ scale: 1.2, y: 10 }}
          transition={{ type: "keyframes" }}
          width={400}
          height={210}
          src={props.img}
          alt={`quadrinho do ${props.title}`}
        />
      </div>

        <div className="content">
          <Text size="lg">{props.title}</Text>
          {props.desc ?
            <Text>{props.desc}</Text>
            : <Text>No description avaiable :(</Text>
          }
          <div className="buttons">
            <Button><Link to={props.path}>More info</Link></Button>
            <Button onClick={props.addShopCart} className="shop-mobile">Add to shop-cart <ShoppingCart size={32} color="white" weight="bold" /></Button>
          </div>
        </div>
    </StyledCard>
  )
}