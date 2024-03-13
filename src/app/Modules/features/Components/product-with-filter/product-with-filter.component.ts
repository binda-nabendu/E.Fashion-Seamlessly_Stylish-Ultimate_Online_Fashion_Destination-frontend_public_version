import {Component, signal} from '@angular/core';
import {cloth_filter, price_filter} from "./FilterData";
import {mensShoesPage1} from "../../../../../Data/shoes";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-with-filter',
  templateUrl: './product-with-filter.component.html',
  styleUrl: './product-with-filter.component.css'
})
export class ProductWithFilterComponent {
  colorFilter: any;
  priceFilter: any;
  selectedCloth: any;
  constructor(private router: Router, private activatedRoute : ActivatedRoute) {
  }
  filterAccording(value: string, id: string){
      const queryParams = {...this.activatedRoute.snapshot.queryParams};
      const filterParam = queryParams[id]?queryParams[id].split(",") : [];
      const valueIndex = filterParam.indexOf(value);
      if(valueIndex != -1){
        filterParam.splice(valueIndex, 1)
      }else{
        filterParam.push(value);
      }
      if(filterParam.length > 0){
        queryParams[id] = filterParam.join(",")
      }else{
        delete queryParams[id];
      }
      this.router.navigate([], {queryParams})

  }
  ngOnInit(){
    this.colorFilter = cloth_filter;
    this.priceFilter = price_filter;
    this.selectedCloth = mensShoesPage1;

  }

}
