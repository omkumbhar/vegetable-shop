import { Component } from '@angular/core';
import { ItemModel } from 'src/app/DataModels/ItemModel';
import { ItemService } from 'src/app/Services/item.service';

@Component({
  selector: 'app-admin-view-products',
  templateUrl: './admin-view-products.component.html',
  styleUrls: ['./admin-view-products.component.css']
})
export class AdminViewProductsComponent {
  displayedColumns: string[] = ['name', 'type', 'quantity', 'price', 'action'];
  dataSource: ItemModel[];

  constructor(private itemService: ItemService) {
    this.dataSource = itemService.getItemList();
  }

}
