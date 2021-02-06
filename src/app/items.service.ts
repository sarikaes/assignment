import { Injectable } from '@angular/core';
import {Item} from './item';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private _items:Item[] = [];
 
  addItem(item: Item) {
      this._items.push(item);
  }

  getItems(): Item[] {
      return this._items;
  }
  constructor() { }
}
