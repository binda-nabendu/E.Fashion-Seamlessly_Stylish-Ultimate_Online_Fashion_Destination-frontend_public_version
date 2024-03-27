import {Injectable} from "@angular/core";
import {BASE_API_URL} from "../../Config/api";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {catchError, map, of} from "rxjs";
import {addItemToCartFailure, addItemToCartSuccess} from "../Cart/cart.action";
import {createPaymentFailure, createPaymentSuccess} from "./finence.action";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root"
})
export class FinanceService{
  API_BASE_URL = BASE_API_URL + '/api/user/order';
  constructor(private httpClient: HttpClient, private router: Router,
              private activeRoure: ActivatedRoute, private store: Store, private matSnackBar: MatSnackBar) {

  }
  private getHttpHeadersWithJWT() {
    return new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    });
  }
  precedePaymentService(orderId: any){
    const url = this.API_BASE_URL+"/"+orderId+"/done"
    const headers = this.getHttpHeadersWithJWT();
    return this.httpClient.put(url, orderId, {headers})
      .pipe(
        map((paymentResponse:any) => {
          this.matSnackBar.open('Order Place Successfully', 'Close', {
            duration: 2000, // Duration in milliseconds
            horizontalPosition: 'center', // Horizontal position: 'start', 'center', 'end', or 'left', 'right'
            verticalPosition: 'top', // Vertical position: 'top' or 'bottom'
          });
          if(paymentResponse){
            this.router.navigate(['/']);
          }
          return createPaymentSuccess({payload: paymentResponse});
        }),
        catchError((error: any)=>{
          this.matSnackBar.open('Order Place Failed', 'Close', {
            duration: 2000, // Duration in milliseconds
            horizontalPosition: 'center', // Horizontal position: 'start', 'center', 'end', or 'left', 'right'
            verticalPosition: 'top', // Vertical position: 'top' or 'bottom'
          });
          return of(createPaymentFailure(error.response && error.response.data.message
            ? error.response.data.message : error.message ))
        })
      )
      .subscribe((action)=>this.store.dispatch(action));
  }
}
