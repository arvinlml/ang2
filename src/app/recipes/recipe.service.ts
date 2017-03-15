import { Injectable } from '@angular/core';
import { Recipe } from './recipe'; 
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('One', 'two', 'https://cdn.pixabay.com/photo/2016/02/01/16/10/eye-1173863__340.jpg', [
            new Ingredient('French fries', 2),
            new Ingredient('Pork meat', 1)
        ]),
        new Recipe('three', 'four', 'https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_960_720.png', [])
    ];

    constructor() { }
    getRecipes() {
        return this.recipes;
    }
}