import { Component, computed, signal } from '@angular/core';
import { Model } from './repository.model';

@Component({
  selector: 'app',
  templateUrl: 'template.html'
})
export class ProductComponent {
  private model: Model = new Model();
  private  messages = ["Total","Price"];
  private index = signal<number>(0);

  get count(): number {
    let result = this.model.getProducts().length;
    // let total = 0;
    //     for (let i = 0; i < 1000000000; i++) {
    //       total += i;
    //     }
    console.log(`count value read: ${result}`);
    return result;
      }

      get total(): number {
        let result = this.model.getProducts().length;

           console.log(`total value read: ${result}`);
           return result;
      }

  get message(): string {
    /*The value of a signal is read by invoking the signal as a function, like: this.index()*/
    let result = `${this.messages[this.index()]}: ${this.total}`;
    console.log(`message value read: ${result}`);
    return result;
  }


  toggleMessage(){
    console.clear();
    console.log(`message value read: ${this.message}`);
   // this.index = (this.index +1) % 2;
   /*Unlike a normal Javascript value, signals are not modified using the assignment operator.
     Instead, signals are modified using one the following methods: ste=>accept a new value for the signal,
     update => accepts a fx that receives the current signal value and returns a new vale, mutate => this method
     accepts a fx that receives the current signal value and modifies it in place
     asReadonly =>a method that returns Signal<T> object, which provides a read-only version of the signal.*/
   this.index.update(currentVal => (currentVal + 1) % 2);
  }

  removeProduct() {
    console.clear();
    console.log(`removeProduct() called`);
    this.model.deleteProduct(this.model.getProducts()[0].id ?? 0);
  }
}


