import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Entities/Category';
import { Product } from 'src/app/Entities/Product';
import { ProductFilter } from 'src/app/Entities/ProductFilter';
import { CategoryService } from 'src/app/services/category-service/category.service';
import { NotificationService } from 'src/app/services/notification-service/notification.service';
import { ProductService } from 'src/app/services/product-service/product.service';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
})
export class ListProductComponent implements OnInit {
  constructor(
    private notificationService: NotificationService,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}
  products!: Product[];
  productFilter: ProductFilter = {};
  categories!: Category[];
  allProducts!: Product[];
  ngOnInit() {
    this.productFilter.state = 'Active';
    this.productService.findAll(this.productFilter).subscribe({
      error: (res: any) =>
        this.notificationService.showError(res.error.message),
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
        this.allProducts = this.products;
      },
    });
    this.categoryService.findAll().subscribe({
      next: (res: any) => (this.categories = res.data),
      error: (res: any) =>
        this.notificationService.showError(res.error.message),
    });
  }

  filterProducts(category: string) {
    if (category === 'all') {
      this.products = this.allProducts;
      return;
    }
    this.products = this.allProducts.filter((product) => {
      return product.category.category === category;
    });
  }
}
