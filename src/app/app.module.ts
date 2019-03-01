import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { HomeCartComponent } from './home-cart/home-cart.component';
import { ProductCartComponent } from './home-cart/product-cart/product-cart.component';
import { ShopCartComponent } from './home-cart/shop-cart/shop-cart.component';
import { ProductItemListComponent } from './home-cart/product-item-list/product-item-list.component';
import { CartItemListComponent } from './home-cart/cart-item-list/cart-item-list.component';
import {FormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HomeCartComponent,
    ProductCartComponent,
    ShopCartComponent,
    ProductItemListComponent,
    CartItemListComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
