import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
@Component({
    selector: 'tcw2-recipe-list',
    templateUrl: './recipe-list.component.html',
    styles: []
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [];

    @Output() recipeSelected = new EventEmitter<Recipe>();

    constructor(private recipeService: RecipeService) {
        this.recipes = recipeService.getRecipes();
    }
    ngOnInit() {
    }
    onSelected(recipe: Recipe) {
        this.recipeSelected.emit(recipe);
    }
}