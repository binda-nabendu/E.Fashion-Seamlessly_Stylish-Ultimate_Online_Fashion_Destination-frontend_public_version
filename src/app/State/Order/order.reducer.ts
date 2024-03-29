import {createReducer, on} from "@ngrx/store";
import {
  confirmedOrderFailure,
  confirmedOrderRequest,
  confirmedOrderSuccess,
  createOrderFailure,
  createOrderRequest,
  createOrderSuccess,
  deleteOrderFailure,
  deleteOrderRequest,
  deleteOrderSuccess,
  deliveryOrderFailure,
  deliveryOrderRequest,
  deliveryOrderSuccess,
  getAllOrderFailure,
  getAllOrderRequest,
  getAllOrderSuccess, getAllProductAssociateWithThatOrderCartFailed, getAllProductAssociateWithThatOrderCartRequest,
  getAllProductAssociateWithThatOrderCartSuccess,
  getOrderByIdFailure,
  getOrderByIdRequest,
  getOrderByIdSuccess,
  getOrderHistoryFailure,
  getOrderHistoryRequest,
  getOrderHistorySuccess,
  placeOrderFailure,
  placeOrderRequest,
  placeOrderSuccess,
  shipOrderFailure,
  shipOrderRequest,
  shipOrderSuccess
} from "./order.action";

export interface OrderState{
  loading: boolean;
  error: string | null;
  order: any | null;
  orders: any[];
}

const initialState: OrderState = {
  loading: false,
  error: null,
  order: null,
  orders: []
}

export const orderReducer = createReducer(
  initialState,
  on(createOrderRequest, getOrderByIdRequest, getOrderHistoryRequest,
    getAllProductAssociateWithThatOrderCartRequest,
    getAllOrderRequest,confirmedOrderRequest, placeOrderRequest,
    shipOrderRequest,deliveryOrderRequest, deleteOrderRequest, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(createOrderSuccess, (state, {order})=>({
    ...state,
    loading: false,
    order: order
  })),
  on(getOrderByIdSuccess, (state, {order})=>({
    ...state,
    loading: false,
    order: order
  })),
  on(getOrderHistorySuccess, (state, {order})=>({
    ...state,
    loading: false,
    order: order
  })),
  on(getAllOrderSuccess, (state, {payload})=>({
    ...state,
    loading: false,
    orders: payload
  })),
  on(getAllProductAssociateWithThatOrderCartSuccess, (state, action) => ({
    ...state, loading: false,
    orders: action.payload,
  })),
  on(confirmedOrderSuccess,placeOrderSuccess, shipOrderSuccess, deliveryOrderSuccess, (state, {payload})=>({
    ...state,
    loading: false,
    orders: state.orders.map((order) => order.id === payload.id ? payload : order)
  })),
  on(deleteOrderSuccess, (state, {payload})=>({
    ...state,
    loading: false,
    orders: state.orders.filter((order) => order.id !== payload)
  })),
  on(createOrderFailure, getOrderByIdFailure, getOrderHistoryFailure,
    getAllOrderFailure,confirmedOrderFailure, placeOrderFailure,
    getAllProductAssociateWithThatOrderCartFailed,
    shipOrderFailure, deliveryOrderFailure, deleteOrderFailure,(state, {error})=>({
    ...state,
    loading:false,
    error:error
  }))
)
