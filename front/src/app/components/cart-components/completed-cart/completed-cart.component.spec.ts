import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedCartComponent } from './completed-cart.component';

describe('CompletedCartComponent', () => {
  let component: CompletedCartComponent;
  let fixture: ComponentFixture<CompletedCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompletedCartComponent]
    });
    fixture = TestBed.createComponent(CompletedCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
