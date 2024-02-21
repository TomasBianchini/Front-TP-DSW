import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Entities/Category';
import { CategoryService } from 'src/app/services/category-service/category.service';
import { NotificationService } from 'src/app/services/notication-service/notification.service.js';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: [],
})
export class CategoryComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private notificationService: NotificationService
  ) {}
  categories: Category[] = [];
  ngOnInit() {
    this.categoryService.findAll().subscribe({
      error: (res: any) => this.notificationService.showError(res.message),
      next: (res: any) => (this.categories = res.data),
    });
  }
}
