import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTable1Component} from './data-table1.component';
import { DataTable1RoutingModule } from './data-table1.routing.module';
import { SharedUiModule } from '../../../shared/shared-ui.module';

@NgModule({
  imports: [
    CommonModule,
    DataTable1RoutingModule,
    SharedUiModule
  ],
  declarations: [DataTable1Component]
})
export class DataTable1Module { }
