import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {CartService} from "../../../../State/Cart/cart.service";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../Models/AppState";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart_item: any;
  constructor(private router : Router, private cartService: CartService, private store : Store<AppState>) {
  }
  ngOnInit(){
    this.cartService.getCartService();
    this.store.pipe(select((store) => store.cart)).subscribe((cart)=>{
      this.cart_item = cart.cartItems;
      console.log("Cart data", cart.cartItems);
    })
  }
  goToCheckout(){
    this.router.navigate(['checkout'])
  }

}
