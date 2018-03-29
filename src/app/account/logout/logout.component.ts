import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/base-service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(protected authService: AuthService, protected router: Router) { }

  ngOnInit() {
    this.authService.SignOut();
    this.router.navigate(['/Account/Login']);
  }
}
