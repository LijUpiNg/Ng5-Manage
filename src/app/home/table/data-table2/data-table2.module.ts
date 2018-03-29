import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataTable2RoutingModule} from './data-table2.routing.module';
import {DataTable2Component} from './data-table2.component';
import {SharedUiModule} from '../../../shared/shared-ui.module';

@NgModule({
  imports: [
    CommonModule,
    DataTable2RoutingModule,
    SharedUiModule
  ],
  declarations: [DataTable2Component]
})
export class DataTable2Module {
}
