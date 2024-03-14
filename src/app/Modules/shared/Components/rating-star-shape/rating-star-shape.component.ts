import { Component } from '@angular/core';

@Component({
  selector: 'app-rating-star-shape',
  templateUrl: './rating-star-shape.component.html',
  styleUrl: './rating-star-shape.component.css'
})
export class RatingStarShapeComponent {
  stars: any;
  mxRating = 5;
  initialRating = 4;
  currentRating=0;
  constructor() {
    this.stars = Array(this.mxRating).fill(0).map((_,i)=>i+1);
    this.currentRating = this.initialRating;
  }
  rate(rating : number){
    this.currentRating = rating;
  }
}
