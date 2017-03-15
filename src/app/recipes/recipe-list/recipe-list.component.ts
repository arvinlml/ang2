import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
@Component({
    selector: 'tcw2-recipe-list',
    templateUrl: './recipe-list.component.html',
    styles: []
})
export class RecipeListComponent {
    recipes: Recipe[] = [];
    recipeId: number;
    constructor(private recipeService: RecipeService) {
        this.recipes = recipeService.getRecipes();
    }
}