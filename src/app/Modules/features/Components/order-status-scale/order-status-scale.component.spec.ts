import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderStatusScaleComponent } from './order-status-scale.component';

describe('OrderStatusScaleComponent', () => {
  let component: OrderStatusScaleComponent;
  let fixture: ComponentFixture<OrderStatusScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderStatusScaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderStatusScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
