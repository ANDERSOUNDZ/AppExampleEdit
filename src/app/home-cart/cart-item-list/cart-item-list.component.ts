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

  deleteProduct(){
    const index = this.cartShopService.cartService.indexOf(this.productItemAll);
    this.cartShopService.cartService.splice(index,1);
  }

  increase(){
    this.productItemAll.amount++;
  }

  decrease(){
      this.productItemAll.amount--;
      if(this.productItemAll.amount == 0){
          this.deleteProduct();
      }
  }
}
