import { Injectable } from '@angular/core';
import { ItemModel } from 'src/app/DataModels/ItemModel';

@Injectable({
  providedIn: 'root',
})

export class ItemService {
  itemList: ItemModel[];

  constructor() {
    this.itemList = [
      new ItemModel('Orange', 'Seasonal', 50, 1, 40),
      new ItemModel('Mango', 'Seasonal', 45, 1, 450),
      new ItemModel('Cabbage', 'Daily Need', 15, 0, 10),
      new ItemModel('Coriander', 'Daily Need', 20, 0, 30),
    ];
  }

  getItemList(): ItemModel[] {
    return this.itemList;
  }

  addItemToList(item: ItemModel) {
    this.itemList.unshift(item);
  }
}
