import { Component } from '@angular/core';

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
  size: string = '';

  constructor() {}

  addSize() {
    if (this.size.trim() !== '') {
      this.product.size.push({ name: this.size, quantity: 0 });
      this.size = '';
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
