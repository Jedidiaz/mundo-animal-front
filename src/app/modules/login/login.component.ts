import { Component, OnInit } from '@angular/core';
import { LoginI } from 'src/app/Models/authentication/authmodel.interface';
import { UsersService } from '../services/users/users.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  errorStatus: boolean = false;
  errorMsj!: string;

  checked: boolean = false;

  formLogin!: FormGroup;
  constructor(private loginService: UsersService, private router: Router, formBuilder: FormBuilder) {
    this.formLogin = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  onLogin(){
    let form:LoginI = {email: this.formLogin.value.email, password: this.formLogin.value.password}
    this.loginService.login(form).subscribe({
      next: (data)=> {
        localStorage.setItem('token', data.token_jwt)
        this.checked = true;
        window.location.href="";
      },error: (err)=> {
        this.errorStatus = true;
        this.errorMsj = "Contraseña y/o email invalido(s)";
      }
    })

  }

}
