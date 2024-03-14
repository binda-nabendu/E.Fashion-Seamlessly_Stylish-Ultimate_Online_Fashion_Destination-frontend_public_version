import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './Components/feature.component';
import {HomeComponent} from "./Components/home/home.component";
import {TopCarouselComponent} from "./Components/home/top-carousel/top-carousel.component";
import {HomeProductCardComponent} from "./Components/home/home-product-card/home-product-card.component";
import {ItemProductSliderComponent} from "./Components/home/item-product-slider/item-product-slider.component";
import {AppRoutingModule} from "../../app-routing.module";
import { ProductWithFilterComponent } from './Components/product-with-filter/product-with-filter.component';
import {MatButton} from "@angular/material/button";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";
import {MatCheckbox} from "@angular/material/checkbox";
import {SharedModule} from "../shared/shared.module";
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { CartComponent } from './Components/cart/cart.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { PaymentDoneComponent } from './Components/payment-done/payment-done.component';
import { OrderDetailsComponent } from './Components/order-details/order-details.component';
import { PlaceOrdersComponent } from './Components/place-orders/place-orders.component';
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserReviewComponent } from './Components/product-details/user-review/user-review.component';
import { AddressComponent } from './Components/checkout/address/address.component';



@NgModule({
  declarations: [
    HomeComponent,
    TopCarouselComponent,
    HomeProductCardComponent,
    ItemProductSliderComponent,
    FeatureComponent,
    ProductWithFilterComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
    PaymentComponent,
    PaymentDoneComponent,
    OrderDetailsComponent,
    PlaceOrdersComponent,
    UserReviewComponent,
    AddressComponent,
  ],
  imports: [
    CommonModule,

    AppRoutingModule,
    MatButton,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
    MatDivider,
    MatIcon,
    MatCheckbox,
    SharedModule,
    MatRadioGroup,
    MatRadioButton,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    FeatureComponent,
    HomeComponent,
    ProductWithFilterComponent
  ]

})
export class FeaturesModule { }
