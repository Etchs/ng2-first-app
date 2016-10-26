import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styles: []
})
export class TemplateDrivenComponent {
  user = {
    username: 'Hesham',
    email: '',
    password: '',
    gender: 'female'
  };
  genders = ['male', 'female'];
  onSubmit(form: NgForm) {
    console.log(form.value);
    console.log(this.user);
  }
}
