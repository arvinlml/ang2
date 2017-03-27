import { Component, OnInit } from '@angular/core';
import { ShoppingListService }  from './shopping-list.service';
import { Ingredient } from '../shared/ingredient';
@Component({
    selector: 'tcw2-shopping-list',
    templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [];
  selectedItem: Ingredient = null;

  constructor(private sls: ShoppingListService) {
  }

  ngOnInit() {
    this.items = this.sls.getItems();
  }

  onSelectItem(item: Ingredient) {
    this.selectedItem = item;
  }

  onClearItem() {
    this.selectedItem = null;
  }
}
