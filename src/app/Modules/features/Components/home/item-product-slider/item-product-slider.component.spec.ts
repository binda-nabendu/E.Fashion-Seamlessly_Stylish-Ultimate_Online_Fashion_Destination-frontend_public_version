import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemProductSliderComponent } from './item-product-slider.component';

describe('ItemProductSliderComponent', () => {
  let component: ItemProductSliderComponent;
  let fixture: ComponentFixture<ItemProductSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemProductSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemProductSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
