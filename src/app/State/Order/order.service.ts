import {BASE_API_URL} from "../../Config/api";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {catchError, map, of} from "rxjs";
import {
  createOrderFailure,
  createOrderSuccess, getAllOrderFailure, getAllOrderSuccess,
  getAllProductAssociateWithThatOrderCartFailed,
  getAllProductAssociateWithThatOrderCartSuccess,
  getOrderByIdFailure,
  getOrderByIdSuccess, getOrderHistoryFailure, getOrderHistoryRequest,
  getOrderHistorySuccess
} from "./order.action";
import {Injectable} from "@angular/core";
@Injectable({ //if I did not inject it won't work
  providedIn: "root",
})
export class OrderService{
  API_BASE_URL = BASE_API_URL + '/api/user/order';
  API_ADMIN_BASE_URL = BASE_API_URL + '/api/admin/orders';
  constructor(private httpClient: HttpClient, private router: Router,
              private activeRoure: ActivatedRoute, private store: Store) {

  }
  private getHttpHeadersWithJWT() {
    return new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    });
  }
  createOrder (reqData: any) {
    // console. log('create order', reqData);
    const url = this.API_BASE_URL +"/";
    return this.httpClient.post(url, reqData, { headers:this.getHttpHeadersWithJWT()})
    .pipe(
      map ((data: any) => {
      console. log('created order- ', data);
      if (data.id) {
        this.router.navigate([`/checkout/payment/${data.id}`], {
          queryParams: {step: '3', order_id: data.id},
        });
      }
      // console. log('created order -', data);
      return createOrderSuccess({order: data});
    }) ,
    catchError((error: any) => {
      console.log('catch error to create order:', error);
      return of(createOrderFailure(error.response && error.response.data.message
        ? error.response.data.message : error.message))
    })
    ).subscribe((action)=>this.store.dispatch(action));
  }
  getOrderByIdService(orderId: any){
    const headers = this.getHttpHeadersWithJWT(); //if this name is change it won't work
    return this.httpClient.get(`${this.API_BASE_URL}/${orderId}`,{headers})
      .pipe(
        map((data: any)=>{
          // console.log("get order by id: ",data)
          return getOrderByIdSuccess({order: data})
        }),
        catchError((error: any)=>{
          console.log("get order by id error: ",error)
          return of(getOrderByIdFailure(
            error.response && error.response.data.message ? error.response.data.message : error.message
          ));
        })
      ).subscribe((action)=>this.store.dispatch(action))
  }
  getProductListAssociateOfThatOrderId(orderProductId: any) {
    // console.log(orderProductId)
    const url = this.API_ADMIN_BASE_URL+"/"+orderProductId;
    const headers = this.getHttpHeadersWithJWT();
    return this.httpClient.get(url, {headers})
      .pipe(
        map((getData:any) => {
          // console.log("where is you:", getData.orderItems)
          return getAllProductAssociateWithThatOrderCartSuccess({payload: getData.orderItems});
        }),
        catchError((error: any)=>{
          return of(getAllProductAssociateWithThatOrderCartFailed(
            error.response && error.response.data.message
              ? error.response.data.message : error.message ))
        })
      )
      .subscribe((action)=>this.store.dispatch(action));
  }
  getOrderHistoryService(orderId: any){
    const headers = this.getHttpHeadersWithJWT(); //if this name is change it won't work

    this.store.dispatch(getOrderHistoryRequest());

    return this.httpClient.get(`${this.API_BASE_URL}/user`,{headers})
      .pipe(
        map((data: any)=>{
          return getOrderHistorySuccess({order: data})
        }),
        catchError((error: any)=>{
          return of(getOrderHistoryFailure(
            error.response && error.response.data.message ? error.response.data.message : error.message
          ));
        })
      ).subscribe((action)=>this.store.dispatch(action))

  }
getAllOrder(){
  const url = this.API_ADMIN_BASE_URL+"/";
  const headers = this.getHttpHeadersWithJWT();
  return this.httpClient.get(url, {headers})
    .pipe(
      map((orders:any) => {
        // console.log("where is you:", getData.orderItems)
        return getAllOrderSuccess({payload: orders});
      }),
      catchError((error: any)=>{
        return of(getAllOrderFailure(
          error.response && error.response.data.message
            ? error.response.data.message : error.message ))
      })
    )
    .subscribe((action)=>this.store.dispatch(action));
}
confirmOrder(orderId: number){

}
shipOrder(orderId: number){

}
deliveryOrder(orderId: number){

}
deleteOrder(orderId: string){

}
}
