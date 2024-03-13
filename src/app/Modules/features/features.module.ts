import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './Components/feature.component';
import {HomeComponent} from "./Components/home/home.component";
import {TopCarouselComponent} from "./Components/home/top-carousel/top-carousel.component";
import {HomeProductCardComponent} from "./Components/home/home-product-card/home-product-card.component";
import {ItemProductSliderComponent} from "./Components/home/item-product-slider/item-product-slider.component";
import {AppRoutingModule} from "../../app-routing.module";



@NgModule({
  declarations: [
    HomeComponent,
    TopCarouselComponent,
    HomeProductCardComponent,
    ItemProductSliderComponent,
    FeatureComponent,
  ],
  imports: [
    CommonModule,

    AppRoutingModule,
  ],
  exports:[
    FeatureComponent,
    HomeComponent
  ]

})
export class FeaturesModule { }
