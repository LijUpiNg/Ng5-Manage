import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTable2Component } from './data-table2.component';

const routes: Routes = [
  { path: '', component: DataTable2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataTable2RoutingModule { }

