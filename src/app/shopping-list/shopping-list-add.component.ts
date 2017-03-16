import {Component, Input, OnChanges} from '@angular/core';
import {Ingredient} from "../shared/ingredient";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'tcw2-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styles: []
})
export class ShoppingListAddComponent implements OnChanges {
  @Input() item: Ingredient;
  bAdd = true;

  constructor(private sls: ShoppingListService) {
  }

  ngOnChanges(changes){
    this.bAdd = changes.item.currentValue === null;
  }

  onSubmit(ingredient: Ingredient) {
    if (!this.bAdd) {
      // edit
    }
    else {
      this.item = new Ingredient(ingredient.name, ingredient.quantity);
      this.sls.addItem(this.item);
    }
  }
}
