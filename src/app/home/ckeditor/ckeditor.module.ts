import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CkeditorComponent} from './ckeditor.component';
import { CkeditorRoutingModule } from './ckeditor.routing.module';
import { SharedUiModule } from '../../shared/shared-ui.module';

@NgModule({
  imports: [
    CommonModule,
    CkeditorRoutingModule,
    SharedUiModule
  ],
  declarations: [CkeditorComponent]
})
export class CkeditorModule { }
