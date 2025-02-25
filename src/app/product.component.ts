import { Component, computed, effect, signal } from '@angular/core';
import { Model } from './repository.model';
import { Ticker } from './ticker.model';
import { Product } from './product.model';

@Component({
  selector: 'app',
  templateUrl: 'template.html'
})
export class ProductComponent {
  private model: Model = new Model();

 products = computed<Product[]>(() => this.model.getProducts());
  count = computed<number>(() => this.model.getProducts().length);


 product(key: number): Product | undefined {
  return this.model.getProduct(key);
  }
  removeProduct() {
  this.model.deleteProduct(this.model.getProducts()[0].id ?? 0);
  }

}


