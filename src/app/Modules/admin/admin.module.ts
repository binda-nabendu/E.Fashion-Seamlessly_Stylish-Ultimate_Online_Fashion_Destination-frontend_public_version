import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './Components/admin-home.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AuthorProductsComponent } from './Components/author-products/author-products.component';
import { MyCustomersComponent } from './Components/my-customers/my-customers.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { MyOrderTableComponent } from './Components/my-order-table/my-order-table.component';
import {FormsModule} from "@angular/forms";
import {MatMenuItem, MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import { OrderProductDetailsComponent } from './Components/order-product-details/order-product-details.component';
import {MatDivider} from "@angular/material/divider";
import {SharedModule} from "../shared/shared.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [

    AdminHomeComponent,
       DashboardComponent,
       AuthorProductsComponent,
       MyCustomersComponent,
       AddProductComponent,
       MyOrderTableComponent,
       OrderProductDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatMenuModule,
    MatMenuItem,
    MatButtonModule,
    MatDivider,
    SharedModule,
    MatDialogModule,
    MatInputModule
  ],
  exports:[

  ]
})
export class AdminModule { }
