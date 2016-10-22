import { Component } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  moduleId: module.id,
  selector: 'app-user-component',
  template: `
      <h1>User Component for user: {{id}}</h1>
      <a [routerLink]="['/user}'+id]">User from nested component</a>
      <br>
      <a [routerLink]="['../']">Home from nested component</a>
      <br>
      <button (click)="onNavigate()">Go Home</button>
      <br>
      <a [routerLink]="['edit']" routerLinkActive="active3">Edit</a>
      <br>
      <a [routerLink]="['detail']" routerLinkActive="active4">detail</a>
      <hr>
      <router-outlet></router-outlet>
    `,
  styles: [`
  .active3 {
    color: green;
  }
  .active4 {
    color: blue;
  }
  `]
})
export class UserComponent {
  private subscription: Subscription;

  id: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onNavigate() {
    this.router.navigate(['/'], {queryParams: {analytics:100}});
  }
}
