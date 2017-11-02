import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Still test recipe', 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Pepperoni_pizza.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
