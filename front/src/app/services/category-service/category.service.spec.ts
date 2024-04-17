import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CategoryService } from './category.service';
import { Category } from 'src/app/Entities/Category.js';
import { environment } from '../../../environments/environment';

describe('CategoryService', () => {
  let service: CategoryService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CategoryService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get category', () => {
    const result: any = {
      message: 'Found Category',
      data: [
        {
          id: '1',
          category: 'category1',
        },
      ],
    };
    let category!: Category;
    service.findOne('1').subscribe((res: any) => {
      category = res.data[0];
      expect(category.category).toEqual('category1');
      expect(category.id).toEqual('1');
    });
    const request = controller.expectOne(environment.url + '/category/1');
    request.flush(result);
  });

  it('should get all categories', () => {
    const result: any = {
      message: 'Found Categories',
      data: [
        {
          id: '1',
          category: 'category1',
        },
        {
          id: '2',
          category: 'category2',
        },
      ],
    };
    let categories: Category[];
    service.findAll().subscribe((res: any) => {
      categories = res.data;
      expect(categories.length).toBe(2);
      expect(categories).toBe(result.data);
    });
    const request = controller.expectOne(environment.url + '/category');
    request.flush(result);
  });

  it('should add category', () => {
    const result: any = {
      message: 'Category created',
      data: {
        id: '1',
        category: 'category1',
      },
    };

    const category: any = {
      category: 'category1',
    };
    let newCategory: Category;
    service.add(category).subscribe((res: any) => {
      newCategory = res.data;
      expect(newCategory).toEqual(category);
    });
    const request = controller.expectOne(environment.url + '/category');
    request.flush(result);
  });

  it('should update category', () => {
    const result: any = {
      message: 'Category updated',
      data: {
        id: '1',
        category: 'category1',
      },
    };

    const category: any = {
      id: '1',
      category: 'category1',
    };
    let updatedCategory: Category;
    service.update('1', category).subscribe((res: any) => {
      updatedCategory = res.data;
      expect(updatedCategory).toEqual(category);
    });
    const request = controller.expectOne(environment.url + '/category/1');
    request.flush(result);
  });

  it('Should delete category', () => {
    const result: any = {
      message: 'Category deleted',
    };
    service.remove('1').subscribe((res: any) => {
      expect(res.message).toBe('Category deleted');
    });
    const request = controller.expectOne(environment.url + '/category/1');
    request.flush(result);
  });
});
