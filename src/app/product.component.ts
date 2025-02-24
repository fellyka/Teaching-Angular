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

 classes = computed<string>( ()=>
   this.count() === 5 ? "bg-success" : "bg-warning")

 someInfo: string = "bg-info text-white text-center";

 sayHello():void{
    console.log("Hello");
 }

 getClasses(key: number) {
  return "p-2 " + (((this.products()[key].price ?? 0) > 50)
  ? "bg-info" : "bg-warning");
  }

 Name = "Product Component";

}


