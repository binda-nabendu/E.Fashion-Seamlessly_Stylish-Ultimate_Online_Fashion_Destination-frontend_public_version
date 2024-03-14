import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {NgOptimizedImage} from "@angular/common";
import {FeaturesModule} from "./Modules/features/features.module";
import {SharedModule} from "./Modules/shared/shared.module";
import {RouterOutlet} from "@angular/router";
import {AdminModule} from "./Modules/admin/admin.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,

        AdminModule,

        FeaturesModule,
        SharedModule,


        FontAwesomeModule,
        RouterOutlet,
    ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
