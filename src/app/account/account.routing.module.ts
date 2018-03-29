import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AccountComponent} from './account.component';

const routes: Routes = [
  {path: '', component: AccountComponent,
    children: [
      {path: 'Login', loadChildren: './login/login.module#LoginModule'},
      {path: 'Logout', loadChildren: './logout/logout.module#LogoutModule'}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
