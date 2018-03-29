import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgxDatatableModule,
    NgbModule.forRoot()
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgxDatatableModule,
    NgbModule
  ]
})
export class SharedUiModule { }
