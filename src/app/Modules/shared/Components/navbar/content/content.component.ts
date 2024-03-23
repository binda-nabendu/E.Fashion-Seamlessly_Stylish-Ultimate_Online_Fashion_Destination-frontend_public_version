import {Component, Input} from '@angular/core';
import {navigation_data} from "./data-sub-menu";
import {Router} from "@angular/router";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  category: any;
  @Input() selectedSection: any;
  ngOnInit(){
    this.category = navigation_data;
    // console.log(this.category[this.selectedSection]);
  }
  constructor(private router : Router) {
  }

  navigateMenuAddress(path: any){
    console.log(path)
    this.router.navigate([path])
  }
}
