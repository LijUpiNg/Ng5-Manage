import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {HomeRoutingModule} from './home.routing.module';
import {SharedUiModule} from '../shared/shared-ui.module';
import {SharedComponentsModule} from '../shared/shared-compoents.module';
import {HeaderComponent} from '../shared/components/header/header.component';
import {SidebarComponent} from '../shared/components/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedUiModule,
    SharedComponentsModule
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    SidebarComponent
]
})
export class HomeModule { }
