import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct, ProductsService } from '../../service/products.service';
import { TelegramService } from '../../service/telegram.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  template: `
  <div class="centered">
    <h2 class="mb">{{product.title}}</h2>
    <br/>
    <img [src]="product.image" [alt]="product.title">
    <p>{{product.text}}</p>
    <p>{{product.time}}</p>
    <button (click)="goBack()">Go Back</button>
  </div>`,

})
export class ProductComponent implements OnInit,OnDestroy {
  product: IProduct;
  constructor(
    private products:ProductsService,
    private telegram:TelegramService,
    private route: ActivatedRoute,
    private router: Router
    ) {
      const id = this.route.snapshot.paramMap.get('id');
      this.product = this.products.getById(id);
      this.goBack = this.goBack.bind(this);
  }
  goBack() {
    this.router.navigate(['/']);
  }
  ngOnInit(): void {
    this.telegram.BackButton.show();
    this.telegram.BackButton.onClick(this.goBack);
  }
  ngOnDestroy(): void {
    this.telegram.BackButton.offClick(this.goBack);
  }
 
}
