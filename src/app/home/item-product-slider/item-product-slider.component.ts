import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-item-product-slider',
  templateUrl: './item-product-slider.component.html',
  styleUrl: './item-product-slider.component.scss'
})
export class ItemProductSliderComponent {
    @Input() title: any;
    @Input() products:any;
}
