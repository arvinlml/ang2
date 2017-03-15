import { Injectable } from '@angular/core';
import { Recipe } from './recipe'; 

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Tiger', 'Can\'this eat', 'http://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg'),
        new Recipe('Red eyed tiger', 'Red eyes', 'http://cdn.paper4pc.com/images/tiger-wallpaper-54.jpg')
    ];
    constructor() { }
    getRecipes() {
        return this.recipes;
    }
}