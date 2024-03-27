import { Component } from '@angular/core';
import {AppState} from "../../../../Models/AppState";
import {select, Store} from "@ngrx/store";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  address : any;
  constructor(private store : Store<AppState>) {
  }
  ngOnInit(){
    this.store.pipe(select((store) => store.user)).subscribe((user)=>{
      this.address = user.userProfile.address;
      console.log("Cart data :", user.userProfile.address);
    })
  }
}
