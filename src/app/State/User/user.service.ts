import {Injectable} from "@angular/core";
import {BASE_API_URL} from "../../Config/api";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Store} from "@ngrx/store";
import {catchError, map, of} from "rxjs";
import {userProfileActionFailure, userProfileActionLogout, userProfileActionSuccess} from "./user.action";

@Injectable({
  providedIn: "root",
})
export class UserService {
    private apuUrl = BASE_API_URL + "/api/user";
  authorizationJwtHeaders:any;
  constructor(private http: HttpClient, private store: Store) {
    this.authorizationJwtHeaders = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem("jwt")}`)
    }
    getUserProfileService(){
      this.authorizationJwtHeaders = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem("jwt")}`)
      return this.http.get(this.apuUrl + "/profile", {headers: this.authorizationJwtHeaders}).pipe(
        map((user:any)=>{
          console.log('login user', user);
          return userProfileActionSuccess({userProfile:user})
        }),
        catchError((error)=>{
          return of(
            userProfileActionFailure(
              error.response && error.response.data.message ? error.response.data.message : error.message
            )
          )
        })
      ).subscribe((action)=> this.store.dispatch(action));
    }
  logout(s: string) {
    localStorage.removeItem("jwt");
    this.store.dispatch(userProfileActionLogout());

  }

}
