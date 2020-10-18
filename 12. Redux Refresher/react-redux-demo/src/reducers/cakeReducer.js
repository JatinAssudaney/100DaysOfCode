import { BUY_CAKE } from "../actions/types";
const initialState = {
  numOfCakes: 10,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case BUY_CAKE:
      return { ...state, numOfCakes: state.numOfCakes - 1 };

    default:
      return state;
  }
};
