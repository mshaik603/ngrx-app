import { createReducer, on } from "@ngrx/store";
// import { addToCart } from "./cart.actions";
import { AppState } from "./app-state";
import { addToCart } from "./cart.action";

export const initialState: AppState = {
  cart: []
}

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state: AppState, {item}) => {
    debugger;
    return {...state, cart: [...state.cart, item]}
  })
)
