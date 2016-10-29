import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray, FormBuilder} from "@angular/forms";
import {Observable} from "rxjs";
import Promise = Q.Promise;


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
        'eml': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])
      }),
      'psswd': new FormControl('', Validators.required),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([
        new FormControl('Cooking', Validators.required)
      ])
    });*/

    this.myForm = formBuilder.group({
      'userData': formBuilder.group({
        'usrnm': ['Hesham', [Validators.required, this.exampleValidator]],
        'eml': ['', [
          Validators.required,
          Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]]
      }),
      'psswd': ['', Validators.required],
      'gender': ['male'],
      'hobbies': formBuilder.array([
        ['Cooking', Validators.required, this.asyncExampleValidator ]
      ])
    });

    this.myForm.valueChanges.subscribe(
      (data:any) => console.log(data)
    );
    this.myForm.statusChanges.subscribe(
      (data:any) => console.log(data)
    );
  }

  onAddHobby() {
    this.myForm.controls.hobbies.push(new FormControl('', Validators.required, this.asyncExampleValidator));
  }

  onSubmit() {
    console.log(this.myForm);
  }

  exampleValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Example'){
      return {example: true}; // when you want validation to fail return anything other than null
    }
    return null; // if you want validation to succeed return null or don't return anything
  }

  asyncExampleValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Observable<any>(
      (resolve, reject) => {
        setTimeout( () => {
          if (control.value === 'Example') {
            resolve({'invalid': true}); // when you want validation to fail resolve the promise with anything but null
          } else {
            resolve(null); // if you want validation to succeed resolve with null
          }
        } ,1500);
      }
    );
    return promise;
  }
}
