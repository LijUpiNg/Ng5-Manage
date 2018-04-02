import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputRoutingModule} from './input.routing.module';
import {InputComponent} from './input.component';
import {SharedUiModule} from '../../../shared/shared-ui.module';

@NgModule({
  imports: [
    CommonModule,
    InputRoutingModule,
    SharedUiModule
  ],
  declarations: [InputComponent]
})
export class InputModule {
}
