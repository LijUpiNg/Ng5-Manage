import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CkeditorComponent} from './ckeditor.component';

const routes: Routes = [
  { path: '', component: CkeditorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CkeditorRoutingModule { }

