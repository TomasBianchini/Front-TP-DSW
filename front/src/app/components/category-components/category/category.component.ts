import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Entities/Category';
import { CategoryService } from 'src/app/services/category-service/category.service';
import { NotificationService } from 'src/app/services/notification-service/notification.service';

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
  panelOpenState = false;
  categories: Category[] = [];

  ngOnInit() {
    this.categoryService.findAll().subscribe({
      next: (res: any) => {
        this.categories = res.data;
      },
      error: (res: any) =>
        this.notificationService.showError(res.error.message),
    });
  }

  toggleDetails(index: number): void {
    this.categories[index].expanded = !this.categories[index].expanded;
  }

  onDelete(id: string) {
    this.categoryService.remove(id).subscribe({
      next: (res: any) => {
        this.notificationService.showSuccess(res.message);
      },
      error: (res: any) =>
        this.notificationService.showError(res.error.message),
      complete: () => window.location.reload(),
    });
  }
}
