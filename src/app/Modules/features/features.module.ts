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



@NgModule({
  declarations: [
    HomeComponent,
    TopCarouselComponent,
    HomeProductCardComponent,
    ItemProductSliderComponent,
    FeatureComponent,
    ProductWithFilterComponent,
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
  ],
  exports:[
    FeatureComponent,
    HomeComponent,
    ProductWithFilterComponent
  ]

})
export class FeaturesModule { }
