import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {BASE_API_URL} from "../../Config/api";
import {catchError, map, of} from "rxjs";
import {
  addItemToCartFailure,
  addItemToCartSuccess,
  getCartFailure,
  getCartSuccess, removeCartItemFailure,
  removeCartItemSuccess, updateCartItemFailure, updateCartItemSuccess
} from "./cart.action";

@Injectable({
  providedIn: "root"
})

export class CartService{
  API_BASE_URL = BASE_API_URL + '/api/user/cart';
  constructor(private httpClient: HttpClient, private router: Router,
              private activeRoure: ActivatedRoute, private store: Store) {

  }
  private getHttpHeadersWithJWT() {
    return new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    });
  }
  getCartService() {
    const url = this.API_BASE_URL+"/"
    const headers = this.getHttpHeadersWithJWT();
    return this.httpClient.get(url, {headers})
      .pipe(
        map((data:any) => {
          return getCartSuccess({payload: data});
        }),
        catchError((error: any)=>{
          return of(getCartFailure(error.response && error.response.data.message
            ? error.response.data.message : error.message ))
        })
      )
      .subscribe((action)=>this.store.dispatch(action));
  }
  addItemToCartService(reqData: any){
    const url = this.API_BASE_URL+"/add"
    const headers = this.getHttpHeadersWithJWT();
    return this.httpClient.put(url, reqData, {headers})
      .pipe(
        map((data:any) => {
          return addItemToCartSuccess({payload: data});
        }),
        catchError((error: any)=>{
          return of(addItemToCartFailure(error.response && error.response.data.message
              ? error.response.data.message : error.message ))
        })
      )
      .subscribe((action)=>this.store.dispatch(action));
  }
  removeCartItemService () {
    const url = this.API_BASE_URL+"/api/cart/remove-item"
    const headers = this.getHttpHeadersWithJWT();
    return this.httpClient.delete(url, {headers})
      .pipe(
        map((id:any) => {
          return removeCartItemSuccess({cartItemId: id});
        }),
        catchError((error: any)=>{
          return of(removeCartItemFailure(
            error.response && error.response.data.message
              ? error.response.data.message : error.message ))
        })
      )
      .subscribe((action)=>this.store.dispatch(action));
  }

  updateCartItemService(data: any){
    const url = this.API_BASE_URL+"/api/cart/update-item"
    const headers = this.getHttpHeadersWithJWT();
    return this.httpClient.put(url,data, {headers})
      .pipe(
        map((gotData:any) => {
          return updateCartItemSuccess({payload: gotData});
        }),
        catchError((error: any)=>{
          return of(updateCartItemFailure(
            error.response && error.response.data.message
              ? error.response.data.message : error.message ))
        })
      )
      .subscribe((action)=>this.store.dispatch(action));
  }
}
