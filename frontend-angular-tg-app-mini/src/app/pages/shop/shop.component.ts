import { Component, inject } from '@angular/core';
import { TelegramService } from '../../service/telegram.service';
import { ProductsService } from '../../service/products.service';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductListComponent],
  template: `
  <app-product-list 
    title="Конкретна навичка"
    subtitle="Вивчення використавуваних техсннологій , шоб розширити стек технологійних знань" 
    [products]="products.byGroup['skill']"
  />
  <app-product-list 
    title="Інтенсив "
    subtitle="Експрес програма з практичними навичками" 
    [products]="products.byGroup['intensive']"
  />
  <app-product-list 
    title="Бесплатні курси "
    subtitle=" Вивчення використавуваних технологій , шоб розширити стек технологійних знань" 
    [products]="products.byGroup['course']"
  />`,

})
export class ShopComponent {
  telegram = inject(TelegramService);
  products = inject(ProductsService);
  constructor() {
    this.telegram.BackButton.hide();
  }
}
