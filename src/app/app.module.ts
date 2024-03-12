import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopCarouselComponent } from './home/top-carousel/top-carousel.component';
import { HomeProductCardComponent } from './home/home-product-card/home-product-card.component';
import { ItemProductSliderComponent } from './home/item-product-slider/item-product-slider.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './navbar/content/content.component';
import {NgOptimizedImage} from "@angular/common";
import {MatButtonModule, MatIconButton} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import { FooterComponent } from './footer/footer.component';
import {ShareButtonsModule} from "ngx-sharebuttons/buttons";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopCarouselComponent,
    HomeProductCardComponent,
    ItemProductSliderComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ShareIconsModule,
    AppRoutingModule,
    NgOptimizedImage,
    MatIconButton,
    MatIconModule,
    MatButtonModule,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
    ShareButtonsModule,
    FontAwesomeModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
