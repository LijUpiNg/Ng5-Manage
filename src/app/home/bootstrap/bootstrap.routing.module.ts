import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapComponent } from './bootstrap.component';

const routes: Routes = [
  { path: '', component: BootstrapComponent,
    children: [
      {path: 'Calendar', loadChildren: './calendar/calendar.module#CalendarModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BootstrapRoutingModule { }

