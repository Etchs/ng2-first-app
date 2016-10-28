import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html'
})
export class DataDrivenComponent {
  myForm: FormGroup;
  genders = ['male', 'female'];
  constructor() {
    this.myForm = new FormGroup({
      'userData': new FormGroup({
        'usrnm': new FormControl('Hesham', Validators.required),
        'eml': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
      }),
      'psswd': new FormControl('', Validators.required),
      'gender': new FormControl('male')
    });
  }

  onSubmit() {
    console.log(this.myForm);
  }
}
