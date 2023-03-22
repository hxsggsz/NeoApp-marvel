import dp from "/no-desc.gif";
import { StyledCard } from ".";
import { Text } from "../text/text";
import { motion } from 'framer-motion';
import { Button } from "../button/button";

type CardTypes = {
  img: string
  title: string
  desc: string | undefined
}
export const Card = (props: CardTypes) => {
  return (
    <StyledCard whileTap={{ scale: 0.9 }}>
      <div className="image-container">
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
        : <img width={350} height={150} src={dp}/>
      }
        <Button />
      </div>
    </StyledCard>
  )
}