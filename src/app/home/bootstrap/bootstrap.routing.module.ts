import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapComponent } from './bootstrap.component';

const routes: Routes = [
  { path: '', component: BootstrapComponent,
    children: [
      {path: 'Calendar', loadChildren: './calendar/calendar.module#CalendarModule'},
      {path: 'Input', loadChildren: './input/input.module#InputModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BootstrapRoutingModule { }

