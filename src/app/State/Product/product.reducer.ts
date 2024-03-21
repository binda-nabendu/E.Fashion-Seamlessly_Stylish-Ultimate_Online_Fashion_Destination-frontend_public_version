import {createReducer, on} from "@ngrx/store";
import {
  findProductByFiltersFailure,
  findProductByFiltersSuccess,
  findProductByIdFailure,
  findProductByIdSuccess
} from "./product.action";
import {state} from "@angular/animations";
import {error} from "@angular/compiler-cli/src/transformers/util";

const initialState={
  products:[],
  content: null,
  loading: false,
  error: null,
  product: null
}

export const productReducer = createReducer(
  initialState,
  on(findProductByFiltersSuccess, (state,{payload})=>({
  ...state, products: payload, content: payload.content,
      error: null, product: null})
    ),
  on(findProductByFiltersFailure, (state, {error})=>({
    ...state, error: error,
    loading: false
    })
  ),
  on(findProductByIdSuccess, (state, {payload})=>({
    ...state,
    product: payload,
    loading: false,
  })),
  on(findProductByIdFailure, (state, {error})=>({
    ...state,
    error: error,
    loading: false
  }))
  )
