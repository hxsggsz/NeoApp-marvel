import {
  ReactNode,
  createContext,
  useContext,
  Dispatch,
  useReducer,
  useCallback,
  FormEvent,
  ChangeEvent,
  useState,
} from "react"
import { Action, ShopCartReducer, initialState, IShopCart } from '../reducer/shop-cart-reducer'
import sleep from "../utils/sleep"

interface ThemeTypes {
  children: ReactNode
}

interface StateProps {
  state: {
    ShopCart: IShopCart[]
    isFinish: boolean
    isActive: boolean
    isAccept: boolean
    isError: boolean
    setError: string
    newTicket: string
    ticketAccept: string
  }
  dispatch: Dispatch<Action>
  removeItem: (id: number) => void
  finishBuy: () => void
  UpdateInput: (ev: ChangeEvent<HTMLInputElement>) => void
  onSubmit: (ev: FormEvent<HTMLFormElement>) => void
  addNewItemshopCart: (id: number, name: string, path: string, extension: string, isRare: boolean) => void
}

export const ShopCartContext = createContext({} as StateProps)

export const useShopCart = () => useContext(ShopCartContext)

export const ShopCartProvider = ({ children }: ThemeTypes) => {
  const [rare, setRare] = useState(false)
  const [normal, setNormal] = useState(false)
  const [state, dispatch] = useReducer(ShopCartReducer, initialState)

  const addNewItemshopCart = useCallback((id: number, name: string, path: string, extension: string, isRare: boolean) => {
    const newItem = { id, name, path, extension, isRare }
    dispatch({ type: "ADD_SHOP", payload: newItem })
    localStorage.setItem("item", JSON.stringify([...state.ShopCart, newItem]))
  }, [])

  const removeItem = (id: number) => {
    dispatch({ type: "REMOVE_SHOP", payload: id })
  }

  const finishBuy = async () => {
    dispatch({ type: "FINISH_BUY" })
    localStorage.clear()
    await sleep(3000)
    dispatch({ type: "AFTER_FINISH" })
  }

  const UpdateInput = (ev: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "INPUT", payload: ev.currentTarget.value })
  }

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    
    if (state.newTicket === "neoapp10" && !normal) {
      dispatch({ type: "TICKET_ACCEPT", payload: "ticket accept for all your comics!" })
      setNormal(true)
      setTimeout(() => {
        dispatch({ type: "CLEAN_TICKET" })
      }, 3000)
    }

    const findRare = state.ShopCart.find((item: any) => item.isRare)
    if (state.newTicket === "neoapprare" && findRare && !rare) {
      dispatch({ type: "TICKET_ACCEPT", payload: "shh dont tell anyone, this ticket is rare! applyed on rare comics" })
      setRare(true)
      setTimeout(() => {
        dispatch({ type: "CLEAN_TICKET" })
      }, 3000)
    }
    if (state.newTicket === "neoapprare" && !findRare) {
      dispatch({ type: "INPUT_ERROR", payload: "this comic is not rare" })
      setTimeout(() => {
        dispatch({ type: "NO_ERROR" })
      }, 3000)
    }

    if (state.newTicket === "") {
      dispatch({ type: "INPUT_ERROR", payload: "Empty value!" })
      setTimeout(() => {
        dispatch({ type: "NO_ERROR" })
      }, 3000)
    }

    else {
      dispatch({ type: "INPUT_ERROR", payload: "ticket not valid or in use" })
      setTimeout(() => {
        dispatch({ type: "NO_ERROR" })
      }, 1000)
    }
  }

  return (
    <ShopCartContext.Provider value={{ state, dispatch, onSubmit, UpdateInput, addNewItemshopCart, removeItem, finishBuy }}>
      {children}
    </ShopCartContext.Provider>
  )
}