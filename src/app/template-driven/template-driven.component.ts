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
    password: ''
  };
  onSubmit(form: NgForm) {
    console.log(form);
    console.log(this.user);
  }
}
