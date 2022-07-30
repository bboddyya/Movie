import { SET_RATING } from "../types/types";

const initialState = {
  film: { id: null, rating: null },
};

export const ratingSelection = (state = initialState, action) => {
  switch (action.type) {
    case SET_RATING:
      const { value } = action;
      const { film } = state;
      return {
        ...state,
        film: { ...film, rating: value },
      };

    default:
      return state;
  }
};
