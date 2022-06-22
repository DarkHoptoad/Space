import { desReducer } from "./destinations/des__reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  desReducer,
});
