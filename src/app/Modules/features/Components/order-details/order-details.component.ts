import { Component } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent {
  orders: any;
  steps= [
    {id:0, title:"Placed", isComplete:true},
    {id:1, title:"Confirmed", isComplete:true},
    {id:2, title:"Shipped", isComplete:false},
    {id:3, title:"Delivered", isComplete:false}
  ];
  ngOnInit(){
    this.orders = [1,1,1,1];
  }

}
