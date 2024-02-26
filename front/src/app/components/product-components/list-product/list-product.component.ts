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
        console.log(this.products);
      },
    });
  }
}
