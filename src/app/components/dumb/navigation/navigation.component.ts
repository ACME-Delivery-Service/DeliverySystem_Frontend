import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { filter } from 'rxjs/operators';
import { UserInterface } from '../../../interfaces/user-interface';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  public userInfo: UserInterface;

  constructor(private userService: UserService, private authService: AuthService, private router: Router) {
    this.userService.getUserInfo().pipe(filter((value: UserInterface) => !!value)).subscribe(
      (userInfo: UserInterface) => {
        this.userInfo = userInfo;
      }
    );
  }

  public logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
