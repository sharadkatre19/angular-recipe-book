import { Injectable } from '@angular/core';
import { Ingredients } from '../recipes/ingredients';

@Injectable({
  providedIn: 'root'
})

export class ShoppingListService {

  private items: Ingredients[] = [];

  constructor() { }

  getItems() {
    return this.items;
  }

  addItems(items: Ingredients[]) {
    Array.prototype.push.apply(this.items, items);
  }
}
