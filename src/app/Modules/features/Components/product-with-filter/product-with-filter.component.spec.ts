import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWithFilterComponent } from './product-with-filter.component';

describe('ProductWithFilterComponent', () => {
  let component: ProductWithFilterComponent;
  let fixture: ComponentFixture<ProductWithFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductWithFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductWithFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
