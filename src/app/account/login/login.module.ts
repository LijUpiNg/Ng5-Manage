import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LoginComponent} from './login.component';
import {LoginRoutingModule} from './login.routing.module';
import { SharedUiModule } from '../../shared/shared-ui.module';
@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedUiModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
