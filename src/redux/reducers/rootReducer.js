import { combineReducers } from "redux";
import { movieReducer } from "./movieReducer";
import { ratingSelection } from "./ratingSelection";

export const rootReducer = combineReducers({
  movie: movieReducer,
  ratingSelection,
});
