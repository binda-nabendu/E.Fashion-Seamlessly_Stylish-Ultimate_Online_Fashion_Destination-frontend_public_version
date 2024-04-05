import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Modules/features/Components/home/home.component";
import {
  ProductWithFilterComponent
} from "./Modules/features/Components/product-with-filter/product-with-filter.component";
import {ProductDetailsComponent} from "./Modules/features/Components/product-details/product-details.component";
import {CartComponent} from "./Modules/features/Components/cart/cart.component";
import {CheckoutComponent} from "./Modules/features/Components/checkout/checkout.component";
import {PaymentComponent} from "./Modules/features/Components/payment/payment.component";
import {PaymentDoneComponent} from "./Modules/features/Components/payment-done/payment-done.component";
import {PlaceOrdersComponent} from "./Modules/features/Components/place-orders/place-orders.component";
import {OrderDetailsComponent} from "./Modules/features/Components/order-details/order-details.component";
import {AdminRoutingModule} from "./Modules/admin/admin-routing.module";

const routes: Routes = [
  { path: "admin", loadChildren:()=>import("./Modules/admin/admin-routing.module").then(m => AdminRoutingModule)},
  {path:"", component:HomeComponent},
  // {path:"product", component: ProductWithFilterComponent},
  {path: 'checkout/payment/:id', component: PaymentComponent},
  {path:":label1/:label2/:label3", component: ProductWithFilterComponent},
  {path: 'cart', component: CartComponent},
  {path: 'product-details/:id', component :ProductDetailsComponent},
  {path: 'checkout', component: CheckoutComponent},
  // { path: 'order-summery', component: ProductsComponent },
  {path: 'payment-success', component: PaymentDoneComponent},
  { path: 'account/orders', component: PlaceOrdersComponent },
  { path: 'order/:orderId', component: OrderDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
