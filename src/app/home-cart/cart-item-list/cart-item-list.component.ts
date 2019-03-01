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

  @Output() outItem2= new EventEmitter();

  @Output() outItem3= new EventEmitter();
  

  constructor(public cartShopService: CartShopService) { }

  ngOnInit() {
  }

  evento(){
    this.outItem.emit(this.productItemAll); 
  }

  evento1(){
    this.outItem2.emit(this.productItemAll); 
  }
  
  evento2(){
    this.outItem3.emit(this.productItemAll); 
  }

  /*
  deleteProduct(){
    const index = this.cartShopService.cartService.indexOf(this.productItemAll);
    this.cartShopService.cartService.splice(index,1);
  }*/

  /*
  increase(){
    this.productItemAll.amount++;
  }

  decrease(){
      this.productItemAll.amount--;
      if(this.productItemAll.amount == 0){
          this.deleteProduct();
      }
  }
  */

}
