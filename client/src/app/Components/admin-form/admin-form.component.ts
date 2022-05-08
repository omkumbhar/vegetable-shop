import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {
  formTitle = "ADD ITEM";
  itemType = [ {id : 0, type :"Vegitable"},{id : 1, type :"Fruit"}];
  constructor() { }

  ngOnInit(): void {
  }

}
