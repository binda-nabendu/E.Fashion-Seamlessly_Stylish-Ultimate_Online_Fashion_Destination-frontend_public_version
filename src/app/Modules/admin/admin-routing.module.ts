import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminHomeComponent} from "./Components/admin-home.component";
import {DashboardComponent} from "./Components/dashboard/dashboard.component";
import {AuthorProductsComponent} from "./Components/author-products/author-products.component";
import {MyCustomersComponent} from "./Components/my-customers/my-customers.component";
import {AddProductComponent} from "./Components/add-product/add-product.component";
import {MyOrderTableComponent} from "./Components/my-order-table/my-order-table.component";

const routes: Routes = [
  {path: "admin", component: AdminHomeComponent,
    children: [
      {path: "", component: DashboardComponent},
      {path: "orders", component: MyOrderTableComponent},
      {path: "products", component: AuthorProductsComponent},
      {path: "customers", component: MyCustomersComponent},
      {path: "products/crete", component: AddProductComponent}
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
