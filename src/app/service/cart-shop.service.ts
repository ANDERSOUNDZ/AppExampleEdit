import { Injectable } from '@angular/core';
import { jsonProductItem } from '../model/jsonProduct';

@Injectable({
  providedIn: 'root'
})

export class CartShopService {

  public cartService: jsonProductItem [] = [];

  constructor() { }
}
