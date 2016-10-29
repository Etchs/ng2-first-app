import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html'
})
export class DataDrivenComponent {
  myForm: FormGroup;
  genders = ['male', 'female'];
  constructor(private formBuilder: FormBuilder) {
    /*this.myForm = new FormGroup({
      'userData': new FormGroup({
        'usrnm': new FormControl('Hesham', Validators.required),
        'eml': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])
      }),
      'psswd': new FormControl('', Validators.required),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([
        new FormControl('Cooking', Validators.required)
      ])
    });*/

    this.myForm = formBuilder.group({
      'userData': formBuilder.group({
        'usrnm': ['Hesham', Validators.required],
        'eml': ['', [
          Validators.required,
          Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]]
      }),
      'psswd': ['', Validators.required],
      'gender': ['male'],
      'hobbies': formBuilder.array([
        ['Cooking', Validators.required]
      ])
    });
  }

  onAddHobby() {
    this.myForm.controls.hobbies.push(new FormControl('', Validators.required));
  }

  onSubmit() {
    console.log(this.myForm);
  }
}
