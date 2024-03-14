import {Component, Input} from '@angular/core';
export interface Review {
  userName: string;
  userIcon?: string;
  stars: number;
  imageUrls?: { id: number; link: string }[];
  reviewDate: Date;
  comment: string;
}
@Component({
  selector: 'app-user-review',
  templateUrl: './user-review.component.html',
  styleUrl: './user-review.component.css'
})
export class UserReviewComponent {
  @Input() review: Review | any;
}
