import { ShoppingCart, X } from "phosphor-react"
import { StyledShop } from "."
import { useState } from 'react';
import { Text } from "../text/text";
import { SpiderManWeb } from "../icons-svg/spiderman-web";
import { GetIcon } from "../icons-svg/getIcon";
import { Button } from "../buttons/button/button";
import { useShopCart } from "../../context/shop-cart-context";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const ShopCart = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { state, removeItem } = useShopCart()
  return (
    <StyledShop isOpen={isOpen}>
      {isOpen && (
        <main className="shop">
          <header>
            <div className="text">
              <Text size="lg">Your shop-list</Text>
              <SpiderManWeb />
            </div>

            <X className="close" onClick={() => setIsOpen(!isOpen)} cursor="pointer" size={32} weight="bold" />
          </header>

          <ul>
            {state.ShopCart.map(shop => (
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

          </ul>

          <Link to="/buy">
            <Button>CheckOut</Button>
          </Link>
        </main>
      )}

      {state.ShopCart.length !== 0 && (

        <button onClick={() => setIsOpen(!isOpen)} className="button">
          {isOpen ?
            <X size={32} weight="bold" /> :
            <div className="icon">
              <Text>{state.ShopCart.length}</Text>
              <ShoppingCart size={32} color="white" weight="bold" />
            </div>
          }
        </button>
      )}
    </StyledShop>
  )
}