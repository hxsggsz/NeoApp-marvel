import spider from "/spider-man.png"
import { StyledBuy } from "../styles/buy"
import avangers from "/side-avengers.png"
import { useEffect, useState } from "react"
import { Text } from "../components/text/text"
import { AnimatePresence } from "framer-motion"
import { PaperPlaneRight } from "phosphor-react"
import { Input } from "../components/input/input"
import { GetIcon } from "../components/icons-svg/getIcon"
import { BuyCard } from "../components/buy-card/buy-card"
import { useShopCart } from "../context/shop-cart-context"
import { BuyMenu } from "../components/buy-menu/buy-menu"
import { Button } from "../components/buttons/button/button"
import { Submit } from "../components/buttons/button-submit/Submit"
import { Notification } from "../components/notification/notification"

export const Buy = () => {
  const { state, UpdateInput, dispatch, removeItem, finishBuy, onSubmit } = useShopCart()
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    state.newTicket !== "" ? setIsActive(true) : setIsActive(false)
  }, [state.newTicket])

  return (
    <StyledBuy>
      <BuyMenu>
        {state.ShopCart.map(cart => (
          <BuyCard remove={() => removeItem(cart.id)} key={cart.id} path={`${cart.path}.${cart.extension}`} text={cart.name} isRare={cart.isRare} />
        ))}
      </BuyMenu>

      <div className="finish-buy">
        <Text size="lg">You"re almost done! <GetIcon /></Text>
        <img width={200} height={230} src={spider} alt="spider-man picture" />
        <Text size="md">To finish it follow the nexts steps</Text>

        <div className="image">
          <img src={avangers} width={100} height={100} />
        </div>

        <div className="wrapper-buy">
          <form onSubmit={(ev) => onSubmit(ev)}>
            <Input type="text" value={state.newTicket} onChange={(ev) => UpdateInput(ev)} isActive={isActive} />
            <Submit><PaperPlaneRight size={46} weight="bold" /></Submit>
          </form>

          <Button onClick={finishBuy}>Finish it! <GetIcon /></Button>
        </div>
      </div>

      {/* a doc do framer motion pede pra fazer assim, se não for feito ativa um erro no console */}
      <AnimatePresence>
        {state.isError && <Notification error text={state.setError} />}
      </AnimatePresence>
      <AnimatePresence>
        {state.isAccept && <Notification text={state.ticketAccept} />}
      </AnimatePresence>
      <AnimatePresence>
        {state.isFinish && <Notification text="You did it! The Avangers will remember that" />}
      </AnimatePresence>
    </StyledBuy>
  )
}