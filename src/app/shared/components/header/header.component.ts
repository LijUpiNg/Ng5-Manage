import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../base-service/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public username: string = '';

  constructor(protected authService: AuthService) {
  }

  ngOnInit() {
      const account = this.authService.GetAccount();
      {
          this.username = account.username;
      }
  }

  public ToggleNavbar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle('push-right');
  }
}
