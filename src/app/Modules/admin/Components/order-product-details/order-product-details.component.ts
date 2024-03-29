import {Component, Inject, Input} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {AppState} from "../../../../Models/AppState";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {OrderService} from "../../../../State/Order/order.service";

@Component({
  selector: 'app-order-product-details',
  templateUrl: './order-product-details.component.html',
  styleUrl: './order-product-details.component.css'
})
export class OrderProductDetailsComponent {
  // @Input() orderProductId:any;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private router : Router, private orderService: OrderService, private store : Store<AppState>) {
  }
  cart_item: any;

  totalPrice=0;
  discountPrice = 0;
  ngOnInit(){
    this.orderService.getProductListAssociateOfThatOrderId(this.data.orderProductId);
    this.store.pipe(select((store) => store.order)).subscribe((order)=>{
      this.cart_item = order.orders;
      for(let i of this.cart_item){
        this.totalPrice += i.price;
        this.discountPrice += i.discountedPrice;
      }
      // console.log("order product data", order.orders);
    })
  }
}
