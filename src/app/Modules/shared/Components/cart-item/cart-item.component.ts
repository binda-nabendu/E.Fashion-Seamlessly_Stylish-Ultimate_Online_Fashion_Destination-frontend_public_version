import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input() isButtonNeed: any;

  changeTotalItem(number: number) {

  }

  removeItem() {

  }
}
