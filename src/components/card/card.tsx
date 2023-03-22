import dp from "/no-desc.gif";
import { StyledCard } from ".";
import { Text } from "../text/text";
import { motion } from 'framer-motion';
import { Button } from "../button/button";
import { ShoppingCart, Star } from "phosphor-react";
import { useEffect, useState } from "react";

type CardTypes = {
  img: string
  title: string
  desc: string | undefined
}
export const Card = (props: CardTypes) => {
  const [ isRare, setIsrare ] = useState(false)
  // gera um numero de 0 a 9 (10 no total)
  const generateNumber = Math.floor(Math.random() * 9)
  
  useEffect(() => {
    if(generateNumber === 1) {
      setIsrare(true)
    }
  }, [])
  
  return (
    <StyledCard whileTap={{ scale: 0.9 }}>
      <div className="image-container">
        {isRare && <Star size={36} className="star"   weight="fill" />}
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
        <Text>{props.title}</Text>
        {props.desc ?
        <Text size="md">{props.desc}</Text>
        : <img className="dp" width={350} height={150} src={dp}/>
      }
        <Button>Adicione ao carrinho <ShoppingCart size={32} color="white" weight="bold" /></Button>
      </div>
    </StyledCard>
  )
}