import { BuyCard } from "../components/buy-card/buy-card"
import { GetIcon } from "../components/icons-svg/getIcon"
import { Text } from "../components/text/text"
import { useShopCart } from "../context/shop-cart-context"
import { BuyMenu } from '../components/buy-menu/buy-menu';
import { StyledBuy } from "../styles/buy";
import { Input } from "../components/input/input";
import { Submit } from "../components/buttons/button-submit/Submit";
import { PaperPlaneRight } from 'phosphor-react';
import spider from "/spider-man.png"
import { Button } from "../components/buttons/button/button";
import avangers from "/side-avengers.png"

export const Buy = () => {
  const { ShopCart, removeItem, finishBuy } = useShopCart()
  return (
    <StyledBuy>
      <BuyMenu>
        {ShopCart.map(cart => (
          <BuyCard remove={() => removeItem(cart.id)} key={cart.id} path={`${cart.path}.${cart.extension}`} text={cart.name} isRare={cart.isRare} />
        ))}
      </BuyMenu>

      <div className="finish-buy">
        <Text size="lg">You're almost done! <GetIcon /></Text>
        <img width={200} height={230} src={spider} alt="spider-man picture" />
        <Text size="md">To finish it follow the nexts steps</Text>

        <div className="image">
          <img src={avangers} width={100} height={100} />
        </div>

        <div className="wrapper-buy">
          <form>
            <Input isActive={false} />
            <Submit><PaperPlaneRight size={46} weight="bold" /></Submit>
          </form>

          <Button onClick={finishBuy}>Finish it! <GetIcon /></Button>
        </div>
      </div>
    </StyledBuy>
  )
}