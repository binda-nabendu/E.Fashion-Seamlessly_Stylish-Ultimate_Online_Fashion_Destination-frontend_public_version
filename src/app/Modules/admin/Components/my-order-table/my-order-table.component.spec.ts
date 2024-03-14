import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrderTableComponent } from './my-order-table.component';

describe('MyOrderTableComponent', () => {
  let component: MyOrderTableComponent;
  let fixture: ComponentFixture<MyOrderTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyOrderTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyOrderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
