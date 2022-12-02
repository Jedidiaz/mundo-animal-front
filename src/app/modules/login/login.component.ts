import { Component, OnInit } from '@angular/core';
import { LoginI } from 'src/app/Models/authentication/authmodel.interface';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: UsersService) { }

  ngOnInit(): void {
  }

  onLogin(email: string, pass: string){
    let form:LoginI = {email: email, password: pass}
    this.loginService.login(form).subscribe({
      next: (data)=> {
        console.log(data)
      },error: (err)=> {console.log(err.statusText)}
    })
  }
}
