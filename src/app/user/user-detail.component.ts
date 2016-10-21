import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  moduleId: module.id,
  selector: 'app-user-detail',
  template: `
      <h3>Some user Details</h3>
      <hr>
      {{id}}
    `
})
export class UserDetailComponent {
  private subscription: Subscription;

  id: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
