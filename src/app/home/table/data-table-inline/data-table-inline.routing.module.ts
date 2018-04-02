import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTableInlineComponent } from './data-table-inline.component';

const routes: Routes = [
  { path: '', component: DataTableInlineComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataTableInlineRoutingModule { }

