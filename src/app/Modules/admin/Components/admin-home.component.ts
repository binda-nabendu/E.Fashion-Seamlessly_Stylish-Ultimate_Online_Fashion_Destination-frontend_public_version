import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {
  clickedItem: any;
  submenu =[
    {name: "Add Item", link:"products/crete"},
    {name: "View Orders", link:"orders"}
  ]
}
