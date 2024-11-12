import { Product } from './../models/Poduct';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-product-component',
  templateUrl: './form-product-component.component.html',
  styleUrls: ['./form-product-component.component.css']
})
export class FormProductComponentComponent {

  products : Product []= [] ;
  product_data = new FormGroup({
    id:new FormControl(""),
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern("[a-zA-Z]*")
    ]),
    image: new FormControl('', Validators.required),
    description: new FormControl(),
    price: new FormControl('', [
      Validators.required,
      Validators.pattern("^[0-9]*([.][0-9]+)?$")
    ]),
    brand: new FormControl(),
    promotion: new FormControl('', [
      Validators.pattern("^(0|[1-9][0-9]?)$")
    ]),
    available: new FormControl()
  });


  onSave() {
    if (this.product_data.valid) {
      const product = this.product_data.value;

      console.log('Produit sauvegardé :', product);
      this.products.push();
    } else {
      console.log('Formulaire invalide');
    }
  }

}
