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

  totalPrice=0;
  discountPrice = 0;
  constructor(private router : Router, private cartService: CartService, private store : Store<AppState>) {
  }
  ngOnInit(){
    this.cartService.getCartService();
    this.store.pipe(select((store) => store.cart)).subscribe((cart)=>{
      this.cart_item = cart.cartItems;
      for(let i of this.cart_item){
        this.totalPrice += i.price;
        this.discountPrice += i.discountedPrice;
      }
      console.log("Cart data", this.cart_item);
    })
  }
  goToCheckout(){
    this.router.navigate(['checkout'])
  }

}
