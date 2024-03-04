import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShippingComponent } from './create-shipping.component';

describe('CreateShippingComponent', () => {
  let component: CreateShippingComponent;
  let fixture: ComponentFixture<CreateShippingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateShippingComponent]
    });
    fixture = TestBed.createComponent(CreateShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
