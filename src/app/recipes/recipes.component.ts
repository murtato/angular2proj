import { Component, OnInit } from '@angular/core';

import { RecipeListComponent } from './recipe-list'
import { RecipeDetailComponent } from './recipe-detail'

@Component({
  moduleId: module.id,
  selector: 'rb-recipes',
  templateUrl: 'recipes.component.html',
  directives [RecipeListComponent, RecipeDetailComponent]
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
