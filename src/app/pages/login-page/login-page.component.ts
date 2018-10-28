import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(private backend: BackendService,
              private api: ApiService) {}

  ngOnInit() {
    this.backend.login(this.api.login);
  }

}
