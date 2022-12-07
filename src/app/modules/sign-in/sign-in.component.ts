import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TitleStrategy } from '@angular/router';
import { MessageService } from 'primeng/api';
import { RegisterI } from 'src/app/Models/authentication/authmodel.interface';
import { UsersService } from 'src/app/modules/services/users/users.service';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [MessageService]
})
export class SignInComponent implements OnInit {

  formRegister!: FormGroup;
  constructor( private userservice: UsersService, formBuilider: FormBuilder, public messageService: MessageService) {
    this.formRegister = formBuilider.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  auth() {
    let form: RegisterI = { email: this.formRegister.value.email, password: this.formRegister.value.password, role: 'customer'};
    this.userservice.register(form).subscribe({
      next: (data) => {
        console.log(data);
      }, error: (err) => {
        if (err.statusText == 'Conflict') {
          console.log('Email ya ha sido registrado')
        } else if (err.statusText == 'Bad Request') {
          console.log('Email invalido')
        }else{console.log(err)}
      }
    })
  }

  

}
