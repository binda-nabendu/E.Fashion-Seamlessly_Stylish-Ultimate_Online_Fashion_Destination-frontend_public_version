import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageCartComponent } from './landing-page-cart.component';

describe('LandingPageCartComponent', () => {
  let component: LandingPageCartComponent;
  let fixture: ComponentFixture<LandingPageCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingPageCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingPageCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
