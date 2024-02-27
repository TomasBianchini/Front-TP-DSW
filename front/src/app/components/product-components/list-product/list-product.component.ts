import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Entities/Product';
import { NotificationService } from 'src/app/services/notication-service/notification.service';
import { ProductService } from 'src/app/services/product-service/product.service';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
  constructor(
    private notificationService: NotificationService,
    private productService: ProductService
  ) {}
  products!: Product[];
  ngOnInit() {
    this.productService.findAll().subscribe({
      error: (res: any) => this.notificationService.showError(res.message),
      next: (res: any) => {
        this.products = res.data;
        this.products.forEach((product) => {
          if (product.category && product.category.discounts.length > 0) {
            product.priceWithDiscount = parseFloat(
              (
                product.price -
                product.price * (product.category.discounts[0].value / 100)
              ).toFixed(2)
            );
          }
        });
      },
    });
  }
}
