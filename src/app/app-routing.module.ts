import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListGridComponent } from './product-list-grid/product-list-grid.component';
import { ProductListListComponent } from './product-list-list/product-list-list.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SubmitOrderComponent } from './submit-order/submit-order.component';

const routes: Routes = [
  { path : '' , component : ProductListGridComponent},
  { path : 'product-list-list' , component :ProductListListComponent},
  { path : 'view-details/:item' , component : ViewDetailsComponent},
  { path : 'cart-items' , component : CartItemsComponent },
  { path : 'login' , component : LogInComponent },
  { path : 'signup' , component : SignUpComponent },
  { path : 'submit-order' , component : SubmitOrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }