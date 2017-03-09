import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe'
import {JQueryStyleEventEmitter} from "rxjs/observable/FromEventObservable";
@Component({
  selector: 'tcw2-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  recipies : Recipe[]=[];

  @Output()
  recipeSelected = new EventEmitter<Recipe>()
  recipe = new Recipe('Dummy','dummy','https://suples.com/dummies/greco/slide1.jpg')
  onSelected(recipe:Recipe){
    console.log('Selected recipe object: ' + recipe);
    this.recipeSelected.emit(recipe);
  }
  constructor() { }
  ngOnInit() {
  }
}
