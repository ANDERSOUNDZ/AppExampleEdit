import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { ProductListItemAComponent } from './home-cart/product-list-item-a/product-list-item-a.component';
import { ProductListItemBComponent } from './home-cart/product-list-item-b/product-list-item-b.component';
import { ShopCartComponent } from './home-cart/shop-cart/shop-cart.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListItemAComponent,
    ProductListItemBComponent,
    ShopCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
