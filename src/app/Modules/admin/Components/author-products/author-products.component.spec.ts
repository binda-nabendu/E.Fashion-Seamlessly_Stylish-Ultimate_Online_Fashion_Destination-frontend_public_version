import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorProductsComponent } from './author-products.component';

describe('AuthorProductsComponent', () => {
  let component: AuthorProductsComponent;
  let fixture: ComponentFixture<AuthorProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthorProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthorProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
