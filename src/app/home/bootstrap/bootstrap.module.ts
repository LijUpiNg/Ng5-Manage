import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BootstrapRoutingModule} from './bootstrap.routing.module';
import {BootstrapComponent} from './bootstrap.component';
import {SharedUiModule} from '../../shared/shared-ui.module';

@NgModule({
  imports: [
    CommonModule,
    BootstrapRoutingModule,
    SharedUiModule
  ],
  declarations: [BootstrapComponent]
})
export class BootstrapModule {
}
