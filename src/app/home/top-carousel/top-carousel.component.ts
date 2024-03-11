import {Component, OnInit} from '@angular/core';
import {homeCarouselData} from "../../../Data/mainCarousel";

@Component({
  selector: 'app-top-carousel',
  templateUrl: './top-carousel.component.html',
  styleUrls: ['./top-carousel.component.scss']
})
export class TopCarouselComponent{
  carouselData: any;
  currentSlide: number = 0;
  interval:any;
  ngOnInit(){
    this.carouselData = homeCarouselData;
    this.autoPlay();
  }
  autoPlay(){
    setInterval(()=>{
      this.nextSlide();
    }, 5000)
  }
  nextSlide(){
    this.currentSlide = (this.currentSlide + 1) % this.carouselData.length;
  }

}
