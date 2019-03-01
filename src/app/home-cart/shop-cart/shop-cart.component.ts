import { Component, OnInit, Input } from '@angular/core';
import { CartShopService } from 'src/app/service/cart-shop.service';
import { jsonProductItem, CartItem } from 'src/app/model/jsonProduct';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss']
})
export class ShopCartComponent implements OnInit {

  

  itemTotal: CartItem [] = [

    {
      product: {
        id: "string",
        name: "string"
      },
      amount: 1
    }

  ]
  
  constructor(public cartShopService: CartShopService) { }

  ngOnInit() {
  }

  deleteProduct(item){
    this.itemTotal=item;
    const index = this.cartShopService.cartService.indexOf(item);
    this.cartShopService.cartService.splice(index,1);
  }

  increase(item){
     this.itemTotal=item;
     item.amount++;
  }

  decrease(item){
    this.itemTotal=item;
    item.amount--;
    if(item.amount == 0){
        this.deleteProduct(item);
    }
 }

  /*deleteProduct(item){
    this.olistItem = item;
    const index = this.cartShopService.cartService.indexOf(item);
    this.cartShopService.cartService.splice(index,1);
  }*/

}