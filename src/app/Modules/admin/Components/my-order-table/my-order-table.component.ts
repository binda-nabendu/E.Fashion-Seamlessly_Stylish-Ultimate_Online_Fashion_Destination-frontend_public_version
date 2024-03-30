import {Component, Input, signal} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../Models/AppState";
import {OrderService} from "../../../../State/Order/order.service";
import {AuthComponent} from "../../../auth/auth.component";
import {MatDialog} from "@angular/material/dialog";
import {PaymentComponent} from "../../../features/Components/payment/payment.component";
import {CartComponent} from "../../../features/Components/cart/cart.component";
import {CartItemComponent} from "../../../shared/Components/cart-item/cart-item.component";
import {OrderProductDetailsComponent} from "../order-product-details/order-product-details.component";
import {CartService} from "../../../../State/Cart/cart.service";

@Component({
  selector: 'app-my-order-table',
  templateUrl: './my-order-table.component.html',
  styleUrl: './my-order-table.component.css'
})
export class MyOrderTableComponent {
  orders = [
    {
      "id": 1,
      "orderId": null,
      "user": {
        "id": 1,
        "firstName": "a",
        "lastName": "b",
        "password": "$2a$10$RhhlhS39JxQG6JqXfDd93ubqllKwSaqkBZnz3TRX2iqcVusNJiuDa",
        "email": "a@b.com",
        "role": null,
        "phone": null,
        "address": [
          {
            "id": 1,
            "firstName": "Nabendu Bikash",
            "lastName": "Binda",
            "mobile": "01611809276",
            "email": "01976738184",
            "address": "phulpur, mymensingh",
            "postCode": ""
          }
        ],
        "paymentInfos": [],
        "createAt": null,
        "createdAt": null
      },
      "orderDate": "2024-03-27T12:52:12.316645",
      "deliveryDate": null,
      "shippingAddress": {
        "id": 1,
        "firstName": "Nabendu Bikash",
        "lastName": "Binda",
        "mobile": "01611809276",
        "email": "01976738184",
        "address": "phulpur, mymensingh",
        "postCode": ""
      },
      "paymentDetails": {
        "paymentMethod": null,
        "status": "PENDING",
        "paymentId": null,
        "razorpayPaymentLinkId": null,
        "razorpayPaymentLinkReferenceId": null,
        "razorpayPaymentLinkStatus": null,
        "razorpayPaymentId": null
      },
      "totalPrice": 3898.0,
      "totalDiscountedPrice": 448,
      "discount": 3450,
      "orderStatus": "PENDING",
      "totalItem": 2,
      "createAt": "2024-03-27T12:52:12.316678"
    },
    {
      "id": 2,
      "orderId": null,
      "user": {
        "id": 1,
        "firstName": "a",
        "lastName": "b",
        "password": "$2a$10$RhhlhS39JxQG6JqXfDd93ubqllKwSaqkBZnz3TRX2iqcVusNJiuDa",
        "email": "a@b.com",
        "role": null,
        "phone": null,
        "address": [
          {
            "id": 1,
            "firstName": "Nabendu Bikash",
            "lastName": "Binda",
            "mobile": "01611809276",
            "email": "01976738184",
            "address": "phulpur, mymensingh",
            "postCode": ""
          }
        ],
        "paymentInfos": [],
        "createAt": null,
        "createdAt": null
      },
      "orderDate": "2024-03-27T12:52:25.548884",
      "deliveryDate": null,
      "shippingAddress": {
        "id": 1,
        "firstName": "Nabendu Bikash",
        "lastName": "Binda",
        "mobile": "01611809276",
        "email": "01976738184",
        "address": "phulpur, mymensingh",
        "postCode": ""
      },
      "paymentDetails": {
        "paymentMethod": null,
        "status": "PENDING",
        "paymentId": null,
        "razorpayPaymentLinkId": null,
        "razorpayPaymentLinkReferenceId": null,
        "razorpayPaymentLinkStatus": null,
        "razorpayPaymentId": null
      },
      "totalPrice": 3898.0,
      "totalDiscountedPrice": 448,
      "discount": 3450,
      "orderStatus": "PENDING",
      "totalItem": 2,
      "createAt": "2024-03-27T12:52:25.548908"
    }
  ]
  products: any;
  constructor(private matDialog: MatDialog, private orderService: OrderService, private store: Store<AppState>) {
  }
  ngOnInit(){
    this.orderService.getAllOrder();
    this.store.pipe(select((appState)=>appState.order)).subscribe( (order)=>
      this.orders = order.orderDetails,
    )

  }
  openItemList(id: number){
    if(id){
      // console.log(id.toString())
    this.matDialog.open(OrderProductDetailsComponent, {
      height:'80%',
      disableClose: false,
      data: {
        orderProductId: id
      }
    });
    }
  };
  changeStatus(Order: any, status: any){

  }
}
