type initialStateType = {
  IsRare: boolean;
}

export const initialState = {
  IsRare: false,
}

type Action = { type: "IsRare" }

export const Reducer = (state: initialStateType, action: Action) => {
  switch (action.type) {
    case "IsRare":
      return {
        ...state,
        IsRare: !state.IsRare,
      };

    default:
      return {
        ...state,
      };
  }
};