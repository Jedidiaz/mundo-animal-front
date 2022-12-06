import { Component, OnInit } from '@angular/core';
import { LoginI } from 'src/app/Models/authentication/authmodel.interface';
import { UsersService } from '../services/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorStatus: boolean = false;
  errorMsj!: string;
  checked: boolean = false;
  constructor(private loginService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(email: string, pass: string){
    let form:LoginI = {email: email, password: pass}
    this.loginService.login(form).subscribe({
      next: (data)=> {
        let token = data.token_jwt;
        localStorage.setItem('token', token)
        this.checked = true;
        this.router.navigate([''])
      },error: (err)=> {
        this.errorStatus = true;
        this.errorMsj = "Contraseña y/o email invalido(s)";
      }
    })

  }
}
