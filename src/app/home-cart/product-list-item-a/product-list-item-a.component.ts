import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { jsonProductItem } from 'src/app/model/jsonProduct';

@Component({
  selector: 'app-product-list-item-a',
  templateUrl: './product-list-item-a.component.html',
  styleUrls: ['./product-list-item-a.component.scss']
})
export class ProductListItemAComponent implements OnInit {

@Input() product: jsonProductItem;

@Output() giveProduct = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

giveEvent(){
  this.giveProduct.emit(this.product);
}

}
