import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe'

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-item',
  templateUrl: 'recipe-item.component.html',
  styleUrls: ['recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
 @Input() recipe: Recipe;
 recipeId: number;

  recipes: Recipe[] = [];
  recipe = new Recipe('Dummy', 'Description...', 'https://pbs.twimg.com/profile_images/1620149654/avatar.jpg');

  constructor() { }

  ngOnInit() {
  }

}
