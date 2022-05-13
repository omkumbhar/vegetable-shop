import { Component } from '@angular/core';
import { ItemGroup } from 'src/app/DataModels/ItemGroup';
import { ItemModel } from 'src/app/DataModels/ItemModel';
import { ItemService } from 'src/app/Services/item.service';
import { v4 as uuid4 } from 'uuid';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css'],
})
export class AdminFormComponent {
  formTitle = 'ADD ITEM';
  itemType = [
    { id: ItemGroup.Vegetable, type: 'Vegetable' },
    { id: ItemGroup.Fruit, type: 'Fruit' },
  ];

  constructor(private itemService: ItemService) {}

  onSubmit(item: ItemModel) {
    item.itemId = uuid4();
    this.itemService.addItemToList(item);
    console.log(this.itemService.getItemList());
  }
}
