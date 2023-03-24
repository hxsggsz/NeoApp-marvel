import { Reducer } from 'react';
import { ShopCart } from '../components/shop-cart/shop-cart';

interface IShopCart {
  id: string;
  name: string;
  path: string;
  extension: string;
}

const getItemByLocalStorage = () => {
    const currentItem = localStorage.getItem("item");
  
    if (currentItem) {
      return JSON.parse(currentItem);
    }
    return [] as IShopCart[];
  };

export const initialState = {
  ShopCart: getItemByLocalStorage(),
}

type Action = { type: "ADD_SHOP"; payload: IShopCart } | { type: "REMOVE_SHOP"; payload: string }

export const ShopCartReducer = (state: typeof initialState, action: Action) => {

  switch (action.type) {
    case "ADD_SHOP":
      let NewItem = [...state.ShopCart, action.payload]
      return { ...state, ShopCart: NewItem }
    case "REMOVE_SHOP":
      return { ...state, ShopCart: state.ShopCart.filter((item: any) => item.id !== action.payload) }

    default:
      return {
        ...state,
      };
  }
};