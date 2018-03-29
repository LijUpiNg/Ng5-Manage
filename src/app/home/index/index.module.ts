import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index.routing.module';

import { SharedUiModule } from '../../shared/shared-ui.module';
import { IndexComponent } from './index.component';


@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule,
    SharedUiModule
  ],
  declarations: [
    IndexComponent
  ]
})
export class IndexModule { }

