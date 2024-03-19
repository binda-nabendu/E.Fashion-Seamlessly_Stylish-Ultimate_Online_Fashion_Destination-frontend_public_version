import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-order-status-scale',
  templateUrl: './order-status-scale.component.html',
  styleUrl: './order-status-scale.component.css'
})
export class OrderStatusScaleComponent {
  @Input() steps: any;
  @Input( )activeStep: any;

  calculateDividerWidth(numSteps: number): number {
    return 80 / (numSteps - 1); // Adjust the calculation as needed
  }

}
