import {createReducer, on} from "@ngrx/store";
import {createPaymentFailure, createPaymentRequest, createPaymentSuccess} from "./finence.action";

export interface OrderState{
  loading: boolean;
  error: string | null;
  paymentState: any | null;
}

const initialState: OrderState = {
  loading: false,
  error: null,
  paymentState: null,
}

export const financeReducer = createReducer(
  initialState,
  on(createPaymentRequest, (state) => ({
      ...state,
      loading: true,
      error: null
    })),
  on(createPaymentSuccess, (state, {payload})=>({
    ...state,
    loading: false,
    paymentState: payload
  })),
  on(createPaymentFailure,(state, {error})=>({
      ...state,
      loading:false,
      error:error
    }))
)
