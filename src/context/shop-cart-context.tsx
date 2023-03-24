import {
  ReactNode,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useReducer,
  useCallback
} from "react";
import { ShopCartReducer, initialState } from "../reducer/shop-cart-reducer";
import uuid from "react-uuid";

interface ThemeTypes {
  children: ReactNode;
}

interface StateProps {
  state: {
    ShopCart: {
      id: string;
      name: string;
      path: string;
      extension: string;
      isRare: boolean;
    }[]
    isFinish: boolean;
  }
  removeItem: (id: string) => void;
  finishBuy: () => void;
  addNewItemshopCart: (name: string, path: string, extension: string, isRare: boolean) => void
}

export const ShopCartContext = createContext({} as StateProps);

export const useShopCart = () => useContext(ShopCartContext);

export const ShopCartProvider = ({ children }: ThemeTypes) => {
  const [state, dispatch] = useReducer(ShopCartReducer, initialState)

  const addNewItemshopCart = (name: string, path: string, extension: string, isRare: boolean) => {
    const id = uuid()
    const newItem = { id, name, path, extension, isRare }
    dispatch({ type: "ADD_SHOP", payload: newItem })
    localStorage.setItem("item", JSON.stringify([...state.ShopCart, newItem]))
  }

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_SHOP", payload: id })
  }

  const finishBuy = () => {
    dispatch({ type: "FINISH_BUY" })
    localStorage.clear()
  }

  return (
    <ShopCartContext.Provider value={{ state, addNewItemshopCart, removeItem, finishBuy }}>
      {children}
    </ShopCartContext.Provider>
  );
};