import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  recipe = new Recipe('DUmmy', 'Dummy', 'https://openclipart.org/download/216413/coniglio_rabbit_small.svg');

  constructor() { }

  ngOnInit() {
  }

}
