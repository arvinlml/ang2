import { Component, OnInit, Input} from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'tcw2-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: []
})
export class RecipeDetailComponent implements OnInit {
  @Input()
  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
