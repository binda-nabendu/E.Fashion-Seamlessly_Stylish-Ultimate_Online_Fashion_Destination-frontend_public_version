import {Injectable} from "@angular/core";
import {BASE_API_URL} from "../../Config/api";
import {HttpClient} from "@angular/common/http";
import {Store} from "@ngrx/store";
import {catchError, map, of} from "rxjs";
import {loginFailure, loginSuccess, registerFailure, registerSuccess} from "./auth.action";

@Injectable({
  providedIn: "root",
})
export class AuthService{
    private apuUrl = BASE_API_URL + "/auth";
    constructor(private http: HttpClient, private store: Store) {
    }
    loginService(credentials : any){
      return this.http.post(this.apuUrl + "/login", credentials).pipe(
        map((user:any)=>{
          console.log('login user', user);
          if(user.jwt){
            localStorage.setItem("jwt", user.jwt);
          }
          return loginSuccess({user});
        }),
        catchError((error)=>{
          return of(
            loginFailure(
              error.response && error.response.data.message ? error.response.data.message : error.message
            )
          )
        })
      ).subscribe((action)=> this.store.dispatch(action));
    }

  register(userForm : any){
    return this.http.post(this.apuUrl + "/signup", userForm).pipe(
      map((user:any)=>{
        console.log('Register user done', user);
        if(user.jwt){
          localStorage.setItem("jwt", user.jwt);
        }
        return registerSuccess({user});
      }),
      catchError((error)=>{
        return of(
          registerFailure(
            error.response && error.response.data.message ? error.response.data.message : error.message
          )
        )
      })
    ).subscribe((action)=> this.store.dispatch(action));
  }
}
