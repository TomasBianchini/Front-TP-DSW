import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingCartComponent } from './pending-cart.component';

describe('PendingCartComponent', () => {
  let component: PendingCartComponent;
  let fixture: ComponentFixture<PendingCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingCartComponent]
    });
    fixture = TestBed.createComponent(PendingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
