import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { AuthService } from './auth.service';
import {OpenToastrService} from './open-toastr.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
    constructor(protected router: Router,
                protected toastrService: OpenToastrService,
                protected authService: AuthService) {}

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (!this.authService.IsAuthenticated) {
        this.toastrService.openToast('warning', '未登录', '账户未登录, 请先登录!');
        this.router.navigate(['/Account/Login']);
      }
      const url: string = state.url;
      return true;
    }

    public canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }
}
