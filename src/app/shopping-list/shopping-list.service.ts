import { Ingredient } from '../shared/ingredient';
export class ShoppingListService {
  private items: Ingredient[] = [];

  constructor() {
  }

  getItems() {
    return this.items;
  }

  addItems(itemsPushed: Ingredient[]) {
    // Push all items received in itemsPushed var into the private member items.
    Array.prototype.push.apply(this.items, itemsPushed);
  }

  addItem(item: Ingredient) {
    this.items.push(item);
  }

  deleteItem(item: Ingredient) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  editItem(oldItem: Ingredient, changedItem: Ingredient) {
    this.items[this.items.indexOf(oldItem)] = changedItem;
  }
}
