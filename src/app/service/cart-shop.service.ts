import { Injectable } from '@angular/core';
import { jsonProductItem, CartItem } from '../model/jsonProduct';

@Injectable({
  providedIn: 'root'
})

export class CartShopService {

  public cartService: CartItem [] = [];

  constructor() { }
}
