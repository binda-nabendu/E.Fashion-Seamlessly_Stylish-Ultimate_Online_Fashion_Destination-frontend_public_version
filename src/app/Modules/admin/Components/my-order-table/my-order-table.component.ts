import { Component } from '@angular/core';

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
  changeStatus(Order: any, status: any){

  }
}
