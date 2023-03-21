import { StyledCard } from "."
import { Button } from "../button/button"
import { Text } from "../text/text"
import comic from "/comic-test.jpg"
import { motion } from 'framer-motion';

export const Card = () => {
  return (
    <StyledCard whileHover={{ scale: 1.1 }}>
      <div className="image-container">
        <motion.img
          whileHover={{ scale: 1.2, y: 10 }}
          transition={{ type: "keyframes" }}
          width={400}
          height={280}
          src={comic}
          alt="um quadrinho do homem aranha"
        />
      </div>

      <div className="content">
        <Text>Title</Text>
        <Text size="md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis esse saepe atque dolorum excepturi eligendi! </Text>
        <Button />
      </div>
    </StyledCard>
  )
}