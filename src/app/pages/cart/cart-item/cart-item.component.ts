import { Component, inject, input } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { CartProduct } from '../../../models/products.model';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  cartService = inject(CartService);
  product = input.required<CartProduct>();
}
