import { Component, inject } from '@angular/core';
import { TelegramService } from '../../service/telegram.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  template: `<h1>main page</h1>`,

})
export class ShopComponent {
  telegram = inject(TelegramService);
  constructor() {
    this.telegram.MainButton.show();
  }
}
