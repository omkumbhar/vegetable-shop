import { Component } from '@angular/core';
import { ItemModel } from 'src/app/DataModels/ItemModel';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css'],
})
export class AdminFormComponent {
  formTitle = 'ADD ITEM';
  itemType = [
    { id: 0, type: 'Vegitable' },
    { id: 1, type: 'Fruit' },
  ];
  items: ItemModel[] = [];
  constructor() {}
  onSubmit(value: ItemModel) {
    console.log('value = ' + value);
    console.log('itemName = ' + value.itemName);
    console.log('itemGroup = ' + value.itemGroup);
    console.log('itemQuantity = ' + value.itemQuantity);
    console.log('itemType = ' + value.itemType);
  }
}
