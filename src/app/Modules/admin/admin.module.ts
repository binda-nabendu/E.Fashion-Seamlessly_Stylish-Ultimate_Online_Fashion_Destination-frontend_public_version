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


@NgModule({
  declarations: [

    AdminHomeComponent,
       DashboardComponent,
       AuthorProductsComponent,
       MyCustomersComponent,
       AddProductComponent,
       MyOrderTableComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule
    ]
})
export class AdminModule { }
