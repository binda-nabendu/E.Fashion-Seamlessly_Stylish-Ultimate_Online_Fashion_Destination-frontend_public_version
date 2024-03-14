import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product:any;
  constructor(private router : Router) {
  }
  navigateToItem(path:string, id : string){
    this.router.navigate([path + id]);
  }
}
