import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FooterComponent} from "./Components/footer/footer.component";
import {ContentComponent} from "./Components/navbar/content/content.component";
import {NavbarComponent} from "./Components/navbar/navbar.component";
import {ShareIconsModule} from "ngx-sharebuttons/icons";
import {ShareButtonsModule} from "ngx-sharebuttons/buttons";
import {MatIconModule} from "@angular/material/icon";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {RouterLink} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    ContentComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,

    RouterLink,

    MatMenu,
    MatMenuItem,
    MatIconModule,
    MatMenuTrigger,
    MatButtonModule,

    NgOptimizedImage,

    ShareIconsModule,
    ShareButtonsModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
