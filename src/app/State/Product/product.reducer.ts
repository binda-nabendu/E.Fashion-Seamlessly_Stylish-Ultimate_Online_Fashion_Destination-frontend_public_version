import {createReducer, on} from "@ngrx/store";
import {
  findProductByFiltersFailure, findProductByFiltersRequest,
  findProductByFiltersSuccess,
  findProductByIdFailure, findProductByIdRequest,
  findProductByIdSuccess
} from "./product.action";
export interface productInterface {
  products: any[],
  content: any,
  loading: boolean,
  error: any,
  product: any
}
const initialState: productInterface={
  products:[],
  content: null,
  loading: false,
  error: null,
  product: null
}

export const productReducer = createReducer(
  initialState,
  on(findProductByFiltersRequest, findProductByIdRequest, (state)=>({
      ...state,
      loading: true,
      error: null
    })
  ),
  on(findProductByFiltersSuccess, (state,{payload})=>({
      ...state,
      products: payload,
      content: payload.content,
      loading: false,
      error: null,
      product: null
    })
    ),
  on(findProductByIdSuccess, (state, {payload})=>({
    ...state,
    product: payload,
    loading: false,
    error: null,
    products: []
  })),
  on(findProductByFiltersFailure, findProductByIdFailure, (state, {error})=>({
    ...state,
    loading: false,
    error: error
  }))
  )
