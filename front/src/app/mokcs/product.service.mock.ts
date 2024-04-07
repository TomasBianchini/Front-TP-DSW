import { Product } from 'src/app/Entities/Product.js';
import { of } from 'rxjs';

export class ProductServiceMock {
  private product: Product = {
    _id: '1',
    id: '1',
    name: 'Producto de prueba 1',
    price: 100,
    priceWithDiscount: 90,
    stock: 50,
    description: 'Descripción del producto 1',
    img_url: 'url_de_la_imagen_1',
    state: 'Active',
    category: {
      _id: '1',
      id: '1',
      discounts: [
        {
          value: 10,
          id: '1',
          state: 'Active',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      category: '',
      state: 'Active',
      createdAt: new Date(),
      updatedAt: new Date(),
      expanded: false,
    },
    seller: {
      shop_name: '',
      cuil: '',
      cbu: '',
      products: [],
      id: '',
      user_name: '',
      email: '',
      password: '',
      address: '',
      type: 'Admin',
      state: 'Active',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    rating: 4.5,
    reviews: [
      {
        rating: 4,
        comment: 'Good product',
        state: 'Active',
        product: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  findOne(productId: string) {
    return of({ message: 'Found product', data: this.product });
  }
}
