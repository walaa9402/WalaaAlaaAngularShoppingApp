import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListGridComponent } from './product-list-grid/product-list-grid.component';
import { ProductListListComponent } from './product-list-list/product-list-list.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SubmitOrderComponent } from './submit-order/submit-order.component';
import { ProductsService } from './products.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HeaderComponent, ProductListGridComponent, ProductListListComponent, ViewDetailsComponent, SingleProductComponent, CartItemsComponent, LogInComponent, SignUpComponent, SubmitOrderComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductsService]
})
export class AppModule { }
