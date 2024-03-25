import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsComponent } from './product-details.component';
import { NotificationServiceMock } from '../../../mokcs/notification.service.mock';
import { NotificationService } from '../../../services/notification-service/notification.service';
import { ProductServiceMock } from '../../../mokcs/product.service.mock';
import { ProductService } from '../../../services/product-service/product.service';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailsComponent],
      providers: [
        { provide: NotificationService, useClass: NotificationServiceMock },
        { provide: ProductService, useClass: ProductServiceMock },
      ],
    });
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
