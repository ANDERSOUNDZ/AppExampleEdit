import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material';
import { HomeCartComponent } from '../home-cart/home-cart.component';
import { ProductCartComponent } from '../home-cart/product-cart/product-cart.component';



@NgModule({
  declarations: [HomeCartComponent, ProductCartComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MatToolbarModule 
  ]
})
export class MaterialModule { }
