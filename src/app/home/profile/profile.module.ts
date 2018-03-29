import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent} from './profile.component';
import { ProfileRoutingModule } from './profile.routing.module';
import { SharedUiModule } from '../../shared/shared-ui.module';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedUiModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
