export interface IShopCart {
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
  isFinish: false,
  isActive: false,
  isError: false,
  isAccept: false,
  setError: "",
  newTicket: "",
  ticketAccept: "",
}

export type Action =
  | { type: "NO_ERROR"; }
  | { type: "FINISH_BUY"; }
  | { type: "EMPTY_INPUT"; }
  | { type: "AFTER_FINISH"; }
  | { type: "ACTIVE_INPUT"; }
  | { type: "CLEAN_TICKET"; }
  | { type: "INPUT"; payload: string; }
  | { type: "ADD_SHOP"; payload: IShopCart; }
  | { type: "REMOVE_SHOP"; payload: string; }
  | { type: "INPUT_ERROR"; payload: string; }
  | { type: "TICKET_ACCEPT"; payload: string; }

export const ShopCartReducer = (state: typeof initialState, action: Action) => {

  switch (action.type) {
    case "ADD_SHOP":
      let NewItem = [...state.ShopCart, action.payload]
      return { ...state, ShopCart: NewItem }

    case "REMOVE_SHOP":
      return { ...state, ShopCart: state.ShopCart.filter((item: any) => item.id !== action.payload) }

    case "FINISH_BUY":
      return {
        ...state,
        ShopCart: state.ShopCart = [],
        isFinish: !state.isFinish
      }

    case "AFTER_FINISH":
      return {
        ...state,
        isFinish: !state.isFinish
      }

    case "INPUT":
      return {
        ...state,
        newTicket: action.payload,
      }

    case "INPUT_ERROR":
      return {
        ...state,
        isError: !state.isError,
        setError: action.payload,
      }
    case "NO_ERROR":
      return {
        ...state,
        isError: !state.isError,
      }

    case "TICKET_ACCEPT":
      return {
        ...state,
        ticketAccept: action.payload,
        isAccept: !state.isAccept,
      }
      
      case "CLEAN_TICKET":
        return {
          ...state,
          isAccept: !state.isAccept,
      }

    default:
      return {
        ...state,
      };
  }
};