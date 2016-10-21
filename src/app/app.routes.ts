import {UserComponent} from "./user/user.component";
import {HomeComponent} from "./home-component.component";
import {Routes, RouterModule} from "@angular/router";
import {UserDetailComponent} from "./user/user-detail.component";
const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'user/:id', component: UserDetailComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
