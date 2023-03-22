import dp from "/no-desc.gif";
import { StyledCard } from ".";
import { Text } from "../text/text";
import { motion } from 'framer-motion';
import { Button } from "../buttons/button/button";
import { ShoppingCart, Star } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type CardTypes = {
  img: string
  title: string
  desc: string | undefined
  path: string
}
export const Card = (props: CardTypes) => {
  const [isRare, setIsrare] = useState(false)
  // gera um numero de 1 a 10 (10 no total)
  
  useEffect(() => {
    const generateNumber = (Math.floor(Math.random() * 9) + 1)
    if (generateNumber === 1) {
      setIsrare(true)
    }
    // array de dependências vazio para que toda vez que a página carregar, ele execute esse código
  }, [])

  return (
    <StyledCard whileTap={{ scale: 0.9 }}>
        <div className="image-container">
          {isRare && <Star size={36} className="star" weight="fill" />}
          <motion.img
            whileHover={{ scale: 1.2, y: 10 }}
            transition={{ type: "keyframes" }}
            width={400}
            height={210}
            src={props.img}
            alt={`quadrinho do ${props.title}`}
          />
        </div>

          <Link to={props.path}>
        <div className="content">
          <Text size="lg">{props.title}</Text>
          {props.desc ?
            <Text>{props.desc}</Text>
            : <img className="dp" width={350} height={150} src={dp} />
          }
          <Button>Add to shop-cart <ShoppingCart size={32} color="white" weight="bold" /></Button>
        </div>
      </Link>
    </StyledCard>
  )
}