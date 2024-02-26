import { TestBed } from '@angular/core/testing';

import { SellerServiceSellerService } from './seller-service-seller.service';

describe('SellerServiceSellerService', () => {
  let service: SellerServiceSellerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerServiceSellerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
