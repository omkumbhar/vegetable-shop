import { Component } from '@angular/core';
import { ItemGroup } from 'src/app/DataModels/ItemGroup';
import { ItemModel } from 'src/app/DataModels/ItemModel';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css'],
})
export class AdminFormComponent {
  formTitle = 'ADD ITEM';
  itemType = [
    { id: ItemGroup.Vegitable, type: 'Vegitable' },
    { id: ItemGroup.Fruit, type: 'Fruit' },
  ];

  constructor() {}
  onSubmit(value: ItemModel) {
    console.log('itemName = ' + value.itemName);
    console.log('itemGroup = ' + value.itemGroup);
    console.log('itemQuantity = ' + value.itemQuantity);
    console.log('itemType = ' + value.itemType);
  }
}
