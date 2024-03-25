import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input() isButtonNeed: any;
  @Input() cartItem: any;
  ngOnInit(){
    console.log("cart item component", this.cartItem);
  }

  changeTotalItem(number: number) {

  }

  removeItem() {

  }
}
