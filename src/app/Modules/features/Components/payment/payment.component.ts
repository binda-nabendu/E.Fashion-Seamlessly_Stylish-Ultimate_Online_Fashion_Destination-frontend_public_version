import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {OrderService} from "../../../../State/Order/order.service";
import {AppState} from "../../../../Models/AppState";
import {FinanceService} from "../../../../State/Finence/finence.service";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  products: any;
  constructor(private activeRoute: ActivatedRoute, private store: Store<AppState>,
              private orderService: OrderService, private financeService: FinanceService) {
  }
  ngOnInit(){
    let id = this.activeRoute.snapshot.paramMap.get("id");
    // console.log("id: "+id);
    if(id){
      this.orderService.getOrderByIdService(id);
    }
    this.store.pipe(select((store: AppState)=>store.order)).subscribe((order)=>{
      this.products = order.order;
      // console.log("from payment section:",order)
      console.log("from payment section:",this.products)
    })
  }

  proceedToCheckout() {
    this.financeService.precedePaymentService(this.products.id);
  }
}
