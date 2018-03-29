import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalendarRoutingModule} from './calendar.routing.module';
import {CalendarComponent} from './calendar.component';
import {SharedUiModule} from '../../../shared/shared-ui.module';

@NgModule({
  imports: [
    CommonModule,
    CalendarRoutingModule,
    SharedUiModule
  ],
  declarations: [CalendarComponent]
})
export class CalendarModule {
}
