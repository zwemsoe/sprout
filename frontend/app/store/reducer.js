import { SET_AUTH } from "./actions";

export const initialState = {
  auth: null,
};

export const stateReducer = (state, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        auth: action.auth,
      };

    default:
      return state;
  }
};
