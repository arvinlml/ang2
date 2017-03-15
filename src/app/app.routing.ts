import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent }  from './recipes/recipes.component';
import { ShoppingListComponent }  from './shopping-list/shopping-list.component';
import { RECIPE_ROUTES }  from './recipes/recipes.routes';

const TCW2_ROUTES: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: RECIPE_ROUTES },
    { path: 'cart', component: ShoppingListComponent },
]

export const routing = RouterModule.forRoot(TCW2_ROUTES);