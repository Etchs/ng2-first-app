import {CanDeactivate} from "@angular/router";
import {Observable} from "rxjs";

export interface ComponentCanDeactivate {
  compCanDeactivate: () => Observable<boolean> | boolean;
}

export class UserEditOutGaurd implements CanDeactivate<ComponentCanDeactivate> {

  canDeactivate(component: ComponentCanDeactivate): Observable<boolean> | boolean {
    console.log('component: ', component);
    return component.compCanDeactivate ? component.compCanDeactivate() : true;
  }
}
