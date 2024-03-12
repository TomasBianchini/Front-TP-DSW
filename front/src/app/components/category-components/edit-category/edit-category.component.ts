import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category-service/category.service';
import { NotificationService } from 'src/app/services/notification-service/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
})
export class EditCategoryComponent {
  constructor(
    private notificationService: NotificationService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
  categoryId!: string;
  categoryForm!: FormGroup;

  ngOnInit() {
    this.categoryId = this.route.snapshot.params['id'];

    this.categoryForm = this.formBuilder.group({
      category: ['', [Validators.required, Validators.maxLength(150)]],
      state: [
        '',
        [Validators.required, Validators.pattern(/^(Active|Archived)$/)],
      ],
    });

    this.categoryService.findOne(this.categoryId).subscribe({
      next: (res: any) =>
        this.categoryForm.setValue({
          category: res.data.category,
          state: res.data.state,
        }),
      error: (res: any) =>
        this.notificationService.showError(res.error.message),
    });
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      this.categoryService
        .update(this.categoryId, this.categoryForm.value)
        .subscribe({
          error: (res: any) =>
            this.notificationService.showError(res.error.message),
          complete: () => {
            this.notificationService.showSuccess(
              'Category updated successfully'
            );
            this.router.navigate(['/category']);
          },
        });
    } else {
      this.notificationService.showError('Invalid form data');
    }
  }
}
