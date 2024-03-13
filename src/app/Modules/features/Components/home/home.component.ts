import { Component } from '@angular/core';
import {manJens} from "../../../../../Data/Men/men_jeans";
import {gounsPage1} from "../../../../../Data/Gouns/gouns";
import {mens_kurta} from "../../../../../Data/Men/men_kurtts";
import {mensShoesPage1} from "../../../../../Data/shoes";
import {lengha_page1} from "../../../../../Data/Women/LenghaCholi";

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

ngOnInit(){
  this.manJeans = manJens.slice(0, 6);//i will do it later random ;
  this.womansGouns = gounsPage1.slice(0,6);
  // this.lehengaCholi = lengha_page1.slice(0,6);
  this.lehengaCholi = this.womansGouns;
  this.mansKurta = mens_kurta.slice(0,6);
  this.shoes = mensShoesPage1.slice(0,6);
}

}
