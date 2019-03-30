import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { Ingredients } from './ingredients';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Pizza', 'This is a very yammy Pizza',
     'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [new Ingredients('Corns', 200)]),

    new Recipe('Burger', 'Extra Chese',
     'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [new Ingredients('Corns', 200)])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }
}
