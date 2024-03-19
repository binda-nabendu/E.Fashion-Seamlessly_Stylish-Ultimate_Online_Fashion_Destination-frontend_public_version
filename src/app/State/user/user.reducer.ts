import {createReducer, on} from "@ngrx/store";
import {userProfileAction, userProfileActionFailure, userProfileActionSuccess} from "./user.action";

const initialState = {
  userProfile: null,
  loading: false,
  error: null
}
export const userReducer = createReducer(
  initialState,

  on(userProfileAction, (state) => ({...state, loading: true, error: null})),
  on(userProfileActionSuccess, (state,{userProfile})=>({...state, loading: false, error:null, userProfile})),
  on(userProfileActionFailure, (state,{error})=>({...state, loading:true, error:error})),

)
