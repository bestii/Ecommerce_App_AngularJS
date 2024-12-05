import { Injectable, signal } from '@angular/core';
import { Cart, Product } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Cart>({ products: [], count: 0, total: 0 });

  constructor() {}

  addToCart(product: Product) {
    this.cart.update((cart) => {
      const products = cart.products;
      const productInCart = products.find((p) => p.id === product.id);
      const count = cart.count + 1;
      if (productInCart) {
        productInCart.quantity = productInCart.quantity + 1;
        return { ...cart, count, products: [...products] };
      }
      return {
        ...cart,
        count,
        products: [...products, { ...product, quantity: 1 }],
      };
    });
  }
}
