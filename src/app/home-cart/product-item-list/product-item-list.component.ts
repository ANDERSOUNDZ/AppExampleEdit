import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { jsonProductItem } from 'src/app/model/jsonProduct';

@Component({
  selector: 'app-product-item-list',
  templateUrl: './product-item-list.component.html',
  styleUrls: ['./product-item-list.component.scss']
})
export class ProductItemListComponent implements OnInit {

  @Input() product: jsonProductItem;

  @Output() giveProduct = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  giveEvent(){
    this.giveProduct.emit(this.product);
  }


}
