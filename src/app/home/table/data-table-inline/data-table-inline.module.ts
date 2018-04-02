import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataTableInlineRoutingModule} from './data-table-inline.routing.module';
import {DataTableInlineComponent} from './data-table-inline.component';
import {SharedUiModule} from '../../../shared/shared-ui.module';

@NgModule({
  imports: [
    CommonModule,
    DataTableInlineRoutingModule,
    SharedUiModule
  ],
  declarations: [DataTableInlineComponent]
})
export class DataTableInlineModule {
}
