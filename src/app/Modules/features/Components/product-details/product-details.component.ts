import {Component, OnInit} from '@angular/core';
import {all_review_product_1} from "../../../../../Data/reviews-user";
import {gounsPage1} from "../../../../../Data/Gouns/gouns";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../../State/Product/product.service";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../Models/AppState";
import {CartService} from "../../../../State/Cart/cart.service";
import {MatRadioChange} from "@angular/material/radio";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  productSize: any;
  review: any;
  relatedProducts: any;
  product: any;
  id: any;

  constructor(private router: Router,private cartService: CartService, private activateRoute : ActivatedRoute,
              private matSnackBar: MatSnackBar,
              private productService : ProductService, private store : Store<AppState>) {
  }
  ngOnInit(){
    this.review = all_review_product_1;
    this.relatedProducts = gounsPage1//actually it will give according to product type

    this.id = this.activateRoute.snapshot.paramMap.get("id");
    this.productService.findProductByIdServices(this.id);

    this.store.pipe(select((store) => store.product)).subscribe((product)=>{
      this.product = product.product;
      console.log("store data", product.product)
    })

  }
  addItemToCart() {
    if(localStorage.getItem('jwt')){
      if (this.product.size && this.productSize != undefined) {
        let data = {
          productId: Number(this.id),
          size: this.productSize.name,
          quantity: 1,
          price: this.product.discountedPrice
        }
        // console.log(this.productSize)
        this.cartService.addItemToCartService(data);
        this.cartService.getCartService();
        console.log(data)
        this.router.navigate(['cart']);
      } else {
        this.matSnackBar.open('select size first', 'Close', {
          duration: 2000, // Duration in milliseconds
          horizontalPosition: 'center', // Horizontal position: 'start', 'center', 'end', or 'left', 'right'
          verticalPosition: 'bottom', // Vertical position: 'top' or 'bottom'
        });

      }
    }else{
      this.matSnackBar.open('Please login first', 'Close', {
        duration: 2000, // Duration in milliseconds
        horizontalPosition: 'center', // Horizontal position: 'start', 'center', 'end', or 'left', 'right'
        verticalPosition: 'top', // Vertical position: 'top' or 'bottom'
      });
    }
  }

  changeSize(event: MatRadioChange) {
    this.productSize = event.value;
  }
}
