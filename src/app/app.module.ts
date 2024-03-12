import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopCarouselComponent } from './home/top-carousel/top-carousel.component';
import { HomeProductCardComponent } from './home/home-product-card/home-product-card.component';
import { ItemProductSliderComponent } from './home/item-product-slider/item-product-slider.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './navbar/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopCarouselComponent,
    HomeProductCardComponent,
    ItemProductSliderComponent,
    NavbarComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
