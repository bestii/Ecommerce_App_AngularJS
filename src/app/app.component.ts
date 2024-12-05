import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'learn-angular';
}
