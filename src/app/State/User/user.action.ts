import {createAction, props} from "@ngrx/store";

export const userProfileAction = createAction('[User] Get User');
export const userProfileActionSuccess = createAction('[User] Get User Profile Success', props<{userProfile:any}>())
export const userProfileActionFailure = createAction('[User] Get User Profile Failure', props<{error:any}>())
export const userProfileActionLogout = createAction('[User] Logout');
