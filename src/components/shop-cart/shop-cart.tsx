import { ShoppingCart, X } from "phosphor-react"
import { StyledShop } from "."
import { useState } from 'react';
import { Text } from "../text/text";
import { SpiderManWeb } from "../icons-svg/spiderman-web";
import { GetIcon } from "../icons-svg/getIcon";
import { Button } from "../buttons/button/button";
import { useShopCart } from "../../context/shop-cart-context";
import { Link } from "react-router-dom";

export const ShopCart = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { ShopCart, removeItem } = useShopCart()
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
            {ShopCart.map(shop => (
              <li key={shop.id}>
                <div className="wrapper">
                  <Text>{shop.name}</Text><GetIcon />
                </div>
                <X className="close" onClick={() => removeItem(shop.id)} cursor="pointer" size={52} weight="bold" />
              </li>
            ))}

          </ul>

          <Link to="/buy">
            <Button>CheckOut</Button>
          </Link>
        </main>
      )}

      {ShopCart.length !== 0 && (

        <button onClick={() => setIsOpen(!isOpen)} className="button">
          {isOpen ?
            <X size={32} weight="bold" /> :
            <div className="icon">
              <Text>{ShopCart.length}</Text>
              <ShoppingCart size={32} color="white" weight="bold" />
            </div>
          }
        </button>
      )}
    </StyledShop>
  )
}