type initialStateType = {
  IsRare: boolean;
  IsOpen: boolean;
}

export const initialState = {
  IsRare: false,
  IsOpen: false,
}

type Action = { type: "IsRare" } | { type: "IsOpen" }

export const Reducer = (state: initialStateType, action: Action) => {
  switch (action.type) {
    case "IsRare":
      return {
        ...state,
        IsRare: !state.IsRare,
      };
    
      case "IsOpen":
      return {
        ...state,
        IsOpen: !state.IsOpen,
      };

    default:
      return {
        ...state,
      };
  }
};