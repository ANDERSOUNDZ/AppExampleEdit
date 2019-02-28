import { Component, OnInit } from '@angular/core';
import { jsonProductItem, CartItem } from 'src/app/model/jsonProduct';
import { CartShopService } from 'src/app/service/cart-shop.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {
  
  listItem: jsonProductItem [] = [

    {
      id: "01",
      name: " Anderson"
    }

  ];

  listItem2: CartItem [] = [

    {
      product:
      {
        id: "**",
        name: " Anderson"
      },
      amount: 1
    }

  ];

  constructor(public cartShopServices: CartShopService) { }

  ngOnInit() {
  }

  addItem(item){
    this.cartShopServices.cartService.push(item);
  }

  /*addItem(item){
    this.cartShopServices.cartService.push(item);
  }*/

}
