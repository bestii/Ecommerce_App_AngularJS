import { CartService } from './../../services/cart.service';
import { Component, inject } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  cartService = inject(CartService);
  showBtnClicked() {
    console.log('Button clicked!');
  }
}
