import { Component } from '@angular/core';
import {manJens} from "../../../../../Data/Men/men_jeans";
import {gounsPage1} from "../../../../../Data/Gouns/gouns";
import {mens_kurta} from "../../../../../Data/Men/men_kurtts";
import {mensShoesPage1} from "../../../../../Data/shoes";
import {lengha_page1} from "../../../../../Data/Women/LenghaCholi";
import {ProductService} from "../../../../State/Product/product.service";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../Models/AppState";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  manJeans: any;
  womansGouns: any;
  lehengaCholi: any;
  mansKurta: any;
  shoes: any;
constructor(private productService: ProductService, private store: Store<AppState>) {
}
ngOnInit(){
  this.manJeans = manJens.slice(0, 6);//i will do it later random ;
  this.womansGouns = gounsPage1.slice(0,6);
  // this.lehengaCholi = lengha_page1.slice(0,6);
  this.lehengaCholi = this.womansGouns;
  this.mansKurta = mens_kurta.slice(0,6);
  this.shoes = mensShoesPage1.slice(0,6);


  this.extracted('women_dress');
}

  private extracted(category: string) {
    let reqData = {
      category: category,
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 1000000000,
      minDiscount: 0,
      pageNumber: 0,
      pageSize: 6,
      sort: 'price_low',
      stock: "",
    }
    this.productService.findProductByFilterService(reqData);
    this.store.pipe(select((store: AppState) => store.product)).subscribe((product) => {
      if(product.content.content.length)
        this.womansGouns = product.content;
      console.log("from home page", product)
    })
  }
}
