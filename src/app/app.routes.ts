import {UserComponent} from "./user/user.component";
import {HomeComponent} from "./home-component.component";
import {Routes, RouterModule} from "@angular/router";
import {UserDetailComponent} from "./user/user-detail.component";
import {USER_ROUTES} from "./user/user.routes";
const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user/:id', component: UserComponent},
  { path: 'user/:id', component: UserComponent, children: USER_ROUTES },
  { path: 'user', redirectTo: 'user/1'},
  { path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
