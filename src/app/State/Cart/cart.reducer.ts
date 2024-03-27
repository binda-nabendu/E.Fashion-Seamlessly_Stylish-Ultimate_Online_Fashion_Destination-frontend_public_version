import {createReducer, on} from "@ngrx/store";
import {
  addItemToCartFailure,
  addItemToCartRequest,
  addItemToCartSuccess,
  getCartFailure,
  getCartRequest,
  getCartSuccess,
  removeCartItemFailure,
  removeCartItemRequest,
  removeCartItemSuccess, updateCartItemFailure,
  updateCartItemRequest, updateCartItemSuccess
} from "./cart.action";

export interface CartState {
  cartItems: any[];
  loading: boolean;
  error: any;
  cart: any
}
const initialState: CartState = {
  cartItems:[],
  loading: false,
  error: null,
  cart: null,
};
export const cartReducer = createReducer(
  initialState,
  on(addItemToCartRequest, getCartRequest, removeCartItemRequest, updateCartItemRequest, (state) => ({
    ...state, loading: true, error: null,
  })),
  on(addItemToCartSuccess, (state, action) => ({
    ...state, loading: false,
    cartItems: action.payload.cartItems,//exiting cart items + new cart items
  })),
  on(getCartSuccess, (state, action) => ({
    ...state, loading: false,
    cartItems: action.payload.cartItems,
    cart: action.payload,
  })),
  on(removeCartItemSuccess, (state, {payload}) => ({
    ...state, loading: false,
    // cartItems: state.cartItems.filter((item)=> item.id !== cartItemId)
    cartItems: payload
  })),
  on(updateCartItemSuccess, (state, action) => ({
    ...state, loading: false,
    cartItems: action.payload
  })),
  on (addItemToCartFailure, getCartFailure, removeCartItemFailure, updateCartItemFailure, (state, action) => ({
    ...state, loading: false, error: action.error,
  })),
)
