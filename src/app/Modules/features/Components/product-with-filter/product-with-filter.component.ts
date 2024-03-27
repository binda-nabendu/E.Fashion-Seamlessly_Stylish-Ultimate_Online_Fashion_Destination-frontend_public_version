import {Component, signal} from '@angular/core';
import {cloth_filter, price_filter} from "./FilterData";
import {mensShoesPage1} from "../../../../../Data/shoes";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../../State/Product/product.service";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../Models/AppState";

@Component({
  selector: 'app-product-with-filter',
  templateUrl: './product-with-filter.component.html',
  styleUrl: './product-with-filter.component.css'
})
export class ProductWithFilterComponent {
  colorFilter: any;
  priceFilter: any;
  selectedCloth: any;
  category: any;
  constructor(private router: Router, private activatedRoute : ActivatedRoute,
              private productService: ProductService, private store: Store<AppState>) {
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
    this.activatedRoute.paramMap.subscribe((params)=>{
      this.category = params.get('label3');
      let reqData = {
        category: this.category,
        colors: [],
        sizes: [],
        minPrice: 0,
        maxPrice: 1000000000,
        minDiscount: 0,
        pageNumber: 0,
        pageSize: 10,
        sort: 'price_low',
        stock:null,
      }
      this.productService.findProductByFilterService(reqData);
    });
    this.activatedRoute.queryParams.subscribe((params)=>{
      const color = params["color"]
      const size = params["size"]
      const priceRange = params["price"]
      const minPrice = priceRange ?.split("-")[0]
      const maxPrice = priceRange ?.split("-")[1]
      const minDiscount = params["discount"]
      const pageNumber = params["pageNumber"]
      const pageSize = params["pageSize"]
      const sort = params["sort"]
      const stock = params["stock"]

      console.log(this.category);
      let reqData = {
        category: this.category,
        colors: color ? [color].join(",") : [],
        sizes: size ? size : [],
        minPrice: minPrice ? minPrice : 0,
        maxPrice: maxPrice ? maxPrice : 1000000000,
        minDiscount: minDiscount ? minDiscount : 0,
        pageNumber: pageNumber ? pageNumber : 0,
        pageSize: pageSize ? pageSize : 10,
        sort: sort ? sort : 'price_low',
        stock: stock ? stock : null,
      }
      console.log(this.category);
      this.productService.findProductByFilterService(reqData);
    })
    this.store.pipe(select((store: AppState)=>store.product)).subscribe((product)=>{
      this.selectedCloth = product.products.content;
    })

  }

}
