import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePaymentTypeComponent } from './create-payment-type.component';

describe('CreatePaymentTypeComponent', () => {
  let component: CreatePaymentTypeComponent;
  let fixture: ComponentFixture<CreatePaymentTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePaymentTypeComponent]
    });
    fixture = TestBed.createComponent(CreatePaymentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
