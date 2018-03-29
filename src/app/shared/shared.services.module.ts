import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { AuthService } from './base-service/auth.service';
import { AccountStorage } from './storage/account.storage';
import { OpenToastrService } from './base-service/open-toastr.service';
import { AuthGuardService } from './base-service/auth-guard.service';
import { AppApiService } from './base-service/app-api.service';
import { DaterangepickerService } from './components/daterangepicker/range/daterangepicker.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedServicesModule,
      providers: [
        AuthService,
        AccountStorage,
        OpenToastrService,
        AuthGuardService,
        AppApiService,
        DaterangepickerService
      ]
    };
  }
}
