import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent }  from './recipes/recipes.component';
import { ShoppingListComponent }  from './shopping-list/shopping-list.component';

const TCW2_ROUTES: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch:'full' },
    { path: 'recipes', component: RecipesComponent },
    { path: 'cart', component: ShoppingListComponent },
]

export const routing = RouterModule.forRoot(TCW2_ROUTES);