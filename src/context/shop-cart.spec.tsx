import UserEvent from "@testing-library/user-event";
import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import { ShopCartProvider, ShopCartContext } from "./shop-cart-context";

const ContextInputWrapper = () => {
  render(
    <ShopCartProvider>
      <ShopCartContext.Consumer>
        {({ state, UpdateInput, onSubmit }) => (
          <>
            <form data-testid="form" onSubmit={(ev) => onSubmit(ev)}>
              <input data-testid="input" type="text" value={state.newTicket} onChange={(ev) => UpdateInput(ev)} />
              <button type="submit">submit</button>
            </form>

            {state.isError && <h1>{state.setError}</h1>}
            {state.isAccept && <h1>{state.ticketAccept}</h1>}
          </>
        )}
      </ShopCartContext.Consumer>
    </ShopCartProvider>
  )
}

const ContextShopWrapper = () => {
  render(
    <ShopCartProvider>
      <ShopCartContext.Consumer>
        {({ state, addNewItemshopCart, removeItem, finishBuy }) => (
          <>
            {state.ShopCart.map((cart) => (
              <h1>{cart.name}</h1>
            ))}

            <button onClick={() => addNewItemshopCart(1, "test", "_", "_", true)}>add new item</button>
            <button onClick={() => removeItem(1)}>Remove item</button>
            <button onClick={() => finishBuy()}>finish</button>
          </>
        )}
      </ShopCartContext.Consumer>
    </ShopCartProvider>
  )
}

describe('ShopCart Context', () => {
  it('should get an warning for empty input', async () => {
    ContextInputWrapper()

    UserEvent.click(screen.getByRole("button", { name: /submit/i }))
    await waitFor(() => expect(screen.getByText("Empty value!")).toBeInTheDocument())
  });

  it('should get an warning for unknown ticket', async () => {
    ContextInputWrapper()

    const input = screen.getByTestId("input")
    const button = screen.getByRole("button", { name: /submit/i })

    fireEvent.input(input, { target: { value: "unkonwn ticket" } })
    fireEvent.submit(button)
    expect(await screen.findByText(/ticket not valid or in use/i)).toBeInTheDocument()
  });

  it('should get success message on correct ticket and a warning if use the same ticket again', async () => {
    ContextInputWrapper()

    const input = screen.getByTestId("input")
    const button = screen.getByRole("button", { name: /submit/i })

    fireEvent.input(input, { target: { value: "neoapp10" } })
    fireEvent.submit(button)
    await waitFor(() => expect(screen.getByText(/ticket accept for all your comics!/i)).toBeInTheDocument())

    await new Promise((res) => setTimeout(res, 100));
    const mensage = screen.queryByText(/ticket accept for all your comics!/i)
    //por algum motivo o teste só passa com essas promises nele
    await new Promise((res) => setTimeout(res, 100));
    fireEvent.input(input, { target: { value: "neoapp10" } })
    fireEvent.submit(button)
    await waitFor(() => expect(screen.getByText(/ticket not valid or in use/i)).toBeInTheDocument())
  });
});

describe('Shop-list context', () => {
  it('should add one new item', async () => {
    ContextShopWrapper()

    const addBtn = screen.getByRole("button", { name: /add new item/i })

    UserEvent.click(addBtn)

    await waitFor(() => expect(screen.getByText("test")).toBeInTheDocument())
  });
 
  it('should add one new item and remove it ', async () => {
    ContextShopWrapper()

    const addBtn = screen.getByRole("button", { name: /add new item/i })
    const removeBtn = screen.getByRole("button", { name: /remove item/i })

    UserEvent.click(addBtn)
    await waitFor(() => expect(screen.getByText("test")).toBeInTheDocument())
    
    UserEvent.click(removeBtn)
    await waitFor(() => expect(screen.queryByText("test")).not.toBeInTheDocument())
  });
  it('should add one new item and finish the buy', async () => {
    ContextShopWrapper()

    const addBtn = screen.getByRole("button", { name: /add new item/i })
    const finshBtn = screen.getByRole("button", { name: /finish/i })

    UserEvent.click(addBtn)
    await waitFor(() => expect(screen.getByText("test")).toBeInTheDocument())
    
    UserEvent.click(finshBtn)
    await waitFor(() => expect(screen.queryByText("test")).not.toBeInTheDocument())
  });
});