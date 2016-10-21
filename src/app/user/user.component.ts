import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <a [routerLink]="['/user']">User from nested component</a>
      <br>
      <a [routerLink]="['../']">Home from nested component</a>
      <br>
      <button (click)="onNavigate()">Go Home</button>
    `
})
export class UserComponent {
  constructor (private router: Router) {}
  onNavigate() {
    this.router.navigate(['/'], {queryParams: {analytics:100}});
  }
}
