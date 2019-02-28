import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'src/app/model/jsonProduct';

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.scss']
})
export class CartItemListComponent implements OnInit {

  @Input() productItemAll: CartItem;

  @Output() outItem= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  evento2(){
    this.outItem.emit(this.productItemAll);
  }

}
