import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';
import { Ingredients } from '../ingredients';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Pizza', 'This is a very yammy Pizza',
     'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [new Ingredients('Corns', 200)]),

    new Recipe('Salad', 'This is Recipe is the combination of all the foods',
     'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [new Ingredients('Corns', 200)]),

    new Recipe('Burger', 'Extra Chese',
     'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [new Ingredients('Corns', 200)])
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelectedRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
