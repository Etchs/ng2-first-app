import { Component } from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html'
})
export class DataDrivenComponent {
  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      'usrnm': new FormControl(),
      'eml': new FormControl(),
      'psswd': new FormControl()
    });
  }

  onSubmit() {
    console.log(this.myForm);
  }
}
