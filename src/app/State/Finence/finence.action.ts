import {createAction, props} from "@ngrx/store";

export const createPaymentRequest = createAction('[Payment] Payment Create Request', props<{orderId: any}>())

export const createPaymentSuccess = createAction('[Payment] Payment Create Successfully', props<{payload: any}>())

export const createPaymentFailure = createAction('[Payment] Payment Create Failed', props<{error: any}>())

export const updatePaymentRequest = createAction('[Payment] Payment Update Request', props<{reqData: any}>())

export const updatePaymentSuccess = createAction('[Payment] Payment Update Successfully', props<{payload: any}>())

export const updatePaymentFailure = createAction('[Payment] Payment Update Failed', props<{error: any}>())
