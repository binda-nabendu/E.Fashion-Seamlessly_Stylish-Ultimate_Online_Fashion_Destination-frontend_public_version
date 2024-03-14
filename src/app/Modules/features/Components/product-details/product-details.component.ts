import { Component } from '@angular/core';
import {all_review_product_1} from "../../../../../Data/reviews-user";
import {gounsPage1} from "../../../../../Data/Gouns/gouns";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  ProductSize: any;
  review: any;
  relatedProducts: any;

  constructor(private router: Router) {
  }
  ngOnInit(){
    this.review = all_review_product_1;
    this.relatedProducts = gounsPage1//actually it will give according to product type
  }
  addItemToCart() {
    console.log(this.ProductSize);
    this.router.navigate(['cart']);
  }
}
