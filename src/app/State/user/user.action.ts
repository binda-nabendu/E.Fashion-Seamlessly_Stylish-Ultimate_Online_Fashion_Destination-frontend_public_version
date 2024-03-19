import {createAction, props} from "@ngrx/store";

export const userProfileAction = createAction('[User] Get User');
export const userProfileActionSuccess = createAction('[User] Get User Profile Success', props<{userProfile:any}>())
export const userProfileActionFailure = createAction('[User] Get User Ptogilr Failure', props<{error:any}>())
