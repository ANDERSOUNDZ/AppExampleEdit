import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'src/app/model/jsonProduct';
import { CartShopService } from 'src/app/service/cart-shop.service';

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.scss']
})
export class CartItemListComponent implements OnInit {

  @Input() productItemAll: CartItem;

  @Output() outItem= new EventEmitter();

  constructor(public cartShopService: CartShopService) { }

  ngOnInit() {
  }

  deleteProduct(item){
    this.productItemAll = item;
    const index = this.cartShopService.cartService.indexOf(item);
    this.cartShopService.cartService.splice(index,1);
  }

}
