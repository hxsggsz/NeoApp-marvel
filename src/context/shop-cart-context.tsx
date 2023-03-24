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
  ShopCart: {
    id: string;
    name: string;
    path: string;
    extension: string;
  }[]
  removeItem: (id: string) => void;
  addNewItemshopCart: (name: string, path: string, extension: string) => void
}

export const ShopCartContext = createContext({} as StateProps);

export const useShopCart = () => useContext(ShopCartContext);

export const ShopCartProvider = ({ children }: ThemeTypes) => {
  const [{ ShopCart }, dispatch] = useReducer(ShopCartReducer, initialState)

  const addNewItemshopCart = (name: string, path: string, extension: string) => {
    const id = uuid()
    const newItem = { id, name, path, extension }
    dispatch({ type: "ADD_SHOP", payload: newItem })
    localStorage.setItem("item", JSON.stringify([...ShopCart, newItem]))
  }

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_SHOP", payload: id })
  }

  return (
    <ShopCartContext.Provider value={{ ShopCart, addNewItemshopCart, removeItem }}>
      {children}
    </ShopCartContext.Provider>
  );
};