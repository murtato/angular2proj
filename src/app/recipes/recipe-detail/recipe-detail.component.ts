import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-detail',
  templateUrl: 'recipe-detail.component.html',
})
export class RecipeDetailComponent implements OnInit {

  @Input() selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
