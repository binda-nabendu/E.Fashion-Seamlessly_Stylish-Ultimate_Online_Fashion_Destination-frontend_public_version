import {Injectable} from "@angular/core";
import {BASE_API_URL} from "../../Config/api";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Store} from "@ngrx/store";
import {ActivatedRoute, Route} from "@angular/router";
import {catchError, map, of} from "rxjs";
import {
  addProductFailure,
  addProductSuccess,
  findProductByFiltersFailure,
  findProductByFiltersSuccess,
  findProductByIdFailure,
  findProductByIdSuccess
} from "./product.action";

@Injectable({
  providedIn: "root",
})

export class ProductService{
  API_BASE_URL = BASE_API_URL + "/api/products";

  API_ADMIN_BASE_URL = BASE_API_URL + "/api/admin/products";

  constructor(private store: Store, private httpClient: HttpClient,
              private activeRoute: ActivatedRoute) {

  }
  private getHeaders(): HttpHeaders{
    const token = localStorage.getItem("jwt");
    return new HttpHeaders().set("Authorization", `Bearer ${token}`);
  }

  findProductByFilterService(requestPerm: any){
    const{
      category,
      colors,
      sizes,
      minPrice,
      maxPrice,
      minDiscount,
      sort,
      stock,
      pageNumber,
      pageSize
    } = requestPerm;
    const params = new HttpParams()
      .set('category', category)
      .set('colors', colors)
      .set('sizes', sizes)
      .set('minPrice', minPrice)
      .set('maxPrice', maxPrice)
      .set('minDiscount', minDiscount)
      .set('sort', sort)
      .set('stock', stock)
      .set('pageNumber', pageNumber)
      .set('pageSize', pageSize);

    // const headers = this.getHeaders(); //if this name is change it won't work
    return this.httpClient.get(`${this.API_BASE_URL}/`,{params})
      .pipe(
        map((data: any)=>{
          // console.log(data)
          return findProductByFiltersSuccess({payload: data})
        }),
        catchError((error: any)=>{
          return of(findProductByFiltersFailure(
            error.response && error.response.data.message ? error.response.data.message : error.message
          ))
        })
      ).subscribe((action)=>this.store.dispatch(action))
  }

  findProductByIdServices(productId: any){
   // console.log("Product ID: "+ productId);
    console.log(this.API_BASE_URL + "/id/" + productId);
    return this.httpClient.get(this.API_BASE_URL + "/id/" + productId)
      .pipe(
        map((item: any)=>{
          console.log(item)
          return findProductByIdSuccess({payload: item})
        }),
        catchError((error: any)=>{
          // console.log(error)
          return of(findProductByIdFailure(
            error.response && error.response.data.message ? error.response.data.message : error.message
          ));
        })
      ).subscribe((action)=>this.store.dispatch(action))
  }
  addProductService(product: any){
    // console.log("Product ID: "+ productId);
    const headers = this.getHeaders();
    return this.httpClient.post(this.API_BASE_URL + "/add", product, {headers: headers})
      .pipe(
        map((savedProduct: any)=>{
          // console.log(item)
          return addProductSuccess({product: savedProduct})
        }),
        catchError((error: any)=>{
          // console.log(error)
          return of(addProductFailure(
            error.response && error.response.data.message ? error.response.data.message : error.message
          ));
        })
      ).subscribe((action)=>this.store.dispatch(action))
  }
}
