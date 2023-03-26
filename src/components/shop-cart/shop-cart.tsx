import { StyledShop } from "."
import { useState } from 'react';
import { Text } from "../text/text";
import { Link } from "react-router-dom"
import { GetIcon } from "../icons-svg/getIcon"
import { ShoppingCart, X } from "phosphor-react"
import { Button } from "../buttons/button/button"
import { AnimatePresence, motion } from "framer-motion"
import { SpiderManWeb } from "../icons-svg/spiderman-web"
import { useShopCart } from "../../context/shop-cart-context"

type ShopCarttype = {
  shopCart: {
    id: number
    name: string
  }[]
  removeItem: (id: number) => void
}

export const ShopCart = ({ shopCart, removeItem }: ShopCarttype) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <StyledShop isOpen={isOpen}>
      <AnimatePresence>

        {isOpen && (
          <motion.main initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} className="shop">
            <header>
              <div className="text">
                <Text size="lg">Your shop-list</Text>
                <SpiderManWeb />
              </div>

              <X className="close" onClick={() => setIsOpen(!isOpen)} cursor="pointer" size={32} weight="bold" />
            </header>

            <ul>
              <AnimatePresence>
                {shopCart.map(shop => (
                  <motion.li
                    key={shop.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "backInOut" }}
                  >
                    <div className="wrapper">
                      <Text>{shop.name}</Text><GetIcon />
                    </div>
                    <X className="close" onClick={() => removeItem(shop.id)} cursor="pointer" size={52} weight="bold" />
                  </motion.li>
                ))}
              </AnimatePresence>

            </ul>

            <Link to="/buy">
              <Button>CheckOut</Button>
            </Link>
          </motion.main>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {shopCart.length !== 0 && (
          <motion.button
            key="isOpen"
            data-cy="open-btn"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            onClick={() => setIsOpen(!isOpen)} className="button"
          >
            {isOpen ?
              <X size={32} weight="bold" /> :
              <div className="icon">
                <Text>{shopCart.length}</Text>
                <ShoppingCart size={32} color="white" weight="bold" />
              </div>
            }
          </motion.button>
        )}
      </AnimatePresence>
    </StyledShop>
  )
}