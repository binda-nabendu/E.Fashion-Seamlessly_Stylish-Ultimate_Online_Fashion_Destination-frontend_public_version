import { Component } from '@angular/core';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-place-orders',
  templateUrl: './place-orders.component.html',
  styleUrl: './place-orders.component.css'
})
export class PlaceOrdersComponent {
  constructor(private router: Router) {
  }
  orders= [[1,1],[1,1,1]];
  orderType=[
    {value:"on_the_way", label: "On The Way"},
    {value:"delivered", label: "Delivered"},
    {value:"cancelled", label: "Cancelled"},
    {value:"returned", label: "Returned"},
  ];
  goToOrderStatusPage(id:string){
    this.router.navigate(['order/${id}']);
  }

}
