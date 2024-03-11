import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopCarouselComponent } from './home/top-carousel/top-carousel.component';
import { LandingPageCartComponent } from './home/landing-page-cart/landing-page-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopCarouselComponent,
    LandingPageCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
