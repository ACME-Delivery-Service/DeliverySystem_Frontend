import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { filter } from 'rxjs/operators';
import { UserInterface } from '../../../interfaces/user-interface';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public userInfo: UserInterface;

  constructor(private userService: UserService) {
    this.userService.getUserInfo().pipe(filter((value: UserInterface) => !!value)).subscribe(
      (userInfo: UserInterface) => {
        this.userInfo = userInfo;
      }
    );
  }

  ngOnInit() {
  }

}
