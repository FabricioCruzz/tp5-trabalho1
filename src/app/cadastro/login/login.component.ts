import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myUser : User = {} as User

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  doLogin(){
    this.authService.doLogin(this.myUser)
  }

}
