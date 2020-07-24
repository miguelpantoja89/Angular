import { Component, OnInit } from '@angular/core';
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string;
  constructor(public login2: LoginService) { }

  ngOnInit(): void {
    this.userName = this.login2.userName;
  }

  signIn() {
    this.login2.signIn();
  }

  signOut() {
    this.login2.signOut();
  }	  

  


  
}
