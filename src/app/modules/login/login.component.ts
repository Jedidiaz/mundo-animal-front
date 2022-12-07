import { Component, OnInit } from '@angular/core';
import { LoginI } from 'src/app/Models/authentication/authmodel.interface';
import { UsersService } from '../services/users/users.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {


  errorStatus: boolean = false;
  errorMsj!: string;

  checked: boolean = false;

  formLogin!: FormGroup;
  constructor(private loginService: UsersService, private router: Router, formBuilder: FormBuilder, public messageService: MessageService) {
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
        this.showLogin();
        window.location.href="";
      },error: (err)=> {
        this.formLogin.reset();
        if (err.status ===  401){
          this.showConflit()
        }else{
        this.showError();
        }
      }
    })

  }

  showError() {
    this.messageService.add({severity:'error', summary: 'Error', detail: 'Contraseña y/o email invalido(s)'});
  }

  showConflit(){
    this.messageService.add({severity:'error', summary: 'Erroe', detail: 'Confirme su correo Electronico'});
  }

  showLogin(){
    this.messageService.add({severity:'success', summary: 'success', detail: 'Inicio de sesion con exito!'});
  }

}
