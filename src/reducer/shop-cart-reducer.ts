interface IShopCart {
  id: string;
  name: string;
  path: string;
  extension: string;
  isRare: boolean;
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

type Action = { type: "ADD_SHOP"; payload: IShopCart } | { type: "REMOVE_SHOP"; payload: string } | {type: "FINISH_BUY";}

export const ShopCartReducer = (state: typeof initialState, action: Action) => {

  switch (action.type) {
    case "ADD_SHOP":
      let NewItem = [...state.ShopCart, action.payload]
      return { ...state, ShopCart: NewItem }
    
      case "REMOVE_SHOP":
      return { ...state, ShopCart: state.ShopCart.filter((item: any) => item.id !== action.payload) }
    
      case "FINISH_BUY":
      return { ...state, ShopCart: state.ShopCart = [] }

    default:
      return {
        ...state,
      };
  }
};