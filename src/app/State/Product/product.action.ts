import {createAction, props} from "@ngrx/store";

export const findProductByFiltersRequest = createAction(
  '[Product] find product by filter Request'
)

export const findProductByFiltersSuccess = createAction(
  '[Product] find product by filter Success', props<{payload: any}>()
)
export const findProductByFiltersFailure = createAction(
  '[Product] find product by filter failure',  props<{error:any}>()
)

export const findProductByIdRequest = createAction(
  '[Product] find product by Id Request'
)

export const findProductByIdSuccess = createAction(
  '[Product] find product by Id Success', props<{payload: any}>()
)
export const findProductByIdFailure = createAction(
  '[Product] find product by Id Failure',  props<{error:any}>()
)
