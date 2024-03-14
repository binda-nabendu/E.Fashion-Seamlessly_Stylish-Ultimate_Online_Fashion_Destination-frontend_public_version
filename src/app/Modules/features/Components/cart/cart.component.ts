import {Component, signal} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart=[1,1,1];
  constructor(private router : Router) {
  }
  goToCheckout(){
    this.router.navigate(['checkout'])
  }

}
