import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/base-service/auth.service';
import { OpenToastrService } from '../../shared/base-service/open-toastr.service';
import { AccountService } from '../../shared/manage-service/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ AccountService ]
})
export class LoginComponent implements OnInit {

  public username: string = 'test';
  public password: string = '123456';
  private user = {};
  public  loginTwoStep: boolean = false;
  constructor(protected router: Router,
              protected authService: AuthService,
              protected openToastrService: OpenToastrService) { }

  ngOnInit() {
  }

  doLogin(): void {
    this.user = {'username': this.username, 'password': this.password};

    if ( this.username ) {
      this.authService.Authenticate(this.username, '123456');
      this.loginTwoStep = true;
      this.router.navigate(['/']);
    }else {
      this.openToastrService.openToast('error', '登录出错', '登录信息未填写完整');
    }

  }
}
