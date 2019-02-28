import { Component, OnInit } from '@angular/core';
import { CartShopService } from 'src/app/service/cart-shop.service';
import { jsonProductItem, CartItem } from 'src/app/model/jsonProduct';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss']
})
export class ShopCartComponent implements OnInit {

  olistItem: jsonProductItem;
  
  constructor(public cartShopService: CartShopService) { }

  

  ngOnInit() {
  }

  deleteProduct(item){
    this.olistItem = item;
    const index = this.cartShopService.cartService.indexOf(item);
    this.cartShopService.cartService.splice(index,1);
  }


}
