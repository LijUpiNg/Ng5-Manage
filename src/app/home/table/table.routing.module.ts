import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableComponent } from './table.component';

const routes: Routes = [
  { path: '', component: TableComponent,
    children: [
      {path: 'DataTable1', loadChildren: './data-table1/data-table1.module#DataTable1Module'},
      {path: 'DataTable2', loadChildren: './data-table2/data-table2.module#DataTable2Module'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }

