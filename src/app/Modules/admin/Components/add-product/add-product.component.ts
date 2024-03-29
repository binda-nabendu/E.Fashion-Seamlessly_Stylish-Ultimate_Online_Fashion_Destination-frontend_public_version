import { Component } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  product: any = {
    imageUrl: '',
    brand: '',
    title: '',
    color: '',
    discountPrice: 0,
    actualPrice: 0,
    discountPercent: 0,
    size: [],
    quantity: 0,
    topLabelCategory: '',
    secondLabelCategory: '',
    thirdLabelCategory: '',
    description: ''
  };
  size: string = '';

  constructor(private matSnackBar: MatSnackBar) {}

  addSize() {
    if (this.size.trim() !== '' && this.product.quantity >= 0) {
      this.product.size.push({ name: this.size, quantity: this.product.quantity });
      this.size = '';
      this.product.quantity = 0
    }else{
      this.matSnackBar.open('sizes or Quantity not valid', 'Close', {
        duration: 2000, // Duration in milliseconds
        horizontalPosition: 'center', // Horizontal position: 'start', 'center', 'end', or 'left', 'right'
        verticalPosition: 'top', // Vertical position: 'top' or 'bottom'
      });
    }
  }

  uploadProduct() {
    // Call the product service to upload the product data to the server
    console.log(this.product)
  }

  resetProduct() {
    // Reset product fields to their initial values
    this.product = {
      imageUrl: '',
      brand: '',
      title: '',
      color: '',
      description: '',
      discountPrice: 0,
      actualPrice: 0,
      discountPercent: 0,
      size: [],
      quantity: 0,
      topLabelCategory: '',
      secondLabelCategory: '',
      thirdLabelCategory: ''
    };
  }
}
