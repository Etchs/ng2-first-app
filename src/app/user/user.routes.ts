import {UserDetailComponent} from "./user-detail.component";
import {UserEditComponent} from "./user-edit.component";
import {UserDetailGaurd} from "./user-detail.gaurd";
import {UserEditOutGaurd} from "./user-edit.gaurd";

export const USER_ROUTES = [
  { path: 'detail',
    component: UserDetailComponent,
    canActivate: [UserDetailGaurd]
  },{
    path: 'edit',
    component: UserEditComponent,
    canDeactivate: [UserEditOutGaurd]
  }
];
