import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Entities/Category';
import { CategoryService } from 'src/app/services/category-service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}
  categories: Category[] = [];
  ngOnInit() {
    this.categoryService.findAll().subscribe({
      error: (res: any) => console.log(res.message),
      next: (res: any) => (this.categories = res.data),
    });
  }
}
