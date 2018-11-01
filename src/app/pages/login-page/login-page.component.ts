import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.authorize('j.doe@innopolis.ru', '12345678');
  }
}
