import { StyledCard } from ".";
import { Text } from "../text/text";
import { motion } from "framer-motion";
import { StarRare } from "../star/star";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ShoppingCart } from "phosphor-react";
import { Button } from "../buttons/button/button";
import { useShopCart } from "../../context/shop-cart-context";

type CardTypes = {
  link: string
  extension: string
  title: string
  desc: string | undefined
  path: string
  // addShopCart: () => void
}
export const Card = (props: CardTypes) => {
  // passando um state local pra um global porque se a condição for true no state global ele passa o true para todos os componentes
  const [isRare, setIsRare] = useState(false);
  const { addNewItemshopCart } = useShopCart();

  useEffect(() => {
    // gera um numero de 1 a 10 (10 no total)
    const generateNumber = (Math.floor(Math.random() * 10) + 1)
    if (generateNumber === 1) {
      setIsRare(true);
    }
  }, [])

  return (
    <StyledCard>
      <div className="image-container">
        {isRare && <StarRare />}
        <motion.img
          whileHover={{ scale: 1.2, y: 10 }}
          transition={{ type: "keyframes" }}
          width={400}
          height={210}
          src={`${props.path}.${props.extension}`}
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
          <Link to={props.path}><Button>More info</Button></Link>
          <Button onClick={() => addNewItemshopCart(props.title, props.path, props.extension, isRare)} className="shop-mobile">Add to shop-cart <ShoppingCart size={32} color="white" weight="bold" /></Button>
        </div>
      </div>
    </StyledCard>
  )
}