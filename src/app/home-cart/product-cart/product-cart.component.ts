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
      name: " Celular"
    },
    {
      id: "02",
      name: "Plasma"
    },
    {
      id: "03",
      name: "Lavadora"
    },
    {
      id: "04",
      name: "Laptop"
    }


  ];

  constructor(public cartShopServices: CartShopService) { }

  ngOnInit() {
  }

  addItem(item:jsonProductItem){
    const cartItem= new CartItem();
    cartItem.product=item;
    cartItem.amount=1; 
    this.cartShopServices.cartService.push(cartItem);
  }

  /*addItem(item){
    this.cartShopServices.cartService.push(item);
  }*/

}
