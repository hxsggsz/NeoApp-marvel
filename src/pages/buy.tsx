import { BuyCard } from "../components/buy-card/buy-card"
import { GetIcon } from "../components/icons-svg/getIcon"
import { Text } from "../components/text/text"
import { useShopCart } from "../context/shop-cart-context"

export const Buy = () => {
  const { ShopCart } = useShopCart()
  return (
    <>
      {ShopCart.map(cart => (
        <BuyCard path={`${cart.path}.${cart.extension}`} text={cart.name} />
      ))}

      <Text size="lg">You're almost done! <GetIcon/></Text>
      <Text>To finish it follow the nexts steps</Text>
    </>
  )
}