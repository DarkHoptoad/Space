import { ADD_DES } from "./des_actions";

export const desReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_DES: {
      return action.destinations;
    }
    default: {
      return state;
    }
  }
};
