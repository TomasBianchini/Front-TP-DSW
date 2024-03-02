import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteCartComponent } from './complete-cart.component';

describe('CompleteCartComponent', () => {
  let component: CompleteCartComponent;
  let fixture: ComponentFixture<CompleteCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompleteCartComponent]
    });
    fixture = TestBed.createComponent(CompleteCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
