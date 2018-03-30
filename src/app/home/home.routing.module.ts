import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AuthGuardService } from '../shared/base-service/auth-guard.service';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    canActivate: [AuthGuardService],
    children: [{
      path: '',
      children: [
        { path: '', loadChildren: './index/index.module#IndexModule' },
        { path: 'Profile', loadChildren: './profile/profile.module#ProfileModule' },
        { path: 'Table', loadChildren: './table/table.module#TableModule' },
        { path: 'Bootstrap', loadChildren: './bootstrap/bootstrap.module#BootstrapModule' },
        { path: 'Ckeditor', loadChildren: './ckeditor/ckeditor.module#CkeditorModule' }
      ]
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
