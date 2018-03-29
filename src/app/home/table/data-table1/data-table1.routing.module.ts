import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTable1Component } from './data-table1.component';

const routes: Routes = [
  { path: '', component: DataTable1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataTable1RoutingModule { }

