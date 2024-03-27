import {createAction, props} from "@ngrx/store";

export const addItemToCartRequest = createAction(
  '[Cart] Add item to cart request', props<{reqData: any}>()
);

export const addItemToCartSuccess = createAction(
  '[Cart] Add item to cart success', props<{payload: any}>()
);

export const addItemToCartFailure = createAction(
  '[Cart] Add item to cart failure', props<{error: any}>()
);

export const getCartRequest = createAction(
  '[Cart] Get cart request',
)
export const getCartSuccess = createAction(
  '[Cart] Get cart success', props<{payload: any}>()
)
export const getCartFailure = createAction(
  '[Cart] Get cart failure', props<{error: any}>()
)

export const removeCartItemRequest = createAction(
  '[Cart] Remove Cart Item Request',
  props<{reqData: any}>()
)

export const removeCartItemSuccess = createAction(
  '[Cart] Remove Cart Item Success',
  props<{payload: any}>()
)

export const removeCartItemFailure = createAction(
  '[Cart] Remove Cart Item Failure',
  props<{error: any}>()
)

export const updateCartItemRequest = createAction(
  '[Cart] Update Cart Item Request',
  props<{reqData: any}>()
)


export const updateCartItemSuccess = createAction(
  '[Cart] Update Cart Item Success',
  props<{payload: any}>()
)

export const updateCartItemFailure = createAction(
  '[Cart] Update Cart Item Failure',
  props<{error: any}>()
)
