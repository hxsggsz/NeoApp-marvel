import { StyledMenu } from "."
import logo from "/logo.png"
import { Text } from "../text/text"
import { Link } from "react-router-dom"
import { ReactNode, useState } from "react"
import { GetIcon } from "../icons-svg/getIcon"
import { AnimatePresence, motion } from "framer-motion"
import { CaretDoubleLeft, CaretDoubleRight } from "phosphor-react"

type StyledBuyMenu = {
  children: ReactNode
}

export const BuyMenu = ({ children }: StyledBuyMenu) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <StyledMenu>
      <header>
        <Link to="/">
          <img width={159} height={60} src={logo} alt="logo da marvel escrito marvel" />
        </Link>

        <motion.button
          data-cy='menu-list'
          whileTap={{ rotate: 360 }}
          transition={{ type: "keyframes" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CaretDoubleRight size={58} color="white" weight="bold" /> : <CaretDoubleLeft size={58} color="white" weight="bold" />}
        </motion.button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            className="container">

            <Text size="lg">Your items <GetIcon /></Text>
            <div className="content">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </StyledMenu>
  )
}