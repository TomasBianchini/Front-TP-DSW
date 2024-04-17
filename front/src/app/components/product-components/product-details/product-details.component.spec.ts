import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductDetailsComponent } from './product-details.component';
import { NotificationServiceMock } from '../../../mokcs/notification.service.mock';
import { NotificationService } from '../../../services/notification-service/notification.service';
import { ProductServiceMock } from '../../../mokcs/product.service.mock';
import { ProductService } from '../../../services/product-service/product.service';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { OrderService } from '../../../services/order-service/order.service';
import { OrderServiceMock } from '../../../mokcs/order.service.mock';
import { ReviewListComponent } from '../../review-components/review-list/review-list.component';
import { spyOn } from 'jest-mock';
import { of } from 'rxjs';
import { Order } from 'src/app/Entities/Order.js';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  let orderServiceMock: OrderServiceMock;
  let notificationServiceMock: NotificationServiceMock;
  const user = { id: '1', user_name: 'John Doe' };
  localStorage.setItem('user', JSON.stringify(user));

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailsComponent, ReviewListComponent],
      providers: [
        { provide: NotificationService, useClass: NotificationServiceMock },
        { provide: ProductService, useClass: ProductServiceMock },
        { provide: OrderService, useClass: OrderServiceMock },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: { id: '1' },
            },
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    notificationServiceMock = TestBed.inject(NotificationService);
    orderServiceMock = TestBed.inject(OrderService) as any as OrderServiceMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should increment the quantity', () => {
    component.quantity = 1;
    component.incrementQuantity();
    expect(component.quantity).toBe(2);
  });
  it('Should not increment the quantity', () => {
    component.quantity = 50;
    component.incrementQuantity();
    expect(component.quantity).toBe(50);
  });

  it('Should decrement the quantity', () => {
    component.quantity = 2;
    component.decrementQuantity();
    expect(component.quantity).toBe(1);
  });

  it('Should return the product', () => {
    component.ngOnInit();
    expect(component.product).toBeTruthy();
  });

  it('Should create an order', () => {
    component.quantity = 5;
    const expectedOrder = {
      product: component.product._id,
      quantity: component.quantity,
      user: component.user.id,
      subtotal:
        (component.product.priceWithDiscount
          ? component.product.priceWithDiscount
          : component.product.price) * component.quantity,
    };
    const addSpy = spyOn(orderServiceMock, 'add').mockReturnValueOnce(
      of<{ message: string; data: Order }>({
        message: 'Order created',
        data: {},
      } as any)
    );
    component.addToCart();
    expect(addSpy).toHaveBeenCalledWith(expectedOrder);
  });

  it('Should not create an order', () => {
    component.quantity = 51;
    const addSpy = spyOn(orderServiceMock, 'add');
    const showErrorSpy = spyOn(notificationServiceMock, 'showError');
    component.addToCart();
    expect(addSpy).not.toHaveBeenCalled();
    expect(showErrorSpy).toHaveBeenCalledWith(
      'The quantity is greater than the stock'
    );
  });
});
