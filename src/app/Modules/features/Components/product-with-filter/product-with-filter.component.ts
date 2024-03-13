import { Component } from '@angular/core';
import {cloth_filter, price_filter} from "./FilterData";
import {mensShoesPage1} from "../../../../../Data/shoes";

@Component({
  selector: 'app-product-with-filter',
  templateUrl: './product-with-filter.component.html',
  styleUrl: './product-with-filter.component.css'
})
export class ProductWithFilterComponent {
  colorFilter: any;
  priceFilter: any;
  selectedCloth: any;
  ngOnInit(){
    this.colorFilter = cloth_filter;
    this.priceFilter = price_filter;
    this.selectedCloth = mensShoesPage1;

  }

}
