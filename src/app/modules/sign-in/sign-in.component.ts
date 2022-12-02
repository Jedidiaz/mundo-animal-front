import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { RegisterI } from 'src/app/Models/authentication/authmodel.interface';
import { UsersService } from 'src/app/modules/services/users/users.service';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor( private userservice: UsersService) { }

  ngOnInit(): void {
  }

  auth(inputUser: string, inputPass: string) {
    let form: RegisterI = { email: inputUser, password: inputPass, role: 'customer'};
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
