import {Component, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {Ingredient} from "../shared/ingredient";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'tcw2-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styles: []
})
export class ShoppingListAddComponent implements OnChanges {
  @Input() item: Ingredient;
  @Output() clearItem = new EventEmitter();
  bAdd = true;

  constructor(private sls: ShoppingListService) {
  }

  ngOnChanges(changes) {
    if (changes.item.currentValue === null) {
      this.bAdd = true;
      this.item = {name: null, quantity: null};
    }
    else
      this.bAdd = false;
  }

  onSubmit(ingredient: Ingredient) {
    const newIngredient = new Ingredient(ingredient.name, ingredient.quantity);
    if (!this.bAdd) {
      this.sls.editItem(this.item, newIngredient);
      this.onClear();
    }
    else {
      this.item = newIngredient;
      this.sls.addItem(this.item);
    }
  }

  onDelete() {
    this.sls.deleteItem(this.item);
    this.onClear();
  }

  onClear() {
    this.bAdd = true;
    this.clearItem.emit(null);
  }
}
