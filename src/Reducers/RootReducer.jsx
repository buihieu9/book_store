import cartReducer from "./Cart";
import listBookReducer from "./ListBook";
import { combineReducers } from "redux";
import user from "./user";
import loading from "./loading";

export default combineReducers({
  cart: cartReducer,
  listBook: listBookReducer,
  user: user,
  isLoading: loading,
});
