import {Component, Input} from '@angular/core';
import {CartService} from "../../../../State/Cart/cart.service";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input() isButtonNeed: any;
  @Input() cartItem: any;
  constructor(private cartService: CartService) {
  }

  changeTotalItem(presentQuantity: number) {
    let updateData = {
      productId: this.cartItem.product.id,
      size: this.cartItem.size,
      quantity: presentQuantity,
      color: this.cartItem.color? this.cartItem.color: ""
    }
    // console.log(updateData);
    this.cartService.updateCartItemService(updateData)

  }

  removeItem() {
    let deleteData = {
      productId: this.cartItem.product.id,
      size: this.cartItem.size,
      quantity: this.cartItem.quantity,
      color: this.cartItem.color? this.cartItem.color: ""
    }
    console.log("data to delete:", deleteData);
    this.cartService.removeCartItemService(deleteData);
  }
}
