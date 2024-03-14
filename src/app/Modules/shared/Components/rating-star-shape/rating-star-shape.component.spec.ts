import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingStarShapeComponent } from './rating-star-shape.component';

describe('RatingStarShapeComponent', () => {
  let component: RatingStarShapeComponent;
  let fixture: ComponentFixture<RatingStarShapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RatingStarShapeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RatingStarShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
