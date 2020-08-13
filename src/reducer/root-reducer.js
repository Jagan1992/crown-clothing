import { combineReducers } from "redux";
import userReducer from "./user-reducer/user-reducer";
import cartReducer from "./cart-reducer/cart-reducer";
import { persistReducer } from "redux-persist"; //for maintaining the data in local storage using persist store.
import storage from "redux-persist/lib/storage"; //for maintaining the data in local storage using persist store.

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
