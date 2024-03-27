import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {FeaturesModule} from "./Modules/features/features.module";
import {SharedModule} from "./Modules/shared/shared.module";
import {RouterOutlet} from "@angular/router";
import {AdminModule} from "./Modules/admin/admin.module";
import {StoreModule} from "@ngrx/store";
import {AuthModule} from "./Modules/auth/auth.module";
import {authReducer} from "./State/Auth/auth.reducer";
import {userReducer} from "./State/User/user.reducer";
import {HttpClientModule} from "@angular/common/http";
import {productReducer} from "./State/Product/product.reducer";
import {cartReducer} from "./State/Cart/cart.reducer";
import {orderReducer} from "./State/Order/order.reducer";
import {financeReducer} from "./State/Finence/finence.reducer";

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,

        AdminModule,
        FeaturesModule,
        SharedModule,
        AuthModule,


        FontAwesomeModule,
        RouterOutlet,

        HttpClientModule,

        StoreModule.forRoot({
          user: userReducer,
          auth:authReducer,
          product: productReducer,
          cart: cartReducer,
          order: orderReducer,
          payment: financeReducer
        }, {}),
    ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
